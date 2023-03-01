import { CELL_WIDTH, CELL_HEIGHT } from "./ConstValue.xxl";
import Star from "./Star.xxl";
import GameLogic from "./GameLogic.xxl";
import DataManager from "../base/baseData/DataManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Grid extends cc.Component {

    Col:Number = 8;
    Row:Number = 8;
    Padding:0;
    SpacingX:0;
    SpacingY:0;
    @property(cc.Prefab)
    star:cc.Prefab = null;


    oneCount: number = 0
    twoCount: number = 0
    threeCount: number = 0
    fourCount: number = 0
    fiveCount: number = 0
    sixCount: number =0

    pSet:any;//坐标矩阵集合
    stars:any;
    mask:any;
    controller: any;
    mBoard: any;
    mMatchedTiles: any;
    index: number;
    nAutoType: any;
    nAwardMoney: any;
    totalCount: any;

    setController(controller){
        this.controller = controller;
    }
    //棋盘信息，消除信息
    setBoardData(message){
        this.mBoard = message.mBoard;
        this.mMatchedTiles = message.mMatchedTiles;
        this.nAutoType = message.nAutoType;
        this.nAwardMoney = message.nAwardMoney;
        let count = 0;
        for (let i = 0; i < this.mMatchedTiles.length; i++) {
            let data2DLen = this.mMatchedTiles[i].data2D.length;
            count = count +data2DLen;
        }
        this.totalCount = count;
        let realGainMoney = Math.floor(this.nAwardMoney * (100-GameLogic.Instance().serverInfo.tax)/100);
        DataManager.UserData.money = DataManager.UserData.money + realGainMoney;
    }

    //游戏开始入口
    initGame(){
        // console.log("Grid---initGame.....");

        this.index = 0;
        this.buildCoordinateSet();
        this.init();
    }

    initNodePool(){
        this.prefab_starPool = new cc.NodePool(); 
        for(let i = 0 ; i < 400 ; i++){
            this.prefab_starPool.put(cc.instantiate(this.star));
        }
    }
    clearNodePool(){
        this.prefab_starPool.clear();
    }

    //根据配置信息生成每个元素的坐标点对象
    buildCoordinateSet(){
        this.pSet=[];     
        for(let i=0;i<this.mBoard.length;i++){
            let arr=[];
            for(let j=0;j<this.mBoard[i].data1D.length;j++){
                let x = CELL_WIDTH * (i+0.5);
                let y = CELL_HEIGHT *(j+0.5);
                let position=cc.v2(x,y);
                arr.push(position);
            }
            this.pSet.push(arr);
        }       
    }

    //初始化函数，生成star节点
    init(){
        let node=this.node;
        this.mask=[];
        this.stars=[];
        let pSet=this.pSet;
        
        for(let i=0;i<this.mBoard.length;i++){
            let arr1=[];
            let marr=[];
            for(let j=0;j<this.mBoard[i].data1D.length;j++){
                
                let nType = this.mBoard[i].data1D[j].nType;
                let nPosX = this.mBoard[i].data1D[j].nPosX;
                let nPosY = this.mBoard[i].data1D[j].nPosY;

                let ele = this.prefab_starPool.get()
                if(ele == null) {
                    ele = cc.instantiate(this.star); 
                } 
                // let ele = cc.instantiate(this.star);
                ele.setPosition(pSet[i][j].x,pSet[i][j].y);
                node.addChild(ele,0,"ele");
                // this.addTouchEvents(ele);
                let com=ele.getComponent('Star.xxl');
                com.setType(nType);
                com.init(nPosX,nPosY);
                com.pos=cc.v2(nPosX,nPosY);
                ele.active = false;
                arr1.push(ele);
                marr.push(0);
            }
            this.mask.push(marr);
            this.stars.push(arr1);
        }
        this.showStar();
    }

    distancePoint(src, dst)
    {
        return Math.sqrt(Math.abs(dst[0]-src[0])*Math.abs(dst[1]-src[1]))
        
    }
    showStar(){
        GameLogic.Instance().playAnimalAppear();
        for (let i = 0; i < this.stars.length; i++) {
            for (let j = 0; j < this.stars[i].length; j++) {
                if(this.stars[i][j]){
                    let delayTime = this.distancePoint([i, j], [3.5,3.5])*0.1;
                    if(j>8){
                        delayTime = 0;
                    }

                    if (delayTime == 0) {
                        this.stars[i][j].active = true; 
                        this.stars[i][j].opacity = 255;                    
                    }else{
                        let action0 = []
                        action0[action0.length] = cc.delayTime(delayTime)
                        action0[action0.length] = cc.spawn(
                            cc.scaleTo(0.1, 1), 
                            cc.fadeTo(0.15, 255)
                        );

                        this.stars[i][j].active = true;
                        this.stars[i][j].opacity = 1;
                        this.stars[i][j].scale = 0.1;
                        this.stars[i][j].stopAllActions()
                        this.stars[i][j].runAction(cc.sequence(action0))
                    }

                    
                    // this.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function(){
                    //     if(typeof(this.stars[i][j]) != 'undefined'){
                    //         this.stars[i][j].active = true;
                    //     }
                                          
                    // },this)));
                }    
            }
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.6), cc.callFunc(function(){
            this.playSpineAni();
            this.crush();
        },this)));    
    }

    //随机播放动画
    playSpineAni(){
        let count = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if(typeof(this.stars[i][j]) != 'undefined'){
                    
                    if(count<3){
                        count = count+1;
                        let randomX = Math.floor(Math.random()*8);
                        let randomy = Math.floor(Math.random()*8);
                        let obj = this.stars[randomX][randomy];
                        let random = Math.floor(Math.random()*2)+1;
                        if(random==1){
                            obj.getComponent("Star.xxl").playDaijiAni();
                        }else{
                            obj.getComponent("Star.xxl").playZhayanAni();
                        }
                    }else{

                    }
                    
                }  
            }
        }
    }

    //清理界面，显示默认开始动画界面
    clearAndShow(){
        //下一局游戏前，更新玩家钱
        
        this.controller.updateUserInfo(DataManager.UserData.money);
        this.node.runAction(cc.sequence(cc.delayTime(2.5), cc.callFunc(function(){
            this.controller.clearGameResult();
            let count = 0;
            for (let i = 0; i < this.stars.length; i++) {
                for (let j = 0; j < this.stars[i].length; j++) {
                    if(this.stars[i][j]){
                        let delayTime = 0.3;
                        if(j>8){
                            delayTime = 0;
                        }
                        
                        let action0 = []
                        action0[action0.length] = cc.fadeTo(delayTime, 0)
                        action0[action0.length] = cc.callFunc(() => {
                            if(typeof(this.stars[i][j]) != 'undefined'){
                                this.stars[i][j].active = false;  
                            }                                
                        })

                        this.stars[i][j].stopAllActions()
                        this.stars[i][j].runAction(cc.sequence(action0))
                        
                        // this.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function(){
                        //     if(typeof(this.stars[i][j]) != 'undefined'){
                        //         this.stars[i][j].active = false;  
                        //     }                                
                        // },this)));
                    }    
                }
                count++;
            }
            if ((count == this.stars.length)) {
                this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function(){
                    this.clearGrid();
                    this.controller.setRoundTip(true);
                    this.controller.onPlayDefaultAnimation();
                    return;                                                    
                },this)));              
            }
        },this)));
    }

    //直接显示本局获得
    showGainData(){       
        for (let index = 0; index < this.mMatchedTiles.length; index++) {
            let data2D = this.mMatchedTiles[index].data2D;
            let data2DLen = this.mMatchedTiles[index].data2D.length;
            for (let i = 0; i < data2DLen;i++) {
                let data1D = data2D[i].data1D;
                let data1DLen = data2D[i].data1D.length;
                let nValue = data2D[i].nValue; 
                let nCount = data1DLen;
                let nType = data1D[0].nType;
                let nPosX = data1D[0].nPosX;
                let nPosY = data1D[0].nPosY;
                let xPos = CELL_WIDTH*(nPosX+0.5);
                let yPos = CELL_HEIGHT*(nPosY+0.5);
                let pos = cc.v2(xPos, yPos);

                for (let j = 0; j < data1DLen; j++) {
                    let nPosX = data1D[j].nPosX;
                    let nPosY = data1D[j].nPosY;
                    let obj = this.stars[nPosX][nPosY];
                    if(j ==0 ){
                        // cc.log("nType,nCount===",nType,nCount);
                        this.controller.updateGainDataInfo(nType, nCount, 0.5, pos,nValue);
                    }
                }
            }
        }
        this.controller.showGameResult(this.nAwardMoney,this.totalCount);
    }

    //消除
    crush(){
        if(this.nAutoType){
            //跳过动画，直接显示结果
            this.showGainData();
            this.clearAndShow();
            return;
        }
        let index = this.index;
        let finished = cc.callFunc(function(){
            let data2D = this.mMatchedTiles[index].data2D;
            let data2DLen = this.mMatchedTiles[index].data2D.length;

            let delayTime = 0;
            for (let i = 0; i < data2DLen;i++) {
                let data1D = data2D[i].data1D;
                let data1DLen = data2D[i].data1D.length;
                let nValue = data2D[i].nValue;
                let nCount = data1DLen;
                let nType = data1D[0].nType;
                let nPosX = data1D[0].nPosX;
                let nPosY = data1D[0].nPosY;
                let xPos = CELL_WIDTH*(nPosX+0.5);
                let yPos = CELL_HEIGHT*(nPosY+0.5);
                let pos = cc.v2(xPos, yPos);

                for (let j = 0; j < data1DLen; j++) {
                    let nPosX = data1D[j].nPosX;
                    let nPosY = data1D[j].nPosY;
                    let obj = this.stars[nPosX][nPosY];
                    this.mask[nPosX][nPosY] = 1;                     
                    let crushcallback = () => {
                        //消除数量大于等于5个，显示外框
                        if(data1DLen>=5){
                            for (let j = 0; j < data1DLen; j++) {
                                let nPosX = data1D[j].nPosX;
                                let nPosY = data1D[j].nPosY;
                                let obj = this.stars[nPosX][nPosY];
                                obj.getComponent("Star.xxl").setSelect(true);
                            }
                        }
                        if(j ==0 ){
                            // cc.log("nType,nCount===",nType,nCount);
                            this.controller.showBaoJiEffect(nType, nCount, pos,nValue);
                            this.controller.updateGainDataInfo(nType, nCount, 0.5, pos,nValue);
                            GameLogic.Instance().playCrushSound();
                        }
                        obj.getComponent("Star.xxl").playDuangAni();
                        obj.getComponent("Star.xxl").showCrushEffect(true); 
                    }

                    
                    let action0 = []
                    action0[action0.length] = cc.delayTime(delayTime)
                    action0[action0.length] = cc.callFunc(crushcallback)
                    action0[action0.length] = cc.scaleBy(0.5,0,0).easing(cc.easeBackIn())
                    action0[action0.length] = cc.delayTime(0.1)
                    action0[action0.length] = cc.callFunc(() => {
                        obj.getComponent("Star.xxl").hideCrushEffect(false);
                        obj.getComponent("Star.xxl").hideSelect(false);
                    })
                    obj.getChildByName("animalAnchor").getChildByName("animal").runAction(cc.sequence(action0))
                    // obj.getChildByName("animalAnchor").runAction(cc.sequence(action0))
      
                }    
                delayTime += 0.9

                this.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function(){
                    // obj.getComponent("Star.xxl").hideCrushEffect(false);
                    // obj.getComponent("Star.xxl").hideSelect(false);
                },this)));

                if(i == data2DLen-1){
                    this.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function(){
                        this.index++;
                        this.deletMask();
                    },this)));   
                }   
            }
        },this);

        if(index<this.mMatchedTiles.length){
            this.node.runAction(cc.sequence(cc.delayTime(0.4),finished));
        }else{
            this.controller.showGameResult(this.nAwardMoney,this.totalCount);
            this.clearAndShow();
        }
    }

    //删除mask为1的Star
    deletMask(){

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if(this.mask[i][j]==1){                  
                    this.stars[i][j] = null;       
                }               
            }         
        }
        for(let i=0;i<8;i++){
            let count=0;
            let start=0,end;
            let onoff=true;
            for(let j=7;j>=0;j--){
                if(this.mask[i][j]==1){
                    if(onoff){
                        start=j;
                        onoff=false;
                    }
                }
                if((this.mask[i][j-1]!=1||j-1<0)&&onoff==false){
                    end=j;
                    onoff=true;
                }
                this.mask[i][j]=0;
            }
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.02), cc.callFunc(function(){
            this.fillStar();
        },this)));
    }

    //填充算法
    fillStar(){
        GameLogic.Instance().playDropSound();
        let finished=cc.callFunc(function(target){
            // this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function(){
                // console.log("延迟10秒之后再次执行消除匹配算法.........");
            // },this)));     
        },this);

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < this.mBoard[i].data1D.length; j++) {
                if(this.stars[i][j] == null){
                    let curRow = j;
                    for (let k = curRow; k < this.mBoard[i].data1D.length; k++) {                        
                        if(this.stars[i][k]){
                            this.stars[i][curRow] = this.stars[i][k];
                            this.stars[i][k] = null;                           
                            this.stars[i][curRow].getComponent("Star.xxl").init(i, curRow);
                            var x = CELL_WIDTH * (i+0.5);
                            var y = CELL_HEIGHT *(curRow+0.5);
                            let endPos = cc.v2(x,y);
                            
                            let curTile = this.stars[i][curRow]
                            let action0 = []
                            action0[action0.length] = cc.delayTime(0.001 + 0.02*(curRow-j))
                            action0[action0.length] = cc.moveTo(0.35,endPos).easing(cc.easeOut(0.08))//.easing(cc.easeBackIn())
                            action0[action0.length] = cc.callFunc(() => {
                                curTile.getChildByName("animalAnchor").runAction(cc.sequence(cc.scaleTo(0.1, 1, 0.9), cc.scaleTo(0.1, 1, 1)))
                            })

                            this.stars[i][curRow].stopAllActions()
                            this.stars[i][curRow].runAction(cc.sequence(action0))

                            curRow++;
                        }
                    }

                    let count = 1;
                    //自动补充算法
                    // for (let k = curRow; k < 8; k++) {
                        // console.log("总共生成了几个j,k？===",j,k);                      
                        // var ele=cc.instantiate(this.star);

                        // var x = CELL_WIDTH * (j+0.5);
                        // var y = CELL_HEIGHT *(k+0.5);
                        // var yy = CELL_HEIGHT *(j+8+0.5);
                        // ele.setPosition(x,yy);
                        // this.node.addChild(ele,0,"ele");
                        // var com=ele.getComponent('Star.xxl');
                        // let type = Math.floor(Math.random()*5);
                        // com.setType(type);
                        // com.init(k, j);
                        // this.stars.push(ele);
                        // this.stars[k][j] = ele;
                        // this.mask[k][j] = 0;
                        // let endPos = cc.v2(x,y)
                        // var act=cc.sequence(cc.moveTo(1,endPos),finished);
                        // this.stars[k][j].runAction(act)
                        // com.pos=cc.v2(j,k);
                        // count++;                       
                    // }
                }      
            }           
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function(){
            this.playSpineAni();
            this.crush();
        },this)));
    }
    //匹配算法
    checkConnectedAll(newX, newY){
        if(this.stars[newX][newY]== null || this.stars[newX][newY]=='undefined'){
            return null;
        }
        let matchRowCats = [];
        let matchLineCats = [];
        let matchFinishCats = [];
               
        let model = this.stars[newX][newY];
        let type = model.getComponent("Star.xxl").sfIndex;

        matchRowCats.push(model);
        //0表示往左遍历，1表示往右遍历
        for (let i = 0; i <=1; i++) {
            for (let xDistance = 1; xDistance < 8; xDistance++) {
                let x;
                if(i==0){
                    x = newX - xDistance;
                }
                else{
                    x = newX + xDistance;
                }
                if(x<0 || x>=8){
                    break;
                }
                if(this.stars[x][newY] && this.stars[x][newY].getComponent("Star.xxl").sfIndex == type){
                    matchRowCats.push(this.stars[x][newY]);
                }
                else{
                    break;
                }
            }  
        }
        //行匹配结束后，把行匹配列表中元素添加到完成列表中（然后在继续L T型匹配）
        if(matchRowCats.length>=3){
            // console.log("行结束后length===",matchRowCats.length);
            for (let i = 0; i < matchRowCats.length; i++) {
                matchFinishCats.push(matchRowCats[i]);
                
            }
        }

        //L T型匹配
        //检查行遍历列表中元素个数是否大于等于3
       if(matchRowCats.length>=3){
            for (let i = 0; i < matchRowCats.length; i++) {
                //行匹配列表中满足匹配条件的每个元素，上下依次进列遍历
                //0代表上方，1代表下方
                for (let j = 0; j <=1; j++) {
                    for (let yDistance = 1; yDistance < 8; yDistance++) {
                        let y;
                        if(j==0){
                            y = newY - yDistance;
                        }else{
                            y = newY + yDistance;
                        }
                        if(y<0 || y>=8){
                            break;
                        }
                        let tempX = matchRowCats[i].getComponent("Star.xxl").x;
                        // console.log("tempX=========",tempX);
                        if(this.stars[tempX][y] && this.stars[tempX][y].getComponent("Star.xxl").sfIndex == type){
                            matchLineCats.push(this.stars[tempX][y]);
                        }else{
                            break;
                        }     
                    }     
                }
                if(matchLineCats.length<2){
                    //清空列的列表
                    matchLineCats.splice(0, matchLineCats.length);
                }else
                {
                    // console.log("列结束后length===",matchLineCats.length);
                    for (let j = 0; j < matchLineCats.length; j++) {
                        matchFinishCats.push(matchLineCats[j]);      
                    }
                    break;
                }
            }
        }
        
        if(matchFinishCats.length>=3){
            // console.log("最终的length===",matchFinishCats.length);
            return matchFinishCats;
        }
        //行匹配结束
        matchRowCats.splice(0,matchRowCats.length);
        matchLineCats.splice(0,matchLineCats.length);

        //=============================分割线========================================
        //列匹配开始
        matchLineCats.push(model);
        //0表示往上遍历，1表示往下遍历
        for (let i = 0; i <=1; i++) {
            for (let yDistance = 1; yDistance < 8; yDistance++) {
                let y;
                if(i==0){
                    y = newY + yDistance;
                }
                else{
                    y = newY - yDistance;
                }
                if(y<0 || y>=8){
                    break;
                }
                if(this.stars[newX][y] && this.stars[newX][y].getComponent("Star.xxl").sfIndex == type){
                    matchLineCats.push(this.stars[newX][y])
                }
                else{
                    break;
                }  
            }     
        }
        //列匹配结束后，把列匹配列表中元素添加到完成列表中（然后在继续L T型匹配）
        if(matchLineCats.length>=3){
            for (let i = 0; i < matchLineCats.length; i++) {
                matchFinishCats.push(matchLineCats[i]);            
            }
        }
        //L T型匹配
        //检查行遍历列表中元素个数是否大于等于3
        if(matchLineCats.length>=3){
            for (let i = 0; i < matchLineCats.length; i++) {
                //行匹配列表中满足匹配条件的每个元素，上下依次进列遍历
                //0代表往左，1代表往右
                for (let j = 0; j <= 1; j++) {
                    for (let xDistance = 1; xDistance < 8; xDistance++) {
                        let x;
                        if(j==0){
                            x = newX - xDistance;
                        }
                        else{
                            x = newX + xDistance;
                        }
                        if(x<0 || x>=8){
                            break;
                        }
                        let tempY = matchLineCats[i].getComponent("Star.xxl").y;
                        // console.log("tempY===",tempY);
                        if(this.stars[x][tempY] && this.stars[x][tempY].getComponent("Star.xxl").sfIndex == type){
                            matchRowCats.push(this.stars[x][tempY]);
                        }
                        else{
                            break;
                        }  
                    }         
                }
                if(matchRowCats.length<2){
                    matchRowCats.splice(0,matchRowCats.length);
                }
                else{
                    for (let j = 0; j < matchRowCats.length; j++) {
                        matchFinishCats.push(matchRowCats[j]);
                    }
                    break;
                }
            }
        }

        if(matchFinishCats.length>=3){
            return matchFinishCats;
        }
        //列匹配结束
        return null;
    }
    
    //下一局开始前清理
    clearGrid(){        
        // for (let i = 0; i < this.stars.length; i++) {
        //     for (let j = 0; j < this.stars[i].length; j++) {
        //         if(this.stars[i][j]){
        //             this.prefab_starPool.put(this.stars[i][j])
        //         }
        //     }
        // }
        
        for (let i = this.node.children.length - 1; i >= 0; --i) {
            let ele = this.node.children[i];
            ele.stopAllActions();
            ele.opacity = 255;
            ele.active = true;
            this.prefab_starPool.put(ele)
            
        }
    }

}
