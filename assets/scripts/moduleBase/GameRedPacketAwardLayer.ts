import BaseFunc = require("../base/BaseFunc")
import BaseComponent from "../base/BaseComponent"
import DataManager from "../base/baseData/DataManager";
import { playADBanner } from "../base/BaseFuncTs";
import { isWeChatGame } from "../gameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameRedPacketAwardLayer extends BaseComponent {


    @property
    thisComponentName:string = "GameRedPacketAwardLayer"

    @property
    lockScene:boolean = true
    lockButton:boolean = false
    
    @property
    selectIndex:number = 1
    
    @property(cc.Prefab)
    prefab_repacket_rain:cc.Prefab = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    __bindButtonHandler() {
        
        BaseFunc.AddClickEvent(this.maskLayer, this.node, this.thisComponentName, "onPressClose", 0, 0);
        
		BaseFunc.AddClickEvent(this.btnRedPacket0, this.node, this.thisComponentName, "onPressGetAward", 0);
		BaseFunc.AddClickEvent(this.btnRedPacket1, this.node, this.thisComponentName, "onPressGetAward", 1);
		BaseFunc.AddClickEvent(this.btnRedPacket2, this.node, this.thisComponentName, "onPressGetAward", 2);
    }

    start () {    
        
        this.logic = this.initParam.logic
        
        if (this.logic.getRedPacketTableType() == 21) {       
            let reason = 0
            if(this.logic.serverInfo.gameId == 389) {
                reason = DataManager.AdsConfig.banner.GameRedPacketAwardLayer_rpddz
            }else if(this.logic.serverInfo.gameId == 391) {
                reason = DataManager.AdsConfig.banner.GameRedPacketAwardLayer_hbermj
            }
            if(playADBanner(true, reason)) {
                // this["nodeMain"].y += 90
            }
        }

        this.registMessageHandler()

        cc.log("start", this.logic.redpacket_award_info)
        
        this.playerRedPacketNum = this.initParam.redPacketNum || 0 

        this.nodeNumberHandler = this.RollNumbers.getComponent("RollNumbers")
        
        this.nodeNumberHandler.setSrcValue(this.playerRedPacketNum)

        this.redpacketPox = [-270, 0, 270]

        for (let i = 0; i < 3; i++) {
            this["nodeSelectd" + i].active = false
            this["nodeResult" + i].active = false
            this["sptEffectGuang1_" + i].active = false
            this["sptBtnMask" + i].active = false
            this["nodeRedPacketBtn" + i].x = 0
            this["nodeRedPacketBtn" + i].scale = 0
        }

        this.initAni()

        this.initTime(9, () => {
            this.onPressGetAward()
        })

    }

    
	registMessageHandler() {	
        this.addListener("mahjong_gc_get_redpackets_award_ack", this.mahjong_gc_get_redpackets_award_ack_handler.bind(this))
    }

    mahjong_gc_get_redpackets_award_ack_handler(event) {
        let message = event.packet
        cc.log("mahjong_gc_get_redpackets_award_ack_handler", message)

        if(message.ret == 2){
            this.logic.redpacket_award_info = message
            this.onReciveData()
        }else{
            // cc.error("mahjong_gc_get_redpackets_award_ack_handler", this.logic.redpacket_award_info)
        }    
    }

    
    initTime(timeLimit, callback, activeFlag = true) {
        
        let OnTimer = (dt) => {
            if(this.labelTime.timeLimit < 1) {
                this.nodeTip.stopAllActions()
                if(callback) {
                    callback()
                }
            }else {
                this.labelTime.timeLimit--
                this.labelTime.$Label.string = this.labelTime.timeLimit + " s"
            }
        }

        if (activeFlag) {
            this.labelTime.active = true
        }else{            
            this.labelTime.active = false
        }

        let actions = []
        actions[actions.length] = cc.delayTime(1)
        actions[actions.length] = cc.callFunc(OnTimer)

        this.labelTime.timeLimit = timeLimit
        this.labelTime.$Label.string = timeLimit + " s"
        this.nodeTip.stopAllActions()
        this.nodeTip.runAction(cc.repeatForever(cc.sequence(actions)))
    }

    stopTime() {
        this.labelTip.x = 0
        this.labelTip.active = false
        this.labelTime.$Label.string = ""
        this.labelTime.stopAllActions()

    }
    
    emulateData() {
        this.logic.redpacket_award_info = {
            cItemtype: 365,
            curRounds: 0,
            limitRounds: 1,
            nAmount: 169,
            ret: 2,
            taskId: 0,
            fakeItem: [
                {nItemIndex:0, nItemNum:2},
                {nItemIndex:0, nItemNum:3},
            ]
        }
        
        // this.awardData = [
        //     {itemIndex:364, value:100},
        //     {itemIndex:364, value:50},
        //     {itemIndex:364, value:200},
        // ]
    }

    initAni() {
        let scaleTime = 0.3
        let moveTime = 0.3

        let actionList0 = []
        actionList0[actionList0.length] = cc.delayTime(scaleTime + 0.1)
        actionList0[actionList0.length] = cc.moveTo(moveTime, cc.v2(-280, 0))
        this.nodeRedPacketBtn0.runAction(cc.sequence(actionList0));

        let actionList1 = []
        actionList1[actionList1.length] = cc.delayTime(0)
        actionList1[actionList1.length] = cc.scaleTo(scaleTime, 1)
        actionList1[actionList1.length] = cc.callFunc(() => {
            this.nodeRedPacketBtn0.scale = 1            
            this.nodeRedPacketBtn2.scale = 1
        })

        this.nodeRedPacketBtn1.runAction(cc.sequence(actionList1));


        let actionList2 = []
        actionList2[actionList2.length] = cc.delayTime(scaleTime + 0.1)
        actionList2[actionList2.length] = cc.moveTo(moveTime, cc.v2(280, 0))
        this.nodeRedPacketBtn2.runAction(cc.sequence(actionList2));
    }

    onPressGetAward(EventTouch, data = 1) {
        cc.log("TODO onPressGetAward", data, this.logic.redpacket_award_info)
        
        this.logic.playBtnSoundEffect()
        
        this.stopTime()

        if(this.lockButton) {
            return
        }
        this.lockButton = true
        this.lockScene = false

        this.selectIndex = data
        
        if(this.logic.redpacket_award_info.ret == 1) {
            cc.log("mahjong_cg_get_redpackets_award_req_sender")
            this.logic.mahjong_cg_get_redpackets_award_req_sender()  
        }else if(this.logic.redpacket_award_info.ret == 2) {
            this.onReciveData()      
            //waiting message          
        }
        
    }


    
    onReciveData() {      
        if(!this.lockButton) {
            return
        }  

        this.formatData()

        this.refreshAwardAni(this.awardData[0].selectIndex, this.awardData[0].value, true)
        
    }
    
    formatData() {

        this.awardData = []
        this.awardData[0] = []
        this.awardData[1] = []
        this.awardData[2] = []

        this.awardData[0].itemIndex = this.logic.redpacket_award_info.cItemtype
        this.awardData[0].value = this.logic.redpacket_award_info.nAmount
        
        for (let i = 1; i < 3; i++) {
            let fakeitem = this.logic.redpacket_award_info.fakeItem.pop() || {}
            this.awardData[i].itemIndex = fakeitem.nItemIndex || 0
            this.awardData[i].value = fakeitem.nItemNum || 0            
        }

        cc.log("this.selectIndex", this.selectIndex)
        if(this.selectIndex == null || typeof(this.selectIndex) == 'undefined' || this.selectIndex == -1) {
            this.selectIndex = 1
        }
        let indexNumber = [0, 1, 2]
        indexNumber.splice(indexNumber.indexOf(this.selectIndex), 1);
        this.awardData[0].selectIndex = this.selectIndex        
        this.awardData[1].selectIndex = indexNumber.pop()
        this.awardData[2].selectIndex = indexNumber.pop()
        cc.log("this.awardData", this.awardData)
    }
    

    refreshAwardAni(index, value, selectFlag = false) {
        cc.log("refreshAwardAni", index, value)

        this.lockScene = false
        this["labelAvardValue" + index].$Label.string = "x" + value
        
        let step_ani_3 = () => {
            this["nodeSelectd" + index].active = true
            this["sptEffectGuang1_" + index].active = true
            
            this["sptEffectGuang1_" + index].opacity = 0
            this["sptEffectGuang1_" + index].scale = 0.5

            let actionList = []
            actionList[actionList.length] = cc.spawn([cc.fadeTo(0.03, 120), cc.scaleTo(0.08, 1.1)])
            actionList[actionList.length] = cc.spawn([cc.fadeTo(0.8, 50), cc.scaleTo(0.8, 0.7)])
            actionList[actionList.length] = cc.callFunc(() => {
                this.refreshAwardAni(this.awardData[1].selectIndex, this.awardData[1].value)
                this.refreshAwardAni(this.awardData[2].selectIndex, this.awardData[2].value)
            })
            this["sptEffectGuang1_" + index].runAction(cc.sequence(actionList))
        }

        let step_ani_2 = () => {
            this["nodeResult" + index].scaleX = 0
            this["nodeResult" + index].active = true
            let actionList = []
            actionList[actionList.length] = cc.scaleTo(0.2, 1)
            actionList[actionList.length] = cc.callFunc(() => {
                if(selectFlag) {
                    step_ani_3()                    
                    this.labelTip.x = 0
                    this.labelTip.active = true
                    if (DataManager.GlobalData.isReview) {
                        this.labelTip.active = false
                    }
                    if(isWeChatGame() && cc.sys.os == cc.sys.OS_IOS) {
                    } else {
                        this.labelTip.$Label.string = "1万红包券=1元，满2元可兑换到微信"
                    }
                    this.initTime(3, () => {
                        this.onPressClose()
                    }, false)

                    this.playerRedPacketNum = this.logic.userProperties[this.logic.HONGBAO_GOLD_TICKET] || 0
                    
                    
                    let refreshNumberFun = () => {               
                        this.nodeNumberHandler.setDstNumber(this.playerRedPacketNum)
                    }
                    let dstPos = this.nodePlayerInfo.position
                    dstPos.x += 100
                    this.showGetMotion(index, dstPos, refreshNumberFun)
                    // if (value > 3000) {
                        this.showRedPacketRain()
                    // }
                }
            })
            this["nodeResult" + index].runAction(cc.sequence(actionList))
        }

        let step_ani_1 = () => {
            
            this["sptBtnMask" + index].opacity = 0
            this["sptBtnMask" + index].active = true
            
            let actionList = []
            actionList[actionList.length] = cc.scaleTo(0.2, 0, 1)
            actionList[actionList.length] = cc.callFunc(() => {
                step_ani_2()
            })
            this["btnRedPacket" + index].runAction(cc.sequence(actionList))
        }

        step_ani_1()
    }

    showGetMotion(btnIndex, dstPos, callback) {
        let srcPos = this["nodeRedPacketBtn" + btnIndex].position
        
        this.nodeMotionGetAni.position = srcPos
        this.nodeMotionGetAni.scale = 1
        this.motionGetAni.$MotionStreak.reset();

	    let matchX = 0
        let matchY = 0
        if (btnIndex == 0) {
            matchX = -1 * BaseFunc.Random(100)            
        } else if (btnIndex == 1) {
            matchX = BaseFunc.Random(200)     
            matchX = matchX - 100            
        } else if (btnIndex == 2) {
            matchX = BaseFunc.Random(100)
        }

	    matchY = matchY -50
	    matchX = matchX -50
	    let windowSize = cc.winSize
	    let bezierCfg = {}
        bezierCfg.pos_1 = cc.v2((srcPos.x + dstPos.x) / 2 + matchX, (srcPos.y + dstPos.y) / 2 + matchY)
        bezierCfg.pos_2 = cc.v2((srcPos.x + dstPos.x) / 2 + matchX, (srcPos.y + dstPos.y) / 2 + matchY)

        let bezierConfig = []
        bezierConfig[bezierConfig.length] = bezierCfg.pos_1
        bezierConfig[bezierConfig.length] = bezierCfg.pos_2
        bezierConfig[bezierConfig.length] = dstPos

        let actionList = []
        actionList[actionList.length] = cc.fadeIn(0.01)
        actionList[actionList.length] = cc.delayTime(0.01)
        actionList[actionList.length] = cc.bezierTo(0.6, bezierConfig)
        actionList[actionList.length] = cc.spawn(
            cc.scaleTo(0.3, 5, 2), 
            cc.fadeOut(0.3)
        );
        if (callback) {            
            actionList[actionList.length] = cc.callFunc(() => {
                callback()
            })
        }
        this.nodeMotionGetAni.stopAllActions()
        this.nodeMotionGetAni.runAction(cc.sequence(actionList))
    }

    showRedPacketRain() {
        cc.log("TODO showRedPacketRain")
        let repacket_rain = cc.instantiate(this.prefab_repacket_rain)



        // .stopSystem()
        this.nodeRedPacketRain.addChild(repacket_rain)
    }

    onPressClose() {
        if(this.lockScene){
            cc.log("onPressClose lock")
            return
        }
        this.close()
    }

    onCloseScene() {
        playADBanner(false)
    }

    onDestroy () {
        playADBanner(false)
    }

    close() {
        this.logic.closeScene("GameRedPacketAwardLayer")
        if (this.initParam.callback) {
            this.initParam.callback()
        }
    }

    // update (dt) {}
}
