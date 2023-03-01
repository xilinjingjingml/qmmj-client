import BaseScene from "../base/baseScene/BaseScene";
import BaseFunc = require("../base/BaseFunc");
import DataManager from "../base/baseData/DataManager";
import { iMessageBox, MsgBox, socialShare } from "../base/BaseFuncTs";
import {getPyramidSpreadAward, shareUrl } from "./LobbyFunc";
import { isWeChatGame, isAndroidGame } from "../gameConfig";
const { ccclass } = cc._decorator;
const ratio = 10000

@ccclass
export default class InviteFriendPop extends BaseScene {


    onOpenScene() {
        this.initInfoView()
    }

    onGetAward(res) {
        if (this.node.isValid) {
            let btnReceive = cc.find("nodePop/nodeLeft/btnReceive", this.node)
            btnReceive.getComponent(cc.Button).interactable = false
            this.closeSelf()
        }

        let awardValue = res.awardValue || 0
        let initParam = {
            title: "提示",
            content: awardValue + "红包券已加入您的红包余额，请注意查收",
            confirmClose: true,
            buttonNum: 1,
            maskCanClose: false,
            zorder: cc.macro.MAX_ZINDEX
        }

        MsgBox(initParam)
    }

    initInfoView() {
        if (!DataManager.CommonData["PyramidData"]) { return }

        let info = DataManager.CommonData["PyramidData"]

        let progress = cc.find("nodePop/nodeLeft/center/progress", this.node)
        progress.width = (info.awardValue / info.maxAwardValue) * 472

        let redpacket = cc.find("nodePop/nodeLeft/center/redpacket", this.node)
        redpacket.x = redpacket.x + progress.width

        cc.find("nodePop/nodeLeft/center/redpacket/moneyCount", this.node).getComponent(cc.Label).string = info.awardValue / ratio + "元"

        if (info.awardStatus == 1) {
            cc.find("nodePop/nodeLeft/btnReceive", this.node).active = true
            cc.find("nodePop/nodeLeft/center/inviteTip", this.node).getComponent(cc.Label).string = "已助力" + info.awardValue / ratio + "元,可以领取了"
        } else if (info.awardStatus == 2) {
            let btnReceive = cc.find("nodePop/nodeLeft/btnReceive", this.node)
            btnReceive.getComponent(cc.Button).interactable = false
            btnReceive.active = true
            cc.find("nodePop/nodeLeft/center/inviteTip", this.node).getComponent(cc.Label).string = "已助力" + info.awardValue / ratio + "元,可以领取了"
        } else {
            cc.find("nodePop/nodeLeft/btnInvite", this.node).active = true
            cc.find("nodePop/nodeLeft/center/inviteTip", this.node).getComponent(cc.Label).string = "已助力" + (info.awardValue / ratio) + "元,还差" + ((info.maxAwardValue - info.awardValue) / ratio) + "元可以领取"
        }

        let model = cc.find("nodePop/nodeRight/inviteInfo", this.node)
        let content = cc.find("nodePop/nodeRight/scrollView/content", this.node)

        for (const iterator of info.relationInfo) {
            let item = cc.instantiate(model)
            item.parent = content
            item.getChildByName("labelName").getComponent(cc.Label).string = iterator.nickname
            item.getChildByName("labelTime").getComponent(cc.Label).string = BaseFunc.TimeFormat("mm/dd HH:MM:SS", Number(iterator.promotedTime))

            let labelmoney = item.getChildByName("labelMoney")
            let sptMoney = item.getChildByName("sptMoney")
            if (iterator.awardValue < 0) {
                sptMoney.active = true
                labelmoney.active = false
                BaseFunc.AddClickEvent(item, this.node, "InviteFriendPop", "onPressQuest")
            } else {
                sptMoney.active = false
                labelmoney.getComponent(cc.Label).string = iterator.awardValue / ratio + "元"
            }

            let faceNode = cc.find("nodeHead/face", item)
            BaseFunc.SetFrameTextureNet(faceNode.getComponent(cc.Sprite), iterator.faceurl, (sprite) => {
                faceNode.scale = Math.min(56 / faceNode.width, 59 / faceNode.height)
            })
        }
    }

    onPressQuest() {
        iMessageBox("该玩家玩够" + DataManager.CommonData["PyramidData"].taskRound + "局后显示奖金")
    }

    onPressInvite() {
        if (isWeChatGame()){
            socialShare({
                withOpenId:true
            })
        } else if(isAndroidGame()){
            shareUrl()
        }
    }

    onPressReceive() {
        getPyramidSpreadAward(this.onGetAward.bind(this))
    }
}
