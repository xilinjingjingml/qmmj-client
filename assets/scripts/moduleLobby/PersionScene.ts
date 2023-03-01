import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import BaseFunc = require("../base/BaseFunc")
import { iMessageBox, copyToClipBoard, MsgBox, kickout } from "../base/BaseFuncTs";
import { getVipConfig, getMobileCode, getMobileState } from "./LobbyFunc";
import SceneManager from "../base/baseScene/SceneManager";
import NetManager from "../base/baseNet/NetManager";
import PluginManager from "../base/PluginManager";
import { isWeChatGame } from "../gameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PersionScene extends BaseScene {
    btnSwitchAccounts: cc.Node;

    onOpenScene() {
        cc.find("nodePop/nodeTop/nickname", this.node).getComponent(cc.Label).string = DataManager.UserData.nickname
        cc.find("nodePop/nodeTop/editNickname", this.node).getComponent(cc.EditBox).string = DataManager.UserData.nickname

        cc.find("nodePop/nodeTop/labelGuid", this.node).getComponent(cc.Label).string = DataManager.UserData.guid

        cc.find("nodePop/nodeTop/btnMan", this.node).getComponent(cc.Button).interactable = DataManager.UserData.sex == 0
        cc.find("nodePop/nodeTop/btnWoman", this.node).getComponent(cc.Button).interactable = DataManager.UserData.sex == 1

        let self = this
        DataManager.UserData.face = DataManager.UserData.face.replace("http://", "https://")
        if (-1 != DataManager.UserData.face.indexOf("https://")){
            cc.loader.load({url: DataManager.UserData.face, type: 'png'}, (err, texture) => {
                if (err) {
                    console.log(err)
                    return
                }

                if (null == self.node)
                    return

                let face = cc.find("nodePop/nodeTop/nodeFace/nodeMask/face", self.node)
                if (null != face) {
                    let size = face.getContentSize()
                    face.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                    face.setContentSize(size)
                }
            })
        }

        if (null == DataManager.CommonData["VipInfo"])
            getVipConfig(this.updateVipInfo.bind(this))        
        else
            this.updateVipInfo()  

        if (null == DataManager.CommonData["bindPhone"].hasBindMoble)
            getMobileState(this.updateBindPhone.bind(this))
        else
            this.updateBindPhone()
        
        this.node.on("copyguid", () => { copyToClipBoard(DataManager.UserData.guid) })

        this.btnSwitchAccounts  = cc.find("nodePop/nodeTop/btnSwitchAccounts", this.node)
        if (!cc.sys.isNative && this.btnSwitchAccounts)
        {
            this.btnSwitchAccounts.active = false
        }

        if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
            cc.find("nodePop/nodeTop/VIP", this.node).active = false
        }
    }

    onCloseScene() {
        this.node.off("copyguid")
    }

    updateVipInfo() {
        // VIP信息
        let nextNeed = 0
        if (null == DataManager.CommonData["VipData"]) 
            return

        for (const iterator of DataManager.CommonData["VipInfo"]) {
            if (iterator["vipLv"] == (DataManager.CommonData["VipData"].vipLevel + 1)){
                nextNeed = iterator["payMoney"]
                break;
            }
        }

        let lv = DataManager.CommonData["VipData"].vipLevel || 0
        cc.find("nodePop/nodeTop/VIP/labelLv", this.node).getComponent(cc.Label).string = "" + lv
        cc.find("nodePop/nodeTop/labelLv", this.node).getComponent(cc.Label).string = "LV." + lv        
        // cc.find("nodePop/nodeTop/progressLv", this.node).getComponent(cc.ProgressBar).progress = (nextNeed - DataManager.CommonData["VipData"].nextVipneedMoney) / nextNeed   
    }

    updateBindPhone() {
        if (DataManager.CommonData["bindPhone"] && DataManager.CommonData["bindPhone"].hasBindMoble == 1) {
            cc.find("nodePop/nodeBottom/phoneBind", this.node).active = true
            cc.find("nodePop/nodeBottom/btnBind", this.node).active = false
            let phone = "" + DataManager.CommonData["bindPhone"].BindPhone
            phone = phone.substr(0,3) + "****" + phone.substring(7)
            cc.find("nodePop/nodeBottom/phoneBind/labelPhone", this.node).getComponent(cc.Label).string = phone
        }
    }

    onPressSex(event, sex) {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        if (sex == DataManager.UserData.sex)
            return

        let url = DataManager.getURL("SEXCOMMIT")
        let param = {
            pid: DataManager.UserData.guid,
            ticket: DataManager.UserData.ticket,
            sex: sex
        }

        let self = this
        BaseFunc.HTTPGetRequest(url, param, function(msg) {
            if (msg && msg.ret==0){
                DataManager.UserData.sex = sex
                cc.find("nodePop/nodeTop/btnMan", self.node).getComponent(cc.Button).interactable = DataManager.UserData.sex == 0
                cc.find("nodePop/nodeTop/btnWoman", self.node).getComponent(cc.Button).interactable = DataManager.UserData.sex == 1
                iMessageBox("修改性别成功","温馨提示")
            }
        })
    }

    /**
     * 切换登陆方式
     */
    onPressSwitchAccounts() {
        cc.log("[PersionScene.onPressChange]")
        this.closeSelf()
        kickout()
    }

}
