import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import GameSceneStateController from "./GameSceneStateController.hbermj"
import GameLogic from "./GameLogic.hbermj"
import GamePlayer from "./GamePlayer.hbermj"
import { WizardConfig } from "../moduleLobby/WizardConfig";
import { uploadGameRound, showAwardResultPop, getGameAward, czcEvent, iMessageBox,copyToClipBoard } from "../base/BaseFuncTs";
import CardLayerVSD from "./CardLayer.hbermj";
import { isWeChatGame } from "../gameConfig";
import SceneManager from "../base/baseScene/SceneManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends GameSceneStateController {


    @property()
    thisComponentName:string = "GameScene.hbermj"
    
    @property(GamePlayer)
    players:GamePlayer[] = []
    
    @property(GamePlayer)
    myPlayer:GamePlayer = null
    
    @property(CardLayerVSD)
    CardLayer:CardLayerVSD = null
    
    @property(cc.Prefab)
    prefab_gamePlayer:cc.Prefab = null
    
    @property(cc.Prefab)
    prefab_clock:cc.Prefab = null
    
    @property(cc.Prefab)
    prefab_cardLayer:cc.Prefab = null
	// LIFE-CYCLE CALLBACKS:

	@property(cc.Prefab)
	prefab_privateRoom:cc.Prefab = null
	

	@property()	
	GAME_MODEL:number = -1 // 1, 高效模式；2，休闲模式
	cardValue_laizi:number = -1
	


	tempHuaCards = []
	tempHandCards = []
	tempLeftCards = []
	tempDisplayCards = []
	tempCurHandCard = []
	curHuaCard = []
	chatHistory = []

	fakeRedPacketNum:number = 0
	soundId:number = 0
	jinpai:number = 0
	curOpcode:number = 0
	cBaoPai:number = 0

	nTaifei:number = 0
	nDiZhu:number = 0

	bFirstKaiJin:boolean = true
	bMyTurn:boolean = false
	bFirstSendCardAni_:boolean = true
	isOnBtnTing:boolean = false
	bManualOperate:boolean = false
	isLiuJu:boolean = false
	bCompletedata:boolean = false

	force_dismiss: boolean = false
	privateInvite: { gameId: number, serverId: number, tableId: number, baseScore: number, inviteCode: number, createTime: number, tableTime: number, flag: number, ownerGuid: number, roomName: string, gameRule: number, gameRule_group: number[], gameJson: string, startGameTime: number, leftTime: number, }
	tableScores: number[] = []
	nJuCount: number = -1;
	bHadStart: boolean = false;

	vecTing = []
	vecTingHu = []
	vecGangInfo = []
	tingFinalCards = []
	tingFanNum = []
	curPrevCard:number = -1
	curSerialID:number = -1
	nBanker:number = -1

	CHUPAI:number = Math.pow(2, 0);		//出牌
	OXX:number = Math.pow(2, 1);    	//oxx形式的吃牌
	XOX:number = Math.pow(2, 2);		//xox形式的吃牌
	XXO:number = Math.pow(2, 3);		//xxo形式的吃牌
	CHIPAI	= (this.OXX + this.XOX + this.XXO);		//所有吃牌形式
	PENGPAI:number = Math.pow(2, 4);			//碰牌
	MINGANG:number = Math.pow(2, 5);			//明杠
	ANGANG:number	= Math.pow(2, 6);				//暗杠
	BUGANG:number	= Math.pow(2, 7);				//补杠
	GANGPAI = (this.MINGANG + this.ANGANG + this.BUGANG);		//所有杠牌形式
	ZIMO:number = Math.pow(2, 8);				//自摸
	FANGPAO:number = Math.pow(2, 9);			//放炮
	HUPAI = (this.ZIMO + this.FANGPAO);	//所有胡牌形式
	TIANHU:number	= Math.pow(2, 10);			//天胡
	DIHU:number = Math.pow(2, 11);
	GIVEUP:number	= Math.pow(2, 12);			//放弃操作
	MOPAI:number = Math.pow(2, 13);				//摸牌
	BACKMOPAI:number = Math.pow(2, 14);			//后面摸牌
	MOHUN:number = Math.pow(2, 15);
	BUHUA:number = Math.pow(2, 16);
	TINGPAI:number = Math.pow(2, 17);
	PRIOPERA = (this.CHIPAI + this.PENGPAI + this.GANGPAI + this.TINGPAI + this.HUPAI);  	//可能的优先操作
	LIUJU:number = Math.pow(2, 18);
	DOUBLE:number = Math.pow(2, 19);

    zOrder = {
        baseOrder: 0, //最底层
        playOrder: 1, //玩家显示层
        taskOrder: 150, //刷任务层
        baseCardOrder: 300, //基本麻将显示层
        autoOrder: 900,//350, //托管显示层
        clockOrder: 400, //时钟层
        operateOrder: 500, //吃碰杠操作层
        opCardOrder: 501, //吃杠听选牌显示层
        menulistOrder: 600, //菜单显示层
        aniOrder: 700, //动画层
        tipOrder: 900, //提示层
        popOrder: 1100, //弹框层
        resultOrder: 1200, //结算层
        nodeJieSuan: 1200, //结算层
        shareOrder: 1400, //分享层
        tempTipOrder: 1500,
        privateResultOrder: 9900, //结算层
        nodeRedPacket: 9900, //结算层
    }

    // onLoad () {}
    __bindButtonHandler() {

		BaseFunc.AddClickEvent(this.btnRedPacketDetail, this.node, this.thisComponentName, "onPressRedPacketDetail", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorGuo, this.node, this.thisComponentName, "onPressGuo", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorTing, this.node, this.thisComponentName, "onPressTing", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorHu, this.node, this.thisComponentName, "onPressHu", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorGang, this.node, this.thisComponentName, "onPressGang", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorPeng, this.node, this.thisComponentName, "onPressPeng", 0, 3);
		BaseFunc.AddClickEvent(this.btnOperatorChi, this.node, this.thisComponentName, "onPressChi", 0, 3);
		BaseFunc.AddClickEvent(this.btnAuto, this.node, this.thisComponentName, "onPressCancelAuto", 0, 3);
		BaseFunc.AddClickEvent(this.btnReady, this.node, this.thisComponentName, "onPressReady", 0, 3);
		BaseFunc.AddClickEvent(this.btnChangeTable, this.node, this.thisComponentName, "onPressChangeTable", 0, 3);
		BaseFunc.AddClickEvent(this.btnExit, this.node, this.thisComponentName, "onPressExit", 0, 3);
		BaseFunc.AddClickEvent(this.btnExChange, this.node, this.thisComponentName, "onPressExchange", 0, 3);
		BaseFunc.AddClickEvent(this.btnShop, this.node, this.thisComponentName, "onPressShop", 0, 3);
		BaseFunc.AddClickEvent(this.btnHuTip, this.node, this.thisComponentName, "onPressHuTip", 0, 3);
		BaseFunc.AddClickEvent(this.btnWanFaTip, this.node, this.thisComponentName, "onPressWanFaTip", 0, 3);
		BaseFunc.AddClickEvent(this.btnNewUserSign, this.node, this.thisComponentName, "onPressNewUserSign", 0, 3);
		BaseFunc.AddClickEvent(this["btnRedPacket88YuanDetail"], this.node, this.thisComponentName, "onPressRedPacket88YuanDetail", 0, 3);
		
	}

    start () {
		
	}
	
	
	socket_closed(event) {
		let socketlink = GameLogic.Instance().serverInfo.serverAddr + ":" + (GameLogic.Instance().serverInfo.serverPort + 1)
		if (event && event.socket && event.socket.url && event.socket.url == socketlink) {			
			GameLogic.Instance().LeaveGameScene()
		}
	}

    
    onOpenScene() {
		czcEvent("二人麻将", "进入游戏", "显示游戏界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        cc.log("GameScene onOpenScene");
        
		GameLogic.Instance().setGame(this)
		
		GameLogic.Instance().audioManager.playBackground()
		
		this.setDiZhu(GameLogic.Instance().serverInfo.baseBet)
		
		if(GameLogic.Instance().henry_debug){
			this.setDebug()
			this.nodeDebug.active = true
		}else{
			this.nodeDebug.active = false
        }
		
		this.mahjong_cb_login_req_sender()

        this.initPlayer()

		this.clock = GameLogic.Instance().addPrefab(this.prefab_clock, this.nodeClockLayer).getComponent("GameClock.hbermj")
		
		this.showPrivateRoom()

        this.initCardLayer()

		this.doStateChangeInit()

		this.showContinue(false)

		this.showChangCiName()

		this.showChangCiInfo()
		
		// this.btnNewUserSign.active = DataManager.CommonData["NewUserSgin"].day <= 7
		
		this["spt88YuanMainIcon0"].active = false
		this["spt88YuanMainIcon1"].active = false
		this["spt88YuanMainIcon2"].active = false
		if(GameLogic.Instance().getRedPacketTableType() == 21) {
			this["spt88YuanMainIcon0"].active = true
		}else if(GameLogic.Instance().getRedPacketTableType() == 22) {
			this["spt88YuanMainIcon1"].active = true
		}else if(GameLogic.Instance().getRedPacketTableType() == 23) {
			this["spt88YuanMainIcon2"].active = true
			
		}
		this.GameScenePlus88Yuan.active = false

		this.refreshNewUserQMoneyTip()

		let callback_refresh = (res) => {
			this.refreshNewUserQMoneyTip(res)
		}
		getGameAward(null, 1, callback_refresh)
		
		if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {   
			this.btnShop.active = false             
		}

		if (!GameLogic.Instance().isRedPacketTable()) {
			this.nodeRedPacket.active = false
		}

		czcEvent("二人麻将", "加载2", "加载完成 " + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
	}
	
	refreshNewUserQMoneyTip(res?) {

		this.labelNewUserQMoneyMsg1.active = false
		this.labelNewUserQMoneyMsg2.active = false

		if(DataManager.CommonData["morrow"] > 2) {
			return
		}

		if (!!res && typeof(res.gameNum) != "undefined") {
			if (res.gameNum >= 20) {
				this.labelNewUserQMoneyMsg2.active = true				
			}else{
				this.labelNewUserQMoneyMsg1.active = true				
			}
		}
	}
    
    onEnterInit() {
        cc.log("TODO onEnterInit")
        
        this.initRedPacket()
        
		this.resetGameData()        
    }

    onEnterStartGame() {
        cc.log("TODO onEnterStartGame")

		
		for (let player of this.players) {
			if (!player.isAbscence()) {
				player.doStateChangeStartGame()
			}
		}
		
		for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {			
			this.CardLayer["nodeBuHua" + i].active = true
		}

		GameLogic.Instance().playSound('audio_start')
		
		this.hideAniWait()
		
		this.showContinue(false)
	
		this.nodeClockLayer.active = true

		this.hideChangCiInfo()

		if (GameLogic.Instance().isPrivateRoom() && this.nodePriteInfo) {
			this.btn_ready.active = false
			this.btn_weixin.active = false
		}
	}
	
    onEnterEndGame() {
		cc.log("TODO onEnterEndGame")
		
		for (let player of this.players) {
			if (!player.isAbscence()) {
				player.doStateChangeEndGame()
			}
		}

		this.showAuto(false)
	}
	

    onEnterReInit() {
		cc.log("TODO onEnterReInit")
		
		this.resetGameData() 
		
		this.CardLayer.reInit()
    }

    resetGameData() {
        this.tempHuaCards = []
        this.tempHandCards = []
        this.tempLeftCards = []
        this.tempDisplayCards = []
        this.tempCurHandCard = []
        this.curHuaCard = []
		this.chatHistory = []
		this.tingFinalCards = []
		this.tingFanNum = []

        this.soundId = 0
        this.jinpai = 0
        this.curOpcode = 0
        this.bFirstKaiJin = true
        this.bMyTurn = false
        this.bFirstSendCardAni_ = true
        this.isOnBtnTing = false
        this.bManualOperate = false
		this.isLiuJu = false
		this.node_operate_popup.active = false
		
		this.nodeClockLayer.active = false
		this.nodeAniOperator.active = false
		
		this.btnHuTip.active = false

		this.CardLayer.hideTipPlayer()
		this.refreshRestCardNum()
	}

    initCardLayer() {
        
		// 出牌界面
		this.CardLayer = this.create_prefab(this.prefab_cardLayer, this.nodeCardLayer).getComponent("CardLayer.hbermj")
		
		this.CardLayer.node.zIndex = this.zOrder.baseCardOrder
    }

    initPlayer() {
		for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
            let nodePlayer = cc.instantiate(this.prefab_gamePlayer) //this['nodeGamePlayer' + i]
            this["nodeGamePlayerPos" + i].addChild(nodePlayer)

            let player = nodePlayer.getComponent("GamePlayer." + GameLogic.Instance().moduleExt)
            
			player.setChairId(i)
			if (!player.isAbscence()) {
				player.doStateChangeLeave()
			}
			this.players.push(player)
		}
		this.myPlayer = this.players[0]
		
		if (GameLogic.Instance().MAX_PLAYER_NUM == 3) {
			this.players[2].setAbsence(true)
		} else if (GameLogic.Instance().MAX_PLAYER_NUM == 2) {
			this.players[1].setAbsence(true)
			this.players[3].setAbsence(true)
		}
		
		GameLogic.Instance().userData.plyBaseData.plyGuid = Number(DataManager.UserData.guid)
		GameLogic.Instance().userData.plyBaseData.nickname = DataManager.UserData.nickname
		GameLogic.Instance().userData.plyBaseData.money = DataManager.UserData.money
		GameLogic.Instance().userData.plyBaseData.headimage = DataManager.UserData.face
		GameLogic.Instance().userData.plyBaseData.sex = DataManager.UserData.sex
		
		this.myPlayer.setUserData(GameLogic.Instance().userData.plyBaseData)
		this.myPlayer.setItemView(365, DataManager.UserData.getItemNum(365))

		
    }

    
	initRedPacket() {		

		this.nodeRedPacketDetail.isShow = false
		this.nodeRedPacketDetail.x = -200
		this.onPressRedPacketDetail()
	}

	refreshRedPacket88YuanInfo(cur, dst) {
		this.progressBar88YuanMin.$ProgressBar.progress = cur/dst
		if(cur == dst) {
			this.sptBar88YuanMax.active = true
			
			let actionList = []
			actionList[actionList.length] = cc.fadeOut(1)
			actionList[actionList.length] = cc.fadeIn(1)			
			this.sptBar88YuanMax.stopAllActions()
			this.sptBar88YuanMax.runAction(cc.repeatForever(cc.sequence(actionList)));
		}else{			
			this.sptBar88YuanMax.active = false
		}
	}

	refreshRedPacketInfo(cur, dst) {
		
		this.progressBarBig.$ProgressBar.progress = cur/dst
		this.progressBarMin.$ProgressBar.progress = cur/dst
		this.labelProgressBig.$Label.string = cur + "/" + dst
		this.labelProgressMin.$Label.string = cur + "/" + dst
		this.labelRedPacketDetail.$Label.string = "再玩" + (dst-cur) +"局可开启"

	}

	onPressRedPacket88YuanDetail() {
		if (GameLogic.Instance().redpacket_88Yuan_info.length == 0) {
			return;
		}
		this.GameScenePlus88Yuan.hasShowed = true
		GameLogic.Instance().showGame88YuanTask()	
	}

    setDebug() {
		this.nodeDebug.active = true
        this.nodeDebug.getComponent("GameDebugLayer.hbermj").setView(this)
	}

	stopScdReloadUserData() {
		cc.log("TODO stopScdReloadUserData")
	}
	
	startScdReloadUserData() {
		cc.log("TODO startScdReloadUserData")
	}

	showChangCiName() {
		let fileName = ""
		switch (GameLogic.Instance().serverInfo.hBMode) {
			case 21:
				fileName = "pic_chuji"
				break;		
			case 22:
				fileName = "pic_zhongji"
				break;	
			case 23:
				fileName = "pic_gaoji"
				break;	
			default:
				fileName = "pic_chuji"
				break;
		}
		this.sptChangCi.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0",  fileName)
	}
	
    refreshRestCardNum(num = -1) {
		if (num > 0) {
			this.nodeRestCardNum.active = true	
			this.labelRestCardNum.$Label.string = num		
		}else{
			this.nodeRestCardNum.active = false
		}
	}

	playDiceAni(vecDices,chairid, bSeatDice?, isGangDice?) {
		cc.log("TODO playDiceAni")
		// this.nodeAniPosCommon.removeAllChildren()

		for (let key in vecDices) {
			let nPoint = vecDices[key]

			let filename 	= "moduleHBErmjRes/images/GameDongHua/shaizidonghua3d"
			let sRect 		= cc.rect(0,0,900,1932)
			let size 		= cc.size(0, 0)
			let offset 		= cc.v2(0, 0)
			let frames 		= []

	        cc.loader.loadRes(filename, function (err, spriteName) {
	            if (err) {
	                console.log(err)
	            }else{
	            	for (let i = 0; i < 9; ++i) {
						size.width = 100
						size.height = 322
						let width = 100
						let height = 322
						let orgPoint = sRect.origin
						let rect = cc.rect(orgPoint.x+((nPoint-1)*9+i)%9*100,orgPoint.y+Math.floor(((nPoint-1)*9+i)/9)%6*322, size.width,size.height)
						frames[i] = new cc.SpriteFrame(spriteName, rect, false, offset, size)  
					}

				    let nodeAni = new cc.Node()
			        let sprite = nodeAni.addComponent(cc.Sprite)
			        sprite.spriteFrame =  DataManager.Instance.getSpriteFrame("GameScene.hbermj", "null")
					nodeAni.parent = this.nodeAniPosCommon
			        let factor = key*2 - 1
					// let range = cc.v2((BaseFunc.Random(30,39)+30)*factor, (BaseFunc.Random(30,39)+60)*factor)
					let range = cc.v2((BaseFunc.Random(0, 9) + 30) * factor + 10, (BaseFunc.Random(0, 9) + 30) * factor + 110)
		        	nodeAni.setPosition(range)
			        let animation = nodeAni.addComponent(cc.Animation)
			        let clip = cc.AnimationClip.createWithSpriteFrames(frames, frames.length)
			        clip.name = "ani_shaizi"
			        clip.wrapMode = cc.WrapMode.Default
					clip.speed = 4
			        animation.addClip(clip)

			        animation.removeFun = () => {
			            nodeAni.runAction(cc.sequence(
			                cc.delayTime(1),
			                cc.fadeOut(0.2),
			                cc.callFunc(() => {
			                	nodeAni.removeFromParent()
			                })
			            ))
			        }
			        animation.on('finished', animation.removeFun, animation)
			        animation.play("ani_shaizi")
	            }
	        }.bind(this))
		}
	}

	removeAllDice() {
		if (this.vecDices) {
			for (let key in this.vecDices) {
				this.vecDices[key].stopAllActions()
				this.vecDices[key].removeFromParent()
			}
		}
		this.vecDices = null
	}
	

	showAniWait() {
		if (GameLogic.Instance().isPrivateRoom()) {
			return
		}
		this.nodeMatchPlayerAni.active = true

		
		let actions = []
		actions[actions.length] = cc.callFunc(() => {
			this.labelMatchPlayer.$Label.string = "正在为您匹配对手:" + (9 - this.labelMatchPlayer.countTime)
			this.labelMatchPlayer.countTime = (++this.labelMatchPlayer.countTime) % 10
			if (this.labelMatchPlayer.countTime == 6) {
				this.showChangeTable(true)
			}		
		})	
		actions[actions.length] = cc.delayTime(1)

		this.labelMatchPlayer.countTime = 0
		this.nodeMatchPlayerAni.stopAllActions()
		this.nodeMatchPlayerAni.runAction(cc.repeatForever(cc.sequence(actions)))
	}

	hideAniWait() {
		this.nodeMatchPlayerAni.active = false
		this.labelMatchPlayer.countTime = 0
		this.nodeMatchPlayerAni.stopAllActions()
	}

	
	onPressReady() {
		GameLogic.Instance().playBtnSoundEffect()
		this.mahjong_cb_ready_req_sender()
	}
	
	onPressChangeTable() {
		GameLogic.Instance().playBtnSoundEffect()
		this.mahjong_cb_change_table_req_sender()
	}
	

	showChangeTable(bValue) {
		if (this.isGameStart()) {
			return
		}

		if (bValue) {
			this.nodeContinue.active = true	
			this.btnReady.active = false
			this.btnChangeTable.active = true			
			this.btnChangeTable.x = 0
		}else{
			this.showContinue(false)
		}
	}
	
	showChangCiInfo() {
		this.lbl_tex_info.$Label.string = (GameLogic.Instance().serverInfo.serverName || "") + " 本场门票" + (GameLogic.Instance().serverInfo.tax || 0) + "金豆"
		
		let winMaxMoney = GameLogic.Instance().serverInfo.winMaxBet * GameLogic.Instance().serverInfo.baseBet

		if (!winMaxMoney || winMaxMoney == 0) {
			this.lbl_fengding_info.$Label.string = "本场次不结算金叶子"
		}else{
			this.lbl_fengding_info.$Label.string = "封顶" + (winMaxMoney || 0) + "金豆"
		}


		this.nodeChangCiInfo.active = true
		let actions = []
		actions[actions.length] = cc.delayTime(0.1)
        actions[actions.length] = cc.fadeTo(0.3, 255)
		this.nodeChangCiInfo.stopAllActions()
		this.nodeChangCiInfo.runAction(cc.sequence(actions))
	}

	hideChangCiInfo(delaytime = 0.4) {

		let actions = []
        actions[actions.length] = cc.delayTime(delaytime)
        actions[actions.length] = cc.fadeTo(0.6, 0)
        actions[actions.length] = cc.callFunc(() => {
			this.nodeChangCiInfo.active = false
		})
		this.nodeChangCiInfo.stopAllActions()
		this.nodeChangCiInfo.runAction(cc.sequence(actions))
		
	}

	showContinue(bValue) {
		this.nodeContinue.active = bValue	
		
		this.btnReady.x = 120
		this.btnChangeTable.x = -120

		this.btnReady.active = bValue
		this.btnChangeTable.active = bValue

		if (GameLogic.Instance().isPrivateRoom()) {
			this.btnReady.active = false
			this.btnChangeTable.active = false
			this.btn_ready.active = bValue
			return
		}
	}	
	
	refreshPlayerData() {
		// 刷新自己的信息
		for (var plyData of GameLogic.Instance().playerData) {
			if (plyData.plyGuid == GameLogic.Instance().userData.plyBaseData.plyGuid) {
				GameLogic.Instance().userData.plyBaseData = plyData
				this.myPlayer.setUserData(plyData)
				break
			}
		}

		// 刷新其他玩家的信息
		for (var plyData of GameLogic.Instance().playerData) {
			if (plyData.plyGuid == GameLogic.Instance().userData.plyBaseData.plyGuid) {
				continue
			}

			if (plyData.chairId > -1) {	
				var player = this.getPlayerByChairId(plyData.chairId)
				if (player) {
					player.setUserData(plyData)
					if (plyData.ready_ == 1) {
						player.showReady()
					}
				}
			}
		}
	}
	////////////////////////////////////////////////////	
	
	mahjong_gc_get_redpackets_88yuan_award_ack(event) {
		let message = event.packet
		cc.log(message)
		
		this.GameScenePlus88Yuan.active = true
		
		GameLogic.Instance().redpacket_88Yuan_info = message
		
		this.refreshRedPacket88YuanInfo(message.curRounds, message.limitRounds)

		if (GameLogic.Instance().redpacket_88Yuan_info.ret == 2) {
			
			let awards = []
			awards[0] = {
				index: 365,
				num: GameLogic.Instance().redpacket_88Yuan_info.nAmount,
			} 
			let initParam = []
			initParam["zorder"] = this.zOrder.nodeRedPacket + 1
			this.myPlayer.setStopRefreshRedPacket(false)
			showAwardResultPop(awards, initParam)
		}

		if (!this.GameScenePlus88Yuan.hasShowed) {			
			this.onPressRedPacket88YuanDetail()			
		} 
	}

	mahjong_gc_get_redpackets_award_ack(event) {
		let message = event.packet
		
		GameLogic.Instance().redpacket_info = message

		this.refreshRedPacketInfo(message.curRounds, message.limitRounds)

		if(message.ret == 1 || message.ret == 2) {
			// 可以领奖
			// 奖励到账
			if(GameLogic.Instance().isSceneExist("GameRedPacketAwardLayer")){
				return
			}

			GameLogic.Instance().redpacket_award_info = message
			let delayTime = 1
			if(message.ret == 2){
				// delayTime = 0
			}
	        let actions = []
			actions[actions.length] = cc.delayTime(delayTime)
	        actions[actions.length] = cc.callFunc(() => {
				if (GameLogic.Instance().redpacket_award_info.ret == 1 || GameLogic.Instance().redpacket_award_info.ret == 2) {							
					let initParam = []
					initParam["redPacketNum"] = this.fakeRedPacketNum
					initParam["callback"] = () => {
						this.myPlayer.setStopRefreshRedPacket(false)
					}			
					GameLogic.Instance().showGameRedPacketAwardLayer(initParam)//因为界面延时显示，传的参数可能会更不上节奏
				}
			})			
			this.nodeActionRedPacket.stopAllActions()
			this.nodeActionRedPacket.runAction(cc.sequence(actions))
			
		}
	}	

	mahjong_bc_ready_not(event) {
		let message = event.packet
		var player = this.getPlayerByGuid(message.plyGuid)
		if (player) {
			if (!player.isAbscence()) {
				player.doStateChangeReady()
			}
		}
		if (GameLogic.Instance().userData.plyBaseData.plyGuid == message.plyGuid) {
			this.hidGameButton()
			this.showContinue(false)
			
			let isFullPlayer = true
			for (var player of this.players) {
				if((player.state == "leave") && !player.isAbscence()){
					isFullPlayer = false
				}
			}
			this.showAniWait()

			// if(!isFullPlayer) {
			// }
		}
	}

	mahjong_ermj_achieve_req(event) {
		cc.log("TODO mahjong_ermj_achieve_req")
		let message = event.packet
	}

	mahjong_ermj_animate_ok_req(event) {
		cc.log("TODO mahjong_ermj_animate_ok_req")
		let message = event.packet
	}

	mahjong_ermj_baopai_change_req(event) {
		cc.log("TODO mahjong_ermj_baopai_change_req")
		let message = event.packet
	}

	mahjong_ermj_baopai_change_rsp(event) {
		cc.log("TODO mahjong_ermj_baopai_change_rsp")
		let message = event.packet
	}

	mahjong_ermj_baopai_not(event) {
		cc.log("TODO mahjong_ermj_baopai_not")
		let message = event.packet
	}

	mahjong_ermj_changecard_not(event) {
		let message = event.packet
		cc.log("mahjong_ermj_changecard_not", message)
		this.checkCompleteDataReq()

		if (this.CardLayer == null) {
			cc.log("if this.view.CardLayer == null")
			return
		}
		var chairid = this.S2C(message.cChairID)

        this.tempHandCards[chairid] = message.vecHandCards
        this.tempLeftCards[chairid] = message.vecLeftCards
        this.tempDisplayCards[chairid] = message.vecDisplayCards
		
		if (this.cardValue_laizi != null && this.cardValue_laizi != -1)	{
			this.tempHandCards[chairid] = this.sortHands(message.vecHandCards)
			message.vecHandCards = this.tempHandCards[chairid]
		}

		this.onGameChangeCardNot(message)
		// 除骰子动画（本来是在第一次发牌时清理，但是如果切入后台后，会造成骰子未清理掉）
		this.removeAllDice()
		// 刷新牌堆
		this.CardLayer.addLaiziIcon(message.cHuPai)
	}

	mahjong_ermj_changecard_not_new(event) {
		cc.log("TODO mahjong_ermj_changecard_not_new")
		let message = event.packet
	}

	mahjong_ermj_Cli_TingType_req(event) {
		cc.log("TODO mahjong_ermj_Cli_TingType_req")
		let message = event.packet
	}

	mahjong_ermj_completedata_not(event) {
		cc.log("TODO mahjong_ermj_completedata_not")
		let message = event.packet

        this.bMyTurn = false
		
		this.bFirstSendCardAni_ = false
		
		this.doStateChangeStartGame()

        // 底注
        this.mahjong_ermj_svr_dizhu_not({packet:{
            opcode: 'mahjong_ermj_svr_dizhu_not',
			nDiZhu: message.nDiZhu,
		}})

        // 剩余牌
        this.refreshRestCardNum(message.nLeftCards)

        // 连庄次数
        // this.cRemainBankerCount = message.cRemainBankerCount

        // 庄家
        this.nBanker = this.S2C(message.cBanker)
        this.players[this.nBanker].setZhuang(true)//, this.cRemainBankerCount)

        // 托管
        this.myPlayer.setAuto(message.cAutoState == 1)
		this.showAuto((message.cAutoState == 1))

        // 听
        if (message.cTing == 1) {
            this.myPlayer.setTing(true)
		}
		
        // 序列id
        this.curSerialID = message.sSerialID
		
        for (const v of message.vecPlyData) {
            this.mahjong_ermj_changecard_not({packet:v})
		}
		
        // 花
        this.CardLayer.clearHuaCards()
		this.CardLayer.showAllHuaInfo()
		
		message.vecHuaNum.forEach((v, k) => {
			for (let i = 0; i < v; i++) {				
				this.CardLayer.playBuHuaAni(this.S2C(k),  false)				
			}
			
		});

		
		let chairid = this.S2C(message.nChuPai)
		
		this.clock.startClientTimer(8, chairid, true)
		
	}

	mahjong_ermj_completedata_not_new(event) {
		cc.log("TODO mahjong_ermj_completedata_not_new")
		let message = event.packet
		
		this.bCompletedata = true

		this.tableScores = message.vecFakeScores
		this.mahjong_ermj_completedata_not(event)
	}

	mahjong_ermj_completedata_req(event) {
		cc.log("TODO mahjong_ermj_completedata_req")
		let message = event.packet
	}

	mahjong_ermj_dice_not(event) {
		cc.log("TODO mahjong_ermj_dice_not")
		let message = event.packet
		
		this.bCompletedata = true
		
        this.nBanker = this.S2C(message.cBanker)
		let vecDice = message.vecDice;
		this.playDiceAni(vecDice, this.nBanker);
		GameLogic.Instance().playSound("audio_dice");

		this.doStateChangeStartGame()
	}

	mahjong_ermj_gameresult_not(event) {
		czcEvent("二人麻将", "游戏2", "显示游戏结算界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_ermj_gameresult_not")
		let message = event.packet
	}

	mahjong_ermj_gameresult_not_jj(event) {
		czcEvent("二人麻将", "游戏2", "显示游戏结算界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		let message = event.packet
		
		this.clock.unscheduleClientTimer()

		if (this.isGameStart()) {			
			this.doStateChangeEndGame()
		}
		
		let callback_refresh = (res) => {
			this.refreshNewUserQMoneyTip(res)
		}
		getGameAward(this.zOrder.nodeJieSuan + 1, 0, callback_refresh)
		
		this.myPlayer.setStopRefreshRedPacket(true)

		this.fakeRedPacketNum = GameLogic.Instance().userProperties[GameLogic.Instance().HONGBAO_GOLD_TICKET]

		message.taifei = this.nTaifei
		message.dizhu = this.nDiZhu

		uploadGameRound()

		let actions = []		
		actions[actions.length] = cc.delayTime(1)	
		actions[actions.length] = cc.callFunc(() => {
			GameLogic.Instance().showGameResultLayer(message)
		})		
		this.nodeActionResult.stopAllActions();
		this.nodeActionResult.runAction(cc.sequence(actions))	
		
	}

	mahjong_ermj_gc_clienttimer_not(event) {
		cc.log("TODO mahjong_ermj_gc_clienttimer_not")
		let message = event.packet
		
        let chairid = this.S2C(message.chairId)
		
		for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; ++i){
			if (chairid == i) {
				this.players[i].showTurn()			
			}else{
				this.players[i].hideTurn()
			}
		}
		
		this.clock.startClientTimer(message.sPeriod / 1000, chairid, true)
	}

	mahjong_ermj_gc_clienttimer_not_new(event) {
		cc.log("TODO mahjong_ermj_gc_clienttimer_not_new")
		let message = event.packet
		message.chairId = message.cChairId
		message.sPeriod = message.nPeriod
		this.mahjong_ermj_gc_clienttimer_not(event)
	}

	mahjong_ermj_gc_task_complete_not(event) {
		cc.log("TODO mahjong_ermj_gc_task_complete_not")
		let message = event.packet
	}

	mahjong_ermj_gc_task_not(event) {
		cc.log("TODO mahjong_ermj_gc_task_not")
		let message = event.packet
	}

	mahjong_ermj_hudouble_ack(event) {
		cc.log("TODO mahjong_ermj_hudouble_ack")
		let message = event.packet
	}

	mahjong_ermj_hudouble_not(event) {
		cc.log("TODO mahjong_ermj_hudouble_not")
		let message = event.packet
	}

	mahjong_ermj_hudouble_req(event) {
		cc.log("TODO mahjong_ermj_hudouble_req")
		let message = event.packet
	}

	mahjong_ermj_hudouble_req_new(event) {
		cc.log("TODO mahjong_ermj_hudouble_req_new")
		let message = event.packet
	}

	mahjong_ermj_hupai_ratio_not(event) {
		cc.log("TODO mahjong_ermj_hupai_ratio_not")
		let message = event.packet
	}

	mahjong_ermj_hupai_ratio_req(event) {
		cc.log("TODO mahjong_ermj_hupai_ratio_req")
		let message = event.packet
	}

	mahjong_ermj_hupai_ratio_rsp(event) {
		cc.log("TODO mahjong_ermj_hupai_ratio_rsp")
		let message = event.packet
	}

	mahjong_ermj_mingpai_ratio_not(event) {
		cc.log("TODO mahjong_ermj_mingpai_ratio_not")
		let message = event.packet
	}

	mahjong_ermj_mingpai_ratio_req(event) {
		cc.log("TODO mahjong_ermj_mingpai_ratio_req")
		let message = event.packet
	}

	mahjong_ermj_operate_not(event) {
		let message = event.packet
		this.checkCompleteDataReq()
		
        this.onGameOperateNot(message, false)

        if ((message.nOpcode & (this.MOPAI + this.BACKMOPAI)) > 0) {
            this.refreshRestCardNum(message.cWallCardNum)
        }

        if ((message.nOpcode & this.LIUJU) > 0) {
            this.isLiuJu = true
        }

        if ((message.nOpcode & this.TINGPAI) > 0) {
            let player = this.getPlayerByChairId(message.cChairID)
            if (player) {
                player.setTing(true)
            }
        }
	}

	mahjong_ermj_playcard_req(event) {
		cc.log("TODO mahjong_ermj_playcard_req")
		let message = event.packet
		
		this.checkCompleteDataReq()
		
        this.vecTing = message.vecTingPutCards
		this.vecTingHu = message.vecTingHuCards		
        this.curOpcode = message.nOpcode
        this.curPrevCard = message.cPrevCard
		this.curSerialID = message.sSerialID
		this.vecGangInfo = message.vecGangInfo

        if ((this.curOpcode & this.PRIOPERA) > 0) {
            if (this.myPlayer.getAuto()) {

            } else {
                this.showOperateMenu(true, this.curOpcode)
            }
		} 
		
		if ((this.curOpcode & this.CHUPAI) > 0) {
			this.bMyTurn = true
			if (this.myPlayer.getTing()) {
				
			}else{
				this.CardLayer.removeAllHandCardMask()
			}
            if (message.vecLimitChuCards && message.vecLimitChuCards.length > 0) {
                this.CardLayer.addNoLimitMasks(message.vecLimitChuCards)
            }
        }
	}

	mahjong_ermj_playcard_req_new(event) {
		cc.log("TODO mahjong_ermj_playcard_req_new")
		this.mahjong_ermj_playcard_req(event)
	}

	mahjong_ermj_readyting_not(event) {
		cc.log("TODO mahjong_ermj_readyting_not")
		let message = event.packet
	}

	mahjong_ermj_robot_not(event) {
		cc.log("TODO mahjong_ermj_robot_not")
		let message = event.packet
	}

	mahjong_ermj_robot_req(event) {
		cc.log("TODO mahjong_ermj_robot_req")
		let message = event.packet
	}

	mahjong_ermj_Svr_Auto_Not(event) {
		cc.log("TODO mahjong_ermj_Svr_Auto_Not")
		let message = event.packet

        let player = this.getPlayerByChairId(message.cChairID)
        if (player) {
            player.setAuto(message.cAuto == 1)
        }

        if (player == this.myPlayer) {
			this.showAuto(message.cAuto == 1)
        }

	}

	mahjong_ermj_svr_dizhu_not(event) {
		cc.log("TODO mahjong_ermj_svr_dizhu_not")
		let message = event.packet
		
		this.nDiZhu = message.nDiZhu;
		this.nDiZhu = Math.abs(this.nDiZhu)

		this.labelDiZhu.$Label.string = this.nDiZhu
	}

	mahjong_ermj_taifei_not(event) {
		czcEvent("二人麻将", "游戏1", "游戏开始" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_ermj_taifei_not")
		let message = event.packet
		
		this.nTaifei = message.nValue

		this.doStateChangeStartGame()
	}

	mahjong_ermj_task_change_req(event) {
		cc.log("TODO mahjong_ermj_task_change_req")
		let message = event.packet
	}

	mahjong_ermj_task_change_rsp(event) {
		cc.log("TODO mahjong_ermj_task_change_rsp")
		let message = event.packet
	}

	mahjong_ermj_task_complete_not(event) {
		cc.log("TODO mahjong_ermj_task_complete_not")
		let message = event.packet
	}

	mahjong_ermj_task_not(event) {
		cc.log("TODO mahjong_ermj_task_not")
		let message = event.packet
	}

	mahjong_ermj_tingcards_not(event) {
		cc.log("TODO mahjong_ermj_tingcards_not")
		let message = event.packet
		
		this.tingFinalCards = message.vecCards

		this.btnHuTip.active = true
		this.CardLayer.showTipPlayer()
		this.CardLayer.addAllHandCardMask(false)
	}

	mahjong_ermj_tingfan_not(event) {
		cc.log("TODO mahjong_ermj_tingfan_not")
		let message = event.packet
		
		this.tingFanNum = message.vecTingFan

	}

	mahjong_ermj_visi_compdata_not(event) {
		cc.log("TODO mahjong_ermj_visi_compdata_not")
		let message = event.packet
	}

	mahjong_ermj_visi_compdata_req(event) {
		cc.log("TODO mahjong_ermj_visi_compdata_req")
		let message = event.packet
	}

	mahjong_ermj_winstreak_req(event) {
		cc.log("TODO mahjong_ermj_winstreak_req")
		let message = event.packet
	}

	mahjong_ermj_winstreak_rsp(event) {
		cc.log("TODO mahjong_ermj_winstreak_rsp")
		let message = event.packet
	}


	mahjong_gc_update_player_tokenmoney_not(event) {
		let message = event.packet
		let chairid = this.S2C(message.plyChairid)
		message.itemInfo.forEach(v => {
			this.players[chairid].setItemView(v.nItemIndex, v.nItemNum)
		});
	}	
	
	mahjong_bc_ply_leave_not(event) {
		let message = event.packet
		// 游戏中玩家不算离桌
		if (this.isGameStart() || GameLogic.Instance().isPrivateRoom()) {
			return
		}

		let player = this.getPlayerByGuid(message.plyGuid)
		if (player) {
			player.clearPlayer()
		}

		if (GameLogic.Instance().isPrivateRoom()) {
			this.showPrivateRoomButton()
		}
	}

	mahjong_bc_leave_table_ack(event) {
		let message = event.packet
		
		if (message.ret == -2) {
			GameLogic.Instance().MessageBox('游戏中不能退出')
		}else if (message.ret == -3) {	
			//游戏币不足
			GameLogic.Instance().checkMoneyOutOfRange()
		}else if (message.ret == -4) {				
			for (let i = 1; i < GameLogic.Instance().MAX_SEAT_NUM; ++i){
				this.players[i].clearPlayer()
			}
		}else if (message.ret == -5) {
			GameLogic.Instance().LeaveGameScene()
			GameLogic.Instance().MessageBox(cc.js.formatStr('你被%s玩家踢出房间', message.plyNickname))
		}else if (GameLogic.Instance().isKeepInGameTable()) {
			cc.log("keep in game")
		}else{
			czcEvent("二人麻将", "离桌2", "离桌请求完成" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			GameLogic.Instance().LeaveGameScene()
		}
	}

	// 其他玩家进桌
	mahjong_bc_ply_join_not(event) {
		let message = event.packet

		if (message.plyData.plyGuid == GameLogic.Instance().userData.plyBaseData.plyGuid) {
			// 刷新自己的信息
			if (message.plyData.plyGuid != this.myPlayer.getPlyData().plyGuid) {
				this.myPlayer.setUserData(message.plyData)
            	// this.myPlayer.setUserData(GameLogic.Instance().userData.plyBaseData)
			}
		} else {
			// 刷新其他玩家的信息
			var chair = this.S2C(message.plyData.chairId)
			if (chair) {
				var player = this.players[chair]
				if (player) {
					player.setUserData(message.plyData)
				}
			}
		}

		if (GameLogic.Instance().isPrivateRoom()) {
			this.updatePlayerScore()
		}

		GameLogic.Instance().addPlayerData(message.plyData)

		if (GameLogic.Instance().isPrivateRoom()) {
			this.showPrivateRoomButton()
		}
	}
	
	mahjong_lc_send_user_data_change_not(event) {
		cc.log("mahjong_lc_send_user_data_change_not")
		let message = event.packet
		if (this.myPlayer) {			
			this.myPlayer.setItemView(0, DataManager.UserData.money)
			this.myPlayer.setItemView(365, DataManager.UserData.getItemNum(365))
		}
	}

	mahjong_bc_update_ply_data_not(event) {
		cc.log("mahjong_bc_update_ply_data_not")
		let message = event.packet
		
		var player = this.getPlayerByGuid(message.plyGuid)
		if (player) {
			if (message.upt_type_ == 0) {
				player.setItemView(0, message.amount)
			}
		}
	}

	mahjong_bc_specify_item_update_not(event) {
		let message = event.packet
		
		var player = this.getPlayerByGuid(message.plyGuid)
		if (player) {
			player.setItemView(message.index, message.num)
		}
	}

	mahjong_bc_join_table_ack(event) {
		let message = event.packet

		var ret = message.ret
		if (ret == 0) {
			czcEvent("二人麻将", "进桌2", "游戏进桌成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			// succeed			
			message.tableAttrs.players.forEach(element => {
				GameLogic.Instance().addPlayerData(element)
			});
			this.refreshPlayerData()			
			
			this.showContinue(false)
			if (GameLogic.Instance().isPrivateRoom()) {
				this.updatePlayerScore()
				this.showPrivateRoomButton()
			} else {
				this.mahjong_cb_ready_req_sender()
			}
		} else if(ret == 10) {
			// 需要带入
			// --------------todo
			// GameLogic.Instance().setUsingGameCarryMoney(true)
			// this.proto_cb_setinto_and_seatdown_req_sender(message.tableAttrs.tableId)
		} else {
			czcEvent("二人麻将", "进桌2", "游戏进桌失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			// GameLogic.Instance().closeSocket()
			GameLogic.Instance().LeaveGameScene()

			var info = '服务器连接出错'
			if (ret == -1) { } else if (ret == -3) {
				// 游戏豆不足				
				return
			} else if (ret == -14) {
				if (message.errMsg.indexOf('俱乐部') >= 0) {
					info = message.errMsg
				} else {
					var tipsString = '您的房卡不足'
					GameLogic.Instance().confirmBox({
						msg: tipsString,
						title: '温馨提示',
						buttonCount: 2,
						btnTitle: {
							btnCancel: '去购买',
							btnConfirm: '确定',
							btnConfirmSize: 26
						},
						boxSize: {
							width: 600,
							height: 350
						},
						callbackCancel: function () {
							GameLogic.Instance().showShopScene()
						}
					})
					return
				}
			} else if (message.errMsg.length > 0) {
				info = message.errMsg
			} else if (ret == -2) {
				info = '服务器满'
			} else if (ret == -4) {
				info = '加入密码错误'
			} else if (ret == -5) {
				info = '房间满'
			} else if (ret == -6) {
				info = '比赛场需要先报名'
			} else if (ret == -7) {
				info = '比赛场比赛时间未到或结束'
			} else if (ret == -8) {
				info = '比赛局数已经完成'
			} else if (ret == -9) {
				info = '需要私人房卡才能创建私人房间'
			} else if (ret == -10) {
				var need_money_:any = GameLogic.Instance().serverInfo.maxmoney
				if (need_money_ >= 10000) {
					need_money_ = need_money_ / 10000 + '万'
				}
				info = '温馨提示，您的金币大于' + need_money_ + '，请进入高分场游戏'
			} else if (ret == -11) {
				info = '今天已经输了400万金币咯！休息，休息一下，明天再来！'
			} else if (ret == -12) {
				info = '房间已解散'
			}

			this.MessageBox(info)
		}
	}

	MessageBox(content: string) {
		cc.Canvas.instance.node.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(() => {
				iMessageBox(content)
			})
		))
	}

	mahjong_bc_login_ack(event) {
		cc.log("mahjong_bc_login_ack")
		let message = event.packet

		GameLogic.Instance().userData.plyBaseData = message.plyBaseData
		GameLogic.Instance().userData.plyStatus = message.plyStatus
		let ret = message.ret

		if (ret == 0 || ret == 1 || ret == 2) {
			czcEvent("二人麻将", "登录2", "游戏服务器登录成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			if (GameLogic.Instance().isPrivateRoom()) {
				if (message.plyBaseData.tableId > 0) {
					if (DataManager.CommonData["gameServer"]["pr_info"] == null) {
						DataManager.CommonData["gameServer"]["pr_info"] = {}
					}
					DataManager.CommonData["gameServer"]["pr_info"].pr_tableID = message.plyBaseData.tableId
				}
				if (ret == 0) {
					if (DataManager.CommonData["bReEnterGame"] != true/** && message.plyBaseData.tableId <= 0 */) {
						const pr_info = DataManager.CommonData["gameServer"]["pr_info"]
						if (pr_info != null) {
							if (pr_info.pr_tableID == null) {
								this.mahjong_cb_create_table_req_sender(pr_info)
							} else {
								this.mahjong_cb_join_table_req_sender(pr_info.pr_tableID)
							}
						}
					}
				}
				DataManager.CommonData["bReEnterGame"] = false
			} else {
				if (ret == 0) {
					// this.wizardRedPacket()
					this.mahjong_cb_join_table_req_sender()
				}
			}

			GameLogic.Instance().bEnterInGame = GameLogic.Instance().userData.plyBaseData.tableId > 0

		} else {
			czcEvent("二人麻将", "登录2", "游戏服务器登录失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			GameLogic.Instance().closeSocket()

			var info
			if (message.errorMsg != '') {
				info = message.errorMsg
			}
			if (ret == -2) {
				GameLogic.Instance().reEnterGame(GameLogic.Instance().userData.plyStatus.gameId, GameLogic.Instance().userData.plyStatus.gameServerId, info)
			} else {
				GameLogic.Instance().LeaveGameScene()

				if (!info) {
					if (ret == -1) {
						info = '服务器忙'
					} else if (ret == -3) {
						info = '验证失败'
					} else if (ret == -4) {
						info = '游戏豆不足'
					} else {
						info = '服务器连接出错'
					}
				}
				this.MessageBox(info)
			}
		}
	}

	mahjong_cb_create_table_req_sender(opt) {
		cc.log("mahjong_cb_create_table_req_sender", opt)
		const _opt = Object.assign({
			pr_roomName: "我的房间",
			pr_password: "",
			pr_table_time: 4,
			pr_flag: 0,
			pr_game_rule_: 0,
			pr_game_rule_group_: [],
			pr_game_json_: "",
		}, opt)
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_create_table_req',
			name: _opt.pr_roomName,
			password: _opt.pr_password,
			baseScore: _opt.pr_Score,
			tableTime: _opt.pr_table_time,
			flag: _opt.pr_flag,
			gameRule: _opt.pr_game_rule_,
			initScore: _opt.pr_init_score || 0,
			gameRuleGroup: _opt.pr_game_rule_group_,
			gameJson: _opt.pr_game_json_,
			mode: _opt.pr_mode_ || 0,
			clubUid: opt.pr_club_id_,
		})
	}

	mahjong_bc_create_table_ack(event) {
		this.mahjong_bc_join_table_ack(event)
	}

	mahjong_bc_private_invite_code_not(event) {
		const message = event.packet
		this.privateInvite = message.privateInvite
		this.tableScores = message.tableScores
		if (DataManager.CommonData["gameServer"]["pr_info"] == null) {
			DataManager.CommonData["gameServer"]["pr_info"] = {}
		}
		DataManager.CommonData["gameServer"]["pr_info"].pr_tableID = this.privateInvite.tableId

		DataManager.save("PrivateInviteCode", this.privateInvite.inviteCode)

		this["nodePrivateCode"].active = true
		this["label_room_code"].getComponent(cc.Label).string = "房间号：" + this.privateInvite.inviteCode
		this["btnPrivateZhanJi"].active = true
		this.showPrivateCount()
		this.updatePlayerScore()

		const rule = JSON.parse(this.privateInvite.gameJson)
		const texts: string[] = []
		if (this.privateInvite.baseScore > 0) {
			texts.push("底注:" + this.privateInvite.baseScore + "金豆")
		} else {
			texts.push("底注:" + (-this.privateInvite.baseScore) + "积分")
		}
		this["label_private_rule"].getComponent(cc.Label).string = texts.join(" ")
	}

	////////////////////
	
	checkCompleteDataReq() {
		if (this.bCompletedata == false) {
			this.mahjong_mj_completedata_req_sender()
		}
	}

	mahjong_mj_completedata_req_sender() {
		cc.log("TODO mahjong_mj_completedata_req_sender")
	}

	mahjong_cb_login_req_sender() {
		czcEvent("二人麻将", "登录1", "游戏服务器登录请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		GameLogic.Instance().sendMessage({
			plyTicket: DataManager.UserData.ticket,
			opcode: "mahjong_cb_login_req",
			extParam: "",
			version: 1498492800,
			plyNickname: DataManager.UserData.nickname,
			mainGameId: 1237,
			gameGroup: 0,
			plyGuid: DataManager.UserData.guid,
		})
	}
	
	//
	mahjong_cb_change_table_req_sender() {
		if (GameLogic.Instance().checkMoneyOutOfRange()) {
			this.showContinue(true)
			return
		}
		
		if (this.isGameStart()) {
			return
		}
			
		for (let i = 1; i < GameLogic.Instance().MAX_SEAT_NUM; ++i){
			this.players[i].clearPlayer()
		}

		GameLogic.Instance().removeAllPlayerData()
		//策划要求的
		this.showAniWait()
		if (!this.nodeRedPacketDetail.isShow) {
			this.onPressRedPacketDetail()
		}

		for (var plyData of GameLogic.Instance().playerData) {
			plyData.chairId = -1
		}

		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_change_table_req',
		})
	}

	mahjong_cb_ready_req_sender() {		
		if (GameLogic.Instance().checkMoneyOutOfRange()) {
			if (GameLogic.Instance().isPrivateRoom()) {
				return
			}
			this.showContinue(true)
			return
		}

		this.force_dismiss = false
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_ready_req',
		})
	}


	mahjong_ermj_playcard_ack_sender(nOpcode, cPrevCard, uSerialID) {
        GameLogic.Instance().sendMessage({
            opcode: 'mahjong_ermj_playcard_ack',
            nOpcode: nOpcode,
            cOpCard: cPrevCard,
            sSerialID: uSerialID,
        })
	}

	mahjong_ermj_Cli_Auto_Req_sender(auto, type) {
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_ermj_Cli_Auto_Req',
			cAuto: auto,
			iAutoType: type	
		})
	}

	mahjong_cb_join_table_req_sender(tableId: number = -1) {
		czcEvent("二人麻将", "进桌1", "游戏进桌请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_join_table_req',
			tableId: tableId,
			password: '',
		})
	}
    
	onGameChangeCardNot(message) {
		var chairID = this.S2C(message.cChairID)

		const cHuPai = message.vecHandCards[0] > 0 ? message.cHuPai : 0
		if (this.bFirstSendCardAni_ && chairID != this.myPlayer.chairId && !cHuPai) {
			return
		}

        // 手牌
        this.refreshHandCard(chairID, cHuPai)

        // 左手牌
        this.refreshLeftHandCard(chairID)

        // 牌河
		this.refreshDisplayCard(chairID)
		
				
		// 摸牌动画
		if (this.bFirstSendCardAni_ && chairID == this.myPlayer.chairId) {
			this.bFirstSendCardAni_ = false
			if (!GameLogic.Instance().isInReplay()) {
				this.CardLayer.mopaiAnimation()
			}
		} else {
            // this.refreshCurCard(chairID)			
		}
	}

    refreshDisplayCard(chairId) {
        this.CardLayer.refreshDisplayCard(chairId, this.tempDisplayCards[chairId])
	}
	
    refreshLeftHandCard(chairId) {
        this.CardLayer.refreshLeftHandCard(chairId, this.tempLeftCards[chairId])
    }
	
    refreshCurCard(chairId, value?, cHuPai?) {
        if (value != null) {
            this.tempCurHandCard[chairId] = value
        }
        if (GameLogic.Instance().isInReplay()) {
            cHuPai = 1
        }

        this.CardLayer.refreshCurCard(chairId, this.tempCurHandCard[chairId], cHuPai)
    }

    refreshHandCard(chairId, cHuPai?) {
        if (GameLogic.Instance().isInReplay()) {
            cHuPai = 1
        }
        this.CardLayer.refreshHandCard(chairId, this.tempHandCards[chairId], cHuPai)
    }
	
    onGameOperateNot(message, manual) {
        let chairId = this.S2C(message.cChairID)

        this.showOperateMenu(false, 0)
        // 其他玩家操作 自己牌变灰
        // if (chairId != 0 && message.nOpcode != this.GIVEUP) {
        //     this.CardLayer.addAllHandCardMask(true)
        // }

        if (message.nOpcode == this.CHUPAI || message.nOpcode == this.TINGPAI) {
            if (chairId == 0) {
                if (this.myPlayer.isAuto) {
                    if (this.bManualOperate) {
                        this.bManualOperate = false
                        return
                    }
                    this.bMyTurn = false
                } else if (this.bManualOperate) {
                    this.bManualOperate = false
                    // 金坎第一次牌不消失问题
                    this.refreshCurCard(chairId, 0)
                    return
                } else {
                    if (manual) {
                        this.bManualOperate = true
                    } else {
                        this.bMyTurn = false
                    }
                }
            } else {
                this.bMyTurn = false
            }
            this.CardLayer.playPutCardAni(chairId, message.cCard)

            // todo
            if (manual == false && chairId == 0) {
            } else {
                this.playSoundSexByChairId('audio_card_' + message.cCard, chairId)
			}
			if (message.nOpcode == this.TINGPAI) {
				this.playOpAnimation(message.nOpcode, chairId)				
			}
        } else if (message.nOpcode == this.BUHUA) {
            this.curHuaCard[chairId] = message.cCard
            this.CardLayer.showAllHuaInfo()
            this.CardLayer.playBuHuaAni(chairId)
            this.playSoundSexByChairId('audio_buhua', chairId)
        } else if (message.nOpcode == this.MOPAI || message.nOpcode == this.BACKMOPAI) {
            if (chairId == 0) {
                this.refreshHandCard(chairId)
            }
            this.refreshCurCard(chairId, message.cCard)
        } else {
            this.playOpAnimation(message.nOpcode, chairId)
            if ((message.nOpcode & this.GANGPAI) > 0) {
                this.refreshCurCard(chairId, 0)
            }else if ((message.nOpcode & this.HUPAI) > 0) {
				this.tempCurHandCard[chairId] = message.cCard
			}
        }

        if ((message.nOpcode & this.PRIOPERA) > 0) {
            GameLogic.Instance().playSound('audio_down')
        }
	}
	
    playSoundByOpcode(opcode, chairId) {
        // chairId 客户端玩家座位号
        let audio_name, ani_name
        if ((opcode & this.FANGPAO) > 0) {
            audio_name = 'audio_hu'
            ani_name = 'audio_down'
        } else if ((opcode & this.ZIMO) > 0) {
            audio_name = 'audio_hu'
            ani_name = 'audio_down'
        } else if ((opcode & this.LIUJU) > 0) {
            audio_name = 'audio_huang'
        } else if ((opcode & this.CHIPAI) > 0) {
            audio_name = 'audio_CHIPAI'
            ani_name = 'audio_down'
        } else if ((opcode & this.PENGPAI) > 0) {
            audio_name = 'audio_PENGPAI'
            ani_name = 'audio_down'
        } else if ((opcode & this.MINGANG) > 0) {
            audio_name = 'audio_GANGPAI'
            ani_name = 'audio_down'
        } else if ((opcode & this.BUGANG) > 0) {
            audio_name = 'audio_GANGPAI'
            ani_name = 'audio_down'
        } else if ((opcode & this.ANGANG) > 0) {
            audio_name = 'audio_ANGANGPAI'
			ani_name = 'audio_down'
		} else if ((opcode & this.TINGPAI) > 0) {
            audio_name = 'audio_TINGPAI'
			ani_name = 'audio_down'
		}

        if (audio_name) {
            this.playSoundSexByChairId(audio_name, chairId)
        }
        if (ani_name) {
            GameLogic.Instance().playSound(ani_name)
        }
	}
	
	getSexSoundByChairId(chairId) {
		let player = this.players[chairId]
		if (player && player.getPlyData().sex == 0) {
			return 1
		}
		return 0
	}

    playSoundSexByChairId(audio_name, chairId) {
		cc.log("TODO playSoundSexByChairId")
		audio_name += this.getSexSoundByChairId(chairId) == 1 ? '_man' : '_woman'
		
        GameLogic.Instance().playSound(audio_name)
	}
	
	clearOpAnimation() {
		if (true) {
			cc.log("TODO clearOpAnimation")
			return
		}
	    if (this.opAniList.length > 0) {
	        for (let i = this.opAniList.length; i>=1; i--) {
	            if (this.opAniList[i]) {
	                this.opAniList[i].removeFromParent()
	            }
	            // table.remove(this.opAniList,i)
	            this.opAniList.pop()
	        }
	    }
	}

    playMaJiangOperatorAni(bg_name, ani_name, chairId, time?) {
		cc.log("playMaJiangOperatorAni", bg_name, ani_name, chairId)
		let parentNode = this["nodeAniPos" + chairId]
		this.nodeAniOperator.active = true

		this.sptOpAniOperator.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0",  ani_name)
		this.sptOpAniShadow.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0",  ani_name)

		this.sptOpAniGuang.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0",  bg_name)	
		
		this.nodeOpAniFront.scale = 2.2

		this.sptOpAniOperator.scale = 1
		// this.sptOpAniOperator.zIndex = 2

		this.sptOpAniShadow.scale = 0.8
		this.sptOpAniShadow.opacity = 0

		this.sptOpAniGuang.scale = 0.8
		this.sptOpAniGuang.opacity = 0
		// this.sptOpAniGuang.zIndex = 1
		// this.sptOpAniGuang.getComponent(cc.Sprite).srcBlendFactor =  0x302;
		// this.sptOpAniGuang.getComponent(cc.Sprite).dstBlendFactor = cc.macro.BlendFactor.ONE

		{
			let actions = []
			actions[actions.length] = cc.fadeTo(0.1, 255)
			actions[actions.length] = cc.scaleTo(0.1, 1)
			actions[actions.length] = cc.delayTime(1)
			actions[actions.length] = cc.fadeTo(0.1, 0)
			actions[actions.length] = cc.callFunc(() => {
				this.nodeAniOperator.active = false
			})

			this.nodeOpAniFront.stopAllActions()
			this.nodeOpAniFront.runAction(cc.sequence(actions))
		}

		{
			let actions = []
			actions[actions.length] = cc.delayTime(0.01)
			actions[actions.length] = cc.spawn(cc.fadeTo(0.1, 255), cc.scaleTo(0.1, 1))
			actions[actions.length] = cc.delayTime(0.5)
			actions[actions.length] = cc.spawn(cc.fadeTo(0.1, 0), cc.scaleTo(0.1, 1))
			this.sptOpAniGuang.stopAllActions()
			this.sptOpAniGuang.runAction(cc.sequence(actions))
		}

		{
			let actions = []
			actions[actions.length] = cc.delayTime(0.22)
			actions[actions.length] = cc.fadeTo(0.01, 200)
			actions[actions.length] = cc.spawn(cc.fadeTo(0.3, 0), cc.scaleTo(0.3, 1.6))
			this.sptOpAniShadow.stopAllActions()
			this.sptOpAniShadow.runAction(cc.sequence(actions))
		}

		
	}
	
    playOpAnimation(nOpcode, chairid) {
		cc.log("GameScene:playOpAnimation 111 opcode = "+nOpcode+" chairid = ",chairid)
        let szOperateFName = ''
        let szOperateBName = ''
        if ((nOpcode & this.CHIPAI) > 0) {
            szOperateFName = "pic_chi_1"
            szOperateBName = "pic_chi_2"
        } else if ((nOpcode & this.PENGPAI) > 0) {
            szOperateFName = "pic_peng_1"
            szOperateBName = "pic_peng_2"
        } else if ((nOpcode & this.MINGANG) > 0 || (nOpcode & this.BUGANG) > 0 || (nOpcode & this.ANGANG) > 0) {
            szOperateFName = "pic_gang_1"
            szOperateBName = "pic_gang_2"
        } else if ((nOpcode & this.TINGPAI) > 0) {
            szOperateFName = "pic_ting_1"
            szOperateBName = "pic_ting_2"
        } else if ((nOpcode & this.HUPAI) > 0) {
            szOperateFName = "pic_hu_1"
            szOperateBName = "pic_hu_2"
        } else if ((nOpcode & this.LIUJU) > 0) {
            // szOperateFName = "pic_liu_ju"
        } else {
            return
        }

        this.playMaJiangOperatorAni(szOperateBName, szOperateFName, chairid)

        // if ((nOpcode & this.HUPAI) == 0) {
        this.playSoundByOpcode(nOpcode, chairid)
        // }
	}

	showAuto(flag) {
		this.nodeAuto.active = flag
	}

	hidGameButton() {
		if (this.btn_ready) {
			this.btn_ready.active = false
		}
	}

    putCard(value) {

		let opcode = this.isOnBtnTing ? this.TINGPAI : this.CHUPAI
		
        // 模拟操作
        let message = {
            cChairID: this.myPlayer.getPlyData().chairId,
            cCard: value,
            nOpcode: opcode,
		}
		
        this.mahjong_ermj_playcard_ack_sender(opcode, value, this.curSerialID)

        this.onGameOperateNot(message, true)
        this.isOnBtnTing = false
        this.bMyTurn = false
        this.curOpcode = 0
	}
	
    showOperateMenu(show, opcode) {
        this.node_operate_popup.active = false
        let node = this.nodeOperator
        node.active = show

        this.isOnBtnTing = false

        if (!show && opcode != 0) {
            this.cardLayer.removeAllHandCardMask()
            return
        }

        //弃
        this.btnOperatorGuo.active = (opcode & this.GIVEUP) > 0
        //听
        this.btnOperatorTing.active = (opcode & this.TINGPAI) > 0
        //胡
        this.btnOperatorHu.active = (opcode & this.HUPAI) > 0
        //杠
        this.btnOperatorGang.active = (opcode & this.GANGPAI) > 0
        //碰
        this.btnOperatorPeng.active = (opcode & this.PENGPAI) > 0
        //吃
        this.btnOperatorChi.active = (opcode & this.CHIPAI) > 0

        if (this.btnOperatorTing.active && !this.btnOperatorHu.active && !this.btnOperatorGang.active && !this.btnOperatorPeng.active && !this.btnOperatorChi.active) {
            this.btnOperatorGuo.active = false
        }
	}
	
	getIsOnTingStatus() {
		return (this.btnOperatorTing.active || this.isOnBtnTing)
	}

	create_prefab(prefab, parent) {
		let node = cc.instantiate(prefab)
		node.parent = parent ? parent : this.node
		return node
	}

	onPressNewUserSign() {
		GameLogic.Instance().showNewUserSignPop()
	}
	
	onPressWanFaTip() {		
		GameLogic.Instance().playBtnSoundEffect()
		GameLogic.Instance().showGameFanXingTipLayer()
	}

	onPressHuTip() {
		this.showTingCards()
	}
	
	showTingCards(value?) {
		cc.log(this.tingFanNum)
		cc.log(this.tingFinalCards)

		let tingcardsData = []
		
		this.tingFanNum.sort((a, b) => {
			if(a.cPutCard == b.cPutCard){
				return a.cHuCard - b.cHuCard
			}else{
				return a.cPutCard - b.cPutCard
			}
		})

		if (value) {	
			for(let v1 of this.tingFanNum) {
				if (v1.cPutCard == value) {
					let existFlag = false
					tingcardsData.forEach(v2 => {
						if (v2.cHuCard == v1.cHuCard && v2.cPutCard == v1.cPutCard) {
							existFlag = true
						}
					})
					if (!existFlag) {
						tingcardsData.push(v1)
					}
				}else if (v1.cPutCard > value) {
					break;
				}
			}
		}else{
			for(let v1 of this.tingFanNum) {
				if (this.tingFinalCards.includes(v1.cHuCard)) {//(v1.cPutCard == value) {
					let existFlag = false
					tingcardsData.forEach(v2 => {
						if (v2.cHuCard == v1.cHuCard && v2.cPutCard == v1.cPutCard) {
							existFlag = true
						}
					})
					if (!existFlag) {
						tingcardsData.push(v1)
					}
				}else if (v1.cPutCard > value) {
					break;
				}
			}
		}

		this.showTingCardsLayer(this.TINGPAI, tingcardsData)
		this.hideTingCardsLayer(3)
	}

	hideTingCardsLayer(delayTime = 0) {
		
		let callbackFun = () => {
			this.node_tingcard_popup.active = false
		}
		if (delayTime > 0) {				
			let actionList = []
			actionList[actionList.length] = cc.delayTime(delayTime)
			actionList[actionList.length] = cc.callFunc(() => {
				callbackFun()
			})

			this.node_tingcard_popup.stopAllActions()
			this.node_tingcard_popup.runAction(cc.sequence(actionList));
		}else{
			callbackFun()
		}
	}

    showTingCardsLayer(operFlag, data) {
		cc.log("TODO showTingCardsLayer", data)
		if (!data || data.length == 0) {
			this.hideTingCardsLayer()
			return
		}
        this.node_tingcard_popup.active = true
        this.node_tingcard_popup.getComponent("OperatePopup.hbermj").init(operFlag, data)
    }

    showOperateLayer(operFlag, data) {
		cc.log("TODO showOperateLayer", data)
        this.node_operate_popup.active = true
        this.node_operate_popup.getComponent("OperatePopup.hbermj").init(operFlag, data)
    }
	
    onPressCancelAuto() {
		this.mahjong_ermj_Cli_Auto_Req_sender(0, 0)
	}

    onPressChi() {
        
        this.showOperateMenu(false, 0)

        // 若只有一种吃牌方式，直接吃牌
        let bOXX = (this.curOpcode & this.OXX) > 0
        let bXOX = (this.curOpcode & this.XOX) > 0
        let bXXO = (this.curOpcode & this.XXO) > 0
        if (Number(bOXX) + Number(bXOX) + Number(bXXO) == 1) {
            if (bOXX) {
                this.mahjong_ermj_playcard_ack_sender(this.OXX, this.curPrevCard, this.curSerialID)
            } else if (bXOX) {
                this.mahjong_ermj_playcard_ack_sender(this.XOX, this.curPrevCard, this.curSerialID)
            } else if (bXXO) {
                this.mahjong_ermj_playcard_ack_sender(this.XXO, this.curPrevCard, this.curSerialID)
            }
            return
        }

        this.showOperateMenu(true, this.GIVEUP)

        let data = []
        if (bXXO) {
            data.push({ opcode: this.XXO, value: this.curPrevCard })
        }
        if (bXOX) {
            data.push({ opcode: this.XOX, value: this.curPrevCard })
        }
        if (bOXX) {
            data.push({ opcode: this.OXX, value: this.curPrevCard })
        }
        this.showOperateLayer(this.CHIPAI, data)
    }

    onPressPeng() {
        
        this.showOperateMenu(false, 0)
        this.mahjong_ermj_playcard_ack_sender(this.PENGPAI, this.curPrevCard, this.curSerialID)
    }

    onPressGang() {
        

        //若只有一种杠牌，则直接杠
        if (this.vecGangInfo.length == 1) {
            this.mahjong_ermj_playcard_ack_sender(this.curOpcode & this.GANGPAI, this.vecGangInfo[0].vecGangCards[0], this.curSerialID)
            return
        }

        this.showOperateMenu(true, this.GIVEUP)

        let countLeftCard = []
        for (const value of this.tempLeftCards[this.myPlayer.chairId]) {
            if (value > 0) {
                countLeftCard[value]++
            }
        }

        let data = []
        for (const ganginfo of this.vecGangInfo) {
			let value = ganginfo.vecGangCards[0]
            let opcode = countLeftCard[value] == 3 ? this.BUGANG : this.ANGANG
            data.push({ opcode: opcode, value: value })
        }
        this.showOperateLayer(this.GANGPAI, data)
    }

    onPressHu() {
        
        if ((this.curOpcode & this.ZIMO) > 0) {
            this.mahjong_ermj_playcard_ack_sender(this.ZIMO, this.curPrevCard, this.curSerialID)
        } else if ((this.curOpcode & this.FANGPAO) > 0) {
            this.mahjong_ermj_playcard_ack_sender(this.FANGPAO, this.curPrevCard, this.curSerialID)
        }
        this.isWin = true

        this.showOperateMenu(false, 0)
    }

    onPressTing() {
        
        this.bMyTurn = true
        this.showOperateMenu(false, 0)
        this.showOperateMenu(true, this.GIVEUP)
        this.CardLayer.addNoLimitMasks(this.vecTing, true)
        this.isOnBtnTing = true
    }

    onPressGuo() {
        
        this.showOperateMenu(false, 0)
        if ((this.curOpcode & this.GIVEUP) > 0) {
			this.mahjong_ermj_playcard_ack_sender(this.GIVEUP, this.curPrevCard, this.curSerialID)
			this.hideTingCardsLayer()
        }
    }
    
    onPressExit() {
        GameLogic.Instance().playBtnSoundEffect()
		GameLogic.Instance().judgeExitGame()
	}

	onPressExchange() {
		GameLogic.Instance().playBtnSoundEffect()
		GameLogic.Instance().showExchangePop()
	}

	onPressShop() {
		GameLogic.Instance().playBtnSoundEffect()
		GameLogic.Instance().showShopScene()
	}

	onPressRedPacketDetail() {
		this.nodeRedPacketDetail.stopAllActions()

		let hideAni = () => {			
			let actionList = []
			actionList[actionList.length] = cc.moveTo(0.4, cc.v2(-200, 0))
			actionList[actionList.length] = cc.callFunc(() => {
				this.nodeRedPacketDetail.isShow = false
				this.progressBarMin.active = true
			})

			this.nodeRedPacketDetail.runAction(cc.sequence(actionList));
		}
		let showAni = () => {
			this.progressBarMin.active = false
			let actionList = []
			actionList[actionList.length] = cc.moveTo(0.4, cc.v2(0, 0))
			actionList[actionList.length] = cc.callFunc(() => {
				this.nodeRedPacketDetail.isShow = true
			})
			actionList[actionList.length] = cc.delayTime(6)
			actionList[actionList.length] = cc.callFunc(() => {
				hideAni()
			})

			this.nodeRedPacketDetail.runAction(cc.sequence(actionList));
		}
		if (this.nodeRedPacketDetail.isShow) {
			hideAni()
		} else {
			showAni()
		}
	}

	
	setDiZhu(score) {
		this.labelDiZhu.$Label.string = score
	}

	setHuTipBtnEnable(flag) {
		cc.log("TODO setHuTipBtnEnable", flag)
	}

	removeHuTipNode() {
		cc.log("TODO removeHuTipNode")
	}

	onTouchInTingCard() {
		cc.log("TODO onTouchInTingCard")
	}


	/******************************************************************************************************************/
	//											通		用		方		法
	/******************************************************************************************************************/
	S2C(nChairID, oldChairId?) {
		let myChairID = 0

		if (GameLogic.Instance().userData.plyBaseData.chairId) {
			myChairID = GameLogic.Instance().userData.plyBaseData.chairId
		}

		if (oldChairId) {
			myChairID = oldChairId
		}

		let chair
		if (nChairID < myChairID) {
			chair = nChairID + GameLogic.Instance().MAX_PLAYER_NUM - myChairID
		} else {
			chair = nChairID - myChairID
		}

		if (GameLogic.Instance().MAX_PLAYER_NUM == 2) {
			if (chair == 1) {
				chair = 2
			}
		}else if (GameLogic.Instance().MAX_PLAYER_NUM == 2) {
			if (chair == 2) {
				if (myChairID == 2) {
					chair = 1
				}else if(myChairID == 0) {
					chair = 3
				}
			}
		}

		return chair
	}

	getPlayerByGuid(guid) {
		for (let player of this.players) {
			if (player.getPlyData().plyGuid == guid) {
				return player
			}
		}

		cc.error('GameScene getPlayerByGuid guid', guid)
	}

	getPlayerByChairId(chairID) {
		var chair = this.S2C(chairID)
		return this.players[chair]
	}

	sortHands(vecCards) {
		let sortedCards = vecCards

		sortedCards.sort(function(a,b){
            let tempLeft = a
			let tempRight = b
			if (tempLeft == this.cardValue_laizi) {
			    tempLeft = tempLeft - 100
			}

			if (tempRight == this.cardValue_laizi) {
			    tempRight = tempRight - 100
			}
			return tempLeft < tempRight
        }.bind(this))

	    return sortedCards
	}

	checkHua(value) {
		return value > 30
	}
	
	checkJinPai(value) {
		return false
	}
	
	onDestroy() {
        cc.log("onDestroy")
		// GameLogic.Instance().destory()
    }
	
	onCloseScene() {
        cc.log("onCloseScene")
		GameLogic.Instance().destory()
    }
    // update (dt) {}

    isScoreTable() {
    	if (GameLogic.Instance().isPrivateRoom()) {
    		if (this.privateInvite) {
    			return this.privateInvite.baseScore < 0
    		}
    	}

    	return false
    }

    showPrivateRoom() {
		if (!GameLogic.Instance().isPrivateRoom()) {
			return
		}
        // 隐藏趣头条任务
		const qttSuspensionWin = SceneManager.Instance.findSceneByName("QttSuspensionWin")
		if (qttSuspensionWin.length > 0) {
			qttSuspensionWin[0].node.active = false
		}
			
		const nodePrivateRoom = cc.instantiate(this.prefab_privateRoom)
		BaseFunc.BindChild(nodePrivateRoom, this)
		this["nodePrivate"].addChild(nodePrivateRoom)

		// 绑定按钮事件
		BaseFunc.AddClickEvent(this["btn_weixin"], this.node, this.thisComponentName, "onPressPrivateShare", 0, 3);
		BaseFunc.AddClickEvent(this["btn_ready"], this.node, this.thisComponentName, "mahjong_cb_ready_req_sender", 0, 3);
		BaseFunc.AddClickEvent(this["btnPrivateZhanJi"], this.node, this.thisComponentName, "mahjong_get_mj_private_room_result_req_sender", 0, 3);

		this["nodePrivateCode"].active = false
		this["btnPrivateZhanJi"].active = false
		this["btn_weixin"].active = false
		this["btn_ready"].active = false
		this["label_private_count"].getComponent(cc.Label).string = ""
		this["label_private_rule"].getComponent(cc.Label).string = ""

		this["game_bg_guang_3d4"].active = false
		this["nodeRightTop"].active = false
		this["nodeRightBottom"].active = false
		
		this.getShareInfo()
	}

	_gameName: string = "全民麻将（红包）"
	_domianName: string = "http://pvp.aizhangxin.cn/roomShare/private_new/"
	getShareInfo() {
		const url = "http://www.izhangxin.com/get/private/share"
		const param = {
			gameid: DataManager.Instance.gameId
		}
		BaseFunc.HTTPGetRequest(url, param, (res) => {
			if (res) {
				if (res.gameName) {
					this._gameName = res.gameName
				}
				if (res.domianName) {
					this._domianName = res.domianName
				}
			}
		})
	}

	updatePlayerScore() {
		if (this.isScoreTable()) {
			for (let i = 0; i < this.tableScores.length; i++) {
				const player = this.getPlayerByChairId(i)
				if (player) {
					player.setScoreNum(this.tableScores[i])
				}
			}
		}
	}

    showPrivateRoomButton() {
    	if (this.isGameStart()) {
    		return
    	}
    	const allin = GameLogic.Instance().playerData.length >= GameLogic.Instance().MAX_PLAYER_NUM
    	this["btn_ready"].active = allin
    	this["btn_weixin"].active = !allin
    }

    showPrivateCount() {
    	if (!GameLogic.Instance().isPrivateRoom()) {
    		return
    	}
    	let count = this.nJuCount == -1 ? 0 : this.nJuCount + 1
    	count = count > this.privateInvite.tableTime ? this.privateInvite.tableTime : count
		this["label_private_count"].getComponent(cc.Label).string = this.privateInvite ? `第 ${count} / ${this.privateInvite.tableTime} 局` : ''
	}

    onPressPrivateShare() {
    	if (this._gameName != "") {
    		this.onPrivateShare(this._gameName, this._domianName)
    	}
    }

    onPrivateShare(title: string, url: string) {
    	const rules: string[] = []
    	rules.push(this.privateInvite.tableTime + "局")
    	if (this.privateInvite.baseScore > 0) {
    		rules.push("底注:" + this.privateInvite.baseScore + "金豆")
    	} else {
    		rules.push("底注:" + (-this.privateInvite.baseScore) + "积分")
    	}
    	const rule = JSON.parse(this.privateInvite.gameJson)

    	const date = new Date(parseInt(this.privateInvite.createTime + '000'))
    	const data = {
    		guid: DataManager.UserData.guid,
    		game_id: DataManager.Instance.gameId,
    		verifyNum: this.privateInvite.inviteCode,
    		num: DataManager.UserData.nickname,
    		time: `${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}点${date.getMinutes()}分`,
    		mins: rules[0],
    		plan: rules[1],
    		mingameid: 389
    	}
    	const datas = []
    	for (const key in data) {
    		datas.push(key + "=" + encodeURIComponent(data[key]))
    	}

    	const gameTitle = "二人麻将私人房邀请"
    	if (cc.sys.isBrowser || DataManager.Instance.onlineParam.sharePrivateText) {
    		const texts = []
    		texts.push(title + " " + gameTitle)
    		texts.push("【房间号】:" + this.privateInvite.inviteCode)
    		texts.push("【游戏玩法】:" + rules.join(" "))
    		texts.push("【游戏下载】:" + url + "?" + datas.join("&"))
    		copyToClipBoard(texts.join("\n"), "房间号复制成功，请在微信粘贴后发送邀请信息!")

    		// 打开微信app
    		if (cc.sys.isMobile && DataManager.Instance.onlineParam.shareJumpWeiXin) {
    			window.location.href = "weixin://"
    		}
    	} else {
    		rules.splice(0, 0, "房间号:" + this.privateInvite.inviteCode)
    		share({
    			ShareWay: "WeiXin",
    			ShareTitle: gameTitle,
    			ShareText: rules.join(" "),
    			ShareType: "0",
    			ShareUrl: url + "?" + datas.join("&"),
    		})
    	}
    }

    mahjong_mj_private_room_result_not(event) {
    	const message = event.packet
    	if (!this.isGameStart() && this.nJuCount == -1) {
    		GameLogic.Instance().LeaveGameScene()
    		return
    	}
    	this.vecGameStatiscs = message.vecGameStatiscs
		GameLogic.Instance().showPrivateZhanJiLayer({
			vecGameStatiscs: message.vecGameStatiscs,
			close: true
		})
    }

    mahjong_mj_rount_count_not(event) {
    	const message = event.packet
    	this.nJuCount = message.nMaJiangJu
    	this.bHadStart = true
    	this.showPrivateCount()
    }

    mahjong_cb_dismiss_private_table_req_sender() {
    	this.force_dismiss = true
    	GameLogic.Instance().sendMessage({ opcode: "mahjong_cb_dismiss_private_table_req" })
    }

    mahjong_bc_dismiss_private_table_ack(event) {
		const message = event.packet
		if (message.ret == 0 || message.ret == -1) {
		} else {
			this.force_dismiss = false
			if (message.ret == -2) {
				iMessageBox("房间中的游戏已经开始 不能中途解散哦")
			} else if (message.ret == -3) {
				iMessageBox("只有房主才能解散房间哦 不能中途解散哦")
			} else {
				iMessageBox("解散房间 错误")
			}
		}
	}

	mahjong_bc_force_dismiss_private_table_req(event) {
		const message = event.packet
		this.force_dismiss = true
		GameLogic.Instance().showGameCommonTipLayer({
			msg: message.userName + "申请解散房间\n是否同意？",
			style: 5,
			time: message.time,
			confirmCback: () => {
				this.mahjong_cb_force_dismiss_private_table_ack_sender(1)
			},
			cancelCback: () => {
				this.mahjong_cb_force_dismiss_private_table_ack_sender(0)
				this.force_dismiss = false
			},
		})
	}

	mahjong_cb_force_dismiss_private_table_ack_sender(accept: number) {
		cc.log("mahjong_cb_force_dismiss_private_table_ack_sender", accept)
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_force_dismiss_private_table_ack',
			accept: accept,
		})
	}

	mahjong_bc_force_dismiss_private_table_not(event) {
		const message = event.packet
		if (message.accept == 1) {
			iMessageBox(message.userName + "同意解散房间")
		} else {
			iMessageBox(message.userName + "不同意解散房间")
			this.force_dismiss = false
			if (SceneManager.Instance.isSceneExist("GameCommonTipLayer")) {
				SceneManager.Instance.closeScene("GameCommonTipLayer")
			}
		}
	}

	mahjong_mj_pause_game_not(event) {
		const message = event.packet
		const getTimeStr = function (n: number) {
			return (n < 10 ? '0' : '') + n
		}
		let msg = ""
		if (message.nFlag == 0) {
			msg = "等待"
			msg += message.sNickName
			msg += "操作"
			msg += "，超过" + message.nWaitTime + "分钟后房间将自动解散 (" + getTimeStr(Math.floor(message.nLeftTime / 60)) + ":" + getTimeStr(message.nLeftTime % 60) + ")"
		} else if (message.nFlag == 1) {
			msg = message.sNickName + "返回,游戏恢复"
		}
		this["label_private_pause"].$Label.string = msg
		this["nodePrivatePause"].active = true
		this["nodePrivatePause"].stopAllActions()
		this["nodePrivatePause"].runAction(cc.sequence(cc.delayTime(3), cc.callFunc(() => {
			this["nodePrivatePause"].active = false
		})))
	}

	mahjong_get_mj_private_room_result_req_sender() {
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_get_mj_private_room_result_req',
		})
	}
	
	mahjong_get_mj_private_room_result_ack(event) {
		const message = event.packet
		GameLogic.Instance().showPrivateZhanJiLayer({
			vecGameStatiscs: message.vecGameStatiscs,
			close: false,
		})
	}
}
