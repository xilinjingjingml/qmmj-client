import BaseFunc = require("../base/BaseFunc")
import BaseComponent from "../base/BaseComponent";
import { createScreenShotNode, iMessageBox, share } from "../base/BaseFuncTs";
import GameLogic from "./GameLogic.hbermj";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrivateZhanJiLayer extends BaseComponent {
    thisComponentName: string = "PrivateZhanJiLayer.hbermj"
    @property(cc.Node)
    label_room_code: cc.Node = null
    @property(cc.Node)
    label_time: cc.Node = null
    @property(cc.Node)
    node_playerInfo: cc.Node = null
    @property(cc.Node)
    node_container: cc.Node = null

    onLoad() {
        this.label_room_code.getComponent(cc.Label).string = GameLogic.Instance().gamescene.privateInvite.inviteCode
        this.updateTime()
        this.showZhanJi()

        if (cc.sys.isBrowser) {
            this.btn_leave.x = 0
            this.btn_share.active = false
        }
    }

    updateTime() {
        const getTimeStr = function (n: number) {
            return (n < 10 ? '0' : '') + n
        }
        const time = new Date()
        this.label_time.getComponent(cc.Label).string = getTimeStr(time.getFullYear()) + "-" + getTimeStr(time.getMonth() + 1) + "-" + getTimeStr(time.getDate()) + " " + getTimeStr(time.getHours()) + ":" + getTimeStr(time.getMinutes())
    }

    updatePrivateZhanJi(event) {
        this.initParam = event.packet
        this.node_container.removeAllChildren()
        this.showZhanJi()
    }

    showZhanJi() {
        for (let i = 0; i < this.initParam["vecGameStatiscs"].length; i++) {
            const player = GameLogic.Instance().gamescene.getPlayerByChairId(i)
            if (player == null) {
                continue
            }
            const data = this.initParam["vecGameStatiscs"][i]
            const node = cc.instantiate(this.node_playerInfo)
            node.active = true
            node.parent = this.node_container
            const plyData = player.getPlyData()
            cc.find('icon_owner', node).active = plyData.plyGuid == GameLogic.Instance().gamescene.privateInvite.ownerGuid
            cc.find('label_name', node).getComponent(cc.Label).string = plyData.nickname || ""
            const size = cc.find('nodeFace/face', node).getContentSize()
            cc.find('nodeFace/face', node).getComponent(cc.Sprite).spriteFrame = player.sptAvatar.getComponent(cc.Sprite).spriteFrame
            cc.find('nodeFace/face', node).setContentSize(size)

            cc.find('nodeLord/label', node).getComponent(cc.Label).string = data.nBankerNum || 0
            cc.find('nodeHupai/label', node).getComponent(cc.Label).string = data.nHuNum || 0
            cc.find('nodeDianpao/label', node).getComponent(cc.Label).string = data.nDianPaoNum || 0
            cc.find('label_sum', node).getComponent(cc.Label).string = data.nAmount || 0
        }

        if (this.initParam["close"] == false) {
            this.btn_share.active = false
            this.btn_close.active = true
            this.btn_leave.active = false
        } else {
            this.btn_share.active = true
            this.btn_close.active = false
            this.btn_leave.active = true
        }
    }

    onPressClose() {
        this.close()
    }

    onPressLeave() {
        this.close()
        GameLogic.Instance().LeaveGameScene()
    }

    onPressShare() {
        if (!CC_JSB) {
            iMessageBox("暂不支持分享")
            return
        }

        const filepath = jsb.fileUtils.getWritablePath() + 'share_zhanji_' + (new Date().getTime()) + '.png'
        cc.log('[PrivateZhanJiLayer.onPressShare] shareFile', filepath)
        createScreenShotNode(this.nodeMain, filepath)
        share({ ShareWay: 'WeiXin', ShareType: '2', SharedImg: 'file://' + filepath })
    }

    close() {
        GameLogic.Instance().closeScene("PrivateZhanJiLayer")
    }
}
