import BaseComponent from "../base/BaseComponent";
import DataManager from "../base/baseData/DataManager";
import { callStaticMethod, changeGameLogo, checkNetwork, ConfirmBox, versionCompare } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import GameManager from "../base/GameManager";
import HotUpdate from "../base/HotUpdate";
import PluginManager from "../base/PluginManager";
import md5 = require("../base/extensions/md5.min")
import { Games } from "../gameConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UpdateScene extends BaseComponent {

    onOpenScene() {
        changeGameLogo(cc.find("logo", this.node))
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this)
        this.setState(0)
    }

    start() {
        this.checkUpdate()
    }

    onAfterDraw() {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this)
        if (!this.isValid) { return }
        GameManager.hideFace()
    }

    checkUpdate(): void {
        if (this.checkAppVersion()) {
            return
        }

        this.checkUpdate2()
    }

    checkUpdate2(): void {
        if (CC_JSB && this.checkGameVersion()) {
            return
        } else {
            this.node.removeComponent(HotUpdate)
        }

        this.showLoginScene()
    }

    // 检测APP版本
    checkAppVersion(): boolean {
        const versionupdate = DataManager.Instance.versionupdate
        const version = PluginManager.getVersionCode()
        console.log("[UpdateScene.checkAppVersion]", versionupdate)
        console.log("[UpdateScene.checkAppVersion]", version, versionupdate && versionupdate.vn)
        if (version >= versionupdate.vn) {
            return
        }

        const param = {
            title: "发现新版本",
            content: versionupdate.msg,
            buttonNum: 2,
            confirmFunc: null,
            cancelFunc: null,
            confirmText: "立即更新",
            cancelText: "",
            confirmClose: true,
            maskCanClose: false,
            showClose: false,
            zIndex: cc.macro.MAX_ZINDEX,
        }
        if (versionupdate.ef == 0) {
            param.cancelText = "暂不更新"
            param.cancelFunc = this.showLoginScene.bind(this)
        } else {
            param.cancelText = "关闭游戏"
            param.cancelFunc = () => {
                console.log("[UpdateScene.checkAppVersion] cancelFunc")
                cc.game.end()
            }
        }
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            param.confirmFunc = () => {
                console.log("[UpdateScene.checkAppVersion] confirmFunc")
                const params = [
                    versionupdate.url,
                    "下载中",
                    "正在更新游戏资源",
                    md5(versionupdate.url) + ".apk",
                    () => { }
                ]
                callStaticMethod("com/izhangxin/utils/luaj", "showUpgradeDialog", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V", params)
            }
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            param.buttonNum = 1
            param.confirmFunc = () => {
                console.log("[UpdateScene.checkAppVersion] confirmFunc")
                cc.sys.openURL(versionupdate.url)
            }
        } else {
            param.buttonNum = 1
            param.confirmText = param.cancelText
            param.confirmFunc = param.cancelFunc
        }
        ConfirmBox(param)
        return true
    }

    UpgradeUtil(message: any): void {
        console.log("[UpdateScene.UpgradeUtil] message", message.data)
        const data = JSON.parse(message.data)
        if (data.event == "cancelDownload") {
            this.node.runAction(cc.sequence(
                cc.delayTime(0.2),
                cc.callFunc(() => {
                    checkNetwork(this.checkUpdate.bind(this))
                })
            ))
        }
    }

    // 检测游戏版本
    checkGameVersion(): boolean {
        const component = this.node.addComponent(HotUpdate)
        component.loadLocalManifest()
        const reviewversion = DataManager.Instance.onlineParam.review_version
        const gameversion = DataManager.Instance.onlineParam.game_version
        const lastversion = DataManager.Instance.version
        const localversion = component.data.manifestConfig.version
        console.log("[UpdateScene.checkGameVersion]", reviewversion, gameversion, lastversion, localversion)
        DataManager.Instance.version = localversion

        // 审核版本不更新
        if (reviewversion == PluginManager.getVersionCode()) {
            DataManager.GlobalData.isReview = true
            return
        }

        if (gameversion == null) {
            return
        }

        // 尝试更新过不更新
        if (versionCompare(lastversion, gameversion) >= 0) {
            return
        }

        // 低于本地版本不更新
        if (versionCompare(localversion, gameversion) >= 0) {
            return
        }

        this.setState(1)
        this.setProgress(0)
        const url = DataManager.Instance.envConfigs.updateURL + DataManager.Instance.gameId + '/' + gameversion
        component.setConfig(url, this.setProgress.bind(this), this.updateResult.bind(this))
        return true
    }

    setProgress(value: number): void {
        value = value || 0
        console.log("[UpdateScene.setProgress] value", value)
        this['progressBar'].getComponent(cc.ProgressBar).progress = value
        this['lbl_progress'].getComponent(cc.Label).string = Math.floor(value * 100) + "%"

        if (value == 1 && this['nodeTips'].active) {
            this.setState(0)
        }
    }

    setState(state: number): void {
        console.log("[UpdateScene.setState] state", state)
        this['nodeTips'].active = state == 1
        this['progressBar'].active = state == 1
        this['loading'].active = state == 0
    }

    updateResult(ret: number): void {
        console.log("[UpdateScene.updateResult]", ret)
        // 1 finished 2 failed 3 already
        if (ret == 1 || ret == 3) {
            DataManager.save('game_version', DataManager.Instance.onlineParam.game_version)
        }
        if (ret == 1) {
            this.setState(0)
        } else if (ret == 2) {
            checkNetwork(() => {
                this.getComponent(HotUpdate).retry()
            }, true)
        } else if (ret == 3) {
            this.showLoginScene()
        }
    }

    showLoginScene(): void {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this)
        this.loadSubpackages()
        GameManager.showFire()
        SceneManager.Instance.addScene<String>("moduleLobby", "LoginScene")
    }

    loadSubpackages(): void {
        this.loadSubpackage("moduleBase")
        for (const key in Games) {
            this.loadSubpackage(Games[key])
        }
    }

    loadSubpackage(name: string): void {
        console.log("[UpdateScene.loadSubpackage]", name)
        cc.loader.downloader.loadSubpackage(name, function (err: any) {
            if (err) {
                console.log("[UpdateScene.loadSubpackage] " + name + " fail", err)
            } else {
                console.log("[UpdateScene.loadSubpackage] " + name + " success")
            }
        })
    }
}
