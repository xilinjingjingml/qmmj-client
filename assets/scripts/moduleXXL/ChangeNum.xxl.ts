
const {ccclass, property} = cc._decorator;
@ccclass
export default class ChangeNum extends cc.Component {

    pre_num: any;
    target: any;
    intervalValue: any;
    nodeNum:cc.Node;
    time: number = 1;
    speed: number = 0.01;

    change(node,e){
        this.nodeNum = node;
        this.pre_num = Number(this.nodeNum.getComponent(cc.Label).string) || 0;
        this.target = e;
        this.intervalValue = Math.ceil( (this.target - this.pre_num) / (this.time/this.speed) );
        this.startChange();
    }
    updateNum(){
        if (!this.nodeNum.isValid) {
            this.unschedule(this.updateNum)
            return
        }
        this.pre_num < this.target ? (this.nodeNum.getComponent(cc.Label).string = this.pre_num,
                this.pre_num += this.intervalValue,
                this.nodeNum.getComponent(cc.Label).string = this.pre_num) : 
                (this.nodeNum.getComponent(cc.Label).string = this.target,
                this.unschedule(this.updateNum))
    }
    startChange(){
        this.updateNum();
        this.schedule(this.updateNum, this.speed);
    }

    removeSchedule(){
        this.unschedule(this.updateNum)
    }
}
