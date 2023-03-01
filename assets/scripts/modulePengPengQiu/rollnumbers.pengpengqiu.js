
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        this.speed = 1;
        this.myvalue = 0;
        this.numberSize = 11;
        this.distenceY = 51;
        this.numberArr =[];

        for (let i = 0; i < this.numberSize; i++) {
            let name = "sptRedPacketNum"+(i+1);
            this.node.getChildByName(name).active = false
        }
    },

    reInit() {
        for (let i = 0; i < this.numberSize; i++) {
            let name = "sptRedPacketNum"+(i+1);
            this.node.getChildByName(name).active = false       
            this.node.getChildByName(name).getChildByName("labelRedPacketNum").y = -1 * this.distenceY
        }
        this.numberArr = []
        this.myvalue = 0
    },

    setSrcValue(value=0) {
        this.reInit();
        this.distenceY = 51;
        this.myvalue = value

        this.numberArr = value.toString(10).replace(/\D/g, '0').split('').map(Number);
        // this.numberArr.unshift(-1)

        this.numberArr.forEach((v, k) => {
            let name = "sptRedPacketNum"+(k+1);
            this.node.getChildByName(name).active = true
            this.node.getChildByName(name).getChildByName("labelRedPacketNum").y = this.distenceY * v
        })

    },
    setDstNumber(value=0,callback) {
        this.reInit();
        this.distenceY = 51;
        let devideNumber = this.myvalue == 0 ? 1 : this.myvalue
        let devide_delta = value/devideNumber
        let minus_delta = value - this.myvalue
        if (devide_delta >= 100) {
            return
        } 
        
        
        let numbeArrSrc = this.numberArr
        let numbeArrDst = value.toString(10).replace(/\D/g, '0').split('').map(Number);

        if(devide_delta >= 10){

        }else{
            numbeArrDst.unshift(0)
        }

        this.myvalue = value
        
        numbeArrDst.forEach((v, k) => {
            let name = "sptRedPacketNum"+(k+1);
            this.node.getChildByName(name).active = true
            let dstY = this.distenceY * v
            let curY = this.node.getChildByName(name).getChildByName("labelRedPacketNum").y

            let actionList = []
            let gapTime = 0;
            actionList[actionList.length] = cc.delayTime((numbeArrDst.length - k)*gapTime);
            
            let loopTime = Math.floor(minus_delta / Math.pow(10, (numbeArrDst.length - k)))
            
        //     //进位
            if (curY/this.distenceY * Math.pow(10, (numbeArrDst.length - k - 1)) + minus_delta > Math.pow(10, (numbeArrDst.length - k))) {
                loopTime++                
            }

        //     //减少圈数
            if (loopTime > k) {
                loopTime = k
            }
            loopTime = 1;
            for (let i = 0; i < loopTime; i++) {
                actionList[actionList.length] = cc.moveTo(2.5 + k * 0.5, cc.v2(0, (this.numberSize-1) * this.distenceY )).easing(cc.easeIn(2));
                actionList[actionList.length] = cc.callFunc(() => {
                    this.node.getChildByName(name).getChildByName("labelRedPacketNum").y = 0
                })
            }
            
            // let timeFix = loopTime == 0 ? 1 : loopTime
            actionList[actionList.length] = cc.moveTo(1 + k * 0.5, cc.v2(0, dstY)).easing(cc.easeOut(8));
            actionList[actionList.length] = cc.callFunc(() => {
                if(callback && k==numbeArrDst.length-1){
                    callback();
                }
            })
            this.node.getChildByName(name).getChildByName("labelRedPacketNum").stopAllActions()
            this.node.getChildByName(name).getChildByName("labelRedPacketNum").runAction(cc.sequence(actionList));
        })
    },

    setRollSpeed(value=1) {
        this.speed = value
    }

});
