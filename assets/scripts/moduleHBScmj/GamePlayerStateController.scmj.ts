
var StateMachine = require("../base/extensions/StateMachine/state-machine.min");

import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePlayerStateController extends BaseComponent {

    __preloadAfter() {
        this._fsm(); //  <-- IMPORTANT
    }
    
    stepState() {
        console.log("stepState:" + this.state);
        switch(this.state) {
            case 'none':
            case 'leave':
            case 'endGame':
                this.doStateChangeStay();
                break;
            case 'stay':
                this.doStateChangeReady();
                break;
            case 'ready':
                this.doStateChangeStartGame();
                break;                
            case 'startGame':
                this.doStateChangeEndGame();
                break;
        }
    }

}

StateMachine.factory(GamePlayerStateController, {
    transitions: [
        { name: 'doStateChangeStay',           from: ['none', 'leave', 'endGame', 'stay', 'ready'],     to: 'stay' },
        { name: 'doStateChangeReady',          from: ['stay', 'ready', 'endGame'],                      to: 'ready' },      //因为目前游戏都是先加入一张假桌子，所以允许ready->ready
        { name: 'doStateChangeStartGame',      from: ['stay', 'ready',],                                to: 'startGame' },
        { name: 'doStateChangeEndGame',        from: ['startGame', 'wait'],                             to: 'endGame' },
        { name: 'doStateChangeLeave',          from: ['none', 'stay', 'ready'],                         to: 'leave' },
    ],
    methods: {
      onInvalidTransition: function(transition, from, to) {
        throw new Error("transition not allowed do [" + transition + "] + from [" + from + "] to [" + to + "]");
      }
    },
    stateName: [
        {enName: 'stay',             zhName: '在桌上什么都不干'},
        {enName: 'ready',            zhName: '准备'},
        {enName: 'startGame',        zhName: '开局'},
        {enName: 'endGame',          zhName: '游戏结束'},
        {enName: 'leave',            zhName: '离桌'},
    ]
    
})
