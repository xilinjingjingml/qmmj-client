import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.scmj"
import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameEmpty extends cc.Component {


    @property
    thisComponentName:string = "GameEmpty.scmj"
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    __bindButtonHandler() {
        
    }

    start () {

    }

    // update (dt) {}
}
