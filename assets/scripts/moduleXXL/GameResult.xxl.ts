import BaseComponent from "../base/BaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameResult extends BaseComponent {

    @property(cc.SpriteFrame)
    icons:cc.SpriteFrame = [];

    jiesuan1:any;
    jiesuan2:any;
    resultTip:any;
    resultMoney:any;

    start () {
        // this.jiesuan1.active = false;
        // this.jiesuan2.active = false;
    }

    initGameResult(money,index){
        console.log("GameResult---initGameResult===",money,index);
        this.resultMoney.getComponent(cc.Label).string = ":"+money;
        if(money>0){
            if(index<=2){
                this.jiesuan1.active = true;
                this.jiesuan2.active = false;
            }
            else{
                this.jiesuan1.active = false;
                this.jiesuan2.active = true;
            }
            this.resultTip.active = true;
            this.resultTip.getComponent(cc.Sprite).spriteFrame = this.icons[index];
        } 
    }

}
