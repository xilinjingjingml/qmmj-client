let HOLE = require("Define.zhuoqiu").HOLE;

cc.Class({
    extends: cc.Component,

    properties: {
        _holePos: null,
        _leadPos: null,
        lb_award: cc.Label,
        _freeRect: null
    },

    inRect (t) {
        return this._freeRect.contains(cc.v2(t.node.x, t.node.y));
    },

    isInHole (t) {
        var e = t.node.x - this._holePos.x,
            i = t.node.y - this._holePos.y;
        return Math.sqrt(e * e + i * i) < HOLE.radius;
    },

    showIn () {
        this.getComponent(cc.Animation).play();
    },

    showBubble (t) {

    },

    hideBubble() {

    }
});
