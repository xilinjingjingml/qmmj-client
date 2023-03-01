
let Event = require("Event.zhuoqiu");
let Stick = require("Stick.zhuoqiu");
let Play = require("Play.zhuoqiu");
let GameMenu = require("GameMenu.zhuoqiu");
let GLOBAL = require("Define.zhuoqiu");
let BtnSelect = require("BtnSelect.zhuoqiu");

cc.Class({
    extends: cc.Component,

    properties: {
        menu: GameMenu,
        stick: Stick,
        play: Play,
        goals: cc.Node
    },

    onLoad () {
        Event.on(GLOBAL.EventName.onOneShot, this.onOneShot, this);
        Event.on(GLOBAL.EventName.onAutoShot, this.onAutoShot, this);
        Event.on(GLOBAL.EventName.logicReset, this.loginReset, this);

        // Event.on("Event_Init_Done", this.loginCallBack, this);
        Event.on(GLOBAL.EventName.SocketPlayStick, this.startShot, this);
        Event.on(GLOBAL.EventName.resetStick, this.reset, this);
    },

    loginReset() {
        this.reset();
    },

    onOneShot() {
        let t = this;
        if (this.play.touchable) {
            this.stick.playReady();
            this.play.touchable = false;
            this.scheduleOnce(function() {
                if (GLOBAL.DEBUG) {
                    t.startShot();
                } else {
                    GLOBAL.Bet = Number(t.menu.btnSelect.getComponent(BtnSelect).base.getComponent(cc.Label).string);
                    Event.emit(GLOBAL.EventName.SocketPlayReq, GLOBAL.Bet);
                }
            }, GLOBAL.shotStartTime)
        }
    },

    onAutoShot() {
        if (!this.stick.isReady) {
            this.play.stopAuto();
            this.play.touchable = true;
        } else
            this.autoShotShort();
    },

    autoShotShort() {
        let t = this;
        this.stick.playRotateOnce(function() {
            t.onOneShot()
        })
    },

    startShot() {
        this.menu.disableSelect();
        this.stick.playShot();
    },

    start () {

    },

    reset() {
        this.menu.enableSelect();
        this.stick.resetStick();
        this.play.touchable = true;
        if (this.play.isAuto())
            this.autoShotShort();
    },

    onDestroy() {
        Event.offTarget(this);
    }

    // update (dt) {},
});
