const {ccclass, property} = cc._decorator;

export let PLUGIN_ENV = cc.Enum({
    ENV_TEST: 0, 
    ENV_MIRROR: 1,
    ENV_OFFICIAL: 2,
})

export let SVN_VERSION = 53667

@ccclass("EnvConfig")
export class EnvConfig {
    @property({
        type: cc.Enum(PLUGIN_ENV),
        readonly: true,
    })
    pluginEvn = PLUGIN_ENV.ENV_OFFICIAL
    @property()
    socketURL: string = ""
    @property()
    socketPort: number = 0
    @property()
    loginURL: string = ""
    @property()
    webURL: string = ""
    @property()
    payURL: string = ""
    @property()
    activityURL: string = ""
    @property()
    qttURL: string = ""
    updateURL: string = ""

    set SocketURL(value: string) {
        this.socketURL = value
    }

    static create(item){
        let cfg = new EnvConfig()
        cfg.pluginEvn = item["pluginEvn"]
        cfg.socketURL = item["socketURL"]
        cfg.socketPort = item["socketPort"]
        cfg.loginURL = item["loginURL"]
        cfg.webURL = item["webURL"]
        cfg.payURL = item["payURL"]
        cfg.activityURL = item["activityURL"]
        cfg.qttURL = item["qttURL"]
        cfg.updateURL = item["updateURL"]
        return cfg
    }
}

export let DdzEnvConfigs: EnvConfig[] = ([
    {
        pluginEvn: PLUGIN_ENV.ENV_TEST,
        socketURL: "t_hanode-wss.wpgame.com.cn",
        // socketURL: "192.168.0.126",
        socketPort: 7201,
        loginURL: "http://t_login.wpgame.com.cn/",
        webURL: "http://t_statics.wpgame.com.cn/",
        payURL: "http://t_mall.wpgame.com.cn/",        
        activityURL: "http://t_activity.wpgame.com.cn/",
        uploadURL: "http://t-gamefile.weipinggame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/',
    },
    {
        pluginEvn: PLUGIN_ENV.ENV_MIRROR,
        socketURL: "m_hanode-wss.wpgame.com.cn",
        socketPort: 7201,
        loginURL: "http://m_login.wpgame.com.cn/",
        webURL: "http://m_statics.wpgame.com.cn/",
        payURL: "http://m_mall.wpgame.com.cn/",        
        activityURL: "http://m_activity.wpgame.com.cn/",
        uploadURL: "http://m-gamefile.weipinggame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/'
    },
    {
        pluginEvn: PLUGIN_ENV.ENV_OFFICIAL,
        socketURL: "hanode-wss.wpgame.com.cn",
        socketPort:7201,
        loginURL: "http://login.wpgame.com.cn/",
        webURL: "http://statics.wpgame.com.cn/",
        payURL: "http://mall.wpgame.com.cn/",
        activityURL: "http://activity.wpgame.com.cn/",
        uploadURL: "http://gamefile.weipinggame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/'
    },    
].map(item => EnvConfig.create(item)))

export let MjEnvConfigs: EnvConfig[] = ([
    {
        pluginEvn: PLUGIN_ENV.ENV_TEST,
        socketURL: "t-hanode-wss.weipinggame.com",
        // socketURL: "192.168.0.126",
        socketPort: 7201,
        loginURL: "http://t-login.weipinggame.com/",
        webURL: "http://t-statics.weipinggame.com/",
        payURL: "http://t-mall.weipinggame.com/",        
        activityURL: "http://t-activity.weipinggame.com/",
        uploadURL: "http://t.upload.bdo.hiigame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/',
        updateURL: 'http://t-gamefile.weipinggame.com/'
    },
    {
        pluginEvn: PLUGIN_ENV.ENV_MIRROR,
        socketURL: "m-hanode-wss.weipinggame.com",
        socketPort: 7201,
        loginURL: "http://m-login.weipinggame.com/",
        webURL: "http://m-statics.weipinggame.com/",
        payURL: "http://m-mall.weipinggame.com/",        
        activityURL: "http://m-activity.weipinggame.com/",
        uploadURL: "http://m.upload.bdo.hiigame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/',
        updateURL: 'http://m-gamefile.weipinggame.com/'
    },
    {
        pluginEvn: PLUGIN_ENV.ENV_OFFICIAL,
        socketURL: "hanode-wss.weipinggame.com",
        socketPort:7201,
        loginURL: "http://login.weipinggame.com/",
        webURL: "http://statics.weipinggame.com/",
        payURL: "http://mall.weipinggame.com/",
        activityURL: "http://activity.weipinggame.com/",
        uploadURL: "http://upload.bdo.hiigame.com/",
        qttURL: 'https://newidea4-gamecenter-backend.1sapp.com/',
        updateURL: 'http://gamefile.weipinggame.com/'
    },    
].map(item => EnvConfig.create(item)))

