import SceneManager from "./baseScene/SceneManager";
import DataManager from "./baseData/DataManager";
import BaseFunc = require("./BaseFunc")
import md5 = require("./extensions/md5.min")
import NetManager from "./baseNet/NetManager";
import { getPlayerStatusReq, getReliefState, sendReloadUserData } from "../moduleLobby/LobbyFunc";
import BaseScene from "./baseScene/BaseScene";
import GameManager from "./GameManager";
import PluginManager, { EAdsResult, EAdsType } from "./PluginManager";
import { getGameConfig, getGameName, isAndroidGame } from "../gameConfig"
import WxWrapper from "./WxWrapper";
import { isWeChatGame } from "../gameConfig";
const {ccclass, property} = cc._decorator;

export function IndexErrMsg(error) {
    if (error) {
        var splash = document.getElementById('splash');
        var err = splash.getElementsByClassName("errmsg")
        if (err && err[0]) {
            err[0].innerText = error
        }
    }
}

export function PostInfomation(data) {
    if (!BaseFunc.IsJSON(data)) {
        data = JSON.stringify(data)
    }
    let url = "https://reports.wpgame.com.cn"

    if(!isWeChatGame()){
        BaseFunc.HTTPPostRequestForm(url, data)
    }
}


export function MsgBox(initParam) {
    SceneManager.Instance.popScene<String>("moduleLobby", "MsgBox", initParam)
}

export function ParseSearch(search) {
    var args = {}
    if(search){
        if (search.indexOf('?') != -1) {
            var query = search.substr(1)
            var pairs = query.split('&')
            for (var i = 0; i < pairs.length; i++) {
                var sp = pairs[i].split('=')
                args[sp[0]] = decodeURIComponent(sp[1])
            }
        }
    }
	return args
}

export function QTTSign(values) {
	delete values.sign
	values.app_key = DataManager.Instance.QTT_APPKEY
	let keysArr = []
	for (let key in values) {
        if (key != "_NO_BRIDGE_" && key != "env" && key != "isTesting" && key != "openview")
		    keysArr.push(key)
	}
	keysArr.sort()
	let keys = ''
	keysArr.forEach((e) => {
		keys += e
		keys += values[e]
	})

	delete values.app_key
	let sign = md5(keys)
	values.sign = sign
	return sign
}

export function QTTCheckSign(values) {
	let sign1 = values.sign
	if (!sign1) {
		return false
	}
	let sign2 = QTTSign(values)
	if (sign1 !== sign2) {
		return false
	}
	return true
}

export function openQttTaskFrame() {
    if (window.qttGame)
        window.qttGame.openDialogMission();
}

export function loadModule(moduleName, succ: () => void = null, fail: () => void = null) {
    let path = moduleName + "/prefab/ModuleStart";
    cc.loader.loadRes(path, 
        (err, res) => {
        if (err) {
            console.log(err)
            fail && fail()
        }
        else if (res instanceof cc.Prefab) {
            let moduleStart = cc.instantiate(res)
            moduleStart.parent = cc.Canvas.instance.node
        }
        else{
            console.log(err)
            console.log(res)
        }
    })
}

export function getUserRole(callback: () => void = null) {
    let url = DataManager.getURL("GET_USER_ROLE")
    let token = md5("uid=" + DataManager.UserData.guid + "&key=232b969e8375");
    let params = {
        pid: DataManager.UserData.guid,
        flag: "lobby",
        sgtype: "f33",
        ticket: DataManager.UserData.ticket,
        pn: DataManager.Instance.packetName,
        versioncode: 14042902,
        version: DataManager.Instance.version,
        gameid: DataManager.Instance.gameId,
        token: token,
    };

    let self = this
    BaseFunc.HTTPGetRequest(url, params, function(msg) {
        if (null == msg)
            return

        DataManager.CommonData["roleCfg"] = msg

        let userInfo = JSON.parse(DataManager.CommonData["roleCfg"]["userInfo"])
        if (null != userInfo) {
            DataManager.CommonData["bindPhone"] = []
            if (userInfo.ret == 1){
                DataManager.CommonData["bindPhone"].hasBindMoble = 1
                DataManager.CommonData["bindPhone"].BindPhone = userInfo.phone
            }
            else{
                DataManager.CommonData["bindPhone"].hasBindMoble = 0
            }
            DataManager.CommonData["bindReward"] = userInfo.bindReward
        }

        DataManager.CommonData["firstPayBox"] = JSON.parse(DataManager.CommonData["roleCfg"]["firstPayBox"])

        callback && callback()
    })
}

export function copyToClipBoard(str: string, succTip: string = "已复制到剪贴板") {
    if (CC_WECHATGAME) {
        WxWrapper.setClipboardData(str, function (success) {
            let initParam = null
            if (success) {
                initParam = {
                    title: "提示",
                    content: succTip,
                    buttonNum: 1,
                    confirmClose: true,
                }
            } else {
                initParam = {
                    title: "提示",
                    content: "复制到剪贴板失败",
                }
            }
            MsgBox(initParam)
        })
    } else if (cc.sys.isNative) {
        PluginManager.copyToClipboard(str)
        MsgBox({
            title: "提示",
            content: succTip,
            buttonNum: 1,
            confirmClose: true,
        })
    } 
    else if (cc.sys.isBrowser) {
        var textArea = document.getElementById("clipBoard");
        if (textArea === null) {
            textArea = document.createElement("textarea");
            textArea.id = "clipBoard";
            textArea.textContent = str;
            document.body.appendChild(textArea);
        }
        textArea.select();
        try {
            const msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
            let initParam = {
                title: "提示",
                // content: "已经复制到剪贴板",
                content: succTip,
                buttonNum: 1,
                confirmClose: true,
            }
            MsgBox(initParam)
            document.body.removeChild(textArea);
        } 
        catch (err) {
            let initParam = {
                title: "提示",
                content: "复制到剪贴板失败",
            }
            MsgBox(initParam)
        }
    }
}

export function iMessageBox(content, func = null) {
    SceneManager.Instance.popScene<String>("moduleLobby", "iMessageBox", {message: content, callback: func, noSing: true, zorder: 2000})
}

// export function showAwardResultPop(itemIndex, awardNum, func = null, img = null) {
export function showAwardResultPop(awards: any[], initParam = null, func = null) {
    if (null == initParam)
        initParam = []

    initParam["awards"] = awards
    initParam["closeCallback"] = func
    SceneManager.Instance.popScene<String>("moduleLobby", "AwardResultPop", initParam)
}

