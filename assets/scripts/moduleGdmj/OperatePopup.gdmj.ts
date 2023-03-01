import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.gdmj"
import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class OperatePopup extends BaseComponent {

    @property(cc.Prefab)
    prefab_operator_item:cc.Prefab = null
    
    @property(cc.Prefab)
    prefab_tingcard_item:cc.Prefab = null

    init(operFlag, vecDatas) {
        if (this.node_operate_popup_item) {            
            this.node_operate_popup_item.removeAllChildren()
        }
        if (this.node_tingcard_popup_item) {            
            this.node_tingcard_popup_item.removeAllChildren()
        }

        if ((operFlag & GameLogic.Instance().gamescene.CHIPAI) > 0) {
            this.showOperateCards(vecDatas)            
        }else if ((operFlag & GameLogic.Instance().gamescene.GANGPAI) > 0){
            this.showOperateCards(vecDatas)
        }else if ((operFlag & GameLogic.Instance().gamescene.TINGPAI) > 0){
            this.showTingCards(vecDatas)
        }
    }

    showOperateCards(vecDatas) {

        let operateCode = 0

        for (const data of vecDatas) {
            let group = GameLogic.Instance().addPrefab(this.prefab_operator_item, this.node_operate_popup_item)
            group.getComponent("OperatePopupItem.gdmj").init(data)
            group.y = 0
            operateCode = data.opcode
        }

        if ((operateCode & GameLogic.Instance().gamescene.CHIPAI) > 0) {
            this.OperatePopTitle.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "tip_chi")
        }else if ((operateCode & GameLogic.Instance().gamescene.GANGPAI) > 0) {
            this.OperatePopTitle.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "tip_gang")
        }
    }

    showTingCards(vecFans) {
        for (const data of vecFans) {
            let group = GameLogic.Instance().addPrefab(this.prefab_tingcard_item, this.node_tingcard_popup_item)
            group.getComponent("TingCardPopupItem.gdmj").init(data)
            group.y = 0
        }
    }
}