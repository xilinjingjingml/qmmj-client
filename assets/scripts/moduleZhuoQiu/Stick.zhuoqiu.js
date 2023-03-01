let Event = require("Event.zhuoqiu");
let GLOBAL = require("Define.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        stickTex: [cc.SpriteFrame],
        hideTxt: cc.SpriteFrame,
        stick: cc.Sprite,
        luckyStick: cc.Node,
        _shotCbk: null,
        _shotObj: null,
        _loadingLadyonPrefab: 0,
        _visitModeDestR: 0,
        _checkVisitDest: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.isReady = true;
        Event.on(GLOBAL.EventName.event_switchStick, this.doSwitchStick, this);
        this.stick.node.active = true;
        this.playRotate();
        GLOBAL.Stick = this;
    },

    start () {

    },

    onDestroy () {
        Event.offTarget(this);
    },

    resetStick () {
        let t = this.getCurStick(),
            e = cc.moveTo(0.2, 0, 0).easing(cc.easeExponentialOut());
        t.stopAllActions();
        t.runAction(e);
        this.playRotate();
        this.isReady = true;
    },

    playRotate () {
        let t = cc.rotateTo(1, 8).easing(cc.easeSineInOut()),
            e = cc.rotateTo(1, -8).easing(cc.easeSineInOut()),
            i = cc.repeatForever(cc.sequence(t, e));
        this.node.runAction(i);
    },

    playReady() {
        this.isReady = false;
        this.node.stopAllActions();
        let t = cc.moveTo(0.3, 0, -150),
            e = cc.moveTo(0.3, 0, -200),
            i = cc.repeatForever(cc.sequence(t, e));
        this.getCurStick().runAction(i);
    },

    playRotateOnce(t) {
        let e = 0.45 < Math.random() ? -1 : 1;
        if (3 < -this.node.angle) {
            e = -1;
        } else if (-this.node.angle < -3) {
            e = 1;
        }
        let i = cc.rotateTo(1, 8 * e).easing(cc.easeSineInOut()),
            n = cc.rotateTo(1, 8 * -e).easing(cc.easeSineInOut()),
            o = cc.repeatForever(cc.sequence(i, n));
        this.node.runAction(o);
        this.scheduleOnce(function() {
            if (t)
                t();
        }, 0.3 * Math.random() + 0.5);
    },

    playShot() {
        this.node.stopAllActions();
        let t = this.getCurStick();
        t.stopAllActions();
        let e = cc.place(0, -120),
            i = cc.moveTo(0.1, 0, 25),
            n = cc.delayTime(4 <= GLOBAL.ballsN ? 0.1 : 0),
            o = cc.callFunc(function() {
                GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndStick);
                Event.emit(GLOBAL.EventName.tableOnStart);
            }),
            s = cc.moveTo(1.2, 0, -200).easing(cc.easeQuarticActionInOut());
        t.runAction(cc.sequence(e, i, n, o, s));
    },

    getNav() {
        return -this.node.angle < 0 ? -1 : 1;
    },

    getCurStick() {
        return 0 < this.luckyStick.childrenCount ? this.luckyStick : this.stick.node;
    },

    doHideStick() {
        this.node.stopAllActions();
        this.node.angle = 0;
        let t = this.getCurStick();
        t.stopAllActions();
        t.angle = 0;
        this.stick.spriteFrame = this.hideTxt;
    },

    update() {
        if (0 !== this.node.getNumberOfRunningActions() && this.checkNumInRange(-this.node.angle, this._visitModeDestR)) {
            this.node.stopAllActions();
            Event.emit("Event_stick_rotatedToDest");
            this._checkVisitDest = 0;
        }
    },

    checkNumInRange(t, e) {
        return Math.abs(t - e) <= .5 && 0 < e * t ? 1 : 0;
    },

    switchStick(t) {
        this.stick.spriteFrame = this.stickTex[t];
    },
    
    doSwitchStick(t, e) {
        this.switchStick(e);
    },
});
