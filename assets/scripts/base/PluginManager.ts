import { PLUGIN_ENV } from "../config";
//import { bindOpenInstallInviteCode } from "../moduleLobby/LobbyFunc";
import DataManager from "./baseData/DataManager";
import { callStaticMethod, ConfirmBox, ParseSearch, pluginAdsResult, pluginPayResult, QTTSign } from "./BaseFuncTs";
import NetManager from "./baseNet/NetManager";
import BaseFunc = require("./BaseFunc")

export enum EPluginType {
    kPluginAds = 1,				//1 广告
    kPluginAnalytics,			//2 统计
    kPluginIAP,					//3 支付
    kPluginSocial,				//4 分享
    kPluginSession,				//5 登陆
    kPluginExend,				//6
    kPluginPush,				//7 推送
    kPluginIAPSelector,			//8
    kPluginPlatform,			//9 平台功能插件，各基础功能，每个应用必须接入
    kPluginIAPSms,				//10 短代支付
}

export enum EPlatformEvent {
    INIT_HEADFACE_SUCCESS = 0,
    INIT_HEADFACE_FAIL = 1,
    UPLOAD_HEADFACE_SUCCESS = 2,
    UPLOAD_HEADFACE_FAIL = 3,
    PLAYSOUND_START = 4,
    PLAYSOUND_PAUSE = 5,
    PLAYSOUND_RESUME = 6,
    PLAYSOUND_STOP = 7,
    PLAYSOUND_OVER = 8,
    PLAYSOUND_ERROR = 9,
    RECORDVOICE_START = 10,
    RECORDVOICE_CANCEL = 11,
    RECORDVOICE_OVER = 12,
    RECORDVOICE_UPLOAD_START = 13,
    RECORDVOICE_UPLOAD_OVER = 14,
    RECORDVOICE_UPLOAD_FAIL = 15,
    RECORDVOICE_FAIL = 16,
    SAVEIMG_SUCCESS = 17,			//保存到相册成功
    SAVEIMG_FAIL = 18,				//保存到相册失败
    LOCATION_SUCCESS = 19,			//定位成功
    LOCATION_FAIL = 20,				//定位失败
    GET_CLIPBOARD_SUCCESS = 21,		//获取剪切板内容成功
    GET_USERUID_SUCCESS = 22,		//获取私人房用户座椅号 
    LOGINWAWAJIROOM_SUCCESS = 23,	//进入娃娃机房间成功
    WAWAJIROOM_ONPLAY_SUCCESS = 24,	//娃娃机拉流成功
    GET_CONTACTS_SUCCESS = 25,		//获取通讯录内容成功
    GET_CONTACTS_FAIL = 26,			//获取通讯录内容失败
    GET_KEFU_FAIL = 27,				//当前客服服务不可用
    UPLOAD_EXTRAPARAM_SUCCESS = 28,	//上传图片成功
    UPLOAD_EXTRAPARAM_FAIL = 29,	//上传图片失败
    GET_SOCIALURLPARAMS = 30,		//获取url跳转app透传的参数
    GET_OPENINSTALL_PARAMS = 50,	//获取url跳转app透传的参数
}

export enum EAdsType {
    ADS_TYPE_BANNER = 0, //banner广告
    ADS_TYPE_INTER = 3, //插屏广告
    ADS_TYPE_REWARTVIDEO = 4, //视频激励广告
}
export enum EAdsResult {
    RESULT_CODE_REWARTVIDEO_SUCCEES = 12,	//激励视频广告成功
    RESULT_CODE_REWARTVIDEO_FAIL = 13,		//激励视频广告失败
}

interface IPlugin {
    name: string
    type: string
    tag: string
    mid: string
}

namespace PluginManager {
    let _pluginProxy: any
    let _iapPluginList: IPlugin[]
    export let pluginConfig: { game: { PacketName: string }[], plugins: IPlugin[] }