export function showTokenGrowPop(num: number, func = null) {
    if (cc.sys.isNative) {
        func && func()
        return
    }
    let initParam = []
    initParam["target"] = DataManager.CommonData["QttPoint"] 
    initParam["itemIndex"] = 367
    initParam["itemNum"] = num
    initParam["zorder"] = 2000
    initParam["closeCallback"] = func
    SceneManager.Instance.popScene<String>("moduleLobby", "TokenGrowAniPop", initParam)
}

export function checkPhoneBinding() {
    if (DataManager.CommonData["bindPhone"].hasBindMoble != 1) {
        SceneManager.Instance.popScene("moduleLobby", "BindPhonePop")
        return false
    }

    return true
}

export function payOrder(boxItem, callback: () => void = null) {
    // 实名认证 才能支付
    if (DataManager.CommonData["roleCfg"].isBinding != 1) {
        if (DataManager.Instance.onlineParam.idvalidPay == 1) {
            SceneManager.Instance.popScene<String>("moduleLobby", "AutonymPop", { canClose: true, content: "亲爱的用户，根据青少年防沉迷系统的要求，请认证后再充值" })
            return
        } else if (DataManager.Instance.onlineParam.idvalidPay == 2) {
            SceneManager.Instance.popScene<String>("moduleLobby", "AutonymPop", { canClose: false, content: "亲爱的用户，根据青少年防沉迷系统的要求，请认证后再充值" })
            return
        }
    }

    console.log("payOrder ==== strat")
    if(isWeChatGame()){
        if(cc.sys.os == cc.sys.OS_IOS) {
            return
        }

        if (DataManager.CommonData["AllowPayment"] == false) {
            iMessageBox("IOS暂不支持支付功能")
            return
        }

        if (!boxItem) {
            iMessageBox("商品不存在")
            return
        }
 
        WxWrapper.payOrder({
            boxid: boxItem.boxid,
            price: boxItem.price
        }, function (res) {
            if (res.ret == 0) {
                sendReloadUserData()
                boxItem.type && getShopBox(boxItem.type)
                callback && callback(res.ret == 0)
            } else {
                var message = null
                if (res.ret == -200) {
                    message = "账号过期,需要重新登录"
                } else if (res.ret == -201) {
                    message = "创建订单失败 " + res.tips
                } else if (res.ret == -2 || res.ret == 1) {
                    message = "支付取消"
                } else {
                    message = "支付失败 code:" + res.ret
                }
                iMessageBox(message)
            }
        })
    }else{
        if (cc.sys.isNative) {
            let onlyPayMid
            if (DataManager.GlobalData.isReview) {
                onlyPayMid = DataManager.Instance.onlineParam['review_only_paymid'] || '5'
            }
    
            const payTypeList:string[] = []
            if (boxItem && boxItem.pmList) {
                for (const pm of boxItem.pmList) {
                    if (onlyPayMid && pm.mid != onlyPayMid) {
                        continue
                    }
                    const payType = PluginManager.getPayTypeByMid(pm.mid.toString())
                    if (payType) {
                        payTypeList.push(payType)
                    }
                }
            }
            if (payTypeList.length == 0) {
                console.log("payTypeList.length == 0 === ", boxItem.pmList)
                iMessageBox('您购买的商品不存在')
                return
            }
    
            let onlyPayType = PluginManager.getOnlyPayType()
            if (onlyPayType) {
                for (const payType of payTypeList) {
                    if (payType == onlyPayType) {
                        pluginPay(payType, boxItem, callback)
                        return
                    }
                }
                console.log("payTypeList.length != onlyPayType == ", onlyPayType)
                iMessageBox('您购买的商品不存在')
                return
            }
    
            SceneManager.Instance.popScene("moduleLobby", "PayBox", { boxItem: boxItem, callback: callback })
            return
        }
        let url = DataManager.getURL("QTT_ORDER")
        let param = {
            pid: DataManager.UserData.guid,
            boxid: boxItem.boxid
        }

        BaseFunc.HTTPGetRequest(url, param, function(res) {
            if (res && res.ret == 0) {
                let pm = {
                    money: boxItem.price * 100,
                    appId: DataManager.Instance.QTT_APPID,
                    openId: DataManager.load('user_guest_openid'),
                    notifyUrl: DataManager.getURL("QTT_NOTIFY"),
                    platform: DataManager.CommonData["platform"],
                    ext: '{"orderno":"' + res.order + '"}',
                    land: 1
                }
                console.log("order succ", DataManager.getURL("QTT_NOTIFY"))
                console.log(pm)
                if (!DataManager.Instance.isTesting && window.qttGame){
                    console.log("window.qttGame == true")
                    window.qttGame.pay(pm)
                }
                sendReloadUserData()
                boxItem.type && getShopBox(boxItem.type)
                callback && callback()
            }
            else{
                iMessageBox(res ? res.msg : '创建订单失败')
            }
        })
    }
}

export function payOrderH5(boxItem, callback: () => void = null, tag) {
    if(tag=="Alipay"){
        let url = DataManager.getURL("GETALIPAYH5")
        if (null == url){
            console.log("GETALIPAYH5 is null")
            return;
        }
        let params = {
            pid : DataManager.UserData.guid,
            ticket : DataManager.UserData.ticket,
            boxid : boxItem.boxid,
            pn : DataManager.Instance.packetName,
    
            client : "wap",//"wap"or"wab",
            num : 1,
            gameId : DataManager.Instance.gameId,
            //亲友圈充值相关信息
            // clubName : data.clubName?data.clubName:"",
            // clubId : data.clubId?data.clubId:0,
            // clubPayType : data.clubPayType?data.clubPayType:0,
        }
        cc.log("params",params)
        callback && callback()
        // callback && callback({url:url,params:params})
        showWebViewLayer({url:url,params:params})
    }else if (tag=="WeiXin") {
        let url = DataManager.getURL("GETWEIXINH5")
        if (null == url){
            console.log("GETWEIXINH5 is null")
            return;
        }
        let timestamp = new Date().getTime() / 1000
        timestamp = timestamp.toString()
        timestamp = timestamp.substring(0,timestamp.indexOf("."))
        let params = {
            pid : DataManager.UserData.guid,
            ticket : DataManager.UserData.ticket,
            boxid : boxItem.boxid,
            pn : DataManager.Instance.packetName,
            time : timestamp,
    
            // client : "wap",//"wap"or"wab",
            // num : 1,
            // gameId : DataManager.Instance.gameId,
            //亲友圈充值相关信息
            // clubName : data.clubName?data.clubName:"",
            // clubId : data.clubId?data.clubId:0,
            // clubPayType : data.clubPayType?data.clubPayType:0,
        }
        cc.log("params",params)
        // callback && callback({url:url,params:params})
        showWebViewLayer({url:url,params:params})
    }
}

