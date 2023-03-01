import BaseComponent from "../base/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends BaseComponent {

    @property(cc.SpriteFrame)
    icons:cc.SpriteFrame = [];

    pos = cc.v2(0,0);

    number = 5;
    sfIndex = 0;
    type: any;
    x= 0;
    y= 0;
    icon: any;
    @property(cc.Node)
    animal: cc.Node = null;

    @property(sp.SkeletonData)
    skeDataIcons:sp.SkeletonData=[];

    // use this for initialization
    onLoad() {
        
    }

    init(x,y){
        this.x = x;
        this.y = y;
        this.animal.scale = 1
    }

    setType(type){
        this.type = type;
        this.sfIndex = type;
        this.initSpriteFrame();
    }

    getType(){
        return this.type;
    }
    
    initSpriteFrame(){

        // var sprite=this.getComponent(cc.Sprite);
        // sprite.spriteFrame=this.icons[this.sfIndex];
        // let changeType = this.sfIndex;
        //     if(changeType == 10 ){
        //         changeType = 6;
        // }
        // this.animal.getComponent(cc.Sprite).spriteFrame = this.icons[changeType];
        // this.initAnimalSpineAni();
        this.initAnimalSpineAni2();
    }

    initAnimalSpineAni(){

        let changeType = this.sfIndex;
            if(changeType == 10 ){
                changeType = 6;
        }
        if(changeType!=0){

            let url = "moduleXXLRes/texture/spine/animal"+changeType;
            cc.loader.loadRes(url, sp.SkeletonData, function (err, skedate) {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                let animal = cc.find("animalAnchor/animal", this.node);
                let ske = animal.getComponent(sp.Skeleton)
                if(ske){
                    let random = Math.floor(Math.random()*2)+1;
                    ske.skeletonData = skedate;
                    if(random==1){
                        // ske.setAnimation(0, "daiji", true)
                    }else if(random==2){
                        // ske.setAnimation(0, "zhayan", true)
                    }
                }
            }.bind(this));
        }  
    }

    initAnimalSpineAni2(){
        if(this.sfIndex!=0){
            let animal = cc.find("animalAnchor/animal", this.node);
            let ske = animal.getComponent(sp.Skeleton);
            ske.skeletonData = this.skeDataIcons[this.sfIndex];
        }  
    }

    playDaijiAni(){
        let animal = cc.find("animalAnchor/animal", this.node);
        let ske = animal.getComponent(sp.Skeleton)
        if(ske){
            ske.setAnimation(0, "daiji", false);
        }
    }
    playZhayanAni(){
        let animal = cc.find("animalAnchor/animal", this.node);
        let ske = animal.getComponent(sp.Skeleton)
        if(ske){
            ske.setAnimation(0, "zhayan", false);
        }
    }
    playDuangAni(){
        let animal = cc.find("animalAnchor/animal", this.node);
        let ske = animal.getComponent(sp.Skeleton)
        if(ske){
            ske.setAnimation(0, "duang", false);
        }
    }

    setSelect(flag){
        var select = this.node.getChildByName("select");
        select.active = flag; 
    }
    hideSelect(flag){
        var select = this.node.getChildByName("select");
        select.active = flag; 
    }
    
    showCrushEffect(flag){
        // var effect = this.node.getChildByName("effect"); //这种方法，显示时动画不能播放
        let effect = cc.find("effect", this.node);
        effect.active = flag; 
        let ske = effect.getComponent(sp.Skeleton)
        if(ske){
            ske.setAnimation(0, "animation", false);
        }
        
    }
    hideCrushEffect(flag){
        var effect = this.node.getChildByName("effect");
        effect.active = flag; 
    }

}
