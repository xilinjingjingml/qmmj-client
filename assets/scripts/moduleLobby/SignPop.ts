import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import { MsgBox, iMessageBox, showAwardResultPop, playAD, czcEvent, socialShare,share,createScreenShotNode, getHttpSpriteFrame } from "../base/BaseFuncTs";
import { getADConfig, getADAward } from "./LobbyFunc";
import { setMaxListeners } from "cluster";
import { IsJSON } from "../base/BaseFunc";
import { isWeChatGame, isAndroidGame } from "../gameConfig";
import WxWrapper from "../base/WxWrapper";
import md5 = require("../base/extensions/md5.min")

const {ccclass, property} = cc._decorator;

const AD_AREA = 1

@ccclass
export default class SignPop extends BaseScene {

    curMonth: number = 1
    curDay: number = 1

    signInfo = null

    adType: number = -1;
    adCount: number = -1;

    todayIsSign: boolean = false

    isDoubleSign = false

    shareSucces: boolean = false

    onOpenScene() {
        czcEvent("大厅", "每日签到1", "打开每日签到界面")
        this.socketName = "lobby"

        this.addListener("PluginSocialCallBack", this.PluginSocialCallBack.bind(this))
        
        this.mahjong_cl_get_user_accumulate_signin_days_req()

        let time = new Date()
        this.curMonth = time.getMonth() + 1
        this.curDay = time.getDate()

        cc.find("nodePop/tip_bg/accumulate_day_bg/curMonth", this.node).getComponent(cc.Label).string = this.curMonth
        // cc.find("nodePop/tip_bg/accumulate_day_bg/labelAccumulateDay", this.node).getComponent(cc.Label).string = this.curDay
                
        cc.find("nodePop/btnDoubleAward", this.node).getComponent(cc.Button).interactable = false
        cc.find("nodePop/btnShareAward", this.node).getComponent(cc.Button).interactable = false

        if(isWeChatGame()){
            cc.find("nodePop/btnDoubleAward", this.node).active = false
            cc.find("nodePop/btnShareAward", this.node).active = true
        }
        else{
            cc.find("nodePop/btnDoubleAward", this.node).active = true
            cc.find("nodePop/btnShareAward", this.node).active = false
        }

        if (null == DataManager.CommonData["adConfig"])
            getADConfig(this.updateDoubleState.bind(this))
        else
            this.updateDoubleState()

        DataManager.saveKeyWithDate(DataManager.UserData.guid + "SignPop")
    }

    onCloseScene() {

    }
    
    mahjong_cl_get_user_accumulate_signin_days_req(){
        czcEvent("大厅", "每日签到2", "获取签到配置")
        this.sendMessage({opcode: 'mahjong_cl_get_user_accumulate_signin_days_req'})
    }
    