export function pluginPay(payType: string, boxItem: any, callback: Function) {
    console.log("[pluginPay] === ", payType)
    const info = {
        boxId: boxItem.boxid,
        goodsLogo: boxItem.icon,
        goodsName: boxItem.boxname,
        desc: boxItem.desc,
        serialno: boxItem.serino,
        saleMoney: boxItem.price,
        isSmsQuickPay: 0,
        havePhone: boxItem.havePhone,
    }
    if (boxItem.pmList) {
        for (const pm of boxItem.pmList) {
            info['mid_' + pm.mid] = pm.serialno
        }
    }
    DataManager.GlobalData.IapCallBack = callback
    PluginManager.pay(payType, info)
}

export function pluginPayResult(data: string) {
    const info: { PayResultCode: number, msg: string, payInfo: any } = JSON.parse(data)
    if (info.msg.length > 0) {
        iMessageBox(info.msg)
    }
    if (info.PayResultCode == 0) {
        sendReloadUserData()
        if (DataManager.GlobalData.IapCallBack) {
            DataManager.GlobalData.IapCallBack()
            DataManager.GlobalData.IapCallBack = null
        }
    }
}

export function pluginAdsResult(data: string) {
    console.log('[pluginAdsResult]', data)
    const info: { AdsResultCode: number, msg: string } = JSON.parse(data)
    if (!DataManager.GlobalData.AdsCallBack) {
        return
    }
    if (info.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
        if (DataManager.GlobalData.AdsCallBack) {
            DataManager.GlobalData.AdsCallBack()
        }
        DataManager.GlobalData.AdsCallBack = null
    } else if (info.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL) {
        MsgBox({
            title: "提示",
            content: "完整观看视频才可以领取奖励哦",
            confirmClose: true,
            maskCanClose: false,
            buttonNum: 1,
        })
        DataManager.GlobalData.AdsCallBack = null
    }
}

export function playADBanner(show: boolean = true, index: number = -1, options = null) {   
    if (DataManager.GlobalData.noAD){
        return
    }
    if (cc.sys.isNative || CC_PREVIEW) {
        if (show) {
            PluginManager.showAds(EAdsType.ADS_TYPE_BANNER)
        } else {
            PluginManager.hideAds(EAdsType.ADS_TYPE_BANNER)
        }
        return
    }
    /**
     * 显示趣头条的banner广告
     * https://newidea4-gamecenter-frontend.1sapp.com/sdk/docs/#/sdk/api/guang_gao?id=api
     */
    
    let enableBannerAds = true

    if (!enableBannerAds) {
        return false
    }

    if (!window.qttGame) {
        return false
    }

    if (!show) {
        window.qttGame.hideBanner()   
        return false     
    }

    switch (index) {
        case DataManager.AdsConfig.banner.GameResultLayer_rpddz:
        case DataManager.AdsConfig.banner.GameResultLayer_hbermj:
            let nowStamp = BaseFunc.Random(100)
            if(nowStamp%2 > 0) {
                return;
            } 
            break;    
    }
 
    let defaultOptions = options
    if (defaultOptions == null) {
        const canvas = cc.Canvas.instance
        const designSize = canvas.designResolution
        const frameSize = cc.view.getFrameSize()
        console.log("frameSize", frameSize)
        console.log("designSize", designSize)
        console.log("cc.winSize", cc.winSize)
        console.log("window.innerWidth", window.innerWidth)
        let ads_width = 600 // * designSize.width / window.innerWidth
        let ads_height = 72

        defaultOptions = {
            index: index,
            x:designSize.width/2-ads_width/2,
            // y:designSize.height-ads_height,
            w:ads_width,
            stage_width:designSize.width,
            stage_height:designSize.height,
        }
    }         
    window.qttGame.showBanner(defaultOptions);

    
    let actionList = []
    actionList[actionList.length] = cc.delayTime(5)
    actionList[actionList.length] = cc.callFunc(function() {
        playADBanner(false)
    }),
    
    DataManager.Instance.node.runAction(cc.sequence(actionList))

    

    return true
    
}

export function playAD(index: number = 0, callback: () => void = null) {   
    if (typeof index != "number"){
        callback = index;
        index = 0;
    }
    if (DataManager.GlobalData.noAD){
        callback()
        return
    }

    if (cc.sys.os == cc.sys.OS_WINDOWS || DataManager.Instance.isTesting){
        callback()
        return
    }
    
    if (cc.sys.isNative || CC_PREVIEW) {
        DataManager.GlobalData.AdsCallBack = callback
        PluginManager.showAds(EAdsType.ADS_TYPE_REWARTVIDEO)
        return
    }

    let options = {
        index: index,
        gametype: 1,
        rewardtype: 1,
        data: {
            title:'刷新道具',
            url:'//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png'
        },
    }
      
    // window.qtt_help.ad.showBanner()
    if (window.qttGame) {
        cc.audioEngine.pauseAllEffects(); 
        cc.audioEngine.pauseMusic()
        window.qttGame.showVideo(function(res) {
            if (res == 1) {
                if (null != callback)
                    callback()
            }
            else if(res == 2) {
                // iMessageBox("观看广告失败")
                let initParam = {
                    title: "提示",
                    content: "完整观看视频才可以领取奖励哦",
                    confirmClose: true,
                    maskCanClose: false,
                    buttonNum: 1,
                }
                MsgBox(initParam)
            }
            cc.audioEngine.resumeAllEffects(); 
            cc.audioEngine.resumeMusic()            
        }, options)
    }
}

export function socialShare(shareData) {
    shareData = shareData || {}

    shareData.query = shareData.query || {}

    if (shareData.withOpenId) {
        shareData.query.openId = DataManager.UserData.openId
    }

    let query = ''
    let prefix = ''
    for (let key in shareData.query) {
        query += prefix + key + '=' + shareData.query[key]
        prefix = '&'
    }
    shareData.query = query

    let titles = [
        "好友来助攻，海量红包进来就领！",
        "玩游戏送红包，轻松游戏，轻松赚红包！",
        "免费红包送不停，赶紧来领！"
    ]

    let images = [
        "static/share1.jpg",
        "static/share2.jpg"
    ]
    
    WxWrapper.shareAppMessage({
        title: shareData.title || titles[Math.floor(Math.random() * titles.length)],
        imageUrl: shareData.imageUrl || images[Math.floor(Math.random() * images.length)],
        query: shareData.query,
        callback: shareData.callback
    })
}

