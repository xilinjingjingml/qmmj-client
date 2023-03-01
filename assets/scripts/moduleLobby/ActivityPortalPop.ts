import BaseComponent from "../base/BaseComponent";
import BaseFunc = require("../base/BaseFunc")
import SceneManager from "../base/baseScene/SceneManager";
import { getNowTimeUnix, checkOneYuanBox, numberFormat } from "../base/BaseFuncTs";
import DataManager from "../base/baseData/DataManager";
import { GAME_TYPE } from "../gameConfig";
import { isWeChatGame, isAndroidGame } from "../gameConfig";

const { ccclass, property } = cc._decorator;

@ccclass("ActivePortalItem")
class ActivePortalItem {
    @property()
    buttonName: string = ""

    @property(cc.Prefab)
    noticePrefab: cc.Prefab = null

    @property(cc.SpriteFrame)
    noticeSprite: cc.SpriteFrame = null

    @property()
    startShow: number = -1

    @property()
    endShow: number = -1

    @property()
    popSceneName: string = ""

    priority: number = 1000

    enabled: boolean = true
}

// 幸运刮刮乐
// 每日瓜分趣金币
@ccclass
export default class ActivityPortalPop extends BaseComponent {

    // LIFE-CYCLE CALLBACKS:  
    @property(ActivePortalItem)
    actives:ActivePortalItem[] = []

    thisComponentName = "ActivityPortalPop"

    prefabInstance: cc.Node[] = []

    _selectId = -1
    
    _updateDataLock = false

    onOpenScene() {
        this.initActiveData()
        this.initMenu()

        this.onPressMenu(null, this._selectId)
        
        this.refreshUserData()
    }

    initMenu() {
        let nDay = new Date()

        let wantPage = (this.initParam && this.initParam["pageNum"] >= 0) ? this.initParam["pageNum"] : -1
        let choicePriority = -1
        for (const idx in this.actives) {
            const active = this.actives[idx]
            if (active.enabled == false) {
                continue
            }

            if (wantPage != -1 && idx == wantPage) {
                this._selectId = idx
                choicePriority = -1000
            }

            if (this._selectId == -1 || active.priority < choicePriority) {
                this._selectId = idx
                choicePriority = active.priority
            }

            let menuItem = cc.instantiate(this["btnTogglePrefab"])
            menuItem.getChildByName("Background").getChildByName("lbUnSelect").getComponent(cc.Label).string = active.buttonName
            menuItem.getChildByName("checkmark").getChildByName("lbSelect").getComponent(cc.Label).string = active.buttonName     
            menuItem.active = true
            menuItem.setPosition(0, 0)
            menuItem.name = "menuItem" + idx
            menuItem.zIndex = active.priority
            this["toggleMenu"].addChild(menuItem)
            BaseFunc.AddToggleCheckEvent(menuItem, this.node, this.thisComponentName, "onPressMenu", idx)
        }
        
    }

    __bindButtonHandler() {

    }

    initActiveData() {
        const timestamp = getNowTimeUnix()
        const dayofweek = new Date().getDay()
        const isWeekend = dayofweek == 0 || dayofweek == 6
        // let disabled = ["送5万趣金币", "每日瓜分趣金币", "1元福利", "双11特惠"]
        let disabled = []

        if (isWeekend) {
            disabled.push("新春嘉年华")
        } else {
            disabled.push("周末嘉年华")
        }

        const prioritys = ["充值返利" ,"充值翻倍", "新春嘉年华", "周末嘉年华"]

        for (let idx = 0; idx < this.actives.length; idx++) {
            const active = this.actives[idx]

            prioritys.indexOf(active.buttonName) != -1 && (active.priority = prioritys.indexOf(active.buttonName))

            if (disabled.indexOf(active.buttonName) != -1 || (active.startShow != -1 && timestamp < active.startShow) || (active.endShow != -1 && timestamp > active.endShow)) {
                active.enabled = false
            }
        }
    }

    mahjong_lc_send_user_data_change_not(message) {
        this.message_deliver(message)
        this.refreshUserData()
    }

