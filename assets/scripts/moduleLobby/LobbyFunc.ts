import DataManager from "../base/baseData/DataManager";
import BaseFunc = require("../base/BaseFunc")
import md5 = require("../base/extensions/md5.min")
import { iMessageBox, checkPhoneBinding, MsgBox, showAwardResultPop, czcEvent, share, kickout, pluginAdsResult } from "../base/BaseFuncTs";
import NetManager from "../base/baseNet/NetManager";
import SceneManager from "../base/baseScene/SceneManager";
import { isWeChatGame, isAndroidGame } from "../gameConfig";

export function getVipConfig(callback: () => void = null) {
    let url = DataManager.getURL("VIPCONFIG")
    url = url + DataManager.Instance.gameId
    BaseFunc.HTTPGetRequest(url, null, (msg) => {
        if (msg && msg.ret == 0){
            DataManager.CommonData["VipInfo"] = msg.list
            if (null != callback)
                callback()
        }
    })
}

export function getExchangeConfig(callback: () => void = null) {
    czcEvent("大厅", "兑换红包", "获取红包配置 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    // console.log("getExchangeConfig")
    let url = DataManager.getURL("DUIHUANCONFIG")
    let sign = "pn=" + DataManager.Instance.packetName + "&key=6wFKBS5y6a0B"
    sign = md5(sign)
    let params = {
        pn: DataManager.Instance.packetName,
        sign: sign,
        uid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        gameid: DataManager.Instance.gameId
    }

    BaseFunc.HTTPGetRequest(url, params, function(msg) {
        if (DataManager.Instance.isTesting)
            console.log(msg)
        if (msg.ret == 0) {
            if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
                DataManager.CommonData["ExchangeInfo"] = []
                for (const iterator of msg["list"]) {
                    if (iterator.exchangeItemList[0] && iterator.exchangeItemList[0].exchangeItem == 365 && iterator.gainItemList[0] &&
                        iterator.gainItemList[0].gainItem == 0) {
                        DataManager.CommonData["ExchangeInfo"][DataManager.CommonData["ExchangeInfo"].length] = iterator
                    }
                }
            } else {
                DataManager.CommonData["ExchangeInfo"] = msg.list
                DataManager.CommonData["ExchangeInfo"].sort((a, b) => a["limitVip"] < b["limitVip"] ? -1 : 
                                            (a["limitVip"] > b["limitVip"] ? 1 : 
                                                (a["gainItemList"][0]["gainItem"] == 0 ? -1 : 
                                                    (a["gainItemList"][0]["gainItem"] != 0 ? 1 : 
                                                        (a["gainItemList"][0]["exchangeNum"] < a["gainItemList"][0]["exchangeNum"] ? -1 : 
                                                            (a["gainItemList"][0]["exchangeNum"] > a["gainItemList"][0]["exchangeNum"] ? 1 : 0
                                                ))))))
            }
            if (null != callback)
                callback()

            SceneManager.Instance.sendMessageToScene("updateExchangeInfo")
        }           
    }) 
}

export function getNewUserSignAward (callback: () => void = null) {
    console.log("start getNewUserSignAward")
    let url = DataManager.getURL("LOAD_NEW_REGISTER")

    let param = {
        uid: DataManager.UserData.guid,
        gameid: 389,//DataManager.Instance.gameId,
        ticket: DataManager.UserData.ticket,
        pn: DataManager.Instance.packetName, 
    }
    console.log("url = " + url)
    console.log(param)
    BaseFunc.HTTPGetRequest(url, param, function(msg) { 
        console.log("get response getNewUserSignAward")
        console.log(msg)
        if (msg && null != msg.ret && msg.ret == 0) {
            DataManager.CommonData["NewUserSgin"] = msg
            if (null != callback)
                callback()
        }
    })
}
    
