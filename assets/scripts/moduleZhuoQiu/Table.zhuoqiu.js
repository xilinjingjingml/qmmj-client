
let GLOBAL = require("Define.zhuoqiu");
let BALL = GLOBAL.BALL;
let Event = require("Event.zhuoqiu");
let Goals = require("Goals.zhuoqiu");
let Ball = require("Ball.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        rolls1: [cc.SpriteFrame],
        rolls2: [cc.SpriteFrame],
        rolls3: [cc.SpriteFrame],
        rolls4: [cc.SpriteFrame],
        rolls5: [cc.SpriteFrame],
        rolls6: [cc.SpriteFrame],
        rolls7: [cc.SpriteFrame],
        rolls8: [cc.SpriteFrame],
        rolls9: [cc.SpriteFrame],
        balls: cc.EditBox,
        shotX: cc.EditBox,
        shotY: cc.EditBox,
        angle: cc.EditBox,
        fric: cc.EditBox,
        // liJson: {
        //     default: null,
        //     type: cc.JsonAsset,
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.balls.node.active = GLOBAL.DEBUG;
        this.shotX.node.active = GLOBAL.DEBUG;
        this.shotY.node.active = GLOBAL.DEBUG;
        this.angle.node.active = GLOBAL.DEBUG;
        this.fric.node.active = GLOBAL.DEBUG;

        this.inBall = [];

        for (let i=0, j=0; i < GLOBAL.ballCachedRes.length; i++) {
            if (i % 32 == 0) {
                j++;
            }
            this["rolls"+j].push(GLOBAL.ballCachedRes[i]);
        }

        this.ballsN = 0;
        this.allBalls = [];
        this.goals = this.node.parent.getChildByName("Goals").getComponent(Goals);
        this.goals.onOutCbk(this.onGoalOut, this);
        this.shotBall = this.node.getChildByName("Ball").getComponent(Ball);

        // 摆球
        for (var t = [this.rolls1, this.rolls2, this.rolls3, this.rolls4, this.rolls5, this.rolls6, this.rolls7, this.rolls8, this.rolls9], e = GLOBAL.BALL_LAYOUT, i = 0, n = 0; n < 6; n++) {
            for (var o = (n < 3 ? n : 6 - n), s = 0; s < o; s++) {
                let a = cc.instantiate(this.shotBall.node);
                let c = a.getComponent(Ball);
                a.parent = this.node;
                this.allBalls.push(c);
                c.init(e[i], t[e[i] - 1]);
                c.node.x = (o - 1 - 2 * s) * BALL.radius;
                c.node.y = 1.732 * (2 - n) * BALL.radius + BALL.ballsY;
                i++;
            }
        }

        this.shotBall.init(0);
        this.shotBall.node.active = true;
        this.shotBall.node.x = BALL.shotX;
        this.shotBall.node.y = BALL.shotY;
        this.allBalls.push(this.shotBall);
        Event.on(GLOBAL.EventName.tableOnStart, this.onStart, this);
        Event.on(GLOBAL.EventName.tableReset, this.reset, this);
        Event.on(GLOBAL.EventName.ScreenShake, this.screenShake, this);
    },

    start () {
        // this.liJS = this.liJson.json;
        // this.debugDataIndex = 0;
        // this.debugLiIndex = -1;
    },

    onStart() {
        cc.log("Table onStart");

        if (GLOBAL.DEBUG) {
            GLOBAL.shotVX = Number(this.shotX.string);
            GLOBAL.shotVY = Number(this.shotY.string);
            GLOBAL.fixR = Number(this.angle.string);
            GLOBAL.minV = Number(this.fric.string);
            GLOBAL.ballInNow = this.balls.string.split(",");

            // let flag = false;
            // while (this.debugDataIndex < this.liJS.length) {
            //     let data = this.liJS[this.debugDataIndex].li;
            //     this.debugLiIndex++;
            //     if (data.length > this.debugLiIndex) {
            //         GLOBAL.shotVX = Number(data[this.debugLiIndex].x);
            //         GLOBAL.shotVY = Number(data[this.debugLiIndex].y);
            //         GLOBAL.fixR = Number(data[this.debugLiIndex].a);
            //         GLOBAL.minV = Number(data[this.debugLiIndex].f);
            //         GLOBAL.ballInNow = this.liJS[this.debugDataIndex].ball;
            //         flag = true;
            //         break;
            //     } else {
            //         this.debugLiIndex = -1;
            //         this.debugDataIndex++;
            //     }
            // }
            // if (!flag) {
            //     cc.error("结束")
            //     return;
            // }

        }

        this.inBall.length = 0;

        this.ballsN = 0;
        this.shotBall._vx = GLOBAL.shotVX;
        this.shotBall._vy = GLOBAL.shotVY;

        if (GLOBAL.ballsN >= 4) {
            this.screenShake();
        }

        Event.emit(GLOBAL.EventName.ClearResultUI);

        this.unschedule(this.onUpdate);
        this.schedule(this.onUpdate, 0.016);
        GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndShot)
    },

    onUpdate() {
        this.myUpdate() || this.myUpdate()
    },

    myUpdate() {
        let t = true, e = [];
        for (let i = 0; i < this.allBalls.length; i++) {
            let n = this.allBalls[i];
            n.updateXY();
            t = (this.ballsN === GLOBAL.ballsN) ? t && n._speed < GLOBAL.stopV : t && n._stop;
            if (n.checkInHole()) {
                cc.log("InHole", n._num)
                if (n._num !== 0)
                    this.inBall.push(n._num);
                e.push(n);
            }
        }
        for (; 0 < e.length;) {
            let o = e.pop(),
                s = this.allBalls.indexOf(o);
            this.allBalls.splice(s, 1);
            if (o !== this.shotBall) {
                this.ballsN++;
                o._hole.showIn();
                this.goals.onGoal(o);
                GLOBAL.GameEffect.onGoal();
                if (this.goalCbk)
                    this.goalCbk.call(this.goalObj);
            } else {
                o.node.parent = null;
            }
            GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndSuck)
        }
        if (t) {
            this.onEnd();
            return true;
        } else {
            this.checkCollision();
            return false;
        }
    },

    setGoalCbk(t, e) {
        this.goalCbk = t;
        this.goalObj = e;
    },

    onEnd() {
        cc.log("Table onEnd");
        Event.emit(GLOBAL.EventName.Event_Update_UserInfo);
        if (0 < GLOBAL.ballsN) {
            GLOBAL.GameEffect.onEnd();
            GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndWin)
        } else {
            this.reset();
        };
        this.unschedule(this.onUpdate);

        if (GLOBAL.DEBUG) {
            this.inBall.sort((a, b)=>{
                if (a < b)
                    return -1;
                else
                    return 1;
            })
            GLOBAL.ballInNow.sort((a, b)=>{
                if (a < b)
                    return -1;
                else
                    return 1;
            })
            if (this.inBall.length !== GLOBAL.ballInNow.length || this.inBall.join("") !== GLOBAL.ballInNow.join("")) {
                cc.error("===HIT=ERR==", GLOBAL.ballInNow, this.inBall, this.liJS[this.debugDataIndex].li[this.debugLiIndex])
            } else {
                cc.log("===HIT=SUCC==", GLOBAL.ballInNow, this.inBall, this.liJS[this.debugDataIndex].li[this.debugLiIndex])
            }
        }
    },

    reset () {
        GLOBAL.GameEffect.reset();

        this.goals.reset();
        let t = this.shotBall.node.parent ? 10 : 9;
        if (this.allBalls.length == t)
            this.resetBalls();
    },

    onGoalOut(t) {
        t.parent = this.node;
        this.allBalls.push(t.getComponent(Ball));
        let e = this.shotBall.node.parent ? 10 : 9;
        if (this.allBalls.length == e)
            this.resetBalls();
    },

    resetBalls() {
        GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndStart);
        Event.emit(GLOBAL.EventName.logicReset);
        this.shotBall.node.parent = null;
        var i = this.allBalls.concat();
        this.allBalls.length = 0;
        var o = i.indexOf(this.shotBall);
        if (0 <= o)
            i.splice(o, 1);

        function f(t) {
            for (var e = 0; e < i.length; e++)
                if (i[e]._num == t) return i[e]
        }
        for (var e = GLOBAL.BALL_LAYOUT, n = 0, o = 0; o < 6; o++) {
            for (var s = o < 3 ? o : 6 - o, a = 0; a < s; a++) {
                var c = f(e[n]);
                this.allBalls.push(c);
                c.reset();
                c.showIn(0.1 * o, true);
                c.node.x = (s - 1 - 2 * a) * BALL.radius;
                c.node.y = 1.732 * (2 - o) * BALL.radius + BALL.ballsY;
                n++;
            }
        }
        this.shotBall.node.x = BALL.shotX, this.shotBall.node.y = BALL.shotY, this.shotBall.node.parent = this.node, this.allBalls.push(this.shotBall)
    },

    checkCollision () {
        var t = false
        for (var e = 0; e < this.allBalls.length; e++) {
            for (var i = this.allBalls[e], n = 1; n < this.allBalls.length; n++) {
                var o = this.allBalls[n];
                if (i !== o) {
                    var s = Math.sqrt(Math.pow(i.node.x - o.node.x, 2) + Math.pow(i.node.y - o.node.y, 2))||0.1;
                    if (Math.ceil(s) < 2 * BALL.radius) {
                        var a = ((i._vx - o._vx) * Math.pow(i.node.x - o.node.x, 2) + (i._vy - o._vy) * (i.node.x - o.node.x) * (i.node.y - o.node.y)) / Math.pow(s, 2),
                            c = ((i._vy - o._vy) * Math.pow(i.node.y - o.node.y, 2) + (i._vx - o._vx) * (i.node.x - o.node.x) * (i.node.y - o.node.y)) / Math.pow(s, 2);
                        i._vx -= a, i._vy -= c, o._vx += a, o._vy += c;
                        var r = (2 * BALL.radius - s) / 2,
                            l = r * (i.node.x - o.node.x) / s,
                            h = r * (i.node.y - o.node.y) / s;
                        i.node.x += l, i.node.y += h, o.node.x -= l, o.node.y -= h, i.onCollide(), o.onCollide(), t = true;
                    }
                }
            }
        }

        if (t) {
            GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.sndRoll);
        }
    },

    screenShake() {
        this.node.parent.runAction(cc.sequence(cc.moveBy(0.05, cc.v2(4, 4)), cc.moveBy(0.1, cc.v2(-8, -8)), cc.moveBy(0.05, cc.v2(4, 4)), cc.moveBy(0.05, cc.v2(4, 4)), cc.moveBy(0.1, cc.v2(-8, -8)), cc.moveBy(0.05, cc.v2(4, 4))));
    },

    onDestroy: function() {
        Event.offTarget(this);
    },

    // update (dt) {},
});
