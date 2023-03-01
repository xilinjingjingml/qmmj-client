
let Event = require("Event.zhuoqiu");
let GLOBAL = require("Define.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        shotOnce: cc.Node,
        shotAuto: cc.Node,
        shotLabel: cc.RichText,
        _curState: 1,
        _preState: 1,
        _timeCount: 0,
        _isTouch: false,
        _cbkObj: null,
        _shortCbk: null,
        _longCbk: null
    },

    onLoad () {
        this.shotAuto.active = false;
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancel", this.onTouchEnd, this);
        this._curState = this._preState = 1;
        this._isTouch = false;
        this.touchable = true;
        this.shotLabel.string = "<b>长按自动出杆</b>";
        Event.on(GLOBAL.EventName.stopAuto, this.stopAuto, this);
    },

    isAuto() {
        return 2 == this._curState;
    },

    stopAuto() {
        this._curState = 1;
        this.shotOnce.active = true;
        this.shotAuto.active = false;
        this.shotLabel.string = "<b>长按自动出杆</b>";
        this.shotOnce.runAction(cc.moveTo(0.1, 0, 0));
    },

    update(dt) {
        if (this._isTouch) {
            this._timeCount += dt;
            if (0.6 < this._timeCount) {
                this._isTouch = false;
                this._curState = 2;
                this.shotOnce.active = false;
                this.shotAuto.active = true;
                this.shotLabel.string = "<b>点击停止自动出杆</b>";
                Event.emit(GLOBAL.EventName.onAutoShot);
            }
        }
    },

    onTouchStart() {
        this._preState = this._curState;
        if (this.touchable && 1 == this._curState) {
            this._timeCount = 0;
            this._isTouch = true;
            this.shotOnce.runAction(cc.moveTo(0.1, 0, -8));
        }
    },

    onTouchEnd() {
        if (this.touchable) {
            if (1 == this._curState && this._isTouch) {
                this._isTouch = false;
                this.shotOnce.stopAllActions();
                this.shotOnce.runAction(cc.moveTo(0.1, 0, 0));
                Event.emit(GLOBAL.EventName.onOneShot);
            } else {
                if (2 == this._preState) {
                    this.stopAuto();
                }
            }
        } else {
            if (2 == this._curState && 2 == this._preState && 0 <= GLOBAL.ballsN) {
                this.stopAuto();
            }
        }
    },

    onDestroy() {
        Event.offTarget(this);
    },
});
