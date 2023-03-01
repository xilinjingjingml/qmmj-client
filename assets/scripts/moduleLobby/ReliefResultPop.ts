import BaseScene from "../base/baseScene/BaseScene";
import { getLowMoneyRoom, enterGame } from "../base/BaseFuncTs";
import DataManager from "../base/baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ReliefResultPop extends BaseScene {

    onPressGotoGame() {
        let gameId = DataManager.load(DataManager.UserData.guid + "lastGameId")
        if (null != gameId) {
            let servers = getLowMoneyRoom(gameId)
            if (servers.length > 0)
                enterGame(servers[0])
        }
    }
}
