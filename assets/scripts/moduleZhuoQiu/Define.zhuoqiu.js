let uuid = 0;
module.exports = {
    DEBUG: false,
    TABLE: {
        width: 366,
        height: 726,
    },
    HOLE: {
        // radius: 38,
        // cornerX: 214,
        // cornerY: 364,
        // cornerL: 56,
        // borderX: 214,
        // borderY: 0,
        // borderL: 56,
        radius: 28,
        cornerX: 183,
        cornerY: 363,
        cornerL: 52,
        borderX: 183,
        borderY: 0,
        borderL: 52,
    },
    BALL: {
        radius: 17,
        shotX: 0,
        shotY: -180,
        ballsX: 0,
        ballsY: 180,
    },
    BALL_LAYOUT: [
        2, 4, 3, 6, 9, 5, 8, 7, 1
    ],
    BASE: [
        100, 500, 1000, 5000, 10000, 50000, 100000
    ],
    EventName: {
        // 弹出商店
        EventShowShop: "E_"+uuid++,
        // 切换球杆
        event_switchStick: "E_"+uuid++,
        // 停止自动出杆
        stopAuto: "E_"+uuid++,
        // 刷新用户信息
        Event_Update_UserInfo: "E_"+uuid++,
        // 出杆
        onOneShot: "E_"+uuid++,
        // 自动出杆
        onAutoShot: "E_"+uuid++,
        // 重置桌球所有逻辑
        logicReset: "E_"+uuid++,
        // 当桌球游戏开始
        tableOnStart: "E_"+uuid++,
        // 重置桌面逻辑
        tableReset: "E_"+uuid++,
        // 向服务器发送出杆
        SocketPlayReq: "E_"+uuid++,
        // 收到服务器结果后出杆
        SocketPlayStick: "E_"+uuid++,
        // 重置杆
        resetStick: "E_"+uuid++,
        // 扣除一个底注的游戏币
        SocketPlayFee: "E_"+uuid++,
        // 桌面震动
        ScreenShake: "E_"+uuid++,
        // 清理结算
        ClearResultUI: "E_"+uuid++,
        // 广播JP数量
        SocketShowJPNum: "E_"+uuid++,
    },
    Bet: 0,
    Score: 0,
    ballCachedRes: [],
    ballColors: ["#dedede", "#ffae01", "#2c66c3", "#f5000d", "#4f1e94", "#f25d00", "#128e23", "#661301", "#000000", "#ffaf02"],
    fixR: 0.5,
    goddessCountDown: 0,
    shotVX: 10.5,
    shotVY: 150,
    minV: 0.06,
    PI: Math.PI,
    stopV: 0.2,
    odds: 300,
    isNewer: false,
    isLoss: false,
    ballInNow: [],
    ballsN: 0,
    shotStartTime: 0.45,
}
