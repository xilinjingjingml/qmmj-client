const {ccclass, property} = cc._decorator

@ccclass
export default class BaseMessage extends cc.Component {
    
    @property({
        type: [String, Function]
    })
    _eventListener = []

    // event listener
    addListener(messageName, func: (message) => void) {
        this._eventListener[messageName] = func
    }

    getMessage(message) {
            // console.log("baseMessage" + message)
        if (typeof message == "string"){
            if (this[message] && typeof this[message] == "function")
                this[message]()

            if (this._eventListener && this._eventListener[message])
                this._eventListener[message]()
        }
        else if (null != message.opcode) {
            if (this[message.opcode] && typeof this[message.opcode] == "function")
                this[message.opcode](message)

            if (message.opcode && this._eventListener && this._eventListener[message.opcode])
                this._eventListener[message.opcode](message)
        }
    }
}