import BaseFunc = require("../base/BaseFunc");
import DataManager from "../base/baseData/DataManager";
import BaseComponent from "../base/BaseComponent";
import { loadAbsoluteSpriteFrame } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AgreementPop extends BaseComponent {

    start () {
        cc.log("AgreementType ==",this.initParam["AgreementType"])

        const viewIndex = this.initParam["AgreementType"]

        if (viewIndex == 1 || viewIndex == 2) {
            this.initAgreement(viewIndex)
        } else if (viewIndex == 3) {
            this.initAbout()
        } else {
            this.initFamily()
        }
    }

    initAgreement(type) {
        cc.find("nodePop/agreement", this.node).active = true
        let localUrl = "moduleLobby/texture/Agreement/PrivacyAgreement"
        let datelength = 15
        if (type == 1) {
            localUrl = "moduleLobby/texture/Agreement/zi"
            datelength = 24
        }

        let container = cc.find("nodePop/agreement/view/content", this.node)
        let model = cc.find("nodePop/agreement/view/model", this.node)

        for (let index = 1; index <= datelength; index++) {
            let item = cc.instantiate(model)
            item.active = true
            item.parent = container
            BaseFunc.SetFrameTextureLocal(item.getComponent(cc.Sprite),localUrl+index)
        }
    }

    initAbout() {
        cc.find("nodePop/about", this.node).active = true
        const onlineParam = DataManager.Instance.onlineParam
        cc.find('nodePop/about/sczr/icon1', this.node).active = !!onlineParam.showsczr1
        cc.find('nodePop/about/sczr/icon2', this.node).active = !!onlineParam.showsczr2
        cc.find('nodePop/about/sczr', this.node).active = !!onlineParam.showsczr1 || !!onlineParam.showsczr2
        const node = cc.find("nodePop/about/icon", this.node)
        loadAbsoluteSpriteFrame({ url: "thirdparty/icon.png", type: "png" }, (err: Error, frame: cc.SpriteFrame) => {
            if (!node.isValid || err) {
                cc.log('[changeIcon]', err)
                return
            }
            node.getComponent(cc.Sprite).spriteFrame = frame
            node.active = true
        })
    }

    initFamily() {
        cc.find("nodePop/family", this.node).active = true
    }

    onPressSczr(sender, data) {
         cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
         const url = data == 1 ? DataManager.Instance.onlineParam.showsczr1 : DataManager.Instance.onlineParam.showsczr2
         url && cc.sys.openURL(url)
    }
}
