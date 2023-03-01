import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.jxmj"
import BaseComponent from "../base/BaseComponent"
import { GameResultFan } from "./GameResultFan.jxmj";

// let GameLogic.Instance() = GameLogic.Instance()

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameResultLayer extends BaseComponent {

    @property
    thisComponentName:string = "GameResultLayer.jxmj"

    @property(cc.Prefab)
    prefab_card:cc.Prefab = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.log("GameResultLayer")
        cc.log(this.initParam)

        this.nGameMoney = this.initParam.nGameMoney
        // this.nDouble = this.initParam.nDouble
        this.vecGameStatiscs = this.initParam.vecUserResult1

        //修改提示语
        // this.labelRoundTip.$Label.string = "注:不足" + GameLogic.Instance().serverInfo.winMinBet + "倍按" + GameLogic.Instance().serverInfo.winMinBet + "倍算，封顶" + GameLogic.Instance().serverInfo.winMaxBet + "倍！"

        this.initHandCard()

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

    __bindButtonHandler() {
        cc.log("__bindButtonHandler")
		// BaseFunc.AddClickEvent(this.btnIconTip, this.node, this.thisComponentName, "onPressIconTip", 0);
		BaseFunc.AddClickEvent(this.btnClose, this.node, this.thisComponentName, "onPressClose", 0);
		BaseFunc.AddClickEvent(this.btnContinueWin, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btnContinueLose, this.node, this.thisComponentName, "onPressContinue", 0);
		BaseFunc.AddClickEvent(this.btnContinueDogfall, this.node, this.thisComponentName, "onPressContinue", 0);
        BaseFunc.AddClickEvent(this.btnContinueWithRound, this.node, this.thisComponentName, "onPressContinue", 0);
        BaseFunc.AddClickEvent(this.btnExit, this.node, this.thisComponentName, "onPressExit", 0);
    }

    GetNiaoNum(vecCards) {
        if (vecCards && vecCards.length>0) {
            return 0
        }

        let nNiaoNum = 0
        for (let v in vecCards) {
            if (GameLogic.Instance().gamescene.IsNiao(v)) {
                nNiaoNum = nNiaoNum + 1
            }
        }
        return nNiaoNum
    }

    initHandCard() {
        let vecGameResult = this.initParam.vecGameResult        
        for (let v of vecGameResult) {
            let nodePlayer = GameLogic.Instance().addPrefab(this.nodePlayer, this.nodeCardInfo)
            nodePlayer.active = true
            BaseFunc.BindChild(nodePlayer, nodePlayer)

            let chairId = GameLogic.Instance().gamescene.S2C(v.cChairID)
            let score = v.nScore + v.nTax

            if (score >= 0) {
                nodePlayer.lblScore.$Label.string = "+"+score
                nodePlayer.lblScore.color = new cc.Color(255,255,0)
            } else {
                nodePlayer.lblScore.$Label.string = score
                nodePlayer.lblScore.color = new cc.Color(115,246,210)
            }

            if (chairId == 0) {
                this.nodeWin.active = v.cWonLose > 0
                this.nodeLose.active = v.cWonLose <= 0 
                // this.nodeDogfall.active = v.cWonLose == 0

                this.nodeTitleWin.active = v.cWonLose > 0
                this.nodeTitleLose.active = v.cWonLose <= 0
                // this.nodeTitleDogfall.active = v.cWonLose == 0

                this.showAni(v.cWonLose)

                let vecZhuaNiao = v.vecZhuaNiao
                for (let niao of vecZhuaNiao) {
                    let curCard = this.addCard(this.node_zhuaNiao,niao,chairId)
                    if (GameLogic.Instance().gamescene.IsNiao(niao)) {
                        curCard.spt_bg.color = cc.color(255,255,0)
                        curCard.spt_value.color = cc.color(255,255,0)
                    }
                }
            }

            let msgFan = ""
            let fanValue = 0
            let bBanker = (GameLogic.Instance().gamescene.nBanker == chairId)
            nodePlayer.sptZhuang.active = bBanker

            if (v.cHuType>0) {
                if (v.cHuType == 1) {
                    msgFan = msgFan + " 自摸"
                } else if (v.cHuType == 2) {
                    msgFan = msgFan + " 抢杠胡"
                }

                let nNiaoNum = this.GetNiaoNum(v.vecZhuaNiao)
                if  (nNiaoNum > 0) {
                    msgFan = msgFan + " 抓鸟x" + nNiaoNum
                }

                nodePlayer.sptHu.active = true
            }

            if (v.nGangCredits > 0) {
                msgFan = msgFan+" 杠+"+v.nGangCredits
            } else if (v.nGangCredits < 0) {
                msgFan = msgFan+" 杠"+v.nGangCredits
            }

            if (v.cPiaoType == 1) {
                msgFan = msgFan + " 漂一底"
            } else if (v.cPiaoType == 2) {
                msgFan = msgFan + " 漂两底"
            }
            
            nodePlayer.lblFanDesc.$Label.string = msgFan

            msgFan = "合计："+v.nCredits+"番"                
            nodePlayer.lblFan.$Label.string = msgFan

            for (let v of GameLogic.Instance().playerData) {
                if (v.chairId == chairId) {
                    nodePlayer.lblNickname.$Label.string = v.nickname.substring(0,7)
                    break
                }
            }
            
            let vecCards = GameLogic.Instance().gamescene.tempLeftCards[chairId];
            this.initLeftCards(nodePlayer.nodeCard,vecCards, chairId)
            vecCards = GameLogic.Instance().gamescene.tempHandCards[chairId];
            this.initHandCards(nodePlayer.nodeCard,vecCards, chairId)
            vecCards = GameLogic.Instance().gamescene.tempCurHandCard[chairId];
            this.initCurHandCards(nodePlayer.nodeCard,vecCards, chairId)
        }

    }

    initLeftCards(parentNode,vecLeftCards, cChairId) {
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
                    let card = this.addCard(parentNode,value,cChairId)
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

                this.addGap(parentNode)
            }
            vecCard = []
        }
    }

    initHandCards(parentNode, vecHandCards, cChairId) {
        for (const value of vecHandCards) {
            this.addCard(parentNode,value,cChairId)
        }
    }

    initCurHandCards(parentNode, value, cChairId) {
        if (value == null || value <= 0) {
            return
        }

        this.addGap(parentNode)
        this.addCard(parentNode,value,cChairId)
    }

    addCard(parentNode, value, cChairId) {
        let card = GameLogic.Instance().addPrefab(this.prefab_card, parentNode).getComponent("Card.jxmj")
        card.init(value)
        return card
    }

    addGap(parentNode) {
        let node = new cc.Node()
        node.width = 10
        node.parent = parentNode
    }
    
    showAni(winFlag) {        
        let sptTitle1 = null
        let sptTitle2 = null
        if (winFlag > 0) {
            // this.nodeWin.active = true
            // this.nodeLose.active = false
            this.nodeTitleWin.active = true
            this.nodeTitleLose.active = false
            
            sptTitle1 = this.sptTitleWin1
            sptTitle2 = this.sptTitleWin2
            this.nodeContent.x = 400
        }else if (winFlag <= 0) {
            // this.nodeWin.active = false
            // this.nodeLose.active = true
            this.nodeTitleWin.active = false
            this.nodeTitleLose.active = true
            
            sptTitle1 = this.sptTitleLose1
            sptTitle2 = this.sptTitleLose2
            this.nodeContent.y = -300
        }else {
            return
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
