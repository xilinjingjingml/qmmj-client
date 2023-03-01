import BaseComponent from "../base/BaseComponent";
import BaseScene from "../base/baseScene/BaseScene";
import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import { payOrder, showAwardResultPop } from "../base/BaseFuncTs";
import { getMonthCardAward, getMonthCardStatus, sendReloadUserData } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseComponent {


    thisComponentName:string = "MonthCardPop"
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    __bindButtonHandler() {
        cc.log("__bindButtonHandler")
        BaseFunc.AddClickEvent(this["nodeMonthCard1"].getChildByName("nodeStatus1").getChildByName("btnBuy"), this.node, this.thisComponentName, "onPressBuyMonthCard", 0, 1);  
        BaseFunc.AddClickEvent(this["nodeMonthCard2"].getChildByName("nodeStatus1").getChildByName("btnBuy"), this.node, this.thisComponentName, "onPressBuyMonthCard", 1, 1);  
        
        BaseFunc.AddClickEvent(this["nodeMonthCard1"].getChildByName("nodeStatus2").getChildByName("btnBuy"), this.node, this.thisComponentName, "onPressGetAwardMonthCard", 2, 1);  
        BaseFunc.AddClickEvent(this["nodeMonthCard2"].getChildByName("nodeStatus2").getChildByName("btnBuy"), this.node, this.thisComponentName, "onPressGetAwardMonthCard", 1, 1);  
        BaseFunc.AddClickEvent(this["maskLayer"], this.node, this.thisComponentName, "onPressMask", 0, 0);
    }

    __preloadAfter() {        
        getMonthCardStatus(1)
        getMonthCardStatus(2)        
    }

    onOpenScene() {
        cc.log(DataManager.Instance.MonthBoxs)
        cc.log(DataManager.UserData.monthCardStatus)

        this.addListener("updateMonthCardStatus", this.updateMonthCardStatus.bind(this))
        this.initItem()
        this.refreshStatus()
    }

    initItem() {
        this["nodeMonthCard1"].active = false
        this["nodeMonthCard2"].active = false
        DataManager.Instance.MonthBoxs.forEach((v) => {
            this["tempItemInstance"] = null
            if(v.cardDays == 7){
                this["tempItemInstance"] = this["nodeMonthCard1"]
            }else if(v.cardDays == 30){
                this["tempItemInstance"] = this["nodeMonthCard2"]
            }
            if (!this["tempItemInstance"]) {
                return
            }
            
            this["tempItemInstance"].active = true
            // 购买后立得0金豆
            // 7天内每天可领0金豆
            this["tempItemInstance"].getChildByName("labelDesc").getComponent(cc.Label).string = "购买后立得" + v.firstMoney + "金豆\n" + v.cardDays + "天内每天可领" + v.gmDay + "金豆"
            this["tempItemInstance"].getChildByName("nodeStatus1").getChildByName("labelPrice").getComponent(cc.Label).string = v.price + "元购买"            
        })
    }

    refreshStatus() {
        // 0. 当天未领取 -1.没有购买至尊月卡 -2.已过期 -3 当天已领取
        DataManager.UserData.monthCardStatus.forEach((v, k) => {
            this["tempItemInstance"] = null
            if(k == 0){
                this["tempItemInstance"] = this["nodeMonthCard1"]
            }else if(k == 1){
                this["tempItemInstance"] = this["nodeMonthCard2"]
            }
            if (!this["tempItemInstance"]) {
                return
            }

            this["tempItemInstance"].getChildByName("nodeStatus1").active = false
            this["tempItemInstance"].getChildByName("nodeStatus2").active = false
            this["tempItemInstance"].getChildByName("nodeStatus3").active = false
            this["tempItemInstance"].getChildByName("nodeItemTip").active = false
            this["tempItemInstance"].getChildByName("nodeItemTip").getChildByName("labelRemainDay").getComponent(cc.Label).string = v.remainingDays + "日"

            if(v.ret == 0) {
                this["tempItemInstance"].getChildByName("nodeItemTip").active = true
                this["tempItemInstance"].getChildByName("nodeStatus2").active = true
            }if(v.ret == -1) {
                this["tempItemInstance"].getChildByName("nodeStatus1").active = true
            }if(v.ret == -2) {
                this["tempItemInstance"].getChildByName("nodeStatus1").active = true
            }if(v.ret == -3) {                
                this["tempItemInstance"].getChildByName("nodeItemTip").active = true
                this["tempItemInstance"].getChildByName("nodeStatus3").active = true
            }
        })
    }

    updateMonthCardStatus() {
        this.refreshStatus()
    }

    onPressMask() {
        console.log("onPressMask")
    }

    onPressClose() {
        console.log("onPressMask")
    }

    onPressBuyMonthCard(EventTouch, data) {
        console.log("onPressBuyMonthCard", data)
        let refreshViewCallback = () => {
            
            sendReloadUserData()
            this.closeSelf()
        }
        payOrder(DataManager.Instance.MonthBoxs[data], refreshViewCallback)
    }

    onPressGetAwardMonthCard(EventTouch, data) {
        console.log("onPressBuyMonthCard", data)
        
        getMonthCardAward(data)
    }
    

    start () {

    }
}
