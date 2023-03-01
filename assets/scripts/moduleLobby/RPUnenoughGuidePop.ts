import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import SceneManager from "../base/baseScene/SceneManager";
import { isWeChatGame, isAndroidGame} from "../gameConfig";
import { getLowMoneyRoom, enterGame } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RPUnenoughGuidePop extends BaseScene {

    onOpenScene() {
        if(isWeChatGame() || isAndroidGame()){
            console.log("RPUnenoughGuidePop = ", JSON.stringify(DataManager.CommonData))
            if (DataManager.CommonData["NewUserSgin"].day > 7) {
                cc.find("nodePop/mainScroll/view/content/nodeItem0", this.node).active = false

                for (let i = 1; i < 4; i++) {
                    let node = cc.find("nodePop/mainScroll/view/content/nodeItem" + i, this.node)
                    node.position = cc.v2(node.position.x, node.position.y + 116)
                }

                let content = cc.find("nodePop/mainScroll/view/content", this.node)
                content.setContentSize(content.getContentSize().width, content.getContentSize().height - 124)
            }
        } else {
            cc.find("nodePop/mainScroll/view/content/nodeItem0", this.node).active = false

            for (let i = 1; i < 4; i++) {
                let node = cc.find("nodePop/mainScroll/view/content/nodeItem" + i, this.node)
                node.position = cc.v2(node.position.x, node.position.y + 116)
            }

            let content = cc.find("nodePop/mainScroll/view/content", this.node)
            content.setContentSize(content.getContentSize().width, content.getContentSize().height - 124)
        }
    }

    onPressDraw() {
        cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)
        if(isWeChatGame() || isAndroidGame()){
            SceneManager.Instance.popScene("moduleLobby", "NewUserSignHBPop")
        }else{
            SceneManager.Instance.popScene("moduleLobby", "NewUserSignPop")
        }
    }

    onGotoGame() {
        let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
        if (null == gameId)
            gameId = 389
        let servers = getLowMoneyRoom(gameId)        
        if (servers.length > 0)
            enterGame(servers[0])
    }
}
