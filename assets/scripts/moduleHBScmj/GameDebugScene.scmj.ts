import BaseFunc = require("../base/BaseFunc")
import BaseComponent from "../base/BaseComponent"
import GameLogic from "./GameLogic.scmj"

const {ccclass, property} = cc._decorator;

// let GameLogic.Instance() = GameLogic.Instance()

@ccclass
export class GameDebugScene extends BaseComponent {

    // LIFE-CYCLE CALLBACKS:
    @property()
    MAX_PLAYER_NUM:number = 3

    vecCards = []
    
    @property(cc.Prefab)
    gamescene_prefab:cc.Prefab = null

    
    @property(cc.Prefab)
    rollnumber_prefab:cc.Prefab = null

    onLoad () {
        cc.log("onload gamedebug")
    }

    
    __bindButtonHandler() {
        cc.log("gamedebug __bindButtonHandler")
        BaseFunc.AddClickEvent(this.btnDebugLeft, this.node, "GameDebugScene.scmj", "onPressDebugLeft");
        BaseFunc.AddClickEvent(this.btnDebugRight, this.node, "GameDebugScene.scmj", "onPressDebugRight");        
    }
    onPressDebugLeft() {
        this.nodeNumberHandler.setSrcValue(10000000)
    }
     
    onPressDebugRight() {  
        this.nodeNumberHandler.setDstNumber(325412548)
    }

    start () {        
        // let nodeScene = cc.instantiate(this.gamescene_prefab) //this['nodeGamePlayer' + i]
        // this.node.addChild(nodeScene)
        
        // let nodeSceneScript = nodeScene.getComponent("GameScene.scmj")
        // nodeSceneScript.onOpenScene()
        let nodeNumber = cc.instantiate(this.rollnumber_prefab)
        this.nodeRollNumber.addChild(nodeNumber)   
        this.nodeNumberHandler = nodeNumber.getComponent("RollNumbers")
        
    }

    setView(view) {
        this.view = view
    }


}