export function completeTask() {
    window.qttGame.completeTask();
}

export function uploadGameRound(num: number = 1, callback: () => void = null) {
    if (cc.sys.os == cc.sys.OS_WINDOWS || DataManager.Instance.isTesting || !window.qttGame){
        return
    }

    let pm = {
        role:"",
        region:'',
        level:0,
        round:1
    }
    window.qttGame.userInfo(pm)

    this.completeTask()
    
    if (null != callback)
        callback()
}

export function enterGame(server, callFunc: () => void = null, delay = false) {
    if (DataManager.Instance.isTesting)
        console.log("entergame " + new Date().getTime())
    czcEvent("大厅", "进入游戏", "加载游戏模块 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    if (DataManager.CommonData["gameServer"]) {
        NetManager.Instance.close(DataManager.CommonData["runGame"])
        delete DataManager.CommonData["runGame"]
        delete DataManager.CommonData["gameServer"]
    }

    cc.audioEngine.stopAll()

    DataManager.CommonData["RedpacketCount"] = DataManager.UserData.getItemNum(365)
    DataManager.CommonData["QttCount"] = DataManager.UserData.getItemNum(367)

    // let moduleName = ""
    
    // switch (server.gameId) {
    //     case 389:
    //     case 388:
    //         moduleName = "moduleRPDdz"        
    //         break;
    //     case 391:
    //         moduleName = "moduleHBErmj"
    //         break;
    // }
    
    // if (moduleName && moduleName != "") {    
        // DataManager.save(DataManager.UserData.guid + "lastGameId", server.gameId)
        DataManager.CommonData["gameServer"] = server
        GameManager.onChangeFire()    
        // cc.director.loadScene(moduleName, (err) => {
        //     if (err) console.log(err)
        //     console.log("loadFinish")
        //     czcEvent("大厅", "进入游戏", "游戏模块加载完成")
        //     callFunc && callFunc()
        // }) 
        // let node = new cc.Node()
        // cc.Canvas.instance.node.addChild(node)
        let moduleName = getGameConfig(server.gameId)
        if (moduleName) {
            czcEvent(getGameName(server.gameId), "加载1", "开始加载 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        if (delay) {
            cc.Canvas.instance.node.runAction(cc.sequence(
                cc.delayTime(3),
                cc.callFunc(() => {
                    loadModule(moduleName + "Res")
                })
            ))
        } else {
            loadModule(moduleName + "Res")
        }
    }

        // if (server.gameId == 389 || server.gameId == 390) {
        //     // console.log("addComponent " + new Date().getTime())
        //     czcEvent("斗地主", "加载1", "开始加载 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            
        //     // node.addComponent(moduleRPDdz)    
        //     loadModule("moduleRPDdzRes")
        // }
        // else if (server.gameId == 391) {
        //     czcEvent("二人麻将", "加载1", "开始加载 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        //     // node.addComponent(moduleHBErmj) 
        //     loadModule("moduleHBErmjRes")   
        // }
        
    // }
}

export function gobackToMain(param?) {
    czcEvent("大厅", "离开游戏", "回到大厅 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    if (DataManager.CommonData["gameServer"]) {
        NetManager.Instance.close(DataManager.CommonData["runGame"])
        DataManager.CommonData["leaveGameLevel"] = DataManager.CommonData["gameServer"].level
        DataManager.CommonData["leaveGameIsPrivate"] = DataManager.CommonData["gameServer"].isPrivate
        delete DataManager.CommonData["runGame"]
        delete DataManager.CommonData["gameServer"]

        DataManager.CommonData["leaveGame"] = true
        czcEvent("大厅", "离开游戏", "断开游戏服务器 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    }   
    
    cc.audioEngine.uncacheAll()
    cc.audioEngine.stopAll()

    // isOnGameExit 0 正常退出 1 强制退出 -1 断线退出
    if (null != param && null != param["isOnGameExit"] && -1 != param["isOnGameExit"])
        DataManager.CommonData["isOnGameExit"] = param["isOnGameExit"]
    else
        DataManager.CommonData["isOnGameExit"] = null // 空状态会自动进入

    sendReloadUserData()
    
    // cc.director.loadScene("moduleLobby", () => {    
    //     czcEvent("大厅", "离开游戏", "加载大厅模块完成")
    //     if (DataManager.UserData.money < 1000) {
    //         DataManager.Instance.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(() => ReliefPop())))
    //     }
    // })
    // let node = new cc.Node()
    // cc.Canvas.instance.node.addChild(node)
    // node.addComponent(ModuleLobby)    
    loadModule("moduleLobby")
    GameManager.onChangeFire()

    if (DataManager.CommonData["firstLogin"] && null == DataManager.CommonData["qttExchange"]) {
        SceneManager.Instance.popScene("moduleLobby", "TeachScene", { qttExchange: true })
        return
    }
}

export function showShopPop() {
    if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
        return
    }
    // SceneManager.Instance.popScene<String>("moduleLobby", "ShopPop")
    if (DataManager.CommonData["gameServer"]) {
        DataManager.CommonData["needMoney"] = DataManager.CommonData["gameServer"]["level"] == 1 ? 60000 : 100000
        if(isWeChatGame()){
            DataManager.CommonData["needMoney"] = DataManager.CommonData["gameServer"]["level"] == 1 ? 60000 : 120000
        }
    }
    this.quickPayPop()
}

export function gobackGameforonExitConfirm(){
    let initParam = {
        title: "提示",
        content: "您上局游戏还没有结束，快回去虐他们！",
        confirmClose: true,
        confirmFunc: () => {
            getPlayerStatusReq([DataManager.UserData.guid])
        },
        maskCanClose: false
    }
    MsgBox(initParam)
}

let UnenoughState = cc.Enum({
    ONCE_PAY_BOX: 0,
    QUICK_PAY_BOX: 1,
    RELIEF_GOLD: 2,
})

let gameUnenough = [0]
let lobbyUnenough = [2]

export function checkFirstBox(price = 6, havePhone: number = 0, gold: number = -1) {
    for (const iterator of DataManager.Instance.OnceBoxs) {
        if (iterator.price == price && iterator.havePhone == havePhone) {
            if (iterator.isBuy == 0)
                return iterator    
        }
    }

    return null
}

export function checkOneYuanBox(price = 6, havePhone: number = 0, gold: number = -1) {
    for (const iterator of DataManager.Instance.OneYuanBoxs) {
        if (iterator.price == price && iterator.havePhone == havePhone) {
            if (iterator.isBuy == 0)
                return iterator    
        }
    }

    return null
}

export function oncePayBox(callback ?: (bFinish:boolean) => void, bQuickPay: boolean = true) {
    if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
        return
    }
    let bFind = null;
    if (DataManager.Instance.isTesting)
        console.log(DataManager.Instance.OnceBoxs)
    bFind = checkFirstBox()

    if (null == bFind && bQuickPay == true) {
        quickPayPop(callback)

        // if (null != callback)
        //     callback(false)
        return 
    }
    else if (null != bFind) {
        SceneManager.Instance.popScene("moduleLobby", "FirstPayPop", {box: bFind, closeCallback: callback})
    }
}

