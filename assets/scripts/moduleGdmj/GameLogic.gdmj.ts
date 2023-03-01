import NetManager from "../base/baseNet/NetManager";
import BaseFunc = require("../base/BaseFunc")
import SceneManager from "../base/baseScene/SceneManager";
import BaseScene from "../base/baseScene/BaseScene";
import AudioManager from "./AudioManager.gdmj";

import {MsgBox, gobackToMain, unenoughGold, checkServerMoneyLimit, showShopPop, czcEvent, getLowMoneyRoom, enterGame, getGameAward} from "../base/BaseFuncTs";
import { WizardConfig } from "../moduleLobby/WizardConfig";
import DataManager from "../base/baseData/DataManager";

export default class GameLogic extends BaseScene {
    private static instance: GameLogic;

    henry_debug:boolean = false

    socketName: string = 'gdmj'

    moduleExt: string = 'gdmj'

    moduleRes: string = 'moduleGdmjRes/'

    MAX_PLAYER_NUM:number = 4
    
    MAX_SEAT_NUM:number = 4

    HONGBAO_GOLD_MONEY:number = 0
    HONGBAO_GOLD_LEAF:number = 364
    HONGBAO_GOLD_TICKET:number = 365

    gametype:number = 0 //0 推倒胡 1 鸡平胡
    
    //用户财产，游戏币，金叶子，红包
    userProperties = {}

    gamescene = null

    isInReplayFlag:boolean = false
    
    playerData = []
    redpacket_info = {
        limitRounds: 0,
        curRounds: 0
    }
    redpacket_award_info = []
    redpacket_88Yuan_info = []
    
    serverInfo = {
        baseBet: 0,
        channelId: 0,
        extParam: "",
        gameId: 0,
        minMoney: 0,
        maxmoney: 0,
        onlinePlayerNum: 0,
        serverAddr: "",
        serverId: 0,
        serverKey: "",
        serverName: "",
        serverPort: 0,
        lc_room_mode: 0,
        winMaxMoney: 0,
        jumpNextServerMoney: 0,
        level: 0,
        winMaxBet: 0,
        winMinBet: 0,
        hBMode: 0,
        server_type: 0,
        tax: 0,
    }
    
    userData = {
        plyBaseData: {                
            chairId: -1,
            dogfall: 0,
            gift: 0,
            lost: 0,
            money: 0,
            nickname: "",
            param_1: 0,
            param_2: 0,
            plyGuid: 0,
            plyVip: {},
            ready: 0,
            score: 0,
            sex: -1,
            tableId: -1,
            won: 0,
            headimage: ""
        },
        plyStatus: {
            gameId: 0​​​,
            gameServerId: 0​​​,
            latitude: -1​​​,
            longitude: -1​​​,
            lost: 0​​​,
            money: 0​​​,
            moneyRank: -1​​​,
            param_1: 0​​​,
            param_2: 0​​​,
            plyGuid: 0​​​,
            plyNickname: ""​​​,
            plyStatus: 0​​​,
            sex: 0​​​,
            tableId: 0​​​,
            won: 0​​​,
            wonRank: -1,
        }
    }
    
    gamePlayerAvatarUrl = []
    
    bEnterInGame = false;

    audioManager = new AudioManager()

    private constructor() {
        super()

        this.userProperties[0] = 0
        this.userProperties[this.HONGBAO_GOLD_LEAF] = 0
        this.userProperties[this.HONGBAO_GOLD_TICKET] = 0

    }

    protected onDestroy()
    {

    }

    destory() {
        delete GameLogic.instance
        GameLogic.instance = null
    }

    static Instance() {
        if (!GameLogic.instance) {
            GameLogic.instance = new GameLogic();
        }
        return GameLogic.instance;
    }
    
    addPrefab(prefab, parent) {
        let node = cc.instantiate(prefab)
        node.parent = parent
        return node
    }

    setGame(game) {
        this.gamescene = game
    }
    
