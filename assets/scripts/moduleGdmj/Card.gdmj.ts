import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.gdmj"
import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends BaseComponent {

    init(value) {
        this.spt_value.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("MaJiang.hbermj",  (value || 'v3d_bg_up'))
    }

    hideValue() {
        this.spt_value.active = false
    }

    setMaJiangBg(value) {
        this.spt_bg.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("MaJiang.hbermj",  value)
        
        let majiangThick = 12
        let offsetY = 10
        if (value == "2dmj_card_me_face_3" || 
        value == "2dmj_card_me_face_2") {
            this.spt_value.y = majiangThick * 3 - offsetY
            this.spt_bg.y = majiangThick - offsetY
            this.spt_bg.height = 124
        }else if(value == "2dmj_card_me_face_1" ||
        value == "2dmj_card_me_back_1") {
            this.spt_value.y = majiangThick - offsetY
            this.spt_bg.y = -offsetY
        }
    }
}