export function quickPayPop(callback ?: (bFinish:boolean) => void) {
    if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
        return
    }
    SceneManager.Instance.popScene("moduleLobby", "QuickPayPop", {closeCallback: callback})
}

export function ReliefPop(callback ?: (bFinish:boolean) => void) {    
    let pop = function(){
        if (DataManager.CommonData["reliefStatus"]["reliefTimes"] > 0) {
            SceneManager.Instance.popScene("moduleLobby", "BankruptDefend", {closeCallback: callback})    
        }
        else {
            unenoughGuidPop(callback)
        }
        // else if (null != callback) {
        //     callback(false)
        // }
        // else{
        //     SceneManager.Instance.popScene("moduleLobby", "UnenoughGuidePop")
        // }        
    }

    if (null == DataManager.CommonData["reliefStatus"]){
        getReliefState()
        DataManager.Instance.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function() {ReliefPop(callback)})))
    }
    else{
        pop()
    }    
}

export function unenoughGuidPop(callback ?: (bFinish:boolean) => void) {
    SceneManager.Instance.popScene("moduleLobby", "UnenoughGuidePop", {closeCallback: callback}, cc.Vec2.ZERO, (scene: BaseScene) => {
        if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
            scene.hideChongZhi("nodePop/nodeItem1/content",false)
            scene.hideChongZhi("nodePop/nodeItem2",false)
        }
        scene.setLabelString("nodePop/nodeItem2/content", "充值" + (DataManager.CommonData["needMoney"]/10000) + "元获得" + DataManager.CommonData["needMoney"] + "金豆")
    })
}

export function unenoughGold(type: number, enoughMoney: number, callback: () => void = null) { 
    // console.log("unenoughGold ")
    if (DataManager.CommonData["gameServer"])
        type = 0
    else
        type = 1
        
    let sequence = type == 1 ? lobbyUnenough : gameUnenough

    DataManager.CommonData["needMoney"] = enoughMoney > 60000 ? 100000 : 60000

    let isJunior = null != DataManager.CommonData["gameServer"] ? DataManager.CommonData["gameServer"]["level"] == 1 : true

    // let func: (result: boolean) => void[] = []
    let func = []
    func[sequence.length] = callback
    for (let idx = sequence.length - 1; idx >= 0; idx--) {
        let popFunc: (result: boolean) => void = null
        if (UnenoughState.ONCE_PAY_BOX == sequence[idx] && isJunior) 
            popFunc = (result: boolean) => { if (!result) oncePayBox(func[idx + 1]); else if (null != callback) callback()}
        else if (UnenoughState.QUICK_PAY_BOX == sequence[idx] || UnenoughState.ONCE_PAY_BOX == sequence[idx]) 
            popFunc = (result: boolean) => { if (!result) quickPayPop(func[idx + 1]); else if (null != callback) callback()}
        else if (UnenoughState.RELIEF_GOLD == sequence[idx] && enoughMoney > 1000)
            popFunc = (result: boolean) => { if (!result) unenoughGuidPop(func[idx + 1]); else if (null != callback) callback()}
        else if (UnenoughState.RELIEF_GOLD == sequence[idx])
            popFunc = (result: boolean) => { if (!result) ReliefPop(func[idx + 1]); else if (null != callback) callback()}
            
        func[idx] = popFunc
    }

    func[0](false);
}

export function checkServerMoneyLimit(server, callback: () => void = null) {    
    if (server.minMoney > DataManager.UserData.money) {                
        unenoughGold(0, server.minMoney, callback)
        return false
    }
    else if (server.maxmoney < DataManager.UserData.money) {
        let servers = getLowMoneyRoom(server.gameId)
        if (servers.length > 0) {
            let initParam = {
                title: "提示",
                content: "您的金豆已经超过本场上限，请您前往更高场次赢取更多红包和金豆",
                confirmClose: true,
                confirmFunc: () => {
                    enterGame(servers[0], null, true)
                },
                cancelFun: callback,
                maskCanClose: false,
                buttonNum: 1,
                confirmTexture: DataManager.Instance.getSpriteFrame("common", "btn_go_now")
            }
            MsgBox(initParam)
        }
        else{        
            let initParam = {
                title: "提示",
                content: "您的金豆已经大于场次最高上限",
                buttonNum: 1,
                confirmClose: true,
                confirmFunc: callback,
                maskCanClose: false
            }
            MsgBox(initParam)
        }
        return false
    }
    
    return true
}

export function getLowMoneyRoom(gameid, level = null) {
    if (null == DataManager.CommonData["ServerDatas"] || null == DataManager.CommonData["ServerDatas"][gameid])
        return null

    let servers = getNewBieServer(gameid)
    if (null == servers || servers.length == 0)
        servers = DataManager.CommonData["ServerDatas"][gameid]
        .filter(item => item.newbieMode != 1 && 
            (level == null || item.level == level) &&
            item.minMoney <= DataManager.UserData.money && 
            (item.maxmoney >= DataManager.UserData.money || item.maxmoney == null) &&
            item.lc_room_mode != 1 )
    if (null == servers || 0 == servers.length)
        return servers

    servers.sort((a, b) => a.level < b.level ? -1 : a.level > b.level ? 1 : 0)
    let minLevel = servers[0].level
    servers = servers.filter(item => item.level == minLevel)    
    return servers
}

export function getServerByGameIdAndServerId(gameid, serverid) {
    if (null == DataManager.CommonData["ServerDatas"] || null == DataManager.CommonData["ServerDatas"][gameid])
        return null
    return DataManager.CommonData["ServerDatas"][gameid].filter(item => item.serverId == serverid)
}

export function getMD5(value) {
    return md5(value)
}

