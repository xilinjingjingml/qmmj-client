import BaseFunc = require("./BaseFunc");
import DataManager from "./baseData/DataManager";

namespace WxWrapper {
    let mButtonInfo: any = null
    let mUserInfoButton: any = null
    let mOpenSettingButton: any = null
    let mVideoAdError: string = ""
    let mRewardedVideoAd: any = null
    let mWxVaild: boolean = window["wx"] ? true : false
    let shareCallBack : any = null
    let shareStartTime : any = 0

    export function login(target) {
        if (mWxVaild) {
            target.setLoadingStatus(true)
            wx.login({
                success: function (res) {
                    BaseFunc.HTTPGetRequest(DataManager.getURL("GET_WX_OPENID"), {
                        appid: DataManager.Instance.wxAPPID,
                        jscode: res.code
                    }, function (res2) {
                        console.log("GET_WX_OPENID res2 = ",res2)
                        if (!res2 || !res2.openid) {
                            target.onLoginFail({ ret: -100, tips: "Get OpenId Failed" })
                            return
                        }

                        let onUserInfo = function (uinfo) {
                            console.log("GET_WX_OPENID uinfo = ",uinfo)
                            if (!uinfo.signature || !uinfo.rawData) {
                                target.onLoginFail({ ret: -101, tips: "Get UserInfo Failed" })
                                return
                            }

                            let opt = wx.getLaunchOptionsSync()

                            BaseFunc.HTTPGetRequest(DataManager.getURL("GAME_LOGIN"), {
                                appid: DataManager.Instance.wxAPPID,
                                pn: DataManager.Instance.packetName,
                                version: DataManager.Instance.version,
                                imei: "",
                                name: "",
                                openId: res2.openid,
                                rawData: uinfo.rawData,
                                signature: uinfo.signature,
                                bindOpenId: opt.query.openId || ""
                            }, function (res) {
                                if (res && res.ret == 0) {
                                    target.onLoginSuccess(res)
                                } else {
                                    target.onLoginFail(res || { ret: -103, tips: "Request Failed" })
                                }
                            })
                        }

                        getSetting(function (setting) {
                            if (setting["scope.userInfo"] == true) {
                                getUserInfo(onUserInfo)
                            } else {
                                target.setLoadingStatus(false)
                                if (wx.createUserInfoButton) {
                                    createUserInfoButton(onUserInfo)
                                } else {
                                    getUserInfo(onUserInfo)
                                }
                            }
                        })
                    }, null)
                },
                fail: function () {
                    target.onLoginFail({ ret: -102, tips: "WX Login Failed" })
                }
            })
        } else {
            // 返回模拟登录数据
            // target.onLoginSuccess({
            //     regiGiftDesc: "2元话费券和2000游戏币",
            //     isBindMobile: 0,
            //     ifBindWeixin: 0,
            //     ret: 0,
            //     pid: "1011657",
            //     ticket: "84E18D014AB6AD40DFD7A586D4A1A9A7",
            //     // pid: "1011681"
            //     // ticket: "979FF5912E0E87997D5908952832EAD7"
            //     // pid: "1011701",
            //     // ticket: "8AD45C6F7683F7B601219F3BDBC108A1",
            //     sex: 0,
            //     nickname: "Guest",
            //     plat: "11",
            //     face: "http://images.hiigame.com/bfe38d3a-c948-4e2e-a413-c8eae947a2ad/imageStyle",
            //     vs: "1",
            //     vn: 1,
            //     url: "http://www.izhangxin.com",
            //     msg: "发现新版本，是否更新？",
            //     ip: "s3.casino.hiigame.net",
            //     port: "7200",
            //     ef: 0,
            //     maxid: 0,
            //     lastlogintime: 1568875856,
            //     regtime: 1568875856,
            //     imei: "WhoIsYourDaddy111",
            //     morrow: 10,
            //     first: 0,
            //     reply: 0,
            //     uid: 0,
            //     tips: "登录成功!"
            // })
        }
    }

    function getSetting(callback) {
        wx.getSetting({
            complete: function (res) {
                callback(res.authSetting || {})
            }
        })
    }

    function getUserInfo(callback) {
        wx.getUserInfo({
            openIdList: ["selfOpenId"],
            lang: "zh_CN",
            complete: function (res) {
                callback(res)
            }
        })
    }

