import BaseScene from "../base/baseScene/BaseScene";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameRule extends BaseScene {

    @property(cc.Toggle)
    toggle1:cc.Toggle = null;

    @property(cc.Toggle)
    toggle2:cc.Toggle = null;

    @property(cc.Node)
    scrollView1:cc.Node = null;

    @property(cc.Node)
    scrollView2:cc.Node = null;


    onOpenScene() {
        
    }

    onLoad(){
        this.toggle1.node.on('toggle', this.toggle1CallBack, this);
        this.toggle2.node.on('toggle', this.toggle2CallBack, this);
    }

    toggle1CallBack(){
        this.scrollView1.active = true;
        this.scrollView2.active = false;
    }

    toggle2CallBack(){
        this.scrollView1.active = false;
        this.scrollView2.active = true;
    }

    
}