    setAudioManage(Am) {
        this.audioManager = Am
    }
    
    getIfPreLoadSound() {
        return false
    }
    
    analyzeSocketInfo(serverInfo) {
        this.serverInfo = serverInfo
        cc.log("analyzeSocketInfo", this.serverInfo)
        // this.extParam
        let extParam = this.serverInfo.extParam

        var params = extParam.split('|')
        
		for (var param of params) {
			var config = param.split(':')
			if (!config[1]) continue

			var reg = config[1].match(/\d+/g)
			if (!reg) continue

			var str_data = reg.join('')
			if (config[0] == 'lc_room_mode') {
                this.serverInfo.lc_room_mode = Number(str_data)
            }else if (config[0] == 'winMaxMoney') {
                this.serverInfo.winMaxMoney = Number(str_data)
            }else if (config[0] == 'jumpNextServerMoney') {
                this.serverInfo.jumpNextServerMoney = Number(str_data)
            }else if (config[0] == 'level') {
                this.serverInfo.level = Number(str_data)
            }else if (config[0] == 'winMaxBet') {
                this.serverInfo.winMaxBet = Number(str_data)
            }else if (config[0] == 'winMinBet') {
                this.serverInfo.winMinBet = Number(str_data)
            }else if (config[0] == 'hBMode') {
                this.serverInfo.hBMode = Number(str_data)
            }else if (config[0] == 'server_type') {
                this.serverInfo.server_type = Number(str_data)
            }else if (config[0] == 'tax') {
                this.serverInfo.tax = Number(str_data)
            }else if (config[0] == 'game_baseType') {
                this.serverInfo.baseType = Number(str_data)
            }
        }

        if (this.serverInfo.baseType == 397) {
            this.gametype = 1
        }else if (this.serverInfo.baseType == 398) {
            this.gametype = 0
        }
    }

    getAudioConfig() {
        return this.audioManager.getAudioConfig()
    }

	addModulePath(path) {
		return this.moduleRes + path
    }
    
    addPlayerData(data) {
        for (let i = 0; i < this.playerData.length; i++) {
            // const element = this.playerData[i];
            if (data.plyGuid && data.plyGuid > 0 && data.plyGuid == this.playerData[i].plyGuid) {                
                this.removePlayerData(data.plyGuid)
            }
            
        }

        this.playerData.push(data)
    }

    removePlayerData(uid) {
		for (var i = this.playerData.length - 1; i >= 0; i--) {
			if (uid > 0 && uid == this.playerData[i].plyGuid) {
				this.playerData.splice(i, 1)
			}
		}
    }

    removeAllPlayerData() {
		for (var i = this.playerData.length - 1; i >= 0; i--) {
            if (DataManager.UserData.guid != this.playerData[i].plyGuid) {                
                this.playerData.splice(i, 1)
            }
		}
    }
    
    playSound(audioname, sex = 0) {
        cc.log("TODO playSound", audioname)
        if(this.audioManager){
            this.audioManager.playSound(audioname, sex)
        }
    }

    playMenuSound() {
        this.playBtnSoundEffect()
    }
    
    playBtnSoundEffect() {
        cc.log("TODO playBtnSoundEffect")
        if(this.audioManager){
            this.audioManager.playSound("audio_menu")
        }
    }

    GetMoneyShortString(money) {
        if (money < 10000) {
            return money
        }

        if (money < 100000000) {
            money = money / 10000
            money = parseFloat(money.toPrecision(4)) + "万"
        }else{
            money = money / 100000000
            money = parseFloat(money.toPrecision(4)) + "亿"
        }
        return money
    }

    isInReplay() {
        return this.isInReplayFlag
    }

    isLaiZiCanTouch() {
        cc.log("TODO isLaiZiCanTouch")
        return false;
    }
    
