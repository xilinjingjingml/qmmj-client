import BaseScene from "../base/baseScene/BaseScene";
import ChangeNum from "./ChangeNum.xxl";
import GameLogic from "./GameLogic.xxl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaoZangDetailScene extends BaseScene {

    
    @property(ChangeNum)
    changNum:ChangeNum = null;
    
    onOpenScene() {
        this.changNum = new ChangeNum();
        this.loadRecrod()
    }

    onCloseScene() {
        this.changNum.removeSchedule();
    }

    loadRecrod(){

    }

    proto_gc_super_award_not(event){
        let message = event.packet;
        let nRet = message.nRet;
        let nValue = message.nValue;
        let closeBaoZang = cc.find("nodeTop/titleBg/closeBaoZang",this.node);
        let openBaoZang = cc.find("nodeTop/titleBg/openBaoZang",this.node);

        let baoZangLabel = cc.find("nodeTop/titleBg/baoZangLabel",this.node);
        let value = Number(baoZangLabel.getComponent(cc.Label).string);
        if(GameLogic.Instance().lock){
            if(closeBaoZang.active){
                closeBaoZang.getComponent(cc.Animation).play();
            }
            if(openBaoZang.active){
                openBaoZang.getComponent(cc.Animation).play();
            }
            return;
        }
        if(nRet == 0){
            //宝藏未开启
            if(value == 0){
                baoZangLabel.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(baoZangLabel,nValue);
            }

            closeBaoZang.active = true;
            openBaoZang.active = false;
            closeBaoZang.getComponent(cc.Animation).play();
        }
        else if(nRet == 1){
            //宝藏开启
            if(value == 0){
                baoZangLabel.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(baoZangLabel,nValue);
            }
            closeBaoZang.active = false;
            openBaoZang.active = true;
            openBaoZang.getComponent(cc.Animation).play();
        }
        else if(nRet == 3){
            GameLogic.Instance().lock = true;
        }
        else if(nRet == 4){
            
        }  
    }
}