export function getHttpSpriteFrame(url: string, callback: (spriteFrame: cc.SpriteFrame) => void = null) {
    if (url == null || url == '') {
        return
    }

    if (CC_WECHATGAME && url.indexOf("1sapp.com") != -1) {
        // url = "https://pictures.hiigame.com/qmddz/1495187830605523.jpg"
        url = "https://static.1sapp.com/image/p/2017/05/19/1495187830605523.jpg"
    }

    let key = getMD5(url)
    let spriteFrame = DataManager.Instance.getSpriteFrame(key)
    if (null != spriteFrame && callback != null)
        callback(spriteFrame)

    if (null == spriteFrame){
        url = url.replace("http://", "https://")

        cc.loader.load({url: url, type: "png"}, function(err, texture){
            if (err) {
                return
            }
            else{
                let spriteFrame = new cc.SpriteFrame(texture) 
                DataManager.addSpriteFrame(key, spriteFrame)
                
                if (null != spriteFrame && callback != null)
                    callback(spriteFrame)
            }
        })
    }
}

export function showTrumpet(msg = null) {
    if (DataManager.GlobalData.isReview) {
        return
    }
    if (false == SceneManager.Instance.isSceneExist("TrumpetCom"))
        SceneManager.Instance.popScene("moduleLobby", "TrumpetCom", {msg: msg, addToPage: true})
}

export function numberFormat(num: number, floatNum: number = 2, isEnforce: boolean = false) {
    if (num >= 100000000) {
        return (num / 100000000 > 1000 ? Math.floor(num / 100000000):
                   num / 100000000 > 100 ? Math.floor(num / 10000000) / 10:
                   Math.floor(num / 1000000) / 100) + "亿"
    }
    else if (num >= 10000) {
        return (num / 10000 > 1000 ? Math.floor(num / 10000) :
                    num / 10000 > 100 ? Math.floor(num / 1000) / 10 :
                    Math.floor(num / 100) / 100 ) + "万"
    }
    else if (num % 1 > 0 || isEnforce){
        return num > 1000 ? num.toFixed(floatNum - 2) :
                    num > 100 ? num.toFixed(floatNum - 1) :
                    num.toFixed(floatNum) 
    }
    return "" + num
}

export function numberFormat2(num: number) {
    num = Math.floor(num)
    if (num < 10)
        return "0" + num

    return "" + num
}
 
export function czcEvent(moduleName, action, label) {
    if (null != window._czc)
        window._czc.push(["_trackEvent", moduleName, action, label, 0, 0]);
    else {
        const moduleNames = {
            '大厅': 'Lobby',
            '游戏': 'Game',
            '斗地主': 'Ddz',
            '网络': 'Socket',
            '登录': 'Login',
        }
        const param = {}
        param[action] = label
        PluginManager.logEvent(moduleNames[moduleName] || 'Unknow', param)
    }
}

export function getShopBox(boxtype, callFunc: () => void = null) {
    let url = DataManager.getURL("SHOPITEMS")
    let param = {
        boxtype: boxtype,
        pn: DataManager.Instance.packetName,
        version: DataManager.Instance.version,
        imsi: "",
        uid: DataManager.UserData.guid,
        flag: 20141212
    };

    BaseFunc.HTTPGetRequest(url, param, function(res) {
        if (res && res["sl"]) {
            if (boxtype == 2){
                DataManager.Instance.OneYuanBoxs = res["sl"]
                SceneManager.Instance.sendMessageToScene("updateOneYuanBox")
            }
            else if (boxtype == 5) {
                DataManager.Instance.ActiveBoxs = res["sl"]
            }
            else if (boxtype == 7) {
                DataManager.Instance.OnceBoxs = res["sl"]
                SceneManager.Instance.sendMessageToScene("updateOnceBox")
            }
        }

        callFunc && callFunc()
    })
}

export function getNewBieRoundLimit() {
    return 3
}

export function getNewBieServer(gameId) {
    if (new Date().getTime() / 1000 - DataManager.CommonData["regtime"] <= 60 * 60 * 2 && DataManager.CommonData["roleCfg"]["roundSum"] < getNewBieRoundLimit()){
        let server = DataManager.CommonData["ServerDatas"][gameId]
        let newBieLevel = server.filter(item => item.level == 1 && item.newbieMode == 1 && DataManager.UserData.money >= item.minMoney && DataManager.UserData.money <= item.maxmoney)
        return newBieLevel
    }

    return null
}

export function getGameAward(zorder = null, flag = 0, callback?) {
    if (cc.sys.isNative) {
        return
    }
    if (true) {
        return
    }
    if (DataManager.CommonData["morrow"] >= 3)
        return

    let url = DataManager.getURL("GAME_AWARD")
    let sign = md5("pid=" + DataManager.UserData.guid + "&gameid=" + DataManager.Instance.gameId + "&channel=" + 0 + "vnakl@sdasd$");
    let params = {
        pid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        gameid: DataManager.Instance.gameId,
        channel:0,
        sign: sign,
        flag: flag
    }

    BaseFunc.HTTPGetRequest(url, params, function(res) {
        if(res) {            
            if(res.ret == 0) {
            showTokenGrowPop(res.itemNum)
            // let awards = []
            // awards[0] = {index: res.itemIndex, num: res.itemNum}
            // showAwardResultPop(awards, {zorder: zorder})
            sendReloadUserData()
                if(callback){
                    callback(res)
                }
            }else if(res.ret == 1) {
                if(callback){
                    callback(res)
                }
            }
        }
    })
}

export function getQttCoinQuery(callback = null) {
    let url = DataManager.getURL("QTT_COIN_QUERY")
    let params = {
        pid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        app_id: DataManager.Instance.QTT_APPID,
        open_id: DataManager.UserData.imei,
    }

    BaseFunc.HTTPGetRequest(url, params, function(res) {
        if(res && res.code == 0) {            
            let data = res.data
            DataManager.CommonData["QttCoinNum"] = data.coin_balance
            if(callback)
                callback(res) 
        }
    })
}
// 比较字符串版本
export function versionCompare(versionA: string, versionB: string): number {
    const vA = versionA.split('.')
    const vB = versionB.split('.')
    for (let i = 0; i < vA.length; ++i) {
        const a = parseInt(vA[i])
        const b = parseInt(vB[i] || '0')
        if (a === b) {
            continue
        } else {
            return a - b
        }
    }
    if (vB.length > vA.length) {
        return -1
    } else {
        return 0
    }
}

// 调用java方法
export function callStaticMethod(clsName: string, methodName: string, methodSig?: string, params: any[] = []): any {
    try {
        methodSig && params.unshift(methodSig)
        return jsb.reflection.callStaticMethod.apply(jsb.reflection, [clsName, methodName].concat(params))
    } catch (error) {
        cc.error("callStaticMethod", JSON.stringify(error))
    }
}

