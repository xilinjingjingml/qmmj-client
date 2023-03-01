import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.hbermj"
import BaseComponent from "../base/BaseComponent"
import { GameResultFan } from "./GameResultFan.hbermj";

// let GameLogic.Instance() = GameLogic.Instance()

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameResultLayer extends BaseComponent {

    @property
    thisComponentName:string = "GameResultLayer.hbermj"

    @property
    winFlag:number = -1
    
    @property(cc.Prefab)
    prefab_card:cc.Prefab = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.log("GameResultLayer")
        cc.log(this.initParam)

        this.nGameMoney = this.initParam.nGameMoney
        this.nDouble = this.initParam.nDouble
        this.vecGameStatiscs = this.initParam.vecUserResult1

        // this.showIconTip(false)

        this.labelRoundTip.$Label.string = "注:不足" + GameLogic.Instance().serverInfo.winMinBet + "番按" + GameLogic.Instance().serverInfo.winMinBet + "番算，封顶" + GameLogic.Instance().serverInfo.winMaxBet + "番！"
        

        this.winFlag = this.getWinFlag()
        
        {            
            this.lblFanName.$Label.string = ""
            this.nodeTitleWin.active = false
            this.nodeTitleLose.active = false
            this.nodeTitleDogfall.active = false

            this.nodeWin.active = false
            this.nodeLose.active = false
            this.nodeDogfall.active = false
        }

        if (GameLogic.Instance().isPrivateRoom()) {
            this.btnExit.active = false
            this.btnContinueWithRound.active = false
            this.btnContinue.active = true
            this.labelRoundTip.active = false
            this.btnContinueDogfall.active = false

            if (GameLogic.Instance().gamescene.isScoreTable()) {
                cc.find("nodeMain/nodeContent/nodeWin/nodeDetailInfoWin/nodeScoreinfo/sptIcon",this.node).active = false
                cc.find("nodeMain/nodeContent/nodeLose/nodeDetailInfoLose/nodeScoreinfo/sptIcon",this.node).active = false
            }
        }

        if (this.winFlag < 0) {
            this.nodeDogfall.active = true
            this.nodeTitleDogfall.active = true
            return
        }
        this.myResultInfo = this.getMyResultInfo()

        this.showDetailInfo()

        this.showFanNameInfo()

        this.initHandCard()

        this.showAni() 

        if (GameLogic.Instance().isPrivateRoom()) {
        } else {
            let restround = GameLogic.Instance().redpacket_info.limitRounds - GameLogic.Instance().redpacket_info.curRounds
            if (restround > 0) {            
                this.btnContinueWithRound.active = true
                this.labelRestRound.$Label.string = restround
                this.btnContinueWin.active = false
                this.btnContinueLose.active = false
            }else{
                this.btnContinueWithRound.active = false
            }
        }
    }

    __bindButtonHandler() {
        cc.log("__bindButtonHandler")
		// BaseFunc.AddClickEvent(this.btnIconTip, this.node, this.thisComponentName, "onPressIconTip", 0);
		BaseFunc.AddClickEvent(this.btnClose, this.node, this.thisComponentName, "onPressClose", 0);
		BaseFunc.AddClickEvent(this.btnContinueWin, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btnContinueLose, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btnContinueDogfall, this.node, this.thisComponentName, "onPressContinue", 0);
        BaseFunc.AddClickEvent(this.btnContinueWithRound, this.node, this.thisComponentName, "onPressContinue", 0);
        BaseFunc.AddClickEvent(this.btnExit, this.node, this.thisComponentName, "onPressExit", 0);
        BaseFunc.AddClickEvent(this.btnContinue, this.node, this.thisComponentName, "onPressContinue", 0);
    }

    getMyResultInfo() {        
        for (const resultItem of this.initParam.vecGameResult) {
            if (GameLogic.Instance().gamescene.S2C(resultItem.cChairID) == 0) {
                return resultItem
            }
        }
        cc.error(this.initParam.vecGameResult)
        return []
    }
    
    showDetailInfo() {
        switch (this.winFlag) {
            case -1:  
                this.nodeDetailInfoLose.active = false
                this.nodeDetailInfoWin.active = false
                break;
            case 0:                
                this.lblScoreValueLose.$Label.string = (this.myResultInfo.nScore + this.initParam.taifei)
                break;
            case 1:            
                this.lblScoreValueWin.$Label.string = "+" + (this.myResultInfo.nScore + this.initParam.taifei)
                break;
        }

        this.lblFanValueLose.$Label.string = this.initParam.nBei
        this.lblFanValueWin.$Label.string = this.initParam.nBei
    }

    showFanNameInfo() {
        GameResultFan.gameResultFanTable
        
        let huFanCount = 0
        let tempVecResult = {}
        let strHuFan = ""

        for (const resultItem of this.initParam.vecGameResult) {
            if (resultItem.cChairID == this.initParam.cWinChairID) {
                tempVecResult = resultItem.vecResult
            }
        }

        
        for (const t of tempVecResult) {
            huFanCount = huFanCount + 1
            let typeName = GameResultFan.gameResultFanTable["hustyle"+t]
            if (huFanCount > 1) {
                strHuFan = strHuFan + "   "
            }
            strHuFan = strHuFan + typeName

            let huFanValue = 0
            if (typeName == "花牌") {
                huFanValue = parseInt(GameResultFan.gameResultFanTable["huFanNum"+t]) * this.initParam.nHua
            }else {
                huFanValue = parseInt(GameResultFan.gameResultFanTable["huFanNum"+t])
            }

            let space = ""
            if (huFanValue < 10) {
                space = "  "
            }else if (huFanValue < 100) {
                space = ""
            }
            strHuFan = strHuFan + space + huFanValue + "番"

            if (huFanCount > 0 && huFanCount % 5 == 0) {
                strHuFan = strHuFan + "\n";
                huFanCount = 0
            }
        }

        this.lblFanName.$Label.string = strHuFan
        
    }
    
    initHandCard() {
        let chairId = GameLogic.Instance().gamescene.S2C(this.initParam.cWinChairID) || 0
        // 左手牌
        this.initLeftCards(GameLogic.Instance().gamescene.tempLeftCards[chairId] || [])
        // 手牌
        this.initHandCards(GameLogic.Instance().gamescene.tempHandCards[chairId] || [])
        // 摸排
        this.initCurHandCards(GameLogic.Instance().gamescene.tempCurHandCard[chairId] || 0)

        // 缩放 防止超出
        // this.nodeCard.scale *= Math.min(1, 1071 / this.nodeCard.width)
    }
    
    initLeftCards(vecLeftCards) {
        // 优先操作枚举
        this.kCardCHI = 1
        this.kCardPENG = 2
        this.kCardMINGANG = 3
        this.kCardANGANG = 4

        let vecCard = []
        let isError = false
        for (const card of vecLeftCards) {
            if (card >= 0) {
                vecCard.push(card)
                continue
            }

            let cardStyle
            if (vecCard.length == 3) {
                if (vecCard[0] == vecCard[1]) {
                    cardStyle = this.kCardPENG // 碰
                } else {
                    cardStyle = this.kCardCHI // 吃
                }
            } else if (vecCard.length == 4) {
                if (vecCard[0] == 0) {
                    cardStyle = this.kCardANGANG // 暗杆
                    vecCard = [0, vecCard[vecCard.length - 1], 0]
                } else {
                    cardStyle = this.kCardMINGANG // 明杠
                }
            } else {
                isError = true
            }

            if (isError) {
                isError = false
            } else {
                for (let i = 0; i < 3; i++) {
                    let value = vecCard[i]
                    let card = this.addCard(value)
                    if (cardStyle == this.kCardMINGANG) {
                        if (i == 1) {
                            card.setMaJiangBg('2dmj_card_me_face_2')
                        }else{
                            card.setMaJiangBg('2dmj_card_me_face_1')
                        }
                    }else if (cardStyle == this.kCardANGANG) {
                        if (i == 1) {
                            card.setMaJiangBg('2dmj_card_me_face_3')
                        }else{
                            card.setMaJiangBg('2dmj_card_me_back_1')
                            card.hideValue()
                        }                    
                    }else{
                        card.setMaJiangBg('2dmj_card_me_face_1')
                    }
                }

                this.addGap()
            }
            vecCard = []
        }
    }

    initHandCards(vecHandCards) {
        for (const value of vecHandCards) {
            this.addCard(value)
        }
    }

    initCurHandCards(value) {
        if (value == null || value <= 0) {
            return
        }

        this.addGap()
        this.addCard(value)
    }

    addCard(value, parent) {
        let card = GameLogic.Instance().addPrefab(this.prefab_card, parent || this.nodeCard).getComponent(cc.Component)
        card.init(value)
        return card
    }

    addGap() {
        let node = new cc.Node()
        node.width = 10
        node.parent = this.nodeCard
    }

    showAni() {        
        let sptTitle1 = null
        let sptTitle2 = null
        if (this.winFlag == 1) {
            this.nodeWin.active = true
            this.nodeLose.active = false
            this.nodeTitleWin.active = true
            this.nodeTitleLose.active = false
            
            sptTitle1 = this.sptTitleWin1
            sptTitle2 = this.sptTitleWin2
            this.nodeContent.x = 400
        }else {
            this.nodeWin.active = false
            this.nodeLose.active = true
            this.nodeTitleWin.active = false
            this.nodeTitleLose.active = true
            
            sptTitle1 = this.sptTitleLose1
            sptTitle2 = this.sptTitleLose2
            this.nodeContent.y = -300
        }


        {
            // title1
            sptTitle1.opacity = 0
            let seqTable1 = []
            seqTable1[seqTable1.length] = cc.fadeTo(0.8, 255)
            seqTable1[seqTable1.length] = cc.scaleTo(0.4, 1)

            let action1 = []
            action1[action1.length] = cc.spawn(seqTable1)
            action1[action1.length] = cc.scaleTo(0.4, 1)

            sptTitle1.stopAllActions()
            sptTitle1.runAction(cc.sequence(action1))
        }

        {
            // title1
            sptTitle2.opacity = 0
            sptTitle2.scale = 0.1
            let title1_seqTable_1 = []
            title1_seqTable_1[title1_seqTable_1.length] = cc.fadeTo(0.8, 180)
            title1_seqTable_1[title1_seqTable_1.length] = cc.scaleTo(0.4, 1)
            
            let title1_seqTable_2 = []
            title1_seqTable_2[title1_seqTable_2.length] = cc.fadeTo(0.4, 0)
            title1_seqTable_2[title1_seqTable_2.length] = cc.scaleTo(0.5, 2)


            let action0 = []
            action0[action0.length] = cc.spawn(title1_seqTable_1)
            action0[action0.length] = cc.spawn(title1_seqTable_2)

            sptTitle2.stopAllActions()
            sptTitle2.runAction(cc.sequence(action0))
        }

        {
            //node
            this.nodeContent.opacity = 0
            let seqTable2 = []
            seqTable2[seqTable2.length] = cc.fadeTo(0.2, 255)
            seqTable2[seqTable2.length] = cc.moveTo(0.8, cc.v2(0, 0)).easing(cc.easeBackOut());          
            
            let action2 = []
            action2[action2.length] = cc.delayTime(0.01)
            action2[action2.length] = cc.spawn(seqTable2)
            this.nodeContent.stopAllActions()
            this.nodeContent.runAction(cc.sequence(action2))
        }
        
        
    }

    getWinFlag() {
        let winFlag = 0

        if (this.initParam.cWinChairID < 0) {
            winFlag = -1
        }else if(GameLogic.Instance().gamescene.S2C(this.initParam.cWinChairID) == 0) {
            winFlag = 1
        }else{
            0
        }

        return winFlag
    }

    showIconTip(flag) {
        this.sptTipBg.active = flag
    }

    onPressIconTip() {
        this.showIconTip(!this.sptTipBg.active)
    }

    onPressClose() {
        this.close()
        GameLogic.Instance().gamescene.showContinue(true)
    }


    onPressExit() {
        this.close()
        GameLogic.Instance().LeaveGameScene()
    }

    onPressContinue() {
        this.close()
        GameLogic.Instance().gamescene.onPressReady()
    }

    close() {
        if (GameLogic.Instance().gamescene) {  
            GameLogic.Instance().gamescene.doStateChangeReInit()
        }
        GameLogic.Instance().closeScene("GameResultLayer")
    }


    // update (dt) {}
}
