import { checkOneYuanBox, payOrder, getShopBox, sToTime } from "../base/BaseFuncTs";
import DataManager from "../base/baseData/DataManager";
import BaseComponent from "../base/BaseComponent";
import SceneManager from "../base/baseScene/SceneManager";

const { ccclass } = cc._decorator;

@ccclass
export default class OneYuanOneDayActivePop extends BaseComponent {
    _delayTime: number = 0
    _remainTime: number = 0

    onOpenScene() {
        DataManager.CommonData[DataManager.UserData.guid + "OneYuanActivePop"] = true

        getShopBox(2, this.updateShopInfo.bind(this))

        let today = new Date()
        let tomorrow = new Date()
        tomorrow.setDate(today.getDate() + 1)
        tomorrow.setHours(0, 0, 0, 0)

        this._remainTime = tomorrow.getTime() / 1000 - today.getTime() / 1000

        this["nodeShops"].getChildByName("btnBuy1").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
        this["nodeShops"].getChildByName("btnBuy3").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
        this["nodeShops"].getChildByName("btnBuy6").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
    }

    update(dt) {
        this._delayTime += 1
        if (this._delayTime >= 60) {
            --this._remainTime
            this._remainTime = this._remainTime < 0 ? 0 : this._remainTime
            this._delayTime = 0
            this["nodeShops"].getChildByName("btnBuy1").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
            this["nodeShops"].getChildByName("btnBuy3").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
            this["nodeShops"].getChildByName("btnBuy6").getChildByName("labelRemainTime").getComponent(cc.Label).string = sToTime(this._remainTime)
        }
    }

    onPressBuy(event, data) {
        let box = checkOneYuanBox(data, 1)
        let self = this
        if (null != box)
            payOrder(box, () => { self.closeSelf() })
    }

    updateShopInfo() {
        if (this.node == null)
            return

        let box1 = checkOneYuanBox(1, 1)
        let box3 = checkOneYuanBox(3, 1)
        let box6 = checkOneYuanBox(6, 1)

        this["nodeShops"].getChildByName("btnBuy1").getComponent(cc.Button).interactable = box1 != null
        this["nodeShops"].getChildByName("btnBuy3").getComponent(cc.Button).interactable = box3 != null
        this["nodeShops"].getChildByName("btnBuy6").getComponent(cc.Button).interactable = box6 != null

        this["nodeShops"].getChildByName("btnBuy1").getChildByName("labelRemainTime").active = box1 != null
        this["nodeShops"].getChildByName("btnBuy3").getChildByName("labelRemainTime").active = box3 != null
        this["nodeShops"].getChildByName("btnBuy6").getChildByName("labelRemainTime").active = box6 != null
    }

    onPressHelp() {
        SceneManager.Instance.popScene("moduleLobby", "ActivePop", {pageNum: 1})
    }
}
