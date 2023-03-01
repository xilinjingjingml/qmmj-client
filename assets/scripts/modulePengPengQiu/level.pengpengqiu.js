
let LevelLayout = require('level-layout.pengpengqiu');
let GLOBAL = require('global.pengpengqiu');
let lableAnimation = require('ballAnimation.pengpengqiu');
let rollnumbers = require('rollnumbers.pengpengqiu');

cc.Class({
    extends: cc.Component,

    ctor () {
        this.mLevelBet = null;
        this.mBalls = [];
        this.mGameScene = null;
    },

    properties: {   
        rateNum1:cc.Label,
        rateNum2:cc.Label,
        mBossNum: {
            type: cc.Integer,
            default: 0
        },
        mBombNode:cc.Node,
        mTuowei:cc.Node,
        mEndPos:[cc.Node],
        mflyPrefabs:[cc.Node],
        mAutoAni:cc.Node,
        mRollNumber:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        
    },

    init(gamescene, bet, index) {
        this.mIndex = index;
        this.mLevelBet = bet;
        this.mGameScene = gamescene;
        this.getComponentsInChildren(LevelLayout).forEach((layout)=>{
            layout.init(this);
        });
        this.node.active = false;

        this.mBalls.sort((b1, b2)=>{
            return Number(b1.node.parent.name) - Number(b2.node.parent.name)
        })
    },

    getBallByUIIndex(idx) {
        if (idx > this.mBalls.length)
            return null;
        return this.mBalls[idx];
    },

    update (dt) {

    },

    reset() {
        this.getComponentsInChildren(LevelLayout).forEach((layout)=>{
            layout.reset(this);
        });
        this.resetBombPosition();
        this.resetFiveFlyPrefabs();
        GLOBAL.Logic.isPlayingBossAnimation = false;
        GLOBAL.Logic.isPlayingBigWinAnimation = false
        if(this.mAutoAni){
            this.mAutoAni.active = false;
        }
        this.resetRollNumber();
    },

    resetShowRate(){
        if(this.rateNum1 && this.rateNum2){
            this.rateNum1.getComponent(cc.Label).string = ":";
            this.rateNum2.getComponent(cc.Label).string = ":";
        }
    },
    //显示倍率
    showRate(num1,num2){
        let value = num1*10+num2;
        this.playRollNumber(value);
    },

    checkBalls() {
        function GetP(p) {
            return cc.v2(p.x, p.y);//p.parent.convertToWorldSpaceAR(cc.v2(p.x, p.y));
        }
        for (let i=0, l=this.mBalls.length; i < l;i++) {
            let ball = this.mBalls[i];
            if (ball.mIsBoom)
                continue;

            let rocket = GLOBAL.Logic.mRocket;

            let rocketRadius = Number(GLOBAL.RocketRadius), ballRadius = Number(ball.mRadius);
            let rocketWorldPos = GetP(rocket.node), ballWorldPos = GetP(ball.node.parent);

            let s = Number(Math.sqrt(Math.pow(rocketWorldPos.x - ballWorldPos.x, 2) + Math.pow(rocketWorldPos.y - ballWorldPos.y, 2)).toFixed(6));
            if (Math.ceil(s) < rocketRadius + ballRadius) {
                let sp = rocketWorldPos, op = ballWorldPos;
                let normal = cc.v2(op.x-sp.x, op.y-sp.y);
                let x = -rocket.vx, y = -rocket.vy;
                let l = GLOBAL.Speed;

                let a1 = Number(Math.atan2(y, x).toFixed(6));
                let afa = Number(Math.atan2(normal.y, normal.x).toFixed(6));
                let adt = a1 - afa;
                let a = afa - adt;

                rocket.vx = Number((l * Math.cos(a)).toFixed(6)), rocket.vy = Number((l * Math.sin(a)).toFixed(6));

                let r = (rocketRadius + ballRadius - s) / 2,
                    m = r * (rocketWorldPos.x - ballWorldPos.x) / s,
                    h = r * (rocketWorldPos.y - ballWorldPos.y) / s;

                rocket.node.x += m, rocket.node.y += h, ball.onCollide(), rocket.onCollide();
                return ball;
            }
        }
        return null;
    },

    playBombFly(){
        GLOBAL.Logic.isPlayingBossAnimation = true;

        let specialBalls = []

        for (let i=0, l=this.mBalls.length; i < l;i++) {
            let ball = this.mBalls[i];
            let ballIndex = Number(ball.node.parent.name);
            if (ballIndex == 1 || ballIndex == 4 || ballIndex == 10 || ballIndex == 15 || ballIndex == 16){
                specialBalls.push(ball);
            } 
        }
        if(this.mAutoAni){
            this.mAutoAni.active = true;
            for (let i = 0; i < this.mAutoAni.children.length; i++) {
                let childName = Number(this.mAutoAni.children[i].name);
                let ball = specialBalls[i];
                let ballName = Number(ball.node.parent.name);
                if( (ball.mIsBoom) ){
                    if((ballName == childName)){
                        this.mAutoAni.children[i].active = false;
                    }
                }else{
                    this.mAutoAni.children[i].active = true; 
                }
            }
        }
        
        if(this.mBombNode){
            if(this.mTuowei){
                this.mTuowei.active = false;
            }
            this.mBombNode.active = true;
            let action0 = []
            let endPos1 = cc.v2(0,300);
            action0[action0.length] = cc.moveTo(0.8,endPos1)
            action0[action0.length] = cc.callFunc(() => {
                this.mBombNode.active = false;
                this.playFiveBombFly();
                // this.playAllBallBomb();
            });
            this.mBombNode.stopAllActions()
            this.mBombNode.runAction(cc.sequence(action0))
        }
    },
    resetBombPosition(){
        if(this.mBombNode){
            if(this.mTuowei){
                this.mTuowei.active = true;
            }
            this.mBombNode.position = cc.v2(0,56);
            this.mBombNode.active = true;
        }
    },

    playAllBallBomb(){
        let mBalls = this.mBalls;
        for (let i = 0, n = mBalls.length; i < n; i++) {
            let ballName = mBalls[i].node.name;
            if (ballName === "midYellowBall" || ballName === "midPurpleBall" || 
                ballName === "bigYellowBall" || ballName === "bigPurpleBall") {
                
                mBalls[i].node.getComponent(lableAnimation).playAllBoom(); 
            }
        }
    },

    resetFiveFlyPrefabs(){
        if(this.mflyPrefabs){
            for (let i=0,j=this.mflyPrefabs.length;i<j;i++) {
                let prefab = this.mflyPrefabs[i];
                if (prefab) {
                    prefab.position = cc.v2(0,39);
                    prefab.active=false;
                }
            }
        }
    },

    playFiveBombFly(){

        let specialBalls = []
        for (let i=0, l=this.mBalls.length; i < l;i++) {
            let ball = this.mBalls[i];
            let ballIndex = Number(ball.node.parent.name);
            if (ballIndex == 1 || ballIndex == 4 || ballIndex == 10 || ballIndex == 15 || ballIndex == 16){
                specialBalls.push(ball);
            } 
        }

        if(this.mEndPos && this.mflyPrefabs){

            for (let i = 0; i < this.mflyPrefabs.length; i++) {
                this.mflyPrefabs[i].stopAllActions()
            }
            for (let i = 0; i < this.mflyPrefabs.length; i++) {
                let action = []
                let delayTime = 0;
                let endPos = this.mEndPos[i];
                let prefabName = Number(this.mflyPrefabs[i].name);
                let ball = specialBalls[i];
                let ballName = Number(ball.node.parent.name);
                if( (ball.mIsBoom) ){
                    if((ballName == prefabName)){
                        this.mflyPrefabs[i].active = false;
                    }
                }else{
                    this.mflyPrefabs[i].active = true;
                }
                action[action.length] = cc.delayTime(delayTime)
                action[action.length] = cc.moveTo(0.4,endPos)//.easing(cc.easeOut(0.01));

                action[action.length] = cc.callFunc(() => {
                    if(this.mAutoAni){
                        this.mAutoAni.active = false;
                    }
                    this.playAllBallBomb();
                });
                action[action.length] = cc.delayTime(0.01)
                action[action.length] = cc.callFunc(() => {
                    this.resetFiveFlyPrefabs();
                });
                this.mflyPrefabs[i].runAction(cc.sequence(action)) 
            }   
        }
    },

    playRollNumber(value){
        GLOBAL.Logic.isPlayingBigWinAnimation = true;
        if(this.rateNum1 && this.rateNum2){
            this.rateNum1.getComponent(cc.Label).string = "";
            this.rateNum2.getComponent(cc.Label).string = "";
        }
        if(this.mRollNumber){
            this.mRollNumber.active = true;
            this.mRollNumberHandler = this.mRollNumber.getComponent(rollnumbers);
            this.mRollNumberHandler.setDstNumber(value,function(){
                GLOBAL.GameEffect.playBeilvAnim();
            });
        }
    },
    resetRollNumber(){
        if(this.mRollNumber){
            this.mRollNumber.active = false;
        }
        if(this.rateNum1 && this.rateNum2){
            this.rateNum1.getComponent(cc.Label).string = ":";
            this.rateNum2.getComponent(cc.Label).string = ":";
        }
    }

});