    mahjong_lc_get_user_accumulate_signin_days_ack(message) {
        message = message["packet"]
        DataManager.CommonData["signinInfo"] = message["signinInfo"]
        this.signInfo = message["signinInfo"]
        let info = message["signinInfo"]["signinAward"]
        let nodes = this.node.getChildByName("nodePop")
        
        let signDays = message["signinInfo"]["signinDays"]
        this.todayIsSign = false
        for (const key in signDays) {
            if (signDays[key] == 2 && parseInt(key.toString()) == this.curDay - 1 ) {
                this.todayIsSign = true
                // nodes.getChildByName("btnNormalAward").getComponent(cc.Button).interactable = false
                // nodes.getChildByName("btnDoubleAward").getComponent(cc.Button).interactable = false
            }
        }

        if (info["today"] >= 7) {
            info["today"] %= 7
            if (info["today"] == 0 && this.todayIsSign)
                info["today"] = 7
        }

        let idx = 1

        let accdays = info["accumulateDays"]
        for (const accDay of info["accSigninAward"]) {
            let days = nodes.getChildByName("signDays" + idx)
            if (null == days)
                break

            let awards = JSON.parse(accDay["awardStrings"])
            awards = awards["award_info"]
            days.getChildByName("labelAward").getComponent(cc.Label).string = awards[0]["award_num"]
            days.getChildByName("nodeFinish").getChildByName("labelAward").getComponent(cc.Label).string = awards[0]["award_num"]
            
            if (awards[0]["award_index"] == 0){
                days.getChildByName("goldbean").active = true
                days.getChildByName("qtt_string").active = false
            }
            else if (awards[0]["award_index"] == 365){
                // days.getChildByName("redpacket_icon").active = true
                // days.getChildByName("redpacket_string").active = true
            }
            else if (awards[0]["award_index"] == 367){
                days.getChildByName("qttgold").active = true
                days.getChildByName("qtt_string").active = true
            }
            

            days.getChildByName("nodeFinish").active = accDay["days"] <= accdays

            if (accDay["days"] <= accdays) {
                let node_signed_all = cc.find("nodePop/node_signed_all", this.node)
                if (accdays==1) {
                    node_signed_all.setContentSize(115,29)
                } else if (accdays==3) {
                    node_signed_all.setContentSize(240,29)
                } else if (accdays==7) {
                    node_signed_all.setContentSize(364,29)
                } else if (accdays==15) {
                    node_signed_all.setContentSize(489,29)
                } else if (accdays==28) {
                    node_signed_all.setContentSize(614,29)
                }
            }
    
            idx ++
        }

        cc.find("nodePop/tip_bg/accumulate_day_bg/labelAccumulateDay", this.node).getComponent(cc.Label).string = accdays

        idx = 1
        for (const conDay of info["conSigninAward"]) {
            let days = nodes.getChildByName("day" + idx)

            let awards = JSON.parse(conDay.awardStrings)
            if (DataManager.Instance.isTesting)
                console.log(awards)
            awards = awards["award_info"]
            if (idx != 7) {
                days.getChildByName("labelGold").getComponent(cc.Label).string = awards[0]["award_num"]
                if (awards[0]["award_index"] == 0)
                    days.getChildByName("goldbean").active = true
                else if (awards[0]["award_index"] == 365)
                    days.getChildByName("redpacket_icon").active = true
                else if (awards[0]["award_index"] == 367)
                    days.getChildByName("qttgold").active = true
            }

            days.getChildByName("nodeFinish").active = conDay["days"] <= info["today"]
            days.getChildByName("sign_today").active = conDay["days"] - 1 == info["today"] && !this.todayIsSign
                                    
            idx ++
        }

        this.updateDoubleState()
    }


    mahjong_cl_set_user_accumulate_signin_days_req() {
        czcEvent("大厅", "每日签到3", "请求进行签到")
        let socketMsg = {opcode: 'mahjong_cl_set_user_accumulate_signin_days_req', day: this.curDay};
        this.sendMessage(socketMsg)
    }

    mahjong_lc_set_user_accumulate_signin_days_ack(message) {

        // mahjong_lc_set_user_accumulate_signin_days_ack {ret: 0, day: 1, continuousDays: 1, accumulatyeDays: 1, money: 0}

        message = message["packet"];
        if (DataManager.Instance.isTesting)
            console.log(message,5)
        if (message["ret"] == 0){
            czcEvent("大厅", "每日签到4", "签到成功")
            if (message["day"] == this.curDay) {
                let time = new Date()
                DataManager.Instance["QianDaoTime"] = time.getFullYear() + "" + time.getMonth() + "" + time.getDate()
                let today = this.signInfo["signinAward"]["today"] + 1
                this.showGetRewards(today, this.signInfo["signinAward"]["accumulateDays"] + 1)
            }
            else{
                this.showGetRewards(0, this.signInfo["signinAward"]["accumulateDays"] + 1)
            }

            this.mahjong_cl_get_user_accumulate_signin_days_req()
            this.mahjong_cl_get_user_accumulate_signin_award_req(message["continuousDays"], message["accumulatyeDays"])
        }
        else if (message.ret == -1){
            czcEvent("大厅", "每日签到4", "签到失败")
            let initParam = {
                title: "提示",
                content: "已签到",
                buttonNum: 1,
                confirmClose: true,
            }
            MsgBox(initParam)
        }
        else{
            czcEvent("大厅", "每日签到4", "签到失败")
        }
    }

    mahjong_cl_get_user_accumulate_signin_award_req(conDay, accDays) {
        czcEvent("大厅", "每日签到5", "获取签到奖励")
        let socketMsg = {
            opcode: 'mahjong_cl_get_user_accumulate_signin_award_req',
            continupusDays: conDay,
            accumulateDays: accDays
        }
       this.sendMessage(socketMsg);
    }

