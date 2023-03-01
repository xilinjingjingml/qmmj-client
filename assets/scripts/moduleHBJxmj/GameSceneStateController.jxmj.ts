var StateMachine = require("../base/extensions/StateMachine/state-machine.min");

import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSceneStateController extends BaseComponent {

    __preloadAfter() {
        this._fsm(); //  <-- IMPORTANT
    }
    
    stepState() {
        console.log("stepState:" + this.state);
        switch(this.state) {
            case 'none':
                this.doStateChangeInit();
                break;
            case 'init':
            case 'reInit':
                this.doStateChangeStartGame();
                break;
            case 'startGame':
                this.doStateChangeEndGame();
                break;
            case 'endGame':
                this.doStateChangeReInit();
                break;
        }
    }

    isGameStart() {
        switch(this.state) {
            case 'startGame':
                return true;
                break;
        }
        return false;
    }


}

StateMachine.factory(GameSceneStateController, {
    transitions: [
        { name: 'doStateChangeInit',            from: 'none',                           to: 'init' },
        { name: 'doStateChangeStartGame',       from: ['none', 'init', 'reInit', 'startGame', 'endGame'],  to: 'startGame' }, //断线重连会收到两次complete_data
        { name: 'doStateChangeEndGame',         from: 'startGame',                      to: 'endGame' },
        { name: 'doStateChangeReInit',          from: 'endGame',                        to: 'reInit' },
    ],
    methods: {
      onInvalidTransition: function(transition, from, to) {
        throw new Error("transition not allowed do [" + transition + "] + from [" + from + "] to [" + to + "]");
      }
    },
    stateName: [
        {enName: 'init',            zhName: '初始化'},
        {enName: 'startGame',       zhName: '开局'},
        {enName: 'endGame',         zhName: '游戏结束'},
        {enName: 'reInit',          zhName: '销毁'},
    ]
    
})

