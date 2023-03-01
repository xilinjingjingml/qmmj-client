import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import NetManager from "../base/baseNet/NetManager";
import BaseFunc = require("../base/BaseFunc")
import { getPrivateInviteInfo } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import { getPrivateGameDataList } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PrivateBillPop extends BaseScene {

    @property(cc.Node)
    itemPlayer: cc.Node = null
    @property(cc.Node)
    itemRecord: cc.Node = null
    @property(cc.Node)
    nodeContainer: cc.Node = null

    onOpenScene() {
        getPrivateGameDataList(0)
    }

    onCloseScene() {

    }

    mahjong_lc_get_private_game_data_list_ack(message) {
        message = message.packet
        this.initPrivateGameBill(message.data)
    }

    initPrivateGameBill(gameList) {
        let self = this
        for (let v of gameList) {
            let item = cc.instantiate(this.itemRecord)
            item.active = true
            this.nodeContainer.addChild(item)

            cc.find("nodeInfo/info1", item).getComponent(cc.Label).string = v.gameName + "   " + (v.itemIndex == 0 ? "金豆" : "钻石")
            cc.find("nodeInfo/info2", item).getComponent(cc.Label).string = "房间号: " + v.inviteCode
            cc.find("nodeInfo/info3", item).getComponent(cc.Label).string = BaseFunc.TimeFormat('mm-dd HH:MM',v.createTime)
            cc.find("nodeInfo/info4", item).getComponent(cc.Label).string = v.ownerNickName + "支付: " + v.costRoomCard + (v.itemIndex == 0 ? "金豆" : "钻石")

            let nodePlayer = item.getChildByName("nodePlayer")
            let players = v.plyDatas.filter(item => item.plyStatus == 0)
            for (let k = 0 ; k < v.playerMax ; k ++) {
                let playerInfo = players[k]
                let player = cc.instantiate(this.itemPlayer)
                player.active = true
                player.y = 0
                nodePlayer.addChild(player)

                player.getChildByName("pic_priScoreDi1").active = false
                player.getChildByName("pic_priScoreDi2").active = false
                if (null == playerInfo)
                    continue;

                let url = DataManager.getURL("USERBATCH")
                let uids = playerInfo.plyGuid

                BaseFunc.HTTPGetRequest(url, {
                    uids: uids
                }, (event) => {
                    if (event && event.list && event.list.length > 0) {
                        let face: string = event.list[0].face
                        face = face.replace("http://", "https://")
                        if (-1 != face.indexOf("https://")) { 
                            cc.loader.load({url: face, type: 'png'}, (err, texture) => {
                                if (err) {
                                    console.log(err)
                                    return
                                }
                    
                                self.setPlayerIcon(player.getChildByName("nodeIcon"), new cc.SpriteFrame(texture))
                            })
                        }
                    }
                })

                if (playerInfo.itemNum > 0) {
                    player.getChildByName("pic_priScoreDi2").active = true
                    player.getChildByName("pic_priScoreDi1").active = false
                    cc.find("pic_priScoreDi2/labelScore", player).getComponent(cc.Label).string = "+" + playerInfo.itemNum
                }
                else {
                    player.getChildByName("pic_priScoreDi2").active = false
                    player.getChildByName("pic_priScoreDi1").active = true
                    cc.find("pic_priScoreDi1/labelScore", player).getComponent(cc.Label).string = "" + playerInfo.itemNum
                }

                let nickname = playerInfo.nickName
                if (nickname.length > 5)
                    nickname = nickname.substr(0, 5) + "..."
                player.getChildByName("labelNickname").getComponent(cc.Label).string = (DataManager.UserData.guid == playerInfo.plyGuid) ? "我" : nickname
                cc.find("labelNickname/picOwnerIcon", player).active = (v.ownerGuid == playerInfo.plyGuid)
            }
                
            let btn = item.getChildByName("btnEnterRoom").getComponent(cc.Button)
            btn.node.getChildByName("time").getComponent(cc.Label).string = this.getPastTime(v.pastTime)
            btn.interactable = (v.roomStatus == 0 && v.playerNum < v.playerMax) || v.roomStatus == 1

            btn.clickEvents = []

            let clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; 
            clickEventHandler.component = "PrivateBillPop";
            clickEventHandler.handler = "onInviteCode" + v.inviteCode; 

            this["onInviteCode" + v.inviteCode] = (sender) => {       
                getPrivateInviteInfo(v.inviteCode)
            }
                
            btn.clickEvents.push(clickEventHandler);

            btn = item.getChildByName("btnPrivateDetail").getComponent(cc.Button)
            btn.node.getChildByName("time").getComponent(cc.Label).string = this.getPastTime(v.pastTime)
            btn.interactable = v.roomStatus == 2
            btn.node.active = v.roomStatus == 2
            btn.clickEvents = []

            let clickEventHandler1 = new cc.Component.EventHandler()
            clickEventHandler1.target = this.node
            clickEventHandler1.component = "PrivateBillPop"
            clickEventHandler1.handler = "onDetail" + v.inviteCode

            this["onDetail" + v.inviteCode] = (sender) => {
                self.getPrivateGameDetail(v.inviteCode, v.createTime, v.createTime + v.pastTime)
            }

            btn.clickEvents.push(clickEventHandler1)
        }
    }

    getPastTime(val) {
        if (val > 24 * 3600)
            return Math.floor(val / 86400) + "天前创建"
        else if (val > 3600)
            return Math.floor(val / 3600) + "小时前创建"
        else 
            return Math.ceil(val / 60) + "分钟前创建"    
    }

    setPlayerIcon(nodeIcon, spriteFrame) {
        if (nodeIcon && spriteFrame) {
            nodeIcon.getChildByName("private_bill_icon").getComponent(cc.Sprite).spriteFrame = spriteFrame
            nodeIcon.getChildByName("private_bill_icon").setContentSize(nodeIcon.getContentSize())
        }
    }
    
    getPrivateGameDetail(inviteCode, createTime, lastEndTIme) {
        let socketMsg = {
            opcode: 'mahjong_cl_get_private_game_replay_req',
            inviteCode: inviteCode,
            createTime: createTime,
            lastEndTIme: lastEndTIme
        };
        NetManager.Instance.send("lobby", socketMsg)
    }

    mahjong_lc_get_private_game_replay_ack(message) {
        message = message.packet
        cc.log(message)
        SceneManager.Instance.popScene<String>("moduleLobby", "PrivateBillDetailPop", message.data)
    }
}   
