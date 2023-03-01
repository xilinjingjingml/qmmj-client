import BaseComponent from "../base/BaseComponent";
import BaseScene from "../base/baseScene/BaseScene";
import GameLogic from "./GameLogic.xxl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SuperReward extends BaseComponent {

    @property(sp.Skeleton)
    ske_com:sp.Skeleton = null;

    @property(cc.Label)
    gainMoney:cc.Label = null;

    @property(cc.Prefab)
    coinRain:cc.Prefab = null;

    @property(cc.Node)
    nodeCoinRain:cc.Node = null;

    onOpenScene() {

    }

    onCloseScene() {
        GameLogic.Instance().lock = false;
        GameLogic.Instance().isSuperReward = false;
    }

    start(){
        let nRet = this.initParam.gc_super_award_not.nRet;
        let nValue = this.initParam.gc_super_award_not.nValue;
        this.playHuoDeAni();
        this.ske_com.setStartListener(() => {
            cc.log("setStartListener");
        });
        this.ske_com.setEndListener(() => {
            cc.log("setEndListener");
            
        });
        this.ske_com.setCompleteListener(() => {
            cc.log("setCompleteListener");
            this.ske_com.addAnimation(0,"daiji",false);
        });
        
        let actionList = [];
        actionList[actionList.length] = cc.delayTime(0.4);
        actionList[actionList.length] = cc.callFunc(() => {
            this.gainMoney.string = nValue.toString();
        }); 
        this.node.runAction(cc.sequence(actionList));
    }

    playHuoDeAni(){
        this.ske_com.setAnimation(0,"huode",false);
        
    }

    playDaiJiAni(){
        this.ske_com.setAnimation(0,"daiji",false);
    }
}
