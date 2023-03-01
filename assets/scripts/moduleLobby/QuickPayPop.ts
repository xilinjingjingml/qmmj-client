import BaseScene from "../base/baseScene/BaseScene";
import { payOrder } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class QuickPayPop extends BaseScene {

    box = null

    onOpenScene() {
        if (DataManager.CommonData["gameServer"]) {
            DataManager.CommonData["needMoney"] = DataManager.CommonData["gameServer"]["level"] == 1 ? 10000 : 
                                                  DataManager.CommonData["gameServer"]["level"] == 2 ? 60000 : 100000
        }        
        
        if (DataManager.CommonData["needMoney"] == 10000){
            cc.find("gold_unenough/10000gold", this.node).active = true
            cc.find("btnBuy1", this.node).active = true
        }else if (DataManager.CommonData["needMoney"] == 100000){
            cc.find("gold_unenough/100000gold", this.node).active = true
            cc.find("btnBuy10", this.node).active = true
        }else if (DataManager.CommonData["needMoney"] == 120000){
            cc.find("gold_unenough/120000gold", this.node).active = true
            cc.find("btnBuy12", this.node).active = true
        }else {
            cc.find("gold_unenough/60000gold", this.node).active = true
            cc.find("btnBuy6", this.node).active = true
        }

        let box = Object.assign(DataManager.Instance.NormalBoxs)
        box.sort((a, b) => a.content[0].num < b.content[0].num ? -1 : 1)

        for (const iterator of box) {
            if (iterator.content[0].num >= DataManager.CommonData["needMoney"]) {
                this.box = iterator
                break;
            }
        }
    }

    onCloseScene() {
    }

    onPressPay() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        if (this.initParam) {
            let self = this
            payOrder(this.box, () => {
                self.initParam["closeCallback"] = null
                self.closeSelf()
            })
        }
    }
}
