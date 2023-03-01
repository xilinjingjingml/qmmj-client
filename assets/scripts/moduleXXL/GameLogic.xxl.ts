
import NetManager from "../base/baseNet/NetManager";
import BaseFunc = require("../base/BaseFunc")
import SceneManager from "../base/baseScene/SceneManager";
import BaseScene from "../base/baseScene/BaseScene";
import AudioManager from "./AudioManager.xxl";

import {MsgBox, gobackToMain, unenoughGold, checkServerMoneyLimit, showShopPop, czcEvent, getLowMoneyRoom, enterGame, getGameAward} from "../base/BaseFuncTs";
import { WizardConfig } from "../moduleLobby/WizardConfig";
import DataManager from "../base/baseData/DataManager";

export default class GameLogic extends BaseScene {

    private static instance: GameLogic;

    henry_debug:boolean = false

    socketName: string = 'xxl'

    moduleExt: string = 'xxl'

    moduleRes: string = 'moduleXXLRes/'

    MAX_PLAYER_NUM:number = 3

    dizhu:number = 0

    lock:boolean = false

    isSuperReward:boolean = false

    audioManager = new AudioManager()
    
    
    HONGBAO_GOLD_MONEY:number = 0
    HONGBAO_GOLD_LEAF:number = 364
    HONGBAO_GOLD_TICKET:number = 365

    gamescene = null

    playerData = []
    redpacketTrumpetMsgs = []
    redpacket_info = []
    redpacket_award_info = []

    zOrder = {
        zeroOrder : 0,
        nodeJieSuan : 7,
		nodeRedPacket : 10,
    }
    
    //用户财产，游戏币，金叶子，红包
    userProperties = {}

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
        newbieMode: 0
    }
    gameId = 393
    UserDataLoginParam = {
        ticket:"4E42AA0B20367A178D244520D97CB844",
        nickname:"player",
        guid:"1011518"
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
    amePlayerAvatarUrl = []
    
    bEnterInGame = false;

    needReConnectFlag = false;

    private constructor() {
        super()

        this.userProperties[0] = 0
        this.userProperties[this.HONGBAO_GOLD_LEAF] = 0
        this.userProperties[this.HONGBAO_GOLD_TICKET] = 0

    }
    protected onDestroy()
    {

    }

    getIfPreLoadSound() {
        return false
    }

    setAudioManage(Am) {
        this.audioManager = Am
    }

    addModulePath(path) {
		return this.moduleRes + path
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

    getAudioConfig() {
        return this.audioManager.getAudioConfig()
    }

    addPlayerData(data) {
        let findFLag = false
        for (let i = 0; i < this.playerData.length; i++) {
            // const element = this.playerData[i];
            if (data.plyGuid && data.plyGuid > 0 && data.plyGuid == this.playerData[i].plyGuid) {                
                this.removePlayerData(data.plyGuid)
                // this.playerData[i].chairId = data.chairId
                // findFLag = true
            }
            
        }

        // if (!findFLag) {            
        this.playerData.push(data)
        // }
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
            }else if (config[0] == 'newbieMode') {
                this.serverInfo.newbieMode = Number(str_data)
            }
        }
    }
    sendMessage(message) {
        console.log("GameLogic.xxl---sendMessage")
        NetManager.Instance.send(this.socketName, message)
    }

    closeSocket() {
        cc.log("TODO closeSocket")

    }

    MessageBox(param) {
        cc.log("TODO MessageBox")
        MsgBox(param)
    }

    confirmBox(param) {
        cc.log("TODO confirmBox")
        MsgBox(param)
    }

    reEnterGame(gameid, serverid, info) {
        cc.log("TODO reEnterGame")
    }

    enterLobby() {
        this.LeaveGameScene()
    }


    showShopScene() {
        cc.log("TODO showShopScene")
        showShopPop()
    }

    GetMoneyShortString(money) {
        if (money < 10000) {
            return money
        }

        if (money < 100000000) {
            money = money / 10000
            money = money.toPrecision(4) + "万"
        }else{
            money = money / 100000000
            money = money.toPrecision(4) + "亿"
        }
        return money
    }

    closeScene(name) {
        SceneManager.Instance.closeScene(name)
    }

    isSceneExist(name) {
        return SceneManager.Instance.isSceneExist(name)
    }

    setGame(game) {
        this.gamescene = game
    }

    judgeExitGame() {
    	// if(this.gamescene.state == 'startGame'){
    	// 	// this.showGameCommonTipLayer({
        //     //     msg : "如果现在退出游戏，会\n由系统托管，输了的话千万别怪它哦!",
        //     //     style: 1,
        //     //     confirmCback: () => { this.LeaveGameScene() }
        //     // })
        // }
        // else{
		// 	this.LeaveGameScene()
        // }
        this.LeaveGameScene()
    }

    LeaveGameScene(param?) {
        czcEvent("消消乐", "离桌1", "游戏返回大厅")
        if(this.henry_debug){
            return
        }
        cc.log("TODO LeaveGameScene")
        let param = {
            isOnGameExit: 0
        }
    	if(this.gamescene.state == 'startGame'){
            param.isOnGameExit = 1
        }
        gobackToMain(param)
    }
    
    getNeedReConnect() {
        return this.needReConnectFlag
    }

    setNeedReConnect(flag) {
        this.needReConnectFlag = flag
    }

    //刷新动物图标声音
    playAnimalAppear() {
        cc.log("TODO playAnimalAppear")
        if(this.audioManager){
            this.audioManager.playSound("audio_animalAppear");
        }
    }

    //按钮声音
    playBtnSound() {
        cc.log("TODO playBtnSoundEffect")
        if(this.audioManager){
            this.audioManager.playSound("audio_buttonClick");
        }
    }

    //消除音效
    playCrushSound() {
        cc.log("TODO playCrushSound")
        if(this.audioManager){
            this.audioManager.playSound("audio_create1");
        }
    }

    //暴击音效
    playCreate2Sound() {
        cc.log("TODO playCreate2Sound")
        if(this.audioManager){
            this.audioManager.playSound("audio_create2");
        }
    }
    //大暴击音效
    playCreate3Sound() {
        cc.log("TODO playCreate3Sound")
        if(this.audioManager){
            this.audioManager.playSound("audio_create3");
        }
    }
    //掉落音效
    playDropSound() {
        cc.log("TODO playDropSound")
        if(this.audioManager){
            this.audioManager.playSound("audio_drop");
        }
    }
    //结束无奖励音效
    playNoRewardSound() {
        cc.log("TODO playNoRewardSound")
        if(this.audioManager){
            this.audioManager.playSound("audio_lose");
        }
    }

    //结束有奖励音效
    playRewardSound() {
        cc.log("TODO playNoRewardSound")
        if(this.audioManager){
            this.audioManager.playSound("audio_normalPrize");
        }
    }
    
    //瓜分宝藏音效
    playWoohooSound() {
        cc.log("TODO playNoRewardSound")
        if(this.audioManager){
            this.audioManager.playSound("audio_woohoo");
        }
    }
  
}
