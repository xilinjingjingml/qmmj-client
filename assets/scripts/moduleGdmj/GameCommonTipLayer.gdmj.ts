import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.gdmj"
import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";

// let GameLogic.Instance() = GameLogic.Instance()

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameCommonTipLayer extends BaseComponent {

    @property
    thisComponentName:string = "GameCommonTipLayer.gdmj"

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        this.style = this.initParam.style || 0
        this.msg = this.initParam.msg || []
        
        // this.emulateData()

        this.showTips()

        this.refreshButton(this.style)
    }

    __bindButtonHandler() {
        cc.log("__bindButtonHandler")
		BaseFunc.AddClickEvent(this.btn_close, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btn_confirm, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btn_cancel, this.node, this.thisComponentName, "onPressCancel", 0);
    }
    
    refreshButton(style = 0) {

        this.btn_close.active = false

        switch (style) {
            // 游戏中退出
            case 1:
                this.btn_confirm.$Sprite.spriteFrame = DataManager.Instance.getSpriteFrame("common", "btnConfirm")
                this.btn_cancel.$Sprite.spriteFrame = DataManager.Instance.getSpriteFrame("common", "btnCancel")                
                break;        
            case 2:
            default:
                break;
        }
    }

    emulateData() {

        this.msg = [
            {size: 24, color: "874612", text: "还差"},
            {size: 24, color: "E41D14", text: "3"},
            {size: 24, color: "874612", text: "局就可以开启红包(0.3元~1元)"},
            {size: 24, color: "874612", text: "\n"},
            {size: 24, color: "874612", text: "现在退出红包局数进度将被清空"}
        ]
        
        this.msg = [
            {size: 24, color: "874612", text: "还差"},
            {size: 24, color: "E41D14", text: "3"},
            {size: 24, color: "874612", text: "局就可得"},
            {size: 24, color: "E41D14", text: "最低0.3元"},
            {size: 24, color: "874612", text: "红包(可提现)"},
            {size: 24, color: "874612", text: "\n"},
            {size: 24, color: "E41D14", text: "98.7%"},
            {size: 24, color: "874612", text: "的玩家都玩够4局了"}
        ]

        // this.msg = "再玩3局就可以开启红包了，\n98.7%的玩家都开启红包获得大量奖励哦"
    }

    showTips() {
        cc.log(typeof(this.msg))
        if (typeof(this.msg) == "string") {
            this.labelTips.$Label.string = this.msg
        }else if(typeof(this.msg) == "object") {
            let formatMsg = ""
            let fontSize = 24

            this.msg.forEach(v => {
                formatMsg = formatMsg + "<color=#" + v.color + ">" + v.text + "</c>"
                fontSize = v.size
            });
            
            this.richLabelTips.active = true
            this.labelTips.active = false
            this.richLabelTips.$RichText.fontSize = fontSize                
            this.richLabelTips.$RichText.string = formatMsg
        }
    }
    
    onPressContinue() {
        this.close()
        if (this.initParam.confirmCback) {
            this.initParam.confirmCback()
        }
    }

    onPressCancel() {
        this.close()
        if (this.initParam.cancelCback) {
            this.initParam.cancelCback()
        }
    }

    close() {
        GameLogic.Instance().closeScene("GameCommonTipLayer")
    }


    // update (dt) {}
}
