import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.gdmj"
import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameFanXingTipLayer extends BaseComponent {


    @property
    thisComponentName:string = "GameFanXingTipLayer.gdmj"
    btnMenu1: any;
    btnMenu2: any;
    labelMenu1: any;
    labelMenu2: any;
    nodeContent1: any;
    nodeContent2: any;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    __bindButtonHandler() {
		BaseFunc.AddClickEvent(this.btnClose, this.node, this.thisComponentName, "onPressClose", 0);
        
    }
    btnClose(btnClose: any, node: cc.Node, thisComponentName: string, arg3: string, arg4: number) {
        throw new Error("Method not implemented.");
    }


    start () {
        if (GameLogic.Instance().gametype==0) {
            this.jphScrollView.active = false
            this.tdhScrollView.active = true
        }else if (GameLogic.Instance().gametype==1) {
            this.jphScrollView.active = true
            this.tdhScrollView.active = false
        }
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
