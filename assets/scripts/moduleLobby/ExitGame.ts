import BaseScene from "../base/baseScene/BaseScene";
import { iMessageBox, czcEvent } from "../base/BaseFuncTs";
import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import { getMobileCode } from "./LobbyFunc";
import md5 = require("../base/extensions/md5.min")
import SceneManager from "../base/baseScene/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExitGame extends BaseScene {
 
    _GameRichText: cc.RichText = null
    _ExitType : number = 1;
    onOpenScene() {
        //<color=#00ff00>Rich</c><color=#0fffff>Text</color>
        this._GameRichText = cc.find("nodePop/GameRichText", this.node).getComponent(cc.RichText)
        var text =  "<color=#ca6f2c>再玩</c><color=#5c98ff>"+2+"</c><color=#ca6f2c>局就可以开启红包了，\n</c><color=#0fffff>Text</color>"
        //this._GameRichText.string = text
        this._GameRichText.string = text
    }
 1
    update(dt) {
       
    }

    onKeyboardClose() {
       
    }

    onInput(key) {
   
    }

    onCloseScene() {
        SceneManager.Instance.closeScene("ExitGame")
    }
}
