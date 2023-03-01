import BaseComponent from "../base/BaseComponent";
import { loadAbsoluteSpriteFrame, pluginPay } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import PluginManager from "../base/PluginManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PayBox extends BaseComponent {
    onOpenScene() {
        this.node.getChildByName("mask").getComponent(cc.Button).interactable = false

        const button: cc.Node = this['btnPay']
        for (const pm of this.initParam.boxItem.pmList) {
            if (pm.mid==111){
                continue
            }
            const payType = PluginManager.getPayTypeByMid(pm.mid.toString())
            if (payType) {
                const node = cc.instantiate(button)
                node.getComponent(cc.Button).clickEvents[0].customEventData = payType
                this['nodePay'].addChild(node)
                console.log("[PayBox.onOpenScene] add plugin", payType)
                function callback(err: Error, frame: cc.SpriteFrame) {
                    console.log("[PayBox.onOpenScene] showbutton", payType, err)
                    if (!node.isValid || err) {
                        return
                    }
                    node.getComponent(cc.Sprite).spriteFrame = frame
                    node.active = true
                }
                const path = "thirdparty/tanchu_chongzhi_" + pm.mid + "01"
                if (!loadAbsoluteSpriteFrame({ url: path + '.png', type: 'png' }, callback)) {
                    cc.loader.loadRes(path, cc.SpriteFrame, callback)
                }
            }
        }
    }

    onBuy(touch: cc.Event.EventTouch): void {
        const payType = touch.target.getComponent(cc.Button).clickEvents[0].customEventData
        pluginPay(payType, this.initParam.boxItem, this.initParam.callback)
        this.onClose()
    }

    onClose(): void {
        SceneManager.Instance.closeScene("PayBox")
    }
}
