let Event = require("Event.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        boomAni: cc.Node,
        bPlayAni: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currPos = 0;
        this.allGoals = [];
        let t = this.node.getChildByName("goal");
        t.parent = null;
        for (let e = 0; e < 9; e++) {
            let i = cc.instantiate(t);
            i.parent = this.node;
            i.y = 296 - 74 * e;
            this.allGoals.push(i);
        }
        // TODO:Event.on("Event_visitorMode_adjust_goals", this.adjustXPos, this)
    },

    start () {

    },

    reset: function() {
        this.bPlayAni = (3 <= this.currPos);
        this.order = 0;
        for (; 0 < this.currPos;) {
            this.order++;
            this.currPos--;
            this.showOut(this.allGoals[this.order - 1], this.bPlayAni);
        }
    },

    onGoal: function(t) {
        this.showIn(this.allGoals[this.currPos], t);
        this.currPos++;
    },

    showIn: function(t, e) {
        e.reset();
        e.node.parent = t;
        e.node.x = e.node.y = 0;
        e.node.name = "BallNode";
        e.showIn(0);
    },

    onOutCbk: function(t, e) {
        this.cbk = t;
        this.obj = e;
    },

    showOut: function(t, e) {
        let i = t.getChildByName("BallNode"),
            n = cc.callFunc(this.cbk, this.obj, i);
        e ? this.boomAniPlay(t) : i.runAction(cc.sequence(cc.fadeOut(0.3), n));
    },

    boomAniPlay: function(t) {
        let e = t.getChildByName("BallNode"),
            i = this.allGoals[this.order - 1].getChildByName("qiubaozha");
        cc.callFunc(this.cbk, this.obj, e);
        e.runAction(cc.sequence(cc.delayTime(0.1 * this.order), cc.fadeOut(0.1), cc.callFunc(function() {
            i.active = true;
            i.getComponent(cc.Animation).play();
            i.getComponent(cc.Animation).on("finished", function() {
                i.active = false;
            });
        }), cc.callFunc(this.cbk, this.obj, e)));
    },

    adjustXPos: function() {
        this.node.getComponent(cc.Widget).left = 63.2;
        this.node.getComponent(cc.Widget).updateAlignment();
    },

    onDestroy() {
        Event.offTarget(this);
    }

    // update (dt) {},
});
