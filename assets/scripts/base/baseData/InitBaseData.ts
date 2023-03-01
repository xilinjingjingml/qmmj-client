import DataManager from "./DataManager";
import BaseFunc = require("../BaseFunc")
import md5 = require("../extensions/md5.min")
import SceneManager from "../baseScene/SceneManager";
import { QTTSign, ParseSearch, QTTCheckSign, MsgBox, czcEvent, getUserRole, values } from "../BaseFuncTs";
import CommonData from "./CommonData";
import WxWrapper from "../WxWrapper";
import { isWeChatGame,isAndroidGame} from "../../gameConfig";
import GameManager from "../GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InitBaseData {

    constructor() {
        console.log("initBaseData")
        // this.loadQtt()

        this.loadConfigs()
        // this.userLogin()        
        if(cc.sys.isNative)
        {
            return
        }
        var args = ParseSearch(window.location.search)
        if (args.imei) {
            DataManager.UserData.imei = args.imei
        }

        DataManager.CommonData["isLogin"] = null

        if(isWeChatGame()){
            this.loginWX()
        }else if (false == DataManager.Instance.isTesting)
            this.loginGusetQTT()
        // if (window.CC_WECHATGAME || window.CC_WECHATGAMESUB)
        //     this.loginWX()
        else
            this.loginGuest()
    }

    loadQtt(){
        if (window.location.search) {
            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.charset = "utf-8"
            script.src = 'https://newidea4-gamecenter-frontend.1sapp.com/sdk/prod/h5.v1.0.0.js?spread=required'
            document.body.appendChild(script)

            DataManager.Instance.IsQTT = true          
        }

        let meta = document.createElement("meta")
        meta.setAttribute("name", "app_id")
        meta.setAttribute("content", DataManager.Instance.QTT_APPID)
        document.head.appendChild(meta)

        let script1 = document.createElement('script')
        script1.type = 'text/javascript'
        script1.src = 'https://newidea4-gamecenter-frontend.1sapp.com/game/gamesdk/prod/qtt_help.js'
        document.head.appendChild(script1)
    }

    // 获取在线参数
    loadConfigs() {
        console.log("loadConfigs")
        let url = DataManager.getURL("LOADING_CONFIGS")
        
        let sign = "pn=" + DataManager.Instance.packetName + "&key=qwer123321zxcv";
        sign = md5(sign)

        let loginSecret = "pn=" + DataManager.Instance.packetName + "&uid=&imei=&level=&gameNums=0-Jimbo3";
        loginSecret = md5(loginSecret)

        let params = {
            pn: DataManager.Instance.packetName,
            fwversion: 14042902,
            gtype: "mainF33",
            sgtype: "f33",
            sign: sign,
            md5: DataManager.load("loadingConfigMD5"),
            uid: "",
            imei: "",
            level: "",
            gameNums: 0,
            loginSecret: loginSecret,
            buildCode: 1,
            appConfigGame: DataManager.Instance.gameId,
            // gameidlist: 10,
            appcode: 1
        };

        let self = this
        cc.log("[InitBaseData.loadConfigs]")
        DataManager.CommonData["configFinish"] = false
        BaseFunc.HTTPGetRequest(url, params, function(msg) {
            console.log("loadingConfig == ", msg)
            if (msg && msg.ret == 0) {
                let ip = msg.ip
                let port = msg.port
                msg = DataManager.load("loadingConfig")
                if (msg["versionupdate"]) {
                    msg["versionupdate"]["ip"] = null != ip ? ip : msg["versionupdate"]["ip"]
                    msg["versionupdate"]["port"] = null != port ? port : msg["versionupdate"]["port"]
                }
            }

            DataManager.Instance._configs = msg

            if (msg == null) {
                msg = DataManager.load("loadingConfig")
                msg = JSON.parse(msg)
            }

            if (msg == null)
            {
                console.log("error::loadingConfig == null")
                return
            }
            if (msg["versionupdate"]) {
                DataManager.Instance.envConfigs.socketURL = msg["versionupdate"]["ip"]
                DataManager.Instance.envConfigs.socketPort = msg["versionupdate"]["port"] 
            }

            // console.log(DataManager.Instance._configs)
            DataManager.Instance.NormalBoxs = []
            DataManager.Instance.OnceBoxs = []
            DataManager.Instance.MonthBoxs = []
            DataManager.Instance.ClubBoxs = []
            if (DataManager.Instance.isTesting)
                console.log(msg)
            let shopcfg = BaseFunc.IsJSON(msg["box_0"]) ? JSON.parse(msg["box_0"]) : null
            if (shopcfg && shopcfg["sl"])
                DataManager.Instance.NormalBoxs = shopcfg["sl"]
            
            DataManager.Instance.NormalBoxs.sort( (a, b) => a.content[0].num < b.content[0].num ? -1 : a.content[0].num > b.content[0].num ? 1 : 0)

            shopcfg = BaseFunc.IsJSON(msg["box_2"]) ? JSON.parse(msg["box_2"]): null
            if (shopcfg && shopcfg["sl"])    
                DataManager.Instance.OneYuanBoxs = shopcfg["sl"]

            shopcfg = BaseFunc.IsJSON(msg["box_7"]) ? JSON.parse(msg["box_7"]): null
            if (shopcfg && shopcfg["sl"])    
                DataManager.Instance.OnceBoxs = shopcfg["sl"]

            shopcfg = BaseFunc.IsJSON(msg["box_8"]) ? JSON.parse(msg["box_8"]): null
            if (shopcfg && shopcfg["sl"])
                DataManager.Instance.MonthBoxs = shopcfg["sl"]

            shopcfg = BaseFunc.IsJSON(msg["box_12"]) ? JSON.parse(msg["box_12"]): null
            if (shopcfg && shopcfg["sl"])    
                DataManager.Instance.ClubBoxs = shopcfg["sl"]

            if (DataManager.Instance.NormalBoxs && DataManager.Instance.NormalBoxs.length > 0) {
                DataManager.save("BOX0", JSON.stringify(DataManager.Instance.NormalBoxs))
            }
            else {
                let data = DataManager.load("BOX0")
                if (null != data) {
                    DataManager.Instance.NormalBoxs = JSON.parse(data)
                }
            }

            if (DataManager.Instance.OnceBoxs && DataManager.Instance.OnceBoxs.length > 0) {
                DataManager.save("BOX7", JSON.stringify(DataManager.Instance.OnceBoxs))
            }
            else {
                let data = DataManager.load("BOX7")
                if (null != data) {
                    DataManager.Instance.OnceBoxs = JSON.parse(data)
                }
            }

            if (DataManager.Instance.MonthBoxs && DataManager.Instance.MonthBoxs.length > 0) {
                DataManager.save("BOX8", JSON.stringify(DataManager.Instance.MonthBoxs))
            }
            else {
                let data = DataManager.load("BOX8")
                if (null != data) {
                    DataManager.Instance.MonthBoxs = JSON.parse(data)
                }
            }

            if (DataManager.Instance.ClubBoxs && DataManager.Instance.ClubBoxs.length > 0) {
                DataManager.save("BOX12", JSON.stringify(DataManager.Instance.ClubBoxs))
            }
            else {
                let data = DataManager.load("BOX12")
                if (null != data) {
                    DataManager.Instance.ClubBoxs = JSON.parse(data)
                }
            }

            DataManager.CommonData["privateConfig"] = []

            for (let key in msg) {
                if (key.indexOf("gConfig_") != -1) {
                    let data = JSON.parse(msg[key])[0]
                    for (let k in data.extparam) {
                        let v = data.extparam[k]
                        v.gameId = data.game_id
                        DataManager.CommonData["privateConfig"].push(v)
                    }
                }
            }

            // 在线参数
            DataManager.Instance.onlineParam = typeof msg.onlineparam == "object" ? msg.onlineparam : {}
            if (isAndroidGame())
            {
                // 版本更新
                DataManager.Instance.versionupdate = msg["versionupdate"]
                // 分享
                let sharedData = JSON.parse(msg.sharedData)                
                console.log(" msg.sharedData === ", sharedData)
                if (sharedData.ret == 0) {
                    sharedData = sharedData.sharedData[0]
                    sharedData.sdContent = values(JSON.parse(sharedData.sdContent))
                    DataManager.Instance.sharedData = sharedData
                }
                
            }           
            DataManager.CommonData["configFinish"] = true
            DataManager.save("isAgreementPop", true)
            DataManager.CommonData["isAgreementPop"] = true
            if (null != msg && "" != msg)
                DataManager.save("loadingConfig", msg)

            if (null != msg.md5)
                DataManager.save("loadingConfigMD5", msg.md5)
        }) 
    }

    loginGusetQTT = function() {
        console.log("loginGusetQTT")
        czcEvent("大厅", "登录2", "趣头条登录")
        var args = ParseSearch(window.location.search)

        let initParam = {
            title: "提示",
            content: "登录失败， 是否重试",
            confirmClose: true,
            confirmFunc: () => {
                DataManager.Instance.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(this.loginGusetQTT.bind(this))))                
            },
            maskCanClose: false,
            zorder: cc.macro.MAX_ZINDEX
        }
        

        // if (!QTTCheckSign(args)) {
        //     MsgBox(initParam)        
        //     return
        // }
    
        var params = {
            app_id: DataManager.Instance.QTT_APPID,
            platform: args["platform"],
            ticket: args["ticket"],
            time: BaseFunc.accurateTime(),
            sign: ''
        }
    
        QTTSign(params)
    
        let oldUid = 0
        if (DataManager.load("last_login_type") == "guest") 
            oldUid = parseInt(DataManager.load("ply_guid"))
        
        let self = this
        BaseFunc.HTTPGetRequest(DataManager.getURL("QTT_USERINFO"), params, function(res) {
            // if (DataManager.Instance.isTesting)
                console.log(res)
            if (res.code == 0) {
                DataManager.CommonData["platform"] = args.platform
                DataManager.save('last_login_type', 'guest_qtt')
                // DataManager.save('user_guest_openid', res.data.open_id)
                czcEvent("大厅", "登录3", "WEB登录 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                let param = {
                    imei: res.data.open_id,
                    name: res.data.nickname,
                    pn: DataManager.Instance.packetName,
                    // version: ver,
                    type: 2,
                    uid: oldUid,
                    qttFace: res.data.avatar
                }
                self.loginGuest(param)
            } else {
                MsgBox(initParam) 
            }
        }, null)
    }

    loginWX() {
        console.log("loginWX")
        czcEvent("大厅", "登录2", "微信登录")
        WxWrapper.login(this)
        // wx.login(
        //     (res) => {
        //         let param = {
        //             imei: res.data.open_id,
        //             name: res.data.nickname,
        //             pn: DataManager.Instance.packetName,
        //             // version: ver,
        //             type: 2,
        //             uid: oldUid,
        //             qttFace: res.data.avatar
        //         }
        //         self.loginGuest(param)
        //     },
        //     (err) => {

        //     },
        //     (res) => {

        //     }
        // ) 
    }

    // 用户注册
    loginGuest(param = null) {
        console.log("loginGuest")
        let url = DataManager.getURL("USER_LOGIN")
        if (null == url){
            console.log("USER_LOGIN is null")
            return;
        }

        if (null == param){
            param = {
                imei: DataManager.UserData.imei,//new Date().getTime() + "" + Math.random() * 10000,
                name: "Guest",
                pn: DataManager.Instance.packetName,
                version: "1.0",
                qttFace: DataManager.UserData.face.length > 0 ? DataManager.UserData.face : ''
            }
        }
        DataManager.save('user_guest_openid',  param.imei)
        let ver: string = DataManager.Instance.version
        if (-1 != ver.indexOf("."))
            ver = ver.substr(ver.lastIndexOf(".") + 1)     
        
        param.version = ver

        let self = this
        BaseFunc.HTTPGetRequest(url, param, function(msg) {
            console.log(msg)
            if (null == msg || "" == msg) {
                self.loginGuest(param)
                return;
            }
            if (msg && msg.ret == 0) {
                let data = {
                    pid: msg.pid,
                    ticket: msg.ticket,
                    nickname: msg.nickname,
                    face: param.qttFace,
                    imei: msg.imei,
                    sex: msg.sex,
                }
                DataManager.Instance.setUserData(data)
                getUserRole()
                DataManager.CommonData["isLogin"] = true
                SceneManager.Instance.sendMessageToScene("updateUserData")
                DataManager.CommonData["morrow"] = msg.first == 1 ? 0 : msg.morrow 
                DataManager.CommonData["bFirst"] = msg.first == 1 ? true : false
                DataManager.CommonData["regtime"] = msg.regtime == 0 ? new Date().getTime() / 1000 : msg.regtime
            }
        })
    }
    
    setLoadingStatus(status) {
        let instance = GameManager.Instance
        if (instance.node.childrenCount == 0)
            return
        cc.find("StartScene/loading", instance.node).active = status
    }

    onLoginFail(err){
        console.log("onLoginFail",err)
        this.setLoadingStatus(false)
        let message = null
        let onConfirm = null

        let self = this
        if (err.ret == -100) {
            message = "获取登录凭证失败,请重试!"
            onConfirm = function() {
                WxWrapper.login(self)
            }
        } else if (err.ret == -101) {
            message = "请打开用户信息授权后继续游戏!"
            onConfirm = function() {
                WxWrapper.openSetting("userInfo", function(res) {
                    if (res == true) {
                        WxWrapper.login(self)
                    } else {
                        self.onLoginFail(err)
                    }
                })
            }
        } else if (err.ret == -102) {
            message = "微信登录失败,请重试!"
            onConfirm = function() {
                WxWrapper.login(self)
            }
        } else if (err.ret == -103) {
            message = "请求错误,请稍后重试!"
            onConfirm = function() {
                WxWrapper.login(self)
            }
        } else {
            message = err.tips || "登录失败,请重试!"
            onConfirm = function() {
                WxWrapper.login(self)
            }
        }

        let callback = function(){
            cc.director.getScene().getChildByName("GameManager").runAction(cc.sequence(
                cc.delayTime(0.2),
                cc.callFunc(onConfirm)
            ))
        }

        let initParam = {
            title: "提示",
            content: message,
            confirmClose: true,
            buttonNum: 1,
            closeCallback:callback,
            maskCanClose: false,
            zorder: cc.macro.MAX_ZINDEX,
            maxAbove: true
        }

        MsgBox(initParam)
    }

    onLoginSuccess(msg){
        console.log('onLoginSuccess',msg)
        this.setLoadingStatus(true)
        let data = {
            pid: msg.pid,
            ticket: msg.ticket,
            nickname: msg.nickname,
            face: msg.face,
            imei: msg.imei,
            sex: msg.sex,
            openId: msg.openId,
        }
        
        DataManager.Instance.setUserData(data)
        getUserRole()
        DataManager.CommonData["isLogin"] = true
        SceneManager.Instance.sendMessageToScene("updateUserData")
        DataManager.CommonData["morrow"] = msg.first == 1 ? 0 : msg.morrow 
        DataManager.CommonData["regtime"] = msg.regtime == 0 ? new Date().getTime() / 1000 : msg.regtime
    }
}
