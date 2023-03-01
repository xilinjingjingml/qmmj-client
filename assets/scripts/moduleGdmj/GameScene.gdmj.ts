import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import GameSceneStateController from "./GameSceneStateController.gdmj"
import GameLogic from "./GameLogic.gdmj"
import GamePlayer from "./GamePlayer.gdmj"
import { WizardConfig } from "../moduleLobby/WizardConfig";
import { uploadGameRound, czcEvent, showAwardResultPop, getGameAward, getNewBieRoundLimit } from "../base/BaseFuncTs";
import CardLayerVSD from "./CardLayer.gdmj";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends GameSceneStateController {


    @property()
    thisComponentName:string = "GameScene.gdmj"
    
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
	

	@property()	
	GAME_MODEL:number = -1 // 1, 高效模式；2，休闲模式
	// cardValue_laizi:number = -1
	


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

	vecTing = []
	vecTingHu = []
	vecGang = []
	// vecGangInfo = []
	tingFinalCards = []
	tingFanNum = []
	curPrevCard:number = -1
	curSerialID:number = -1
	nBanker:number = -1

	//准备风圈图片
	windCircleTable = [
		"moduleGdmjRes/images/ZhuJieMian/FengQuan_Dong",
		"moduleGdmjRes/images/ZhuJieMian/FengQuan_Nan",
		"moduleGdmjRes/images/ZhuJieMian/FengQuan_Xi",
		"moduleGdmjRes/images/ZhuJieMian/FengQuan_Bei"
		]

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
		// BaseFunc.AddClickEvent(this.btnNewUserSign, this.node, this.thisComponentName, "onPressNewUserSign", 0, 3);
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
		czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "进入游戏", "显示游戏界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
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

		this.clock = GameLogic.Instance().addPrefab(this.prefab_clock, this.nodeClockLayer).getComponent("GameClock.gdmj")
		


        this.initCardLayer()

		this.doStateChangeInit()

		this.showContinue(false)

		this.showChangCiName()

		this.showChangCiInfo()
		
		/*this.btnNewUserSign.active = DataManager.CommonData["NewUserSgin"].day <= 7
		
		if(GameLogic.Instance().getRedPacketTableType() != 23) {
			this.GameScenePlus88Yuan.active = false
		}

		this.refreshNewUserQMoneyTip()

		let callback_refresh = (res) => {
			this.refreshNewUserQMoneyTip(res)
		}
		getGameAward(null, 1, callback_refresh)*/

		if (GameLogic.Instance().gametype==0) {
			BaseFunc.SetFrameTextureLocal(this.game_bg_guang_3d4.getComponent(cc.Sprite),"moduleGdmjRes/images/ZhuJieMian/spt_logo_tdh", (sprite) => {
				// this.game_bg_guang_3d4.active = true
			})
        }else if (GameLogic.Instance().gametype==1) {
        }
	}
	
	refreshNewUserQMoneyTip(res?) {
		if (true) {
			return
		}

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
		
		/*for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {			
			this.CardLayer["nodeBuHua" + i].active = true
		}*/

		GameLogic.Instance().playSound('audio_start')
		
		this.hideAniWait()
		
		this.showContinue(false)
	
		this.nodeClockLayer.active = true

		this.hideChangCiInfo()
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

		this.spt_wind_circle.active = false

		this.CardLayer.hideTipPlayer()
		this.refreshRestCardNum()
	}

    initCardLayer() {
        
		// 出牌界面
		this.CardLayer = this.create_prefab(this.prefab_cardLayer, this.nodeCardLayer).getComponent("CardLayer.gdmj")
		
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
        this.nodeDebug.getComponent("GameDebugLayer.gdmj").setView(this)
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
			        sprite.spriteFrame =  DataManager.Instance.getSpriteFrame("GameScene.gdmj", "null")
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

	mahjong_mj_achieve_req(event) {
		cc.log("TODO mahjong_mj_achieve_req")
		let message = event.packet
	}

	mahjong_gdmj_animate_ok_req(event) {
		cc.log("TODO mahjong_gdmj_animate_ok_req")
		let message = event.packet
	}

	mahjong_gdmj_changecard_not(event) {
		let message = event.packet
		cc.log("mahjong_gdmj_changecard_not", message)
		this.checkCompleteDataReq()

		if (this.CardLayer == null) {
			cc.log("if this.view.CardLayer == null")
			return
		}
		var chairid = this.S2C(message.cChairID)

        this.tempHandCards[chairid] = message.vecHandCards
        this.tempLeftCards[chairid] = message.vecLeftCards
		this.tempDisplayCards[chairid] = message.vecDisplayCards
		this.tempCurHandCard[chairid] = message.cCurrCards
		
		/*if (this.cardValue_laizi != null && this.cardValue_laizi != -1)	{
			this.tempHandCards[chairid] = this.sortHands(message.vecHandCards)
			message.vecHandCards = this.tempHandCards[chairid]
		}*/

		this.onGameChangeCardNot(message)
		// 除骰子动画（本来是在第一次发牌时清理，但是如果切入后台后，会造成骰子未清理掉）
		this.removeAllDice()
		// 刷新牌堆
		// this.CardLayer.addLaiziIcon(message.cHuPai)
	}

	mahjong_gdmj_Cli_TingType_req(event) {
		cc.log("TODO mahjong_gdmj_Cli_TingType_req")
		let message = event.packet
	}

	mahjong_gdmj_completedata_not(event) {
		cc.log("TODO mahjong_gdmj_completedata_not")
		let message = event.packet

        this.bMyTurn = false
		
		this.bFirstSendCardAni_ = false
		
		this.doStateChangeStartGame()

        // 底注
        this.mahjong_gdmj_svr_dizhu_not({packet:{
            opcode: 'mahjong_gdmj_svr_dizhu_not',
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
            this.mahjong_gdmj_changecard_not({packet:v})
		}
		
        // 花
        //this.CardLayer.clearHuaCards()
		//this.CardLayer.showAllHuaInfo()
		
		/*message.vecHuaNum.forEach((v, k) => {
			for (let i = 0; i < v; i++) {				
				this.CardLayer.playBuHuaAni(this.S2C(k),  false)				
			}
			
		});*/

		
		let chairid = this.S2C(message.nChuPai)
		
		this.clock.startClientTimer(8, chairid, true)
		
	}

	mahjong_gdmj_jph_completedata_not(event) {
		cc.log("TODO mahjong_gdmj_completedata_not")
		let message = event.packet

        this.bMyTurn = false
		
		this.bFirstSendCardAni_ = false
		
		this.doStateChangeStartGame()

        // 底注
        this.mahjong_gdmj_svr_dizhu_not({packet:{
            opcode: 'mahjong_gdmj_svr_dizhu_not',
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
            this.mahjong_gdmj_changecard_not({packet:v})
		}
		
        // 花
        //this.CardLayer.clearHuaCards()
		//this.CardLayer.showAllHuaInfo()
		
		/*message.vecHuaNum.forEach((v, k) => {
			for (let i = 0; i < v; i++) {				
				this.CardLayer.playBuHuaAni(this.S2C(k),  false)				
			}
			
		});*/

		
		let chairid = this.S2C(message.nChuPai)
		
		this.clock.startClientTimer(8, chairid, true)
		
		this.setWincircle(message.nWindBit,message.nWindCircle);
	}

	mahjong_gdmj_completedata_req(event) {
		cc.log("TODO mahjong_gdmj_completedata_req")
		let message = event.packet
	}

	mahjong_gdmj_banker_dice_not(event) {
		cc.log("TODO pt_gdmj_banker_dice_not")
		let message = event.packet

		GameLogic.Instance().userData.plyBaseData.ready = 0
		for (var plyData of GameLogic.Instance().playerData) {
			plyData.ready_ = 0
		}
		
		this.nBanker = this.S2C(message.cBanker)
		this.players[this.nBanker].setZhuang(true)
		let vecDice = message.vecDice
		this.playDiceAni(vecDice, message.cChairID)
		GameLogic.Instance().playSound("audio_dice")
	}

	mahjong_gdmj_dice_not(event) {
		cc.log("TODO pt_gdmj_dice_not")
		let message = event.packet
		
		GameLogic.Instance().userData.plyBaseData.ready = 0
		for (var plyData of GameLogic.Instance().playerData) {
			plyData.ready_ = 0
		}
		this.nBanker = this.S2C(message.cBanker)
		this.players[this.nBanker].setZhuang(true)
		let vecDice = message.vecDice
		this.playDiceAni(vecDice, message.cChairID)
		GameLogic.Instance().playSound("audio_dice")
	}

	mahjong_gdmj_jph_dice_not(event) {
		cc.log("TODO pt_gdmj_jph_dice_not")
		let message = event.packet
		
		GameLogic.Instance().userData.plyBaseData.ready = 0
		for (var plyData of GameLogic.Instance().playerData) {
			plyData.ready_ = 0
		}
		this.nBanker = this.S2C(message.cBanker)
		this.players[this.nBanker].setZhuang(true)
		let vecDice = message.vecDice
		this.playDiceAni(vecDice, message.cChairID)
		GameLogic.Instance().playSound("audio_dice")
	}

	mahjong_gdmj_jph_wind_not(event) {
		cc.log("TODO pt_gdmj_jph_wind_not")
		let message = event.packet
		
		this.setWincircle(message.nWindBit,message.nWindCircle)
	}

	// 设置风圈
	setWincircle(windBit,windCircle) {
		cc.log("GameScene:setWincircle")
		//显示风圈
		/*BaseFunc.SetFrameTextureLocal(this.spt_wind_circle.getComponent(cc.Sprite),this.windCircleTable[windCircle], (sprite) => {
			this.spt_wind_circle.active = true
		})*/
		//转换为当前位置
		let windBitTemp = this.S2C(windBit)
		let index = windBitTemp
		this.clock["game_direction_type_1_"+index].getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "game_direction_type_1_0")
		index = windBitTemp+3>3 ? windBitTemp-1 : windBitTemp+3
		this.clock["game_direction_type_1_"+index].getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "game_direction_type_1_3")
		index = windBitTemp+2>3 ? windBitTemp-2 : windBitTemp+2
		this.clock["game_direction_type_1_"+index].getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "game_direction_type_1_2")
		index = windBitTemp+1>3 ? windBitTemp-3 : windBitTemp+1
		this.clock["game_direction_type_1_"+index].getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "game_direction_type_1_1")
	}

	// 删除风位、风圈
	clearWind() {
		cc.log("GameScene:clearWind")
		if (null != this.windCircle) {
			this.spt_wind_circle.active = false
		}
	}

	mahjong_gdmj_gameresult_not(event) {
		czcEvent("广东推倒胡", "游戏2", "显示游戏结算界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_gdmj_gameresult_not")
		let message = event.packet
		
		this.clock.unscheduleClientTimer()

		if (this.isGameStart()) {			
			this.doStateChangeEndGame()
		}
		
		/*let callback_refresh = (res) => {
			this.refreshNewUserQMoneyTip(res)
		}
		getGameAward(this.zOrder.nodeJieSuan + 1, 0, callback_refresh)*/
		
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

	mahjong_gdmj_jph_gameresult_not(event) {
		czcEvent("广东鸡平胡", "游戏2", "显示游戏结算界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_gdmj_jph_gameresult_not")
		let message = event.packet
		
		this.clock.unscheduleClientTimer()

		if (this.isGameStart()) {			
			this.doStateChangeEndGame()
		}
		
		/*let callback_refresh = (res) => {
			this.refreshNewUserQMoneyTip(res)
		}
		getGameAward(this.zOrder.nodeJieSuan + 1, 0, callback_refresh)*/
		
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

	mahjong_gdmj_gc_clienttimer_not(event) {
		cc.log("TODO mahjong_gdmj_gc_clienttimer_not")
		let message = event.packet
		
        let chairid = this.S2C(message.cChairId)
		
		for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; ++i){
			if (chairid == i) {
				this.players[i].showTurn()			
			}else{
				this.players[i].hideTurn()
			}
		}
		
		this.clock.startClientTimer(message.nPeriod / 1000, chairid, true)
	}

	mahjong_gdmj_gc_task_complete_not(event) {
		cc.log("TODO mahjong_gdmj_gc_task_complete_not")
		let message = event.packet
	}

	mahjong_mj_gc_task_not(event) {
		cc.log("TODO mahjong_mj_gc_task_not")
		let message = event.packet
	}

	mahjong_gdmj_operate_not(event) {
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

	mahjong_gdmj_playcard_req(event) {
		cc.log("TODO mahjong_gdmj_playcard_req")
		let message = event.packet
		
		this.checkCompleteDataReq()
		
        this.vecTing = message.vecTingPutCards
		this.vecTingHu = message.vecTingHuCards
		this.vecGang = message.vecGangCards
        this.curOpcode = message.nOpcode
        this.curPrevCard = message.cPrevCard
		this.curSerialID = message.sSerialID
		// this.vecGangInfo = message.vecGangInfo

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

	mahjong_gdmj_robot_not(event) {
		cc.log("TODO mahjong_gdmj_robot_not")
		let message = event.packet
	}

	mahjong_gdmj_robot_req(event) {
		cc.log("TODO mahjong_gdmj_robot_req")
		let message = event.packet
	}

	mahjong_gdmj_Svr_Auto_Not(event) {
		cc.log("TODO mahjong_gdmj_Svr_Auto_Not")
		let message = event.packet

        let player = this.getPlayerByChairId(message.cChairID)
        if (player) {
            player.setAuto(message.cAuto == 1)
        }

        if (player == this.myPlayer) {
			this.showAuto(message.cAuto == 1)
        }

	}

	mahjong_gdmj_svr_dizhu_not(event) {
		cc.log("TODO mahjong_gdmj_svr_dizhu_not")
		let message = event.packet
		
		this.nDiZhu = message.nDiZhu;
		this.nDiZhu = Math.abs(this.nDiZhu)

		this.labelDiZhu.$Label.string = this.nDiZhu
	}

	mahjong_gdmj_taifei_not(event) {
		czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "游戏1", "游戏开始" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_gdmj_taifei_not")
		let message = event.packet
		
		this.nTaifei = message.nValue

		this.doStateChangeStartGame()
	}

	mahjong_gdmj_svr_taifei_not(event) {
		czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "游戏1", "游戏开始" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		cc.log("TODO mahjong_gdmj_taifei_not")
		let message = event.packet
		
		this.nTaifei = message.nValue

		this.doStateChangeStartGame()
	}

	mahjong_gdmj_tingfan_not(event) {
		cc.log("TODO mahjong_gdmj_tingfan_not")
		let message = event.packet
		
		this.tingFanNum = message.vecTingFan

	}

	mahjong_gdmj_mapai_not(event) {
		cc.log("GameSceneCtrller:pt_gdmj_mapai_not")
		let message = event.packet
		// var_dump(message)
		if (this.nBanker >= 0 && this.players[this.nBanker]) {
			this.players[this.nBanker].setMapaiNum(message.nNum)
		}
	}

	mahjong_gdmj_visi_compdata_not(event) {
		cc.log("TODO mahjong_gdmj_visi_compdata_not")
		let message = event.packet
	}

	mahjong_gdmj_visi_compdata_req(event) {
		cc.log("TODO mahjong_gdmj_visi_compdata_req")
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

		let player = this.getPlayerByGuid(message.plyGuid)
		if (player) {
			player.clearPlayer()
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
			czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "离桌2", "离桌请求完成" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
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

		GameLogic.Instance().addPlayerData(message.plyData)
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
			if (message.tableAttrs && message.tableAttrs.tableId != 100000000)
				czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "进桌2", "游戏进桌成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			// succeed			
			message.tableAttrs.players.forEach(element => {
				GameLogic.Instance().addPlayerData(element)
			});
			this.refreshPlayerData()			
			this.mahjong_cb_ready_req_sender()
			
			this.showContinue(false)
		} else {
			czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "进桌2", "游戏进桌失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
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

			GameLogic.Instance().MessageBox(info)
		}
	}

	mahjong_bc_login_ack(event) {
		cc.log("mahjong_bc_login_ack")
		let message = event.packet

		GameLogic.Instance().userData.plyBaseData = message.plyBaseData
		GameLogic.Instance().userData.plyStatus = message.plyStatus
		let ret = message.ret

		if (ret == 0 || ret == 1 || ret == 2) {
			czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "登录2", "游戏服务器登录成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
			if (ret == 0) {				
				// this.wizardRedPacket()
				this.mahjong_cb_join_table_req_sender()
			}

			GameLogic.Instance().bEnterInGame = GameLogic.Instance().userData.plyBaseData.tableId > 0

		} else {
			czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "登录2", "游戏服务器登录失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
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
				GameLogic.Instance().MessageBox(info)
			}
		}
	}
	////////////////////
	
	checkCompleteDataReq() {
		if (this.bCompletedata == false) {
			this.mahjong_gdmj_completedata_req_sender()
		}
	}

	mahjong_gdmj_completedata_req_sender() {
		cc.log("TODO mahjong_gdmj_completedata_req_sender")
	}

	mahjong_cb_login_req_sender() {
		czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "登录1", "游戏服务器登录请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
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
			this.showContinue(true)
			return
		}

		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_ready_req',
		})
	}


	mahjong_gdmj_playcard_ack_sender(nOpcode, cPrevCard, uSerialID) {
        GameLogic.Instance().sendMessage({
            opcode: 'mahjong_gdmj_playcard_ack',
            nOpcode: nOpcode,
            cOpCard: cPrevCard,
            sSerialID: uSerialID,
        })
	}

	mahjong_gdmj_Cli_Auto_Req_sender(auto, type) {
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_gdmj_Cli_Auto_Req',
			cAuto: auto,
			iAutoType: type	
		})
	}

	mahjong_cb_join_table_req_sender() {	
		czcEvent((GameLogic.Instance().gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "进桌1", "游戏进桌请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
		GameLogic.Instance().sendMessage({
			opcode: 'mahjong_cb_join_table_req',
			tableId: -1,
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
        /*} else if (message.nOpcode == this.BUHUA) {
            this.curHuaCard[chairId] = message.cCard
            this.CardLayer.showAllHuaInfo()
            this.CardLayer.playBuHuaAni(chairId)
            this.playSoundSexByChairId('audio_buhua', chairId)*/
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
		this.nodeAniOperator.x = parentNode.x
		this.nodeAniOperator.y = parentNode.y
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

	}

    putCard(value) {

		let opcode = this.isOnBtnTing ? this.TINGPAI : this.CHUPAI
		
        // 模拟操作
        let message = {
            cChairID: this.myPlayer.getPlyData().chairId,
            cCard: value,
            nOpcode: opcode,
		}
		
        this.mahjong_gdmj_playcard_ack_sender(opcode, value, this.curSerialID)

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
        this.node_tingcard_popup.getComponent("OperatePopup.gdmj").init(operFlag, data)
    }

    showOperateLayer(operFlag, data) {
		cc.log("TODO showOperateLayer", data)
        this.node_operate_popup.active = true
        this.node_operate_popup.getComponent("OperatePopup.gdmj").init(operFlag, data)
    }
	
    onPressCancelAuto() {
		this.mahjong_gdmj_Cli_Auto_Req_sender(0, 0)
	}

    onPressChi() {
        
        this.showOperateMenu(false, 0)

        // 若只有一种吃牌方式，直接吃牌
        let bOXX = (this.curOpcode & this.OXX) > 0
        let bXOX = (this.curOpcode & this.XOX) > 0
        let bXXO = (this.curOpcode & this.XXO) > 0
        if (Number(bOXX) + Number(bXOX) + Number(bXXO) == 1) {
            if (bOXX) {
                this.mahjong_gdmj_playcard_ack_sender(this.OXX, this.curPrevCard, this.curSerialID)
            } else if (bXOX) {
                this.mahjong_gdmj_playcard_ack_sender(this.XOX, this.curPrevCard, this.curSerialID)
            } else if (bXXO) {
                this.mahjong_gdmj_playcard_ack_sender(this.XXO, this.curPrevCard, this.curSerialID)
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
        this.mahjong_gdmj_playcard_ack_sender(this.PENGPAI, this.curPrevCard, this.curSerialID)
    }

    onPressGang() {
        

        //若只有一种杠牌，则直接杠
        // if (this.vecGangInfo.length == 1) {
		if (this.vecGang.length == 1) {
            this.mahjong_gdmj_playcard_ack_sender(this.curOpcode & this.GANGPAI, this.vecGang[0], this.curSerialID)
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
        // for (const ganginfo of this.vecGangInfo) {
			for (const ganginfo of this.vecGang) {
			let value = ganginfo.vecGangCards[0]
            let opcode = countLeftCard[value] == 3 ? this.BUGANG : this.ANGANG
            data.push({ opcode: opcode, value: value })
        }
        this.showOperateLayer(this.GANGPAI, data)
    }

    onPressHu() {
        
        if ((this.curOpcode & this.ZIMO) > 0) {
            this.mahjong_gdmj_playcard_ack_sender(this.ZIMO, this.curPrevCard, this.curSerialID)
        } else if ((this.curOpcode & this.FANGPAO) > 0) {
            this.mahjong_gdmj_playcard_ack_sender(this.FANGPAO, this.curPrevCard, this.curSerialID)
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
			this.mahjong_gdmj_playcard_ack_sender(this.GIVEUP, this.curPrevCard, this.curSerialID)
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
			/*if (tempLeft == this.cardValue_laizi) {
			    tempLeft = tempLeft - 100
			}

			if (tempRight == this.cardValue_laizi) {
			    tempRight = tempRight - 100
			}*/
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
		//GameLogic.Instance().destory()
    }
	
	onCloseScene() {
        cc.log("onCloseScene")
		GameLogic.Instance().destory()
    }
    // update (dt) {}
}
