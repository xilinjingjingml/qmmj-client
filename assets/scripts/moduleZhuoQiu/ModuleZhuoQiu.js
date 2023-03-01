
import PreLoad from "../base/Preload";
import BaseScene from "../base/baseScene/BaseScene";
import SceneManager from "../base/baseScene/SceneManager";
import NetManager from "../base/baseNet/NetManager";
import DataManager from "../base/baseData/DataManager";
import WebSocketWrapper from "../base/baseNet/WebSocketWrapper";
let proto = require("./proto/client.zhuoqiu")
import opcodeConfig from "./proto/opcode.zhuoqiu";
import { czcEvent } from "../base/BaseFuncTs";
let GLOBAL = require("Define.zhuoqiu");

let gameTexture = [

]

cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        SceneManager.Instance.addScene("moduleLobby", "Preload", this.setPreload.bind(this));
    },

    setPreload(scene) {
        if (null == scene)
            return;

        let preload = scene.node.getComponent(PreLoad);
        if (null == preload)
            return;

        let self = this;
        let audioParam = {}
        // if (GameLogic.Instance().getIfPreLoadSound()) {
        //     audioParam = {
        //         audioSrc: GameLogic.Instance().getAudioConfig(),
        //         audioCallback: (items) => {
        //             GameLogic.Instance().audioManager.formatAudioArr(items)
        //         }
        //     }
        // }

        cc.loader.loadRes("moduleZhuoQiuRes/images/ball/ball", cc.SpriteAtlas, function (err, atlas) {
            for (let i=1; i<=9; i++) {
                for (let j=1; j<=32; j++) {
                    let str = j<10?''+i+'0'+j:''+i+j;

                    GLOBAL.ballCachedRes.push(atlas.getSpriteFrame(str))
                }
            }

            preload.startLoad(gameTexture, audioParam, (items) => {
                czcEvent("桌球", "加载2", "加载完成" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
                SceneManager.Instance.addScene("moduleZhuoQiuRes", "GameScene", () => {

                })
            })
        });


        // let urls = [];
        // for (let i = 1; i <= 9; i++) {
        //     for (let j = 1; j <= 32; j++) {
        //         let resPath = "moduleZhuoQiuRes/images/ball" + i + "/" + j
        //         urls.push(resPath);
        //     }
        // }
        //
        // cc.loader.loadResArray(urls, cc.SpriteFrame, function (err, assets) {
        //     if (err) {
        //         cc.error(err);
        //         return;
        //     }
        //
        //     GLOBAL.ballCachedRes = assets;
        //
        //     preload.startLoad(gameTexture, audioParam, (items) => {
        //         czcEvent("桌球", "加载2", "加载完成" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        //         SceneManager.Instance.addScene("moduleZhuoQiuRes", "GameScene", ()=>{
        //
        //         })
        //         if (false) {
        //
        //         }else {
        //             // let server = DataManager.CommonData["gameServer"]
        //             // GLOBAL.SERVER = server;
        //             // NetManager.Instance.login("zhuoqiu", server.serverAddr + ":" + (server.serverPort + 1), proto, opcodeConfig) //, (socket) => this.sendVerifyTicketReq(socket))
        //         }
        //
        //         // this.node.destroy()
        //     })
        // });


    }
});
