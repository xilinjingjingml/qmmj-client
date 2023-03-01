import DataManager from "../../base/baseData/DataManager";
import { payOrder, checkFirstBox, oncePayBox, numberFormat } from "../../base/BaseFuncTs";
import { sendReloadUserData, exchangeAward, getExchangeConfig } from "../LobbyFunc";
import SceneManager from "../../base/baseScene/SceneManager";
import BaseControl from "../../base/extensions/Extpands/BaseControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopBoxList extends BaseControl {

    _start: boolean = false
    _shops = []
    _dimaonds = []
    _exchangeInfo = []
    _type = -1;

    start() {
        this.node.runAction(cc.sequence(
            cc.delayTime(.01),
            cc.callFunc(() => this.init())
        ))

        this._shops = DataManager.Instance.NormalBoxs.filter(item => item.content.length > 0 && item.content[0].idx == 0 && item.price != 1 && item.price != 3 && item.content[0].idx != 1192)
        this._dimaonds = DataManager.Instance.NormalBoxs.filter(item => item.content.length > 0 && item.content[0].idx == 1192 && item.price != 1 && item.price != 3)
        this._shops.sort((a, b) => a.price == b.price ? 0 : (a.price > b.price ? 1 : -1))

        this._start = true
    }

    setShopType(type: number = -1){
        this._type = type;
        let self = this

        if ((type == -1 || type == 2) && 
            (null == DataManager.CommonData["ExchangeInfo"] || 0 == DataManager.CommonData["ExchangeInfo"].length)){
            getExchangeConfig(() => {
                self.setShopType(type)
            })
            return
        }else {
            DataManager.CommonData["ExchangeInfo"] = DataManager.CommonData["ExchangeInfo"] || []
            this._exchangeInfo = DataManager.CommonData["ExchangeInfo"].filter(item => {
                return item["exchangeItemList"] && 
                       item["exchangeItemList"][0] && 
                       item["exchangeItemList"][0]["exchangeItem"] && 
                       item["exchangeItemList"][0]["exchangeItem"] == -7
            })
            this._exchangeInfo.sort((a, b) => a["exchangeItemList"][0]["exchangeNum"] < b["exchangeItemList"][0]["exchangeNum"] ? -1 : 1)    
        }

        if (this._start)
            this.init()
    }

    init() {
        // 商品列表
        console.log("ShopBoxList === ")
        let size = this.node.getContentSize()

        // 获取各部分节点
        let view = this.node.getChildByName("view")    
        let content = cc.find("view/content", this.node)
        content.removeAllChildren(true)
        let model = cc.find("item", this.node)
        let qttmodel = cc.find("qttitem", this.node)
        let itemWidth = model.getContentSize().width + 20
        let itemHeight = model.getContentSize().height + 20
        // 更新商品节点大小
        let rowsNum = (size.width / itemWidth % 1) > .5 ? Math.ceil(size.width / itemWidth) : Math.floor(size.width / itemWidth)
        rowsNum = rowsNum > 4 ? 4 : rowsNum
        itemWidth = (size.width * .96 - (rowsNum + 1) * 10)  / rowsNum
        let modelScale = itemWidth / model.getContentSize().width 
        model.scale = modelScale
        if (qttmodel)
            qttmodel.scale = modelScale
        itemHeight *= modelScale

        // 竖屏处理
        let isProtrait = this.getBaseScene().isProtrait
        if (isProtrait) {
            this.node.rotation = 90
            model.rotation = -90
            if (qttmodel)
                qttmodel.rotation = -90

            size.width += size.height
            size.height = size.width - size.height
            size.width -= size.height
            // size.height = size.width
            this.node.setContentSize(size)
            size.width -= 10
            size.height -= 10
            view.setContentSize(size)
        }

        let sv = this.node.getComponent(cc.ScrollView)
        if (sv) {
            sv.horizontal = isProtrait
            sv.vertical = !isProtrait
        }

        // if (isProtrait) {
            // this.node.setContentSize(size.width - 80, size.height - 20)
            // view.setContentSize(size.width - 100, size.height - 30)
        // }
        // else {
            // this.node.setContentSize(size.width * .96, size.height + 10)
            // view.setContentSize(size.width * .96, size.height)
        // }

        let itemNum = 0
        itemNum += (this._type == -1 || this._type == 1) ? this._shops.length : 0
        itemNum += (this._type == -1 || this._type == 2) ? this._exchangeInfo.length : 0
        itemNum += (this._type == -1 || this._type == 3) ? this._dimaonds.length : 0
        let interval = (size.width - (rowsNum * itemWidth)) / (rowsNum + 2)
        let w = isProtrait ? Math.ceil(itemNum / rowsNum) * (itemHeight + 20) : view.getContentSize().width
        let h = isProtrait ? view.getContentSize().height : Math.ceil(itemNum / rowsNum) * (itemHeight + 10)
        content.setContentSize(w, h)   

        if (isProtrait) {
            content.setPosition(w / 2 - view.getContentSize().width / 2, content.getPosition().y)
        }

        console.log(DataManager.Instance.NormalBoxs)

        let shops = DataManager.Instance.NormalBoxs.filter(item => item.content.length > 0 && item.content[0].idx == 0)
        shops.sort((a, b) => a.price == b.price ? 0 : (a.price > b.price ? 1 : -1))
        // shops.sort((a, b) => a.content[0].num == b.content[0].num ? 0 : (a.content[0].num > b.content[0].num ? 1 : -1) )
        

        let idx = 0
        // 普通商品
        if (this._type == -1 || this._type == 1 || this._type == 3)  {
            let itemList = this._type == 3 ? this._dimaonds : this._shops
            // content.setContentSize(new cc.Size(size.width, Math.ceil(itemList.length / rowsNum) * itemHeight))
            for (const iterator of itemList) {
                let item = cc.instantiate(model)
                item.parent = content
                // item.position = cc.v2(idx % rowsNum * interval - (width / 2 - interval / 2), -Math.floor(idx / rowsNum) * itemHeight - itemHeight/2)

                let x = isProtrait ? Math.floor(idx / rowsNum) * (10 + itemHeight) - w * .5 + itemHeight * .5 : idx % rowsNum * (itemWidth + interval) - w * .5 + itemWidth * .5 + interval
                let y = isProtrait ? (h / rowsNum * -(rowsNum - idx % rowsNum - .5)) : -Math.floor(idx / rowsNum) * itemHeight - (itemWidth * .5) + 20
                item.setPosition(x, y)       

                if (iterator["content"][0]["num"]){
                    item.getChildByName("value").getComponent(cc.Label).string = iterator.content[0].num + ""
                    item.getChildByName("itemName").getComponent(cc.Label).string = iterator.content[0].idx == 0 ? (iterator.content[0].num / 10000) + "万金豆" :
                                                                                    iterator.content[0].idx == 1192 ? iterator.content[0].num + "钻石" : iterator.content[0].num + ""
                }

                cc.find("btnBuy/price", item).getComponent(cc.Label).string = iterator.price + "y"

                if(iterator.boxvalue > 0 && iterator.boxvalue > iterator.price && iterator.price!=1){
                    let tmp = (iterator.boxvalue - iterator.price)/iterator.price
                    tmp = Math.ceil(tmp*100)
                    cc.find("sptFlag2", item).active = true
                    cc.find("sptFlag1", item).active = true
                    cc.find("sptFlag2/lbl_flag2", item).getComponent(cc.Label).string = "多送"+tmp+"\n%"
                }

                let self = this
                iterator.icon = iterator.icon.replace("http://", "https://")
                cc.loader.load({url: iterator.icon, type: "png"}, (err, texture) => {
                    if (err){
                        console.log(err)
                        return
                    }

                    let icon = item.getChildByName("icon")
                    if (icon)
                        icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                })

                let buy = item.getChildByName("btnBuy").getComponent(cc.Button)
                let clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node; 
                clickEventHandler.component = "ShopBoxList";
                clickEventHandler.handler = "onBuy" + iterator.boxid; 
                let box = Object.assign(iterator)
                this["onBuy" + iterator.boxid] = () => {
                    if (DataManager.Instance.isTesting)
                        console.log(box.serino)
                    if (iterator.price == 6 && null != checkFirstBox()) {
                        oncePayBox(null, false)
                        return
                    }
                    payOrder(box, () =>{
                        sendReloadUserData()
                    })
                }          

                buy.clickEvents.push(clickEventHandler);

                idx ++   
            } 
        }

        //趣金币兑换
        if (this._type == -1 || this._type == 2)  {
            // content.setContentSize(new cc.Size(size.width, Math.ceil(this._exchangeInfo.length / rowsNum) * itemHeight))
            for (const iterator of this._exchangeInfo) {
                let item = cc.instantiate(qttmodel)
                item.parent = content
                //item.position = cc.v2(idx % rowsNum * interval - (width / 2 - interval / 2), -Math.floor(idx / rowsNum) * itemHeight - itemHeight/2)

                let x = isProtrait ? Math.floor(idx / rowsNum) * (10 + itemHeight) - w * .5 + itemHeight * .5 : idx % rowsNum * (itemWidth + interval) - w * .5 + itemWidth * .5 + interval
                let y = isProtrait ? (h / rowsNum * -(rowsNum - idx % rowsNum - .5)) : -Math.floor(idx / rowsNum) * itemHeight - (itemWidth * .5) + 20
                item.setPosition(x, y)

                if (iterator["gainItemList"] && iterator["gainItemList"][0] && iterator["gainItemList"][0]["gainNum"])
                    item.getChildByName("value").getComponent(cc.Label).string = iterator["gainItemList"][0]["gainNum"]

                if (iterator["exchangeItemList"] && iterator["exchangeItemList"][0] && iterator["exchangeItemList"][0]["exchangeNum"])
                    cc.find("btnBuy/price", item).getComponent(cc.Label).string = iterator["exchangeItemList"][0]["exchangeNum"]

                cc.find("giftValue", item).active = iterator["exchangeItemList"][0]["exchangeNum"] > 10000
                cc.find("giftValue/label", item).getComponent(cc.Label).string = "送VIP经验"              

                if(iterator.boxvalue > 0 && iterator.boxvalue > iterator.price && iterator.price!=1){
                    let tmp = (iterator.boxvalue - iterator.price)/iterator.price
                    tmp = Math.ceil(tmp*100)
                    cc.find("sptFlag2", item).active = true
                    cc.find("sptFlag1", item).active = true
                    cc.find("sptFlag2/lbl_flag2", item).getComponent(cc.Label).string = "多送"+tmp+"\n%"
                }

                iterator.goodsImg = iterator.goodsImg.replace("http://", "https://")
                cc.loader.load({url: iterator.goodsImg, type: "png"}, (err, texture) => {
                    if (err){
                        console.log(err)
                        return
                    }

                    let icon = item.getChildByName("icon")
                    if (icon)
                        icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                })

                let buy = item.getChildByName("btnBuy").getComponent(cc.Button)
                let clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node; 
                clickEventHandler.component = "ShopBoxList";
                clickEventHandler.handler = "onBuy" + iterator.goodsId; 
                let box = Object.assign(iterator)
                this["onBuy" + iterator.goodsId] = () => {
                    SceneManager.Instance.popScene("moduleLobby", "ExchangeConfirm3Pop", box)
                }          

                buy.clickEvents.push(clickEventHandler);

                idx ++   
            }
        }
    }
}
