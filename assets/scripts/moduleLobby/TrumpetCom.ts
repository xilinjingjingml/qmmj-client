import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

const yellow = "#ffe840"
const white = "#ffffff"

const fixedMsg = null
// {
//     plyGuid: 1,
//     message: "《全民斗地主》专属任务：最高每天可得10200趣头条金币，赶紧去参加吧！",
// }

@ccclass
export default class TrumpetCom extends BaseScene {

    _messageQueue: any[] = []

    msgLabel: cc.RichText = null
    showFinish: boolean = true

    onOpenScene() {
        this.pushMessageToQueue(fixedMsg)

        if (this.initParam && this.initParam["msg"]) 
            this.pushMessageToQueue(this.initParam["msg"])

        // console.log(this.node.zIndex)
        this.node.zIndex = 2000
    }

    mahjong_lc_trumpet_not(message) {
        if (this.node == null)
            return;

        let msg = message.packet
        this.node.stopAllActions()
        this.pushMessageToQueue(msg)
    }

    mahjong_lc_broadcast_message_not(message) {
        if (this.node == null)
            return;

        let msg = message.packet
        msg.message = msg.msg
        msg.plyGuid = msg.gameId
        this.node.stopAllActions()
        this.pushMessageToQueue(msg)
    }

    pushMessageToQueue(msg) {
        if (this.node == null)
            return

        if (this._messageQueue == null)
            this._messageQueue = []

        if (null != msg)
            this._messageQueue.push(msg)
        this.showTrumpetMsg()
    }