    function getButtonInfo() {
        if (!mButtonInfo) {
            let screenSzie = cc.view.getFrameSize()
            let designSize = cc.view.getDesignResolutionSize()
            let ratio = Math.min(screenSzie.width / designSize.width, screenSzie.height / designSize.height)

            let imgWidth = 260 * ratio
            let imgHeight = 96 * ratio

            let left = (screenSzie.width - imgWidth) / 2
            let top = screenSzie.height * 0.7

            mButtonInfo = {
                left: left,
                top: top,
                imgWidth: imgWidth,
                imgHeight: imgHeight
            }
        }

        return mButtonInfo
    }

    function createUserInfoButton(callback) {
        if (!mUserInfoButton) {
            let info = getButtonInfo()
            mUserInfoButton = wx.createUserInfoButton({
                type: "image",
                image: "static/btn_wx_login.png",
                style: {
                    left: info.left,
                    top: info.top,
                    width: info.imgWidth,
                    height: info.imgHeight
                }
            })
        }

        mUserInfoButton.show()

        let onTap = function (res) {
            cc.log("onTap ",res)
            if(res.userInfo){
                mUserInfoButton.hide()
                mUserInfoButton.offTap(onTap)
                callback(res)
            }
        }

        mUserInfoButton.onTap(onTap)
    }

    export function openSetting(scope, callback) {
        if (mWxVaild) {
            if (wx.createOpenSettingButton) {
                if (!mOpenSettingButton) {
                    let info = getButtonInfo()
                    mOpenSettingButton = wx.createOpenSettingButton({
                        type: "image",
                        image: "static/btn_open_setteing.png",
                        style: {
                            left: info.left,
                            top: info.top,
                            width: info.imgWidth,
                            height: info.imgHeight
                        }
                    })
                }

                mOpenSettingButton.show()

                let onTap = function () {
                    mOpenSettingButton.hide()
                    mOpenSettingButton.offTap(onTap)
                    getSetting(function (setting) {
                        if (setting["scope." + scope] == true) {
                            callback(true)
                        } else {
                            callback(false)
                        }
                    })
                }

                mOpenSettingButton.onTap(onTap)
            } else {
                wx.openSetting({
                    complete: function (res) {
                        getSetting(function (setting) {
                            if (setting["scope." + scope] == true) {
                                callback(true)
                            } else {
                                callback(false)
                            }
                        })
                    }
                })
            }
        }
    }

    export function setKeepScreenOn(status) {
        if (mWxVaild) {
            wx.setKeepScreenOn({ keepScreenOn: status })
        }
    }

