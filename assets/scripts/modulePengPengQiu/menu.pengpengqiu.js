
let Event = require('event.pengpengqiu');
let GLOBAL = require('global.pengpengqiu');
import DataManager from "../base/baseData/DataManager";
import { numberFormat } from "../base/BaseFuncTs";

cc.Class({
    extends: cc.Component,

    properties: {
        mCoin: cc.Label,
        mFace: cc.Sprite,
        mNickname: cc.Label,
        mTotal: cc.Label,

        mDebugAngle: cc.EditBox,
        mDebugSpeed: cc.EditBox,
        mDebugPath: cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        GLOBAL.GameMenu = this;
        Event.on(GLOBAL.EventName.SocketPlayFee, this.calcFee, this);
        Event.on(GLOBAL.EventName.Event_Update_UserInfo, this.updateUserInfo, this);
        Event.on(GLOBAL.EventName.UpdateCurrentTotal, this.updateTotal, this);
        Event.on(GLOBAL.EventName.logicReset, this.reset, this);

        this.mDebugAngle.node.active = GLOBAL.Debug;
        this.mDebugSpeed.node.active = GLOBAL.Debug;
        this.mDebugPath.node.active = GLOBAL.Debug;
        Event.on(GLOBAL.EventName.GameOver, this.onEnd, this);
    },

    start () {
        let self = this
        if (self.mFace) {
            DataManager.UserData.face = DataManager.UserData.face.replace("http://", "https://")
            if (-1 !== DataManager.UserData.face.indexOf("https://")) {
                cc.loader.load({url: DataManager.UserData.face, type: 'png'}, (err, texture) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    let face = self.mFace;
                    let size = face.getContentSize();
                    face.spriteFrame = new cc.SpriteFrame(texture);
                    face.setContentSize(size);
                });
            }
        }
        this.mNickname && (this.mNickname.string = DataManager.Instance._userData.nickname);
    },

    reset() {
        GLOBAL.Logic.mTotalValue = 0;
        this.mTotal.string = '0';
    },

    calcFee() {    
        this.mCoin.string = numberFormat(DataManager.UserData.money - GLOBAL.Bet);
    },

    onDestroy() {
        Event.offTarget(this);
    },

    updateUserInfo() {
        this.mCoin.string = numberFormat(DataManager.UserData.money);
    },

    updateTotal(e, value) {
        GLOBAL.Logic.mTotalValue += parseInt(value);
        this.mTotal.string = '' + GLOBAL.Logic.mTotalValue;
    },

    updateTotalAfterOnEnd(){
        if( (!isNaN(GLOBAL.Logic.mRate1)) && (!isNaN(GLOBAL.Logic.mRate2)) ){
            let rate = (GLOBAL.Logic.mRate1*10)+GLOBAL.Logic.mRate2;
            let money = (GLOBAL.Logic.mTotalValue)*rate
            this.mTotal.string = '' + money;
        }
    },

    onEnd() {
        if( (!isNaN(GLOBAL.Logic.mRate1)) && (!isNaN(GLOBAL.Logic.mRate2)) ){
            let rate = (GLOBAL.Logic.mRate1*10)+GLOBAL.Logic.mRate2;
            let money = (GLOBAL.Logic.mTotalValue)*rate
            // cc.log("rate,GLOBAL.Logic.mTotalValue,money===",rate,GLOBAL.Logic.mTotalValue,money);
            // this.mTotal.string = '' + money;
        }
    },

    // update (dt) {},
});