export function getDialAwardList(taskInd, callback: () => void = null) {
    let sign = "uid=" + DataManager.UserData.guid + "&key=8923mjcm0d089d";
    sign = md5(sign);
    
    let param = {
        gameid: DataManager.Instance.gameId, 
        channel: 1, 
        activityId: 10000 + DataManager.Instance.gameId, 
        uid: DataManager.UserData.guid, 
        sign: sign,
        pn: DataManager.Instance.packetName, 
        taskid: taskInd, 
    };
    let url = DataManager.getURL("DIAL")

    BaseFunc.HTTPGetRequest(url, param, function(msg) {
        cc.log("getDialAwardList",msg) 
        //微信小程序吧趣金币改成红包，后台修改概率为0
        if ((isWeChatGame()|| isAndroidGame())&& msg && msg["list"]) {
            let img = ""
            for(let i in msg["list"]){
                if(msg["list"][i].acItemIndex == 365){
                    img = msg["list"][i].acItemUrl
                }
            }

            for(let i in msg["list"]){
                if(msg["list"][i].acItemIndex == 367){
                    msg["list"][i].acItemUrl = img
                }
            }
        }

        if (DataManager.Instance.isTesting)
            console.log(msg)
        if (msg && msg["list"]) {
            DataManager.CommonData["awardData"] = msg["list"]
            if (null != callback)
                callback()
        }
        else if (msg && msg[0] && msg[0]["list"]) {
            DataManager.CommonData["awardData"] = msg[0]["list"]
            if (null != callback)
                callback()
        }
    })
}

export function getDialResult(taskInd, callback: (msg) => void = null) {
    let sign = "uid=" + DataManager.UserData.guid + "&key=8923mjcm0d089d";
    sign = md5(sign);
    
    let param = {
        gameid: DataManager.Instance.gameId, 
        channel: 1, 
        activityId: 10000 + DataManager.Instance.gameId, 
        uid: DataManager.UserData.guid, 
        sign: sign,
        pn: DataManager.Instance.packetName, 
        taskid: taskInd, 
    };
    let url = DataManager.getURL("DARW_DIAL")

    BaseFunc.HTTPGetRequest(url, param, function(msg) { 
        if (msg && null != callback) {
            callback(msg)
        }
    })
}

export function getMobileState(callback: () => void = null) {
    let url = DataManager.getURL("MOBILE_STATUS")
    let params = {
        pn: DataManager.Instance.packetName,
        pid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        version: DataManager.Instance.version
    }

    BaseFunc.HTTPGetRequest(url, params, function(msg) {
        if (DataManager.Instance.isTesting)
            console.log(msg)
        DataManager.CommonData["bindPhone"] = []
        if (null != msg){        
            DataManager.CommonData["bindPhone"].hasBindMoble = msg.ret
            DataManager.CommonData["bindPhone"].BindPhone = msg.phone         
        }
        
        if (null != callback)
            callback()
    }) 
}

export function getMobileCode(phone, flag, callback: (msg) => void = null) {
    let url = DataManager.getURL("MOBILE_CODE_GET")
    let guid = "0"
    let ticket = ""
    if (DataManager.UserData.guid != "") {
        guid = DataManager.UserData.guid
        ticket = DataManager.UserData.ticket
    }
    let sign = "pid=" + guid + "&ticket=" + ticket +
        "&pn=" + DataManager.Instance.packetName + "&version=1&phone=" + phone + "&flag=" + flag + "&key=fas342wrff4t32dfg534g432"
    sign = md5(sign)

    let params = {
        pid: guid,
        ticket: ticket,
        pn: DataManager.Instance.packetName,
        version: 1,
        phone: phone,
        flag: flag,
        sign: sign,
    };

    BaseFunc.HTTPGetRequest(url, params, function(msg) {
        if (typeof callback == "function")
            callback(msg)
    }) 
}

