
let n = {
    createBlockMask(t) {
        let e = new cc.Node,
            i = e.addComponent(cc.Widget);

        i.top = i.bottom = i.left = i.right = 0;
        i.isAlignTop = i.isAlignBottom = i.isAlignLeft = i.isAlignRight = true;
        e.addComponent(cc.BlockInputEvents);
        e.color = cc.color(0, 0, 0);
        return e
    },
    // showLoading(t) {
    //     bp.util.log("showLoading not override!")
    // },
    // showMessage(t) {
    //     bp.util.log("showMessage not override!")
    // },
    // showMessageBoxBtns(e) {
    //     if (0 == !!e.okCbk) n.showMessage("MessageBox Btns okCbk must be valid.");
    //     else {
    //         if (1 == !!bp.gui.showedMesBox) return void cc.log("mes box exist.");
    //         bp.gui.showedMesBox = !0, n.pop("prefab/normalBtns", null, function(t) {
    //             t.getComponent("normalBtns").initUI(e)
    //         })
    //     }
    // },
    tipPool: new cc.NodePool,
    // showTip(t) {
    //     bp.util.log("showTip not override!")
    // },
    prefabMap: [],
    pop(n, o, s, a) {
        let c = this,
            r = [],
            t = this.prefabMap[n];
        if (o = o || cc.director.getScene().getChildByName("Canvas")) {
            let l = null;
            if (t) {
                l = cc.instantiate(t);
                o.addChild(l, 10);
                let e = l.getChildByName("root");
                e ? (e.scale = 0, e.runAction(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.3, 1), cc.callFunc(function() {
                    return s && s(l)
                })))) : s && s(l)
            } else {
                cc.loader.loadRes("moduleZhuoQiuRes/prefab/"+n, function(t, e) {
                    if (t) {
                        cc.error("async load prefab failed : ", n);
                        if (a)
                            a();
                        return;
                    }
                    l = cc.instantiate(e);
                    o.addChild(l, 10);
                    let i = l.getChildByName("root");
                    i ? (i.scale = 0, i.runAction(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.3, 1), cc.callFunc(s && s(l))))) : s && s(l);
                    if (-1 === r.indexOf(n))
                        c.prefabMap[n] = e;
                });
            }
            return l
        }
        a && a()
    }
}

module.exports = n;
