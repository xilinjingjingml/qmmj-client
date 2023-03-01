import BaseScene from "../base/baseScene/BaseScene";
import { iMessageBox, czcEvent } from "../base/BaseFuncTs";
import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import { getMobileCode } from "./LobbyFunc";
import SceneManager from "../base/baseScene/SceneManager";
import PluginManager from "../base/PluginManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginPhonePop extends BaseScene {

    _phoneEditbox: cc.EditBox = null
    _phoneCodeEditbox: cc.EditBox = null

    _waitTime: number = -1;
    _btnLabel: cc.Label = null
    _countDown: number = 0

    _curInput: cc.EditBox = null
    _bInput: boolean = false

    onOpenScene() {
        this._phoneEditbox = cc.find("nodePop/nodePhone/editPhone", this.node).getComponent(cc.EditBox)
        this._phoneCodeEditbox = cc.find("nodePop/nodePhone/editDuanxin", this.node).getComponent(cc.EditBox)
        // cc.find("nodePop/btnClose", this.node).active = false;
        czcEvent("登陆", "手机登陆", "请求手机登陆 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    }

    onPressGetDuanxin() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)

        if (this._phoneEditbox.string == "") {
            iMessageBox("请输入11位手机号码")
            return
        }

        if (this._phoneEditbox.string.length != 11) {
            iMessageBox("手机号码格式有误")
            return
        }

        let self = this
        getMobileCode(this._phoneEditbox.string, "reset", (msg) => {
            if (DataManager.Instance.isTesting)
                console.log(msg)
            if (msg.ret == 0){
                let btn = cc.find("nodePop/nodePhone/btnDuanxin", self.node)
                btn.getComponent(cc.Button).interactable = false
                self._btnLabel = btn.getChildByName("labelDuanxin").getComponent(cc.Label)
                self._waitTime = 60
                self._btnLabel.string = "(" + self._waitTime + ")"
            
                this.node.runAction(cc.repeat(cc.sequence(cc.delayTime(1), cc.callFunc(() => {
                    self._waitTime --
                    self._btnLabel.string = "(" + self._waitTime + ")"
                    if (this._waitTime == 0) {
                        self._btnLabel.string = "获取验证码";
                        btn.getComponent(cc.Button).interactable = true
                    }
                })), 60))

                iMessageBox("验证码已通过短信发送到您的手机")
            }
            else {
                iMessageBox(msg.msg)
            }
        })
    }

    onPressBind() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        
        if (this._phoneEditbox.string == "") {
            iMessageBox("请输入11位手机号码")
            return
        }

        if (this._phoneEditbox.string.length != 11) {
            iMessageBox("手机号码格式有误")
            return
        }

        if (this._phoneCodeEditbox.string.length != 6) {
            iMessageBox("请输入验证码")
            return
        }

        cc.find("nodePop/btnConfirm", this.node).active = false
        PluginManager.login({
            phonenumber: this._phoneEditbox.string,
            code: this._phoneCodeEditbox.string,
            password: "*~*~",
            flag: "phoneCodeLogin",
            logincode: this._phoneCodeEditbox.string,
            sessionType: "SessionPhone",
        })
    }

    update(dt) {
        // if (this._waitTime < 0) 
        //     return

        // this._countDown += dt

        // if (this._countDown < 1) 
        //     return

        // this._waitTime -= dt
        
        // if (this._waitTime >= 0) {
        //     this._btnLabel.string = "(" + Math.ceil(this._waitTime) + ")"
        // }
        // else{
        //     this._btnLabel.string = "获取验证码"
        //     cc.find("nodePop/nodePhone/btnDuanxin", this.node).getComponent(cc.Button).interactable = true
        // }
    }

    onInputPhone() {
        cc.find("nodePop", this.node).runAction(cc.moveTo(0.1, cc.v2(-210, 0)))
        if (false == SceneManager.Instance.isSceneExist("KeyboardPop")) 
            SceneManager.Instance.popScene("moduleLobby", "KeyboardPop", {inputEvent: (key) => {this.onInput(key)}, closeCallback: () => {this.onKeyboardClose} }, cc.v2(370, 2))
        this._curInput = cc.find("nodePop/nodePhone/editPhone", this.node).getComponent(cc.EditBox)
        this._bInput = true

        cc.find("nodePop/nodePhone/editPhone/cursor", this.node).active = true
        cc.find("nodePop/nodePhone/editDuanxin/cursor", this.node).active = false
    }

    onInputCode() {
        cc.find("nodePop", this.node).runAction(cc.moveTo(0.1, cc.v2(-210, 0)))
        if (false == SceneManager.Instance.isSceneExist("KeyboardPop")) 
            SceneManager.Instance.popScene("moduleLobby", "KeyboardPop", {inputEvent: (key) => {this.onInput(key)}, closeCallback: () => {this.onKeyboardClose} }, cc.v2(370, 2))
        this._curInput = cc.find("nodePop/nodePhone/editDuanxin", this.node).getComponent(cc.EditBox)
        this._bInput = true

        cc.find("nodePop/nodePhone/editPhone/cursor", this.node).active = false
        cc.find("nodePop/nodePhone/editDuanxin/cursor", this.node).active = true
    }

    onKeyboardClose() {
        if (this._bInput == false)
            return

        cc.find("nodePop", this.node).runAction(cc.moveTo(0.1, cc.v2(0, 0)))
        SceneManager.Instance.closeScene("KeyboardPop")
        this._bInput = false

        cc.find("nodePop/nodePhone/editPhone/cursor", this.node).active = false
        cc.find("nodePop/nodePhone/editDuanxin/cursor", this.node).active = false
    }

    onInput(key) {
        if (key == "clean")
            this._curInput.string = ""
        else if(key == "del")
            this._curInput.string = this._curInput.string.substring(0, this._curInput.string.length - 1)
        else if(this._curInput.string.length < this._curInput.maxLength)
            this._curInput.string = this._curInput.string + key
    }

    onCloseScene() {
        SceneManager.Instance.closeScene("KeyboardPop")
        SceneManager.Instance.sendMessageToScene({opcode: "updateLoginButtonState", state: true})
    }

    PluginSessionCallBack(message: any): void {
        cc.log("[LoginPhonePop.PluginSessionCallBack] data", message.data)
        const data: { SessionResultCode: number, msg: string, sessionInfo: any } = JSON.parse(message.data)
        if (data.SessionResultCode == 0) {
            this.closeSelf()
        } else {
            cc.find("nodePop/btnConfirm", this.node).active = true
        }
    }
}
