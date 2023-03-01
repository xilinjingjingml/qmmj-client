import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import { iMessageBox, MsgBox, czcEvent } from "../base/BaseFuncTs";
import { getVipConfig, exchangeAward } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExchangeConfirm3Pop extends BaseScene {

    exchangeNum: number = 1;    
    exchangeNumLabel: cc.Label = null
    exchangePriceLabel: cc.Label = null
    
    onOpenScene() {
        this.initInfo()   
    }

    initInfo(){
        if (null == this.initParam)
            return
        
        cc.find("nodePop/labelName", this.node).getComponent(cc.Label).string = this.initParam["gainItemList"][0]["gainNum"] + "jd"

        this.exchangeNum = this.initParam["exchangeItemList"][0]["exchangeNum"];

        this.exchangePriceLabel = cc.find("nodePop/btnExchange/labelPrice", this.node).getComponent(cc.Label)
        //this.exchangePriceLabel.string = this.exchangeNum >= 10000 ? this.exchangeNum / 10000 + "万购买" : this.exchangeNum / 1000 + "千购买"
        this.exchangePriceLabel.string = "qjb" + this.exchangeNum

        let buy = cc.find("nodePop/btnExchange", this.node).getComponent(cc.Button)
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; 
        clickEventHandler.component = "ExchangeConfirm3Pop";
        clickEventHandler.handler = "onExchange"; 

        let self = this
        this["onExchange"] = () => {
            czcEvent("大厅", "兑换红包", "请求兑换金豆 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            exchangeAward(this.initParam["goodsId"], () => {
                czcEvent("大厅", "兑换红包", "兑换金豆成功 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                // this.sendMessage("updateUserInfo")
                self.closeSelf()
            })
        }         
        
        buy.clickEvents.push(clickEventHandler);
    }
}
