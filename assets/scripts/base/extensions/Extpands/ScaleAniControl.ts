import BaseControl from "./BaseControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScaleAniControl extends BaseControl {

    @property()
    startScale: number = 1

    @property()
    dirScale: number = 1

    @property()
    delayTime: number = 0
    
    @property()
    scaleTime: number = 1

    @property()
    startDelay: number = 0

    @property()
    repeat: boolean = false

    onLoad() {

    }

    start() {
        this.node.runAction(cc.sequence(cc.delayTime(this.startDelay), cc.callFunc(this.playAni.bind(this))))
    }

    playAni(){
        // this.node.scale = this.startScale        
        if (this.repeat)
            this.node.runAction(cc.repeatForever(cc.sequence(
                                    cc.delayTime(this.delayTime), cc.scaleTo(this.scaleTime, this.dirScale), 
                                    cc.delayTime(this.delayTime), cc.scaleTo(this.scaleTime, this.startScale))))
        else
            this.node.runAction(cc.sequence(cc.delayTime(this.delayTime), cc.scaleTo(this.scaleTime, this.dirScale)))
    }
}
