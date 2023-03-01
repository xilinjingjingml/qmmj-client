
const {ccclass, property} = cc._decorator;

@ccclass
export default class AdsConfig {
    /*
    横幅广告
    1, 通用奖励弹框
    2, 破产补助弹框
    3, 结算斗地主
    4, 结算麻将
    6, 抽红包斗地主
    7, 抽红包麻将


    视频广告
    11, 签到处 
    12, 免费抽奖 
    13, 低保  
    15, 赚趣币 
    16, 免费金币 
    17, 双十一回馈
    18, 双十一嘉年华
    */
    banner = {
        // 横幅广告index
        AwardResultPop: 1,      // 通用奖励弹框
        BankruptDefend: 2,      // 破产补助弹框
        GameResultLayer_rpddz: 3,       // 结算斗地主
        GameResultLayer_hbermj: 4,      // 结算麻将
        GameRedPacketAwardLayer_rpddz: 6,       // 抽红包斗地主
        GameRedPacketAwardLayer_hbermj: 7,      // 抽红包麻将
    }
    
    taskAdsMap = {
        10101:  9,      //登录游戏
        10201: -1,      //每日游戏在线30秒得趣金币
        10202: -1,      //每日游戏在线60秒得趣金币
        10203: -1,      //每日游戏在线2分钟得趣金币
        10204: -1,      //每日游戏在线3分钟得趣金币
        10205: -1,      //每日游戏在线5分钟得趣金币
        10301: -1,      //进行2次充值
        11101: -1,      //斗地主或二人麻将0.3元场游戏5局
        11102: -1,      //斗地主或二人麻将0.3元场游戏15局
        11103: -1,      //斗地主或二人麻将0.3元场游戏30局
        11201: -1,      //斗地主或二人麻将2元场游戏5局
        11202: -1,      //斗地主或二人麻将2元场游戏12局
        11203: -1,      //斗地主或二人麻将2元场游戏25局
        11301: -1,      //斗地主或二人麻将50元场游戏3局
        11302: -1,      //斗地主或二人麻将50元场游戏8局
        11303: -1,      //斗地主或二人麻将50元场游戏15局
        ["CardNoteBuyPop"]: 11, //记牌器
        ["FreeDimond"]: 14, //钻石
    }
    
    video = {
        SignPop: 11,            //11, 签到处 
        FreeDrawPop: 12,        //12, 免费抽奖 
        BankruptDefend: 13,     //13, 低保  
        FreeQttCoin: 15,        //15, 赚趣币 
        FreeGoldenCoin: 16,     //16, 免费金币 
        NationalDayPop: 17,     //17, 双十一回馈
        Double11ActivePop: 18,  //18, 双十一嘉年华
        
        task_10101: 19,         //日常任务 登录
        
        CardNoteBuyPop: 20,     //20, 记牌器
    }
}