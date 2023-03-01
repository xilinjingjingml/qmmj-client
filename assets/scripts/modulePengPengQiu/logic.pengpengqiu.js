
let GLOBAL = require('global.pengpengqiu');
let Event = require('event.pengpengqiu');
let Level = require('level.pengpengqiu');
let Rocket = require('rocket.pengpengqiu');
let Menu = require('menu.pengpengqiu');
let Ball = require('ball.pengpengqiu');

cc.Class({
    extends: cc.Component,

    properties: {
        mLevels: [cc.Prefab],
        mRocketPrefab: cc.Prefab,
        mArrow: cc.Sprite,
        mRocketNode: cc.Node,
        mLaunch: cc.Node,
        mPowerProgress:cc.ProgressBar,
        mBetLabel: cc.Label,
        mParticle: cc.Prefab,
        mStarParticle:cc.Prefab,

        mWallNode: cc.Node,
        
        mDengAniNode:cc.Node,
        mDengNoAniNode:cc.Node,

        mMenu: Menu,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.mInited = false;
        GLOBAL.Logic = this;
        this.mLastPos = null;
        this.mCountdown = 0;
        this.frameCount = 0;

        this.mRocket = null;
        this.mLevelList = [];
        this.mCurrentLevelIndex = 0;

        this.mTotalValue = 0;

        this.mRate1 = 0;
        this.mRate2 = 0;

        this.isPlayingBossAnimation = false;
        this.isPlayingBigWinAnimation = false

        this.mParticlenode = this.node.getChildByName('particlenode');

        Event.on(GLOBAL.EventName.onOneShot, this.onOneShot, this);
        Event.on(GLOBAL.EventName.logicReset, this.loginReset, this);

        Event.on(GLOBAL.EventName.resetLaunch, this.reset, this);
        Event.on(GLOBAL.EventName.SocketPlayRocket, this.startShot, this);
        Event.on(GLOBAL.EventName.PreLevel, this.onChoosePre, this);
        Event.on(GLOBAL.EventName.NextLevel, this.onChooseNext, this);

        Event.on(GLOBAL.EventName.LevelData, this.init, this);
    },

    start () {
        this.gameState = false;
    },

    init() {
        if (this.mInited)
            return;

        this.mInited = true;

        this.initRocket();
        this.initLevels();
        this.reset();
    },

    loginReset() {
        this.reset();
    },

    analysePath() {
        if (GLOBAL.ManualLine.length > 0) {
            GLOBAL.AutoLine = false;
            let idx = 0;
            let line = GLOBAL.ManualLine;
            let arr = [];
            let ballList = [];

            for (let i of line) {
                let idx = i[0],
                    degree = i[1];
                let ball = this.getCurrentLevel().getBallByUIIndex(idx-1);
                if (ball) {
                    let radius = ball.mRadius;
                    let pos = ball.node.parent.position;
                    degree = Math.PI / 180 * degree;
                    pos = cc.v2(pos.x+Math.cos(degree)*radius, pos.y+Math.sin(degree)*radius);
                    arr.push(pos);
                    ballList.push(ball);
                }
            }

            this.mLastPos = null;
            this.mManualPath = arr;
            this.mManualBallList = ballList;
            this.mManualPathIndex = 0;
        } else {
            GLOBAL.AutoLine = true;
        }
    },

    startShot() {
        GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.gameStart);
        this.mLaunch.active = false;
        this.analysePath();
        this.startCountdown();
        let x,y;
        if (GLOBAL.AutoLine) {
            let r = GLOBAL.Angle;
            let a = Math.abs(r) * Math.PI / 180;
            x = GLOBAL.Speed * Math.sin(a);
            y = GLOBAL.Speed * Math.cos(a);
            this.mRocket.emit(r > 0 ? -x:x, y);
        } else {
            let firstpos = this.mManualPath[this.mManualPathIndex];
            let rpos = this.mRocket.node.position;
            let pos = cc.v2(firstpos.x-rpos.x, firstpos.y-rpos.y);
            let a = Math.atan2(pos.y, pos.x);
            let degree = Number((a * 180 / Math.PI).toFixed(6));
            cc.log('manual angle', degree-90);
            x = GLOBAL.Speed * Math.cos(a);
            y = GLOBAL.Speed * Math.sin(a);
            this.mRocket.emit(x, y);
        }
    },

    updateRocket() {
        if (this.mManualPathIndex >= this.mManualPath.length) {
            GLOBAL.AutoLine = true;
            return false;
        }

        let firstpos = this.mManualPath[this.mManualPathIndex];
        let rpos = this.mRocket.node.position;
        let pos = cc.v2(firstpos.x-rpos.x, firstpos.y-rpos.y);
        let a = Math.atan2(pos.y, pos.x);
        let degree = Number((a * 180 / Math.PI).toFixed(6));
        let x = GLOBAL.Speed * Math.cos(a);
        let y = GLOBAL.Speed * Math.sin(a);
        this.mRocket.emit(x, y);

        GLOBAL.AutoLine = false;
        return true;
    },

    onOneShot(e) {
        if (CC_DEBUG) {
            GLOBAL.IsTesting = false;
            if (GLOBAL.AutoPath) {

            } else {
                if (this.mMenu.mDebugAngle.string) {
                    GLOBAL.Angle = Number(this.mMenu.mDebugAngle.string);
                    GLOBAL.IsTesting = true;
                } else {
                    GLOBAL.Angle = this.mArrow.node.angle;
                }

                if (this.mMenu.mDebugSpeed.string) {
                    GLOBAL.Speed = Number(this.mMenu.mDebugSpeed.string);
                    GLOBAL.IsTesting = true;
                } else {
                    GLOBAL.Speed = 6;
                }

                if (this.mMenu.mDebugPath.string) {
                    GLOBAL.IsTesting = true;
                    let str = this.mMenu.mDebugPath.string;
                    let path = str.split('|');
                    GLOBAL.ManualLine.length = 0;
                    for (let i of path) {
                        let j = i.split('=');
                        GLOBAL.ManualLine.push([Number(j[0]), Number(j[1])]);
                    }
                } else {
                    GLOBAL.ManualLine.length = 0;
                }
            }

            GLOBAL.Bet = Number(GLOBAL.BetList[GLOBAL.CurrentLevelIndex]['bet']);
            this.mArrow.node.stopAllActions();

            if (GLOBAL.IsCollectData) {
                GLOBAL.Angle = Math.random() * 70 * (Math.random()>0.5?1:-1);
            }

            Event.emit(GLOBAL.EventName.SocketPlayReq, GLOBAL.Bet, Number(GLOBAL.Angle));
        } else {
            let angle = this.mArrow.node.angle;
            GLOBAL.Bet = Number(GLOBAL.BetList[GLOBAL.CurrentLevelIndex]['bet']);
            this.mArrow.node.stopAllActions();
            Event.emit(GLOBAL.EventName.SocketPlayReq, GLOBAL.Bet, Number(angle));
        }
    },

    resetCountdown() {
        this.mPowerProgress.progress = 1;
        this.gameState = false;
    },

    initRocket() {
        if (this.mRocketPrefab && this.mRocketNode) {
            let inst = cc.instantiate(this.mRocketPrefab);
            this.mRocketNode.addChild(inst);
            this.mRocket = inst.getComponent(Rocket);
            this.mRocket.setGameScene(this);
            this.mRocket.init();
            this.mRocket.setFrameAni(true);
        }
    },

    initLevels() {
        if (this.mLevels) {
            let parent = this.node.getChildByName('levels');
            let i = 0;

            GLOBAL.BetList.forEach((data)=> {
                let bet = data['bet'];
                let level = data['level'];
                let prefab = null;
                for (let i=0,j=this.mLevels.length;i<j;i++) {
                    let p = this.mLevels[i];
                    if (p.name === 'level' + level) {
                        prefab = p;
                        break;
                    }
                }
                if (prefab) {
                    let inst = cc.instantiate(prefab);
                    parent.addChild(inst);
                    inst.position = cc.v2(0, 0);
                    let lvl = inst.getComponent(Level);
                    if (lvl) {
                        lvl.init(this, GLOBAL.BetList[this.mCurrentLevelIndex]['bet'], i++);
                        this.mLevelList.push(lvl);
                    }
                }
            });

            this.mLevelList.forEach((level)=>{
                level.node.active = false;
            });
            if (this.mLevelList.length > 0) {
                this.mCurrentLevelIndex = this.mCurrentLevelIndex % this.mLevelList.length;
                this.mLevelList[this.mCurrentLevelIndex].node.active = true;
                this.setBet();
            }
        }
    },

    reset() {
        if (CC_DEBUG) {
            cc.log("gamescene reset");
            GLOBAL.Boom = false;
        }
        this.mLaunch.active = true;
        this.mRocket.reset();
        this.resetLaunch();
        this.resetLevel();
        this.resetCountdown();
        this.resetDeng();
        if (CC_DEBUG) {
            this.collideresult = this.collideresult || {smallBall:0,smallBallBoom:0,midPurpleBall:0,bigYellowBall:0,midYellowBall:0,bigPurpleBall:0};
            this.collideresult.smallBall = this.collideresult.smallBallBoom = this.collideresult.midPurpleBall = this.collideresult.bigYellowBall = this.collideresult.midYellowBall = this.collideresult.bigPurpleBall = 0;
            if (GLOBAL.IsCollectData) {
                Event.emit(GLOBAL.EventName.onOneShot);
            }
        }
    },

    resetDeng(){
        this.mDengNoAniNode.active = true;
        this.mDengAniNode.active = false;
    },
    playDengAni(){
        this.mDengNoAniNode.active = false;
        this.mDengAniNode.active = true;
        this.scheduleOnce(function() {
            this.resetDeng();
        }, 3.5);
    },

    resetLevel() {
        this.mLevelList.forEach((level)=>{
            level.reset();
        });
    },

    resetLaunch() {
        this.mArrow.node.stopAllActions();
        this.mArrow.node.angle = 0;
        this.mArrow.node.runAction(cc.sequence(cc.rotateTo(0.5, -70), cc.callFunc(()=>{
            let r2r = cc.rotateTo(1, 70);
            let r2l = cc.rotateTo(1, -70);
            this.mArrow.node.runAction(cc.repeatForever(cc.sequence(r2r, r2l)));
        })));
    },

    // 设置底注
    setBet() {
        this.mBetLabel.string = GLOBAL.BetList[this.mCurrentLevelIndex]['bet'];

        GLOBAL.CurrentLevelIndex = this.mCurrentLevelIndex;
    },

    startCountdown() {
        this.gameState = true;
    },

    checkWall(pos) {
        let points = this.mWallNode.children;
        for (let i=0, l=points.length; i < l;i++) {
            let pos1, pos2;
            if (i === l-1) {
                pos1 = points[i];
                pos2 = points[0];
            } else {
                pos1 = points[i];
                pos2 = points[i+1];
            }
            pos1 = pos1.position;//pos1.parent.convertToWorldSpaceAR(pos1.position)
            pos2 = pos2.position;//pos2.parent.convertToWorldSpaceAR(pos2.position)
            let line = this.computeDistanceBetweenPointAndLine(pos, pos1, pos2);
            if (line <= GLOBAL.RocketRadius) {
                return [pos1, pos2, i];
            }
        }
        return null;
    },

    checkCollision(pos) {
        let p = this.checkWall(pos);
        if (p)
            return p;

        return this.getCurrentLevel().checkBalls();
    },

    computeDistanceBetweenPointAndLine(point, pos1, pos2) {
        let a = pos2.y - pos1.y;
        let b = pos1.x - pos2.x;
        let c = pos2.x * pos1.y - pos1.x * pos2.y;

        return Math.abs(a * point.x + b * point.y + c) / Math.sqrt(a * a + b * b);
    },

    myUpdate (dt) {
        let totalFrameCount = GLOBAL.Countdown / 0.01;
        dt = Number(dt.toFixed(2));
        if(this.gameState){
            this.mCountdown += dt;
            let progress = this.mPowerProgress.progress;
            progress = 1 - this.mCountdown / GLOBAL.Countdown;
            if (progress <= 0) {
                progress = 0;
                if (this.mParti) {
                    this.mParti.removeFromParent(true);
                    this.mParti = null;
                }
                if (this.mStar) {
                    this.mStar.removeFromParent(true);
                    this.mStar = null;
                }

            } else {
                if (!this.mParti) {
                    this.mParti = cc.instantiate(this.mParticle);
                    this.mParticlenode.addChild(this.mParti)
                }
                if (!this.mStar) {
                    this.mStar = cc.instantiate(this.mStarParticle);
                    this.mParticlenode.addChild(this.mStar)
                }
                this.mParti.active = true;
                let pos = this.mRocket.node.position;//this.mParti.parent.convertToNodeSpaceAR(this.mRocket.node.parent.convertToWorldSpaceAR(this.mRocket.node.position));
                this.mParti.x = pos.x;
                this.mParti.y = pos.y;

                this.mStar.active = true;
                this.mStar.x = pos.x;
                this.mStar.y = pos.y;
            }

            this.mPowerProgress.progress = progress;
            if(progress === 0 && this.frameCount >= totalFrameCount){
                this.gameState = false;
                this.onEnd();
            } else {
                if (GLOBAL.AutoLine) {
                    let self = this;
                    let rocket = self.mRocket;
                    for (let i=0,l=parseInt(dt/0.01); i < l; i++) {
                        if (this.frameCount >= totalFrameCount) {
                            break;
                        }
                        this.frameCount++;
                        let index = self.checkCollision(rocket.node.position);
                        if (index instanceof Array) {
                            let pos1=index[0], pos2 = index[1];
                            let x = rocket.vx, y = rocket.vy;
                            let normal = cc.v2(pos2.x-pos1.x, pos2.y-pos1.y);
                            let aq = Number(Math.atan2(normal.y, normal.x).toFixed(6));
                            let ap = Number(Math.atan2(y, x).toFixed(6));
                            let adt = ap - aq;
                            let a = aq - adt;
                            let l = GLOBAL.Speed;
                            let i = l * Math.cos(a);
                            let j = l * Math.sin(a);
                            rocket.vx = Number(i.toFixed(6));
                            rocket.vy = Number(j.toFixed(6));

                            rocket.node.x = self.mLastPos.x;
                            rocket.node.y = self.mLastPos.y;

                            GLOBAL.GameAudio.playEffect(GLOBAL.GameAudio.wall);
                            rocket.onCollide();
                        } else {
                            if (index instanceof Ball) {
                                let co = self.checkWall(cc.v2(rocket.node.x, rocket.node.y));
                                if (!co) {
                                    self.mLastPos = cc.v2(rocket.node.x, rocket.node.y);
                                }
                            } else {
                                self.mLastPos = cc.v2(rocket.node.x, rocket.node.y);
                            }
                            rocket.updateXY();
                        }
                    }
                } else {
                    let self = this;
                    let rocket = self.mRocket;
                    for (let i=0,l=parseInt(dt/0.01); i < l; i++) {
                        if (this.frameCount >= totalFrameCount) {
                            break;
                        }

                        if (this.mManualPathIndex >= this.mManualPath.length) {
                            GLOBAL.AutoLine = true;
                            break;
                        }

                        this.frameCount++;
                        let index = self.checkCollision(rocket.node.position);
                        if (index instanceof Array) {

                            rocket.node.x = self.mLastPos.x;
                            rocket.node.y = self.mLastPos.y;

                            this.mManualPathIndex++;
                            if (!this.updateRocket()) {
                                let pos1=index[0], pos2 = index[1];
                                let x = rocket.vx, y = rocket.vy;
                                let normal = cc.v2(pos2.x-pos1.x, pos2.y-pos1.y);
                                let aq = Number(Math.atan2(normal.y, normal.x).toFixed(6));
                                let ap = Number(Math.atan2(y, x).toFixed(6));
                                let adt = ap - aq;
                                let a = aq - adt;
                                let l = GLOBAL.Speed;//Math.sqrt(x*x+y*y);
                                let i = l * Math.cos(a);
                                let j = l * Math.sin(a);
                                rocket.vx = Number(i.toFixed(6));
                                rocket.vy = Number(j.toFixed(6));
                            }

                            rocket.onCollide();
                        } else if (index instanceof Ball) {
                            rocket.node.x = self.mLastPos.x;
                            rocket.node.y = self.mLastPos.y;

                            this.mManualPathIndex++;
                            if (!this.updateRocket()) {
                                // Already DO In Ball
                            }
                        } else {
                            self.mLastPos = cc.v2(rocket.node.x, rocket.node.y);
                            rocket.updateXY();
                        }
                    }
                }
            }
        } else {
            this.mCountdown = 0;
        }
    },

    update (dt) {
        if (CC_DEBUG) {
            if (!GLOBAL.AutoPath)
                this.myUpdate(dt);
        } else {
            this.myUpdate(dt);
        }
    },

    getCurrentLevel() {
        return this.mLevelList[this.mCurrentLevelIndex];
    },

    onChooseNext() {
        this.mLevelList.forEach((level)=>{
            level.node.active = false;
        });
        if (this.mLevelList.length > 0) {
            this.mCurrentLevelIndex++;
            if (this.mCurrentLevelIndex >= this.mLevelList.length)
                this.mCurrentLevelIndex = 0;

            this.mCurrentLevelIndex = this.mCurrentLevelIndex % this.mLevelList.length;
            this.mLevelList[this.mCurrentLevelIndex].node.active = true;
            this.setBet();
        };
    },

    onChoosePre() {
        this.mLevelList.forEach((level)=>{
            level.node.active = false;
        });
        if (this.mLevelList.length > 0) {
            this.mCurrentLevelIndex--;
            if (this.mCurrentLevelIndex < 0)
                this.mCurrentLevelIndex = this.mLevelList.length - 1;

            this.mCurrentLevelIndex = this.mCurrentLevelIndex % this.mLevelList.length;
            this.mLevelList[this.mCurrentLevelIndex].node.active = true;
            this.setBet();
        }
    },

    onPressEmit() {
        this.lines = [];
        this.linesIndex = 0;
        if (!this.gameState) {
            if (CC_EDITOR) {
                // let dt = 0.01;
                // let i = 70;
                // this.schedule(()=>{
                //     this.gameState = true;
                //     let r = Number(i.toFixed(3));
                //     GLOBAL.Angle = r;
                //     let a = Math.abs(r) * Math.PI / 180;
                //     let x = GLOBAL.Speed * Math.sin(a);
                //     let y = GLOBAL.Speed * Math.cos(a);
                //
                //     this.mRocket.emit(r > 0 ? -x:x, y);
                //
                //     for (let i=0;i<1501;i++) {
                //         this.myUpdate(0.01);
                //     }
                //     i -= dt;
                //     this.gameState = false;
                // }, 0.01, 70*2*(1/dt), 0);

                // let lines = ''
                // let idx = 0;
                // let arr = lines.split(',');
                // this.lines = arr;
                // this.schedule(()=>{
                //     this.gameState = true;
                //     GLOBAL.ManualLine.length = 0;
                //     if (idx >= arr.length)
                //         return;
                //     let p = arr[idx]
                //     let ps = p.split('|');
                //     ps.forEach((i)=>{
                //         let bd = i.split('=');
                //         GLOBAL.ManualLine.push([Number(bd[0]), Number(bd[1])]);
                //     });
                //     this.linesIndex = idx;
                //     idx++;
                //
                //     this.analysePath();
                //     let x,y;
                //     let firstpos = this.mManualPath[this.mManualPathIndex];
                //     let rpos = this.mRocket.node.position;
                //     let pos = cc.v2(firstpos.x-rpos.x, firstpos.y-rpos.y);
                //     let a = Math.atan2(pos.y, pos.x);
                //     let degree = Number((a * 180 / Math.PI).toFixed(6));
                //     cc.log('manual angle', degree-90);
                //     x = GLOBAL.Speed * Math.cos(a);
                //     y = GLOBAL.Speed * Math.sin(a);
                //     this.mRocket.emit(x, y);
                //
                //     for (let i=0;i<1501;i++) {
                //         this.myUpdate(0.01);
                //     }
                //     this.gameState = false;
                // }, 0.01, arr.length, 0);
            } else {
                if (CC_DEBUG) {
                    // GLOBAL.IsCollectData = true;
                }
                Event.emit(GLOBAL.EventName.onOneShot);
            }
        }

        if(this.mRocket){
            this.mRocket.setFrameAni(false);
        }
    },

    onPressNext() {
        Event.emit(GLOBAL.EventName.NextLevel);
    },

    onPressPrevious() {
        Event.emit(GLOBAL.EventName.PreLevel);
    },

    onDestroy() {
        Event.offTarget(this);
    },

    onEnd() {
        let self = this;
        function p(money) {
            if (CC_DEBUG) {
                let str = "";
                if (self.lines.length === 0) {
                    str = ",Boom="+GLOBAL.Boom;
                } else {
                    str = self.lines[self.linesIndex];
                    str = "," + str  + ",1,1" + ",Boom="+GLOBAL.Boom;
                }
                cc.log("onEnd", money, `==B${self.getCurrentLevel().mIndex+1},${GLOBAL.Angle},${GLOBAL.Speed},smallBall=${self.collideresult.smallBall}|smallBallBoom=${self.collideresult.smallBallBoom}|midPurpleBall=${self.collideresult.midPurpleBall}|bigYellowBall=${self.collideresult.bigYellowBall}|midYellowBall=${self.collideresult.midYellowBall}|bigPurpleBall=${self.collideresult.bigPurpleBall}${str}E==`, GLOBAL.Angle, self.frameCount);
            }
        }
        if (CC_DEBUG) {
            if (GLOBAL.AutoPath) {
                let bet = Number(GLOBAL.BetList[GLOBAL.CurrentLevelIndex]['bet']);
                let money = 0;
                for (let i in this.collideresult) {
                    let num = this.collideresult[i];
                    let v = GLOBAL.BetList[GLOBAL.CurrentLevelIndex][i];
                    if (v)
                        money += Number((num * v));
                }
                p(money);
                this.reset();
            }
        } else {
            p(0);
        }

        this.frameCount = 0;
        this.mCountdown = 0;
        if(this.mRocket){
            this.mRocket.setFrameAni(true);
        }

        Event.emit(GLOBAL.EventName.GameOver);
    }
});
