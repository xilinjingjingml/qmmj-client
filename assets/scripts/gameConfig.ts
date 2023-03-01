const {ccclass, property} = cc._decorator;


export let GAME_TYPE = cc.Enum({
    QMDDZ: 0,
    QMMJ: 1,
})

@ccclass
export class PacketConfig {

    @property()
    pn: string = ""

    @property()
    gameId: number = 0

    @property()
    qttAppId: string = ""

    @property()
    qttAppKey: string = ""

    @property()
    wechatPublic: string = ""

    @property()
    gameList: number[] = []

    static create(packet) {
        let cfg = new PacketConfig()
        cfg.pn = packet["pn"]
        cfg.gameId = packet["gameId"]
        cfg.qttAppId = packet["qttAppId"]
        cfg.qttAppKey = packet["qttAppKey"]
        cfg.wechatPublic = packet["wechatPublic"]
        cfg.gameList = packet["gameList"]
        return cfg
    }
}

let Packets: PacketConfig[] = ([
    { 
        pn: "com.union.hbddz.h5", 
        gameId: 1238, 
        qttAppId: "a3DU28NdpPFW", 
        qttAppKey: "IOffMOdkCOfopfkICBFVb4JbRBibOvSICNAOOMU7MxPOVFuANbbyLbDtKbffZCKC",
        wechatPublic: "全民斗地主赚金版",
        gameList: [389, 391, 393]
    },
    { 
        pn: "com.union.qmmj.h5", 
        gameId: 1242, 
        qttAppId: "a3J3rmxzV5aN", 
        qttAppKey: "oggCCFIdAThoNTKkJIefMHHzoOG2hocnN5NwGGAv8lGYxGCxG4jrHlGNWG9EcJkI",
        wechatPublic: "掌心麻将圈",
        gameList: [391, 393, 397, 398, 395, 396, 400, 401, 402]
    },
]).map(packet => PacketConfig.create(packet))

export function getPacketConfig(gameType: number) {
    return Packets[gameType]
}

let Games = []
let GameModules = []
let GameNames = []
let SmallGames = []

let setGameModule = function(gameId, moduleName, gameName, smallGame:boolean = false){
    Games[gameId] = moduleName
    GameModules[moduleName] = gameId
    GameNames[gameId] = gameName
    SmallGames[gameId] = smallGame
}

setGameModule(389, "moduleRPDdz", "斗地主")
setGameModule(391, "moduleHBErmj", "二人麻将")
setGameModule(393, "moduleXXL", "消消乐", true)
setGameModule(397, "moduleGdmj", "广东麻将鸡平胡")
setGameModule(398, "moduleGdmj", "广东麻将推倒胡")
setGameModule(395, "moduleHBScmj", "四川麻将血战到底")
setGameModule(396, "moduleHBScmj", "四川麻将血流成河")
setGameModule(400, "moduleZhuoQiu", "桌球", true)
setGameModule(401, "moduleHBJxmj", "江西红中麻将")
setGameModule(402, "modulePengPengQiu", "弹球", true)

export function getGameConfig(obj : String | Number) {   
    if (typeof obj == "string")
        return GameModules[obj as string]
    else if (typeof obj == "number")
        return Games[obj as number]
   
    return null        
}

export function getGameName(obj : String | Number) {   
    if (typeof obj == "string" && GameModules[obj as string])
        return GameNames[GameModules[obj as string]]
    else if (typeof obj == "number")
        return GameNames[obj as number]
   
    return ""
}

export function isSmallGame(obj : String | Number) {   
    if (typeof obj == "string" && GameModules[obj as string])
        return SmallGames[GameModules[obj as string]]
    else if (typeof obj == "number")
        return SmallGames[obj as number]
   
    return ""
}

export function getGameModules() {
    // if (GameModules.length <= 0)
    // {
    //     return null;
    // }
    return GameModules
}

export function isWeChatGame(){
    return window["wx"] ? true : false
}

export function isAndroidGame(){
    //cc.log("isAndroidGame ==", window["android"], window["Android"]);
    return (cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID)) ? true : false
}