    export function checkAppUpdate() {
        if (mWxVaild && wx.getUpdateManager) {
            let updateManager = wx.getUpdateManager()
            updateManager.onCheckForUpdate(function (res) {
                if (res.hasUpdate) {
                    updateManager.onUpdateReady(function () {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好,是否重启应用?",
                            success: function (res) {
                                if (res.confirm) {
                                    updateManager.applyUpdate()
                                }
                            }
                        })
                    })

                    updateManager.onUpdateFailed(function () {
                        wx.showModal({
                            title: "已经有新版本了",
                            content: "新版本已经上线啦,请您删除当前小程序,重新搜索打开",
                        })
                    })
                }
            })
        }
    }

    export function payOrder(payInfo, callback) {
        if (mWxVaild) {
            wx.checkSession({
                success: function () {
                    BaseFunc.HTTPGetRequest(DataManager.getURL("WX_PAY_URL"), {
                        appid: DataManager.Instance.wxAPPID,
                        pid: DataManager.UserData.guid,
                        ticket: DataManager.UserData.ticket,
                        openid: DataManager.UserData.openId,
                        boxid: payInfo.boxid,
                        openkey: "",
                        pay_token: "",
                        pf: "",
                        pfkey: "",
                        sessionId: "",
                        sessionType: "",
                        envFlag: "",
                        sdkFlag: "ysdk"
                    }, function (res) {
                        if (res.ret == 0) {
                            payInfo.order = res.order
                            requestMidasPayment(payInfo, callback)
                        } else {
                            callback({ ret: -201, tips: "Request Order Failed" })
                        }
                    })
                },
                fail: function () {
                    callback({ ret: -200, tips: "Check Session Failed" })
                }
            })
        }
    }

    function requestMidasPayment(payInfo, callback) {
        wx.requestMidasPayment({
            mode: "game",
            env: 0, // 0正式 1沙箱
            offerId: DataManager.Instance.wxMIDASID,
            currencyType: "CNY",
            platform: "android",
            buyQuantity: payInfo.price,
            zoneId: "2", // 后台必须配置
            success: function (res) {
                callback({ ret: 0, tips: "Pay Success" })
                let info_product = {
                    appid: DataManager.Instance.wxAPPID,
                    offer_id: DataManager.Instance.wxMIDASID,
                    pid: DataManager.UserData.guid,
                    ticket: DataManager.UserData.ticket,
                    openid: DataManager.UserData.openId,
                    order: payInfo.order,
                    pf: "android",
                    envFlag: "office" // office正式 sandBox沙箱
                }
                BaseFunc.HTTPGetRequest(DataManager.getURL("WX_PAY_SURE_URL"), info_product, function (pres) { })
            },
            fail: function (res) {
                callback({ ret: res.errCode, tips: res.errMsg })
            }
        })
    }

    // title        string        转发标题，不传则默认使用当前小游戏的昵称。
    // imageUrl     string        转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。
    // query        string        查询字符串，从这条转发消息进入后，可通过 wx.onLaunch() 或 wx.onShow 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。
    // callback     function      分享回调 由于无法获取分享结果 会手动触发
    export function shareAppMessage(param) {
        if (mWxVaild) {
            wx.shareAppMessage(param)
            shareStartTime = new Date().getTime()
            shareCallBack = param.callback
        }
    }

    export function setOnShowMonitor() {
        if (mWxVaild) {
            wx.onShow((res) => {
                let end_time = new Date().getTime()
                let time = end_time-shareStartTime
                console.log("shareAppMessage1 start_time = " + shareStartTime)
                console.log("shareAppMessage1 end_time = " + end_time)
                console.log("shareAppMessage1 time = " + time)
                if(time > 3000){
                    console.log("shareAppMessage1 time > 3000")
                    if (shareCallBack){
                        console.log("shareAppMessage1 do 1")
                        shareCallBack()
                    }
                }
                
                shareCallBack = null
            })
        }
    }

    export function setClipboardData(data, callback) {
        if (mWxVaild) {
            wx.setClipboardData({
                data: data,
                success: function (res) {
                    if (callback) callback(true)
                },
                fail: function (res) {
                    if (callback) callback(false)
                }
            })
        }
    }

    export function initRewardedVideoAd() {
        if (mWxVaild) {
            if (!mRewardedVideoAd) {
                mRewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: "adunit-efe436952d2ef6fc" })
                let onLoad = function () {
                    mRewardedVideoAd.offLoad(onLoad)
                    cc.log("广告加载完成")
                }
                mRewardedVideoAd.onLoad(onLoad)

                let onError = function (res) {
                    mRewardedVideoAd.offError(onError)
                    mVideoAdError = "广告加载失败 " + res.errMsg
                    cc.log("广告加载失败", res.errMsg, res.errCode)
                }
                mRewardedVideoAd.onError(onError)
            }
        }
    }

    export function createRewardedVideoAd(callback) {
        if (mWxVaild) {
            if (mRewardedVideoAd && !mVideoAdError) {
                let onClose = function (res) {
                    mRewardedVideoAd.offClose(onClose)
                    if (!res || res.isEnded) {
                        callback(0, "广告播放完成")
                    } else {
                        callback(-1, "完整观看视频才可以领取奖励哦")
                    }
                }
                mRewardedVideoAd.onClose(onClose)

                mRewardedVideoAd.show()
                    .catch(function () {
                        mRewardedVideoAd.load()
                            .then(function () { mRewardedVideoAd.show() })
                            .catch(function (err) {
                                cc.log("广告显示失败", err)
                                callback(-2, "广告显示失败")
                            })
                    })
            } else {
                callback(-3, mVideoAdError || "广告未初始化")
            }
        } else {
            callback(0, "广告播放完成")
        }
    }

    export function setEnableDebug(enable) {
        if (mWxVaild) {
            wx.setEnableDebug({ enableDebug: enable })
        }
    }

    export function exitMiniProgram() {
        if (mWxVaild) {
            wx.exitMiniProgram({
                success: function () {
                    cc.log("wx.exitMiniProgram success")
                },
                fail: function () {
                    cc.log("wx.exitMiniProgram fail")
                }
            })
        }
    }

    export function showShareMenu(withShareTicket?) {
        if (mWxVaild) {
            wx.showShareMenu({
                withShareTicket: withShareTicket || false
            })

            wx.onShareAppMessage(function () {
                let titles = [
                    "好友来助攻，海量红包进来就领！",
                    "玩游戏送红包，轻松游戏，轻松赚红包！",
                    "免费红包送不停，赶紧来领！"
                ]

                let images = [
                    "static/share1.jpg",
                    "static/share2.jpg"
                ]

                return {
                    title: titles[Math.floor(Math.random() * titles.length)],
                    imageUrl: images[Math.floor(Math.random() * images.length)]
                }
            })
        }
    }
}

export default WxWrapper