export interface IConfirmBox {
    title?: string
    content: string
    confirmText?: string
    cancelText?: string
    closeFunc?: Function
    confirmFunc?: Function
    cancelFunc?: Function
    showClose?: boolean
    confirmClose?: boolean
    buttonNum?: number
    exchangeButton?: boolean
    maskCanClose?: boolean
    zIndex?: number
}
// 确认弹框
export function ConfirmBox(initParam: IConfirmBox): void {
    initParam.zIndex = cc.macro.MAX_ZINDEX
    SceneManager.Instance.popScene<String>("moduleLobby", "ConfirmBox", initParam)
}

// 检测网络
export function checkNetwork(handler: Function, must: boolean = false): void {
    console.log("[checkNetwork]")
    if (!must && cc.sys.getNetworkType() != cc.sys.NetworkType.NONE) {
        console.log("[checkNetwork] handler")
        handler && handler()
        return
    }

    var initParam = {
        title: "温馨提示",
        content: "您的设备没有网络了",
        confirmText: "再次连接",
        cancelText: "解决方案",
        confirmFunc: () => {
            cc.Canvas.instance.node.runAction(cc.sequence(
                cc.delayTime(0.2),
                cc.callFunc(() => {
                    console.log("[checkNetwork] confirmFunc")
                    checkNetwork(handler)
                })
            ))
        },
        cancelFunc: () => {
            cc.Canvas.instance.node.runAction(cc.sequence(
                cc.delayTime(0.2),
                cc.callFunc(() => {
                    console.log("[checkNetwork] cancelFunc")
                    if (cc.sys.os == cc.sys.OS_IOS) {
                        initParam.content = "建议您按照以下方法进行检查 \n\n1.打开手机的设置，检查WIFI或蜂窝移动网络是否开启。\n2.将联网方式（WiFi和移动蜂窝数据）切换一下再试。\n3.打开手机设置，滑动查看页面底部，寻找到该游戏后点击，检查移动蜂窝数据的选项是否开启\n4.如果仍无法连接，请您稍后再试。"
                    } else {
                        initParam.content = "建议您按照以下方法进行检查\n\n1.打开手机的设置，检查WLAN或移动数据是否开启。\n2.将联网方式（WLAN和移动数据）切换一下再试。\n3.如果仍无法连接，请您稍后再试。"
                    }
                    initParam.buttonNum = 1
                    ConfirmBox(initParam)
                })
            ))
        },
        buttonNum: 2,
        showClose: false,
        maskCanClose: false
    }
    console.log("[checkNetwork] ConfirmBox")
    ConfirmBox(initParam)
}

// 检测网络
export function values(object: any): any[] {
    const values = []
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key])
        }
    }
    return values
}


export function changeGameLogo(node: cc.Node) {
    loadAbsoluteSpriteFrame({ url: "thirdparty/LOGO.png", type: "png" }, (err: Error, frame: cc.SpriteFrame) => {
        if (!node.isValid || err) {
            cc.log('[changeGameLogo]', err)
            return
        }
        node.getComponent(cc.Sprite).spriteFrame = frame
    })
}

interface IShareData {
    ShareWay: "WeiXin" | "PengYouQuan",
    ShareTaskType?: string
    ShareTitle?: string
    ShareText?: string
    ShareUrl?: string
    ShareType?: "0" | "1" | "2"
    SharedImg?: string
}
export function share(data: IShareData) {
    console.log("[BaseFuncTs.share]", JSON.stringify(data))
    if (!DataManager.Instance.sharedData) {
        return
    }

    const sharedData = DataManager.Instance.sharedData
    PluginManager.share({
        ShareWay: data.ShareWay == "PengYouQuan" ? "1004" : "1005",
        ShareTaskType: data.ShareTaskType || "0",
        ShareTitle: data.ShareTitle || sharedData.sdTitle,
        ShareText: data.ShareText || sharedData.sdContent[Math.floor(Math.random() * sharedData.sdContent.length)],
        ShareUrl: data.ShareUrl || sharedData.sdUrl,
        ShareType: data.ShareType || sharedData.sdType.toString(),
        gameid: DataManager.Instance.gameId.toString(),
        SharedImg: data.SharedImg || "file://thirdparty/icon.png",
    })
}

export function createScreenShotNode(element: cc.Node, filePath: string) {
    const width = element.width
    const height = element.height

    const camera = element.addComponent(cc.Camera)

    // 设置你想要的截图内容的 cullingMask
    camera.cullingMask = 0xffffffff

    // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
    const texture = new cc.RenderTexture()
    texture.initWithSize(width, height, cc.game['_renderContext'].STENCIL_INDEX8)
    camera.targetTexture = texture

    // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
    camera.render(element)

    // 这样我们就能从 RenderTexture 中获取到数据了
    const data = texture.readPixels()
    const picData = new Uint8Array(width * height * 4)
    const rowBytes = width * 4
    for (let row = 0; row < height; row++) {
        const srow = height - 1 - row
        const start = srow * width * 4
        const reStart = row * width * 4
        for (let i = 0; i < rowBytes; i++) {
            picData[reStart + i] = data[start + i]
        }
    }

    const success = jsb.saveImageData(picData, width, height, filePath)
    if (success) {
        cc.log("[createScreenShotNode] saveImageData success:" + filePath)
    } else {
        cc.log("[createScreenShotNode] saveImageData failed!")
    }

    element.removeComponent(cc.Camera)
}

export function isIPhoneX(): boolean {
    const frameSize = cc.view.getFrameSize()
    if (frameSize.equals(cc.size(2436, 1125)) || frameSize.equals(cc.size(1792, 828)) || frameSize.equals(cc.size(812, 375))) {
        return true
    }
    return false
}

export function getNotchHeight(): number {
    const frameSize = cc.view.getFrameSize()
    if (frameSize.equals(cc.size(2436, 1125)) || frameSize.equals(cc.size(2688, 1248)) || frameSize.equals(cc.size(1792, 828))) {
        return 90
    }
    if (frameSize.equals(cc.size(812, 375))) {
        return 30
    }
    return 0
}

export function dump(name: string, object: any, max: number = 3) {
    if (cc.sys.isBrowser) {
        console.log(name, object)
        return
    }

    _dump(name, object, max, 1)
}

export function _dump(name: string, object: any, max: number, level: number) {
    const front = new Array(level).join("  ")
    if (typeof object != 'object') {
        console.log(front + name + ' = ' + object)
    } else if (level > max) {
        console.log(front + name + ' = ' + JSON.stringify(object))
    } else {
        console.log(front + name + " = {")
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                try {
                    _dump(key, object[key], max, level + 1)
                } catch (error) {
                    _dump(key, object[key], max, max + 1)
                }
            }
        }
        console.log(front + "}")
    }
}

