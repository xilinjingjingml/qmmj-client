import DataManager from "../base/baseData/DataManager"
import BaseScene from "../base/baseScene/BaseScene";
import { PLUGIN_ENV } from "../config";
import GameManager from "../base/GameManager";
import PluginManager from "../base/PluginManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChangeEnvPop extends BaseScene {
    onPressChange() {
        let str = cc.find("nodePop/editbox", this.node).getComponent(cc.EditBox).string
        if (str.substr(0, 5) == '>>*>>') {
            str = str.substr(5)
        } else {
            return
        }

        if (true) {
            let content = str
            let changeLogin = false
            if (content.substr(0, 1) == 's') {
                changeLogin = true
                content = content.substr(1)
            }
            let changeVersion = false
            if (content.substr(0, 1) == 'r') {
                changeVersion = true
                content = content.substr(1)
            }
            const index = ['t', 'm', 'o'].indexOf(content)
            if (index >= 0) {
                this.changeEnv(index, changeLogin, changeVersion)
                return
            }
        }

        if (str == "msg") {
            this.showconsolelog()
            return
        }

        this.closeSelf()
    }

    changeEnv(env: number, changeLogin: boolean, changeVersion: boolean) {
        DataManager.save("LAST_PLUGIN_ENV", env)
        if (changeLogin) {
            PluginManager.logout()
            cc.sys.localStorage.removeItem('last_login_type')
        }
        if (changeVersion) {
            cc.sys.localStorage.removeItem('game_version')
            cc.sys.localStorage.removeItem('HotUpdateSearchPaths')
        }
        cc.game.end()
    }

    showconsolelog() {
        this.closeSelf()
        GameManager.Instance.setConsoleLog(!DataManager.load("showconsolelog"))
    }
}
