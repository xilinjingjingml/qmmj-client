import {AudioConfig} from "./AudioConfig.scmj"
import GameLogic from "./GameLogic.scmj"


const {ccclass, property} = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
	audioClipArr = []
	
	moduleRes = 'moduleHBScmjRes/'

    start() {   
		
	}

	init() {

	}

	getAudioConfig() {
		GameLogic.Instance().setAudioManage(this)

		let src = []
		this.srcName = []
		
		for(let key in AudioConfig.audio_sounds_table['sound']) {
			src.push(this.moduleRes + AudioConfig.audio_sounds_table['sound'][key])
			this.srcName.push(key)
		} 
		return src
	}

	formatAudioArr(items) {
		this.onFinish(items)
	}

	preloadAudio() {
		let src = []
		this.srcName = []
		
		for(let key in AudioConfig.audio_sounds_table['sound']) {
			src.push(this.moduleRes + AudioConfig.audio_sounds_table['sound'][key])
			this.srcName.push(key)
		} 
		
        cc.loader.loadResArray(src, cc.AudioClip,
            (current, total, item) => {
                // cc.log(current, total, item)
            },
            (err, items: any[]) => {
                if (err) {                   
                    this.onFail(err)
                }
                else {
                    cc.log("preload finish")
                    this.onFinish(items)
                    // if (null != callback)
                    //     callback(items);
                }
            }
        )
	}

	onFail(err) {
		cc.log("onFail err")
	}

	onFinish(items:any[]) {
		//有隐患
		this.audioClipArr = []
		this.srcName.forEach((v, k) => {
			this.audioClipArr[v] = items[k]
		});
		cc.log(this.audioClipArr)
	}

	addSoundPath(path) {
		return this.moduleRes + path
	}

	playMusic(name) {
		if (GameLogic.Instance().getIfPreLoadSound()) {
			cc.audioEngine.playMusic(this.audioClipArr[name], true)
		}else{
			if (!AudioConfig.audio_sounds_table['sound'][name]) {
				return false
			}
			let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][name])
			cc.loader.loadRes(audioUrl, cc.AudioClip, (err, clip) => {
				if (err) {
					cc.log(err)
				}else {
					cc.audioEngine.playMusic(clip, true)
				}
			});
		}
	}

	playSound(name, sex) {
		if (sex != null) {
			var sexname = name + ((sex == 1) ? 'woman' : 'man')
			if (this.ccPlaySound(sexname)) {
				return
			}
		}

		this.ccPlaySound(name)
	}
	
	playBackground() {
		this.playMusic('bg_music')
	}

	
	ccPlaySound(audioName) {		
		if (GameLogic.Instance().getIfPreLoadSound()) {
			if (this.audioClipArr[audioName]) {
				cc.audioEngine.playEffect(this.audioClipArr[audioName], false)
				return true
			}
		}else{
			if (!AudioConfig.audio_sounds_table['sound'][audioName]) {
				return false
			}
			let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][audioName])
			cc.loader.loadRes(audioUrl, cc.AudioClip, (err, clip) => {
				if (err) {
					cc.log(err)
				}else {
					cc.audioEngine.playEffect(clip, false)
				}
			});
			return true
		}
		return false
	}
}