	checkMoneyOutOfRange(showNeedMoneyPop = true, callback = null) {
        if (showNeedMoneyPop) {
            if(!checkServerMoneyLimit(this.serverInfo, () => {this.LeaveGameScene()})) {
                //通过检测在范围内            
                return true
            }            
        }else {
            if(this.checkMinMoneyOutOfRange(showNeedMoneyPop)) {
                return true
            }

            if (this.checkMaxMoneyOutOfRange(showNeedMoneyPop)) {
                return true
            }
        }
        

		if (callback) {
			callback()
        }
        
        return false
        
	}

	checkMinMoneyOutOfRange(showNeedMoneyPop = true) {
		let minMoney = this.serverInfo.minMoney || 0;
		if(minMoney >= 0 && this.userProperties[0] < minMoney) {
            if (showNeedMoneyPop) {                
                unenoughGold(0, minMoney, () => {this.LeaveGameScene()})
            }
			return true
		}
		return false
	}

	checkMaxMoneyOutOfRange(showNeedMoneyPop = true) {
        // maxmoney
        let MaxMoney = this.serverInfo.maxmoney || 0
        if (this.serverInfo.jumpNextServerMoney != null && MaxMoney > this.serverInfo.jumpNextServerMoney) {
            MaxMoney = this.serverInfo.jumpNextServerMoney
        }
    
        if (this.userProperties[0] > MaxMoney) {				
            let msg = [
                {size: 30, color: "B75737", text: "您的金豆超过" + MaxMoney  + "，是否前往"},
                {size: 30, color: "B75737", text: "\n"},
                {size: 30, color: "B75737", text: "下一个场次进行游戏?"}, 
            ]
            let param = {
                msg: msg,
                style: 1,
                cancelCback: () => { this.LeaveGameScene() }

            }
            if (showNeedMoneyPop) {                
                this.showGameCommonTipLayer(param)
            }
            return true
        }

		return false
    }

    isKeepInGameTable() {
        return false;
    }

    isPrivateRoom() {
        return (this.serverInfo.lc_room_mode == 1)
    }

    isMatchTable() {
        return (this.serverInfo.lc_room_mode == 2)
    }

    isRedPacketTable() {
        return (this.serverInfo.lc_room_mode == 3)
    }

    
	getRedPacketTableType() {
		return this.serverInfo.hBMode
    }

    closeScene(name) {
        SceneManager.Instance.closeScene(name)
    }
    
    isSceneExist(name) {
        return SceneManager.Instance.isSceneExist(name)
    }
    
    showGameRedPacketAwardLayer(initParam = []) {
        if (!this.gamescene) {    
            return
        }
        if(!this.isSceneExist("GameRedPacketAwardLayer")){
            initParam["zorder"] = this.gamescene.zOrder.nodeRedPacket
            initParam["logic"] = this
            SceneManager.Instance.popScene<String>("moduleBaseRes", "GameRedPacketAwardLayer", initParam)
        }
    }
    
    showGame88YuanTask(initParam = []) {
        if (!this.gamescene) {    
            return
        }
        if(!this.isSceneExist("Game88YuanTask")){
            initParam["zorder"] = this.gamescene.zOrder.nodeRedPacket
            initParam["logic"] = this
            
            if (!!this.gamescene) {    
                SceneManager.Instance.popScene<String>("moduleBaseRes", "Game88YuanTask", initParam)
            }
        }
    }

    showGameWizardLayer(initParam = []) {       
        if (DataManager.CommonData["morrow"] != 0 || DataManager.load(WizardConfig.wizard_storage_key + "" + initParam.wizardIndex) == 1) {
            if (initParam.forceCallBack && initParam.callBack) {
                initParam.callBack()
            }
            return
        }
        initParam["zorder"] = this.gamescene.zOrder.nodeRedPacket
        SceneManager.Instance.popScene<String>("moduleLobby", "WizardLayer", initParam)
    }

    showNewUserSignPop(initParam = []) {
        SceneManager.Instance.popScene("moduleLobby", "NewUserSignPop", initParam)    
    }
    
