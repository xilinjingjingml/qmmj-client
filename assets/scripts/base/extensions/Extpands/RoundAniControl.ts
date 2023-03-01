import { start } from "repl";
import BaseControl from "./BaseControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoundAniControl extends BaseControl {

    @property()
    roundAngle: number = 0

    @property()
    roundSpeed: number = 0

    @property()
    isForever: boolean = false

    @property()
    isStart: boolean = false

    nDelay: number = 0

    onLoad() {
        if (this.isForever)
            this.node.runAction(cc.repeatForever(cc.rotateBy(this.roundSpeed, -this.roundAngle)))
        else
            this.node.runAction(cc.rotateBy(this.roundSpeed, -this.roundAngle)        
    }

    update(dt) {
        // if (!this.isStart)
        //     return

        // this.nDelay += dt
        // if (this.nDelay >= this.roundSpeed) {
        //     this.node.angle += this.roundAngle
        //     this.nDelay = 0
        // }
    }
}
