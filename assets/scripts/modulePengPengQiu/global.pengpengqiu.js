let uuid = 0;

let M = {
    GameName: '碰碰球',
    EventName: {
        // 弹出商店
        EventShowShop: "E_"+uuid++,
        // 切换底注
        event_switchStick: "E_"+uuid++,
        // 停止自动出球
        stopAuto: "E_"+uuid++,
        // 刷新用户信息
        Event_Update_UserInfo: "E_"+uuid++,
        // 出球
        onOneShot: "E_"+uuid++,
        // 自动出球
        onAutoShot: "E_"+uuid++,
        // 重置桌球所有逻辑
        logicReset: "E_"+uuid++,
        // 当桌球游戏开始
        tableOnStart: "E_"+uuid++,
        // 重置桌面逻辑
        tableReset: "E_"+uuid++,
        // 向服务器发送出球
        SocketPlayReq: "E_"+uuid++,
        // 收到服务器结果后出球
        SocketPlayRocket: "E_"+uuid++,
        // 重置火箭
        resetLaunch: "E_"+uuid++,
        // 扣除一个底注的游戏币
        SocketPlayFee: "E_"+uuid++,
        // 清理结算
        ClearResultUI: "E_"+uuid++,
        // 下一个场景
        NextLevel: "E_"+uuid++,
        // 上一个场景
        PreLevel: "E_"+uuid++,
        // 游戏结束
        GameOver: "E_"+uuid++,
        // 更新当前所得
        UpdateCurrentTotal: "E_"+uuid++,
        // 服务器下发的Level数据
        LevelData: "E_"+uuid++,
        //
        BossBoomFinish: "E_"+uuid++,

        BigWinFinish: "E_"+uuid++,
    },

    // 底注列表
    CurrentLevelIndex: 0,
    BetList: [],

    Speed: 6.5,
    Angle: 0,
    Score: 0,

    Countdown: 15,
    RocketRadius: 20,

    Rate:1,

    AutoLine: true,
    ManualLine: [],
};

if (CC_DEBUG) {
    M.Debug = true;
    M.AutoPath = false;
    M.IsTesting = false;
    M.IsCollectData = false;
}

module.exports = M;
