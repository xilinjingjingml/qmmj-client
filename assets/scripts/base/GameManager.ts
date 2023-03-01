import LogLayer from "../moduleLobby/LogLayer";
import DataManager from "./baseData/DataManager";
import SceneManager from "./baseScene/SceneManager";
import NetManager from "./baseNet/NetManager";
import { checkNetwork, czcEvent, loadModule, ParseSearch, PostInfomation, callStaticMethod, getNotchHeight, changeGameLogo } from "./BaseFuncTs";

import PluginManager from "./PluginManager";
import BaseFunc = require("../base/BaseFunc")
import { isAndroidGame } from "../gameConfig";
// import qtt_help = require("https://newidea4-gamecenter-frontend.1sapp.com/game/gamesdk/beta/qtt_help.js")
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    private static _instance: GameManager

    @property()
    _bStart = false

    _logLayer: LogLayer = null

    onLoad() {
        czcEvent("大厅", "登录1", "游戏初始化")
        this.adaptScreen()
        changeGameLogo(cc.find("logo", this.node))

        GameManager._instance = this
        cc.game.addPersistRootNode(this.node);

        console.log("[GameManager.onLoad]")
        if (null == this.node.getComponent(SceneManager))
            this.node.addComponent(SceneManager)
        if (null == this.node.getComponent(DataManager))
            this.node.addComponent(DataManager)
        if (null == this.node.getComponent(NetManager))
            this.node.addComponent(NetManager)

        if (this.node.childrenCount == 0)        
            return

        this.node.children[0].active = true
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this)

        cc.game.on(cc.game.EVENT_HIDE, function(){cc.audioEngine.pauseAllEffects(); cc.audioEngine.pauseMusic()},this);
        cc.game.on(cc.game.EVENT_SHOW, function(){cc.audioEngine.resumeAllEffects(); cc.audioEngine.resumeMusic()},this);

        window.document.addEventListener("visibilitychange", (e) => {
            if (e.target.hidden)
            {
                cc.audioEngine.pauseAllEffects(); 
                cc.audioEngine.pauseMusic()
            }
            else {
                cc.audioEngine.resumeAllEffects(); 
                cc.audioEngine.resumeMusic()
            }            
        } )
    }

    static get Instance() {
        return GameManager._instance
    }
    
    start () {
        this._bStart = false
        if (cc.sys.isBrowser) {
            var args = ParseSearch(window.location.search)
            if (args.isTesting) {
                DataManager.Instance.isTesting = true
            }
        }
            
        console.log("Game Start")

        if (DataManager.Instance.CurENV == 2 && false == DataManager.Instance.isTesting && true != DataManager.load("versetting")){
            console.log = () => {}
        }

        if (null != window.document.getElementById("__vconsole")) {
            for (let val of window.document.getElementById("__vconsole").children){
                if (val.className == "vc-switch") {
                    DataManager.CommonData["vconsole"] = val
                    break;
                }
            }
        }
        

        if (null != DataManager.CommonData["vconsole"]){
            if (true == DataManager.load("versetting") || true == DataManager.Instance.isTesting) {
                DataManager.CommonData["vconsole"].style.display = ""
            }
        }
        if (DataManager.load("showconsolelog")) {
            this.setConsoleLog()
        }
        

        this.node.children[0].active = true
        if (isAndroidGame())
        {
            checkNetwork(this.onInit.bind(this))
        }
        else
        {
            if (window.qttGame) {
                PostInfomation(window.qttGame.systemInfo)
            }
        }
    }

    onInit(): void {
        console.log("[GameManager.onInit] == ", cc.sys.isNative)
        if (!cc.sys.isNative)
        {
            return
        }
        PluginManager.onInit()
        DataManager.Instance.onInit()
        NetManager.Instance.onInit()
        SceneManager.Instance.onInit()
    }
    
    update(dt) {
        if (!cc.sys.isNative)
        {
            //console.log("[!cc.sys.isNative] update ==",this._bStart)
            if (this._bStart) return  
            DataManager.Instance.onInit()
            NetManager.Instance.onInit()
            SceneManager.Instance.onInit()
            loadModule(DataManager.Instance.StartModule); 
            this._bStart = true
            return
        }

        if (this._bStart || DataManager.CommonData["pluginFinish"] != true || DataManager.CommonData["configFinish"] != true) {
            // console.log("[GameManager.update] == ",this._bStart, DataManager.CommonData["pluginFinish"], DataManager.CommonData["configFinish"])
            return
        }
        this._bStart = true
        console.log("[GameManager.update]")
        
        if (CC_JSB) {
            SceneManager.Instance.addScene<String>("moduleLobby", "UpdateScene")
        } else if (cc.sys.isNative|| CC_PREVIEW) {
            SceneManager.Instance.addScene<String>("moduleLobby", "LoginScene")
        } else {
            loadModule(DataManager.Instance.StartModule);
        }
    }

    static onChangeFire() {
        GameManager._instance.node.children[0].stopAllActions()
        GameManager._instance.node.children[0].active = true
        GameManager._instance.node.children[0].runAction(cc.sequence(cc.delayTime(1), cc.callFunc(() => GameManager._instance.node.children[0].active = false)))
    }

    static showFire() {
        GameManager._instance.node.children[0].stopAllActions()
        GameManager._instance.node.children[0].active = true
    }
    static hideFace() {
        GameManager._instance.node.children[0].stopAllActions()
        GameManager._instance.node.children[0].active = false
    }

    onAfterDraw() {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            callStaticMethod("com/izhangxin/utils/luaj", "hideSplash", "()V")
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            callStaticMethod("LuaObjc", "hideSplash")
        }
    }

    // 动态适配
    adaptScreen() {
        const canvas = cc.Canvas.instance
        const frameSize = cc.view.getFrameSize()
        const designSize = canvas.designResolution
        const notchHeight = getNotchHeight()
        if (notchHeight > 0) {
            canvas.fitHeight = true
            canvas.fitWidth = true
            canvas.designResolution = cc.size(designSize.height * ((frameSize.width - notchHeight * 2) / frameSize.height), designSize.height)
            window['winSize'] = cc.size(designSize.height * (frameSize.width / frameSize.height), designSize.height)
            window['adaptWidth'] = (window['winSize'].width - cc.winSize.width) / 2
            window['adaptHeight'] = (window['winSize'].height - cc.winSize.height) / 2
        } else if ((frameSize.width / frameSize.height) >= (designSize.width / designSize.height)) {
            // 全面屏
            canvas.fitHeight = true
            canvas.fitWidth = false
        } else {
            canvas.fitHeight = false
            canvas.fitWidth = true
        }
    }

    setConsoleLog(show: boolean = true) {
        DataManager.save("showconsolelog", show)
        if (show) {
            BaseFunc.InstantiatePrefab("moduleLobby/prefab/LogLayer", (node: cc.Node) => {
                node.parent = this.node
                this._logLayer = node.getComponent(LogLayer)
            })
        } else {
            this._logLayer.node.parent = null
            this._logLayer.node.destroy()
            this._logLayer = null
        }
    }
}


