
let GLOBAL = require('global.pengpengqiu');
let Ball = require('ball.pengpengqiu');
let Event = require('event.pengpengqiu');

cc.Class({
    extends: cc.Component,

    properties: {
        mMoneyAniNode:cc.Node,
        mMoneyNode:cc.Node,
        mFlowerNode:cc.Node,
        mLight:cc.Node,
    },

    start () {
        
    },

    playAllBoom(){
        let ball = this.node.getComponent(require('ball.pengpengqiu'));
        ball && (ball.playBoom());
        this.hideBallGloss();
    },

    getLightGlossNum() {
        let num = 0;
        if(this.mFlowerNode){
            let count = this.mFlowerNode.children.length;
            for (let i = 0; i < count; i++) {
                let childName = "flower"+i;
                let childObj = this.mFlowerNode.getChildByName(childName);
                let glossObj = childObj.getChildByName("gloss");
                if(glossObj.active == false){
                    break;
                } else {
                    num++;
                }
            }
        }
        return num;
    },

    showBallGloss(){
        if(this.mFlowerNode){
            let count = this.mFlowerNode.children.length;
            for (let i = 0; i < count; i++) {
                let childName = "flower"+i;
                let childObj = this.mFlowerNode.getChildByName(childName);
                let glossObj = childObj.getChildByName("gloss");
                if(glossObj.active == false){
                    glossObj.active = true;
                    if (i === count - 1) {
                        let ball = this.node.getComponent(require('ball.pengpengqiu'));
                        ball && (ball.playBoom());
                        this.mFlowerNode.active = false;
                        return false;
                    }
                    return true;
                }
            }
        }
        return false;
    },

    hideBallGloss(){
        if (this.mFlowerNode) {
            this.mFlowerNode.active = false;
        }
    },
    
    playMoneyAni(){
        let money = GLOBAL.BetList[GLOBAL.CurrentLevelIndex][this.node.name];
        if (this.node.name.indexOf("smallBall") !== -1) {
            let ball = this.node.getComponent(require('ball.pengpengqiu'));
            if (ball.mIsBoom) {
                money = GLOBAL.BetList[GLOBAL.CurrentLevelIndex]['smallBallBoom'];
            }
        }

        if (money === 0)
            return;

        if(this.mMoneyAniNode && this.mMoneyNode){
            let moneyNode = cc.instantiate(this.mMoneyNode);
            moneyNode.position = cc.v2(0,15);
            moneyNode.getChildByName("moneyLabel").getComponent(cc.Label).string = ";" + money;
            this.mMoneyAniNode.addChild(moneyNode);
            moneyNode.runAction(cc.sequence(cc.moveTo(0.5,cc.v2(0, 55)), cc.callFunc(()=>{
                moneyNode.destroy();
            })));
        }

        Event.emit(GLOBAL.EventName.UpdateCurrentTotal, money);
    },

    removeMoneyAni(){
        if(this.mMoneyAniNode){
            this.mMoneyAniNode.children.forEach((item)=> {
                item.destroy()
            })
        } 
    },

    //顶部灯亮逻辑
    showBossLight(){
        if(this.mLight){
            let gloss = this.mLight.getChildByName("gloss");
            if(gloss && gloss.active === true){
                gloss.active = false;
            }
            else if(gloss && gloss.active === false){
                gloss.active = true;
            }
        }
    },

    hideBossLight(){
        if(this.mLight){
            let gloss = this.mLight.getChildByName("gloss");
            gloss && (gloss.active = false);
        }
    }

});
