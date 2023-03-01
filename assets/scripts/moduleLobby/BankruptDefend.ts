import BaseScene from "../base/baseScene/BaseScene";
import { getReliefState, getADAward } from "./LobbyFunc";
import DataManager from "../base/baseData/DataManager";
import { playAD, socialShare, checkServerMoneyLimit, getLowMoneyRoom, enterGame, playADBanner } from "../base/BaseFuncTs";
import { isWeChatGame, isAndroidGame } from "../gameConfig";
import WxWrapper from "../base/WxWrapper";
import SceneManager from "../base/baseScene/SceneManager";
import BaseComponent from "../base/BaseComponent";
import BaseFunc = require("../base/BaseFunc")

const {ccclass, property} = cc._decorator;

const AD_AREA = 3

@ccclass
export default class BankruptDefend extends BaseComponent {

    onOpenScene() {
        
        if(playADBanner(true, DataManager.AdsConfig.banner.BankruptDefend)) {
            this["nodePop"].y += 20
        }

        this.socketName = "lobby"
        this.addListener("updateReliefStatus", this.updateReliefStatus.bind(this))
        cc.find("nodePop/btnPlay", this.node).getComponent(cc.Button).interactable = DataManager.CommonData["reliefStatus"]["reliefTimes"] > 0
        cc.find("nodePop/count", this.node).getComponent(cc.Label).string = DataManager.CommonData["reliefStatus"]["reliefTimes"]

        if(isWeChatGame()){
            if(cc.sys.os == cc.sys.OS_IOS) {
                cc.find("nodePop/btnDeposit", this.node).active = false
            }
            cc.find("nodePop/btnPlay", this.node).active = false
            cc.find("nodePop/btnQttExchange", this.node).active = false            
            cc.find("nodePop/btnShare", this.node).active = true
        }else{
            cc.find("nodePop/btnPlay", this.node).active = true
            cc.find("nodePop/btnQttExchange", this.node).active = true
            cc.find("nodePop/btnShare", this.node).active = false
        }
    }

    onCloseScene() {
        playADBanner(false)
    }

    onDestroy() {
        playADBanner(false)
    }

    updateReliefStatus() {
        if (null != cc.find("nodePop/btnPlay", this.node))
            cc.find("nodePop/btnPlay", this.node).getComponent(cc.Button).interactable = DataManager.CommonData["reliefStatus"]["reliefTimes"] > 0
        if (null != cc.find("nodePop/count", this.node))
            cc.find("nodePop/count", this.node).getComponent(cc.Label).string = DataManager.CommonData["reliefStatus"]["reliefTimes"]
    }
    
    onPressRelief(){
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)

        if (DataManager.CommonData["reliefStatus"]["reliefTimes"] <= 0)
            return

        let self = this
        playAD(DataManager.AdsConfig.video.BankruptDefend, () => {
            getADAward(AD_AREA, () => {
                let message = {
                    opcode: "mahjong_cl_get_relief_req",
                    type: 0
                };
                self.sendMessage(message)
                self.initParam["closeCallback"] = null
                self.closeSelf()
            } );
        })
    }


    onAfterOpenScene() {
        if (DataManager.GlobalData.noAD) {
            BaseFunc.SetFrameTextureLocal(cc.find("nodePop/btnPlay", this.node).getComponent(cc.Sprite), "moduleLobby/texture/shop/btn_free")
        }
        if (DataManager.GlobalData.noQtt) {
            cc.find("nodePop/btnPlay", this.node).x = 10
            cc.find("nodePop/btnDeposit", this.node).active = false
        }
    }


    onPressShop() {        
        this.initParam["closeCallback"] = null
        if (DataManager.CommonData["gameServer"]){
            SceneManager.Instance.popScene("moduleLobby", "QuickPayPop")
            this.closeSelf()
        }
        else{
            let self = this
            let checkMoney = function() {
                if (DataManager.UserData.money >= 1000) {
                    let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
                    if (null != gameId) {
                        let servers = getLowMoneyRoom(gameId)
                        if (servers.length > 0){
                            enterGame(servers[0])
                            self.closeSelf()
                        }
                    }      
                }
            }
            SceneManager.Instance.popScene("moduleLobby", "ShopScene", {closeCallback: checkMoney, type: 1})
        }
    }

    onPressShare(type = 0){
        cc.log("onPressShare")
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)

        if (DataManager.CommonData["reliefStatus"]["reliefTimes"] <= 0)
            return

        let self = this

        socialShare({
            withOpenId:true,
            callback:() => {
                getADAward(AD_AREA, () => {
                    let message = {
                        opcode: "mahjong_cl_get_relief_req",
                        type: type
                    };
                    self.sendMessage(message)
                    self.initParam["closeCallback"] = null
                    self.closeSelf()
                } );
            }
        })
    }

    onPressQttShop() {        
        this.initParam["closeCallback"] = null
        if (DataManager.CommonData["gameServer"]){
            SceneManager.Instance.popScene("moduleLobby", "ShopPop", {type: 2})
            this.closeSelf()
        }
        else{
            let self = this
            let checkMoney = function() {
                if (DataManager.UserData.money >= 1000) {
                    let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
                    if (null != gameId) {
                        let servers = getLowMoneyRoom(gameId)
                        if (servers.length > 0){
                            enterGame(servers[0])
                            self.closeSelf()
                        }
                    }      
                }
            }
            SceneManager.Instance.popScene("moduleLobby", "ShopScene", {closeCallback: checkMoney, type: 2})
        }
    }
}
