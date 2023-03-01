import BaseScene from "../base/baseScene/BaseScene";

import SceneManager from "../base/baseScene/SceneManager";
import DataManager from "../base/baseData/DataManager";
import { payOrder, checkFirstBox, czcEvent } from "../base/BaseFuncTs";
import { sendReloadUserData } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FirstPayPop extends BaseScene {

    bFinish = false
    firstBox = null

    onOpenScene() {
        czcEvent("大厅", "首充礼包1", "打开首充礼包 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        this.firstBox = checkFirstBox()
        if (null == this.firstBox){
            // this.closeSelf()
            return
        }
        this.firstBox.type = 7
    }

    onPressPay() {
        czcEvent("大厅", "首充礼包2", "购买首充礼包 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        let self = this
        payOrder(this.firstBox, () => {
            self.initParam["closeCallback"] = null
            sendReloadUserData()
            self.closeSelf()
        })
    }

    onCloseScene() {
        czcEvent("大厅", "首充礼包3", "关闭首充礼包 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    }

}
