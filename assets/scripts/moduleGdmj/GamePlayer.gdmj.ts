import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import GamePlayerStateController from "./GamePlayerStateController.gdmj"
import GameLogic from "./GameLogic.gdmj"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePlayer extends GamePlayerStateController {


    @property()
    userData = []
    
    @property()
    chairId:number = null

    @property()
    abscence:boolean = false
    isAuto:boolean = false
    
	stopRefreshRedPacket:boolean = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    __bindButtonHandler() {
        
    }

    start () {

    }

    setAbsence(flag) {
        this.abscence = flag
    }

    isAbscence() {
        return this.abscence
    }

    onBeforeTransition() {
        if (this.isAbscence()) {
            // return false
        }
        return true
    }

    getPlyData() {        
		return this.userData
    }

	setUserData(data) {
		this.userData = data
        
		this.setItemView(0, this.userData.money)
        
        this.initHeadIcon()
		
		if(this.userData.plyGuid > 0) {
			this.doStateChangeStay()    
		}
		if (this.isMe()) {
			// cc.error("ERROR:\t", (new Date()).toLocaleString(), this.userData)
		}
    }

    setChairId(chairid) {
        cc.log("TODO setChairId", chairid)
        this.chairId = chairid
        
        this.nodeGameTip.setPosition(this["nodeReadyPos" + this.chairId].getPosition());
    }
    
	isMe() {
		return (this.chairId == 0)
    }
    // State Function start ===================================
    onEnterStay() {
        cc.log("GamePlayer.onEnterStay", this.chairId)
        this.show()		
		
    }

    onEnterReady() {
        cc.log("GamePlayer.onEnterReady", this.chairId)

        this.showReady()
    }

    onEnterStartGame() {
        cc.log("GamePlayer.onEnterStartGame", this.chairId)
        this.show()
        
        this.hideReady()
    }

    onEnterEndGame() {
        cc.log("GamePlayer.onEnterEndGame", this.chairId)
        this.clearGameData()
    }

    onEnterLeave() {
        cc.log("GamePlayer.onEnterLeave", this.chairId)
        this.clearPlayer()
        
    }    
    // State Function end ===================================

	initHeadIcon() {
		if(this.userData.plyGuid < 1){
			this.sptAvatar.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "pic_touxiang")
			return
		}
        
        let url = DataManager.getURL("USERBATCH")
        
		BaseFunc.HTTPGetRequest(url, {
			uids: this.userData.plyGuid
		}, (event) => {
			if (event && event.list && event.list.length > 0) {
				this.userData.headimage = event.list[0].face
				cc.log(event.list[0].face)
				BaseFunc.SetFrameTextureNet(this.sptAvatar.getComponent(cc.Sprite), event.list[0].face, (sprite) => {
					this.sptAvatar.scale = Math.min(this.maskAvatar.width / this.sptAvatar.width, this.maskAvatar.height / this.sptAvatar.height)
				})
			}else{
                this.sptAvatar.getComponent(cc.Sprite).spriteFrame = DataManager.Instance.getSpriteFrame("GameMajiang_0", "pic_touxiang")
            }
		})
    }
    
	setStopRefreshRedPacket(value) {
		if (this.isMe()) {
			this.stopRefreshRedPacket = value
			if (!value) {				
				this.setItemView(365, DataManager.UserData.getItemNum(365))
			}
		}
	}
    
	setItemView(index_, value_) {
		if (this.isMe()) {
			GameLogic.Instance().userProperties[index_] = value_
		}
		if(index_ == GameLogic.Instance().HONGBAO_GOLD_MONEY) {
			this.setMoneyNum(value_)
		}else if(index_ == GameLogic.Instance().HONGBAO_GOLD_TICKET) {
			this.setRedPacketNum(value_)
		}
	}

    setRedPacketNum(num = 0) {
		if (this.isMe()) {
			DataManager.UserData.setItemNum(GameLogic.Instance().HONGBAO_GOLD_TICKET, num)
		}
		if (this.stopRefreshRedPacket) {
			return
		}
        this.labelRedPacket.$Label.string = GameLogic.Instance().GetMoneyShortString(num)
    }

    setMoneyNum(num = 0) {
		if (this.isMe()) {
			DataManager.UserData.money = num
		}
        this.labelMoney.$Label.string = GameLogic.Instance().GetMoneyShortString(num)
    }
    
    show() {
        if (this.isAbscence()) {
            return
        }
        this.node.active = true
    }


    showReady() {
        cc.log("TODO showReady")
        this.nodeGameTip.active = true
    }
    
    hideReady() {
        this.nodeGameTip.active = false
    }

    setTing(flag) {
        cc.log("TODO setTing", flag)
        this.isTing = flag
        
        this.sptTing.active = this.isTing
    }

    getTing() {
        return this.isTing
    }
    
    setAuto(flag) {
        this.isAuto = flag

        this.sptTuo.active = this.isAuto
    }
	
    getAuto() {
        return this.isAuto
    }

    setZhuang(isZhuang) {
        cc.log("TODO setZhuang",isZhuang)
        this.isZhuang = isZhuang
        if (GameLogic.Instance().gametype == 1) {
            this.sptZhuang.active = true
        } else { // 马牌
        }
    }

    clearPlayer() {		
		if (this.userData.plyGuid > 0) {			
			GameLogic.Instance().removePlayerData(this.userData.plyGuid)
		}
		
		this.clearGameData()

		if (!this.isMe()) {
			this.removePlayer()
		}
    }

    showTurn() {
        // this.sptTurn.active = true
    }

    hideTurn() {
        this.sptTurn.active = false
    }


    
	clearGameData() {		
        cc.log("TODO clearGameData")

        this.setTing(false)
        this.setAuto(false)
        this.hideTurn()
        this.sptMa.active = false
        this.sptZhuang.active = false
        
		this.setStopRefreshRedPacket(false)
    }
    
    removePlayer() {
		this.userData.money = 0
		this.userData.plyGuid = -1

		this.labelMoney.$Label.string = 0
		this.labelRedPacket.$Label.string = 0		
        
		this.initHeadIcon()
		
        this.node.active = false
	}
    
    setMapaiNum(num) {
        cc.log("GamePlayer:setMapaiNum")
        this.mapaiNum = num
        if (GameLogic.Instance().gametype == 1) {
        } else { // 马牌

            this.sptMa.active = this.isZhuang
        }
    }
    // update (dt) {}
}
