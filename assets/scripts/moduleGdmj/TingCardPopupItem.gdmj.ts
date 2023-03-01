import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TingCardPopupItem extends BaseComponent {


    @property()
    data:[] = []
    thisComponentName = "TingCardPopupItem.gdmj"

    __bindButtonHandler() {        
        
    }

    init(data) {
        this.data = data

        this.spt_value.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("MaJiang.hbermj",  (this.data.cHuCard || 'v3d_bg_up'))
        this.labelFanNum.$RichText.string = "<color=#E5EC8F> " + this.data.nFan + "</c><color=#06BCBD>番</color>"
        this.labelRestCardNum.$RichText.string = "<color=#E5EC8F> " + this.data.nLeftNum + "</c><color=#06BCBD>张</color>"
    }

}