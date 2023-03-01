
let GLOBAL = require("Define.zhuoqiu");
let AudioState = "AudioState";

cc.Class({
    extends: cc.Component,

    properties: {
        sndMusic: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndCoin: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndStart: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndShot: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndHit: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndRoll: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndSuck: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndWin: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        },
        sndStick: {
            type: cc.AudioClip, // use 'type:' to define Texture2D object directly
            default: null,     // object's default value is null
        }
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

    pauseAll: function() {
        this.isMute = true;
        cc.audioEngine.pauseAll();
        cc.sys.localStorage.setItem(AudioState, "off")
    },
    resumeAll: function() {
        this.isMute = false;
        if (this.sndMusic) {
            this.currentMusic = cc.audioEngine.playMusic(this.sndMusic, true);
            cc.audioEngine.resumeAll();
            cc.sys.localStorage.setItem(AudioState, "on")
        }
        // this.sndMusic ? (cc.loadRes(this.sndMusic, function(t) {
        //     cc.audioEngine.playMusic(t, true)
        // }), this.sndMusic = null) : cc.audioEngine.resumeAll(), cc.sys.localStorage.setItem("AUDIO_STATE", "on")
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
