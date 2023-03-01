import BaseScene from "../base/baseScene/BaseScene";
import { copyToClipBoard } from "../base/BaseFuncTs";
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExchangeSuccPop extends BaseScene {

    onPressCopy() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        copyToClipBoard(DataManager.Instance.wechatPublic, "公众号复制成功，请前往微信添加！")
    }

}