    showTrumpetMsg() {
        if (!this.showFinish)
            return

        let self = this
        if (this._messageQueue.length <= 0){
            this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.delayTime(60), cc.callFunc(() => {self.pushMessageToQueue(fixedMsg)})))
            return
        }
        
        let msg = this._messageQueue.shift()        
        if (this.checkSelf(msg)) {            
            msg.message += "|isWait"
            this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(() => {self.pushMessageToQueue(msg)})))
            this.showTrumpetMsg()
            return
        }

        let y = cc.winSize.height / 2 - (DataManager.CommonData["runGame"] == "hbermj" ? 60 : 100)
        if (y != this.node.getChildByName("gonggao_bg").position.y){
            this.node.getChildByName("gonggao_bg").runAction(cc.moveTo(0.3, cc.v2(0, y)))
        }

        this.node.opacity = 255
        this.showFinish = false
        msg = this.transformMsg(msg)
        if (null == msg || "" == msg){
            this.showTrumpetMsg()
            return
        }
        if (null == this.msgLabel)
            this.msgLabel = cc.find("gonggao_bg/mask/labelContent", this.node).getComponent(cc.RichText)

        this.msgLabel.string = msg
        this.msgLabel.node.position = cc.v2(0, -30)
        this.msgLabel.node.opacity = 255
        this.msgLabel.node.runAction(cc.sequence(cc.moveTo(1, 0, 0), cc.delayTime(3), cc.fadeOut(1), cc.callFunc(() => {this.showFinish = true, this.showTrumpetMsg()})))
    }
    //ffe840

    transformMsg(message) {
        let i = message.message.search("(<C|<D|<E)")
        if (i == 0)
            message.message = message.message.substring(4)

    // --官方公告 ply_guid_ = 0 game_id  = 0       字体颜色: 黄色
    // --游戏消息 ply_guid_ <> 0 game_id = 0       字体颜色:蓝色
    // --用户喇叭 ply_guid_ <> 0 game_id <> 0      字体颜色:白色
        if (message.plyGuid == 0) {
            message.message = "<color=" + yellow + ">【官方】</c><color=" + white + ">" + message.message + "</c>"
        }
        else if (message.plyGuid == 1) {
            message.message = "<color=#ffdc00>" + message.message + "</c>"
        }
        else if (message.plyGuid == 1237 || message.plyGuid == 386 || message.plyGuid == 388 || message.plyGuid == 389 || message.plyGuid == 401 || message.plyGuid == 402 || message.plyGuid == 395 || message.plyGuid == 396 || message.plyGuid == 397 || message.plyGuid == 398){
            let msg = message.message.split("|")
            let playername = msg[0] || ""
            let vip = msg[1] || ""
            let place = msg[2] || ""
            let num = msg[3] || ""

            message.message = "<color=" + white + ">" + "恭喜" + "</c>" + 
                                "<color=" + white + ">" + "用户" + "</c>" + 
                                "<color=" + yellow + ">" + playername + "</c>" + 
                                "<color=" + white + ">" + "在" + "</c>" + 
                                "<color=" + white + ">" + place + "</c>" + 
                                "<color=" + white + ">" + "获得" + "</c>" + 
                                "<color=" + yellow + ">" + num + "</c>" + 
                                "<color=" + white + ">" + "个红包券" + "</c>" 

        }
        else if (message.plyGuid == 393) {
            let msg = message.message.split("|")
            let playername = msg[0] || ""
            let vip = msg[1] || ""
            let place = msg[2] || ""
            let num = msg[3] || ""
            let type = msg[4] || ""
            if (type == 9999) {
                message.message = "<color=" + white + ">" + "【天降福利】" + "</c>" + 
                                "<color=" + white + ">" + "用户" + "</c>" + 
                                "<color=" + yellow + ">" + playername + "</c>" + 
                                "<color=" + white + ">" + "在" + "</c>" + 
                                "<color=" + white + ">" + place + "</c>" + 
                                // "<color=" + white + ">" + "触发" + "</c>" + 
                                // "<color=" + yellow + ">" + type + "</c>" + 
                                // "<color=" + white + ">" + "倍奖励，获得" + "</c>" +
                                "<color=" + white + ">" + "中挖到宝藏, 获得" + "</c>" +
                                "<color=" + yellow + ">" + num + "</c>" + 
                                "<color=" + white + ">" + "金豆" + "</c>"
            }
            else {
                message.message = "<color=" + white + ">" + "恭喜" + "</c>" + 
                                "<color=" + white + ">" + "用户" + "</c>" + 
                                "<color=" + yellow + ">" + playername + "</c>" + 
                                "<color=" + white + ">" + "在" + "</c>" + 
                                "<color=" + white + ">" + place + "</c>" + 
                                // "<color=" + white + ">" + "触发" + "</c>" + 
                                // "<color=" + yellow + ">" + type + "</c>" + 
                                // "<color=" + white + ">" + "倍奖励，获得" + "</c>" +
                                "<color=" + white + ">" + "获得" + "</c>" +
                                "<color=" + yellow + ">" + num + "</c>" + 
                                "<color=" + white + ">" + "金豆" + "</c>"
            }
        }
        else if (message.plyGuid == 400) {
            let msg = message.message.split("|")
            let playername = msg[0] || ""
            let place = msg[1] || ""
            let num = msg[2] || ""
            message.message = "<color=" + white + ">" + "恭喜" + "</c>" + 
                                "<color=" + white + ">" + "用户" + "</c>" + 
                                "<color=" + yellow + ">" + playername + "</c>" + 
                                "<color=" + white + ">" + "在" + "</c>" + 
                                "<color=" + white + ">" + place + "</c>" + 
                                "<color=" + white + ">" + "获得" + "</c>" +
                                "<color=" + yellow + ">" + num + "</c>" + 
                                "<color=" + white + ">" + "金豆" + "</c>"
        }
        else {
            if (message.gameId == 0) {
                message.message = "<color=" + yellow + ">【系统】</c><color=" + white + ">" + message.message + "</c>"
            }
            else {
                message.message = "<color=" + white + ">" + message.plyNickname + "</c><color=" + white + ">" + message.message + "</c>"
            }
        }

        return message.message
    }

    checkSelf(message) {
        let msg = message.message.split("|")
        if (msg.length == 1)
            return false

        let playername = msg[0] as string
        return msg.length != 6 && msg[5] != "isWait" && playername.indexOf(DataManager.UserData.nickname) != -1
    }
}
