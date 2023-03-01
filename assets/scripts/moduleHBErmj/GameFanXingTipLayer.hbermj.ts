import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.hbermj"
import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameFanXingTipLayer extends BaseComponent {


    @property
    thisComponentName:string = "GameFanXingTipLayer.hbermj"
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    __bindButtonHandler() {
		BaseFunc.AddClickEvent(this.btnClose, this.node, this.thisComponentName, "onPressClose", 0);
        
    }


    start () {

    }

    onPressMenu(EventTouch, data) {
        let enableMenu1 = (data == 1)
        
        
        this.btnMenu1.$Button.interactable = !enableMenu1
        this.btnMenu2.$Button.interactable = enableMenu1

        if (enableMenu1) {
            this.labelMenu1.color = new cc.Color(154,92,31)
            this.labelMenu2.color = new cc.Color(255, 255, 255)
        }else{
            this.labelMenu1.color = new cc.Color(255, 255, 255)
            this.labelMenu2.color = new cc.Color(154,92,31)
        }

        this.nodeContent1.active = enableMenu1
        this.nodeContent2.active = !enableMenu1
    }

    onPressClose() {
        this.close()
        if (this.initParam.cancelCback) {
            this.initParam.cancelCback()
        }
    }

    close() {
        GameLogic.Instance().closeScene("GameFanXingTipLayer")
    }
    // update (dt) {}
}
