import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import SceneManager from "../base/baseScene/SceneManager";
import { iMessageBox, enterGame, checkServerMoneyLimit, showTrumpet, MsgBox, numberFormat, unenoughGold, checkFirstBox, showAwardResultPop, czcEvent, oncePayBox, getLowMoneyRoom, getShopBox, getNewBieServer, playAD, PostInfomation, showTokenGrowPop, share, createScreenShotNode, getHttpSpriteFrame, ReliefPop, getPrivateInviteInfo } from "../base/BaseFuncTs";
import { getMobileState, getQttCoin, getNewUserSignAward, getServerList, getADConfig, initAdConfig, getADAward, sendReloadUserData, check03ExchangeGoods, getExchangeConfig,loadPromoterInfo, loadPyramidSpreadInfo, shareUrl, checkADNum, getPrivateGameDataList } from "./LobbyFunc";
import BaseTrigger from "../base/extensions/Trigger/BaseTrigger";
import NetManager from "../base/baseNet/NetManager";
import proto = require("../moduleLobby/proto/lobbyproto")
import opcodeConfig from "./proto/opcode";
import GameManager from "../base/GameManager";
import WebSocketWrapper from "../base/baseNet/WebSocketWrapper";
import { getGameConfig, isSmallGame, getGameModules, isAndroidGame } from "../gameConfig";
import { isWeChatGame } from "../gameConfig";
import WxWrapper from "../base/WxWrapper";
import { socialShare, checkOneYuanBox, checkGameServer } from "../base/BaseFuncTs";
import md5 = require("../base/extensions/md5.min")
import BaseFunc = require("../base/BaseFunc");
import AdsConfig from "../base/baseData/AdsConfig";
const {ccclass, property} = cc._decorator;

const AD_AREA = 5

enum ViewType {
    Normal,
    GameServer,
    MiniGame,
    MoreGame,
    MoreGameServer,
}

@ccclass
export default class LobbyScene extends BaseScene {

    _isLogin: boolean = false

    _bInit: boolean = false
    shareSucces: boolean = false
    curViewType: ViewType = ViewType.Normal

