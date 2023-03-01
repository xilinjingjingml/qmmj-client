let GLOBAL = require("Define.zhuoqiu");
let TABLE = GLOBAL.TABLE;
let Hole = require("Hole.zhuoqiu");
let HOLE = GLOBAL.HOLE;
let BALL = GLOBAL.BALL;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hole = this.node.getChildByName("Hole");
        this.hole.parent = null;
        TABLE.holes = [];
        for (let t = TABLE.width / 2, e = TABLE.height / 2, i = 0; i < 6; i++) {
            let n = cc.instantiate(this.hole),
                o = n.getComponent(Hole);
            TABLE.holes.push(o);
            let s = HOLE.cornerL - BALL.radius - 10;
            if (0 === i) {
                o._holePos = cc.v2(-HOLE.cornerX, HOLE.cornerY);
                o._leadPos = cc.v2(15 - t, e - 15);
                o._freeRect = cc.rect(-t, e - s, s, s);
            } else if (1 === i) {
                o._holePos = cc.v2(HOLE.cornerX, HOLE.cornerY);
                o._leadPos = cc.v2(t - 15, e - 15);
                o._freeRect = cc.rect(t - s, e - s, s, s);
            } else if (2 === i) {
                let a = 2 * BALL.radius,
                    c = 2 * (HOLE.borderL - BALL.radius);
                o._holePos = cc.v2(-HOLE.borderX, 0);
                o._leadPos = cc.v2(-t, 0);
                o._freeRect = cc.rect(-t - a / 2, -c / 2, a, c);
            } else if (3 === i) {
                let a = 2 * BALL.radius,
                    c = 2 * (HOLE.borderL - BALL.radius);
                o._holePos = cc.v2(HOLE.borderX, 0);
                o._leadPos = cc.v2(t, 0);
                o._freeRect = cc.rect(t - a / 2, -c / 2, a, c);
            } else if (4 === i) {
                o._holePos = cc.v2(-HOLE.cornerX, -HOLE.cornerY);
                o._leadPos = cc.v2(15 - t, 15 - e);
                o._freeRect = cc.rect(-t, -e, s, s);
            } else if (5 === i) {
                o._holePos = cc.v2(HOLE.cornerX, -HOLE.cornerY);
                o._leadPos = cc.v2(t - 15, 15 - e);
                o._freeRect = cc.rect(t - s, -e, s, s);
            }
            n.parent = this.node, n.setPosition(o._holePos)
        }
    },

    start () {

    },

    // update (dt) {},
});
