
let GLOBAL = require("Define.zhuoqiu");
let TABLE = GLOBAL.TABLE;
let BALL = GLOBAL.BALL;

cc.Class({
    extends: cc.Component,

    properties: {
        roll: cc.Sprite,
        anim: cc.Animation,
        _vx: 0,
        _vy: 0,
        _num: 0,
        _speed: 0,
        _rollY: 20,
        _rollAtlas: null,
        _stop: true,
        _hole: null,
        _index: 0,
    },

    init(t, e) {
        this.node.getChildByName("ball_main").color = cc.Color.BLACK.fromHEX(GLOBAL.ballColors[t]);
        if (e) {
            this._rollAtlas = e
        }
        if (0 < t) {
            // this._rollY = 20;
            this._rollY = 0;
            this._num = t;
            this.reset();
        }
    },

    reset() {
        if (0 < this._num) {
            this.roll.node.angle = 0;
            this._vx = this._vy = this.speed = 0;
            this.roll.spriteFrame = this._rollAtlas[0];
            this._index = 0;
        }
    },

    /**
     * 发现碰撞之后，获取最近的Hole，调整球的速度方向，使之朝那个Hole的方向移动
     */
    onCollide () {
        var t = this.getNearHole();
        if (t) {
            var e = Math.atan2(t._leadPos.y - this.node.y, t._leadPos.x - this.node.x);
            if (Math.abs(e) < GLOBAL.fixR) {
                var i = Math.sqrt(this._vx * this._vx + this._vy * this._vy);
                this._vx = i * Math.cos(e), this._vy = i * Math.sin(e);
            }
        }
    },

    /**
     * 更新速度，使之衰减
     */
    updateXY() {
        this._speed = Math.sqrt(this._vx * this._vx + this._vy * this._vy);
        this._stop = Math.abs(this._vx) < GLOBAL.minV && Math.abs(this._vy) < GLOBAL.minV;
        if (this._stop) {
            this._vx = this._vy = 0;
        } else {
            this.node.x += this._vx;
            this.node.y += this._vy;
            if (0 < this._num)
                this.updateRoll(this._vx, this._vy);
            this._vx *= 0.99;
            this._vy *= 0.99;
        }
    },

    /**
     * 更新球上数字的朝向，球移动的方向和字的朝向一致
     * 因为反正切
     * @param t x轴速度
     * @param e y轴速度
     */
    updateRoll(t, e) {
        this.roll.node.angle = -(Math.atan2(t, e) / GLOBAL.PI * 180);
        // this._rollY += this._speed;
        // this._rollY = this._rollY % 40;
        // let i = (Math.round(this._rollY / 2) + 11) % 20 + 1;
        // this.roll.spriteFrame = this._rollAtlas[i - 1]

        this._rollY += this._speed;
        this._rollY = this._rollY % 32;
        this.roll.spriteFrame = this._rollAtlas[Math.round(this._rollY)%32];
    },

    /**
     * 获取最近的Hole
     * 最近的Hole，不是哪个Hole离球最近，而是球正在朝着哪个Hole移动
     * 判断方法：球的速度方向应该和相对位置差一样是判断球的朝向，所以有时候会得出好几个Hole
     * 再从这些Hole中筛选出，相对位置的夹角与方向移动的夹角之间最小的Hole
     * @returns {*}
     */
    getNearHole () {
        let t = [], e = 0, i = 0;
        for (let n = 0; n < TABLE.holes.length; n++) {
            let o = TABLE.holes[n],
                e = o._leadPos.x - this.node.x,
                i = o._leadPos.y - this.node.y;
            if (0 <= e * this._vx && 0 <= i * this._vy) {
                t.push(o);
            }
        }
        if (0 === t.length)
            return null;

        e = t[0]._leadPos.x - this.node.x, i = t[0]._leadPos.y - this.node.y;
        let s = 0, a = Math.abs(Math.atan2(this._vy, this._vx) - Math.atan2(i, e));
        for (let c = 1; c < t.length; c++) {
            e = t[c]._leadPos.x - this.node.x, i = t[c]._leadPos.y - this.node.y;
            let r = Math.abs(Math.atan2(this._vy, this._vx) - Math.atan2(i, e));
            if (r < a) {
                a = r;
                s = c;
            }
        }
        return t[s];
    },

    checkInHole() {
        let t = false;
        for (let e = 0; e < TABLE.holes.length; e++) {
            if (TABLE.holes[e].inRect(this)) {
                if (TABLE.holes[e].isInHole(this) && this.checkInNow()) {
                    this._hole = TABLE.holes[e];
                    return true;
                }
                t = true;
                break;
            }
        }

        if (!t)
            this.adjustXY();
        else if (!this.checkInNow())
        {
            GLOBAL.Pass = 1;
        }
        return false;
    },

    checkInNow() {
        for (let t = 0; t < GLOBAL.ballInNow.length; ++t)
            if (this._num === Number(GLOBAL.ballInNow[t]))
                return true;
        return 0 === this._num;
    },

    adjustXY() {
        let t = -TABLE.width / 2 + BALL.radius,
            e = TABLE.width / 2 - BALL.radius,
            i = TABLE.height / 2 - BALL.radius,
            n = -TABLE.height / 2 + BALL.radius;
        if (this.node.x < t) {
            this._vx = -this._vx, this.node.x = t, this.onCollide();
        }
        if (this.node.x > e) {
            this._vx = -this._vx, this.node.x = e, this.onCollide();
        }
        if (this.node.y > i) {
            this._vy = -this._vy, this.node.y = i, this.onCollide();
        }
        if (this.node.y < n) {
            this._vy = -this._vy, this.node.y = n, this.onCollide();
        }
    },

    showIn(t, e) {
        this.node.opacity = 0;
        this.scheduleOnce(function() {
            this.anim.play();
            this.node.runAction(cc.fadeIn(0.3));
        }, t);
    },
});
