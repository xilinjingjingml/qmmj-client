import BaseScene from "../base/baseScene/BaseScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VipActivePop extends BaseScene {

    onOpenScene() {
        cc.find("nodePop/date", this.node).getComponent(cc.Label).string = "活动时间: 9月18日-9月30日"
    }
}
