import BaseScene from "../base/baseScene/BaseScene";
import { getNowTimeUnix } from "../base/BaseFuncTs";
import SceneManager from "../base/baseScene/SceneManager";
import { isWeChatGame, isAndroidGame } from "../gameConfig";

const { ccclass, property } = cc._decorator;

const unselColor = new cc.Color(134, 93, 56)
const selColor = new cc.Color(172, 27, 3)

@ccclass("ActiveItem")
class ActiveItem {
    @property()
    buttonName: string = ""

    @property(cc.SpriteFrame)
    noticeSprite: cc.SpriteFrame = null

    @property()
    startShow: number = -1

    @property()
    endShow: number = -1

    @property()
    popSceneName: string = ""

    @property()
    param: string = ""

    priority: number = 1000

    enabled: boolean = true
}

@ccclass
export default class ActivePop extends BaseScene {

    @property(cc.Node)
    menuModel: cc.Node = null

    @property(cc.Node)
    menuContainer: cc.Node = null

    @property(cc.Sprite)
    activeImage: cc.Sprite = null

    @property(ActiveItem)
    actives: ActiveItem[] = []

    menus: cc.Node[] = []
    curActive: ActiveItem = null;

    onOpenScene() {
        this.initActiveData()

        let choice = -1
        let choicePriority = -1

        if (this.menuModel && this.menuContainer) {
            for (let idx in this.actives) {
                const active = this.actives[idx]
                if (active.enabled == false) {
                    continue
                }

                if (choice == -1 || active.priority < choicePriority) {
                    choice = idx
                    choicePriority = active.priority
                }

                let menu = cc.instantiate(this.menuModel)
                menu.getChildByName("label").getComponent(cc.Label).string = active.buttonName
                menu.active = true
                menu.zIndex = active.priority
                menu.parent = this.menuContainer
                this.menus[idx] = menu

                let btn = menu.getComponent(cc.Button)
                let clickEventHandler = new cc.Component.EventHandler()
                clickEventHandler.target = this.node;
                clickEventHandler.component = "ActivePop"
                clickEventHandler.handler = "onPressMenu"
                clickEventHandler.customEventData = "" + idx
                btn.clickEvents.push(clickEventHandler)
            }
        }

        if (this.initParam && this.initParam["pageNum"] && this.menus[this.initParam["pageNum"]]) {
            this.onSelectMenu(this.initParam["pageNum"])
        } else {
            this.onSelectMenu(choice)
        }
    }

    initActiveData() {
        const timestamp = getNowTimeUnix()
        const dayofweek = new Date().getDay()
        const isWeekend = dayofweek == 0 || dayofweek == 6
        let disabled = ["送5万趣金币", "1元福利", "双11特惠"]

        if (isWeChatGame() || isAndroidGame()) {
            disabled.push("游戏入口")
        } else {
            disabled.push("88元赏金")
        }

        if (isWeekend) {
            disabled.push("新春嘉年华")
        } else {
            disabled.push("周末嘉年华")
        }

        const prioritys = ["充值返利","充值翻倍", "新春嘉年华", "周末嘉年华"]

        for (const active of this.actives) {
            prioritys.indexOf(active.buttonName) != -1 && (active.priority = prioritys.indexOf(active.buttonName))

            if (disabled.indexOf(active.buttonName) != -1 || (active.startShow != -1 && timestamp < active.startShow) || (active.endShow != -1 && timestamp > active.endShow)) {
                active.enabled = false
            }
        }
    }

    initMenu() {
        for (let idx = 0; idx < this.menus.length; idx++) {
            const menu = this.menus[idx]
            if (menu) {
                menu.getComponent(cc.Button).interactable = true
                menu.getChildByName("label").color = unselColor
            }
        }
    }

    onPressMenu(sender, idx) {
        this.initMenu()
        this.onSelectMenu(idx)
    }

    onSelectMenu(idx) {
        this.curActive = this.actives[idx] || null

        if (this.curActive) {
            this.menus[idx].getComponent(cc.Button).interactable = false
            this.menus[idx].getChildByName("label").color = selColor
            this.activeImage && (this.activeImage.spriteFrame = this.actives[idx].noticeSprite)
        }
    }

    onPressNotice() {
        if (this.curActive && "" != this.curActive.popSceneName) {
            let param = {
                closeCallback: this.initParam["closeCallback"]
            }
            if (this.curActive.param) {
                let tmp = this.curActive.param.split("|")
                for (let i = 0; i < tmp.length / 2; i++) {
                    if (tmp[i] && tmp[i + 1])
                        param[tmp[i]] = tmp[i + 1]
                }
            }

            SceneManager.Instance.popScene("moduleLobby", this.curActive.popSceneName, param)
            this.initParam["closeCallback"] = null
            this.closeSelf()
        }
    }
}
