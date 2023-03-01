import BaseComponent from "../base/BaseComponent";
import DataManager from "../base/baseData/DataManager";
import { getUserRole, iMessageBox, loadModule, czcEvent, changeGameLogo } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import GameManager from "../base/GameManager";
import PluginManager, { EPluginType } from "../base/PluginManager";
import BaseFunc = require("../base/BaseFunc")
import NetManager from "../base/baseNet/NetManager";
import WebSocketWrapper from "../base/baseNet/WebSocketWrapper";
import proto = require("../moduleLobby/proto/lobbyproto")
import opcodeConfig from "./proto/opcode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseComponent {

    _isLogin = false
    _isConnectSocket = false
    _isSocketReady = false

    onOpenScene() {
        console.log("[LoginScene.onOpenScene] GameManager.bStart", GameManager.Instance._bStart)
        if (!cc.sys.isNative)
        {
            return
        }

        changeGameLogo(cc.find("logo", this.node))

        if (!GameManager.Instance._bStart) {
            cc.director.loadScene('GameScene')
            return
        }

        cc.director.once(cc.Director.EVENT_AFTER_DRAW, GameManager.hideFace.bind(GameManager))
        this.setLoginButtonState(false)
        this.showLoginButton()

        const last_login_type: string = DataManager.load('last_login_type')
        console.log("[LoginScene.onOpenScene] last_login_type", last_login_type)
        if (last_login_type) {
            PluginManager.login({ sessionType: last_login_type }) // 使用上次登陆方式
        } else if (DataManager.GlobalData.isReview) {
            PluginManager.login({ sessionType: "SessionIZhangxin" }) // 审核直接izhangxin登陆
        }
        // else if (true || cc.sys.isNative) {
        //     DataManager.save("temp_login_type", "SessionPhone")
        //     SceneManager.Instance.popScene<String>("moduleLobby", "LoginPhonePop")
        // } 
        else {
            this.setLoginButtonState(!last_login_type)
        }
    }

    // 展示所有登陆方式
    showLoginButton(): void {
        const checkSession = function (name: string) {
            const showname = "show" + name.substring(7)
            console.log("checkSession == ", DataManager.Instance.onlineParam)
            if (DataManager.Instance.onlineParam[showname] != null) {
                return DataManager.Instance.onlineParam[showname]
            }

            if (DataManager.GlobalData.isReview) {
                return "SessionIZhangxin" == name
            }

            if (["SessionGuest", "SessionPhone", "SessionIZhangxin"].indexOf(name) != -1) {
                console.log("indexOf != -1 name == ", name)
                return false
            }

            return true
        }
        console.log("pluginConfig.plugins == ", PluginManager.pluginConfig.plugins)
        const button: cc.Node = this['button']
        for (const plugin of PluginManager.pluginConfig.plugins) {
            if (plugin.type == EPluginType.kPluginSession.toString() && checkSession(plugin.name)) {
                const node = cc.instantiate(button)
                node.getComponent(cc.Button).clickEvents[0].customEventData = plugin.name
                this['login_buttons'].addChild(node)
                console.log("[LoginScene.showLoginButton] add plugin", plugin.name)
                BaseFunc.SetFrameTextureLocal(node.getComponent(cc.Sprite), "moduleLobby/texture/dengLu/login_" + plugin.name + "01", () => {
                    console.log("[LoginScene.showLoginButton] showbutton", plugin.name)
                    node.active = true
                })
            }
        }
    }

    setLoginButtonState(state: boolean): void {
        this['login_buttons'].active = state
        this['loading'].active = !state
    }

    onPressLogin(touch: cc.Event.EventTouch): void {
        if (DataManager.CommonData["isAgreementPop"] == null || DataManager.CommonData["isAgreementPop"] == false)
        {
            iMessageBox("请阅读并同意相关用户协议")
            return
        }
        const data: string = touch.target.getComponent(cc.Button).clickEvents[0].customEventData
        console.log("[LoginScene.onPressLogin] name", data)
        this.setLoginButtonState(false)
        DataManager.save('temp_login_type', data)
        if (data == "SessionPhone") {
            SceneManager.Instance.popScene<String>("moduleLobby", "LoginPhonePop")
            return
        }
        PluginManager.login({ sessionType: data })

        if (["SessionPhone", "SessionIZhangxin"].indexOf(data) != -1) {
            return
        }

        // 应用后台切回前台 继续显示登陆按钮
        this.node.stopAllActions()
        this.node.runAction(cc.sequence(
            cc.delayTime(20),
            cc.callFunc(() => {
                iMessageBox("登陆超时")
                this.setLoginButtonState(true)
            })
        ))
    }

    updateLoginButtonState(message: any): void {
        console.log("[LoginScene.updateLoginButtonState]", message.state)
        this.setLoginButtonState(message.state)
    }

    PluginSessionCallBack(message: any): void {
        console.log("[LoginScene.PluginSessionCallBack] data", message.data)
        this.node.stopAllActions()
        const data: { SessionResultCode: number, msg: string, sessionInfo: any } = JSON.parse(message.data)
        if (data.SessionResultCode == 0) {
            DataManager.save('last_login_type', DataManager.load("temp_login_type"))
            const msg = data.sessionInfo
            DataManager.Instance.setUserData({
                pid: msg.pid,
                ticket: msg.ticket,
                nickname: msg.nickname,
                face: msg.face || "http://img.cache.bdo.banding.com.cn/faces/default1.png",
                imei: "",
                sex: msg.sex,
            })
            getUserRole()
            DataManager.CommonData["isLogin"] = true
            SceneManager.Instance.sendMessageToScene("updateUserData")
            DataManager.CommonData["morrow"] = msg.first == 1 ? 0 : msg.morrow
            DataManager.CommonData["regtime"] = msg.regtime == 0 ? new Date().getTime() / 1000 : msg.regtime
            DataManager.CommonData["ifBindWeixin"] = msg.ifBindWeixin == 1
            DataManager.CommonData["bindPhone"] = []
            DataManager.CommonData["bindPhone"].hasBindMoble = msg.isBindMobile
            DataManager.CommonData["bindPhone"].BindPhone = msg.phonenumber

            // 进入大厅
            this.showLobbyScene()
        } else {
            if (data.SessionResultCode == -98 && DataManager.load("temp_login_type") == "SessionIZhangxin") {
                PluginManager.login({ sessionType: "SessionIZhangxin" }) // 审核直接izhangxin登陆
                return
            }
            if (data.msg && data.msg.length > 0) {
                iMessageBox(data.msg)
            } else {
                iMessageBox("登陆失败")
            }
            // 清除之前的登陆方式
            DataManager.save('last_login_type', false)
            this.setLoginButtonState(true)
        }
    }

    showLobbyScene(): void {
        PluginManager.StartPushSDK()
        PluginManager.getOpenInstallParms()
        GameManager.showFire()
        loadModule(DataManager.Instance.StartModule);
    }

    update () {
        if (cc.sys.isNative || this._isLogin || DataManager.CommonData["isLogin"] != true || DataManager.CommonData["configFinish"] != true){
            // if (false == this._isLogin)
                // console.log(DataManager.CommonData["isLogin"], DataManager.CommonData["configFinish"])
            return
        }
        console.log("LoginScene == update") 
        SceneManager.Instance.addScene<String>("moduleLobby", "QMMJLobbyScene")
        this._isLogin = true

        if (null == NetManager.Instance.getSocketState("lobby")) {
            NetManager.Instance.login("lobby", DataManager.Instance.SocketAddress, proto, opcodeConfig, (socket) => this.sendVerifyTicketReq(socket))
        }
    }

    sendVerifyTicketReq(socket: WebSocketWrapper){
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

    onPressConsentAgreemen()
    {
        //勾选同意
        cc.log("onPressConsentAgreemen ==")
        let check = cc.find("AgreementNode/btn_layout/ConsentNode/Agreement01/check", this.node)
        check.active = !check.active
        DataManager.CommonData["isAgreementPop"] = check.active
    }
 
    onPressUserAgreemen()
    {
        //网络用户协议
        console.log("onPressUserAgreemen ==") 
        SceneManager.Instance.popScene("moduleLobby", "AgreementPop", {AgreementType:1})
    }

    onPressPrivacyAgreemen()
    {
        //隐私保护协议
        console.log("onPressPrivacyAgreemen ==") 
        SceneManager.Instance.popScene("moduleLobby", "AgreementPop", {AgreementType:2})
    }
}
