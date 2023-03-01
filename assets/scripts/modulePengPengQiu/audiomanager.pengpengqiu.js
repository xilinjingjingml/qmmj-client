
let GLOBAL = require('global.pengpengqiu');
let AudioConfig = GLOBAL.Sound;

module.exports = {
    moduleRes: "modulePengPengQiuRes",

    loadAudio() {
        this.audioClipArr = {};
        let src = this.getAudioConfig();
        cc.loader.loadResArray(src, cc.AudioClip,
            (current, total, item) => {
                // cc.log(current, total, item)
            },
            (err, items) => {
                if (err) {
                    this.onFail(err)
                }
                else {
                    cc.log("preload finish");
                    this.onFinish(items)
                    // if (null != callback)
                    //     callback(items);
                }
            }
        )
    },

    getAudioConfig() {
        let src = [];
        this.srcName = [];

        for(let key in AudioConfig) {
            src.push(this.moduleRes + '/' + AudioConfig[key]);
            this.srcName.push(AudioConfig[key]);
        }
        return src
    },

    formatAudioArr(items) {
        this.onFinish(items)
    },

    onFail(err) {
        cc.log("onFail err");
    },

    onFinish(items) {
        //有隐患
        this.srcName.forEach((v, k) => {
            this.audioClipArr[v] = items[k]
        });
        cc.log(this.audioClipArr)
    },

    playMusic(name) {
        if (!this.audioClipArr.hasOwnProperty(name)) {
            return false
        }
        this.currentMusic = cc.audioEngine.playMusic(this.audioClipArr[name], true);
        return true;
    },

    playSound(name) {
        if (!this.audioClipArr.hasOwnProperty(name)) {
            return false
        }
        this.currentEffect = cc.audioEngine.playEffect(this.audioClipArr[name], false);
        return true;
    },

    clean() {
        if (typeof this.currentMusic !== "undefined") {
            cc.audioEngine.stop(this.currentMusic);
        }
        if (typeof this.currentEffect !== "undefined") {
            cc.audioEngine.stop(this.currentEffect);
        }
    },
};
