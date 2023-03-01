import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import {copyToClipBoard} from "../base/BaseFuncTs";
import TabControl from "../base/extensions/Extpands/TabControl";
import { isAndroidGame } from "../gameConfig";
import PluginManager from "../base/PluginManager";
import { SVN_VERSION } from "../config";
import SceneManager from "../base/baseScene/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingScene extends BaseScene {

    _conClick: number = 0;
    _lastTime: number = 0;

    start () {

    }

    onOpenScene() {
        let guid = cc.find("nodePop/nodeLift/guidlabel", this.node)
        if (null != guid)
            guid.getComponent(cc.Label).string = "ID: " + DataManager.UserData.guid

        let ver = cc.find("nodePop/nodeRight/verlabel", this.node)
        if (null != ver)
            let strEnv = ["测试", "镜像"][DataManager.Instance.CurENV] || ""
            ver.getComponent(cc.Label).string = "版本号: " + strEnv
            if (isAndroidGame()){
                ver.getComponent(cc.Label).string += PluginManager.getVersionName()+"_"+PluginManager.getVersionCode()
            } else {
                ver.getComponent(cc.Label).string += DataManager.Instance.version
            }

        if (DataManager.SoundVolume == 1)
            cc.find("nodePop/nodeLift/btnMusic02", this.node).getComponent(TabControl).onGroup()
        else
            cc.find("nodePop/nodeLift/btnMusic01", this.node).getComponent(TabControl).onGroup()

            
        if (DataManager.EffectVolume == 1)
            cc.find("nodePop/nodeLift/btnEffect02", this.node).getComponent(TabControl).onGroup()
        else
            cc.find("nodePop/nodeLift/btnEffect01", this.node).getComponent(TabControl).onGroup()

        this.node.on("soundchange", (msg) => { 
            DataManager.SoundVolume = msg.param
        })
        this.node.on("effectchange", (msg) => { 
            DataManager.EffectVolume = msg.param
        })
        this.node.on("copyphone", () => { copyToClipBoard("4009952201") })
    }

    onCloseScene() {
        this.node.off("soundchange")
        this.node.off("effectchange")
        this.node.off("copyphone")
    }    

    onPressVersion() {
        this._conClick ++;

        if (0 != this._lastTime && 500 < new Date().getTime() - this._lastTime)
            return

        this._lastTime = new Date().getTime()

        if (this._conClick > 15) {
            DataManager.save("versetting", true)
            if (null != DataManager.CommonData["vconsole"]) {
                DataManager.CommonData["vconsole"].style.display=""
            }

            if (true || cc.sys.isNative || CC_PREVIEW) {
                SceneManager.Instance.popScene<String>("moduleLobby", "ChangeEnvPop")
            }
        }
    }

    onPressAgreementPop(sender,data) {
       console.log("onPressAgreementPop ==") 
       SceneManager.Instance.popScene("moduleLobby", "AgreementPop", {AgreementType:parseInt(data)})
   }
}
