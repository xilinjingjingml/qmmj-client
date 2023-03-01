import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.gdmj"
import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class OperatePopupItem extends BaseComponent {

    @property(cc.Prefab)
    prefab_card:cc.Prefab = null

    @property()
    data:[] = []
    thisComponentName = "OperatePopupItem.gdmj"

    __bindButtonHandler() {        
		BaseFunc.AddClickEvent(this.node, this.node, this.thisComponentName, "onPressOperate");
    }

    init(data) {
        this.data = data

        let vecCards = []
        if (data.opcode == GameLogic.Instance().gamescene.OXX) {
            vecCards.push(data.value)
            vecCards.push(data.value + 1)
            vecCards.push(data.value + 2)
        } else if (data.opcode == GameLogic.Instance().gamescene.XOX) {
            vecCards.push(data.value - 1)
            vecCards.push(data.value)
            vecCards.push(data.value + 1)
        } else if (data.opcode == GameLogic.Instance().gamescene.XXO) {
            vecCards.push(data.value - 2)
            vecCards.push(data.value - 1)
            vecCards.push(data.value)
        } else if ((data.opcode & GameLogic.Instance().gamescene.GANGPAI) > 0) {
            for (let i = 0; i < 4; i++) {
                vecCards.push(data.value)
            }
        }

        for (const value of vecCards) {
            GameLogic.Instance().addPrefab(this.prefab_card, this.node).getComponent("Card.gdmj").init(value)
        }
    }

    onPressOperate() {
        GameLogic.Instance().gamescene.mahjong_gdmj_playcard_ack_sender(this.data.opcode, this.data.value, GameLogic.Instance().gamescene.curSerialID)
    }
}