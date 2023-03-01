import BaseComponent from "../base/BaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ResultAni extends BaseComponent {
    
    @property(cc.SpriteFrame)
    icons:cc.SpriteFrame = [];
    resultAniBg: any;
    resultMoney: any;
    resultTip: any;
    resultStar: any;

    start(){
        // this.resultAniBg.scale = 0;     
        // this.resultTip.scale = 3;
    }

    initGameResult(money,index){

        this.resultAniBg.stopAllActions();
        this.resultTip.stopAllActions();

        this.resultTip.active = false;
        this.resultMoney.getComponent(cc.Label).string = ";"+money;
        // this.resultAniBg.runAction(
        //     cc.sequence(
        //         cc.delayTime(0.1),
        //         cc.scaleTo(0.3, 1).easing(cc.easeBackIn()),
        //         cc.callFunc(function(){
        //         })  
        //     )    
        // )
        
        let action_resultAniBg = []
        action_resultAniBg[action_resultAniBg.length] = cc.delayTime(0.01)
        action_resultAniBg[action_resultAniBg.length] = cc.spawn(
            cc.scaleTo(0.2, 1).easing(cc.easeBackOut()),
            cc.fadeTo(0.3, 255)
        );

        this.resultAniBg.active = false;
        this.resultAniBg.opacity = 1;
        this.resultAniBg.scale = 0.8;
        this.resultAniBg.stopAllActions()
        this.resultAniBg.runAction(cc.sequence(action_resultAniBg))

        if(money>0){
            this.resultTip.active = true;
            this.resultTip.getComponent(cc.Sprite).spriteFrame = this.icons[index];
            // this.resultTip.runAction(
            //     cc.sequence(
            //         cc.delayTime(0.1),
            //         cc.scaleTo(0.3, 1).easing(cc.easeBackIn())  
            //     )    
            // )
            //
            let action_resultTip = []
            action_resultTip[action_resultTip.length] = cc.delayTime(0.01)
            action_resultTip[action_resultTip.length] = cc.fadeTo(0.35, 255)
            action_resultTip[action_resultTip.length] = cc.rotateTo(0.1, -3)
            action_resultTip[action_resultTip.length] = cc.rotateTo(0.1, 0)
            this.resultTip.active = true;
            this.resultTip.opacity = 1;
            this.resultTip.scale = 1;
            this.resultTip.stopAllActions()
            this.resultTip.runAction(cc.sequence(action_resultTip)) 

            //
            let action_resultStar = []
            action_resultStar[action_resultStar.length] = cc.delayTime(0.01)
            action_resultStar[action_resultStar.length] = cc.spawn(
                cc.scaleTo(0.4, 1),
                cc.fadeTo(0.4, 255),
                cc.rotateBy(1, 180)
            );
            action_resultStar[action_resultStar.length] = cc.spawn(
                cc.fadeTo(1, 0),
                cc.rotateBy(1, 180)
            );
    
            this.resultStar.active = true;
            this.resultStar.opacity = 1;
            this.resultStar.scale = 0.5;
            this.resultStar.stopAllActions()
            this.resultStar.runAction(cc.sequence(action_resultStar))            
        }    
    }
}
