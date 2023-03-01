import PreLoad from "../base/Preload";
import BaseScene from "../base/baseScene/BaseScene";
import SceneManager from "../base/baseScene/SceneManager";
import NetManager from "../base/baseNet/NetManager";
import DataManager from "../base/baseData/DataManager";
import GameLogic from "./GameLogic.jxmj"
import WebSocketWrapper from "../base/baseNet/WebSocketWrapper";
import proto = require("./proto/client.jxmj")
import opcodeConfig from "./proto/opcode.jxmj";
import { czcEvent } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

let gameTexture = [
    
    "/moduleHBErmjRes/images/GameMajiang/GameMajiang_0",
    // "/moduleHBErmjRes/images/GameScene/GameScene.jxmj",
    "/moduleHBErmjRes/images/MaJiang/MaJiang.hbermj",
    // "/moduleHBErmjRes/images/Operate/OperateStyle2.jxmj",
    // "/moduleHBErmjRes/images/GamePlayer/GamePlayer_hbermj_1",
    
    // "/moduleLobby/texture/common/common-0",
    // "/moduleLobby/texture/newuser/firstLead",
    // "/moduleHBJxmjRes/images/BlockOtherImage",
]

@ccclass
export default class ModuleStart extends cc.Component {

    start () {
        czcEvent("江西红中", "加载1", "开始加载江西红中" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            SceneManager.Instance.addScene<String>("moduleLobby", "Preload", this.setPreload.bind(this))        
        }

    setPreload(scene: BaseScene) {
        if (null == scene)
            return

        let preload = scene.node.getComponent(PreLoad)
        if (null == preload)
            return

        let self = this
        
        let audioParam = {}
        if (GameLogic.Instance().getIfPreLoadSound()) {
            let audioParam = {
                audioSrc: GameLogic.Instance().getAudioConfig(),
                audioCallback: (items) => {
                    GameLogic.Instance().audioManager.formatAudioArr(items)
                }
            }
        }
        
        preload.startLoad(gameTexture, audioParam, (items) => {
            czcEvent("江西红中", "加载2", "加载完成" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            SceneManager.Instance.addScene<String>("moduleHBJxmjRes", "GameScene")    
            if (GameLogic.Instance().henry_debug) {
                
            }else {
                let server = DataManager.CommonData["gameServer"]        

                GameLogic.Instance().analyzeSocketInfo(server)
                NetManager.Instance.login(GameLogic.Instance().socketName, server.serverAddr + ":" + (server.serverPort + 1), proto, opcodeConfig) //, (socket) => this.sendVerifyTicketReq(socket))                
            }
        })
    }
        
    sendVerifyTicketReq(socket: WebSocketWrapper){
        let mahjong_cb_login_req = {
			plyTicket: DataManager.UserData.ticket,
			opcode: "mahjong_cb_login_req",
			extParam: "",
			version: 1498492800,
			plyNickname: DataManager.UserData.nickname,
			mainGameId: DataManager.Instance.gameId,
			gameGroup: 0,
			plyGuid: DataManager.UserData.guid,
        }

        socket.send(mahjong_cb_login_req)
    } 
}


