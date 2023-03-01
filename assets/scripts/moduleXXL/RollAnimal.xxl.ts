import BaseComponent from "../base/BaseComponent";
import { iMessageBox } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import GameLogic from "./GameLogic.xxl";
import BaseScene from "../base/baseScene/BaseScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RollAnimal extends BaseComponent {

    @property()
    speed:number = 1


    animalSize:number = 8
    distenceY:number = 85

    __bindButtonHandler() {
        
    }
    onOpenScene() {

    }

    onCloseScene() {
        GameLogic.Instance().lock = false;
        GameLogic.Instance().isSuperReward = false;
    }

    start(){
        let gc_super_award_not = this.initParam.gc_super_award_not;

        if(gc_super_award_not){
            let nRet = this.initParam.gc_super_award_not.nRet;
            let nValue = this.initParam.gc_super_award_not.nValue;
            let baoZangLabel = cc.find("nodeBaoZang/baoZangLabel",this.node);
            baoZangLabel.getComponent(cc.Label).string = ""+nValue;      
            if(nRet){
                this.playRollAnimal(nRet);
            } 
        } 
    }
    proto_gc_super_award_not(event){
        let message = event.packet;
        let nRet = message.nRet;
        let nValue = message.nValue;
        let closeBaoZang = cc.find("nodeBaoZang/closeBaoZang",this.node);
        let openBaoZang = cc.find("nodeBaoZang/openBaoZang",this.node);
        let baoZangLabel = cc.find("nodeBaoZang/baoZangLabel",this.node);
        
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
            closeBaoZang.active = true;
            openBaoZang.active = false;
            closeBaoZang.getComponent(cc.Animation).play();
            baoZangLabel.getComponent(cc.Label).string = ""+nValue;
        }
        else if(nRet == 1){
            //宝藏开启
            closeBaoZang.active = false;
            openBaoZang.active = true;
            openBaoZang.getComponent(cc.Animation).play();
            baoZangLabel.getComponent(cc.Label).string = ""+nValue;
        }
        else if(nRet == 3){
            GameLogic.Instance().lock = true;
        }
        else if(nRet == 4){
            
        }  
          
    }
    
    playRollAnimal(nRet,initParam=[]){
        let lastIndex1 = 6;
        let lastIndex2 = 6;
        let lastIndex3 = 6;
        if(nRet ==3){
           //中奖，显示三个星星
           lastIndex1 = 6;
           lastIndex2 = 6;
           lastIndex3 = 6; 
        }
        else if(nRet == 4){   
            //未中奖，随机显示三个动物，只要不是同色
            lastIndex1 = Math.floor(Math.random()*2)+1;
            lastIndex2 = Math.floor(Math.random()*3)+3;
            lastIndex3 = Math.floor(Math.random()*5)+1;
        }
        this.playNode1Rolling(lastIndex1);
        this.playNode2Rolling(lastIndex2);
        this.playNode3Rolling(lastIndex3);
        let actionList = []
        if(nRet==3){
            initParam["gc_super_award_not"] = this.initParam.gc_super_award_not;
            actionList[actionList.length] = cc.delayTime(4);
            actionList[actionList.length] = cc.callFunc(() => {
                this.closeSelf();
                SceneManager.Instance.popScene("moduleXXLRes", "SuperRewardScene",initParam);
            })    
            
        }
        else if(nRet == 4){
            actionList[actionList.length] = cc.delayTime(4);
            actionList[actionList.length] = cc.callFunc(() => {
                iMessageBox("很遗憾，您距离宝藏只差一步，请继续努力！");
            })
            actionList[actionList.length] = cc.delayTime(1.5);
            actionList[actionList.length] = cc.callFunc(() => {
                this.closeSelf();
            })
        }
        this.node.runAction(cc.sequence(actionList));
        
    }
    playNode1Rolling(lastIndex1){
        this.playNodeRolling(1, lastIndex1)
    }

    playNode2Rolling(lastIndex2){        
        this.playNodeRolling(2, lastIndex2)
    }

    playNode3Rolling(lastIndex3){        
        this.playNodeRolling(3, lastIndex3)
    }

    
    playNodeRolling(n_index, lastFrame){
        let nodeX = this["mask"].getChildByName("node" + n_index).x;
        let nodeY = this["mask"].getChildByName("node" + n_index).y;

        let loopTime = 4 // + Math.floor(Math.random()*2) - 1;
        let actionList = []
        let lastSpeed = 500 + Math.floor(Math.random()*100)

        actionList[actionList.length] = cc.delayTime(0.3);

        for (let j = 0; j < loopTime - 1; j++) {
            actionList[actionList.length] = cc.moveTo(0.5, cc.v2(nodeX,-this.distenceY*6));
            actionList[actionList.length] = cc.callFunc(() => {
                this["mask"].getChildByName("node" + n_index).y = 0;
            })
        }
        
        for (let j = 0; j < 1; j++) {
            actionList[actionList.length] = cc.moveTo(0.9, cc.v2(nodeX,-this.distenceY*6));
            actionList[actionList.length] = cc.callFunc(() => {
                this["mask"].getChildByName("node" + n_index).y = -0;
            })
        }

        let lastTime = lastFrame*this.distenceY / lastSpeed
        actionList[actionList.length] = cc.moveTo(lastTime, cc.v2(nodeX,-lastFrame*this.distenceY));
        
        //最后停下的位置替换成实图
        let url = "moduleXXLRes/texture/animal/normal"+lastFrame;
        let item = this["node" + n_index].getChildByName("item"+(lastFrame+1));
        cc.loader.loadRes(url, cc.SpriteFrame, (err, texture) => {
            if (err){
                console.log(err)
                return
            }
            if(item){
                item.getComponent(cc.Sprite).spriteFrame = texture;
            }
        })     
        this["mask"].getChildByName("node" + n_index).runAction(cc.sequence(actionList));  
    }
}
