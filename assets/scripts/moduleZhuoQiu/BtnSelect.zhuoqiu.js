
let Event = require("Event.zhuoqiu");
let GLOBAL = require("Define.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        iconSpriteFrames: [cc.SpriteFrame],
        icon: cc.Node,
        lock: cc.Node,
        lockText: cc.Label,
        base: cc.Node,
        bgSelect: cc.Node,
        base1: cc.Node,
        base2: cc.Node,
        base3: cc.Node,
        base4: cc.Node,
        base5: cc.Node,
        base6: cc.Node,
        base7: cc.Node,
    },

    onLoad () {
        this.node.on("click", this.touchEvent, this);

        let self = this;
        for (let i=1;i<=7;i++) {
            this["base"+i].on("click", function() {
                self.runScaleAction(this.bgSelect, 0.1, false);
                self.icon.getComponent(cc.Sprite).spriteFrame = self.iconSpriteFrames[i-1];
                self.base.getComponent(cc.Label).string = ""+GLOBAL.BASE[i-1];
                // self.setGLOBALRate(500);
                self.doSwitchStick(i-1)
            }, this)
        }
    },

    start () {

    },

    touchEvent() {
        if (!(0 < this.node.getNumberOfRunningActions())) {
            var t = this.bgSelect.active;
            if (this.lock && (this.lock.active = !1), this.lock && !GLOBAL.getVisitStatus()) {
                if (null == GLOBAL.discountsGiftBagBuyState) return;
                1 == GLOBAL.discountsGiftBagBuyState ? (this.lock.active = !0, this.lockText.string = "通过限时特惠解锁") : -1 == GLOBAL.discountsGiftBagBuyState && (this.lockText.string = "后续功能解锁", this.lock.active = !0)
            }
            t ? this.runScaleAction(this.bgSelect, .1, !1) : this.runScaleAction(this.bgSelect, 1, !0)
        }
    },

    runScaleAction(t, e, i) {
        this.node.stopAllActions();
        t.active = true;
        let n = cc.scaleTo(0.2, e),
            o = cc.callFunc(function() {
                t.active = i;
            }),
            s = cc.sequence(n, o);
        t.runAction(s);
    },

    disableTouchAfterBetting() {
        this.node.getComponent(cc.Button).interactable = false;
        if (true == this.bgSelect.active)
            this.runScaleAction(this.bgSelect, 0.1, false);
    },
    enableTouchAfterResult() {
        this.node.getComponent(cc.Button).interactable = true
    },
    base1Event() {
        this.runScaleAction(this.bgSelect, 0.1, false);
        this.icon.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrames[0];
        this.base.getComponent(cc.Label).string = 100;
        // TODO:this.setGLOBALRate(100);
        this.doSwitchStick(0)
    },

    doSwitchStick(t) {
        Event.emit(GLOBAL.EventName.event_switchStick, t);
    },
    onDestroy() {
        Event.offTarget(this);
    },
});
