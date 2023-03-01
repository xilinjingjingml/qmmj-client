
import { MsgBox, numberFormat, iMessageBox } from "../base/BaseFuncTs";
import {gobackToMain} from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import BaseComponent from "../base/BaseComponent";
import BaseFunc = require("../base/BaseFunc")
import { CELL_WIDTH, CELL_HEIGHT, NUM_ARRAY1, NUM_ARRAY2, NUM_ARRAY3, LOCK } from "./ConstValue.xxl";
import GameLogic from "./GameLogic.xxl";
import DataManager from "../base/baseData/DataManager";
import ChangeNum from "./ChangeNum.xxl";

let gameTexture = [
    "/moduleXXLRes/texture/animal/animal_xxl",    
]

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameController extends BaseComponent {

    //存放未开始前所有动画节点层
    @property(cc.Node)
    animalLayer:cc.Node = null

    @property(cc.Prefab)
    defaultPrefab:cc.Prefab = null

    @property(cc.Node)
    grid:cc.Node = null

    //本局获得scrollview
    @property(cc.Node)
    gainContent:cc.Node = null
    //本局获得money
    @property(cc.Label)
    gainLabel:cc.Label = null;

    //正常颜色
    @property(cc.Prefab)
    item:cc.Prefab = null;
    //灰色
    @property(cc.Prefab)
    grayItem:cc.Prefab = null;

    //投注详情
    @property(cc.Node)
    nodeDetail:cc.Node = null

    @property(cc.Label)
    num1:cc.Label = null

    @property(cc.Label)
    num2:cc.Label = null

    @property(cc.Label)
    num3:cc.Label = null

    @property(cc.Label)
    num4:cc.Label = null

    @property(cc.Label)
    num5:cc.Label = null

    @property(cc.Label)
    totalNum:cc.Label = null

    //提示
    @property(cc.Node)
    nodeStartGameTip:cc.Node = null

    //暴击动画层
    @property(cc.Node)
    baojiLayer:cc.Node = null;

    @property(cc.Prefab)
    baojiItem:cc.Prefab = null;

    @property(cc.Prefab)
    resultAni:cc.Prefab = null;

    @property(cc.Prefab)
    failResultAni:cc.Prefab = null;

    listTable: any[];
    thisComponentName:string = "GameController.xxl"
    gridScript: any;

    //游戏是否已经开始
    gameStatue:any;
    getMoney: number;
      
    //是否跳过动画
    isSkipAnimation:any;
    betDataInfo: any[];
    nodeResult: cc.Node;
    btnStart: cc.Node;
    btnStartAuto: cc.Node;
    isAutoGame:Boolean = false;
    isClickStartBtn: boolean;
    isPushDownStartBtn:boolean = false;
    timeCounter:number = 0;
    showAutoStarttimeCounter:number = 0;
    clickStartBtnTimeLock:boolean = false;
    nodeRightDown: any;
    nodeCenter: any;
    nodeRightUp: any;
    baoZangBg: any;
    nodeActionStart: any;

    //数字滚动参数
    labelBaoZang: cc.Node;
    @property(ChangeNum)
	changNum:ChangeNum = null;
    numArray: number[];
    betTip: any;

    //玩家当前局数
    curRound: any;
    super_award_not: any;
    gc_super_award_not: any;

    @property(cc.Node)
    closeBaoZang:cc.Node = null;
    @property(cc.Node)
    openBaoZang:cc.Node = null;
    @property(sp.Skeleton)
    baoZangSpine:sp.Skeleton = null;
    
    // COMMON_OPCODE = [

    // ]

    //适配
    onFixLongScreen() {
        // this.nodeRightDown.scale = 0.8
        // this.nodeCenter.scale = 0.9
        // this.nodeRightUp.scale = 0.9
        // // this.nodeMiddleRight.scale = 0.85
        // this.baoZangBg.y += 20
        // this.nodeDetail.y += 20
    }

    onFixShortScreen() {

    }

    __bindButtonHandler() {
        cc.log("__bindButtonHandler")
        // BaseFunc.AddClickEvent(this["btnStart"], this.node, this.thisComponentName, "onPressStartGame", 0, 3);
        BaseFunc.AddClickEvent(this["btnExit"], this.node, this.thisComponentName, "onPressExitGame", 0, 3);
        BaseFunc.AddClickEvent(this["btnAwardRule"], this.node, this.thisComponentName, "onPressBtnAwardRule", 0, 3);
        BaseFunc.AddClickEvent(this["btnSkipAnimation"], this.node, this.thisComponentName, "onPressBtnSkipAnimation", 0, 3);
        //玩法说明
        BaseFunc.AddClickEvent(this["btnRule"], this.node, this.thisComponentName, "onPressBtnRule", 0, 3);
        BaseFunc.AddClickEvent(this["btnRank"], this.node, this.thisComponentName, "onPressBtnRank", 0, 3);
        BaseFunc.AddClickEvent(this["btnNodeDetail"], this.node, this.thisComponentName, "onPressBtnNodeDetail", 0, 3);
        BaseFunc.AddClickEvent(this["btnNodeDetailMask"], this.node, this.thisComponentName, "onPressbtnNodeDetailMask", 0, 3);
             
    }

    onOpenScene(){
        GameLogic.Instance().setGame(this);
        this.proto_cb_login_req_sender();
        this.registMessageHandler()
        this.updateUserInfo(DataManager.UserData.money);     
        GameLogic.Instance().audioManager.playBackground();

        this.gridScript = this.grid.getComponent("Grid.xxl");
        this.gridScript.setController(this);
        this.gridScript.initNodePool();
    }
    
	onCloseScene() {
        cc.log("onDestroy")
        this.gridScript.clearNodePool();
		GameLogic.Instance().destory()
    }

    registMessageHandler() {
        // this.addListener("proto_lc_send_user_data_change_not", this.proto_lc_send_user_data_change_not_handler.bind(this));
        // this.addListener("proto_bc_join_table_ack", this.proto_bc_join_table_ack_handler.bind(this))
    }

    //获取当前用户局数
    proto_gc_common_not(event){
        cc.log("proto_gc_common_not===",event);
        let message = event.packet;
        let nOp = message.nOp;
        let cChairID = message.cChairID;
        let nValue = message.nValue;
        if(nOp == 0){
            // this.curRound = nValue;
            // this.setRoundTip(false);
        }
    }

    proto_bc_update_ply_data_not(event){
        //cc.log("proto_bc_update_ply_data_not...")
        let message = event.packet;
        let amount = message.amount;
        let plyGuid = message.plyGuid;
        let uptReason = message.uptReason;
        let uptType = message.uptType;
        let variant = message.variant;
        let guid = DataManager.UserData.guid;
        if(guid == plyGuid){
            if(uptType == 0){
                DataManager.UserData.money = amount;
            }  
        }
    }

    proto_lc_send_user_data_change_not(event) {
        //cc.log("proto_lc_send_user_data_change_not...")
        let message = event.packet
        let ply_guid = message.ply_guid;
        let index = message.index;
        let num = message.num;
        let money = message.plyLobbyData.money;
        DataManager.UserData.money = money;
        let guid = DataManager.UserData.guid;
        if(guid == ply_guid){
            this.updateUserInfo(DataManager.UserData.money);
        } 
    }
    proto_bc_join_table_ack(event){
        cc.log("proto_bc_join_table_ack_handler...");
        let message = event.packet
        var ret = message.ret
        
		if (ret == 0) {

            this.initTouchScene();
        }else{

        }
    }
    //宝藏奖池
    proto_gc_super_award_not(event){
        let message = event.packet;
        let nRet = message.nRet;
        let nValue = message.nValue;
        this.super_award_not = message;
        let value = Number(this.labelBaoZang.getComponent(cc.Label).string);
        if(GameLogic.Instance().lock){
            if(this.closeBaoZang.active){
                this.closeBaoZang.getComponent(cc.Animation).play();
                this.baoZangSpine.getComponent(sp.Skeleton).addAnimation(0,"animation2",false,2);
            }
            if(this.openBaoZang.active){
                this.openBaoZang.getComponent(cc.Animation).play();
                this.baoZangSpine.getComponent(sp.Skeleton).addAnimation(0,"animation",false,2);
            }    
            return;
        }
        if(nRet == 0){
            //宝藏未开启
            if(value == 0){
                this.labelBaoZang.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(this.labelBaoZang,nValue);
            }

            this.closeBaoZang.active = true;
            this.openBaoZang.active = false;
            this.closeBaoZang.getComponent(cc.Animation).play();
            this.baoZangSpine.getComponent(sp.Skeleton).addAnimation(0,"animation2",false,2);
            
        }
        else if(nRet == 1){
            //宝藏开启
            if(value == 0){
                this.labelBaoZang.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(this.labelBaoZang,nValue);
            }
            this.closeBaoZang.active = false;
            this.openBaoZang.active = true;
            this.openBaoZang.getComponent(cc.Animation).play();
            this.baoZangSpine.getComponent(sp.Skeleton).addAnimation(0,"animation",false,2);
        }
        else if(nRet == 2){
            //封顶
        }
        else if(nRet == 3){
            //中奖
            GameLogic.Instance().isSuperReward = true;
            GameLogic.Instance().lock = true;
            this.gc_super_award_not = message;
        }
        else if(nRet == 4){
            //未中奖
            GameLogic.Instance().isSuperReward = true;
            this.gc_super_award_not = message;
        }     
    }

    showSuperAwardNot(initParam=[]){
        
        if(this.gc_super_award_not){
            let gc_super_award_not = this.gc_super_award_not;
            this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function(){
                if(this.isAutoGame){
                    this.cancelAutoStart()
                } 
                initParam["gc_super_award_not"] = gc_super_award_not;
                SceneManager.Instance.popScene("moduleXXLRes", "RollAnimal",initParam);
            },this))); 
        }
    }
    
    // use this for initialization
    onLoad() {
        this.listTable = []
    }

    start(){

        this.isClickStartBtn = true;
        this.gameStatue = false;
        this.num1 = this.num1.getComponent(cc.Label);
        this.num2 = this.num2.getComponent(cc.Label);
        this.num3 = this.num3.getComponent(cc.Label);
        this.num4 = this.num4.getComponent(cc.Label);
        this.num5 = this.num5.getComponent(cc.Label);
        this.totalNum = this.totalNum.getComponent(cc.Label);
        this.totalNum.string = "0";
        this.num1.string = "0";
        this.num2.string = "0";
        this.num3.string = "0";
        this.num4.string = "0";
        this.num5.string = "0";
        this.gainLabel = this.gainLabel.getComponent(cc.Label);

        // this.nodeDetail.active = true;
        this.nodeStartGameTip.active = false;
        this.getMoney = 0;

        this.nodeResult = cc.find("nodeResult",this.node);
        //宝藏
        this.labelBaoZang = cc.find("nodeRightUp/nodeBaoZang/baoZangBg/labelBaoZang", this.node);
        this.labelBaoZang.getComponent(cc.Label).string = "0";
        this.changNum = new ChangeNum();

        this.betTip = cc.find("nodeRightUp/nodeDetail/betTip",this.node);
        this.betTip.active = false; 
        this.setDefaultBetValue();
        this.onPlayDefaultAnimation();
    }
    //根据玩家金豆进行新手调控
    setDefaultBetValue(){
        let curBetMoney =  DataManager.UserData.money/5/4;
        let index = 0;
        this.numArray=NUM_ARRAY3;
        let isFind = false;
        for (let i = 0; i < NUM_ARRAY3.length; i++) {
            let showMoney = this.numArray[i];
            if(showMoney>curBetMoney){
                index = i-1;
                isFind = true;
                break;
            }
        }
        if(isFind){
            index = index;
        }else{
            index = NUM_ARRAY3.length -1;
        }
        if(index==0){
            index = 1;
        }
        this.num1.string = (this.numArray[index]).toString();
        this.num2.string = (this.numArray[index]).toString();
        this.num3.string = (this.numArray[index]).toString();
        this.num4.string = (this.numArray[index]).toString();
        this.num5.string = (this.numArray[index]).toString();
        this.totalNum.string = (this.numArray[index]*5).toString();
    }

    //根据协议局数显示提示文字,(已弃用)
    setRoundTip(flag){
        if(flag){
            this.curRound = this.curRound +1;
        }
        // cc.log("this.curRound===",this.curRound);     
        let str = "";
        if(this.curRound < 10){
            this.numArray = NUM_ARRAY1;
            str = "您当前的最大单项投注额为500，更高投注额在玩游戏后逐渐解锁！";
        }
        else if(this.curRound < 20){
            this.numArray = NUM_ARRAY2;
            str = "您当前的最大单项投注额为5000，更高投注额在玩游戏后逐渐解锁！";
        }
        else{
            this.numArray = NUM_ARRAY3;
            str = "恭喜您解锁了更高额度的投注额，点击+号来调整投注额吧";
        }
        //默认值
        if(this.curRound==0 || this.curRound==10 || this.curRound==20){
            this.nodeDetail.active = true;
            //文本内容
            let richTextBetTip = cc.find("nodeRightUp/nodeDetail/betTip/richTextBetTip",this.node);
            let text = '<b>' + str + ' </b>';
            richTextBetTip.getComponent(cc.RichText).string = text;
            this.betTip.active = true;
            this.betTip.opacity = 255;
            let action = []
            action[action.length] = cc.delayTime(5)
            action[action.length] = cc.fadeTo(1.5, 0)
            this.betTip.runAction(cc.sequence(action))
        }      
    }

    hide_game_spine_ani(name, callback: () => void = null){
        let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
        ani_node.active = false
    }

    //动画
    play_game_spine_ani(name, callback: () => void = null) {
		let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
		ani_node.active = true
		let animName = ''
		switch (name) {
			case 'paopao':				
				animName = 'animation'	
				break;					
			default:				
				break;
		}
		if (animName == '') {
			return
		}

		let spineHandler = ani_node.getComponent('sp.Skeleton');
		let track = spineHandler.setAnimation(0, animName, true);
		// if (track) {
		// 	spineHandler.setCompleteListener((trackEntry, loopCount) => {
		// 		let name = trackEntry.animation ? trackEntry.animation.name : '';				
		// 		ani_node.active = false
		// 		if (name === animName && callback) {
		// 			callback();
		// 		}
		// 	});
		// }
    }

    //开始按钮动画 kaishi1
    hide_start_spine_ani(name, callback: () => void = null){
        let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
        ani_node.active = false
    }
    
    play_start_spine_ani(name, callback: () => void = null) {
		let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
		ani_node.active = true
		let animName = ''
		switch (name) {
			case 'kaishi':				
				animName = 'animation'	
				break;					
			default:				
				break;
		}
		if (animName == '') {
			return
		}

		let spineHandler = ani_node.getComponent('sp.Skeleton');
		let track = spineHandler.setAnimation(0, animName, true);
	}
    
    //自动开始按钮动画
    hide_auto_start_spine_ani(name, callback: () => void = null){
        let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
        ani_node.active = false
    }
    
    play_auto_start_spine_ani(name, callback: () => void = null) {
		let ani_node = this["ani_spine_" + name]
		if (typeof(this["ani_spine_" + name]) == "undefined") {
			return
        }
		ani_node.active = true
		let animName = ''
		switch (name) {
			case 'kaishi':				
				animName = 'animation'	
				break;					
			default:				
				break;
		}
		if (animName == '') {
			return
		}

		let spineHandler = ani_node.getComponent('sp.Skeleton');
		let track = spineHandler.setAnimation(0, animName, true);
    }
    
    playStartAni(){
        if(this.gameStatue){
            this.hide_start_spine_ani("kaishi1");
        }else{
            this.play_start_spine_ani("kaishi1");
        }
    }
    
    initTouchScene() {
        this.isAutoGame = false;
        let startTime = 0;
        let endTime = 0;
        this.btnStart = cc.find("nodeRightDown/btnStart",this.node);
        this.btnStartAuto = cc.find("nodeRightDown/btnStartAuto",this.node);

        this.btnStart.active = true;
        this.btnStartAuto.active = false;

        this.btnStart.on(cc.Node.EventType.TOUCH_START, (event) => {      	
            // startTime = new Date().getSeconds()
            this.isPushDownStartBtn = true
            this.showAutoStarttimeCounter = 0
        }, this);

        this.btnStart.on(cc.Node.EventType.TOUCH_END, (event) => {   
            this.isPushDownStartBtn = false    
            // endTime = new Date().getSeconds()
            // if(endTime - startTime >=2){
            //     //自动开始游戏
            //     if(this.gameStatue){

            //     }
            //     else{
            //         this.isAutoGame = true;
            //         this.onPressAutoStartGame();
            //     }         
            // }
            // else{
            //     //正常开始游戏               
                if(this.gameStatue){
            //        //游戏开始不能再点击开始按钮
                }
                else{
            //         this.isAutoGame = false;
                    this.onPressStartGame();
                }  
            // }

        }, this);

        this.btnStartAuto.on(cc.Node.EventType.TOUCH_START, (event) => {    
            this.cancelAutoStart()
        }, this);

    }

    cancelAutoStart() {	
        this.btnStart.active = true;
        this.btnStartAuto.active = false;
        this.isAutoGame = false; 
        this.isPushDownStartBtn = false
    }

    onPressAutoStartGame(){
        cc.log("onPressAutoStartGame")
        if(this.gc_super_award_not){
            if(this.isAutoGame){
                this.cancelAutoStart()
            }
            return;
        }
        let isBetMoney = this.isBetMoney();
        if(isBetMoney){
            this.btnStart.active = false;
            this.btnStartAuto.active = true;
        }
        this.onPressStartGame();
    }

    //游戏开始按钮
    onPressStartGame(){
        GameLogic.Instance().playBtnSound();
        if(GameLogic.Instance().lock || GameLogic.Instance().isSuperReward ){
            return;
        }
        if(this.gameStatue){
            return;
        }
        if (this.clickStartBtnTimeLock) {
            return
        }

        this.clickStartBtnTimeLock = true
        
        this.nodeActionStart.runAction(cc.sequence(
            cc.delayTime(0.8), 
            cc.callFunc(() => {
                this.clickStartBtnTimeLock = false
            })
        ))

        // cc.log("onPressStartGame===",DataManager.UserData.money, Number(this.totalNum.string) );
        let needMoney = DataManager.UserData.money - Number(this.totalNum.string);
        if(needMoney<0){
            //金额不够
            if(this.isAutoGame){
                this.cancelAutoStart()
            }      
            SceneManager.Instance.popScene("moduleLobby", "UnenoughGuidePop")
            return;
            // let self = this;
            // if(this.isClickStartBtn){
            //     this.isClickStartBtn = false;     
            //     iMessageBox("请先充值再开始游戏",function(){
            //         self.isClickStartBtn = true;
            //     });                
            // }
            // return;
        }
        let isBetMoney = this.isBetMoney();
        if(isBetMoney){
            //已下注
            console.log("onPressStartGame--this.betDataInfo===",this.betDataInfo);
            this.nodeDetail.active = false;
            this.updateUserInfo(DataManager.UserData.money);
            this.clearList();
            this.clearDefaultAnimation(); 
            this.beginGame();      
        }
        else{
            //未下注
            let self = this;
            if(this.isClickStartBtn){
                this.isClickStartBtn = false;     
                iMessageBox("请先押注后再开始游戏",function(){
                    self.isClickStartBtn = true;
                });           
            }
            return;       
        }       
    }

    isBetMoney(){
        let betDataInfo = [];
        let oneInfo = Number(this.num1.string);
        let twoInfo = Number(this.num2.string);
        let threeInfo = Number(this.num3.string);
        let fourInfo = Number(this.num4.string);
        let fiveInfo = Number(this.num5.string);

        betDataInfo.push(oneInfo);
        betDataInfo.push(twoInfo);
        betDataInfo.push(threeInfo);
        betDataInfo.push(fourInfo);
        betDataInfo.push(fiveInfo);
        this.betDataInfo = betDataInfo;

        if( (oneInfo == 0) && (twoInfo == 0) && (threeInfo == 0) && (fourInfo == 0) && (fiveInfo == 0) ){
            return false;
        }
        else{
            return true;
        }
    }

    updateUserData() {
        this.updateUserInfo(DataManager.UserData.money)
    }

    updateUserInfo(money){
        let goldNum = cc.find("nodeTop/goldBg/goldNum", this.node)
        if (null != goldNum){
            goldNum.getComponent(cc.Label).string = numberFormat(money)
        }
    }

    //退出游戏
    onPressExitGame(EventTouch, data) {
        GameLogic.Instance().playBtnSound();
        if(this.gameStatue){
            let initParam = {
                title: "提示",
                content: "游戏正在进行中，请等待游戏结束后再退出游戏！",
                buttonNum: 1,
                confirmClose: true,
            }
            MsgBox(initParam)
        }else{
            this.changNum.removeSchedule();
            GameLogic.Instance().judgeExitGame();
        }
        
    }

    onPressBack() {
        this.onPressExitGame(null, null)
    }

    //玩法说明
    onPressBtnRule(){
        GameLogic.Instance().playBtnSound();
        SceneManager.Instance.popScene("moduleXXLRes", "GameRule");
    }

    onPressBtnRank(){
        GameLogic.Instance().playBtnSound();
        SceneManager.Instance.popScene("moduleXXLRes", "RankScene");
    }
    //奖金怪
    onPressBtnAwardRule(){
        GameLogic.Instance().playBtnSound();
        SceneManager.Instance.popScene("moduleXXLRes", "RewardScene");
    }
    //宝藏
    onPressBtnBaoZang(initParam = []){
        initParam["super_award_not"] = this.super_award_not;
        GameLogic.Instance().playBtnSound();
        SceneManager.Instance.popScene("moduleXXLRes", "BaoZangScene",initParam);
    }

    //跳过动画
    onPressBtnSkipAnimation(){
        let checkmark = cc.find("nodeRightDown/btnSkipAnimation/checkmark",this.node);
        if(checkmark.active ==false){
            checkmark.active = true;
            this.isSkipAnimation = 1;
        }else{
            checkmark.active = false
            this.isSkipAnimation = 0;
        }
    }

    //游戏结算
    //消除1-3波：显示为“不错哦！”
    //消除4-6波：显示为“太厉害了”
    //消除7+波：显示为“帅呆了”
    //在有消除奖金怪并获得奖励时，结算显示为：“惊世骇俗”
    showGameResult(gainMoney,count){
        let index = 0;
        if(count>=1 && count<=3){
            index = 1;
        }
        else if(count<=6){
            index = 2;
        }
        else if(count<=9){
            index = 3;
        }
        else{
            index = 4
        }
        if(gainMoney>0){
            GameLogic.Instance().playRewardSound();
            let resultAniPrefab = cc.instantiate(this.resultAni);
            resultAniPrefab.parent = this.nodeResult;
            resultAniPrefab.setPosition(0,80);
            resultAniPrefab.getComponent("GameResult.xxl").initGameResult(gainMoney, index);

        }else{
            GameLogic.Instance().playNoRewardSound();
            let failResultAniPrefab = cc.instantiate(this.failResultAni);
            failResultAniPrefab.parent = this.nodeResult;
            failResultAniPrefab.setPosition(0,-40);
        }
        
    }
    clearGameResult(){
        this.nodeResult.children.forEach((item)=> {
            item.destroy()
        })
    }

    createTempStar(){
        let xOffset = (Math.floor((Math.random()*20))-10)*(this.animalLayer.width/20);
        let yOffset = (Math.floor((Math.random()*20))-10)*(this.animalLayer.height/20);

        let xPos = xOffset;
        let yPos = yOffset;
        let newPrefab = cc.instantiate(this.defaultPrefab);
        newPrefab.position = cc.v2(xPos,yPos);
        
        let type = Math.floor( Math.random()*5 );
        //加载图片
        let url = "moduleXXLRes/texture/animal/animal"+type;
        cc.loader.loadRes(url, cc.SpriteFrame, (err, texture) => {
            if (err){
                console.log(err)
                return
            }
            if(newPrefab.getComponent(cc.Sprite).spriteFrame){
                newPrefab.getComponent(cc.Sprite).spriteFrame = texture;
            }
        })
        newPrefab.name = type.toString();
        return newPrefab;
    }

    checkCanInsert(newPrefab,prefabList){
        let isInsert = true;
        let xPos = newPrefab.position.x;
        let yPos = newPrefab.position.y;
        console.log("xPos, yPos, w, h===",xPos, yPos, newPrefab.width, newPrefab.height);
        let curPoint = new cc.Rect(xPos,yPos,newPrefab.width, newPrefab.height)

        for (let i = 0; i < prefabList.length; i++) {
            let x = prefabList[i].position.x;
            let y = prefabList[i].position.y;
            let w = prefabList[i].width;
            let h = prefabList[i].height;
            let havePoint = new cc.Rect(x, y, w, h);

            let isIntersect = curPoint.intersects(havePoint);
            isInsert = isIntersect;

            if(isInsert){
                isInsert = false;
                break;
            }    
        }
        return isInsert;
    }

    randomStar(){
        
        let cout = 0;
        let prefabList = [];

        var finished = cc.callFunc(function(){

            let newPrefab = this.createTempStar();
            // let isCanInsert = this.checkCanInsert(newPrefab,prefabList);
            let isCanInsert = true
            if(isCanInsert){
                newPrefab.parent = this.animalLayer;
                prefabList.push(newPrefab);
                cout++;
            }  
            if(cout< 15){
                this.node.runAction(cc.sequence(cc.delayTime(0),finished));
            }
            else{
                //全部生成完
                return prefabList;
            }       
        },this);

        if(cout<15){
            this.node.runAction(cc.sequence(cc.delayTime(0),finished));
        }  

    }
    playDefaultAnimation(){
        // this.randomStar();
        this.play_game_spine_ani("paopao");
        //未开始游戏，随机生成几个动物
        let defaultNum = 200;
        let prefabList = []
        let curTypeCount = 0;
        for (let i = 0; i < defaultNum; i++) {
            let xOffset = (Math.floor((Math.random()*20))-9)*(this.animalLayer.width/23);
            let yOffset = (Math.floor((Math.random()*20))-9)*(this.animalLayer.height/23);

            let xPos = xOffset;
            let yPos = yOffset;
            let type = Math.floor(Math.random()*5)+1;
            let url = "moduleXXLRes/texture/spine/animal"+type;
            let newPrefab = cc.instantiate(this.defaultPrefab);
            newPrefab.position = cc.v2(xPos,yPos);
            newPrefab.name = type.toString();
            let isFind = false;

            let curPoint = new cc.Rect(xPos,yPos,newPrefab.width-30, newPrefab.height-30)
            let curType = type;
            // console.log("curType===",curType);
            
            let isIntersect = true;
            for (let i = 0; i < prefabList.length; i++) {              
                let tmpType = Number(prefabList[i].name);
                if(tmpType==curType){
                    curTypeCount++;               
                }  
            }

            for (let i = 0; i < prefabList.length; i++) {                
                let x = prefabList[i].position.x;
                let y = prefabList[i].position.y;
                let w = prefabList[i].width-30;
                let h = prefabList[i].height-30;
                let havePoint = new cc.Rect(x, y, w, h);
                let tempIsIntersect = curPoint.intersects(havePoint);

                if(tempIsIntersect){
                    isIntersect = false;
                    break;
                }    
            }

            if(isIntersect){
                isFind = true;
            }
          
            if(isFind){  
                //加载图片 
                cc.loader.loadRes(url, sp.SkeletonData, function (err, skedate) {
                    if (err) {
                        cc.error(err.message || err);
                        return;
                    }
        
                    let ske = newPrefab.getChildByName("animal").getComponent(sp.Skeleton)
                    if(ske){
                        let random = Math.floor(Math.random()*2)+1;
                        ske.skeletonData = skedate;
                        if(random==1){
                            ske.setAnimation(0, "daiji", true)
                        }else if(random==2){
                            ske.setAnimation(0, "zhayan", true)
                        }
                    }
                }.bind(this));

                newPrefab.parent = this.animalLayer;
                prefabList.push(newPrefab);
            }
                    
            if(prefabList.length>=15){
                break;
            }                  
        }
  
        //给所有随机动物添加动画
        for(let i in prefabList){
            let aniMoveSeq1 = cc.repeatForever(
                cc.sequence(
                    cc.moveTo(1, prefabList[i].position.x, prefabList[i].position.y+8),
                    cc.moveTo(1, prefabList[i].position.x, prefabList[i].position.y-8)
                ).speed(2)
            );
            let aniMoveSeq2 = cc.repeatForever(
                cc.sequence(
                    // cc.scaleTo(1, 1.2, 1.2),
                    // cc.scaleTo(1, 1, 1),
                    cc.moveTo(0.8, prefabList[i].position.x, prefabList[i].position.y+10),
                    cc.moveTo(0.8, prefabList[i].position.x, prefabList[i].position.y)
                ).speed(4)
            );
            let rand = Math.floor(Math.random()*2);
            if(rand ==1){
                prefabList[i].runAction(aniMoveSeq1);
            }
            else{
                prefabList[i].runAction(aniMoveSeq2);
            }          
        }
        this.showSuperAwardNot();
    }

    //游戏开始前默认动画播放
    onPlayDefaultAnimation(){
        // console.log("onPlayDefaultAnimation......");
        this.setDefault();
        if(this.isAutoGame){
            //自动开始，继续游戏
            this.playDefaultAnimation();
            if(this.curRound==0 || this.curRound==10 || this.curRound==20){
                this.btnStart.active = true;
                this.btnStartAuto.active = false;
                this.cancelAutoStart();
            }else{
                this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function(){
                    this.onPressStartGame();
                },this))); 
            }
        }
        else{
            this.playDefaultAnimation();
        }
        this.play_start_spine_ani("kaishi1");        
    }
    setDefault(){
        this.betDataInfo = null;
        this.gameStatue = false;  
    }

    //清理默认动画
    clearDefaultAnimation(){
        this.hide_game_spine_ani("paopao");
        this.animalLayer.children.forEach((item)=> {
            item.destroy()
        })
    }

    setListTable(_type, _count){
        let newList = {type:_type,count:_count}
        this.listTable.push(newList)
    }

    //下一局开始要清理本局获得的数据
    clearList() {
        this.super_award_not = null;
        this.gc_super_award_not = null;
        this.getMoney = 0;  
        this.gainLabel.string = "0";
        this.gainContent.children.forEach((item)=> {
            item.destroy()
        })
    }
    showBaoJiEffect(type, count, pos, value){
        let nValue = value;
        let oneMoney = Number(this.num1.string);
        let twoMoney = Number(this.num2.string);
        let threeMoney = Number(this.num3.string);
        let fourMoney = Number(this.num4.string);
        let fiveMoney = Number(this.num5.string);
        let x = pos.x;
        let y = pos.y;
        let baojiItem;

        let playBaoJi = function(value){

            if(count>=8){
                GameLogic.Instance().playCreate3Sound();
            }
            else if(count >=6){
                GameLogic.Instance().playCreate2Sound();
            }
            else{
                // GameLogic.Instance().playCrushSound();
            }
            
            let tmpTotalMoney = Math.floor(value);
            baojiItem.getChildByName("num").getComponent(cc.Label).string = ";"+tmpTotalMoney;   
            baojiItem.position = cc.v2(x,y);
            baojiItem.parent = this.baojiLayer;
            baojiItem.active = true;
            baojiItem.opacity = 255;
            let endPos = cc.v2(x, y+30);
            let action0 = []
            action0[action0.length] = cc.delayTime(0.1)
            action0[action0.length] = cc.moveTo(0.4,endPos);
            action0[action0.length] = cc.fadeOut(0.2)
            action0[action0.length] = cc.callFunc(() => {
                this.baojiLayer.children.forEach((item)=> {
                    item.destroy()
                })
            })
            baojiItem.runAction(cc.sequence(action0));
        }
        var type = type;
        if(type ==1 && oneMoney>0 ){
            baojiItem = cc.instantiate(this.baojiItem)

            if(count>=8){
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = true;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else if(count >=6){
                baojiItem.getChildByName("img_baoji").active = true;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else{
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            playBaoJi.call(this,nValue);
        }

        if(type ==2 && twoMoney>0 ){
            baojiItem = cc.instantiate(this.baojiItem)

            if(count>=8){
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = true;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else if(count >=6){
                baojiItem.getChildByName("img_baoji").active = true;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else{
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            playBaoJi.call(this,nValue);
        }

        if(type ==3 && threeMoney>0 ){
            baojiItem = cc.instantiate(this.baojiItem)

            if(count>=8){
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = true;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else if(count >=6){
                baojiItem.getChildByName("img_baoji").active = true;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else{
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            playBaoJi.call(this,nValue);
        }

        if(type ==4 && fourMoney>0 ){
            baojiItem = cc.instantiate(this.baojiItem)

            if(count>=8){
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = true;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else if(count >=6){
                baojiItem.getChildByName("img_baoji").active = true;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else{
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            playBaoJi.call(this,nValue);
        }

        if(type ==5 && fiveMoney>0 ){
            baojiItem = cc.instantiate(this.baojiItem)

            if(count>=8){
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = true;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else if(count >=6){
                baojiItem.getChildByName("img_baoji").active = true;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            else{
                baojiItem.getChildByName("img_baoji").active = false;
                baojiItem.getChildByName("img_dabaoji").active = false;
                baojiItem.getChildByName("img_guafenbaozang").active = false;
            }
            playBaoJi.call(this,nValue);
        }
        //奖金怪瓜分宝藏
        if(type == 10){
            baojiItem.getChildByName("img_baoji").active = false;
            baojiItem.getChildByName("img_dabaoji").active = false;
            baojiItem.getChildByName("img_guafenbaozang").active = true;
        }
    }

    //更新本局获得
    updateGainDataInfo(_type, _count, time, pos, value){
        // console.log("updateGainDataInfo===",_type, _count, time, pos);
        let newItem;
        let oneMoney = Number(this.num1.string);
        let twoMoney = Number(this.num2.string);
        let threeMoney = Number(this.num3.string);
        let fourMoney = Number(this.num4.string);
        let fiveMoney = Number(this.num5.string);

        let type = _type;
        let count = _count;
        let nValue = value;
        // console.log("updateGainDataInfo222===",oneMoney, twoMoney,threeMoney,fourMoney,fiveMoney);
        this.node.runAction(cc.sequence(cc.delayTime(time),cc.callFunc(function(){          
            if(type == 1){
                if(oneMoney>0){
                    newItem = cc.instantiate(this.item);
                }else{
                    newItem = cc.instantiate(this.grayItem);
                }               
            }
            if(type == 2){
                if(twoMoney>0){
                    newItem = cc.instantiate(this.item);
                }else{
                    newItem = cc.instantiate(this.grayItem);
                }               
            }
            if(type == 3){
                if(threeMoney>0){
                    newItem = cc.instantiate(this.item);
                }else{
                    newItem = cc.instantiate(this.grayItem);
                }               
            }
            if(type == 4){
                if(fourMoney>0){
                    newItem = cc.instantiate(this.item);
                }else{
                    newItem = cc.instantiate(this.grayItem);
                }               
            }
            if(type == 5){
                if(fiveMoney>0){
                    newItem = cc.instantiate(this.item);
                }else{
                    newItem = cc.instantiate(this.grayItem);
                }               
            }
            //奖金怪瓜分宝藏
            if(type == 10){
                newItem = cc.instantiate(this.item);
            }

            newItem.parent = this.gainContent;
            newItem.getChildByName("num").getComponent(cc.Label).string = "X" + count;

            //加载图片
            let changeType = type;
            if(changeType == 10 ){
                changeType = 6;
            }
            let url = "moduleXXLRes/texture/animal/animal"+changeType;
            cc.loader.loadRes(url, cc.SpriteFrame, (err, texture) => {
                if (err){
                    console.log(err)
                    return
                }
                let icon = newItem.getChildByName("icon");
                if(icon && icon.getComponent(cc.Sprite).spriteFrame){
                    icon.getComponent(cc.Sprite).spriteFrame = texture;
                }
            })

            this.updateMoney(nValue);

        }, this)));
    }

    //更新本局赢钱数
    updateMoney(value){
        this.getMoney = this.getMoney + value;
        this.gainLabel.string = ""+Math.floor(this.getMoney);
    }
    
    //显示投注详情面板
    onPressOpenBetDetail(){
        GameLogic.Instance().playBtnSound();
        this.nodeDetail.active = true;
    }

    onPressCloseBetDetail(){
        GameLogic.Instance().playBtnSound();
        this.nodeDetail.active = false;
    }
    onPressBtnNodeDetail(){
        this.onPressCloseBetDetail();
    }

    onPressbtnNodeDetailMask() {
        
    }

    proto_lc_use_protocol_proto_ack() {
        cc.log("get proto_lc_use_protocol_proto_ack")
    }
    
    proto_cb_login_req_sender() {
    
        GameLogic.Instance().sendMessage({
          plyTicket: DataManager.UserData.ticket,
          opcode: "proto_cb_login_req",
          extParam: "",
          version: 1498492800,
          plyNickname: DataManager.UserData.nickname,
          mainGameId: GameLogic.Instance().gameId,
          gameGroup: 0,
          plyGuid: DataManager.UserData.guid,
        })
        }
    
	proto_bc_login_ack(event) {						
        cc.log("get proto_bc_login_ack")
        this.proto_cb_join_table_req_sender()
    }
    
	proto_cb_join_table_req_sender() {	
		GameLogic.Instance().sendMessage({
			opcode: 'proto_cb_join_table_req',
			tableId: -1,
			password: '',
		})
    }
    
    //开始游戏，加载场景
    beginGame(){
        this.proto_cg_start_bet_req_sender()
    }
    //客户端发送开始游戏
    proto_cg_start_bet_req_sender() {
		GameLogic.Instance().sendMessage({
            opcode: 'proto_cg_start_bet_req',
            nAutoType: this.isSkipAnimation,
            nBetMoney: this.betDataInfo
		})
    }

    //开始协议
    proto_gc_start_bet_ack(event) {
        cc.log("proto_gc_start_bet_ack")      
        let message = event.packet
        let mBoard = message.mBoard;
        let mMatchedTiles = message.mMatchedTiles;
        let nAutoType = message.nAutoType;
        if(nAutoType == -1){
            SceneManager.Instance.popScene("moduleLobby", "UnenoughGuidePop");
            return
        }
        DataManager.UserData.money = DataManager.UserData.money - Number(this.totalNum.string);
        this.updateUserInfo(DataManager.UserData.money);
        if(this.gc_super_award_not){
            return;
        }
        this.gameStatue = true;
        // this.gridScript = this.grid.getComponent("Grid.xxl");
        // this.gridScript.setController(this)

        this.gridScript.setBoardData(message);
        this.gridScript.initGame();

        this.hide_start_spine_ani("kaishi1");
    }

    //总按钮-
    onPressTotalDetailMinus(){
        GameLogic.Instance().playBtnSound();
        if(this.gameStatue || this.isAutoGame ){
            return;
        }
        let curIndex1 = this.getCurrentIndex(Number(this.num1.string))
        if(curIndex1 <= 0){
            curIndex1 = 0;
        }
        else{
            curIndex1 = curIndex1 - 1;
        }
        this.num1.string = this.numArray[curIndex1].toString();


        let curIndex2 = this.getCurrentIndex(Number(this.num2.string))
        if(curIndex2 <= 0){
            curIndex2 = 0;
        }
        else{
            curIndex2 = curIndex2 - 1;
        }
        this.num2.string = this.numArray[curIndex2].toString();

        let curIndex3 = this.getCurrentIndex(Number(this.num3.string))
        if(curIndex3 <= 0){
            curIndex3 = 0;
        }
        else{
            curIndex3 = curIndex3 - 1;
        }
        this.num3.string = this.numArray[curIndex3].toString();

        let curIndex4 = this.getCurrentIndex(Number(this.num4.string))
        if(curIndex4 <= 0){
            curIndex4 = 0;
        }
        else{
            curIndex4 = curIndex4 - 1;
        }
        this.num4.string = this.numArray[curIndex4].toString();

        let curIndex5 = this.getCurrentIndex(Number(this.num5.string))
        if(curIndex5 <= 0){
            curIndex5 = 0;
        }
        else{
            curIndex5 = curIndex5 - 1;
        }
        this.num5.string = this.numArray[curIndex5].toString();

        let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
        this.totalNum.string = total.toString();     
    }

     //投注详情总按钮(+按钮)
     onPressTotalDetailPlus(){
        GameLogic.Instance().playBtnSound(); 
        if(this.gameStatue || this.isAutoGame ){
            return;
        }
        let curIndex1 = this.getCurrentIndex(Number(this.num1.string))
        if(curIndex1 >= this.numArray.length - 1){
            curIndex1 = this.numArray.length - 1;
        }
        else{
            curIndex1 = curIndex1 + 1;
        }
        this.num1.string = this.numArray[curIndex1].toString();


        let curIndex2 = this.getCurrentIndex(Number(this.num2.string))
        if(curIndex2 >= this.numArray.length - 1){
            curIndex2 = this.numArray.length - 1;
        }
        else{
            curIndex2 = curIndex2 + 1;
        }
        this.num2.string = this.numArray[curIndex2].toString();

        let curIndex3 = this.getCurrentIndex(Number(this.num3.string))
        if(curIndex3 >= this.numArray.length - 1){
            curIndex3 = this.numArray.length - 1;
        }
        else{
            curIndex3 = curIndex3 + 1;
        }
        this.num3.string = this.numArray[curIndex3].toString();

        let curIndex4 = this.getCurrentIndex(Number(this.num4.string))
        if(curIndex4 >= this.numArray.length - 1){
            curIndex4 = this.numArray.length - 1;
        }
        else{
            curIndex4 = curIndex4 + 1;
        }
        this.num4.string = this.numArray[curIndex4].toString();

        let curIndex5 = this.getCurrentIndex(Number(this.num5.string))
        if(curIndex5 >= this.numArray.length - 1){
            curIndex5 = this.numArray.length - 1;
        }
        else{
            curIndex5 = curIndex5 + 1;
        }
        this.num5.string = this.numArray[curIndex5].toString();

        let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
        this.totalNum.string = total.toString();
    }


    //得到当前inde
    getCurrentIndex(num){
        let index = 0;
        for (let i = 0; i < this.numArray.length; i++) {
            if(num == this.numArray[i]){
                index = i;
                return index;
            }   
        }
    }
    //10个按钮
    onPressButtons(event, customEventData) { 
        GameLogic.Instance().playBtnSound();
        if(this.gameStatue || this.isAutoGame){
            return;
        }
        if(customEventData == "1"){
            let curIndex = this.getCurrentIndex(Number(this.num1.string));

            if(curIndex<=0){
                curIndex = this.numArray.length-1;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex - 1;
            }
            this.num1.string = this.numArray[curIndex].toString();
            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total.toString();
        }
        else if(customEventData == "2"){    
            let curIndex = this.getCurrentIndex(Number(this.num1.string));

            if(curIndex>=this.numArray.length-1){
                curIndex = 0;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex + 1;
            }
            this.num1.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;
        }
        else if(customEventData == "3"){
            let curIndex = this.getCurrentIndex(Number(this.num2.string));

            if(curIndex<=0){
                curIndex = this.numArray.length-1;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex - 1;
            }
            this.num2.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;    
            
        }
        else if(customEventData == "4"){
            let curIndex = this.getCurrentIndex(Number(this.num2.string));

            if(curIndex>=this.numArray.length-1){
                curIndex = 0;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex + 1;
            }
            this.num2.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;    
            
        }
        else if(customEventData == "5"){
            let curIndex = this.getCurrentIndex(Number(this.num3.string));

            if(curIndex<=0){
                curIndex = this.numArray.length-1;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex - 1;
            }
            this.num3.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total; 
        }
        else if(customEventData == "6"){ 
            let curIndex = this.getCurrentIndex(Number(this.num3.string));

            if(curIndex>=this.numArray.length-1){
                curIndex = 0;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex + 1;
            }
            this.num3.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;   
            
        }
        else if(customEventData == "7"){
            let curIndex = this.getCurrentIndex(Number(this.num4.string));

            if(curIndex<=0){
                curIndex = this.numArray.length-1;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex - 1;
            }
            this.num4.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;     
            
        }
        else if(customEventData == "8"){
            let curIndex = this.getCurrentIndex(Number(this.num4.string));

            if(curIndex>=this.numArray.length-1){
                curIndex = 0;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex + 1;
            }
            this.num4.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;    
            
        }
        else if(customEventData == "9"){
            let curIndex = this.getCurrentIndex(Number(this.num5.string));

            if(curIndex<=0){
                curIndex = this.numArray.length-1;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex - 1;
            }
            this.num5.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;     
            
        }
        else if(customEventData == "10"){ 
            let curIndex = this.getCurrentIndex(Number(this.num5.string));

            if(curIndex>=this.numArray.length-1){
                curIndex = 0;
            }
            else if(curIndex <= this.numArray.length-1){
                curIndex = curIndex + 1;
            }
            this.num5.string = this.numArray[curIndex].toString();

            // let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
            // this.totalNum.string = total;   
            
        }
        let total = Number(this.num1.string)+Number(this.num2.string)+Number(this.num3.string)+Number(this.num4.string)+Number(this.num5.string);
        this.totalNum.string = total.toString();   
    }

    update()
    {
        if(this.gc_super_award_not){
            this.gameStatue = false;
            if(this.isAutoGame){
                this.cancelAutoStart()
            }
            return;
        }
        if(!!this.isPushDownStartBtn)
        {
            this.timeCounter++
            if(this.timeCounter >= 30)
            {
                this.showAutoStarttimeCounter++
                this.timeCounter%=30
            }

            if(!this.isAutoGame && this.showAutoStarttimeCounter >= 2)
            {
                this.showAutoStarttimeCounter = 0
                this.isAutoGame = true;
                this.onPressAutoStartGame();    
            }    
        }
    }

    socket_closed(event) {
        let socketlink = GameLogic.Instance().serverInfo.serverAddr + ":" + (GameLogic.Instance().serverInfo.serverPort + 1)
        cc.log("socket_closed", event.socket.url, socketlink)
        if (event && event.socket && event.socket.url && event.socket.url == socketlink) {      
          GameLogic.Instance().LeaveGameScene()
        }
    }
}
