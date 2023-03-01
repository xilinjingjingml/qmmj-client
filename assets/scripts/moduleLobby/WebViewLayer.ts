import BaseScene from "../base/baseScene/BaseScene";
import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import SceneManager from "../base/baseScene/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WebViewLayer extends BaseScene {
    onOpenScene() {
        console.log("start")

        let btn_exit = cc.find("btn_exit", this.node)
        let node_content = cc.find("node_content", this.node)
        if(this.initParam.fullScreen){
            btn_exit.active = false
            node_content.getComponent(cc.Widget).top = 0
        }

        let url = this.initParam.url
        let data = this.initParam.params
        for (var key in (data || {})) {
            url = url.replace('{' + key + '}', encodeURIComponent(data[key]))
        }
        console.log("start url",url)
        let WebView = cc.find("node_content/WebView", this.node)
        WebView.getComponent(cc.WebView).url = url

        BaseFunc.AddClickEvent(btn_exit, this.node, "WebViewLayer", "onPressExitBtn",null,-1)
    }

    onEnable() {
        console.log("onEnable");        
    }

    onDisable(){
        console.log("onDisable")
    }

    // called every frame
    update(dt){
    }

    onPressExitBtn(){
        console.log("onPressExitBtn")
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        SceneManager.Instance.closeScene("WebViewLayer")
    }
}