    mahjong_lc_reload_user_data_ack(message) {
        this.message_deliver(message)
        this.refreshUserData()
    }

    mahjong_lc_broadcast_message_not(message) {
        this.message_deliver(message)
    }

    mahjong_lc_store_safe_amount_ack(message) {
        this.message_deliver(message)
    }

    message_deliver(message) {
        if (null != message.opcode) {

            for (const key in this.prefabInstance) {
                if (this.prefabInstance.hasOwnProperty(key)) {
                    const element = this.prefabInstance[key];
                    if(!!element.active) {                        
                        let elementHandler = element.getComponent(cc.Component)
                        if (elementHandler[message.opcode] && typeof elementHandler[message.opcode] == "function") {
                            elementHandler[message.opcode](message)
                        }
                    }
                }
            }
        }
    }

    setUpdateDataLock(flag:boolean = true) {
        this._updateDataLock = flag
        
        if(!flag) {
            this.refreshUserData()
        }
    }

    refreshUserRedpacket() {        
        let rp = DataManager.UserData.getItemNum(365)
        this["rplabel"].$Label.string = numberFormat(rp)
    }

    refreshUserData(fakenum = -1) {
        if(fakenum > 0) {
            this["goldlabel"].$Label.string = numberFormat(fakenum)
            return
        }
        
        if (!this._updateDataLock) { 
            this["goldlabel"].$Label.string = numberFormat(DataManager.UserData.money)
            let rp = DataManager.UserData.getItemNum(365)
            this["rplabel"].$Label.string = numberFormat(rp)
        }
    }

    onPressMenu(EventTouch, data) {
        cc.log("onPressMenu", data)
        this._selectId = data
        let menuItem = this["toggleMenu"].getChildByName("menuItem" + data)
        if (null == menuItem)
            return
            
        this.setUpdateDataLock(false)
        menuItem.getComponent(cc.Toggle).isChecked = true

        this.showContentRight()
    }

    showContentRight() {
        for (const key in this.prefabInstance) {
            if (this.prefabInstance.hasOwnProperty(key)) {
                const element = this.prefabInstance[key];
                element.active = false
            }
        }
        
        let item = this.actives[this._selectId]
        if (!!item) {
            if (item.noticePrefab != null) {
                this.showPrefab()
            }else if (item.noticeSprite != null) {
                this.showImage()
            }
        }
    }

    showImage() {
        let item = this.actives[this._selectId]
        let spriteFrame = item.noticeSprite

        if (!!this.prefabInstance[spriteFrame.name]) {
            this.prefabInstance[spriteFrame.name].active = true
        } else {
            let activityItem = cc.instantiate(this["nodeContentRightPrefab"])
            activityItem.getChildByName("nodeContentRightImage").getComponent(cc.Sprite).spriteFrame = spriteFrame
            activityItem.active = true
            activityItem.setPosition(0, 0)
            this["nodeContentRight"].addChild(activityItem)
            BaseFunc.AddClickEvent(activityItem.getChildByName("nodeContentRightImage"), this.node, this.thisComponentName, "onPressImage", 0, 0);

            this.prefabInstance[spriteFrame.name] = activityItem
        }
        // nodeContentRightPrefab
    }

    showPrefab() {
        let item = this.actives[this._selectId]
        let curPrefab = item.noticePrefab

        if (!!this.prefabInstance[curPrefab.name]) {
            this.prefabInstance[curPrefab.name].active = true
        } else {
            let activityItem = cc.instantiate(curPrefab)
            activityItem.active = true
            activityItem.parentView = this
            activityItem.setPosition(0, 0)
            this["nodeContentRight"].addChild(activityItem)

            this.prefabInstance[curPrefab.name] = activityItem
        }
    }

    onPressImage() {
        if (-1 == this._selectId) 
            return;

        if (null != this.actives[this._selectId] && "" != this.actives[this._selectId].popSceneName) {
            SceneManager.Instance.popScene("moduleLobby", this.actives[this._selectId].popSceneName);
            // this.closeSelf()
        }
    }

    onCloseScene() {

    }
    // update (dt) {}
}