export function getADConfig(callback: () => void = null) {
    if (DataManager.GlobalData.noAD) {
        return
    }
    let url = DataManager.getURL("AD_CONFIG")
    let param = {
        pid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket
    }

    BaseFunc.HTTPGetRequest(url, param, function(msg){
        if (DataManager.Instance.isTesting)
            console.log(url)
        if (null != msg) {
            DataManager.CommonData["adConfig"] = msg.adConfig
            DataManager.CommonData["adCnt"] = msg.adCnt
            if (null == DataManager.CommonData["adCnt"] || "" == DataManager.CommonData["adCnt"])
                DataManager.CommonData["adCnt"] = []
            
            initAdConfig()
            if (null != callback)
                callback()
        }
    })
}


export function initAdConfig() {
    console.log("initAdConfig",DataManager.CommonData["adConfig"])
    if (null == DataManager.CommonData["adConfig"])
        return 
    DataManager.CommonData["adNum"] = []
    for (const iterator of DataManager.CommonData["adConfig"]) {
        DataManager.CommonData["adNum"][iterator["ca_ad_area"]] = DataManager.CommonData["adNum"][iterator["ca_ad_area"]] || []
        if(iterator["award"].length > 0){
            DataManager.CommonData["adNum"][iterator["ca_ad_area"]].allNum = iterator["award"][0]["ca_award_num"]    
        }
        DataManager.CommonData["adNum"][iterator["ca_ad_area"]].countNum = 0        
    }

    for (const iterator of DataManager.CommonData["adCnt"]) {            
        DataManager.CommonData["adNum"][iterator["ua_ad_area_id"]].countNum = iterator["ua_ad_times"]
    }
    console.log("initAdConfig end",DataManager.CommonData["adNum"])
}

export function checkADNum(typeNum) {
    if (null == DataManager.CommonData["adNum"] || null == DataManager.CommonData["adNum"][typeNum])
        return false

    let canAd = DataManager.CommonData["adNum"][typeNum].allNum > DataManager.CommonData["adNum"][typeNum].countNum
    return canAd
}

export function getADAward(taskInd, succ: (num) => void = null, fail: () => void = null, signDay:number = 0, ) {
    console.log('[getADAward]')
    if (DataManager.GlobalData.noAD){
        succ(0)
        return
    }

    let url = DataManager.getURL("GET_AD_AWARD")
    let sign = "pid=" + DataManager.UserData.guid + "&gameid="+  DataManager.Instance.gameId +"&key=abcd123321efgh"
    sign = md5(sign)

    let params = {
        pid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        gameid: DataManager.Instance.gameId,
        taskInd: taskInd,
        sign: sign,
        signDay: signDay,
        pn : DataManager.Instance.packetName, 
    };

    BaseFunc.HTTPGetRequest(url, params, function(msg) {
        if (msg) {
            if (msg.ret == 0) {
                DataManager.CommonData["adNum"][taskInd].countNum ++ 
                if (null != succ)
                    succ(msg.num)
                return
            }
            else if (msg.ret == -4) {
                checkPhoneBinding()
            }
            else{
                iMessageBox(msg.msg)
                if (null != fail)
                    fail()
            }
        }
    }) 
}

export function getReliefState(type = 0) {
    let message = {
        opcode: "mahjong_cl_check_relief_status_req",
        type: type
    }
    NetManager.Instance.send("lobby", message)
}

export function sendReloadUserData(){
    let socketMsg = {
        opcode: "mahjong_cl_reload_user_data_req"
    };
    NetManager.Instance.send("lobby", socketMsg)
}

export function getPlayerStatusReq(players: any[]) {
    let message = {
        opcode: "mahjong_cl_get_ply_status_req",
        players: players
    };
    NetManager.Instance.send("lobby", message)
}

export function getServerList(gameList:number[] = null) {
    NetManager.Instance.send("lobby", {opcode: "mahjong_cl_get_player_game_list_req", gameList: gameList || DataManager.Instance.getGameList()})
}

// mahjong_cl_get_zzyk_status_req
export function getMonthCardStatus(type = 1) {
    let socketMsg = {
        opcode: "mahjong_cl_get_zzyk_status_req",
        flag: type
    };
    NetManager.Instance.send("lobby", socketMsg)    
}