    showExchangePop(initParam = []) {
        SceneManager.Instance.popScene<String>("moduleLobby", "ExchangePop", initParam)
    }

    showGameCommonTipLayer(initParam) {       
        initParam = initParam || [] 
        SceneManager.Instance.popScene<String>("moduleGdmjRes", "GameCommonTipLayer", initParam)
    }

    showGameFanXingTipLayer(initParam = []) { 
        initParam["zorder"] = this.gamescene.zOrder.nodeJieSuan
        SceneManager.Instance.popScene<String>("moduleGdmjRes", "GameFanXingTipLayer", initParam)
    }

    showGameResultLayer(initParam = []) { 
        

        initParam["zorder"] = this.gamescene.zOrder.nodeJieSuan
        SceneManager.Instance.popScene<String>("moduleGdmjRes", "GameResultLayer", initParam)
    }

    showShopScene() {
        cc.log("TODO showShopScene")
        showShopPop()
    }

    confirmBox(param) {
        cc.log("TODO confirmBox")
        MsgBox(param)
    }

    MessageBox(param) {
        cc.log("TODO MessageBox")
        MsgBox(param)
    }


	mahjong_cg_get_redpackets_award_req_sender() {
		this.sendMessage({
			opcode: 'mahjong_cg_get_redpackets_award_req',
			type: 1
        })
    }

    sendMessage(message) {
        NetManager.Instance.send(this.socketName, message)
    }

    closeSocket() {
        cc.log("TODO closeSocket")

    }

    reEnterGame(gameid, serverid, info) {
        cc.log("TODO reEnterGame")
    }

    enterLobby() {
        this.LeaveGameScene()
    }
    
    judgeExitGame() {
    	if(this.gamescene.state == 'startGame'){
    		this.showGameCommonTipLayer({
                msg : "如果现在退出游戏，会\n由系统托管，输了的话千万别怪它哦!",
                style: 1,
                confirmCback: () => { this.LeaveGameScene() }
            })
        }else if(this.getRedPacketTableType() == 21 ||
                this.getRedPacketTableType() == 22){
            let restround = this.redpacket_info.limitRounds - this.redpacket_info.curRounds

            let moneyAward = 3000
            if (this.getRedPacketTableType() == 22) {
                moneyAward = 10000
            }
			this.showGameCommonTipLayer({
                msg : [
                    {size: 26, color: "874612", text: "再玩"},
                    {size: 26, color: "E41D14", text: restround},
                    {size: 26, color: "874612", text: "局就可以开启红包了，"},
                    {size: 26, color: "874612", text: "\n"},
                    {size: 26, color: "874612", text: "开启红包后有机会可得"},
                    {size: 26, color: "E41D14", text: moneyAward},
                    {size: 26, color: "874612", text: "红包券哦！"}
                ],
                cancelCback: () => { this.LeaveGameScene() }
            })
		}else if(this.getRedPacketTableType() == 23){
            let restround = this.redpacket_info.limitRounds - this.redpacket_info.curRounds
			this.showGameCommonTipLayer({
                msg : [
                    {size: 26, color: "874612", text: "打完本局就可以领取红包，最高可得"},
                    {size: 26, color: "E41D14", text: "10万"},
                    {size: 26, color: "874612", text: "红包券哦！"}
                ],
                cancelCback: () => { this.LeaveGameScene() }
            })
    	}else{
			this.LeaveGameScene()
		}
    }

	LeaveGameScene(param = {isOnGameExit: 0}) {
        czcEvent((this.gametype ==1 ? "广东鸡平胡" : "广东推倒胡"), "离桌1", "游戏返回大厅"+ (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        if(this.henry_debug){
            return
        }
        cc.log("TODO LeaveGameScene")

    	if(this.gamescene.state == 'startGame'){
            param.isOnGameExit = 1
        }
        gobackToMain(param)
	}
}