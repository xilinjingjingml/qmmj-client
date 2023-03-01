import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import { getVipConfig } from "./LobbyFunc";
import { numberFormat, getQttCoinQuery } from "../base/BaseFuncTs";
import ShopBoxList from "./component/ShopBoxList";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopScene extends BaseScene {

    onOpenScene() {
        this.addListener("updateUserData", this.updateUserInfo.bind(this))
        this.addListener("updateVipInfo", this.updateVipInfo.bind(this))
        this.updateUserInfo()

        if (null == DataManager.CommonData["VipInfo"])
            getVipConfig(this.updateVipInfo.bind(this))        
        else
            this.updateVipInfo()        
            
        this.node.getComponentInChildren(ShopBoxList).setShopType(null != this.initParam["type"] ? this.initParam["type"] : 1)
        let menu = cc.find("nodeContent/menu/view/content", this.node)
        let tab = menu.getChildByName("toggle" + this.initParam["type"])
        if (tab)
            tab.getComponent(cc.Toggle).isChecked = true
    }

    updateUserInfo() {
        // 用户信息
        let goldbean = cc.find("nodeTop/goldbean_bg/labelgold", this.node)
        if (null != goldbean)
            goldbean.getComponent(cc.Label).string = numberFormat(DataManager.UserData.money)

        let redpacket = cc.find("nodeTop/redpacket_bg/labelrp", this.node)
        if (null != redpacket)
            redpacket.getComponent(cc.Label).string = numberFormat(DataManager.UserData.getItemNum(365))

        let diamond = cc.find("nodeTop/diamond_bg/labeldiamond", this.node)
        if (null != diamond)
            diamond.getComponent(cc.Label).string = numberFormat(DataManager.UserData.getItemNum(1192))

        let labelNeedMoney = cc.find("nodeContent/vipPriceTip/needMoney", this.node)
        cc.log("DataManager.CommonData.VipData == ",DataManager.CommonData["VipData"])
        if (DataManager.CommonData["VipData"] && DataManager.CommonData["VipData"].nextVipneedMoney)
        {
        labelNeedMoney.getComponent(cc.Label).string = "" + DataManager.CommonData["VipData"].nextVipneedMoney + "y"
        let viplv = cc.find("nodeContent/vipPriceTip/viplv", this.node)
        viplv.getComponent(cc.Label).string = "" + (DataManager.CommonData["VipData"].vipLevel + 1)
        }
        else
        {
            labelNeedMoney.getComponent(cc.Label).string = "" + 0
            let viplv = cc.find("nodeContent/vipPriceTip/viplv", this.node)
            viplv.getComponent(cc.Label).string = "" + 0
        }

        getVipConfig(this.updateVipInfo.bind(this))
        getQttCoinQuery(this.updateQttCoin.bind(this))
    }

    updateVipInfo() {
        // VIP信息
        let nextNeed = 0
        if (DataManager.CommonData["VipData"])
        {
            for (const iterator of DataManager.CommonData["VipInfo"]) {
                if (iterator["vipLv"] == (DataManager.CommonData["VipData"].vipLevel + 1)){
                    nextNeed = iterator["payMoney"]
                    break;
                }
            }
        }

        let vipLvProgress = cc.find("nodeContent/vipprogress", this.node)
        vipLvProgress.getComponent(cc.ProgressBar).progress = (nextNeed - DataManager.CommonData["VipData"].nextVipneedMoney) / nextNeed
        let value = cc.find("nodeContent/vipprogress/value", this.node)
        value.getComponent(cc.Label).string = ((nextNeed - Math.abs(DataManager.CommonData["VipData"].nextVipneedMoney))) + "/" + (nextNeed)

        cc.find("nodeContent/nodeVipIcon/vip_icon_" + DataManager.CommonData["VipData"].vipLevel, this.node).active = true
    }

    updateQttCoin() {
        let qtt = cc.find("nodeTop/qttcoin_bg/labelqtt", this.node)
        if (null != qtt) 
            qtt.getComponent(cc.Label).string = DataManager.CommonData["QttCoinNum"] || 0
    }

    onPressMenu(sender, data) {
        let sbl = this.node.getComponentInChildren(ShopBoxList)
        sbl.setShopType(parseInt(data))
            // sbl.init()
    }
}