// mahjong_cl_get_zzyk_award_req
export function getMonthCardAward(type = 1) {
    let socketMsg = {
        opcode: "mahjong_cl_get_zzyk_award_req",
        flag: type
    };
    NetManager.Instance.send("lobby", socketMsg)
}

export function getQttCoin(noTip:boolean = false) {
    // let coin = DataManager.UserData.getItemNum(367)
    // if (coin <= 0){
    //     iMessageBox("您还没有金币，可通过签到，抽奖来获得!")
    //     return 
    // }

    let submitFunc = function() {
        let param = {
            gameid: DataManager.Instance.gameId, 
            uid: DataManager.UserData.guid, 
            ticket: DataManager.UserData.ticket,
            pn: DataManager.Instance.packetName, 
            app_id: DataManager.Instance.QTT_APPID, 
            open_id: DataManager.load("user_guest_openid")
        };
        let url = DataManager.getURL("QTT_COIN")
        // let qttCount = DataManager.UserData.getItemNum(367)
        BaseFunc.HTTPGetRequest(url, param, function(msg) { 
            if (msg && msg.ret == 0) {
                // czcEvent("大厅", "兑换趣金币3", "领取成功 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                // let awards = []
                // awards[0] = {index: 367, num: qttCount}
                // showAwardResultPop(awards, {isQttPickup: true})
                sendReloadUserData()

                // DataManager.save(DataManager.UserData.guid + "qttTip", true)
            }
            else{
                // czcEvent("大厅", "兑换趣金币3", "领取失败 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                // iMessageBox("提取失败，请等待一段时间后再试!")
            }
        })
    }

    if (noTip) {
        submitFunc()
    }
    else{
        let initParam = {
            title: "提示",
            content: "提取后金币将直接到您的趣头条账户，是否提取?",
            confirmClose: true,
            confirmFunc: () => {
                czcEvent("大厅", "兑换趣金币2", "确认领取 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                submitFunc()
            },
            maskCanClose: false,
        }

        MsgBox(initParam)
    }
}

export function exchangeAward(goodsId, callback, addressId: number = null) {
    let sign = "pn=" + DataManager.Instance.packetName + "&key=6wFKBS5y6a0B";
    sign = md5(sign)
    let param = {
        uid: DataManager.UserData.guid,
        gameid: DataManager.Instance.gameId,
        goodsId: goodsId,
        ticket: DataManager.UserData.ticket,
        pn: DataManager.Instance.packetName,
        sign: sign,
        addressId: addressId,
        app_id: DataManager.Instance.QTT_APPID,
        open_id: DataManager.UserData.imei,
    }
    let url = DataManager.getURL("DUIHUAN")
    if (null != addressId)
        url = url + "&addressId={addressId}"

    let self = this
    BaseFunc.HTTPGetRequest(url, param, function(msg) {
        if (msg && msg.ret==0){
            let tips = msg.msg;
            
            sendReloadUserData()
            iMessageBox(tips)
            // SceneManager.Instance.popScene("moduleLobby", "ExchangeSuccPop")
            callback && callback()
            getExchangeConfig()            
        }
        else if (msg && msg.ret==-6)
            iMessageBox("30秒内仅可以兑换一次哦!")
        else
            iMessageBox(msg.msg)
    })
}

export function check03ExchangeGoods() {
    if (DataManager.CommonData["regtime"] < 1568131200 || DataManager.CommonData["morrow"] > 7)
        return false

    if (null == DataManager.CommonData["ExchangeInfo"])
        return false

    for (let goods of DataManager.CommonData["ExchangeInfo"]) {
        if (goods.exchangeItemList[0] && goods.exchangeItemList[0].exchangeItem == 365 && 
            goods.gainItemList[0].gainItem == 332 && goods.limitCount == 1 && goods.exchangeCount == 0){
            return true
        }
    }

    return false
}

export function loadPromoterInfo() {
    if (DataManager.CommonData['shareUrl']) {
        return
    }
    const param = {
        uid: DataManager.UserData.guid,
        ticket: DataManager.UserData.ticket,
        gameId: DataManager.Instance.gameId,
    }
    BaseFunc.HTTPGetRequest(DataManager.getURL("LOAD_REDPACKET_PROMOTER_RULE"), param, function (event: any) {
        if (event && event.saShareUrl && event.saShareUrl != '') {
            DataManager.CommonData['shareUrl'] = event.saShareUrl
        }
    })
}

export function loadPyramidSpreadInfo(callback?) {
    let gameids = "391,397,398,395,396,401"
    let param = {
        uid: DataManager.UserData.guid,
        lobbyid: DataManager.Instance.gameId,
        gameids: gameids,
        ticket: DataManager.UserData.ticket,
        sign: ""
    }

    let str = "uid=" + DataManager.UserData.guid +
        "&ticket=" + DataManager.UserData.ticket +
        "&lobbyid=" + DataManager.Instance.gameId +
        "&gameids=" + gameids +
        "&SignKey=" + "91df33ba1f10624c7fe1a0000706e183"
    param.sign = md5(str)

    BaseFunc.HTTPGetRequest(DataManager.getURL("LOAD_PYRAMID_SPREAD_INFO"), param, (res) => {
        if (res) {
            if (res.ret != -2) {
                DataManager.CommonData["PyramidData"] = res
            }

            if (res.ret == 0){
                SceneManager.Instance.sendMessageToScene({ opcode: "updatePyramidData", awardStatus: 1 })
            } else if (res.ret < 0 && res.msg && res.msg != "") {
                // iMessageBox(res.msg)
            }
            callback && callback(res)
        }
    })
}

export function getPyramidSpreadAward(callback) {
    let gameids = "391,395,396,397,398"
    let param = {
        uid: DataManager.UserData.guid,
        lobbyid: DataManager.Instance.gameId,
        gameids: gameids,
        ticket: DataManager.UserData.ticket,
        sign: ""
    }

    let str = "uid=" + DataManager.UserData.guid +
        "&ticket=" + DataManager.UserData.ticket +
        "&lobbyid=" + DataManager.Instance.gameId +
        "&gameids=" + gameids +
        "&SignKey=" + "91df33ba1f10624c7fe1a0000706e183"
    param.sign = md5(str)

    BaseFunc.HTTPGetRequest(DataManager.getURL("GET_PYRAMID_SPREAD_AWARD"), param, (res) => {
        if (res) {
            if (res.ret == 0) {
                DataManager.CommonData["PyramidData"] = {}
                SceneManager.Instance.sendMessageToScene({ opcode: "updatePyramidData", awardStatus: 2 })
                callback && callback(res)
            } else if (res.ret < 0 && res.msg && res.msg != ""){
                iMessageBox(res.msg)
            }
        }
    })
}

export function shareUrl() {
    const titles = [
        "好友来助攻，海量红包进来就领！",
        "玩游戏就送红包！这是你未玩过的全新版本！",
        "天降红包，你就是趟着领红包的人！"
    ]
    
    const url = "https://www.weipinggame.com/"//DataManager.CommonData['shareUrl'] || "https://www.weipinggame.com/"
    share({
        ShareWay: "WeiXin",
        ShareTitle: titles[Math.floor(Math.random() * titles.length)],
        ShareType: "0",
        ShareUrl: BaseFunc.FormatUrl(url + "bind/bindExtensionRelation/page?uid=" + DataManager.UserData.guid + "&gameid=" + DataManager.Instance.gameId + "&pn=" + DataManager.Instance.packetName + "&type=1")
    })
}

export function getPrivateGameDataList(time = 0) {
    let socketMsg = {
        opcode: 'mahjong_cl_get_private_game_data_list_req',
        time: time,
    };
    NetManager.Instance.send("lobby", socketMsg)
}