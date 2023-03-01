import BaseComponent from "../base/BaseComponent";
import { sToTime } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AwardMutipleResultPop extends BaseComponent {
  
    
    
    @property(cc.SpriteFrame)
    icon_item_0:cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    icon_item_2:cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    icon_item_365:cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    icon_item_367:cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    icon_item_368:cc.SpriteFrame = null;

    item_name = {
        ["0"]: "金豆",
        ["2"]: "记牌器",
        ["365"]: "红包券",
        ["367"]: "趣金币",
        ["368"]: "豆浆机",
    }
    __bindButtonHandler() {

    }

    onOpenScene() {
        if (!this.initParam){
            this.close()
        }

        let nodeContentSelect = this.initParam["awards"].length > 5 ? this["nodeItemContentGrid"] : this["nodeItemContentHori"]
        nodeContentSelect.active = true
        for (let index = 0; index < this.initParam["awards"].length; index++) {
            const element = this.initParam["awards"][index];
            let awardItem = cc.instantiate(this["nodeItemPrefab"])
            awardItem.active = true
            // element.index
            awardItem.getChildByName("sptItemIcon").getComponent(cc.Sprite).spriteFrame = this["icon_item_" + element.index]

            awardItem.getChildByName("num").getComponent(cc.Label).string = element.num
            awardItem.getChildByName("name").getComponent(cc.Label).string = this.item_name[element.index]
            
            nodeContentSelect.addChild(awardItem)            
        }

        this["nodeItemPrefab"].active = false


    }
    

    close() {
        this.closeSelf()
    }
    
    onCloseScene() {
        if (this.initParam["closeCallback"])
            this.initParam["closeCallback"]()
    }
    
}
