import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import { iMessageBox, MsgBox, czcEvent } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import { exchangeAward } from "./LobbyFunc";
import BaseFunc = require("../base/BaseFunc")

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExchangeConfirmPop extends BaseScene {

    onOpenScene() {
        czcEvent("大厅", "兑换红包", "请求兑换红包 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        if (null == this.initParam)
            return
        
        let num = this.initParam["gainItemList"][0]["gainNum"];
        if (this.initParam["gainItemList"][0]["gainItem"] == 332)
            num = num / 10
        let icon = cc.find("nodePop/exchange_item_frame/" + num + "RMB", this.node)
        if (icon) icon.active = true
        
        let price = this.initParam["exchangeItemList"][0]["exchangeNum"]
        if (price >= 10000)
            price = price / 10000 + "w"
        cc.find("nodePop/btnExchange/labelPrice", this.node).getComponent(cc.Label).string = price
        

        let buy = cc.find("nodePop/btnExchange", this.node).getComponent(cc.Button)
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "ExchangeConfirmPop";
        clickEventHandler.handler = "onExchange"; 

        let self = this
        this["onExchange"] = () => {
            czcEvent("大厅", "兑换红包", "请求兑换红包 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            exchangeAward(this.initParam["goodsId"], () => {
                czcEvent("大厅", "兑换红包", "兑换红包失败 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                SceneManager.Instance.popScene("moduleLobby", "ExchangeSuccPop")
                self.closeSelf()
            })
        }         
        
        buy.clickEvents.push(clickEventHandler);
    }
}
