import BaseFunc = require("../base/BaseFunc")
import BaseComponent from "../base/BaseComponent"
import GameLogic from "./GameLogic.hbermj"
import GameScene from "./GameScene.hbermj"
import { unenoughGold } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

// let GameLogic.Instance() = GameLogic.Instance()

@ccclass
export class GameDebugLayer extends BaseComponent {

    // LIFE-CYCLE CALLBACKS:
    @property(GameScene)
    view:GameScene = null
    vecCards = []

    onLoad () {
        cc.log("onload gamedebug")
    }

    start () {
            
    }

    setView(view) {
        this.view = view
    }

    // CALLBACKS After __preload
    __bindButtonHandler() {
        cc.log("gamedebug __bindButtonHandler")
        BaseFunc.AddClickEvent(this.btnDebugLeft, this.node, "GameDebugLayer.hbermj", "onPressDebugLeft");
        BaseFunc.AddClickEvent(this.btnDebugRight, this.node, "GameDebugLayer.hbermj", "onPressDebugRight");        
    }

    onPressDebugLeft() {
        this.addIndex()
        cc.log(this.aniid)
        
        this.testCardLayer()

    }

    onPressDebugRight() {   
        this.addIndex()   
        cc.log(this.aniid)
        
        // this.testResult()
        // this.testOperAni()
        // this.testDiceAni()
        
        let actions = []
        actions[actions.length] = cc.delayTime(0.1)
        actions[actions.length] = cc.callFunc(() => {
            GameLogic.Instance().showGameRedPacketAwardLayer()
        })
        actions[actions.length] = cc.delayTime(2)
        actions[actions.length] = cc.callFunc(() => {
            unenoughGold(0, 6000)
        })
        this.node.stopAllActions()
        this.node.runAction(cc.sequence(actions))
        
    }

    addIndex() {
        if(this.aniid != null) {
            ++this.aniid
        }else{
            this.aniid = 0
        }

    }

    createUserInfo() {        

        for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
            let userData = {
                plyGuid : 5412134300543786 + i,
                nickname : "nickname-" + i,
                money : 21000 + i,
                sex : i % 2,
                headimage : "http://thirdwx.qlogo.cn/mmopen/vi_32/rOb0SAYlJGPD7tu8SDE8HcQfXp57Oob2LDZsLHROhoKzOvtxPIhCooQnlzsYvSUkBfwYYL7ADxAwic9hkYGOqeQ/96",
                chairId : i
            }
            if (i == 0 || i == 2) {                
                this.view.players[i].setUserData(userData)
            }
        }
        this.view.players[0].userData.chairId = 0
        GameLogic.Instance().userData.plyBaseData.chairId = 0
    }

    testCardLayer() {
        let noti = {
            vecDisplayCards:    
            {
            },
            vecHandCards:     
            [
                1,
                2,
                2,
                3,
                4,
                5,
                6,
                9,
                9,
                33,
                35,
                41,
                46,
            ],
            vecDisplayHua:     
            {
            },
            opcode: "pt_ermj_changecard_not",
            cChairID: 0,
            vecLeftCards:     
            {
            },
        }

        this.view.onGameChangeCardNot(noti)
    }

    testOperAni() {
        this.view.playOpAnimation(this.view.CHIPAI, 0)
    }

    testDiceAni() {
        let vecDices = [1,6]
        this.view.playDiceAni(vecDices)
    }

    testResult() {
        GameLogic.Instance().userData.plyBaseData.chairId = 1

        let cWinChairID = 1
        GameLogic.Instance().gamescene.tempLeftCards[0] = [1,2,3,-1,1,1,1,1,-2]
        GameLogic.Instance().gamescene.tempHandCards[0] = [
            1,
            2,
            2,
            3,
            4,
            5,
            33,
            35,
            41,
            46,
        ]
        GameLogic.Instance().gamescene.tempCurHandCard[0] = [35]
        
        GameLogic.Instance().gamescene.tempLeftCards[2] = [1,2,3,-1,1,1,1,1,-2]
        GameLogic.Instance().gamescene.tempHandCards[2] = [
            1,
            2,
            2,
            3,
            4,
            5,
            33,
            35,
            41,
            46,
        ]
        GameLogic.Instance().gamescene.tempCurHandCard[2] = [35]

        let resultMessage = {
            cType: 0,
            cWinChairID: cWinChairID,
            nAwardAll: 0,
            nBanker: 0,
            nBaopaiRatio: 1,
            nBei: 10,
            nHuDouble: 1,
            nHua: 1,
            nMingRatio: 1,
            nTaskRatio: 1,
            taifei: 10,
            vecFanAward: [],
            vecGameResult: [
                {
                    cAnGangNum: 0,
                    cBuGangNum: 0,
                    cChairID: 0,
                    cDianGangNum: 0,
                    cMingGangNum: 0,
                    nAllScore: -75,
                    nFan: 10,
                    nScore: -75,
                    vecResult: []
                },
                {
                    cAnGangNum: 0,​​​
                    cBuGangNum: 0,
                    cChairID: 1,
                    cDianGangNum: 0,
                    cMingGangNum: 0,
                    nAllScore: 25,
                    nFan: 10,
                    nScore: 25,
                    vecResult: [
                        38,​​​​
                        46,
                        67,
                        69,
                    ]
                }
            ]
        }   

        
		GameLogic.Instance().showGameResultLayer(resultMessage)
    }
}
