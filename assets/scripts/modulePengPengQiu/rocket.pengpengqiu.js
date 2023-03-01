
let GLOBAL = require('global.pengpengqiu');
let Event = require('event.pengpengqiu');
let lableAnimation = require('ballAnimation.pengpengqiu');

cc.Class({
    extends: cc.Component,

    ctor() {
        this.mInitPos = null;
    },

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.vx = 0;
        this.vy = 0;

        this.mInitPos = cc.v2(0, -240);//this.node.position;
        Event.on(GLOBAL.EventName.GameOver, this.onEnd, this);
    },

    start () {

    },

    rotate() {
        let vec = cc.v2(this.vx, this.vy);
        let angle = Math.atan2(vec.y, vec.x) * 180 / Math.PI - 90;
        this.mRocket.angle = angle;
    },

    init() {
        this.mRocket = this.node.getChildByName('bg');
    },

    setFrameAni(flag){
        if(this.mRocket){
            let frameani = this.mRocket.getChildByName("frameani");
            frameani.active = flag;
        }
    },

    onEnd() {
        this.vx = 0;
        this.vy = 0;
    },

    reset() {
        this.node.position = this.mInitPos;
        this.mRocket.angle = 0;
    },

    emit(x, y) {
        this.vx = x;
        this.vy = y;

        this.rotate();
    },

    onUpdate(dt) {
        if (this.mLastPos) {

        }
    },

    // 获取x速度
    getVX() {
        return this.vx;
    },

    // 获取y速度
    getVY() {
        return this.vy;
    },

    setGameScene(game) {
        this.mGameScene = game;
    },

    onCollide() {
        this.rotate();
    },

    onDestroy() {
        Event.offTarget(this);
    },

    updateXY() {
        this.node.x += this.vx;
        this.node.y += this.vy;
    },

    // update (dt) {},
});
