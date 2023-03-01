import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import BaseFunc = require("../base/BaseFunc")
import { MsgBox, iMessageBox, showAwardResultPop, numberFormat, czcEvent } from "../base/BaseFuncTs";
import { getNewUserSignAward } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewUserSignHBPop extends BaseScene {

    curDay: number = -1
    curState: number = 3

    onOpenScene() {
        czcEvent("大厅", "新人签到1", "打开新人签到界面 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        let redpacket = cc.find("nodePop/top_menu_bg/redpacket_bg/labelLedpacket", this.node)
        if (null != redpacket)
            redpacket.getComponent(cc.Label).string = numberFormat(DataManager.UserData.getItemNum(365))

        if (null == DataManager.CommonData["NewUserSgin"] || 0 == DataManager.CommonData["NewUserSgin"].length)
            getNewUserSignAward(this.initSignRows.bind(this))
        else
            this.initSignRows()

        DataManager.saveKeyWithDate(DataManager.UserData.guid + "newUserSign")

        // cc.find("nodePop/btnClose", this.node).active = DataManager.loadKeyWithDate("newUserSingOpen") == true || DataManager.CommonData["morrow"] != 0
        DataManager.CommonData[DataManager.UserData.guid + "newUserSign"] = true
    }

    onCloseScene() {
        czcEvent("大厅", "新人签到4", "关闭新人签到界面 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        // this.initParam["closeFun"] && this.initParam["closeFun"]()
    }

    initSignRows() {
        if (null == DataManager.CommonData["NewUserSgin"]["rows"]) 
            return

        console.log("initSignRows NewUserSgin = ",DataManager.CommonData["NewUserSgin"] )
        // let btnGet = this.node.getChildByName("btnGetAward").getComponent(cc.Button)
        let btnGet = cc.find("nodePop/btnGetAward", this.node).getComponent(cc.Button)
        btnGet.interactable = false

        let nodes = cc.find("nodePop/nodeSign/view/content", this.node)
        let x = -480 - (DataManager.CommonData["NewUserSgin"]["day"] - 1) * 170 
        x = x < -720 ? -720 : x
        // nodes.position = cc.v2(x, 0)
        let idx = 1
        if (DataManager.Instance.isTesting)
            console.log(DataManager.CommonData["NewUserSgin"])
        for (const iterator of DataManager.CommonData["NewUserSgin"]["rows"]) {
            
            let day = nodes.getChildByName("nodeDue" + idx)

            let curDay = day.getChildByName("curDay")
            let label1 = curDay.getChildByName("labelLightNum").getComponent(cc.Label)
            label1.string = iterator["itemCount"]
            let label2 = day.getChildByName("labelGrayNum").getComponent(cc.Label)
            label2.string = iterator["itemCount"]

            if (iterator["itemIndex"] == 367) {
                // day.getChildByName("passDue").getComponent(cc.Sprite).spriteFrame = grayqttbg.spriteFrame
                // day.getChildByName("oldDay").getComponent(cc.Sprite).spriteFrame = qttbg.spriteFrame
                // day.getChildByName("curDay").getComponent(cc.Sprite).spriteFrame = qttbg.spriteFrame
                // day.getChildByName("tormDay").getComponent(cc.Sprite).spriteFrame = qttbg.spriteFrame
                // day.getChildByName("futureDue").getComponent(cc.Sprite).spriteFrame = qttbg.spriteFrame               
                // day.getChildByName("light_bg").getComponent(cc.Sprite).spriteFrame = qttbg.spriteFrame               
            }

            // 0：可领取 1：已领取 2：已过期 3：未达条件
            let code = iterator["code"]
            day.getChildByName("curDay").active = DataManager.CommonData["NewUserSgin"]["day"] == iterator["day"]
            if (code == 0 || code == 3){                
                // day.getChildByName("futureDue").active = DataManager.CommonData["NewUserSgin"]["day"] != iterator["day"]
                // day.getChildByName("tormDay").active = (DataManager.CommonData["NewUserSgin"]["day"] + 1) == iterator["day"]
                day.getChildByName("passDue").active = false
                day.getChildByName("oldDay").active = false
                label1.node.active = true
                // label2.node.active = false
            }
            else if (code == 1) {
                day.getChildByName("curDay").active = false
                day.getChildByName("passDue").active = false
                day.getChildByName("oldDay").active = true
                label1.node.active = true
                label2.node.active = false
            }
            else if (code == 2) {
                day.getChildByName("curDay").active = false
                day.getChildByName("passDue").active = true
                day.getChildByName("oldDay").active = false
                label1.node.active = false
                label2.node.active = true
            }
            
            if (DataManager.CommonData["NewUserSgin"]["day"] == iterator["day"]) {
                cc.find("nodePop/labelCountdown", this.node).getComponent(cc.Label).string = DataManager.CommonData["NewUserSgin"]["day"] + "/7"
                if (code == 0 || code == 3) {
                    btnGet.interactable = true
                    cc.find("nodePop/labelCountdown", this.node).getComponent(cc.Label).string = (DataManager.CommonData["NewUserSgin"]["day"] - 1) + "/7"
                }

                this.curState = code

                let progress = cc.find("nodePop/gamesProgress", this.node)
                if (0 == iterator["gameCount"]) {
                    cc.find("nodePop/tips", this.node).active = false
                    progress.active = false
                }
                else {
                    cc.find("nodePop/tips", this.node).active = true
                    progress.active = true

                    //let str = "<color=#874612>今日目标:在0.3元场(初级场)玩够</c><color=#FF7F00>30</color><color=#874612>局</c>"
                    let limitType = iterator["limitType"]
                    let gameCount = iterator["gameCount"]// + "局"
                    if (limitType == "0")
                        gameCount = "<color=#874612>今日目标:在任意场次玩够</c><color=#FF7F00>" + gameCount + "</color><color=#874612>局</c>"
                    else if (limitType.indexOf("010") != -1)
                        gameCount = "<color=#874612>今日目标:在0.3元场(初级场)玩够</c><color=#FF7F00>" + gameCount + "</color><color=#874612>局</c>"
                    else if (limitType.indexOf("020") != -1)
                        gameCount = "<color=#874612>今日目标:在2元场(中级场)玩够</c><color=#FF7F00>" + gameCount + "</color><color=#874612>局</c>"
                    else if (limitType.indexOf("030") != -1)
                        gameCount = "<color=#874612>今日目标:在50元场(高级场)玩够</c><color=#FF7F00>" + gameCount + "</color><color=#874612>局</c>"
                        
                    
                    cc.find("nodePop/tips", this.node).getComponent(cc.RichText).string = gameCount
                    
                    progress.getComponent(cc.ProgressBar).progress = iterator["completedCount"] / iterator["gameCount"]
                
                    let label3 = progress.getChildByName("labelProgress").getComponent(cc.Label)
                    label3.string = iterator["completedCount"] + "/" + iterator["gameCount"]//"当前进度:" + 
                }

                this.curDay = idx
            }
            idx ++
        }
        if (DataManager.CommonData["morrow"] == 0 && btnGet.interactable == true && DataManager.CommonData["NewUserSgin"]["day"] == 1)
            this.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(() => this.getAward())))
    }

    getAward() {
        czcEvent("大厅", "新人签到2", "请求领取奖励 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        if (this.curState == 3) {
            iMessageBox("今日奖励需要完成试玩任务后领取")
            czcEvent("大厅", "新人签到3", "领取奖励失败 局数不足条件 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            return
        }

        let url = DataManager.getURL("GET_NEW_REGISTER_CHECK_AWARD")
        // url = "https://t-statics.weipinggame.com/get/new/register/check/award?uid={uid}&gameid={gameid}&ticket={ticket}&pn={pn}"
        let param = {
           uid: DataManager.UserData.guid,
           gameid: 389,//DataManager.Instance.gameId,
           ticket: DataManager.UserData.ticket,
           pn: DataManager.Instance.packetName
        }

        let self = this
        BaseFunc.HTTPGetRequest(url, param, function(msg) { 
            if (msg.ret == 0) {
                czcEvent("大厅", "新人签到3", "领取奖励成功 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                DataManager.CommonData["NewUserSgin"]["rows"][self.curDay - 1]["code"] = 1
                self.initSignRows()
                // iMessageBox("领取成功", function() { SceneManager.Instance.closeScene("NewUserSignPop")} )
                let award = DataManager.CommonData["NewUserSgin"]["rows"][self.curDay - 1]
                let awards = []
                awards[0] = {
                    index: award["itemIndex"],
                    num: award["itemCount"],
                }
                let num = 0
                for (let key = self.curDay; key < DataManager.CommonData["NewUserSgin"]["rows"].length; key++) {
                    let award = DataManager.CommonData["NewUserSgin"]["rows"][key]
                    if (award["itemIndex"] == 367)
                        num += award["itemCount"]
                }
                let msg = num == 0 ? "" : "<color=#ffffff>您还有</color><color=#f9f900> " + numberFormat(num, 1) + " </color><color=#ffffff>趣金币未领取, 记得明日再来领取哦~</color>"                
                let param = {
                    msg: msg, 
                        goGame: false,//DataManager.CommonData["morrow"] <= 2, 
                        mustBeGame: false,//DataManager.CommonData["morrow"] <= 2 
                }
                showAwardResultPop(awards, param, () => {
                        self.initParam["closeCallback"] = null
                    self.closeSelf()
                })
            }
            else{
                czcEvent("大厅", "新人签到3", "领取奖励失败 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            }
        })
    }
}