export function getNowTimeUnix() {
    let now = new Date().getTime() / 1000
    return now
}

export function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    return sToTime(s)
}

export function sToTime(s) {
    s = Math.round(s)
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return ("0" + hrs).slice(-2) + ':' + ("0" + mins).slice(-2) + ':' + ("0" + secs).slice(-2);
}

export function showWebViewLayer(params) {
    let initParam = params
    SceneManager.Instance.popScene<String>("moduleLobby", "WebViewLayer", initParam)
}

export function loadAbsoluteSpriteFrame(config: { url: string, type: string }, callback?: (err: Error, frame: cc.SpriteFrame) => void): boolean {
    console.log('[SetNodeSpriteFrameByAbsolutePath]', config.url)
    if (CC_JSB && jsb.fileUtils.isFileExist(config.url)) {
        cc.loader.load(config, (err: Error, texture: cc.Texture2D) => {
            callback(err, err ? null : new cc.SpriteFrame(texture))
        })
        return true
    }
}

export function kickout() {
    if (DataManager.CommonData["gameServer"]) {
        NetManager.Instance.close(DataManager.CommonData["runGame"])
        delete DataManager.CommonData["runGame"]
        delete DataManager.CommonData["gameServer"]
    }
    NetManager.Instance.close("lobby", true, true)

    cc.audioEngine.stopAll()

    cc.sys.localStorage.removeItem('last_login_type')
    cc.sys.localStorage.removeItem('sound')
    cc.sys.localStorage.removeItem('effect')
    delete DataManager.CommonData["adConfig"]
    delete DataManager.CommonData["adCnt"]
    delete DataManager.SoundVolume
    delete DataManager.EffectVolume
    DataManager.CommonData["shareType"] = ""
    
    PluginManager.logout()

    SceneManager.Instance.closeScene("TrumpetCom")
    SceneManager.Instance.addScene<String>("moduleLobby", "LoginScene")
}

export function showAwardMutipleResultPop(awards: any[], initParam = null, func = null) {
    if (null == initParam)
        initParam = []

    initParam["awards"] = awards
    initParam["closeCallback"] = func
    SceneManager.Instance.popScene<String>("moduleLobby", "AwardMutipleResultPop", initParam)
}

export function setGray(node, state = 1)
{
    var s = node.getComponentsInChildren(cc.Sprite);
    for(var i = 0; i < s.length; i++)
    {   
        if (state == 1) {            
            s[i].setMaterial(0, cc.Material.getBuiltinMaterial("2d-gray-sprite"));
        }else{
            s[i].setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite", s[i]));
        }
    }
}

export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function enterPrivateGame(game_id_, opt, server_id,  baseType, forceOpenGPS = false, isCarryMoney = false) {
    cc.log("LobbyGameLogic:enterPrivateGame(game_id_, server_id, baseType)", game_id_, server_id, baseType)
    cc.log("LobbyGameLogic:enterPrivateGame forceOpenGPS= ",forceOpenGPS)
    cc.log(opt)

    if (DataManager.Instance.onlineParam.forceOpenGPS == 1) {
        //gps
    }

    let gameid = parseInt(game_id_)

    if (DataManager.CommonData["gameServer"]) {
        NetManager.Instance.close(DataManager.CommonData["runGame"])
        delete DataManager.CommonData["runGame"]
        delete DataManager.CommonData["gameServer"]
    }

    cc.audioEngine.stopAll()
     
    if (null == DataManager.CommonData["ServerDatas"] || null == DataManager.CommonData["ServerDatas"][gameid])
        return null
    
    let servers = DataManager.CommonData["ServerDatas"][gameid]
        .filter(item => item.lc_room_mode == 1 || item.lc_room_mode == 4)
    
    if (isCarryMoney)
        servers = servers.filter(item => item.settle_money_type && item.settle_money_type == 1)
    else 
        servers = servers.filter(item => item.settle_money_type == null)

    let server = servers[Math.round(100) % servers.length]
    if (null != server_id) 
        server = servers.filter(item => item.server_id = server_id)[0]
    if (null == server){
        iMessageBox("私人房暂时未开放,请稍候再试!")
        return
    }

    if (server.vip_limit && server.vip_limit > DataManager.CommonData["VipData"].vipLevel) {
        let initParam = {
            title: "提示",
            content: "需要VIP" + server.vip_limit + "级以上才能进入该私人房！!",
            buttonNum: 1,
            confirmClose: true,
        }
        MsgBox(initParam)
        return
    }
    server.gameId = gameid
    server.pr_info = opt
    server.isPrivate = true
    DataManager.CommonData["gameServer"] = server
    GameManager.onChangeFire()
        
    DataManager.CommonData["RedpacketCount"] = DataManager.UserData.getItemNum(365)
    DataManager.CommonData["QttCount"] = DataManager.UserData.getItemNum(367)

    let moduleName = getGameConfig(gameid)
    if (moduleName) {
        czcEvent(getGameName(server.gameId), "加载1", "开始加载 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            loadModule(moduleName + "Res")
    }
}

export function getPrivateInviteInfo(code) {
    let socketMsg = {
        opcode: "mahjong_cl_get_private_invite_info_req",
        inviteCode: code
    }
    NetManager.Instance.send("lobby", socketMsg)
}

export function checkGameServer(gameId) {
    if(isWeChatGame() && (parseInt(gameId) == 397 || parseInt(gameId) == 398)){
        iMessageBox("暂未开放，敬请期待")
        return null
    }

    if (gameId == "XXL" && DataManager.CommonData["VipData"].vipLevel < 2) {
        iMessageBox("暂未开放，敬请期待")
        return null
    }

    if (null == DataManager.CommonData["ServerDatas"] || 0 == DataManager.CommonData["ServerDatas"].length){
        iMessageBox("服务器暂未开放，请稍后再试")
        return null
    }

    gameId = isNaN(parseInt(gameId)) ? (getGameConfig(gameId) || getGameConfig("module" + gameId)) : parseInt(gameId)
    if (null == gameId) {
        iMessageBox("暂未开放，请稍后再试")
        return null
    }

    let servers = []
    servers = Object.assign(servers, DataManager.CommonData["ServerDatas"][gameId])
    servers = servers.filter(item => item.newbieMode != 1 && item.lc_room_mode != 1)

    servers.sort((a, b) => a.minMoney < b.minMoney ? -1 : a.minMoney > b.minMoney ? 1 : 0)
    
    if (null == servers || 0 == servers.length){
        iMessageBox("服务器暂未开放，请稍后再试")
        return null
    }

    return servers
}