import BaseComponent from "../base/BaseComponent";
import DataManager from "../base/baseData/DataManager";

let GLOBAL = require("Define.zhuoqiu");
let BtnSelect = require("BtnSelect.zhuoqiu");
let Event = require("Event.zhuoqiu");

cc.Class({
    extends: BaseComponent,

    properties: {
        btnAdd: cc.Button,
        btnMore: cc.Button,
        txtCoin: cc.Label,
        showBase: cc.Node,
        btnSelect: cc.Node,
        NodePlay: cc.Node,
        btnBack: cc.Button,
        labelCoin: cc.Node,
        jackPotNode: cc.Node,
        lockMask: cc.Node,
        NodeLamp: cc.Node
    },

    onLoad () {
        this.btnAdd.node.on("click", this.onPressAdd, this);
        Event.on(GLOBAL.EventName.Event_Update_UserInfo, this.updateUserInfo, this);
        Event.on(GLOBAL.EventName.SocketPlayFee, this.calcFee, this);
    },

    onPressAdd() {
        Event.emit(GLOBAL.EventName.EventShowShop);
    },

    onPressMore() {
        this.onBtnMore();
    },

    onBtnMore() {

    },

    disableSelect() {
        this.btnSelect.getComponent(BtnSelect).disableTouchAfterBetting();
    },

    enableSelect() {
        this.btnSelect.getComponent(BtnSelect).enableTouchAfterResult();
    },

    updateUserInfo() {
        this.txtCoin.string = DataManager.UserData.money;
    },

    calcFee() {
        this.txtCoin.string = DataManager.UserData.money - GLOBAL.Bet;
    },

    onDestroy() {
        Event.offTarget(this);
    }
});