    getSignAwards(accumulateDays, continupusDays, isDouble) : any[]{
        let awards = []
        let conaward: string = null
        for (const iterator of this.signInfo["signinAward"]["accSigninAward"]) {
            if (iterator.days == accumulateDays) {
                conaward = iterator.awardStrings
                break;
            }
        }
        continupusDays = (continupusDays - 1) % 7
        let accaward = this.signInfo["signinAward"]["conSigninAward"][continupusDays]["awardStrings"]
        if (IsJSON(conaward)) {
            conaward = JSON.parse(conaward)
            conaward = conaward["award_info"]        
            for (const iterator of conaward) {
                awards.push({
                    index: iterator["award_index"],
                    num: iterator["award_num"]
                })
            }
        }
        accaward = JSON.parse(accaward)
        accaward = accaward["award_info"]
        for (const iterator of accaward) {
            let bFind = false;
            for (const key in awards) {
                if (awards[key].index == iterator["award_index"]) {
                    bFind = true
                    awards[key].num += isDouble ? iterator["award_num"] * 2 : iterator["award_num"]
                    break;
                }
            }
            if (false == bFind) {
                awards.push({
                    index: iterator["award_index"],
                    num: isDouble ? iterator["award_num"] * 2 : iterator["award_num"]
                })
            }
        }
        return awards
    }

    mahjong_lc_get_user_accumulate_signin_award_ack(message) {
        message = message.packet

        // if (message.ret == 0){
            let awards = this.getSignAwards(message.accumulateDays, message.continupusDays, this.isDoubleSign)
            let self = this
            let signFinish = function() {
                showAwardResultPop(awards, {goGame: true == DataManager.load(DataManager.UserData.guid + "signTeach")}, () => {
                        self.closeSelf()
                })
            }

            if (this.isDoubleSign) {
                czcEvent("大厅", "每日签到6", "领取双倍奖励请求")
                getADAward(AD_AREA, () => {                
                    czcEvent("大厅", "每日签到7", "领取双倍奖励成功")
                    if (DataManager.CommonData["adCnt"] == "") 
                        DataManager.CommonData["adCnt"] = []

                    let cnt = {
                        ua_ad_type_id: AD_AREA,
                        ca_ad_type: 1,
                    }
                    
                    DataManager.CommonData["adCnt"].push(cnt)
                    signFinish()
                },
                () => {
                    czcEvent("大厅", "每日签到7", "领取双倍奖励失败")
                },
                message.continupusDays,
                )
            }
            else{
                signFinish()
            }
        // }        
    }

    showGetRewards(day, days) {
        // 更新签到状态
        let nodes = this.node.getChildByName("nodePop") 
        let info = this.signInfo["signinAward"]

        let idx = 1
        let accDay = info["conSigninAward"]
        accDay = nodes.getChildByName("day" + day)

        accDay.getChildByName("nodeFinish").active = true

        // 领取按钮
        nodes.getChildByName("btnNormalAward").getComponent(cc.Button).interactable = false
        // nodes.getChildByName("btnDoubleAward").getComponent(cc.Button).interactable = false
        this.updateDoubleState();

        // 累积签到
        info["accumulateDays"] = days
        cc.find("tip_bg/accumulate_day_bg/labelAccumulateDay", nodes).getComponent(cc.Label).string = days

    }

    updateDoubleState() {
        if (null == DataManager.CommonData["adCnt"])
            DataManager.CommonData["adCnt"] = []
        

        // 每日签到只能配置一次 所以写死了一次 by Sonke20190704
        this.adCount = 1
        for (const iterator of DataManager.CommonData["adCnt"]) {
            if (iterator["ua_ad_type_id"] == AD_AREA){                
                this.adCount = (1 - iterator["ua_ad_times"])
            }
        }

        cc.find("nodePop/btnDoubleAward", this.node).getComponent(cc.Button).interactable = this.adCount > 0 && !this.todayIsSign
        cc.find("nodePop/btnShareAward", this.node).getComponent(cc.Button).interactable = this.adCount > 0 && !this.todayIsSign
        cc.find("nodePop/btnNormalAward", this.node).getComponent(cc.Button).interactable = this.adCount > 0 && !this.todayIsSign
        cc.find("nodePop/btnNormalAward", this.node).active = !this.todayIsSign
        cc.find("nodePop/btnSignOff", this.node).active = this.todayIsSign

        if (DataManager.CommonData["morrow"] == 0) {
            cc.find("nodePop/btnNormalAward", this.node).active = false
            cc.find("nodePop/btnDoubleAward", this.node).active = false
            cc.find("nodePop/btnShareAward", this.node).active = false

            cc.find("nodePop/btnFirstDay", this.node).getComponent(cc.Button).interactable = !this.todayIsSign
            cc.find("nodePop/btnFirstDay", this.node).active = true            
        }
    }

