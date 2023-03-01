import DataManager from "../base/baseData/DataManager";
import BaseScene from "../base/baseScene/BaseScene";
import BaseFunc from "../base/BaseFunc";

cc.Class({
    extends: BaseScene,

    properties: {
        nodeTopInfo: cc.Node,
        nodeGuiZe: cc.Node,
        scrollViewItem: cc.Node,
        scrollViewContent: cc.Node,

        titleLabel: cc.Label,
        midleLabel: cc.Label,
    },

    onLoad () {
        this.nodeTopInfo.active = true;
        this.nodeGuiZe.active = false;

        this.gamePlayerAvatarUrl = [];
        this.gamePlayerNickName = [];
    },

    start () {
        console.log("JpInfo start");

        this.top5InfoList = this.initParam.dataSource;
        this.jp_max_num = this.initParam.jp_max_num;

        let titleStr = cc.js.formatStr('”%d万奖池，一杆即发“', this.jp_max_num);
        let midStr = cc.js.formatStr('当%d万奖池开启时，只要您达成以下条件就有机会击中%d万大奖，最高100%击中。', this.jp_max_num, this.jp_max_num);
        this.titleLabel.string = titleStr;
        this.midleLabel.string = midStr;

        let item = this.scrollViewItem;
        let content = this.scrollViewContent;

        for (let i = 0; i < this.top5InfoList.length; i++) {
            let newItem = cc.instantiate(item);
            newItem.parent = content;
            newItem.active = true;

            let plyIconObj = cc.find("leftNode/MaskHeadIcon/New Sprite", newItem);
            let plyNameObj = cc.find("middleNode/New Label", newItem);
            let pickTimeObj = cc.find("rightNode/New Label", newItem);

            let dataItem = this.top5InfoList[i];
            let pid = dataItem.pid;
            let bonus = dataItem.bonus;
            let pickTime = this.formatDateTime(Number(dataItem.pickTime));

            //加载玩家图像
            this.setAvatarIconByUid(plyIconObj,pid);

            //显示玩家昵称--"就是中文七个字"
            this.setNickNameByUid(plyNameObj,pid);

            //显示玩家领取时间--"2019-10-10 17:09:59"
            pickTimeObj.getComponent(cc.Label).string = pickTime;
        }
    },

    formatDateTime (timeStamp) {
        var date = new Date();
        date.setTime(timeStamp * 1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },

    setAvatarIconByUid(avatarSprite, uid) {
        let url = DataManager.getURL("USERBATCH");
        if(this.gamePlayerAvatarUrl[uid]){
            BaseFunc.SetFrameTextureNet(avatarSprite.getComponent(cc.Sprite), this.gamePlayerAvatarUrl[uid], () => {

            })
        }else{
            BaseFunc.HTTPGetRequest(url, {
                uids: uid
            }, (event) => {
                if (event && event.list && event.list.length > 0) {
                    this.gamePlayerAvatarUrl[uid] = event.list[0].face;
                    this.gamePlayerNickName[uid] = event.list[0].nickname;
                    BaseFunc.SetFrameTextureNet(avatarSprite.getComponent(cc.Sprite), event.list[0].face, () => {

                    })
                }
            })
        }
    },

    setNickNameByUid(plyNameObj, uid) {
        let url = DataManager.getURL("USERBATCH");
        if(this.gamePlayerNickName[uid]){
            plyNameObj.getComponent(cc.Label).string = this.gamePlayerNickName[uid];
        }else{
            BaseFunc.HTTPGetRequest(url, {
                uids: uid
            }, (event) => {
                if (event && event.list && event.list.length > 0) {
                    this.gamePlayerAvatarUrl[uid] = event.list[0].face;
                    this.gamePlayerNickName[uid] = event.list[0].nickname;

                    plyNameObj.getComponent(cc.Label).string = this.gamePlayerNickName[uid];
                }
            })
        }
    },

    // update (dt) {},

    onPressDescription(){
        this.nodeTopInfo.active = false;
        this.nodeGuiZe.active = true;
    },

    onPressCloseDescription(){
        this.nodeTopInfo.active = true;
        this.nodeGuiZe.active = false;
    },
});
