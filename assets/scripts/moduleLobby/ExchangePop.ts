import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import SceneManager from "../base/baseScene/SceneManager";
import { getExchangeConfig } from "./LobbyFunc";
import { numberFormat, iMessageBox, checkPhoneBinding, MsgBox, czcEvent } from "../base/BaseFuncTs";
import { isWeChatGame } from "../gameConfig";

let EXCHANGE_TYPE = cc.Enum({
    NORMAL: 0,
    QTT: 1,
})

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExchangePop extends BaseScene {

    @property({
        type: cc.Enum(EXCHANGE_TYPE)
    })
    _curType = EXCHANGE_TYPE.NORMAL

    onOpenScene() {
        this.updateUserInfo()
        this.addListener("updateUserData", this.updateUserInfo.bind(this))

        if (null == DataManager.CommonData["ExchangeInfo"])
            getExchangeConfig(this.updateExchangeInfo.bind(this))
        else
            this.updateExchangeInfo()

        if(true || isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
            cc.find("nodePop/btnFlow", this.node).active = false
        }
        
        czcEvent("大厅", "兑换红包", "打开红包界面 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
    }

    updateUserInfo() {
        cc.find("nodePop/ellipse_bg/labelRedpacket", this.node).getComponent(cc.Label).string = numberFormat(DataManager.UserData.getItemNum(365))
    }

    updateExchangeInfo() {
        let model = cc.find("nodePop/content/item", this.node)
        let content = cc.find("nodePop/content/view/content", this.node)

        let size = content.getContentSize()
        let itemSize = model.getContentSize()
        let rowsNum = Math.floor(size.width / itemSize.width)
        let interval = size.width / rowsNum

        content.removeAllChildren(true)

        content.setContentSize(size.width, (itemSize.height + 20) * (Math.ceil(DataManager.CommonData["ExchangeInfo"].length / 3)))

        size = content.getContentSize()

        let exchangeInfo = DataManager.CommonData["ExchangeInfo"].filter(item => {
            return item["exchangeItemList"] && 
                   item["exchangeItemList"][0] && 
                   item["exchangeItemList"][0]["exchangeItem"] && 
                   item["exchangeItemList"][0]["exchangeItem"] >= 0
        })

        exchangeInfo.sort((a, b) => (a["exchangeItemList"][0]["exchangeNum"] == b["exchangeItemList"][0]["exchangeNum"] ? 
                                        (a["gainItemList"][0]["gainItem"] > b["gainItemList"][0]["gainItem"] ? -1 : a["gainItemList"][0]["gainItem"] < b["gainItemList"][0]["gainItem"] ? 1 : 0) : 
                                        (a["exchangeItemList"][0]["exchangeNum"] < b["exchangeItemList"][0]["exchangeNum"] ? -1 : 1)
                                        ))

                                        
        let idx = 0
        // let goldGoodsId = -1
        for (const iterator of exchangeInfo) {
            if ((iterator["goodsName"] == "0.3元微信红包" && DataManager.CommonData["regtime"] < 1568131200) || 
                (iterator["goodsName"] == "0.3元微信红包" && DataManager.CommonData["morrow"] > 7) ||
                (iterator["goodsName"] == "0.3元微信红包" && iterator["exchangeCount"] == 1))
                continue;

            let item = cc.instantiate(model) 
            item.parent = content
            item.position = cc.v2(idx % rowsNum * interval - (size.width / 2 - interval / 2), -Math.floor(idx / rowsNum) * (itemSize.height + 20) - (itemSize.height + 20) / 2)

            let isGold = iterator["gainItemList"][0]["gainItem"] == 0 
            let isQTTGold = iterator["gainItemList"][0]["gainItem"] == 367
            item.getChildByName("receive_tip_bg").active = isGold
            let icon = item.getChildByName("icon")
            if (!isGold && icon) {
                let num = iterator["gainItemList"][0]["gainNum"];
                if (iterator["gainItemList"][0]["gainItem"] == 332)
                    num = num / 10
                icon = icon.getChildByName(num + "RMB")
                if (icon) icon.active = true
            }
            else if (icon){
                icon = icon.getChildByName("goldbean")
                if (icon) icon.active = true
            }

            // if (isGold && iterator["gainItemList"][0]["gainNum"] == 10000) {
            //     goldGoodsId =iterator["goodsId"]
            // }

            let limitVip = iterator["limitVip"]
            let flag = item.getChildByName("redpacket_flag")
            flag.active = limitVip > 1

            let newUserFlag = item.getChildByName("newUserFlag")
            newUserFlag.active = limitVip == 0 && !isGold
            if (iterator["goodsName"] == "0.3元微信红包")
                newUserFlag.active = false

            item.getChildByName("labelDesc").getComponent(cc.Label).string = iterator["goodsName"]

            if (limitVip > 1 && limitVip <= 6){
                let icon = flag.getChildByName("VIP"+limitVip)
                if (icon) icon.active = true
            }

            let limitCount = iterator["limitCount"]
            if (limitCount > 0) {
                // if (DataManager.CommonData["VipData"].vipLevel >= limitVip)
                    // item.getChildByName("labelTIp").getComponent(cc.Label).string = "您当前可兑换" + limitCount + "次"
                // else
                if (limitVip == 0 && iterator["goodsName"] == "0.3元微信红包")
                    item.getChildByName("labelTIp").getComponent(cc.Label).string = "新人第二天登录后可以兑换"
                else if (limitVip == 0)
                    item.getChildByName("labelTIp").getComponent(cc.Label).string = "VIP等级≥1, 每日可兑换" + limitCount + "次"
                else
                    item.getChildByName("labelTIp").getComponent(cc.Label).string = "VIP等级≥" + limitVip + ", 每日可兑换" + limitCount + "次"
            }
            

            let btnExchange = item.getChildByName("btnExchange")
            let price = iterator["exchangeItemList"][0]["exchangeNum"]
            if (price >= 10000)
                price = price / 10000 + "w"
            btnExchange.getChildByName("labelPrice").getComponent(cc.Label).string = price
            

            let buy = item.getChildByName("btnExchange").getComponent(cc.Button)
            let clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; 
            clickEventHandler.component = "ExchangePop";
            clickEventHandler.handler = "onExchange" + iterator["goodsId"]; 
            let self = this
            this["onExchange" + iterator["goodsId"]] = () => {       
                if (iterator["exchangeItemList"][0]["exchangeNum"] > DataManager.UserData.getItemNum(365)){
                    // iMessageBox("您当前的金券数量不足")
                    SceneManager.Instance.popScene("moduleLobby", "RPUnenoughGuidePop")
                    return
                }

                if (false == isGold && false == checkPhoneBinding()) {
                    return
                }

                if (iterator["goodsName"] == "0.3元微信红包" && DataManager.CommonData["morrow"] == 0)  {
                    let initParam = {
                        title: "提示",
                        content: "新手0.3元红包需要第二天登录才可进行领取!",
                        buttonNum: 1,
                        confirmClose: true,
                    }                
                    MsgBox(initParam)
                    return
                }
                
                if (iterator["limitVip"] > DataManager.CommonData["VipData"].vipLevel) {
                    // iMessageBox("您当前的VIP等级低于购买等级")
                    let initParam = {
                        title: "提示",
                        content: "<color=#874612><size=30><b>无法兑换，您的VIP等级不足</b></size></color>\n\r\n\r" +  
                                        "<color=#a07f61><size=24>VIP等级≥" + limitVip + "才可以兑换" + iterator["goodsName"] + 
                                        "\n\r您当前VIP等级为" + DataManager.CommonData["VipData"].vipLevel + "</size></color>",
                        confirmClose: true,
                        confirmFunc: () => {
                            SceneManager.Instance.popScene("moduleLobby", "VipInfoPop")
                            self.closeSelf()
                        },
                        maskCanClose: false,
                        confirmTexture: DataManager.Instance.getSpriteFrame("common", "btn_show_vip"),
                        closeTexture: DataManager.Instance.getSpriteFrame("common", "btn_ok"),
                    }
                    MsgBox(initParam)
                    return
                }

                if (iterator["exchangeCount"] == iterator["limitCount"]) {

                    let content = "<color=#874612><size=30><b>您今日的兑换次数已用完</b></size></color>\n\r\n\r" +  
                                    "<color=#a07f61><size=24>" + iterator["goodsName"] + "每日限兑换" + iterator["limitCount"] + "次</size></color>"

                    if (iterator["limitVip"] == 0 && DataManager.CommonData["VipData"].vipLevel == 0){
                        content = "<color=#874612><size=30><b>VIP0玩家累计仅能兑换1次</b></size></color>\n\r\n\r" + 
                                    "<color=#a07f61><size=24>请充值提升VIP等级后再来兑换</size></color>"
                    }
                    
                    let initParam = {
                        title: "提示",
                        
                        content: content,
                        confirmClose: true,
                        confirmFunc: () => {
                            SceneManager.Instance.popScene("moduleLobby", "VipInfoPop")
                            self.closeSelf()
                        },
                        maskCanClose: false,
                        confirmTexture: DataManager.Instance.getSpriteFrame("common", "btn_show_vip"),
                        closeTexture: DataManager.Instance.getSpriteFrame("common", "btn_ok"),
                    }
                    MsgBox(initParam)
                    return
                }

                if (isGold || isQTTGold){
                //     let copyItem = []
                //     Object.assign(copyItem, iterator)
                    // copyItem["goodsId"] = goldGoodsId
                    SceneManager.Instance.popScene("moduleLobby", "ExchangeConfirm2Pop", iterator)
                }
                else{
                    SceneManager.Instance.popScene("moduleLobby", "ExchangeConfirmPop", iterator)
                }
            }          

            buy.clickEvents.push(clickEventHandler);

            idx++
        }
    }

    onCloseScene() {

    }
}
