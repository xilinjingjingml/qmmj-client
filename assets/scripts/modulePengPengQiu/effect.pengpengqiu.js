
let GLOBAL = require('global.pengpengqiu');
let Event = require('event.pengpengqiu');
let Ball = require('ball.pengpengqiu');

cc.Class({
    extends: cc.Component,

    properties: {
        mResultAnimationNode:cc.Node,
        mResultAnimation:dragonBones.ArmatureDisplay, 
        mResultMoney:cc.Label,

        mBeilvAnimationNode:cc.Node,
        mBeilvAnimation:dragonBones.ArmatureDisplay, 
        mBeilvLabel:cc.Label,
    },

    onLoad () {
        this.mIsWaitingPlayResult = false;
        GLOBAL.GameEffect = this;
        Event.on(GLOBAL.EventName.GameOver, this.onEnd, this);
        Event.on(GLOBAL.EventName.BossBoomFinish, this.onLevelBossAnimationFinish, this);
        Event.on(GLOBAL.EventName.BigWinFinish, this.onLevelBigWinAnimationFinish, this);
    },

    start () {
        if(this.mResultAnimationNode && this.mResultAnimation){
            this.mResultAnimation.on(dragonBones.EventObject.LOOP_COMPLETE,function(){
                this.mResultAnimationNode.active = false;
                Event.emit(GLOBAL.EventName.logicReset);
            },this)
        }
        
        if(this.mBeilvAnimationNode && this.mBeilvAnimation){
            this.mBeilvAnimation.on(dragonBones.EventObject.LOOP_COMPLETE,function(){
                this.onLevelBigWinAnimationFinish();
                this.mBeilvAnimationNode.active = false;
                this.mBeilvLabel.string = '';
            },this)
        } 
    },

    playBeilvAnim(){
        if(this.mBeilvAnimationNode && this.mBeilvAnimation){
            let rate = 0;
            if( (!isNaN(GLOBAL.Logic.mRate1)) && (!isNaN(GLOBAL.Logic.mRate2)) ){
                rate = (GLOBAL.Logic.mRate1*10)+GLOBAL.Logic.mRate2;
            }
            this.scheduleOnce(function() {
                this.mBeilvLabel.string = ''+rate;
            }, 0.8);
            this.mBeilvAnimationNode.active = true;
            this.mBeilvAnimation.playAnimation("newAnimation",1);
        }
    },
    //bigwin动画完成
    onLevelBigWinAnimationFinish(e, name) {
        GLOBAL.Logic.isPlayingBigWinAnimation = false;
        if (this.mIsWaitingPlayResult) {
            this.mIsWaitingPlayResult = false;
            this.playEndAnim();
        }
    },
    //爆炸动画完成
    onLevelBossAnimationFinish(e, name) {
        GLOBAL.Logic.isPlayingBossAnimation = false;
        if (this.mIsWaitingPlayResult && !GLOBAL.Logic.isPlayingBigWinAnimation) {
            this.mIsWaitingPlayResult = false;
            this.playEndAnim();
        }
    },

    playEndAnim() {
        this.scheduleOnce(function() {
            GLOBAL.GameMenu.updateTotalAfterOnEnd();
            Event.emit(GLOBAL.EventName.Event_Update_UserInfo);
            GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.result);
            if(this.mResultAnimationNode && this.mResultAnimation){
                if( (!isNaN(GLOBAL.Logic.mRate1)) && (!isNaN(GLOBAL.Logic.mRate2)) ){
                    let rate = (GLOBAL.Logic.mRate1*10)+GLOBAL.Logic.mRate2;
                    GLOBAL.Logic.mTotalValue = (GLOBAL.Logic.mTotalValue)*rate
                }

                this.mResultMoney.string = ''+GLOBAL.Logic.mTotalValue;
                this.mResultAnimationNode.active = true;
                this.mResultAnimation.playAnimation("newAnimation",1);
            }
        }, 0.5);
    },

    // 结算动画
    onEnd() {
        //触发bigwin,没有触发火箭爆炸
        if(GLOBAL.Logic.isPlayingBigWinAnimation && !GLOBAL.Logic.isPlayingBossAnimation){
            this.mIsWaitingPlayResult = true;
        }
        //触发bigwin,同时触发火箭爆炸
        else if(GLOBAL.Logic.isPlayingBigWinAnimation && GLOBAL.Logic.isPlayingBossAnimation){
            
        }
        //没有触发bigwin,触发火箭爆炸
        else if(!GLOBAL.Logic.isPlayingBigWinAnimation && GLOBAL.Logic.isPlayingBossAnimation){
            this.mIsWaitingPlayResult = true;
        }
        //没有触发bigwin,没有触发火箭爆炸
        else if(!GLOBAL.Logic.isPlayingBigWinAnimation && !GLOBAL.Logic.isPlayingBossAnimation){
            this.playEndAnim();
        }

    },

    onDestroy() {
        Event.offTarget(this);
    }

    // update (dt) {},
});
