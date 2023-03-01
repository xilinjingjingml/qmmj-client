import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import { getVipConfig } from "./LobbyFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VipInfoPop extends BaseScene {

    onOpenScene() {
        if (null == DataManager.CommonData["VipInfo"])
            getVipConfig(this.updateVipInfo.bind(this))        
        else
            this.updateVipInfo()   
    }

    updateVipInfo(){
        let vipString = cc.find("nodePop/vip_tips_string", this.node)
        vipString.getChildByName("lv").getComponent(cc.Label).string = "" + (DataManager.CommonData["VipData"].vipLevel + 1)
        vipString.getChildByName("score").getComponent(cc.Label).string = (DataManager.CommonData["VipData"].nextVipneedMoney) + "元"

        let model = cc.find("nodePop/nodeRecord/view/item", this.node)
        let content = cc.find("nodePop/nodeRecord/view/content", this.node)

        let idx = 0
        let nextNeed = 0
        for (const iterator of DataManager.CommonData["VipInfo"]) {
            if (iterator["vipLv"] == 0) 
                continue

            if (iterator["vipLv"] == (DataManager.CommonData["VipData"].vipLevel + 1))
                nextNeed = iterator["payMoney"]

            let item = cc.instantiate(model)

            item.parent = content
            item.position = cc.v2(0, idx * -58 - 29)

            item.getChildByName("viplv").getComponent(cc.Label).string = iterator["vipLvName"]
            item.getChildByName("vipexp").getComponent(cc.Label).string = "" + (iterator["payMoney"])

            let desc = iterator["desc"] as string
            // 每天可兑换1次2元红包\r\n金券兑换金叶子多送1
            item.getChildByName("redpacketLimit").getComponent(cc.Label).string = desc.substring(desc.indexOf("次") + 1, desc.indexOf("红包")) + "," + desc.substring(desc.indexOf("兑换") + 1, desc.indexOf("次") + 1)
            let tmp = desc.substring(desc.indexOf("多送"))
            if (tmp.indexOf("%") == -1)
                tmp = tmp + "%"
            item.getChildByName("goldaddition").getComponent(cc.Label).string = tmp

            idx ++
        }   

        let size = content.getContentSize()
        content.setContentSize(size.width, 58 * idx)

        let vipLvProgress = cc.find("nodePop/vipLvProgress", this.node)
        vipLvProgress.getComponent(cc.ProgressBar).progress = (nextNeed - DataManager.CommonData["VipData"].nextVipneedMoney) / nextNeed
        let vipexp = cc.find("nodePop/vipexp", this.node)
        vipexp.getComponent(cc.Label).string = ((nextNeed - DataManager.CommonData["VipData"].nextVipneedMoney)) + "/" + (nextNeed)

        let lv = DataManager.CommonData["VipData"].vipLevel
        let vip_lv_bg = cc.find("nodePop/vip_lv_bg/vip_icon_" + lv, this.node)
        if (vip_lv_bg) vip_lv_bg.active = true
    }

    
}
