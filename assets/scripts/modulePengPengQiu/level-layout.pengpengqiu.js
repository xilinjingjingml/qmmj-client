
let Ball = require('ball.pengpengqiu');

cc.Class({
    extends: cc.Component,

    ctor () {
        this.mLevel = null;
        this.mBalls = [];
    },

    properties: {
        prefab: cc.Prefab,
        mGloss: {
            type: cc.Integer,
            default: 0
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    getLevel() {
        return this.mLevel;
    },

    init(levelObj) {
        this.mLevel = levelObj;
        this.mBalls = this.mBalls || [];

        if (this.prefab) {
            let self = this;

            let widget = this.getComponent(cc.Widget);
            if (!widget) {
                widget = this.addComponent(cc.Widget);
            }
            widget.target = this.node.parent;
            widget.isAlignTop = widget.isAlignLeft = widget.isAlignBottom = widget.isAlignRight = true;
            widget.top = widget.left = widget.bottom = widget.right = 0;

            this.node.children.forEach((slot)=> {
                let inst = cc.instantiate(self.prefab);
                slot.addChild(inst);
                let ball = inst.getComponent(Ball);
                if (ball) {
                    ball.init(self);
                    ball.initFlower();  
                    self.mBalls.push(ball);
                    this.mLevel.mBalls.push(ball);
                }
            });
        }
    },

    reset() {
        this.mBalls.forEach((ball)=>{
            ball.reset();
        });
    },

    calculateBossLightCount(){
        let count = 0
        this.node.children.forEach((slot)=>{
            let light = slot.getChildByName("light");
            let gloss = light.getChildByName("gloss");
            if(gloss && (gloss.active === true)){
                count++;
            }
        });
        return count;
    },
    
    // update (dt) {},
});
