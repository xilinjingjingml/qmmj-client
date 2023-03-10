import WebSocketWrapper from "./WebSocketWrapper";
import SceneManager from "../baseScene/SceneManager";
import NotfiyMessage from "./NotfiyMessage";
import DataManager from "../baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetManager extends cc.Component {

    private static _instance: NetManager = null

    @property()
    _notfiyMessage: NotfiyMessage = new NotfiyMessage()

    @property({
        type: [String, WebSocketWrapper]
    })
    socketList = []

    static get Instance() {
        return NetManager._instance
    }

    onLoad(){
        NetManager._instance = this
    }

    onInit() {
        this.socketList = []
        this._notfiyMessage = new NotfiyMessage()

        this.node.on("sendMessage", (event) => this.send(event.socketName, event.message))
    }

    setUrl(name, url) {
        let socket = this.socketList[name];
        if (null != socket) {
            socket.url = url
        }

    }

    login(name, url, proto, define, loginFunc: (WebSocketWrapper) => void = null) {
        if (name != "lobby")
            DataManager.CommonData["runGame"] = name

        let socket = this.socketList[name];
        if (null == socket) {
            // let socket = new WebSocketWrapper(url)
            let socket = this.node.addComponent(WebSocketWrapper)
            socket.url = url
            socket.linkName = name
            socket.msgDelegate = this.onMessage.bind(this)
            socket.loginRequestDelegate = loginFunc
            socket.setProtobuf(proto, define)
            socket.connect()
            this.socketList[name] = socket
        }
    }

    getSocketState(name: string) {
        if (null == this.socketList[name])
            return null
            
        return this.socketList[name].getReadyState()
    }

    close(name, deleteSocket = true, deleteLobby = false) {
        let socket = this.socketList[name];
        if (null != socket) {
            socket.close()
            if (("lobby" != name || deleteLobby) && deleteSocket)
                delete this.socketList[name]
        }
    }

    reconnect(name) {
        let socket = this.socketList[name];
        socket && socket.reconnect()
    }

    send(name, message) {
        // console.log("netmanager send")
        // ???????????????????????? ?????????
        // console.log(this.socketList[name], this.socketList[name].getReadyState())
        let self = this
        if (this.socketList[name] && this.socketList[name].getReadyState()){
            this.socketList[name].send(message)    
        }
        // socket ??????????????? ??????????????????????????? ????????????
        else if (this.socketList[name] && this.socketList[name].getBeOnClose()) {
            return
        }
        //???socket?????? ????????????????????? ???????????? //???????????????????????? ?????? name == "lobby" && 
        else if (this.socketList[name] && this.socketList[name].getCloseState()) {
            let webSocket = this.socketList[name]
            let delaySend = function(socket) {
                // console.log(socket)
                // console.log("delaySend")
                self.socketList[name].send(message)    
            }

            webSocket.setOnConnect(delaySend)
            this.socketList[name].reconnect()
        }
        //???socket?????? ??????????????????????????????????????? ????????????????????? ??????0.5???????????? //???????????????????????? ?????? name == "lobby" && 
        else if (this.socketList[name]){
            // let webSocket = this.socketList[name]
            let self = this
            let delaySend = function() {
                // webSocket.send(message)
                this.send(name, message)
            }
            this.scheduleOnce(delaySend, 2)            
        }       
        else {
            // BaseFunc.MessageBox({title: "??????", connect: "??????????????????"})
            // iMessageBox("??????????????????")
        }
    }

    SocketFailed(socket: WebSocketWrapper) {
        console.log("socket connect failed")
        let reconnect = function(){
            socket.reconnect()
        }

        if (socket.linkName == "lobby") {
            // ???????????????????????????????????? ???????????? ????????????????????????????????? ????????????????????? ????????????
            if (this.socketList.length < 2) 
                cc.director.getScheduler().schedule(reconnect, this, 60, false);
        }
        else if (socket.linkName == "lobby" && -1 != socket.url.indexOf("hanode-wss.wpgame.com.cn")) {
            socket.url = socket.url.replace("hanode-wss.wpgame.com.cn", "hanode111.wpgame.com.cn")
            socket.reconnect();
        }
        else{
            SceneManager.Instance.sendMessageToScene({opcode: "socket_closed", socket: socket})
        }
    }

    SocketReconnet(socket: WebSocketWrapper) {
        console.log("socket reconnect")
        SceneManager.Instance.sendMessageToScene({opcode: "socket_reconnect", socket: socket})
    }

    onMessage(message) {
        if (null == message)
            return

        let opcode = message.opcode
        let packet = message.packet

        // ????????????????????? ???????????????????????????????????? ????????????????????????
        if (this._notfiyMessage[opcode])
            this._notfiyMessage[opcode](message)

        SceneManager.Instance.sendMessageToScene(message)
    }
}
