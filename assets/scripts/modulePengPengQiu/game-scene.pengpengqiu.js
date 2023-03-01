
import DataManager from "../base/baseData/DataManager";
import NetManager from "../base/baseNet/NetManager";
import { czcEvent, gobackToMain, MsgBox, iMessageBox, isIPhoneX } from "../base/BaseFuncTs";
let Level = require('level.pengpengqiu');
let Rocket = require('rocket.pengpengqiu');
import BaseComponent from "../base/BaseComponent";
let GLOBAL = require('global.pengpengqiu');
let Event = require('event.pengpengqiu');
let proto = require("./proto/client.pengpengqiu")
import opcodeConfig from "./proto/opcode.pengpengqiu";
import SceneManager from "../base/baseScene/SceneManager";

cc.Class({
    extends: BaseComponent,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        cc.log("game-scene onload");
        GLOBAL.Game = this;

        this.socketName = "pengpengqiu";

        this.userData = {}
        this.userData.plyBaseData = {
            chairId: -1,
            dogfall: 0,
            gift: 0,
            lost: 0,
            money: 0,
            nickname: "",
            param_1: 0,
            param_2: 0,
            plyGuid: 0,
            plyVip: {},
            ready: 0,
            score: 0,
            sex: -1,
            tableId: -1,
            won: 0,
            headimage: ""
        };
        this.userData.plyStatus = {
            gameId: 0,
            gameServerId: 0,
            latitude: -1,
            longitude: -1,
            lost: 0,
            money: 0,
            moneyRank: -1,
            param_1: 0,
            param_2: 0,
            plyGuid: 0,
            plyNickname: "",
            plyStatus: 0,
            sex: 0,
            tableId: 0,
            won: 0,
            wonRank: -1
        };

        this.serverInfo = {
            baseBet: 0,
            channelId: 0,
            extParam: "",
            gameId: 0,
            minMoney: 0,
            maxmoney: 0,
            onlinePlayerNum: 0,
            serverAddr: "",
            serverId: 0,
            serverKey: "",
            serverName: "",
            serverPort: 0,
            lc_room_mode: 0,
            winMaxMoney: 0,
            jumpNextServerMoney: 0,
            level: 0,
            winMaxBet: 0,
            winMinBet: 0,
            hBMode: 0,
            server_type: 0,
            tax: 0,
            newbieMode: 0
        };

        this.bEnterInGame = false;

        Event.on(GLOBAL.EventName.EventShowShop, this.showShopScene, this);
        Event.on(GLOBAL.EventName.SocketPlayReq, this.proto_ppq_cg_set_bet_req, this);

        let frameSize = cc.size(cc.winSize.width, cc.winSize.height);
        if (isIPhoneX()) {
            frameSize = cc.size(2436, 1125);
        }
        let bg = this.node.getChildByName('background');
        let designSize = bg.getContentSize();
        let rateW = frameSize.width / designSize.width,
            rateH = frameSize.height / designSize.height;
        let rate = Math.max(rateH, rateW);
        let menubg = cc.find('menu/bg', this.node);
        menubg.scaleX = frameSize.width / menubg.width;
        bg.scale = rate;
    },

    start() {
        let server = DataManager.CommonData["gameServer"]
        GLOBAL.SERVER = server;
        NetManager.Instance.login(this.socketName, server.serverAddr + ":" + (server.serverPort + 1), proto, opcodeConfig)

        this.gameState = false;
    },

    onOpenScene() {
        czcEvent(GLOBAL.GameName, "进入游戏", "显示游戏界面" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        cc.log("PengPengQiu GameScene onOpenScene");
    },

    onDestroy() {
        Event.offTarget(this);
    },

    LeaveGameScene() {
        czcEvent(GLOBAL.GameName, "离桌1", "游戏返回大厅"+ (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        let param = {
            isOnGameExit: 0
        }
        if(this.state == 'startGame'){
            param.isOnGameExit = 1
        }
        gobackToMain(param)
    },

    onPressExit() {
        gobackToMain({
            isOnGameExit: 0
        })
    },

    onPressGameRule(){
        SceneManager.Instance.popScene("modulePengPengQiuRes","gamerule");
    },

    onEnterInit() {
        cc.log("GameScene.onEnterInit")
        this.proto_cb_login_req_sender()
    },

    sendMessage(message) {
        NetManager.Instance.send(this.socketName, message)
    },

    closeSocket() {

    },

    reEnterGame() {

    },

    enterLobby() {
        this.LeaveGameScene();
    },

    LeaveGameScene() {
        czcEvent(GLOBAL.GameName, "离桌1", "游戏返回大厅"+ (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"));
        let param = {
            isOnGameExit: 0
        }
        if(this.state == 'startGame'){
            param.isOnGameExit = 1
        }
        gobackToMain(param)
    },

    MessageBox(param) {
        iMessageBox(param);
    },

    confirmBox(param) {
        MsgBox(param)
    },

    refreshPlayerData() {
        // 刷新自己的信息
        Event.emit(GLOBAL.EventName.Event_Update_UserInfo);
    },

    showShopScene() {
        SceneManager.Instance.popScene("moduleLobby", "ShopPop");
    },

    analyzeSocketInfo(serverInfo) {
        this.serverInfo = serverInfo;
        cc.log("analyzeSocketInfo", this.serverInfo);
        // this.extParam
        let extParam = this.serverInfo.extParam;

        let params = extParam.split('|');

        for (let param of params) {
            let config = param.split(':');
            if (!config[1])
                continue;

            let reg = config[1].match(/\d+/g);
            if (!reg)
                continue;

            let str_data = reg.join('');
            if (config[0] === 'lc_room_mode') {
                this.serverInfo.lc_room_mode = Number(str_data)
            }else if (config[0] === 'winMaxMoney') {
                this.serverInfo.winMaxMoney = Number(str_data)
            }else if (config[0] === 'jumpNextServerMoney') {
                this.serverInfo.jumpNextServerMoney = Number(str_data)
            }else if (config[0] === 'level') {
                this.serverInfo.level = Number(str_data)
            }else if (config[0] === 'winMaxBet') {
                this.serverInfo.winMaxBet = Number(str_data)
            }else if (config[0] === 'winMinBet') {
                this.serverInfo.winMinBet = Number(str_data)
            }else if (config[0] === 'hBMode') {
                this.serverInfo.hBMode = Number(str_data)
            }else if (config[0] === 'server_type') {
                this.serverInfo.server_type = Number(str_data)
            }else if (config[0] === 'tax') {
                this.serverInfo.tax = Number(str_data)
            }else if (config[0] === 'newbieMode') {
                this.serverInfo.newbieMode = Number(str_data)
            }
        }
    },

    ///////////////////
    proto_lc_use_protocol_proto_ack(event) {
        cc.log("proto_lc_use_protocol_proto_ack")

        this.analyzeSocketInfo(GLOBAL.SERVER);
        // if (GameLogic.Instance().getNeedReConnect()) {
        this.onEnterInit()
        // GameLogic.Instance().setNeedReConnect(false)
        // }

    },
    proto_cb_login_req_sender() {
        czcEvent(GLOBAL.GameName, "登录1", "游戏服务器登录请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
        this.sendMessage({
            plyTicket: DataManager.UserData.ticket,
            opcode: "proto_cb_login_req",
            extParam: "",
            version: 1498492800,
            plyNickname: DataManager.UserData.nickname,
            mainGameId: DataManager.Instance.gameId,
            gameGroup: 0,
            plyGuid: DataManager.UserData.guid,
        })
    },
    proto_bc_login_ack(event) {
        cc.log("proto_bc_login_ack_handler")
        let message = event.packet

        this.userData.plyBaseData = message.plyBaseData
        this.userData.plyStatus = message.plyStatus
        let ret = message.ret

        if (ret === 0 || ret === 1 || ret === 2) {
            czcEvent(GLOBAL.GameName, "登录2", "游戏服务器登录成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"));
            if (ret === 0) {
                this.proto_cb_join_table_req();
            }

            this.bEnterInGame = this.userData.plyBaseData.table_id_ > 0;

        } else {
            czcEvent(GLOBAL.GameName, "登录2", "游戏服务器登录失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"));
            this.closeSocket();

            let info;
            if (message.errorMsg !== '') {
                info = message.errorMsg
            }
            if (ret === -2) {
                this.reEnterGame(this.userData.plyStatus.game_id_, this.userData.plyStatus.game_server_id_, info)
            } else {
                this.enterLobby();

                if (!info) {
                    if (ret === -1) {
                        info = '服务器忙'
                    } else if (ret === -3) {
                        info = '验证失败'
                    } else if (ret === -4) {
                        info = '游戏豆不足'
                    } else {
                        info = '服务器连接出错'
                    }
                }
                this.MessageBox(info);
            }
        }
    },
    proto_cb_join_table_req() {
        czcEvent(GLOBAL.GameName, "进桌1", "游戏进桌请求" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))

        this.sendMessage({
            opcode: 'proto_cb_join_table_req',
            tableId: -1,
            password: '',
        })
    },
    proto_bc_join_table_ack(event) {
        let message = event.packet

        let ret = message.ret;
        if (ret === 0) {
            if (message.tableAttrs && message.tableAttrs.tableId !== 100000000)
                czcEvent(GLOBAL.GameName, "进桌2", "游戏进桌成功" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            //
            message.tableAttrs.players.forEach(element => {
                if (element.plyGuid === this.userData.plyBaseData.plyGuid) {
                    for (let k in element) {
                        this.userData.plyBaseData[k] = element[k];
                    }
                }
            });
            this.refreshPlayerData()
            this.proto_cb_ready_req()
        } else {
            czcEvent(GLOBAL.GameName, "进桌2", "游戏进桌失败" + (DataManager.CommonData["morrow"] <= 1 ? DataManager.CommonData["morrow"] + "天新用户" : "老用户"))
            this.enterLobby();

            let info = '服务器连接出错'
            if (ret === -1) { } else if (ret === -3) {
                // 游戏豆不足
                return
            } else if (ret === -14) {
                if (message.errMsg.indexOf('俱乐部') >= 0) {
                    info = message.errMsg;
                } else {
                    let tipsString = '您的房卡不足'
                    this.confirmBox({
                        msg: tipsString,
                        title: '温馨提示',
                        buttonCount: 2,
                        btnTitle: {
                            btnCancel: '去购买',
                            btnConfirm: '确定',
                            btnConfirmSize: 26
                        },
                        boxSize: {
                            width: 600,
                            height: 350
                        },
                        callbackCancel: function () {
                            Event.emit(GLOBAL.EventName.EventShowShop);
                        }
                    });
                    return
                }
            } else if (message.errMsg.length > 0) {
                info = message.errMsg;
            } else if (ret === -2) {
                info = '服务器满';
            } else if (ret === -4) {
                info = '加入密码错误';
            } else if (ret === -5) {
                info = '房间满';
            } else if (ret === -6) {
                info = '比赛场需要先报名';
            } else if (ret === -7) {
                info = '比赛场比赛时间未到或结束';
            } else if (ret === -8) {
                info = '比赛局数已经完成';
            } else if (ret === -9) {
                info = '需要私人房卡才能创建私人房间';
            } else if (ret === -10) {
                let need_money_ = this.serverInfo.maxmoney;
                if (need_money_ >= 10000) {
                    need_money_ = need_money_ / 10000 + '万'
                }
                info = '温馨提示，您的金币大于' + need_money_ + '，请进入高分场游戏'
            } else if (ret === -11) {
                info = '今天已经输了400万金币咯！休息，休息一下，明天再来！'
            } else if (ret === -12) {
                info = '房间已解散'
            }

            this.MessageBox(info);
        }
    },
    proto_cb_ready_req() {
        this.sendMessage({
            opcode: 'proto_cb_ready_req',
        })
    },

    proto_bc_update_ply_data_not(event) {
        cc.log("proto_bc_update_ply_data_not_handler");
        let message = event.packet;

        if (message.plyGuid === this.userData.plyBaseData.plyGuid) {
            DataManager.UserData.money = message.amount;
        }
    },

    proto_lc_send_user_data_change_not(event) {
        // this.refreshPlayerData()
    },

    proto_ppq_cg_set_bet_req(e, num, angle) {
        cc.log('sendAngle', angle);
        // 如果网络不通
        if (!NetManager.Instance.getSocketState(this.socketName)) {
            this.MessageBox("服务器连接出错");
            Event.emit(GLOBAL.EventName.resetLaunch);
            NetManager.Instance.reconnect(this.socketName);
        }
        else {
            this.sendMessage({
                opcode: 'proto_ppq_cg_set_bet_req',
                bet: Number(num),
                angle: Number(angle)
            })
        }
    },
    proto_ppq_gc_set_bet_ack(event) {
        event = event.packet;
        if (event.ret === 0) {

        } else {
            Event.emit(GLOBAL.EventName.resetLaunch);
            if (event.ret === -1 || event.ret === -3) {
                Event.emit(GLOBAL.EventName.EventShowShop);
            }
        }
    },

    proto_ppq_gc_table_info_noti(event) {
        event = event.packet;
        for (let v of event.infoList) {
            if (v.key === "bet_list") {
                GLOBAL.BetList = JSON.parse(v.value)['data'];
                console.log("----", GLOBAL.BetList)
                Event.emit(GLOBAL.EventName.LevelData);
                break;
            }
        }
    },

    // 结算
    proto_ppq_gc_game_end_noti(event) {
        event = event.packet;

        if (event.ret === 0) {
            let score = event.score,
                angle = event.angle,
                speed = event.speed,
                rate = event.multi,
                p = event.p;

            if (rate > 0)
                GLOBAL.Rate = rate;

            if (CC_DEBUG) {

            } else {
                GLOBAL.ManualLine.length = 0;
                if (p.length > 0) {
                    let ps = p.split('|');

                    ps.forEach((i)=>{
                        let bd = i.split(',');
                        GLOBAL.ManualLine.push([Number(bd[0]), Number(bd[1])]);
                    });
                }

                GLOBAL.Speed = Number(speed.toFixed(3));
                GLOBAL.Angle = Number(angle.toFixed(3));
                GLOBAL.Score = score;
            }

            cc.log('angle', GLOBAL.Angle);

            Event.emit(GLOBAL.EventName.SocketPlayRocket);

            // 扣除当前底
            Event.emit(GLOBAL.EventName.SocketPlayFee);
        } else {
            if (CC_DEBUG) {
                cc.log('angle', GLOBAL.Angle)

                Event.emit(GLOBAL.EventName.SocketPlayRocket);
            } else {
                Event.emit(GLOBAL.EventName.resetLaunch);
            }
        }
    },

    socket_closed(socket) {
        cc.log('socket_closed', socket);
        if (!NetManager.Instance.getSocketState(this.socketName)) {
            NetManager.Instance.reconnect(this.socketName);
        }
    }
});
