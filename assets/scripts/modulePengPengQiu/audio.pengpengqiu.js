
let AudioState = "AudioState";
let GLOBAL = require('global.pengpengqiu');

cc.Class({
    extends: cc.Component,

    properties: {
        light: {
            default: null,
            type: cc.AudioClip,
        },
        wall: {
            default: null,
            type: cc.AudioClip,
        },
        smallBall: {
            default: null,
            type: cc.AudioClip,
        },
        midPurpleBall: {
            default: null,
            type: cc.AudioClip,
        },
        bigYellowBall: {
            default: null,
            type: cc.AudioClip,
        },
        midYellowBall: {
            default: null,
            type: cc.AudioClip,
        },
        bigPurpleBall: {
            default: null,
            type: cc.AudioClip,
        },
        bg: {
            default: null,
            type: cc.AudioClip,
        },
        gameStart: {
            default: null,
            type: cc.AudioClip,
        },
        boom: {
            default: null,
            type: cc.AudioClip,
        },
        result: {
            default: null,
            type: cc.AudioClip,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let t = this;
        GLOBAL.GameAudio = this;
        let e = cc.sys.localStorage.getItem(AudioState, "on");
        if (!e) {
            e = "on";
        }
        this.isMute = ("off" === e);
        this.isMute ? this.scheduleOnce(function() {
            return t.pauseAll()
        }, 0.1) : this.scheduleOnce(function() {
            return t.resumeAll()
        }, 0.1)
    },

    start () {

    },

    pauseAll: function() {
        this.isMute = true;
        cc.audioEngine.pauseAll();
        cc.sys.localStorage.setItem(AudioState, "off")
    },
    resumeAll: function() {
        this.isMute = false;
        if (this.bg) {
            this.currentMusic = cc.audioEngine.playMusic(this.bg, true);
            cc.audioEngine.resumeAll();
            cc.sys.localStorage.setItem(AudioState, "on")
        }
    },
    playEffect: function(t) {
        if (!this.isMute) {
            this._playEffect(t)
        }
    },
    _playEffect: function(t) {
        this.currentEffect = cc.audioEngine.play(t, false, 1);
    },
    onDestroy() {
        if (this.currentMusic)
            cc.audioEngine.stop(this.currentMusic);
        if (this.currentEffect)
            cc.audioEngine.stop(this.currentEffect);
    }

    // update (dt) {},
});