    export function onInit(): void {
        console.log("[PluginManager.onInit]")

        setPluginEnv()

        if (CC_JSB) {
            _pluginProxy = jsb.PluginProxyWrapper.getInstance()
            // 登陆回调
            _pluginProxy.setSessionCallBack(onSessionCallBack)
            // 支付回调
            _pluginProxy.setIapCallBack(onIapCallBack)
            // 分享回调
            _pluginProxy.setSocialCallBack(onSocialCallBack)
            // 平台回调
            _pluginProxy.setPlatformCallBack(onPlatformCallBack)
            // 广告回调
            _pluginProxy.setAdsCallBack && _pluginProxy.setAdsCallBack(onAdsCallBack)
            // Java回调
            window['JavascriptJavaCallBack'] = onJavascriptJavaCallBack

            setPluginConfig(jsb.fileUtils.getValueMapFromFile("thirdparty/plugins.plist"))
        } else {
            cc.loader.loadRes("thirdparty/plugins", (err, file) => {
                if (err) {
                    cc.error(err)
                    ConfirmBox({
                        content: "配置读取失败",
                        maskCanClose: false,
                        buttonNum: 1,
                        showClose: false,
                        confirmClose: false,
                        zIndex: cc.macro.MAX_ZINDEX
                    })
                    return
                }

                setPluginConfig(file._nativeAsset)
            })
        }
    }

    function setPluginEnv(): void {
        if (CC_JSB) {
            const config = jsb.fileUtils.getValueMapFromFile("thirdparty/config.plist")
            console.log("[PluginManager.setPluginEnv] config", JSON.stringify(config))
            if (config && config.config) {
                if (config.config.usetestenv) {
                    DataManager.Instance.CurENV = PLUGIN_ENV.ENV_TEST
                }
                if (config.config.env) {
                    DataManager.Instance.CurENV = parseInt(config.config.env)
                }
            }
        }

        const env = DataManager.load("LAST_PLUGIN_ENV")
        if (env != null) {
            DataManager.Instance.CurENV = env
        }
        console.log("[PluginManager.setPluginEnv] CurENV", DataManager.Instance.CurENV)
        DataManager.Instance.updateEnvConfig()

        const cn = DataManager.load("TEST_CN")
        if (cn != null) {
            DataManager.Instance.packetName = cn
        }
    }

    export function getConfig(name: string): string {
        return _config[name]
    }

    function setPluginConfig(config: any): void {
        console.log("[PluginManager.pluginConfig]", JSON.stringify(config))
        pluginConfig = config
        if (!DataManager.load("TEST_CN")) {
            DataManager.Instance.packetName = pluginConfig.game[0].PacketName
        }
        if (_pluginProxy) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                DataManager.Instance.packetName = callStaticMethod("com/izhangxin/utils/luaj", "getChannelName", "()Ljava/lang/String;")
            }
            _pluginProxy.setPluginConfig(JSON.stringify(pluginConfig))
            console.log("[PluginManager.pluginConfig] packetName", DataManager.Instance.packetName)
            _pluginProxy.setPackageName(DataManager.Instance.packetName)
            console.log("[PluginManager.pluginConfig] CurENV", DataManager.Instance.CurENV)
            _pluginProxy.switchPluginXRunEnv([1, 2][DataManager.Instance.CurENV] || 0)