@ccclass("UrlConfig")
export class UrlConfig{
    @property()
    key: string = ""
    @property()
    url: string = ""
    @property()
    _http: string = ""
    @property()
    _path: string = ""

    flushUrl(envConfig: EnvConfig) {
        this.url = envConfig[this._http] + this._path
    }

    static create(item){
        let cfg = new UrlConfig()
        cfg.key = item.key
        cfg._http = item.http
        cfg._path = item.path
        return cfg
    }
}

export let UrlConfigs: UrlConfig[] = [
    {key: "LOADING_CONFIGS", http: "webURL", path:"get/loading/configs"},
    {key: "USER_LOGIN", http: "loginURL", path:"new/gateway/visitor/login?imei={imei}&name={name}&pn={pn}&version={version}&qttFace={qttFace}"},
    {key: "GET_USER_ROLE", http: "webURL", path: "get/loading/configs/role"},
    {key: "LOAD_NEW_REGISTER", http: "webURL", path: "load/new/register/check/info?uid={uid}&gameid={gameid}&ticket={ticket}&pn={pn}"},

    {key: "QTT_USERINFO", http: "qttURL", path: 'x/open/user/ticket?app_id={app_id}&platform={platform}&ticket={ticket}&time={time}&sign={sign}'},
    {key: "QTT_COIN_ADD", http: "qttURL", path: "x/open/coin/add?app_id={app_id}&open_id={open_id}&coin_num={coin_num}&trade_no={trade_on}&sign={sign}"},
    {key: "QTT_COIN_SUB", http: "qttURL", path: "x/open/coin/sub?app_id={app_id}&open_id={open_id}&coin_num={coin_num}&trade_no={trade_on}&sign={sign}"},
    {key: "QTT_COIN", http: "webURL", path: "user/exchange/qttcoin?uid={uid}&ticket={ticket}&gameid={gameid}&pn={pn}&app_id={app_id}&open_id={open_id}"},

    {key: "QTT_NOTIFY", http: "payURL", path: 'qtw/notify'},
    {key: "QTT_ORDER", http: "payURL", path: 'qtw/intl?pid={pid}&boxid={boxid}'},
    {key: "QTT_PAY_QUERY", http: "qttURL", path: "/x/pay/union/order/query"},

    {key: "QTT_COIN_QUERY", http: "payURL", path: "load/qtt/coin/balance"},

    { key: "EXECUTE_TURN_DRAW", http: "activityURL", path: "start/turn/draw" },
    { key: "LOAD_TURN_DRAW_STATUS", http: "activityURL", path: "load/turn/draw" },
    { key: "LOAD_TURN_DRAW_PREVIEW", http: "activityURL", path: "load/place/dial" },
    { key: "LOAD_TURN_DRAW_LIST", http: "activityURL", path: "load/wheel/list" },
    { key: "EXECUTE_JACKPOT_DRAW", http: "activityURL", path: "get/jackpot/money" },
    { key: "LOAD_LUCKY_RANK", http: "activityURL", path: "luck/value/rank" },

    {key: "QTT_AD", http: "activityURL", path: "HBProject/qtt_ad.html?app_id={appi_d}&_NO_BRIDGE_=1"},

    {key: "GET_NEW_REGISTER_CHECK_AWARD", http: "webURL", path: "get/new/register/check/award?uid={uid}&gameid={gameid}&ticket={ticket}&pn={pn}"},
    {key: "VIPCONFIG", http: "webURL", path: "load/new/game/vip/config?gameid="},

    {key: "DUIHUANCONFIG", http: "webURL", path: "get/new/goods/exchange/list?pn={pn}&sign={sign}&uid={uid}&ticket={ticket}&gameid={gameid}"}, // 兑换配置
    {key: "DUIHUAN", http: "webURL", path: "user/exchange/goods?uid={uid}&gameid={gameid}&goodsId={goodsId}&ticket={ticket}&pn={pn}&sign={sign}&app_id={app_id}&open_id={open_id}"}, //红包兑换
    {key: "DUIHUANRECORD", http: "webURL", path: "get/user/goods/exchange/log?uid={uid}&pn={pn}&ticket={ticket}&pageNow={pageNow}&pageSize={pageSize}&gameid={gameid}"}, //红包兑换记录

    {key: "SEXCOMMIT", http: "loginURL", path: "new/gateway/user/uptinfo?pid={pid}&ticket={ticket}&sex={sex}"},

    {key: "MOBILE_STATUS", http: "webURL", path: "get/user/info"},
    {key: "MOBILE_CODE_GET", http: "webURL", path: "get/phone/code"},
    {key: "MOBILE_BIND_USER", http: "loginURL", path: "new/gateway/phone/login"},

    {key: "DIAL", http: "activityURL", path: "load/place/dial?gameid={gameid}&channel={channel}&activityId={activityId}&uid={uid}&sign={sign}&pn={pn}&taskid={taskid}"},
    {key: "DARW_DIAL", http:"activityURL", path: "start/place/dial?gameid={gameid}&channel={channel}&activityId={activityId}&uid={uid}&sign={sign}&pn={pn}&taskid={taskid}"},

    {key: "AD_CONFIG", http: "webURL", path: "load/adconfig?pid={pid}&ticket={ticket}"},
    {key: "GET_AD_AWARD", http: "webURL", path: "execute/task/award/draw?pid={pid}&ticket={ticket}&taskInd={taskInd}&gameid={gameid}&sign={sign}&signDay={signDay}&pn={pn}"},

    {key: "USERBATCH", http: "webURL", path: "get/loading/user/batchs?uids={uids}"},

    {key: "SHOPITEMS", http: "payURL", path: "shop/box/list"},
    {key: "SHOP_HISTORY", http: "payURL", path: "vou/order/list?pid={pid}&ticket={ticket}&pn={packageName}"},

    {key: "GAME_AWARD", http: "webURL", path:"get/new/user/gameaward"},

    {key: "ACTIVE_BUY_COUNT", http: "webURL", path: "load/buy/box/count"},
    {key: "ACTIVE_BUY_GET_AWARD", http: "webURL", path: "get/recharge/reward"},
    
    { key: "GET_WX_OPENID", http: "loginURL", path: "wechat/jscode/session?appid={appid}&jscode={jscode}" },
    { key: "GAME_LOGIN", http: "loginURL", path: "new/gateway/webchat/miniapps/login?appid={appid}&pn={pn}&version={version}&imei={imei}&name={name}&openId={openId}&rawData={rawData}&signature={signature}&bindOpenId={bindOpenId}" },
    { key: "WX_PAY_URL", http: "payURL", path: "tencentapp/intl/pay?pid={pid}&ticket={ticket}&boxid={boxid}&appid={appid}&openid={openid}&openkey={openkey}&pay_token={pay_token}&pf={pf}&pfkey={pfkey}&sessionId={sessionId}&sessionType={sessionType}&envFlag={envFlag}&sdkFlag={sdkFlag}" },
    { key: "WX_PAY_SURE_URL", http: "payURL", path: "tencentapp/midas/pay/sure?pid={pid}&ticket={ticket}&appid={appid}&openid={openid}&order={order}&offer_id={offer_id}&pf={pf}&envFlag={envFlag}" },
    { key: "GAME_REPORT", http: "reportURL", path: "" },

    // 好友推广
    {key: "LOAD_REDPACKET_PROMOTER_RULE", http: "webURL", path: "load/redPackgeDDZ/promoter/rule"},
    { key: "LOAD_PYRAMID_SPREAD_INFO", http: "webURL", path: "load/pyramid/spread/info?uid={uid}&lobbyid={lobbyid}&gameids={gameids}&ticket={ticket}&sign={sign}" },
    { key: "GET_PYRAMID_SPREAD_AWARD", http: "webURL", path: "get/pyramid/spread/award?uid={uid}&lobbyid={lobbyid}&gameids={gameids}&ticket={ticket}&sign={sign}" },

    {key: "LOAD_REDPACKET_RANK", http: "webURL", path: "load/rank/info?pid={pid}&ticket={ticket}"},
    {key: "PAY_TOTAL", http: "webURL", path: "get/pay/total/award?pid={pid}&ticket={ticket}&flag={flag}"},

    {key: "GET_GAME_RULE", http: "webURL", path: "load/game/rule?gameId={gameId}"}, 

    //h5支付
    //client客户端 web表示PC网页版（默认）  wap表示手机网页版
    //num宝箱数量
    //pageType0:默认判断1:创建俱乐部购买2:亲友圈直充    
    //clubPayType亲友圈创建,直充区分clubPayType:0:默认2:创建,3:直充
    { key: "GETWEIXINH5", http: "payURL", path: "appProxyPay/index.html?pid={pid}&ticket={ticket}&boxid={boxid}&pn={pn}&appid=wxc2f9fd5496d0340c&time={time}" },
    { key: "GETALIPAYH5", http: "payURL", path: "izhangxin/pay/buy?pid={pid}&ticket={ticket}&boxid={boxid}&pn={pn}&client={client}&num={num}&gameId={gameId}" },

    // 游戏赚钱排行
    {key: "LOAD_GAMERANK_WINMONEY", http: "webURL", path: "load/game/rank/winmoney?uid={uid}&ticket={ticket}&gameid={gameid}&sign={sign}"},
    // 游戏大奖排行
    {key: "LOAD_GAMERANK_SUPERAWARD", http: "webURL", path: "load/game/rank/superaward?uid={uid}&ticket={ticket}&gameid={gameid}&sign={sign}"},
//微信

].map(item => UrlConfig.create(item))