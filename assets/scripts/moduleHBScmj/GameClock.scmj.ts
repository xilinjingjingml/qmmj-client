import BaseFunc = require("../base/BaseFunc")
import GameLogic from "./GameLogic.scmj"
import BaseComponent from "../base/BaseComponent"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameClock extends BaseComponent {

    start() {
        this.init()
    }

    init() {
        // 屏幕适配
        // this.node.scale = Math.min(cc.winSize.height / cc.view.getDesignResolutionSize().height, 1)
        // this.node.y = 55

        for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
            this['temp_node_pos' + i] = this['node_pos' + i]
            this['temp_player' + (i + 1) + '_hl'] = this['player' + (i + 1) + '_hl']
        }

        this.resetDir()
        this.unscheduleClientTimer()
    }

    resetDir() {
        // let chairId = GameLogic.Instance().gamescene.myPlayer.getPlyData().chair_id_
        // if (chairId == null) {
        //     return
        // }

        // chairId = GameLogic.Instance().gamescene.C2C(chairId)
        // if (chairId == 0) {
        //     GameLogic.Instance().setSpirteFrameLocal(this.spt_di, 'images/Clock/game_direction_0')
        // } else if (chairId == 1) {
        //     GameLogic.Instance().setSpirteFrameLocal(this.spt_di, 'images/Clock/game_direction_3')
        // } else if (chairId == 2) {
        //     GameLogic.Instance().setSpirteFrameLocal(this.spt_di, 'images/Clock/game_direction_2')
        // } else if (chairId == 3) {
        //     GameLogic.Instance().setSpirteFrameLocal(this.spt_di, 'images/Clock/game_direction_1')
        // }

        // for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
        //     let id = (chairId + i) % GameLogic.Instance().MAX_SEAT_NUM
        //     GameLogic.Instance().setSpirteFrameLocal(this['player' + (i + 1) + '_hl'], 'images/Clock/game_direction_' + id + '_' + i)
        // }
    }

    startClientTimer(second, chairid, showDir) {
        cc.log("startClientTimer", second, chairid, showDir)
        this.unscheduleClientTimer()
        if (second <= 0) {
            return
        }

        this.second = second
        this.chairId = chairid
        this.node.active = true

        if (showDir && chairid >= 0) {
            for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
                if (i == chairid) {
                    this['node_pos' + i].active = true
                    this['player' + (i + 1) + '_hl'].runAction(cc.repeatForever(cc.sequence(
                        cc.fadeIn(0.5),
                        cc.fadeOut(0.5),
                    )))
                }
            }
        }

        this.scheduleRepeat(1, this.onClientTimer.bind(this))
    }

    scheduleRepeat(delay, callback, reverse?) {
        let actions = [
            cc.callFunc(callback),
            cc.delayTime(delay),
        ]
        reverse == false && actions.reverse()

        this.node.stopAllActions()
        this.node.runAction(cc.repeatForever(cc.sequence(actions)))
    }

    onClientTimer() {
        if (this.chairId == 0 && this.second <= 5) {
            GameLogic.Instance().playSound('audio_clock')
        }

        this.lbl_clocktick.getComponent(cc.Label).string = (this.second < 10 ? '0' : '') + this.second
        this.second--

        if (this.second < 0) {
            this.unscheduleClientTimer()
        }
    }

    unscheduleClientTimer() {
        this.node.stopAllActions()
        this.lbl_clocktick.getComponent(cc.Label).string = '00';
        for (let i = 0; i < GameLogic.Instance().MAX_SEAT_NUM; i++) {
            this['node_pos' + i].active = false
            this['player' + (i + 1) + '_hl'].stopAllActions()
        }
    }
}