    onLoad() {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this)
    }

    onAfterDraw() {
        if (!this.isValid) { return }
        GameManager.hideFace()
    }

    onOpenScene() {
        console.log("onOpenScene morrow = " + DataManager.CommonData["morrow"] )
        czcEvent("大厅", "登录9", "进入大厅 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))

        this.socketName = "lobby"

        let qtt = cc.find("nodePlayer/nodeCurrency/qttCoin/coinlabel", this.node)
        if (null != qtt) {
            let point = qtt.parent.convertToWorldSpaceAR(qtt.position)
            point.x = point.x > 10000 ? point.x - 10000 : point.x
            point.y = point.y > 10000 ? point.y - 10000 : point.y
            DataManager.CommonData["QttPoint"] = point
        }
        
        this.addListener("updateUserData", this.updateUserInfo.bind(this))
        this.addListener("PluginSocialCallBack", this.PluginSocialCallBack.bind(this))
        
        this.updateUserInfo()

        loadPromoterInfo()

        // this.updateNewUserSign()

        if (DataManager.Instance.packetName == "com.union.qmmj.wechat") {
            cc.find("nodeMain/redpacketGuide", this.node).active = false
            cc.find("nodeMain/girl", this.node).active = true
        }

        if (null == DataManager.CommonData["adConfig"])
            getADConfig(initAdConfig.bind(this))
        else
            initAdConfig()
        
        this.checkFreeDrawCanDraw()
        if (DataManager.CommonData["morrow"] == 0) {
            let mainGame = cc.find("nodeMain/ermjEntrance", this.node)

            if (null != mainGame)
                mainGame.getChildByName("fingerAni").active = true
        }

        // this.getSideBtn("btnOneYuan").active = (null != DataManager.Instance.OneYuanBoxs && DataManager.Instance.OneYuanBoxs.length > 0)
    
        showTrumpet()

        getExchangeConfig()

        if (!DataManager.loadKeyWithDate(DataManager.UserData.guid + "newUserSignPop")){
            DataManager.saveKeyWithDate(DataManager.UserData.guid + "newUserSignPop")
        }
        else if (!DataManager.loadKeyWithDate(DataManager.UserData.guid + "SignPop")){
            DataManager.saveKeyWithDate(DataManager.UserData.guid + "SignPop")
            this.onPressOneYuanActviePop()
        }

        let self = this
        getShopBox(2, () => {
            // self.getSideBtn("btnOneYuan").active = (null != DataManager.Instance.OneYuanBoxs && DataManager.Instance.OneYuanBoxs.length > 0)
        })

        if(DataManager.CommonData["morrow"] <= 7){
            if(isWeChatGame() || isAndroidGame()){            
                cc.find("nodeRight/btnNewGiftHB", this.node).active = true
            }else{
                cc.find("nodeRight/btnNewGiftHB", this.node).active = false
            }
        }else{
            cc.find("nodeRight/btnNewGiftHB", this.node).active = false
        }

        if (DataManager.CommonData["AllowPayment"] == false) {
            cc.find("nodeBottom/menus/btnVip", this.node).active = false
            cc.find("nodeBottom/menus/btnShop", this.node).active = false
            cc.find("nodePlayer/nodeVIp", this.node).active = false
            cc.find("nodePlayer/nodeCurrency/goldbean/btnShop", this.node).active = false
            this.getSideBtn("btnSixBox").active = false
            this.getSideBtn("btnOneYuan").active = false
        }

        if(isWeChatGame() || isAndroidGame()){
            if (DataManager.CommonData["NewUserSgin"].day <= 7) {
                cc.find("nodeRight/btnNewGiftHB", this.node).active = true
            } else {
                cc.find("nodeRight/btnNewGiftHB", this.node).active = false
            }
            // this.getSideBtn("btnInvite").active = true
        }
        if (isAndroidGame())
        {
            cc.find("nodeTop/menus/btnShare", this.node).active = true
        }
        // getNewUserSignAward()
        
        if (DataManager.Instance.MonthBoxs.length > 0) {
            cc.find("nodeRight/btnMonthCard", this.node).active = true            
        }

        this.updateServerStatus()

        // 实名认证 继续游戏
        if (DataManager.CommonData["roleCfg"].isBinding != 1) {
            if (DataManager.Instance.onlineParam.idvalidLv == 1) {
                SceneManager.Instance.popScene<String>("moduleLobby", "AutonymPop", { canClose: true, content: "亲爱的用户，根据青少防沉迷系统的要求，请完成认证" })
                return
            } else if (DataManager.Instance.onlineParam.idvalidLv == 2) {
                SceneManager.Instance.popScene<String>("moduleLobby", "AutonymPop", { canClose: false, content: "亲爱的用户，根据青少防沉迷系统的要求，请完成认证" })
                return
            }
        }

        if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
        } else {
            let btnOneYuanActive = cc.find("nodeRight/btnOneYuanActive", this.node)
            btnOneYuanActive.active = true
        }

        
        this.initSelectGameScrollView()
        this.node.getChildByName("nodePlayer").position = cc.v2(-cc.winSize.width / 2, cc.winSize.height / 2)

        getPrivateGameDataList(0)
    }

    updateServerStatus(){
        DataManager.save(DataManager.UserData.guid + "lastGameId", 391)
        if (DataManager.CommonData["bFirst"]) {//新人首次进大厅自动入桌游戏
            DataManager.CommonData["bFirst"] = false
            this.onPressFastStart()
        } else {//判断签到是否弹窗显示
            this.mahjong_cl_get_user_accumulate_signin_days_req()
        }
    }

    mahjong_cl_get_user_accumulate_signin_days_req(){
        this.sendMessage({opcode: 'mahjong_cl_get_user_accumulate_signin_days_req'})
    }

    mahjong_lc_get_user_accumulate_signin_days_ack(message) {
        message = message["packet"]
        
        let time = new Date()
        let curDay = time.getDate()
        let signDays = message["signinInfo"]["signinDays"]
        let todayIsSign = false
        for (const key in signDays) {
            if (signDays[key] == 2 && parseInt(key.toString()) == curDay - 1 ) {
                todayIsSign = true
            }
        }

        let func = () => {
            if (null == DataManager.CommonData[DataManager.UserData.guid + "ActivePop"]) {
                DataManager.CommonData[DataManager.UserData.guid + "ActivePop"] = true
                SceneManager.Instance.popScene("moduleLobby", "ActivePop")
            }
        }

        if (!todayIsSign) {//今日未签到时显示
            this.getSignAward(func)
        }else{
            func()
        }
    }

    onCloseScene() {

    }

    updateNewUserSign() {
        let now = new Date().getTime() / 1000
        // console.log(DataManager.loadKeyWithDate(DataManager.UserData.guid + "ActivePop"))
        if (!DataManager.loadKeyWithDate(DataManager.UserData.guid + "ActivePop") && DataManager.CommonData["morrow"] == 0 && now >= 1565107200 && now <= 1565539200){
            SceneManager.Instance.popScene("moduleLobby", "ActivePop", {closeCallback: this.getNewUserSignAward.bind(this)})
            DataManager.saveKeyWithDate(DataManager.UserData.guid + "ActivePop")
        }
        else{
            this.getNewUserSignAward();
        }
    }

    updateUserInfo() {
        let nickname = cc.find("nodePlayer/nodeName/nickname", this.node)
        if (null != nickname)
            nickname.getComponent(cc.Label).string = DataManager.UserData.nickname

        let goldbean = cc.find("nodePlayer/nodeCurrency/goldbean/goldlabel", this.node)
        if (null != goldbean)
            goldbean.getComponent(cc.Label).string = numberFormat(DataManager.UserData.money)

        let coin = DataManager.UserData.getItemNum(367)

        let qttcoin = cc.find("nodePlayer/nodeCurrency/qttCoin/coinlabel", this.node)
        if (null != qttcoin)
            qttcoin.getComponent(cc.Label).string = numberFormat(coin)

        let rp = DataManager.UserData.getItemNum(365)

        let redpacket = cc.find("nodePlayer/nodeCurrency/redpacket/rplabel", this.node)
        if (null != redpacket)
            redpacket.getComponent(cc.Label).string = numberFormat(rp)
        
        let redpacketTip = cc.find("nodePlayer/nodeCurrency/redpacketTip/rptiplabel", this.node)
        if (null != redpacketTip)
            redpacketTip.getComponent(cc.RichText).string  = "<color=#ffffff>约</c><color=#fff200>" + (rp / 100) + "元</color><color=#ffffff>,满</c><color=#fff200>2元</color><color=#ffffff>可兑换到微信</c>"

        let diamond = cc.find("nodePlayer/nodeCurrency/diamond/diamondNum", this.node)
        if (null != diamond)
            diamond.getComponent(cc.Label).string = numberFormat(DataManager.UserData.getItemNum(1192))
        
        let ddz = cc.find("nodeMain/ddzEntrance", this.node)
        if (null != ddz)
            ddz.getChildByName("newUserTips").active = DataManager.CommonData["morrow"] < 3

        let self = this
        DataManager.UserData.face = DataManager.UserData.face.replace("http://", "https://")
        if (-1 != DataManager.UserData.face.indexOf("https://")) {
            cc.loader.load({url: DataManager.UserData.face, type: 'png'}, (err, texture) => {
                if (err) {
                    console.log(err)
                    return
                }
    
                if (null == self.node)
                    return
    
                let face = cc.find("nodePlayer/nodeFace/nodeMask/face", self.node)
                if (null != face) {
                    let size = face.getContentSize()
                    face.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                    face.setContentSize(size)
                }
            })
        }

        let vip = cc.find("nodePlayer/nodeVIp", this.node)
        if (null != vip && DataManager.CommonData["VipData"]) {
            let viplv = DataManager.CommonData["VipData"].vipLevel || 0
            // let vipflag = "VIP1-2"
            // if (viplv <= 2)
            //     vipflag = "VIP1-2"
            // else if (viplv <= 4)
            //     vipflag = "VIP3-4"
            // else if (viplv <= 6)
            //     vipflag = "VIP5-6"
            // else if (viplv <= 8)
            //     vipflag = "VIP7-8"
            // else if (viplv <= 10)
            //     vipflag = "VIP9-10"
            // else if (viplv <= 12)
            //     vipflag = "VIP11-12"

            // vip.getChildByName(vipflag).active = true
            vip.getChildByName("viplabel").getComponent(cc.Label).string = viplv
        }

        if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
        } else {
            // 提示红包收益
            if ( DataManager.CommonData["leaveGame"] == true) {
                if (DataManager.UserData.getItemNum(365) - DataManager.CommonData["RedpacketCount"] > 0){
                    SceneManager.Instance.popScene("moduleLobby", "ObtainRedpacketPop")
                }
                let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
                if (DataManager.CommonData["leaveGameIsPrivate"])
                    gameId = -2
                if (isSmallGame(gameId))
                    gameId = -1                
                this.onPressGameRoom(null, gameId)                
                delete DataManager.CommonData["leaveGame"]
            }
        }

        if (DataManager.load(DataManager.UserData.guid + "qttTip") != true && DataManager.UserData.getItemNum(367) > 0) 
            cc.find("nodePlayer/nodeCurrency/qttCoin/tips_pop", this.node).active = true        
        else
            cc.find("nodePlayer/nodeCurrency/qttCoin/tips_pop", this.node).active = false

        this.updateOnceBox()    
        
        this.updateExchangeInfo()

        let vip2 = DataManager.CommonData["VipData"] && DataManager.CommonData["VipData"].vipLevel >= 2
        let xxl = cc.find("nodeMain/xxlEntrance", this.node)
        if (null != xxl) {
            xxl.getChildByName("new_game_flag").active = vip2
            xxl.getChildByName("little_pop_bg").active = !vip2
        }

        if (DataManager.Instance.onlineParam.shiming == 1) {
            cc.find("nodeTop/menus/btnAutonym", this.node).active = DataManager.CommonData["roleCfg"].isBinding == 0
        }                
    }

    teachScene() {
        return false
    }

    oncePayBox() {
        this.checkOneYuanShop(() => {
            if (null != DataManager.Instance.OneYuanBoxs && DataManager.Instance.OneYuanBoxs.length > 0) {
                SceneManager.Instance.popScene("moduleLobby", "OneYuanPop")
                return
            }
        })
    }

    getNewUserSignAward () {
        // DataManager.CommonData["ReEnter"] = true
        
        let self = this
        getNewUserSignAward(() => {
            if (null == self.node)
                return

            let func = () => {};

            let canSign = self.checkNewUserSignCanSign() && true != DataManager.loadKeyWithDate(DataManager.UserData.guid + "newUserSign")
            if (DataManager.CommonData["morrow"] == 0 && !DataManager.loadKeyWithDate(DataManager.UserData.guid + "newUserSign") && canSign)       // 第一天 只要可以签到就弹
                canSign = true
            else if (DataManager.CommonData["morrow"] != 0 && !DataManager.loadKeyWithDate(DataManager.UserData.guid + "newUserSign") && canSign) // 不是第一天 并且已经弹过一次 那就不可以签到
                canSign = false

            if (!DataManager.loadKeyWithDate(DataManager.UserData.guid + "SignPop")){
                func = () => { self.getSignAward(() => { self.teachScene() || self.onPressOneYuanActviePop() })}
            }
            else{
                func = () => { self.teachScene() || self.onPressOneYuanActviePop() }
            }
            
            //!DataManager.loadKeyWithDate(DataManager.UserData.guid + "SignPop") || 
            if (DataManager.CommonData["NewUserSgin"].day > 7 || false == canSign)      
                func()
            else if (canSign)
                SceneManager.Instance.popScene("moduleLobby", "NewUserSignPop", {
                    closeFun: () =>{
                        let servers = getLowMoneyRoom(389)
                        if (null != servers && servers.length > 0)
                            enterGame(servers[Math.floor(Math.random() * 100) % servers.length])
                    }
                    // ,
                    // closeFun: self.teachScene.bind(self)
                })    

            self.getSideBtn("btnNewGift").active = DataManager.CommonData["NewUserSgin"].day <= 7
            self.getSideBtn("btnNewGiftHB").active = DataManager.CommonData["NewUserSgin"].day <= 7
        })        
    }

    checkNewUserSignCanSign() {        
        let day = DataManager.CommonData["NewUserSgin"]["day"]
        for (const iterator of DataManager.CommonData["NewUserSgin"]["rows"]) {
            if (day == iterator["day"] && (iterator["code"] == 0 || iterator["code"] == 3)) {
                return true
            }
        } 

        return false
    }


    checkFreeDrawCanDraw() {
        if (null == DataManager.CommonData["adNum"] || null == DataManager.CommonData["adNum"][2])
            return

        let canDraw = DataManager.CommonData["adNum"][2].allNum > DataManager.CommonData["adNum"][2].countNum
        cc.find("nodeLeft/btnFreeDraw/redPoint", this.node).active = canDraw
        return canDraw
    }

    checkADNum(typeNum) {
        console.log("checkADNum",DataManager.CommonData["adNum"])
        if (null == DataManager.CommonData["adNum"] || null == DataManager.CommonData["adNum"][typeNum])
            return false

        let canAd = DataManager.CommonData["adNum"][typeNum].allNum > DataManager.CommonData["adNum"][typeNum].countNum
        return canAd
    }

    checkOneYuanShop(callback = null) {
        getShopBox(2, callback)
    }

    updateOneYuanBox() {
        getShopBox(7, () => {
            if (!this.isValid) {
                return
            }
            let now = new Date().getTime() / 1000
            let bActive = true
            if (now >= 1568736000 && now <= 0) {
                bActive = checkFirstBox(1, 1) == null
            }
            bActive = checkOneYuanBox(1, 1) == null
            this.getSideBtn("btnOneYuan").active =  bActive && (null != DataManager.Instance.OneYuanBoxs && DataManager.Instance.OneYuanBoxs.length > 0)
            if (DataManager.CommonData["AllowPayment"] == false) {
                this.getSideBtn("btnOneYuan").active =  false
            }
        })
    }

    updateOnceBox() {
        this.getSideBtn("btnSixBox").active = checkFirstBox() != null
        if (DataManager.CommonData["AllowPayment"] == false) {
            this.getSideBtn("btnSixBox").active = false
        }
    }

    updateExchangeInfo() {        
        // 大厅红包提示
        let rp = cc.find("nodeMain/redpacketGuide", this.node);
        let rpvalue = DataManager.UserData.getItemNum(365) / 10000
        rp.getChildByName("labelAmount").getComponent(cc.Label).string = numberFormat(rpvalue)
        let prog = rp.getChildByName("progress")
        if (check03ExchangeGoods()) {
            rp.getChildByName("desc").getComponent(cc.Label).string = "新人满0.3元可领到微信"
            prog.active = rpvalue < 0.3
            prog.getComponent(cc.ProgressBar).progress = rpvalue > 0.3 ? 1 : rpvalue / 0.3
            prog.getChildByName("labelValue").getComponent(cc.Label).string = numberFormat(rpvalue, 2, true) + "/0.30"
        }
        else{
            prog.active = rpvalue < 3
            prog.getComponent(cc.ProgressBar).progress = rpvalue > 2 ? 1 : rpvalue / 2
            prog.getChildByName("labelValue").getComponent(cc.Label).string = numberFormat(rpvalue, 2, true) + "/2.00"
        }

        if (isWeChatGame()) {
           rp.getChildByName("spt_tip_1").active = false
           rp.getChildByName("spt_tip_2").active = false
           prog.active = false
        }
    }

    getSignAward(callback: () => void = null) {
        SceneManager.Instance.popScene("moduleLobby", "SignPop", {closeCallback: callback})
    }

    onPressActive() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        SceneManager.Instance.popScene("moduleLobby", "ActivePop")
    }

    onPressPyramidSpread() {
        loadPyramidSpreadInfo((res)=>{
            if (DataManager.CommonData["PyramidData"]) {
                SceneManager.Instance.popScene("moduleLobby", "InviteFriendPop")
            } else if (res.ret == 1){
                iMessageBox("您已完成这个任务")
            }
        })
    }

    updateMainView(vt,bShow) {
        const outofscreen = window['winSize'] ? window['winSize'].width + 10 : cc.winSize.width + 10

        if (vt != ViewType.MoreGameServer) {
            cc.find("nodePlayer", this.node).runAction(cc.moveBy(0.1,cc.v2(bShow ? 90 : -90,0)))
        }

        const doMoveNode = (node, posX) => {
            if (posX == 0) {
                node.active = true
                node.runAction(cc.moveTo(0.1,cc.v2(posX,0)))
            } else {
                node.runAction(cc.sequence(cc.moveTo(0.1,cc.v2(posX,0)),cc.callFunc(()=>{
                    node.active = false
                })))
            }
        }

        const nodeMiniGame = cc.find("nodeMiniGame", this.node)
        const nodeMoreGame = cc.find("nodeMoreGame", this.node)
        const nodeServers = cc.find("nodeServers", this.node)
        const nodeMain = cc.find("nodeMain", this.node)

        switch (vt) {
            case ViewType.GameServer:
            case ViewType.MiniGame:
            case ViewType.MoreGame:
                doMoveNode(nodeMain,bShow ? -outofscreen : 0)
                const nodeOther = vt == ViewType.GameServer ? nodeServers : ( vt == ViewType.MiniGame ? nodeMiniGame : nodeMoreGame )
                doMoveNode(nodeOther,bShow ? 0 : outofscreen)
                this.curViewType = bShow ? vt : ViewType.Normal
                break
            case ViewType.MoreGameServer:
                doMoveNode(nodeServers,bShow ? 0 : outofscreen)
                doMoveNode(nodeMoreGame,bShow ? -outofscreen : 0)
                this.curViewType = bShow ? vt : ViewType.MoreGame
                break
        }
    }

    onPressBtnBack() {
        this.updateMainView(this.curViewType,false)
    }

    onPressGameRoom(sender, gameId) {
        console.log("onPressGameRoom",gameId)
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)     
        gameId = isNaN(parseInt(gameId)) ? (getGameConfig(gameId) || getGameConfig("module" + gameId)) : parseInt(gameId)
        if (gameId < 0) {
            if (gameId == -1) {
                this.updateMainView(ViewType.MiniGame,true)
            } else if(gameId == -2) {
                SceneManager.Instance.popScene("moduleLobby", "PersonalRoomScene")
            } else if (gameId == -5) {         
                this.updateMainView(ViewType.MoreGame,true)
            }
            return
        }

        let servers = checkGameServer(gameId)
        if (!servers) {
            return
        }

        if (isSmallGame(gameId)) {
            let i = Math.floor(Math.random() * 100 % servers.length)
            let room = Object.assign(servers[i])
            DataManager.save(DataManager.UserData.guid + "lastGameId", room.gameId)
            if (checkServerMoneyLimit(room))
                enterGame(room)
            return
        }

        if (this.curViewType == ViewType.MoreGame) {
            this.updateMainView(ViewType.MoreGameServer,true)
        } else {
            this.updateMainView(ViewType.GameServer,true)
        }

        let levels = []
        let roomlen = 0
        for (const key in servers) {
            if (servers.hasOwnProperty(key)) {
                let level = servers[key]["level"]
                if (level && level >= 4)
                {
                    continue;
                }
                if (levels[level] == null) {
                    levels[level] = []
                    roomlen ++
                }

                levels[level].push(servers[key])
            }
        }
        //cc.log("roomlenroomlen == ",roomlen,servers)
        let nodeServers = cc.find("nodeServers", this.node)
        nodeServers.children.forEach(item => item.active = false)
        let size = nodeServers.getContentSize()
        let idx = 1

        for (let key = 1; key <= 3; key++){
            let room = nodeServers.getChildByName("btnServer" + key)
            room.active = false
            if (levels[key] != null){
                let filename = ""
                if (gameId==391 && key!=3) {
                    filename = "moduleLobby/texture/lobby/server_hb_4"
                    if (key==2){
                        filename = "moduleLobby/texture/lobby/server_hb_2"
                    }
                } else if (gameId!=391 && key!=3) {
                    filename = "moduleLobby/texture/lobby/server_hb_1"
                }
                if (filename!=""){
                    let sptServerHb = room.getChildByName("sptServerHb" + key)
                    cc.loader.loadRes(filename, cc.SpriteFrame, function (err, spriteFrame) {
                        if (err) {
                            console.log("filename == ", filename)
                            console.log(err)
                        }
                        else
                        {
                            sptServerHb.getComponent(cc.Sprite).spriteFrame = spriteFrame
                        }
                    }.bind(this))
                }
                room.active = true
                let server = levels[key]
                let level = key
                let onlineNum = 0 
                server.forEach(item => onlineNum += item.onlinePlayerNum)
                room.getChildByName("onlineNum").getComponent(cc.Label).string = "" + onlineNum

                if (server[0].maxmoney)
                    room.getChildByName("limit").getComponent(cc.Label).string = " " + numberFormat(server[0].minMoney, 0) + "~" + numberFormat(server[0].maxmoney, 0)
                else
                    room.getChildByName("limit").getComponent(cc.Label).string = numberFormat(server[0].minMoney, 0) + "以上"
                let x = idx * size.width / roomlen
                room.position = cc.v2(idx * size.width / (roomlen + 1) - size.width / 2 , room.position.y)

                let btn = room.getComponent(cc.Button)
                btn.clickEvents = []

                let clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node; 
                clickEventHandler.component = "LobbyScene";
                clickEventHandler.handler = "onRoom" + idx; 

                this["onRoom" + idx] = (sender) => {       
                    czcEvent("大厅", "点击游戏", gameId + " " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))  
                    if (DataManager.CommonData["morrow"] <= 1) {
                        let msg = [
                            {
                                action: "点击游戏",
                                gameId: gameId,
                                guid: DataManager.UserData.guid,
                                morrow: DataManager.CommonData["morrow"]
                            }
                        ]
                        PostInfomation(msg)
                    }
                    let curServers = getNewBieServer(gameId);
                    if (null == curServers || 0 == curServers.length){
                        curServers = server
                    }
                    if (null == curServers) {
                        getServerList()
                        return
                    }

                    let i = Math.floor(Math.random() * 100 % curServers.length)
                    let room = Object.assign(curServers[i])
                    DataManager.save(DataManager.UserData.guid + "lastGameId", room.gameId)
                    if (checkServerMoneyLimit(room))
                        enterGame(room);                
                }
                
                btn.clickEvents.push(clickEventHandler);
                idx ++
            }
        }
    }

    onPressGetCoin(event) {
        czcEvent("大厅", "兑换趣金币1", "点击领取趣金币 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        let sender = event.currentTarget
        if (sender) 
            sender.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(() => sender.getComponent(cc.Button).interactable = true)))
        sender.getComponent(cc.Button).interactable = false
        getQttCoin()
    }

    // keep this empty func
    onTeachMain2Server() {}

    // keep this empty func
    onTeachServer2Main() {}

    update () {
        if (this._isLogin || DataManager.CommonData["isLogin"] != true || DataManager.CommonData["configFinish"] != true){
            // if (false == this._isLogin)
                // console.log(DataManager.CommonData["isLogin"], DataManager.CommonData["configFinish"])
            return
        }
        
        this._isLogin = true

        if (null == NetManager.Instance.getSocketState("lobby")) {
            NetManager.Instance.login("lobby", DataManager.Instance.SocketAddress, proto, opcodeConfig, (socket) => this.sendVerifyTicketReq(socket))
        }
        else {
            this.updateUserInfo()
            GameManager.hideFace()
        }
    }

    sendVerifyTicketReq(socket: WebSocketWrapper){
        GameManager.hideFace()
        czcEvent("大厅", "登录7", "连接socket " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        let mahjong_cl_verify_ticket_req = {
            opcode: "mahjong_cl_verify_ticket_req",
            plyGuid: DataManager.Instance._userData.guid,
            plyNickname: DataManager.Instance._userData.nickname,
            plyTicket: DataManager.Instance._userData.ticket,
            gameId: DataManager.Instance.gameId,
            version: 1498492800,
            extParam: "",
            sex: DataManager.Instance._userData.sex,
            packetName: DataManager.Instance.packetName
        }
        
        socket.send(mahjong_cl_verify_ticket_req)

        // console.debug("send ticket" + new Date().getTime())
    } 

    onPressFastStart() {
        let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
        czcEvent("大厅", "快速开始", gameId + " " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        if (DataManager.CommonData["morrow"] <= 1) {
            let msg = [
                {
                    action: "快速开始",
                    gameId: gameId,
                    guid: DataManager.UserData.guid,
                    morrow: DataManager.CommonData["morrow"]
                }
            ]
            PostInfomation(msg)
        }
        if (null == gameId)
            gameId = DataManager.Instance.getGameList()[0]

        let servers = getLowMoneyRoom(gameId)
        if (servers.length > 0){
            let i = Math.floor(Math.random() * 100 % servers.length)
            enterGame(servers[i])
        }
        else if(DataManager.UserData.money < 1000){
            // 没服务器就是初级场
            unenoughGold(0, 1000)
        }
    }

    onPressADQtt(event, data) {
        let btn = event.target

        let adNum = parseInt(data)
        let adName = adNum == 5 ? "赚趣金币" : adNum == 6 ? "免费金豆" : adNum == DataManager.AdsConfig.taskAdsMap.FreeDimond ? "免费钻石" : "未知"
        let adsReason = 0
        if (adNum == 5) {
            adsReason = DataManager.AdsConfig.video.FreeQttCoin
        }else if (adNum == 6) {
            adsReason = DataManager.AdsConfig.video.FreeGoldenCoin
        }

        czcEvent("大厅", "领取" + adName + "1", "点击领取 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        let self = this
        let getAward = function() {
            if (checkADNum(adNum)) {
                czcEvent("大厅", "领取" + adName + "2", "播放广告 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                playAD(adsReason, () => {
                    czcEvent("大厅", "领取" + adName + "3", "看完广告 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                   
                    getADAward(adNum, (num) => {  
                        czcEvent("大厅", "领取" + adName + "4", "获取奖励 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                        if (adNum == 5) {
                            showTokenGrowPop(30) 
                        }
                        else if (adNum == 6) {
                            let awards = [
                                {
                                    index: 0,
                                    num: 1000,
                                }
                            ]
                            showAwardResultPop(awards)
                        }
                        else if (adNum == DataManager.AdsConfig.taskAdsMap.FreeDimond) {
                            let awards = [
                                {
                                    index: 1192,
                                    num: num,
                                }
                            ]
                            showAwardResultPop(awards)
                        }
                        sendReloadUserData()
                    })        
                })                
            }
            else {
                iMessageBox("您今日的" + adName + "次数已用完，请明天再来！")
            }
        }

        if (null == DataManager.CommonData["adConfig"]) {
            getADConfig(() => {
                // this.updateBottonState()
                getAward()
            })
            return 
        }

        getAward()
    }

    onPressGetGold() {
        let adNum = 6
        czcEvent("大厅", "领取金币1", "点击领取 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        let self = this
        let getAward = function() {
            if (self.checkADNum(adNum)) {
                czcEvent("大厅", "领取金币2", "分享 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                if (isWeChatGame()) {
                    socialShare({
                        withOpenId:true,
                        callback : () => {
                            getADAward(adNum, () => {  
                                czcEvent("大厅", "领取金币4", "获取奖励 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                                if (adNum == 5) {
                                    showTokenGrowPop(30) 
                                }
                                else if (adNum == 6) {
                                    let awards = [
                                        {
                                            index: 0,
                                            num: 1000,
                                        }
                                    ]
                                    showAwardResultPop(awards)
                                }
                                sendReloadUserData()
                            })     
                        }
                    })
                } else if (isAndroidGame()){
                    const sharedData = DataManager.Instance.sharedData
                    if (!sharedData) {
                        iMessageBox("暂不支持分享")
                        return
                    }

                    DataManager.CommonData["shareType"] = "LobbyScene"

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

                    // cc.find("nodeTop/menus/btnShare", this.node).getComponent(cc.Button).interactable = false

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

                            // cc.find("nodeTop/menus/btnShare", this.node).getComponent(cc.Button).interactable = true
                        })
                    })
                } else {
                    playAD(DataManager.AdsConfig.video.FreeGoldenCoin, () => {
                        getADAward(adNum, () => {  
                            if (adNum == 6) {
                                let awards = [
                                    {
                                        index: 0,
                                        num: 1000,
                                    }
                                ]
                                showAwardResultPop(awards)
                            }
                            sendReloadUserData()
                        })
                    })
                }
            }
            else {
                iMessageBox("您今天获取免费金豆的次数已用完，请明天再来！")
            }
        }

        if (null == DataManager.CommonData["adConfig"]) {
            getADConfig(() => {
                initAdConfig()
                this.checkFreeDrawCanDraw()
                getAward()
            })
            return 
        }

        getAward()
    }

    onPressOneYuanActviePop() {
        if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
            return
        }
        SceneManager.Instance.popScene("moduleLobby", "OneYuanOneDayActivePop")
    }

    tokenGrowUpdate(message) {
    }

    getSideBtn(btnName) {
        let btn = cc.find("nodeLeft/" + btnName, this.node)
        if (null == btn)
            btn = cc.find("nodeRight/" + btnName, this.node)

        return btn;
    }

    initSelectGameScrollView() {
        let contentSelectGame = cc.find("nodeMoreGame/ScrollViewSelectGame/view/contentSelectGame", this.node)
        contentSelectGame.removeAllChildren()
        // let vecData = getGameModules()
        let gameList = DataManager.Instance.getGameList()
        if (gameList == null) {
            return
        }
        let games = []
        for (let val of gameList) {
            if (val == 389 || val == 393) {
                continue
            }
            if (false == isSmallGame(val))
                games.push(val)
        }
        games.push(395)
        games.push(397)
        games.sort((a,b)=>{
            if (a==391||a==401) {
                return -1
            }
            if (b==391||b==401) {
                return 1
            }
            return a-b
        })
        let count = games.length

        let gameNode = "moduleLobby/prefab/gameNode01"
        cc.loader.loadRes(gameNode, cc.Prefab, (err, res) => {
            if (!contentSelectGame.isValid) {
                return
            }

            if (err) {
                cc.log("load gameNode prefab error",err)
                return
            }

            for (let index = 0; index < count;index++) {
                let node = cc.instantiate(res)
                let ButFloor01 = cc.find("ButFloor01", node)
                let sprite = cc.find("Background", ButFloor01).getComponent(cc.Sprite)
                BaseFunc.SetFrameTextureLocal(sprite,"moduleLobby/texture/GameButton/btn"+games[index]+"01")

                BaseFunc.AddClickEvent(ButFloor01,this.node,"LobbyScene","onPressGameRoom",games[index])
                cc.log("contentSelectGame222 == ", games[index])
                node.zIndex = count-index
                contentSelectGame.addChild(node)
            }
        })

        contentSelectGame.width = Math.ceil(count/2)*420
    }

    onPressShare() {
        const sharedData = DataManager.Instance.sharedData
        if (!sharedData) {
            iMessageBox("暂不支持分享")
            return
        }

        console.log('[LobbyScene.onPressShare] sdType', sharedData.sdType)
        /*if (sharedData.sdType == 0) {
            shareUrl()
            return
        }*/

        const filepath = jsb.fileUtils.getWritablePath() + 'share_bg_code_' + md5(sharedData.sdPic + sharedData.sdCodePic) + '.png'
        const shareFile = () => {
            share({ ShareWay: 'WeiXin', ShareType: '2', SharedImg: 'file://' + filepath })
        }
        console.log('[LobbyScene.onPressShare] shareFile', filepath)
        if (jsb.fileUtils.isFileExist(filepath)) {
            shareFile()
            return
        }

        cc.find("nodeTop/menus/btnShare", this.node).getComponent(cc.Button).interactable = false

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

                cc.find("nodeTop/menus/btnShare", this.node).getComponent(cc.Button).interactable = true
            })
        })
    }

    PluginSocialCallBack(event) {
        let message = event.packet
        console.log("[PluginSocialCallBack] data:",message)
        let sharedData = JSON.parse(message)
        if(sharedData.ShareResultCode == 0 && this.shareSucces==false && DataManager.CommonData["shareType"] == "LobbyScene"){
            DataManager.CommonData["shareType"] = ""
            this.shareSucces = true
            let adNum = 6
            getADAward(adNum, () => {  
                czcEvent("大厅", "领取金币4", "获取奖励 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                if (adNum == 5) {
                    showTokenGrowPop(30) 
                }
                else if (adNum == 6) {
                    let awards = [
                        {
                            index: 0,
                            num: 1000,
                        }
                    ]
                    showAwardResultPop(awards)
                }
                sendReloadUserData()

                this.shareSucces = false
            })
        }
    }

    _privateRoom = null
    mahjong_lc_get_private_game_data_list_ack(message) {
        message = message.packet
        let privateRoom = message.data.filter(item => {
            return (item.roomStatus == 0 && (item.playerNum < item.playerMax || item.plyDatas.filter(ply => ply.plyGuid == DataManager.UserData.guid).length > 0)) || (item.roomStatus == 1)
        })
        this._privateRoom = privateRoom ? privateRoom[0] : null
        this.getSideBtn("btnBackPrivate").active = !!this._privateRoom
    }

    onPressBackPrivateRoom() {
        getPrivateInviteInfo(this._privateRoom.inviteCode)
    }
}
