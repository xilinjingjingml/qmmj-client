

import BaseFunc = require("../base/BaseFunc")
import DataManager from "../base/baseData/DataManager";
import { getMD5 } from "../base/BaseFuncTs";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankScene extends cc.Component {

    
    start () {

        this.loadGameRankData();
    }

    loadGameRankData() {
        let param = {
            uid: DataManager.UserData.guid,
            ticket: DataManager.UserData.ticket,
            gameid: 393,
            sign: getMD5('uid=' + DataManager.UserData.guid + '&ticket=' + DataManager.UserData.ticket + '&gameid=393&SignKey=6f0f5f574da85c4898586232d7acce16')
        }

        BaseFunc.HTTPGetRequest(DataManager.getURL("LOAD_GAMERANK_WINMONEY"), param, (res) => {

            if (res && res.list && res.list.length > 0) {
                let list = res.list;
                this.setRankData(list);
            }else{
                let item = cc.find("nodeCenter/scrollView/view/content/item",this.node);
                let noRecordTip = cc.find("nodeCenter/noRecordTip",this.node);
                item.active = false;
                noRecordTip.active = true;
            }  
        })
    }

    setRankData(list){
        let rankList = list;

        let content = cc.find("nodeCenter/scrollView/view/content",this.node);
        let item = cc.find("nodeCenter/scrollView/view/content/item",this.node);
        let noRecordTip = cc.find("nodeCenter/noRecordTip",this.node);
        //底部信息
        let myRank = cc.find("nodeBottom/myRankTip/myRank",this.node);
        let myGainMoney = cc.find("nodeBottom/myGainMoneyTip/myGainMoney",this.node);

        item.active = false;
        noRecordTip.active = false;
        let myUid =  DataManager.UserData.guid;
        
        for (let i = 0; i < rankList.length; i++) {
            
            let uid = rankList[i].uid;
            let nickname = rankList[i].nickname;
            let winMoney = rankList[i].winMoney;
            let faceurl = rankList[i].faceurl;
            
            let newItem = cc.instantiate(item)
            newItem.parent = content
            newItem.active = true;
            let rankLvImage1 = cc.find("rankLvImage1", newItem);
            let rankLvImage2 = cc.find("rankLvImage2", newItem);
            let rankLvImage3 = cc.find("rankLvImage3", newItem);
            let rankLv = cc.find("rankLv", newItem);
            let playerIcon = cc.find("playerBg/playerBg2/playerMask/playerIcon", newItem);
            let playerName = cc.find("playerName", newItem);
            let money = cc.find("itemMoneyBg/money", newItem);
            let rankId = i+1;
            if(rankId == 1){
                rankLvImage1.active = true;
                rankLvImage2.active = false;
                rankLvImage3.active = false;
                rankLv.getComponent(cc.Label).string="";
            }
            else if(rankId == 2){
                rankLvImage1.active = false;
                rankLvImage2.active = true;
                rankLvImage3.active = false;
                rankLv.getComponent(cc.Label).string="";
            }
            else if(rankId == 3){
                rankLvImage1.active = false;
                rankLvImage2.active = false;
                rankLvImage3.active = true;
                rankLv.getComponent(cc.Label).string="";
            }
            else{
                rankLvImage1.active = false;
                rankLvImage2.active = false;
                rankLvImage3.active = false;
                rankLv.getComponent(cc.Label).string=rankId.toString();
            }

            playerName.getComponent(cc.Label).string = nickname;
            money.getComponent(cc.Label).string = winMoney;
            BaseFunc.SetFrameTextureNet(playerIcon.getComponent(cc.Sprite), faceurl, () => {

            })
        }

        //底部信息显示
        for (let i = 0; i < rankList.length; i++) {
            let uid = rankList[i].uid;
            let rankId = i+1;
            if(Number(uid) == Number(myUid)){
                myRank.getComponent(cc.Label).string = rankId.toString();
                break;
            }
            else{
                myRank.getComponent(cc.Label).string = "未上榜";
            }
        }

    }

}
