import PreLoad from "../base/Preload";
import BaseScene from "../base/baseScene/BaseScene";
import SceneManager from "../base/baseScene/SceneManager";
import NetManager from "../base/baseNet/NetManager";
import DataManager from "../base/baseData/DataManager";
import GameLogic from "./GameLogic.xxl"
import WebSocketWrapper from "../base/baseNet/WebSocketWrapper";

import proto = require("./proto/client.xxl")
import opcodeConfig from "./proto/opcode.xxl";

import { czcEvent } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;
let gameTexture = [
    "/moduleXXLRes/texture/animal/animal_xxl",    
]

@ccclass
export default class ModuleStart extends cc.Component {

    start () {
        console.log("消消乐-加载1-开始加载消消乐")
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
            audioParam = {
                audioSrc: GameLogic.Instance().getAudioConfig(),
                audioCallback: (items) => {
                    // GameLogic.Instance().audioManager.formatAudioArr(items)
                }
            }            
        }

        preload.startLoad(gameTexture, audioParam, (items) => {
            console.log("消消乐-加载2-加载消消乐完成")
            SceneManager.Instance.addScene<String>("moduleXXLRes", "GameScene")    
            if (GameLogic.Instance().henry_debug) {
                
            }else {
                let server = DataManager.CommonData["gameServer"]
                GameLogic.Instance().analyzeSocketInfo(server)
                NetManager.Instance.login(GameLogic.Instance().socketName, server.serverAddr + ":" + (server.serverPort + 1), proto, opcodeConfig) //, (socket) => this.sendVerifyTicketReq(socket))                
            }
            this.node.destroy()
        })
    }

    sendVerifyTicketReq(socket: WebSocketWrapper){
        let proto_cb_login_req = {
			plyTicket: DataManager.UserData.ticket,
			opcode: "proto_cb_login_req",
			extParam: "",
			version: 1498492800,
			plyNickname: DataManager.UserData.nickname,
			mainGameId: DataManager.Instance.gameId,
			gameGroup: 0,
			plyGuid: DataManager.UserData.guid,
        }

        socket.send(proto_cb_login_req)
    } 
}
