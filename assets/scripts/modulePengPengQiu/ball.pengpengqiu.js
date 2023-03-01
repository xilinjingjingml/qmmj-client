
let GLOBAL = require('global.pengpengqiu');
let lableAnimation = require('ballAnimation.pengpengqiu');
let Event = require('event.pengpengqiu');

cc.Class({
    extends: cc.Component,

    ctor() {
        this.mLayout = null;
    },

    properties: {
        mIsTinyBall: false,
        mRadius: cc.Integer,
        mFlowerNode:cc.Node,
        mFlower:cc.Prefab,
        mBoomAnimation:dragonBones.ArmatureDisplay,
        mShakeAnimation: cc.Animation,
        mShakeLightAnimation: dragonBones.ArmatureDisplay,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.mIsBoom = false;
        this.mBlood = -1;
    },

    start () {
        if (this.mBoomAnimation) {
            let self = this;
            this.mBoomAnimation.on(dragonBones.EventObject.LOOP_COMPLETE,function(){
                Event.emit(GLOBAL.EventName.BossBoomFinish, self.node.name);
            },this)
        }
    },

    init(layout) {
        this.mLayout = layout;
        let value = this.node.getChildByName('value');
        let coin = GLOBAL.BetList[this.mLayout.mLevel.mIndex][this.node.name];
        if(parseInt(coin)%10000 == 0){
            coin = parseInt(coin)/10000;
            value && coin && (coin !== 0) && (value.getComponent(cc.Label).string = ""+coin+":");
        }
        else{
            value && coin && (coin !== 0) && (value.getComponent(cc.Label).string = ""+coin);
        }
        
    },

    reset() {
        this.mBlood = this.mLayout.mGloss;
        this.mIsBoom = false;
        this.node.active = true;

        GLOBAL.Logic.mRate1 = ":";
        GLOBAL.Logic.mRate2 = ":";

        let bg = this.node.getChildByName('bg');
        bg && (bg.active = true);
        let value = this.node.getChildByName('value');
        value && (value.active = true);
        if(this.mBoomAnimation)
            this.mBoomAnimation.node.active = false;

        if (this.mFlowerNode) {
            this.mFlowerNode.active = true;
            this.mFlowerNode.children.forEach((flower)=>{
                let gloss = flower.getChildByName("gloss");
                if (gloss) {
                    gloss.active = false;
                }
            })
        }
        this.node.getComponent(lableAnimation).hideBossLight()
        GLOBAL.Logic.getCurrentLevel().resetShowRate();
    },

    initFlower(){
        
        //此处还应该加上当前关卡判断
        let numCount = this.mLayout.mGloss;
        this.mBlood = numCount;
        // if(this.node.name == "midPurpleBall" || this.node.name == "midYellowBall"){
        //     numCount = GLOBAL.Gloss[this.mLayout.getLevel().mIndex][0];
        // }
        // else if(this.node.name == "bigPurpleBall" || this.node.name == "bigYellowBall"){
        //     numCount = GLOBAL.Gloss[this.mLayout.getLevel().mIndex][1];
        // } 
        
        this.flowerObjects = []
        let radian = 0
        let increRadian = 360/numCount 
        if(this.mFlowerNode && this.mFlower){
            let flowerNodeHeight = this.mFlowerNode.height;
            let flowerHeight = this.mFlower.data.height;
            let anchorY = (flowerNodeHeight/flowerHeight)/2;
            for (let i = 0; i < numCount; i++) {
                let flowerObj = cc.instantiate(this.mFlower)
                let glossObj = flowerObj.getChildByName("gloss");
                let angle = radian;
                flowerObj.angle = angle;
                flowerObj.anchorY = -anchorY;
                glossObj.anchorY = -anchorY;
                flowerObj.name = "flower"+i;
                radian = radian + increRadian
                flowerObj.active = true;
                this.mFlowerNode.addChild(flowerObj);
                this.flowerObjects.push(flowerObj);
            }
        }
    },

    playBoom(){
        if(this.mIsBoom){
            return;
        }
        if (this.node.name.indexOf("smallBall") === -1) {
            GLOBAL.Logic.playDengAni();
        }
        this.mIsBoom = true;
        let bg = this.node.getChildByName('bg');
        bg && (bg.active = false);
        let value = this.node.getChildByName('value');
        value && (value.active = false);
        if(this.mBoomAnimation){
            this.mBoomAnimation.node.active = true;
            this.mBoomAnimation.playAnimation("newAnimation",1);
            this.node.getComponent(lableAnimation).playMoneyAni();
        }

        if (CC_DEBUG) {
            if (this.node.name.indexOf("smallBall") === -1) {
                GLOBAL.Logic.collideresult[this.node.name] = (GLOBAL.Logic.collideresult[this.node.name] || 0) + 1;
            } else {
                GLOBAL.Logic.collideresult[this.node.name+"Boom"] = (GLOBAL.Logic.collideresult[this.node.name+"Boom"] || 0) + 1;
            }

        }

        GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.boom);
    },

    playShake() {
         if(this.mShakeAnimation){
             this.mShakeAnimation.play();
         }
         this.mShakeLightAnimation && (this.mShakeLightAnimation.playAnimation("newAnimation",1));
    },

    getLightGlossNum() {
        return this.node.getComponent(lableAnimation).getLightGlossNum();
    },

    onCollide() {
        this.mBlood -= 1;

        GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio[this.node.name]);
        if(this.node.name.indexOf("smallBall") !== -1){
            if (this.mBlood !== 0) {
                this.node.getComponent(lableAnimation).playMoneyAni();
                this.playShake();

                if (CC_DEBUG) {
                    GLOBAL.Logic.collideresult[this.node.name] = (GLOBAL.Logic.collideresult[this.node.name] || 0) + 1;
                }
            } else {
                this.playBoom();
            }
        }
        else if(this.node.name === "midYellowBall" || this.node.name === "midPurpleBall" ){
            if (this.node.getComponent(lableAnimation).showBallGloss())
                this.playShake();
        }
        else if(this.node.name === "bigYellowBall" || this.node.name === "bigPurpleBall" ){
            if (this.node.getComponent(lableAnimation).showBallGloss())
                this.playShake();
        }
        else if(this.node.name === "light"){
            let lightCount = this.mLayout.calculateBossLightCount();
            if (GLOBAL.Logic.getCurrentLevel().mBossNum > 0 && lightCount >= GLOBAL.Logic.getCurrentLevel().mBossNum)
                return;

            this.node.getComponent(lableAnimation).showBossLight();

            let curLevel = this.mLayout.getLevel().mIndex;
            lightCount = this.mLayout.calculateBossLightCount();
            //第2、3关
            if(curLevel === 1 || curLevel === 2){
                if(lightCount ===  3){
                    //顶部炸弹飞
                    if (CC_DEBUG) {
                        GLOBAL.Boom = true;
                    }
                    GLOBAL.Logic.getCurrentLevel().playBombFly();
                }        
            }
            //第4、5关
            else if(curLevel === 3 || curLevel === 4){
                if(lightCount === 4){
                    let mBalls = this.mLayout.mLevel.mBalls;
                    for (let i = 0, n = mBalls.length; i < n; i++) {
                        let ballName = mBalls[i].node.name;
                        if (ballName === "midYellowBall" || ballName === "midPurpleBall" || 
                            ballName === "bigYellowBall" || ballName === "bigPurpleBall") {
    
                            // mBalls[i].node.getComponent(lableAnimation).playAllBoom(); 
                        }
                    }
                    if (CC_DEBUG) {
                        GLOBAL.Boom = true;
                    }
                    GLOBAL.Logic.mRate1 = Math.floor(GLOBAL.Rate / 10);
                    GLOBAL.Logic.mRate2 = Math.floor(GLOBAL.Rate % 10);
                    GLOBAL.Logic.getCurrentLevel().showRate(GLOBAL.Logic.mRate1, GLOBAL.Logic.mRate2);
                }
            }
        }
    },

    // update (dt) {},
});