            for (const plugin of pluginConfig.plugins) {
                loadPlugin(plugin.name, parseInt(plugin.type))
            }
        }
        loadPayModeList()

        // 检测是否有广告插件
        DataManager.GlobalData.noAD = !hasPluginByType(EPluginType.kPluginAds)

        DataManager.CommonData["pluginFinish"] = true
    }

    function loadPlugin(name: string, type: EPluginType): void {
        _pluginProxy.loadPlugin(name, 0, type)
    }

    function loadPluginByTag(tag: number, type: EPluginType): void {
        for (const plugin of pluginConfig.plugins) {
            if (parseInt(plugin.tag) == tag && parseInt(plugin.type) == type) {
                loadPlugin(plugin.name, parseInt(plugin.type))
                break
            }
        }
    }

    function loadPayModeList(): void {
        _iapPluginList = []
        for (const plugin of pluginConfig.plugins) {
            if (plugin.type == EPluginType.kPluginIAP.toString()) {
                _iapPluginList.push(plugin)
            }
        }
    }

    // { SessionResultCode: number, msg: string, sessionInfo: any }
    function onSessionCallBack(data: string): void {
        console.log("[PluginManager.onSessionCallBack] data:", data)
        NetManager.Instance.onMessage({ opcode: "PluginSessionCallBack", data: data })
    }

    // { PayResultCode: number, msg: string, payInfo: any }
    function onIapCallBack(data: string): void {
        console.log("[PluginManager.onIapCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginIapCallBack", data: data })
        pluginPayResult(data)
    }

    // { ShareResultCode: number, msg: string, shareResultInfo: any }
    function onSocialCallBack(data: string): void {
        console.log("[PluginManager.onSocialCallBack] data:", data)
        NetManager.Instance.onMessage({ opcode: "PluginSocialCallBack", packet: data })
    }

    // { PlatformResultCode: number, msg: string, url: any }
    function onPlatformCallBack(data: string): void {
        console.log("[PluginManager.onPlatformCallBack] data:", data)
        NetManager.Instance.onMessage({ opcode: "PluginPlatformCallBack", data: data })
    }

    // { AdsResultCode: number, msg: string }
    function onAdsCallBack(data: string): void {
        console.log("[PluginManager.onAdsCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginAdsCallBack", data: data })
        pluginAdsResult(data)
    }

    function onJavascriptJavaCallBack(message: { opcode: string, data: string }): void {
        console.log("[PluginManager.onJavascriptJavaCallBack] data:", JSON.stringify(message))
        NetManager.Instance.onMessage(message)
    }

    export function getPluginVersion(): string {
        if (_pluginProxy) {
            return _pluginProxy.getPluginVersion("PlatformWP", 1, 9)
        } else {
            return "5.0.0"
        }
    }

    export function getVersionName(): string {
        if (_pluginProxy) {
            return _pluginProxy.getVersionName()
        } else {
            return "3.0.0"
        }
    }

    export function getVersionCode(): number {
        return _pluginProxy ? parseInt(_pluginProxy.getVersionCode()) : 0
    }

    export function supportFullScreen(): boolean {
        return getVersionCode() >= 5
    }

    export function getDeviceName(): string {
        if (_pluginProxy) {
            return _pluginProxy.getDeviceName()
        } else {
            return "Device"
        }
    }

    export function startUpdatingLocation(): void {
        if (_pluginProxy) {
            return _pluginProxy.startUpdatingLocation()
        }
    }

    export function copyToClipboard(text: string): void {
        if (_pluginProxy) {
            _pluginProxy.copyToClipboard(text)
        }
    }

    export function getClipBoardContent(): void {
        if (_pluginProxy) {
            _pluginProxy.getClipBoardContent()
        } else {
            onPlatformCallBack(JSON.stringify({ PlatformResultCode: EPlatformEvent.GET_CLIPBOARD_SUCCESS, msg: "获取剪切板内容成功", url: "" }))
        }
    }

    export function initHeadFace(url: string): void {
        console.log("[PluginManager.initHeadFace] url:", url)
        _pluginProxy.initHeadFace(JSON.stringify({
            UpLoadURL: url
        }))
    }

    export function getPayTypeByMid(mid: string): string {
        if (!pluginConfig) {
            return
        }

        if (!_iapPluginList) {
            loadPayModeList()
        }
        for (const plugin of _iapPluginList) {
            if (plugin.mid == mid.toString()) {
                return plugin.name
            }
        }
    }

    export function getOnlyPayType(): string | false {
        if (!pluginConfig) {
            return false
        }

        if (!_iapPluginList) {
            loadPayModeList()
        }
        console.log("_iapPluginList == ", _iapPluginList)
        if (_iapPluginList.length == 1) {
            return _iapPluginList[0].name
        }

        return false
    }

    export function hasPlugin(name: string): boolean {
        if (!pluginConfig) {
            return
        }

        for (const plugin of pluginConfig.plugins) {
            if (plugin.name == name) {
                return true
            }
        }
    }

    export function hasPluginByName(name: string): boolean {
        if (pluginConfig) {
            for (const plugin of pluginConfig.plugins) {
                if (plugin.name == name) {
                    return true
                }
            }
        }
        return false
    }

    export function hasPluginByType(eType: EPluginType): boolean {
        if (pluginConfig) {
            for (const plugin of pluginConfig.plugins) {
                if (plugin.type == eType.toString()) {
                    return true
                }
            }
        }
        return false
    }

    interface ILoginInfo {
        sessionType: string
        [key: string]: string
    }
    /**
     * 插件登陆
     */
    export function login(loginInfo: ILoginInfo): void {
        console.log("[PluginManager.login] sessionType:", JSON.stringify(loginInfo))
        if (_pluginProxy) {
            loginInfo.LoginHost = DataManager.Instance.envConfigs.loginURL
            loginInfo.PlatformHost = DataManager.Instance.envConfigs.webURL
            loadPlugin(loginInfo.sessionType, EPluginType.kPluginSession)
            _pluginProxy.userItemsLogin(JSON.stringify(loginInfo))
        } else {
            let version: string = DataManager.Instance.version
            if (-1 != version.indexOf("."))
                version = version.substr(version.lastIndexOf(".") + 1)

            const param = {
                imei: DataManager.load("user_guest_openid") || new Date().getTime() + "" + Math.random() * 10000,
                name: "Guest",
                pn: DataManager.Instance.packetName,
                version: version,
                qttFace: ''
            }
            BaseFunc.HTTPGetRequest(DataManager.getURL("USER_LOGIN"), param, (msg: any) => {
                console.log("[PluginManager.login]", msg)
                DataManager.save('user_guest_openid', param.imei)
                delayCallBack(onSessionCallBack, JSON.stringify({
                    SessionResultCode: msg.ret,
                    msg: msg.tips,
                    sessionInfo: msg
                }))
            })
        }
    }
    
    function loginqtt(args: any): void {
        const params = {
            app_id: DataManager.Instance.QTT_APPID,
            platform: args["platform"],
            ticket: args["ticket"],
            time: BaseFunc.accurateTime(),
        }

        QTTSign(params)

        let uid = 0
        if (DataManager.load("last_login_type") == "guest") {
            uid = parseInt(DataManager.load("ply_guid"))
        }

        BaseFunc.HTTPGetRequest(DataManager.getURL("QTT_USERINFO"), params, (res: any) => {
            console.log(res)
            if (res.code == 0) {
                DataManager.CommonData["platform"] = args['platform']
                DataManager.save('last_login_type', 'guest_qtt')
                DataManager.save('user_guest_openid', res.data.open_id)

                let param = {
                    imei: res.data.open_id,
                    name: res.data.nickname,
                    pn: DataManager.Instance.packetName,
                    type: 2,
                    uid: uid,
                    qttFace: res.data.avatar
                }
                loginGuest(param)
            } else {
                onSessionCallBack(JSON.stringify({
                    SessionResultCode: res.code,
                    msg: res.message,
                    sessionInfo: res
                }))
            }
        }, null)
    }

    function loginGuest(param?: any): void {
        param = param || {
            imei: DataManager.load("user_guest_openid") || new Date().getTime() + "" + Math.random() * 10000,
            name: "Guest",
            pn: DataManager.Instance.packetName,
            qttFace: ''
        }

        let version: string = DataManager.Instance.version
        if (-1 != version.indexOf(".")) {
            version = version.substr(version.lastIndexOf(".") + 1)
        }
        param.version = version

        BaseFunc.HTTPGetRequest(DataManager.getURL("USER_LOGIN"), param, (msg: any) => {
            console.log("[PluginManager.login]", msg)
            DataManager.save('user_guest_openid', param.imei)
            onSessionCallBack(JSON.stringify({
                SessionResultCode: msg.ret,
                msg: msg.tips,
                sessionInfo: msg
            }))
        })
    }

    /**
     * 插件登出
     */
    export function logout(): void {
        console.log("[PluginManager.logout]")
        if (_pluginProxy) {
            _pluginProxy.logout()
        }
    }

    /**
     * 插件支付
     */
    export function pay(payType: string, payInfo: any): void {
        console.log("paypaypay === paypaypaypay")
        if (_pluginProxy) {
            loadPlugin(payType, EPluginType.kPluginIAP)
            payInfo.IapHost = DataManager.Instance.envConfigs.payURL
            console.log("[PluginManager.share]", JSON.stringify(payInfo))
            _pluginProxy.payForProduct(JSON.stringify(payInfo))
        } else {
            delayCallBack(onIapCallBack, JSON.stringify({
                PayResultCode: 0,
                msg: "支付完成",
                payInfo: {}
            }))
        }
    }

    interface IShareInfo {
        ShareWay: string
        ShareTaskType: string
        ShareTitle: string
        ShareText: string
        ShareUrl: string
        ShareType: string
        gameid: string
        SharedImg?: string
    }
    /**
     * 插件分享
     */
    export function share(shareInfo: IShareInfo): void {
        if (_pluginProxy) {
            console.log("[PluginManager.share]", JSON.stringify(shareInfo))
            _pluginProxy.shareWithItems(JSON.stringify(shareInfo))
        } else {
            delayCallBack(onSocialCallBack, JSON.stringify({
                ShareResultCode: 0,
                msg: "分享成功",
                shareResultInfo: {}
            }))
        }
    }

    /**
     * 打开客服
     */
    export function openKeFu(): void {
        jump2ExtendMethod(3)
    }

    function jump2ExtendMethod(tag: number): void {
        console.log("[PluginManager.jump2ExtendMethod]", tag)
        if (_pluginProxy) {
            loadPluginByTag(tag, EPluginType.kPluginExend)
            _pluginProxy.jump2ExtendMethod(tag, JSON.stringify({}))
        }
    }

    /**
     * 登陆完成后通知推送插件 让它去注册推送
     */
    export function StartPushSDK(): void {
        console.log("[PluginManager.StartPushSDK]")
        if (_pluginProxy) {
            _pluginProxy.StartPushSDKItem(JSON.stringify({ PushHost: DataManager.Instance.envConfigs.webURL }))
        }
    }

    /**
     * 友盟 统计事件
     */
    export function logEvent(name: string, param?: any): void {
        if (_pluginProxy) {
            console.log("[PluginManager.logEvent]", name, JSON.stringify(param))
            _pluginProxy.logEvent(1, name, JSON.stringify(param) || '')
        }
    }

    /**
     * 获取 OpenInstall 参数
     */
    export function getOpenInstallParms(): void {
        console.log("[PluginManager.getOpenInstallParms]")
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            callStaticMethod("com/izhangxin/utils/luaj", "getOpenInstallParms", "()V")
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            callStaticMethod("LuaObjc", "getOpenInstallParms")
        } else if (cc.sys.isNative) {
            delayCallBack(onPlatformCallBack, JSON.stringify({
                PlatformResultCode: EPlatformEvent.GET_OPENINSTALL_PARAMS,
                msg: "获取app安装参数",
                url: JSON.stringify({
                    inviteCode: "111474"
                }),
            }))
        }
    }

    /**
     * 展示广告
     */
    export function showAds(adsType: EAdsType): void {
        console.log("[PluginManager.showAds]", adsType)
        if (_pluginProxy) {
            _pluginProxy.showAds(adsType, 0, 0)
        } else {
            delayCallBack(onAdsCallBack, JSON.stringify({
                AdsResultCode: adsType == EAdsType.ADS_TYPE_REWARTVIDEO ? EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES : 0,
                msg: "",
            }), 3)
        }
    }

    /**
     * 隐藏广告
     */
    export function hideAds(adsType: EAdsType): void {
        console.log("[PluginManager.hideAds]", adsType)
        if (_pluginProxy) {
            _pluginProxy.hideAds(adsType)
        }
    }

    function delayCallBack(callback: Function, data: any, time: number = 0.5) {
        if (_pluginProxy) {
            return
        }

        cc.Canvas.instance.node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(() => {
            callback(data)
        })))
    }
}

export default PluginManager
