import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import GameLogic from "./GameLogic.xxl"
import { WizardConfig } from "../moduleLobby/WizardConfig";
import { uploadGameRound } from "../base/BaseFuncTs";
import NetManager from "../base/baseNet/NetManager";
import { iMessageBox, enterGame, checkServerMoneyLimit, showTrumpet, MsgBox, numberFormat, unenoughGold, checkFirstBox, showAwardResultPop, czcEvent, oncePayBox, getLowMoneyRoom, getShopBox, getNewBieServer, playAD } from "../base/BaseFuncTs";
import BaseScene from "../base/baseScene/BaseScene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends BaseScene {
    

    
    onOpenScene(){
        czcEvent("消消乐", "进入游戏", "显示游戏界面")
        cc.log("GameScene onOpenScene");
        
        this.registMessageHandler()
    }


    registMessageHandler() {
        
        
    }


}