    onGetAward() {
        this.mahjong_cl_set_user_accumulate_signin_days_req()
    }

    onGetDoubleAward() {
        if (this.adCount <= 0){
            czcEvent("大厅", "每日签到3", "提示已领取双倍签到")
            iMessageBox("您领取过今天的双倍奖励了, 请明天再尝试")
            return 
        }

        let self = this
        playAD(DataManager.AdsConfig.video.SignPop, () => {
            this.isDoubleSign = true
            self.mahjong_cl_set_user_accumulate_signin_days_req()
        })
    }

    onGetShareAward() {
        if (this.adCount <= 0){
            czcEvent("大厅", "每日签到3", "提示已领取双倍签到")
            iMessageBox("您领取过今天的双倍奖励了, 请明天再尝试")
            return 
        }
        
        if (isWeChatGame()){
            socialShare({
                withOpenId:true,
                callback : () => {
                    this.isDoubleSign = true
                    this.mahjong_cl_set_user_accumulate_signin_days_req()
                }
            })
        } else if(isAndroidGame()){
            const sharedData = DataManager.Instance.sharedData
            if (!sharedData) {
                iMessageBox("暂不支持分享")
                return
            }
            DataManager.CommonData["shareType"] = "SignPop"

            console.log('[FreeDrawPop.onPressShare] sdType', sharedData.sdType)
            /*if (sharedData.sdType == 0) {
                shareUrl()
                return
            }*/

            const filepath = jsb.fileUtils.getWritablePath() + 'share_bg_code_' + md5(sharedData.sdPic + sharedData.sdCodePic) + '.png'
            const shareFile = () => {
                share({ ShareWay: 'WeiXin', ShareType: '2', SharedImg: 'file://' + filepath })
            }
            console.log('[FreeDrawPop.onPressShare] shareFile', filepath)
            if (jsb.fileUtils.isFileExist(filepath)) {
                shareFile()
                return
            }

            // cc.find("nodeTop/btnShare", this.node).getComponent(cc.Button).interactable = false

            const node = new cc.Node()
            node.addComponent(cc.Sprite)
            node.active = false
            this.node.addChild(node)
            const code = new cc.Node()
            code.y = -353
            code.addComponent(cc.Sprite)
            node.addChild(code)

            getHttpSpriteFrame(sharedData.sdPic, (spriteFrame: cc.SpriteFrame) => {
                if (!node.isValid) {
                    return
                }
                node.addComponent(cc.Sprite).spriteFrame = spriteFrame
                node.width = spriteFrame.getTexture().width
                node.height = spriteFrame.getTexture().height

                getHttpSpriteFrame(sharedData.sdCodePic, (spriteFrame: cc.SpriteFrame) => {
                    if (!node.isValid) {
                        return
                    }
                    code.addComponent(cc.Sprite).spriteFrame = spriteFrame

                    node.active = true
                    createScreenShotNode(node, filepath)
                    shareFile()
                    node.removeFromParent()

                    // cc.find("nodeTop/btnShare", this.node).getComponent(cc.Button).interactable = true
                })
            })
        }
    }

    PluginSocialCallBack(event) {
        let message = event.packet
        console.log("[PluginSocialCallBack] data:",message)
        let sharedData = JSON.parse(message)
        if(sharedData.ShareResultCode == 0 && this.shareSucces==false && DataManager.CommonData["shareType"] == "SignPop"){
            DataManager.CommonData["shareType"] = ""
            this.shareSucces = true
            this.isDoubleSign = true
            this.mahjong_cl_set_user_accumulate_signin_days_req()
        }
    }
}
