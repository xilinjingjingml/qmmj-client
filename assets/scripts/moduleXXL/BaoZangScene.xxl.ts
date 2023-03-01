import BaseScene from "../base/baseScene/BaseScene";
import DataManager from "../base/baseData/DataManager";
import GameLogic from "./GameLogic.xxl";
import SceneManager from "../base/baseScene/SceneManager";
import BaseFunc = require("../base/BaseFunc");
import { getMD5 } from "../base/BaseFuncTs";
import ChangeNum from "./ChangeNum.xxl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaoZangScene extends BaseScene {

    @property(ChangeNum)
	changNum:ChangeNum = null;
    
    onOpenScene() {
        this.changNum = new ChangeNum();
        this.loadRecrod()
    }

    onCloseScene() {
        this.changNum.removeSchedule();
    }

    loadRecrod(){
        this.loadGameRankData();
    }

    onOpenBaoZangDetailScene(){
        this.closeSelf();
        GameLogic.Instance().playBtnSound();
        SceneManager.Instance.popScene("moduleXXLRes", "BaoZangDetailScene");
    }

    proto_gc_super_award_not(event){
        let message = event.packet;
        let nRet = message.nRet;
        let nValue = message.nValue;
        let closeBaoZang = cc.find("nodeTop/titleBg/closeBaoZang",this.node);
        let openBaoZang = cc.find("nodeTop/titleBg/openBaoZang",this.node);
        let baoZangLabel = cc.find("nodeTop/titleBg/baoZangLabel",this.node);
        let value = Number(baoZangLabel.getComponent(cc.Label).string);
        if(GameLogic.Instance().lock){
            if(closeBaoZang.active){
                closeBaoZang.getComponent(cc.Animation).play();
            }
            if(openBaoZang.active){
                openBaoZang.getComponent(cc.Animation).play();
            }
            return;
        }
        if(nRet == 0){
            //宝藏未开启
            if(value == 0){
                baoZangLabel.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(baoZangLabel,nValue);
            }

            closeBaoZang.active = true;
            openBaoZang.active = false;
            closeBaoZang.getComponent(cc.Animation).play();
        }
        else if(nRet == 1){
            //宝藏开启
            if(value == 0){
                baoZangLabel.getComponent(cc.Label).string = ""+nValue;
            }
            else{
                this.changNum.change(baoZangLabel,nValue);
            }
            closeBaoZang.active = false;
            openBaoZang.active = true;
            openBaoZang.getComponent(cc.Animation).play();
        }
        else if(nRet == 3){
            GameLogic.Instance().lock = true;
        }
        else if(nRet == 4){
            
        }  
        
    }
    
    loadGameRankData() {
        let param = {
            uid: DataManager.UserData.guid,
            ticket: DataManager.UserData.ticket,
            gameid: 393,
            sign: getMD5('uid=' + DataManager.UserData.guid + '&ticket=' + DataManager.UserData.ticket + '&gameid=393&SignKey=6f0f5f574da85c4898586232d7acce16')
        }

        BaseFunc.HTTPGetRequest(DataManager.getURL("LOAD_GAMERANK_SUPERAWARD"), param, (res) => {

            if (res && res.list && res.list.length > 0) {
                let list = res.list;
                this.setRankData(list);
            }else{
                let item = cc.find("nodeCenter/scrollView/view/item",this.node);
                let noRecordTip = cc.find("nodeCenter/noRecordTip",this.node);
                item.active = false;
                noRecordTip.active = true;
            }  
        })
    }

    setRankData(list){
        let rankList = list;

        let content = cc.find("nodeCenter/scrollView/view/content",this.node);
        let item = cc.find("nodeCenter/scrollView/view/item",this.node);
        let noRecordTip = cc.find("nodeCenter/noRecordTip",this.node);
        item.active = false;
        noRecordTip.active = false;

        content.children.forEach((item)=> {
            item.destroy()
        })

        for (let i = 0; i < rankList.length; i++) {
            
            let nickname = rankList[i].nickname;
            let winMoney = Math.abs(rankList[i].winMoney);
            let faceurl = rankList[i].faceurl;
            let winTime = rankList[i].winTime;
            let newItem = cc.instantiate(item)
            newItem.parent = content
            newItem.active = true;
            let playerIcon = cc.find("playerBg/playerBg2/playerMask/playerIcon", newItem);
            let playerName = cc.find("playerName", newItem);
            let money = cc.find("itemMoneyBg/money", newItem);
            let timeLabel = cc.find("timeLabel", newItem);
        
            playerName.getComponent(cc.Label).string = nickname;
            money.getComponent(cc.Label).string = ""+winMoney;
            timeLabel.getComponent(cc.Label).string = ""+BaseFunc.TimeFormat('yyyy-mm-dd HH:MM:SS',winTime);
            BaseFunc.SetFrameTextureNet(playerIcon.getComponent(cc.Sprite), faceurl, () => {

            })
        }
    }

}
