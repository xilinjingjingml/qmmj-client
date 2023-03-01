import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.jxmj"
import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardLayer extends BaseComponent {
	
	// 优先操作枚举
	kCardCHI = 1
	kCardPENG = 2
	kCardMINGANG = 3
	kCardANGANG = 4

	handCardsNum = 14
	sideHandCardNum = 13
	maxHuaNum = 15
	maxGroupNum = 4

	touchToHeight = 30 // 选中后牌变高
	inputCardZorder = this.handCardsNum + 1

	touchCardNode = null
	curSelectedCardNode = null
	playMoPaiAni = false
	playPutPaiAni = false
	doubleClick = false
	touchCardPos = cc.v2(0, 0)

	handCardList = []
    tabPutCardArea = []
    huaCardsNum = []

    onLoad() {
        this.spt_bg.active = false
        this.init()
    }

    init() {
        // 屏幕适配
        this.node.setContentSize(cc.winSize)
        this.node.position = cc.v2(0, 0)
        // this.node.scale = Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1)


        /*this.nodeHua = new cc.Node()
        this.nodeHua.position = cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2)
        this.node.addChild(this.nodeHua, 999)*/

        this.handCard = this['handCard0']
        for (let i = 1; i <= this.handCardsNum; i++) {
            let cardNode = this.handCard.getChildByName(i.toString())
            cardNode.basePos = cardNode.position
            this.basePosY = cardNode.y
        }

        this.reInit()

        this.addTouchEvent()
    }

    reInit() {
        this.playMoPaiAni = false
        this.playPutPaiAni = false
        this.nodePutCardArrow.active = false
        this.nodePutCardArrow.parent = this.node

        this.resetView()
    }

    resetView() {

        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {
            this.huaCardsNum[chairId] = 0
            // 玩家牌
            this['nodePlayer' + chairId].active = true

            // 出大牌
            this['putCardPos' + chairId].active = false 

            // 吃碰杠
            this['node_showOpCards' + chairId].active = true
            for (let i = 1; i <= this.maxGroupNum; i++) {
                let nodeGroup = this['node_showOpCards' + chairId].getChildByName('group' + i)
                nodeGroup.active = false
                for (let j = 1; j <= 4; j++) {
                    let nodeCard = nodeGroup.getChildByName('card' + j)
                    nodeCard.active = false
                    nodeCard.getChildByName('unsee').active = false

                    // 特殊处理
                    let nodeValue = nodeCard.getChildByName('value')
                    /*if (chairId == 1) {
                        nodeValue.angle = -90
                    }*/
                    if (chairId == 1 || chairId == 3) {
                        nodeValue.scaleX = -nodeValue.scaleX
                        nodeValue.skewY = -nodeValue.skewY
                    }
                }
            }

            // 手牌
            let handCardsNum = this.getHandCardNum(chairId)
            this['handCard' + chairId].active = true
            for (let i = 1; i <= handCardsNum; i++) {
                this['handCard' + chairId].getChildByName(i.toString()).active = false
            }

            // 出牌区域
            this['putCardArea' + chairId].active = true
            for (const i of this.getAllPutCardArea(chairId)) {
                this['putCardArea' + chairId].getChildByName(i.toString()).active = false
                //特殊处理
                /*if (chairId == 1) {
                    this['putCardArea' + chairId].getChildByName(i.toString()).getChildByName('value').angle = -90
                }*/
                if (chairId == 1 || chairId == 3) {
                    this['putCardArea' + chairId].getChildByName(i.toString()).getChildByName('value').skewX = 1
                } else if (chairId == 2) {
                    this['putCardArea' + chairId].getChildByName(i.toString()).getChildByName('value').skewX = 0
                }
            }

            // 覆盖
            this['handCardBack' + chairId].active = false
            // if (chairId == 1 || chairId == 3) {
            //     for (let i = 1; i <= this.sideHandCardNum; i++) {
            //         this['handCardBack' + chairId].getChildByName(i.toString()).active = false
            //     }
            //     for (const i of this.getTabHandCardPos(chairId, this.handCardsNum - 1)) {
            //         this['handCardBack' + chairId].getChildByName(i.toString()).active = true
            //     }
            // }

            // 放倒
            this['handCardFront' + chairId].active = true
            for (let i = 1; i < handCardsNum + 1; i++) {
                this['handCardFront' + chairId].getChildByName(i.toString()).active = false
                /*if (chairId == 1) {
                    this['handCardFront' + chairId].getChildByName(i.toString()).getChildByName('value').angle = -90
                }*/
            }
        }

        // 多人适配
        if (GameLogic.Instance().MAX_PLAYER_NUM == 3) {
            this['nodePlayer2'].active = false
        } else if (GameLogic.Instance().MAX_PLAYER_NUM == 2) {
            this['nodePlayer1'].active = false
            this['nodePlayer3'].active = false
        }

        // 花牌
        //this.clearHuaCards()

        this.removeAllHandCardMask()
    }

    addTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
    }

    onTouchBegin(event) {
        this.touchCardMove = false
        let pos = this.handCard.convertToNodeSpace(event.getLocation())
        let selectedCardNode = this.itemForTouch(pos)
        if (selectedCardNode) {
            // 触摸后牌停止动作
            if (selectedCardNode.isruning) {
                selectedCardNode.isruning()
            }

            if (this.curSelectedCardNode == selectedCardNode) {
                this.doubleClick = true
            } else {
                this.touchCardPos = pos

                if (this.curSelectedCardNode) {
                    this.curSelectedCardNode.position = this.curSelectedCardNode.basePos
                    this.unTipMaskCard()
                }

                GameLogic.Instance().playSound('audio_card_hover')
                this.curSelectedCardNode = selectedCardNode
                this.curSelectedCardNode.y = this.basePosY + this.touchToHeight
                this.curSelectedCardNode.zIndex = this.inputCardZorder++

                this.tipMaskCard(this.curSelectedCardNode.cardValue)
            }
        } else {
            if (this.curSelectedCardNode) {
                this.curSelectedCardNode.position = this.curSelectedCardNode.basePos
                this.curSelectedCardNode = null
                this.doubleClick = false
                this.unTipMaskCard()
            }
        }
    }

    onTouchMove(event) {
        let pos = this.handCard.convertToNodeSpace(event.getLocation())
        if (this.touchCardMove) {
            let selectedCardNode = this.itemForTouch(pos)
            if (selectedCardNode && this.curSelectedCardNode != selectedCardNode) {
                if (this.curSelectedCardNode) {
                    this.curSelectedCardNode.position = this.curSelectedCardNode.basePos
                    this.unTipMaskCard()
                }

                GameLogic.Instance().playSound('audio_card_hover')
                this.curSelectedCardNode = selectedCardNode
                this.curSelectedCardNode.y = this.basePosY + this.touchToHeight
                this.curSelectedCardNode.zIndex = this.inputCardZorder++

                this.tipMaskCard(this.curSelectedCardNode.cardValue)
            } else {
                if (this.curSelectedCardNode) {
                    this.curSelectedCardNode.position = pos
                    this.doubleClick = false
                }
            }
        } else {
            let rect = cc.rect(-50, -50, 100, 100)
            if (rect.contains(pos.sub(this.touchCardPos))) {
                this.touchCardMove = true
            }
        }
    }

    onTouchEnd(event) {
        if (!this.curSelectedCardNode) {
            return
        }

        let move = this.curSelectedCardNode.y > this.basePosY + 80
        this.curSelectedCardNode.position = cc.v2(this.curSelectedCardNode.basePos.x, this.basePosY + this.touchToHeight)

        let pos = this.handCard.convertToNodeSpace(event.getLocation())
        if (move || this.doubleClick && this.curSelectedCardNode == this.itemForTouch(pos)) {
            this.putCard(this.curSelectedCardNode)
        }
    }

    itemForTouch(pos) {
        for (let i = 1; i < this.handCardsNum + 1; i++) {
            let cardNode = this.handCard.getChildByName(i.toString())
            if (cardNode.active && !cardNode.bStopTouch) {
                let bg = cardNode.getChildByName('bg')
                let rect = cc.rect(cardNode.x - bg.width / 2, cardNode.basePos.y - bg.height / 2, bg.width, bg.height)
                if (rect.contains(pos)) {
                    return cardNode
                }
            }
        }
    }

    // 刷新左手牌
    refreshLeftHandCard(chairId, vecLeftCards) {
        let vecCard = []
        let groupId = 1
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
                    vecCard = [vecCard[vecCard.length - 1]]
                } else {
                    cardStyle = this.kCardMINGANG // 明杠
                }
            } else {
                isError = true
            }

            if (isError) {
                isError = false
            } else {
                let nodeGroup = this['node_showOpCards' + chairId].getChildByName('group' + groupId)
                nodeGroup.active = true
                for (let i = 1; i <= 4; i++) {
                    nodeGroup.getChildByName('card' + i).active = false
                }

                if (cardStyle == this.kCardANGANG) {
                    for (let i = 1; i <= 3; i++) {
                        this.setLeftCardVisible(nodeGroup.getChildByName('card' + i), false)
                    }

                    let nodeCard = nodeGroup.getChildByName('card4')
                    if (vecCard > 0) {                        
                        this.setLeftCardVisible(nodeCard, true)
                        this.setCardNodeValue(nodeCard, vecCard[0], false)
                    }else{
                        this.setLeftCardVisible(nodeCard, false)
                    }

                } else {
                    for (let i = 1; i <= vecCard.length; i++) {
                        let nodeCard = nodeGroup.getChildByName('card' + i)
                        this.setLeftCardVisible(nodeCard, true)
                        this.setLeftCardVisible(nodeCard, true)
                        this.setCardNodeValue(nodeCard, vecCard[i - 1], false)
                        this.removeMaskBlue(nodeCard)
                    }

                    // 别人的牌变颜色
                    if (cardStyle == this.kCardCHI || cardStyle == this.kCardPENG) {
                        this.addMaskBlue(nodeGroup.getChildByName('card2'))
                    } else if (cardStyle == this.kCardMINGANG) {
                        this.addMaskBlue(nodeGroup.getChildByName('card4'))
                    }
                }

                groupId++
            }
            vecCard = []
        }
    }

    // 刷新牌河
    refreshDisplayCard(chairId, vecCards) {
        if (this.playPutPaiAni) {
            return
        }

        let putTabs = this.getPutCardArea(chairId)

        // 隐藏全部
        for (const i of putTabs) {
            this['putCardArea' + chairId].getChildByName(i.toString()).active = false
        }

        // 根据数据显示
        for (let i = 0; i < vecCards.length; i++) {
            this.setCardNodeValue(this['putCardArea' + chairId].getChildByName(putTabs[i].toString()), vecCards[i], false)
        }
    }

    refreshHandCard(chairId, vecCards, cHuPai) {
        if (!vecCards) {
            cc.error("ERROR:\t", (new Date()).toLocaleString())
            return
        }
        if (this.playMoPaiAni || this.moveHandCards && chairId == 0) {
            return
        }

        if (chairId == 0) {
            this.curSelectedCardNode = null
            this.handCardList = []
        }

        // 隐藏所有手牌(含摸到的牌)
        let handCardsNum = this.getHandCardNum(chairId)
        for (let i = 1; i <= handCardsNum; i++) {
            this['handCard' + chairId].getChildByName(i.toString()).active = false
            this['handCardFront' + chairId].getChildByName(i.toString()).active = false
        }

        // 吃碰杠时会多一张牌
        let value = null
        if (vecCards.length % 3 == 2) {
            value = vecCards.pop()
        }

        let tabHandCard = this.getTabHandCardPos(chairId, vecCards.length)
        for (let i = 0; i < vecCards.length; i++) {
            let index = tabHandCard[i]
            let cardNodeHand = this['handCard' + chairId].getChildByName(index.toString())
            let cardNodeFront = this['handCardFront' + chairId].getChildByName(index.toString())

            let card = vecCards[i]
            if (card > 0) {
                let isbig = chairId == 0
                if (chairId == 0 && cHuPai != 1) {
                    this.setCardNodeValue(cardNodeHand, card, isbig)
                    cardNodeHand.position = cardNodeHand.basePos
                    cardNodeHand.index = this.handCardList.length
                    this.handCardList.push(cardNodeHand)
                } else {
                    this.setCardNodeValue(cardNodeFront, card, isbig)
                }
            } else {
                cardNodeHand.active = true
            }

            if (GameLogic.Instance().gamescene.bFirstSendCardAni_) {
                cardNodeHand.active = false
            }
        }

        if (value) {
            this.refreshCurCard(chairId, value, cHuPai)
        }
    }

    refreshCurCard(chairId, value, cHuPai) {
        let cardNodeFront = this.getCurCardNodeFront(chairId)
        let cardNodeHand = this.getCurCardNodeHand(chairId)
        cardNodeFront.active = false
        cardNodeHand.active = false

        if (cardNodeHand.isruning) {
            cardNodeHand.isruning()
        }

        if (value > 0) {
            let isbig = chairId == 0
            if (chairId == 0 && cHuPai != 1) {
                this.setCardNodeValue(cardNodeHand, value, isbig)
            } else {
                this.setCardNodeValue(cardNodeFront, value, isbig)
            }
        } else if (cHuPai) {
            cardNodeFront.active = false
        } else if (chairId != 0) {
            cardNodeHand.active = true
        }

        if (GameLogic.Instance().gamescene.isTopSpeed || cHuPai) {
            return
        }

        if (cardNodeHand.active) {
            let cardPos = cardNodeHand.position
            cardNodeHand.position = cardPos.add(cc.v2(0, 30))
            cardNodeHand.isruning = () => {
                cardNodeHand.stopAllActions()
                cardNodeHand.position = cardPos
                cardNodeHand.isruning = null
            }
            cardNodeHand.runAction(cc.sequence(
                cc.moveTo(0.5, cardPos).easing(cc.easeBounceOut()),
                cc.callFunc(() => {
                    if (cardNodeHand.isruning) {
                        cardNodeHand.isruning()
                    }
                })
            ))
        }
    }

    mopaiAnimation() {
        this.playMoPaiAni = true
        let handCardsNum = this.handCardsNum - 1
        let MoPaiActionCardValue = []

        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {
            let tabHandCard = this.getTabHandCardPos(chairId, handCardsNum)

            for (let i = 0; i < handCardsNum; i++) {
                let cardNode = this['handCard' + chairId].getChildByName(tabHandCard[i].toString())
                cardNode.active = false
                if (chairId == 0) {
                    MoPaiActionCardValue.push(cardNode.cardValue)
                }
            }
        }

        let chairId = 0
        let tabHandCard = this.getTabHandCardPos(chairId, handCardsNum)
        for (let i = 0; i < handCardsNum; i++) {
            let cardNode = this['handCard' + chairId].getChildByName(tabHandCard[i].toString())
            this.setCardTexture(cardNode, MoPaiActionCardValue[i], true)
        }

        let actionindex = 1
        let showcardnum = Math.floor(this.handCardsNum / 4)
        let showcard = function () {
            if (actionindex < showcardnum) {
                for (let tempchairid = 0; tempchairid < GameLogic.Instance().MAX_SEAT_NUM; tempchairid++) {
                    let tabHandCard = this.getTabHandCardPos(tempchairid, handCardsNum)
                    for (let i = 0; i < actionindex * 4; i++) {
                        this['handCard' + tempchairid].getChildByName(tabHandCard[i].toString()).active = true
                    }
                }
                GameLogic.Instance().playSound('audio_select_group')
            } else if (actionindex == showcardnum) {
                for (let tempchairid = 0; tempchairid < GameLogic.Instance().MAX_SEAT_NUM; tempchairid++) {
                    let tabHandCard = this.getTabHandCardPos(tempchairid, handCardsNum)
                    for (let i = 0; i < handCardsNum; i++) {
                        this['handCard' + tempchairid].getChildByName(tabHandCard[i].toString()).active = true
                    }
                }
                GameLogic.Instance().playSound('audio_select_group')
            } else if (actionindex == showcardnum + 1) {
                for (let tempchairid = 0; tempchairid < GameLogic.Instance().MAX_SEAT_NUM; tempchairid++) {
                    this['handCardBack' + tempchairid].active = false
                    this['handCard' + tempchairid].active = true
                }

                this.playMoPaiAni = false
                //this.showAllHuaInfo()// 	显示玩家花的数量
            }
            actionindex++
        }.bind(this)

        let changecard = function () {
            for (let tempchairid = 0; tempchairid < GameLogic.Instance().MAX_SEAT_NUM; tempchairid++) {
                this['handCardBack' + tempchairid].active = true
                this['handCard' + tempchairid].active = false
            }

            let chairId = 0
            for (let i = 1; i <= handCardsNum; i++) {
                let cardNode = this['handCard' + chairId].getChildByName(i.toString())
                this.setCardNodeValue(cardNode, cardNode.cardValue, true)
            }
        }.bind(this)

        let actiontable = []
        for (let i = 0; i < showcardnum; i++) {
            actiontable.push(cc.callFunc(showcard))
            if (!GameLogic.Instance().gamescene.isTopSpeed) { // 极速模式
                actiontable.push(cc.delayTime(0.5))
            }
        }
        actiontable.push(cc.callFunc(changecard))
        actiontable.push(cc.delayTime(0.5))
        actiontable.push(cc.callFunc(showcard))
        this.node.runAction(cc.sequence(actiontable))
    }

    putCard(cardNode) {
        if (!GameLogic.Instance().gamescene.bMyTurn) {
            return
        }

        this.touchCardNode = cardNode
        this.curSelectedCardNode = null
        this.doubleClick = false
        this.unTipMaskCard()
        GameLogic.Instance().gamescene.putCard(cardNode.cardValue)
    }

    playPutCardAni(chairId, value) {
        
        if (chairId == 0) {
            if (this.touchCardNode) {
                this.addPutCard(chairId, value, this.touchCardNode.position)
                this.touchCardNode.y = this.basePosY
                this.touchCardNode.active = false

                let cardNode = this.getCurCardNodeHand(chairId)
                cardNode.active = false
                if (cardNode != this.touchCardNode) {
                    this.moveHandCardsAfterChuPai(this.touchCardNode)
                    this.touchCardNode = null
                }
            }
        } else {
            let cardNode = this.getCurCardNodeHand(chairId)
            cardNode.active = false
            this.addPutCard(chairId, value, cardNode.position)
        }

        GameLogic.Instance().playSound('audio_throw')

        this.showBigPutCard(chairId, value)
    }

    showBigPutCard(chairId, cardvalue) {        
        
        this["putCardPos" + chairId].active = true
        this.setCardNodeValue(this["putCardPos" + chairId], cardvalue)
        let actionList = []		
        

        actionList[actionList.length] = cc.delayTime(1)
        actionList[actionList.length] = cc.callFunc(() => {
            this["putCardPos" + chairId].active = false
        })
        this["putCardPos" + chairId].runAction(cc.sequence(actionList))
        
    }

    addPutCard(chairId, value, beganPos) {
        let cardNode = null
        for (const i of this.getPutCardArea(chairId)) {
            cardNode = this['putCardArea' + chairId].getChildByName(i.toString())
            if (cardNode.active) {
                cardNode = null
            } else {
                break
            }
        }

        if (!cardNode) {
            return
        }

        this.setCardNodeValue(cardNode, value, false)

        this.playPutPaiAni = true
        let funcEnd = function () {
            this.playPutPaiAni = false

            let moveBy = cc.moveBy(0.8, cc.v2(0, 10))
            this.nodePutCardArrow.parent = cardNode
            this.nodePutCardArrow.y = 40
            this.nodePutCardArrow.active = true
            this.nodePutCardArrow.stopAllActions()
            this.nodePutCardArrow.runAction(cc.repeatForever(cc.sequence(moveBy, moveBy.reverse())))
        }.bind(this)

        let actions = []
        if (!GameLogic.Instance().gamescene.isTopSpeed) {
            actions.push(cc.moveTo(0.1, cardNode.position))
            cardNode.position = beganPos
        }
        actions.push(cc.callFunc(funcEnd))
        cardNode.active = true
        cardNode.stopAllActions()
        cardNode.runAction(actions.length == 1 ? actions[0] : cc.sequence(actions))
    }

    moveHandCardsAfterChuPai(chuCardNode) {
        let curCradNode = this.getCurCardNodeHand(0)
        if (this.moveHandCards || curCradNode.cardValue == null || chuCardNode.cardValue == null) {
            return
        }

        this.moveHandCards = true
        let moveCurCard = function (moveToNode) {
            moveToNode.zIndex = this.inputCardZorder++
            this.setCardNodeValue(moveToNode, curCradNode.cardValue, true)

            // 极速模式
            if (GameLogic.Instance().gamescene.isTopSpeed) {
                moveToNode.position = moveToNode.basePos
                this.moveHandCards = false
                return
            }

            moveToNode.position = curCradNode.basePos

            let pos = cc.v2(0, 50)
            let moveTo1 = cc.moveTo(0.2, moveToNode.position.add(pos))
            let moveTo2 = cc.moveTo(0.5, moveToNode.basePos.add(pos)).easing(cc.easeExponentialInOut())
            let moveTo3 = cc.moveTo(0.2, moveToNode.basePos)
            let moveEnd = cc.callFunc(() => {
                this.moveHandCards = false
            })

            moveToNode.stopAllActions()
            moveToNode.runAction(cc.sequence(moveTo1, moveTo2, moveTo3, moveEnd))
        }.bind(this)

        let moveCard = function (nextCardNode, cardNode) {
            nextCardNode.position = cardNode.basePos
            this.setCardNodeValue(nextCardNode, cardNode.cardValue, true)

            // 极速模式
            if (GameLogic.Instance().gamescene.isTopSpeed) {
                nextCardNode.position = nextCardNode.basePos
                return
            }

            nextCardNode.runAction(cc.moveTo(0.2, nextCardNode.basePos))
        }.bind(this)

        // let bCurJin = this.checkJinPai(curCradNode)
        let moveToNode = chuCardNode
        for (let i = chuCardNode.index - 1; i >= 0; i--) {
            let cardNode = this.handCardList[i]
            // let bNodeJin = this.checkJinPai(cardNode)

            // let bmove = false
            if (35 == cardNode.cardValue) {
            /*if (bCurJin) {
                if (bNodeJin) {
                    if (cardNode.cardValue > curCradNode.cardValue) {
                        bmove = true
                    }
                } else {
                    bmove = true
                }
            } else if (bNodeJin) {*/
            } else if (cardNode.cardValue > curCradNode.cardValue) {
                /*bmove = true
            }

            if (bmove) {*/
                moveCard(this.handCardList[i + 1], cardNode)
                moveToNode = cardNode
            }
        }
        for (let i = chuCardNode.index + 1; i < this.handCardList.length; i++) {
            let cardNode = this.handCardList[i]
            // let bNodeJin = this.checkJinPai(cardNode)

            /*let bmove = false
            if (bCurJin) {
                if (bNodeJin) {
                    if (cardNode.cardValue < curCradNode.cardValue) {
                        bmove = true
                    }
                }
            } else if (bNodeJin) {
                bmove = true
            } else */if (cardNode.cardValue < curCradNode.cardValue) {
                /*bmove = true
            }

            if (bmove) {*/
                moveCard(this.handCardList[i - 1], cardNode)
                moveToNode = cardNode
            }
        }

        moveCurCard(moveToNode)
    }

    clearHuaCards() {
        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {                
            this["nodeBuHua" + chairId].active = false
            this["labelBuHuaNum" + chairId].$Label.string = 0
        }
    }

    showAllHuaInfo() {
		if (true) {
			cc.log("TODO showAllHuaInfo")
			return
		}
        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {
            this['nodeHuaInfo' + chairId].active = true
        }
    }

    playBuHuaAni(chairId, bAction = true) {

        this.huaCardsNum[chairId]++

        let callFunc = () => {
            this.showBuHua(chairId)
        }

        if (bAction) {
                
            switch (chairId) {
                case 0:
                    this["sptBuHuaIcon" + chairId].x = 700
                    break;
                case 1:
                    this["sptBuHuaIcon" + chairId].y = 500
                    break;
                case 2:
                    this["sptBuHuaIcon" + chairId].x = -700
                    break;
                case 3:
                    this["sptBuHuaIcon" + chairId].y = 500
                    break;                    
                default:
                    break;
            }
            
            this["sptBuHuaIcon" + chairId].stopAllActions()
            
            let actionList = []
            actionList[actionList.length] = cc.moveTo(0.5, cc.v2(0, 0))
            actionList[actionList.length] = cc.callFunc(() => {
                callFunc()
            })
            this["sptBuHuaIcon" + chairId].runAction(cc.sequence(actionList))
        }else{
            callFunc()
        }

        
    }

    clearBuHua(chairId) {
        this.huaCardsNum[chairId] = 0
        this["labelBuHuaNum" + chairId].$Label.string = this.huaCardsNum[chairId]
    }

    showBuHua(chairId, cardValue?, cardNode?) {
        this["nodeBuHua" + chairId].active = true
        this["labelBuHuaNum" + chairId].$Label.string = this.huaCardsNum[chairId]
    }

    showJinPai(value) {
        this.setCardNodeValue(this.nodeJinPai, value, false)
    }

    getHandCardNum(chairId) {		
		return this.handCardsNum
    }

	getTabHandCardPos(chairid, num) {
		let diss = this.handCardsNum - num - 1
		let tab = []
		for (let i = 1; i <= num; i++) {
			tab.push(diss + i)
		}

		return tab
	}

    getAllPutCardArea(chairId) {
        return this.getPutCardAreaTab(chairId, 2)
    }

    getPutCardArea(chairId) {
        if (!this.tabPutCardArea[chairId]) {
            this.tabPutCardArea[chairId] = this.getPutCardAreaTab(chairId, GameLogic.Instance().MAX_PLAYER_NUM)
        }

        return this.tabPutCardArea[chairId]
    }

    getPutCardAreaTab(chairId, playernum) {
		let tabs = []
		
		for (let i = 0; i < 30; i++) {
	    	tabs[tabs.length] = (2-Math.floor((i)/10))*10 + (i)%10 + 1;
		}

        return tabs
    }

    getCurCardNodeHand(chairId) {
        return this.getCurCardNode(chairId, 'handCard')
    }

    getCurCardNodeFront(chairId) {
        return this.getCurCardNode(chairId, 'handCardFront')
    }

    getCurCardNode(chairId, name) {
        let handCard = this[name + chairId]
        return handCard.getChildByName(this.handCardsNum.toString())
    }

    checkJinPai(cardNode) {
        return GameLogic.Instance().gamescene.IsNiao(cardNode.cardValue)
    }

    setLeftCardVisible(cardNode, isVisible) {
        cardNode.active = true
        cardNode.getChildByName('bg').active = isVisible
        cardNode.getChildByName('value').active = isVisible
        cardNode.getChildByName('unsee').active = !isVisible
    }

    setCardNodeValue(cardNode, value, isBig = true) {
        this.setCardTexture(cardNode, value, isBig)
        this.setCardJiaoBiao(cardNode, isBig)
        cardNode.active = true
    }

    // 改变牌的文理
    setCardTexture(cardNode, value, isBig) {
        cardNode.cardValue = value
        let path = this.getCardValuePath(value, isBig)
        if (path) {
			cardNode.getChildByName("value").getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("MaJiang.hbermj", path)
        }
    }

    getCardValuePath(value, isBig) {
		if (true) {
			return value
		}
		
        if (value == null || value <= 0) {
            cc.error('CardLayer:getCardValuePath value', value)
            return
        }

        if (isBig) {
            if (value < 10) {
                return 'game_mjd__0' + value
            } else if (value < 20) {
                return 'four_mj_b' + (value + 10)
            } else if (value < 30) {
                return 'four_mj_b' + (value - 10)
            } else if (value < 40) {
                return 'game_mjd__' + (value - 21)
            } else {
                return 'game_mjd__' + (value - 22)
            }
        } else
            if (value < 10) {
                return 'game_mjz__0' + value
            } else if (value < 20) {
                return 'four_mj_m' + (value + 10)
            } else if (value < 30) {
                return 'four_mj_m' + (value - 10)
            } else if (value < 40) {
                return 'game_mjz__' + (value - 21)
            } else {
                return 'game_mjz__' + (value - 22)
            }
    }

    setCardJiaoBiao(cardNode, isBig) {
		if (true) {
			// cc.log("TODO setCardJiaoBiao")
			return
		}
        if (this.checkJinPai(cardNode)) {
            if (cardNode.jiaobiao) {
                cardNode.jiaobiao.active = true
            } else {
                let jiaobiao = new cc.Node()
                jiaobiao.setAnchorPoint(cc.v2(1, 1))
                jiaobiao.addComponent(cc.Sprite)
                if (isBig) {
                    jiaobiao.position = cc.v2(35, 45)
                    GameLogic.Instance().setSpirteFrameLocal(jiaobiao, 'images/DaTing/pic_jin')
                } else {
                    jiaobiao.position = cc.v2(24, 27)
                    GameLogic.Instance().setSpirteFrameLocal(jiaobiao, 'images/DaTing/pic_jin_m')
                }
                cardNode.getChildByName('value').addChild(jiaobiao)
                cardNode.jiaobiao = jiaobiao
            }
        } else {
            if (cardNode.jiaobiao) {
                cardNode.jiaobiao.active = false
            }
        }

        this.setCardJinColor(cardNode)
    }

    setCardJinColor(cardNode) {
        if (this.checkJinPai(cardNode)) {
            if (cardNode.bMask) {
                this.addMaskColor(cardNode, cc.color(173, 167, 109))
            } else {
                this.addMaskColor(cardNode, cc.color(255, 240, 134))
            }
        } else {
            if (cardNode.bMask) {
                this.addMaskColor(cardNode, cc.color(150, 150, 150))
            } else {
                this.addMaskColor(cardNode, cc.color(255, 255, 255))
            }
        }
    }

    addMaskColor(cardNode, ccc) {
        if (cardNode.getChildByName('bg')) {
            cardNode.getChildByName('bg').color = ccc
        }
        cardNode.getChildByName('value').color = ccc
    }

    removeMaskBlue(cardNode) {
        this.addMaskColor(cardNode, cc.color(255, 255, 255))
    }

    addMaskBlue(cardNode) {
        this.addMaskColor(cardNode, cc.color(178, 242, 242))
    }

    // 添加阴影遮罩
    addAllHandCardMask(isCanTouch) {
        for (let i = 1; i <= this.handCardsNum; i++) {
            this.addMask(this.handCard.getChildByName(i.toString()), isCanTouch)
        }
    }

    // 去除阴影遮罩
    removeAllHandCardMask() {
        for (let i = 1; i <= this.handCardsNum; i++) {
            this.removeMask(this.handCard.getChildByName(i.toString()))
        }
    }

    tipMaskCard(value) {
        if (GameLogic.Instance().gamescene.getIsOnTingStatus()) {
            GameLogic.Instance().gamescene.showTingCards(value)
        }
        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {
            //左手牌
            for (let i = 1; i <= this.maxGroupNum; i++) {
                let nodeGroup = this['node_showOpCards' + chairId].getChildByName('group' + i)
                if (nodeGroup.active) {
                    for (let j = 1; j <= 4; j++) {
                        let cardNode = nodeGroup.getChildByName('card' + j)
                        if (cardNode.active && cardNode.cardValue == value) {
                            this.addMask(cardNode)
                        }
                    }
                } else {
                    break
                }
            }

            //出牌区域
            let putTabs = this.getPutCardArea(chairId)
            for (const i of putTabs) {
                let cardNode = this['putCardArea' + chairId].getChildByName(i.toString())
                if (cardNode.active && cardNode.cardValue == value) {
                    this.addMask(cardNode)
                }
            }
        }
    }

    unTipMaskCard() {
        for (let chairId = 0; chairId < GameLogic.Instance().MAX_SEAT_NUM; chairId++) {

            //左手牌
            for (let i = 1; i <= this.maxGroupNum; i++) {
                let nodeGroup = this['node_showOpCards' + chairId].getChildByName('group' + i)
                for (let j = 1; j <= 4; j++) {
                    let cardNode = nodeGroup.getChildByName('card' + j)
                    this.removeMask(cardNode)
                }
            }

            //出牌区域
            let putTabs = this.getPutCardArea(chairId)
            for (const i of putTabs) {
                let cardNode = this['putCardArea' + chairId].getChildByName(i.toString())
                this.removeMask(cardNode)
            }
        }
    }

    addNoLimitMasks(vecLimitCards, isOnTing?) {
        this.removeAllHandCardMask()
        for (let i = 1; i <= this.handCardsNum; i++) {
            let cardNode = this.handCard.getChildByName(i.toString())
            if (cardNode.active) {
                let find = true
                for (const v of vecLimitCards) {
                    if (v == cardNode.cardValue) {
                        find = false
                        break
                    }
                }
                if (find) {
                    this.addMask(cardNode)
                } else if (isOnTing) {
                    this.removeMask(cardNode)
                }
            }
        }
    }

    addMask(cardNode, isCanTouch) {
        let ccc = cc.color(150, 150, 150)
        if (!cardNode.bMask) {
            cardNode.bMask = true
            this.addMaskColor(cardNode, ccc)
            this.setCardJinColor(cardNode)
        }
        if (cardNode.jiaobiao) {
            cardNode.jiaobiao.color = ccc
        }
        if (!isCanTouch) {
            cardNode.bStopTouch = true
        }
    }

    removeMask(cardNode) {
        let ccc = cc.color(255, 255, 255)
        if (cardNode.bMask) {
            cardNode.bMask = false
            this.addMaskColor(cardNode, ccc)
            this.setCardJinColor(cardNode)
        }
        if (cardNode.jiaobiao) {
            cardNode.jiaobiao.color = ccc
        }
        cardNode.bStopTouch = false
	}
	
	addLaiziIcon(HuPai?) {
		cc.log("TODO addLaiziIcon")
	}

	removeAllTingLogo() {
		cc.log("TODO removeAllTingLogo")
    }
    
    showTipPlayer(chairId = 0) {
        if (chairId == 0) {            
            this.nodeTipPlayer0.active = true
        }
    }
    
    hideTipPlayer(chairId = 0) {
        this.nodeTipPlayer0.active = false
    }

    addTingLogo(cardNode) {
        let jiaobiao = new cc.Node()
        jiaobiao.setAnchorPoint(cc.v2(1, 1))
        let sptLogo = jiaobiao.addComponent(cc.Sprite)
        jiaobiao.position = cc.v2(35, 40)
        BaseFunc.SetFrameTextureLocal(sptLogo.getComponent(cc.Sprite),"moduleHBJxmjRes/images/TongYong/HongSeJiaoBiao")
        cardNode.getChildByName('value').addChild(jiaobiao)
        cardNode.jiaobiao = jiaobiao
        cardNode.isOnTing = true
    }

    refreshTingLogo(tingFanNum) {
        for (let i = 1; i <= this.handCardsNum; i++) {
            let cardNode = this['handCard0'].getChildByName(i.toString())
            if (cardNode.jiaobiao) {
				cardNode.jiaobiao.removeFromParent()
				cardNode.jiaobiao = null
			}
        }

        if (tingFanNum && tingFanNum.length>0) {
            for (let i = 1; i <= this.handCardsNum; i++) {
                let cardNode = this['handCard0'].getChildByName(i.toString())
                if (cardNode !=null && cardNode.cardValue != null) {
                    for (let v of tingFanNum) {
                        if (cardNode.cardValue == v.cPutCard) {
                            this.addTingLogo(cardNode)
                            break
                        }
                    }
                }
            }
        }
    }
}