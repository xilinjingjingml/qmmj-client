
let Play = require("Play.zhuoqiu");
let GLOBAL = require("Define.zhuoqiu");
let Pop = require("Pop.zhuoqiu");
let Event = require("Event.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        play: Play,
        ic_coin: cc.Node,
        flyCoin: cc.Node,
        prefabGood: cc.Prefab,
        prefabGreat: cc.Prefab,
        prefabPrefect: cc.Prefab,
        prefabGoals: cc.Prefab,
        tips: cc.Node,
        textureGoals: [cc.SpriteFrame],
        aniIsOver: true
    },

    onLoad () {
        GLOBAL.GameEffect = this;
        this.goals = 0;
        this.flyIndex = 0;
        this.flyLeafList = [];
        this.winAniTime = 0.5;
        this.chalkAniTime = 0.4;
        this.bonusPoolAniTime = 3;
        Event.on(GLOBAL.EventName.ClearResultUI, this.clearResultUI, this);
    },

    runBezierAction() {
        var t = this,
            e = cc.instantiate(this.flyCoin);
        e.parent = this.node;
        e.active = true;
        e.opacity = 0;
        this.flyLeafList.push(e);
        var i = e.parent.convertToWorldSpaceAR(e.position),
            n = this.ic_coin.parent.convertToWorldSpaceAR(this.ic_coin.position),
            o = [e.parent.convertToNodeSpaceAR(i), cc.p(-200, 500), e.parent.convertToNodeSpaceAR(n)],
            s = cc.bezierTo(0.6, o),
            a = cc.scaleTo(.2, 1.2),
            c = cc.fadeIn(.2, 1),
            r = cc.spawn(a, c),
            l = cc.scaleTo(.4, .5),
            h = cc.sequence(r, l),
            u = cc.spawn(s, h),
            d = cc.callFunc(function() {
                bp.util.array_remove(t.flyLeafList, e), e.destroy()
            }),
            p = cc.sequence(u, d);
        e.runAction(p)
    },

    onGoal() {
        this.goals++;
        if (this.goals < 2)
            return;
        if (!this.nodeGoals) {
            this.nodeGoals = cc.instantiate(this.prefabGoals);
            this.nodeGoals.x = 0;
            // this.nodeGoals.y = 0;
            this.nodeGoals.parent = this.node;
        }
        this.nodeGoals.getChildByName("qiushu").getComponent(cc.Sprite).spriteFrame = this.textureGoals[this.goals-2];
        this.nodeGoals.getComponent(cc.Animation).play();
        if (this.actionNode && 2 <= this.goals)
            this.actionNode.active = false;
        if (7 <= this.goals) {
            if (!this.nodePrefect) {
                this.nodePrefect = cc.instantiate(this.prefabPrefect);
                this.nodePrefect.x = 0;
                this.nodePrefect.y = 0;
                this.nodePrefect.parent = this.node;
            }
            this.actionNode = this.nodePrefect;
        } else if (4 <= this.goals) {
            if (!this.nodeGreat) {
                this.nodeGreat = cc.instantiate(this.prefabGreat);
                this.nodeGreat.x = 0;
                this.nodeGreat.y = 0;
                this.nodeGreat.parent = this.node;
            }
            this.actionNode = this.nodeGreat;
        } else if (2 <= this.goals) {
            if (!this.nodeGood) {
                this.nodeGood = cc.instantiate(this.prefabGood);
                this.nodeGood.x = 0;
                this.nodeGood.y = 0;
                this.nodeGood.parent = this.node;
            }
            this.actionNode = this.nodeGood;
        }
        if (this.actionNode) {
            this.actionNode.active = true;
            this.actionNode.getComponent(cc.Animation).play();
        }
    },

    reset() {
        this.goals = 0;
    },

    onEnd() {
        let n = this,
            o = "";
        o = 4 <= GLOBAL.ballsN ? "Win" : "Win";
        Pop.pop(o, this.node, function(t) {

            var e = 2.2 - n.winAniTime,
                i = 2.2 - n.chalkAniTime;
            "Win" == o ? n.win = t.getComponent(cc.Animation) : (n.win = t.getComponent(cc.Animation), e = 2.9 - n.winAniTime, i = 2.9 - n.chalkAniTime);
            n.win.node.active = false;
            n.win.node.getChildByName("num").getComponent(cc.Label).string = ""+GLOBAL.Score;
            n.win.on("finished", function() {
                Event.emit(GLOBAL.EventName.tableReset);
                n.clearResultUI();
            }, n);
            n.win.play();
            n.win.node.active = true;
        }, function() {
            Event.emit(GLOBAL.EventName.tableReset);
        })
    },

    onResult(t) {
        this.unschedule(this.cancelTouch);
        var e = 2.2 - this.winAniTime;
        if ("bigwin" === this.win.node.name) {
            (e = 2.9 - this.winAniTime, this.win.node.off("touchend", this.onResult, this))
        } else {
            this.win.node.parent.off("touchend", this.onResult, this);
            this.win.setCurrentTime(e);
        }
    },

    cancelTouch() {
        if (this.win) {
            if ("bigwin" === this.win.node.name) {
                this.win.node.off("touchend", this.onResult, this);
            } else {
                this.win.node.parent.off("touchend", this.onResult, this);
            }
        }
    },

    clearResultUI() {
        if (this.win) {
            if ("bigwin" == this.win.node.name) {
                this.win.node.destroy()
            } else {
                this.win.node.destroy();
            }
            this.win = null;
        }
    },

    onDestroy() {
        Event.offTarget(this);
    }
});
