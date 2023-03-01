var satatusLabel = null
var statusProgress = null
var finishCallback = null

const LOADER_STORAGE = "__loader_lastpath"
const fs = wx.getFileSystemManager()

var mWinSize = null
var mAliginNum = 0

const floatEpsilon = Math.pow(2, -23)

function floatEqual(a, b) {
	return Math.abs(a - b) <= floatEpsilon * Math.max(Math.abs(a), Math.abs(b))
}

function isIPhoneX() {
	const ratioIPhoneX = 2436 / 1125
	const ratioIPhoneXR = 1792 / 828

	const fsize = cc.view.getFrameSize()
	const ratio = fsize.width / fsize.height

	if (floatEqual(ratio, ratioIPhoneX) || floatEqual(ratio, ratioIPhoneXR)) {
		mWinSize = cc.size(720 * (fsize.width / fsize.height), 720)
		return true
	}

	return false
}

function loadImage(sprite, url, callback, manual) {
	var image = wx.createImage()
	image.onload = function() {
		var texture = new cc.Texture2D()
		texture.initWithElement(image)
		texture.handleLoadedTexture()
		var frame = new cc.SpriteFrame()
		if (manual) {
			manual(frame, texture)
		} else {
			frame.setTexture(texture)
		}
		sprite.spriteFrame = frame
		callback && callback()
	}
	image.src = url
}

function configComponent(component, config) {
	for (var key in config) {
		component[key] = config[key]
	}
	return component
}

function showLoadingScene(needload, onlaunch) {
	var scene = new cc.Scene()

	var canvasNode = new cc.Node()
	canvasNode.parent = scene
	canvasNode.addComponent(cc.Class({
		extends: cc.Canvas,
		ctor: function() {
			if (isIPhoneX()) {
				this._fitWidth = true
				this._fitHeight = true
				this._designResolution = cc.size(720 * ((812 - 60) / 375), 720)
			} else {
				this._designResolution = cc.size(1280, 720)
				this._fitWidth = true
				this._fitHeight = false
			}
		}
	}))

	var bg = new cc.Node()
	bg.parent = canvasNode
	loadImage(bg.addComponent(cc.Sprite), "static/bg.jpg", function() {
		var size = mWinSize || cc.winSize
		bg.scale = Math.max(size.width / bg.width, size.height / bg.height)
		// configComponent(bg.addComponent(cc.Widget), {
		// 	top: 0,
		// 	isAlignTop: true,
		// 	bottom: 0,
		// 	isAlignBottom: true,
		// 	left: 0,
		// 	isAlignLeft: true,
		// 	right: 0,
		// 	isAlignRight: true
		// })
	})

	var logo = new cc.Node()
	logo.parent = canvasNode
	loadImage(logo.addComponent(cc.Sprite), "static/logo.png", function() {
		configComponent(logo.addComponent(cc.Widget), {
			top: 25,
			isAlignTop: true,
			left: 25,
			isAlignLeft: true
		})
	})

	// var copyrightBg = new cc.Node()
	// copyrightBg.parent = canvasNode
	// copyrightBg.opacity = 180
	// copyrightBg.color = cc.color(63, 63, 63)

	// loadImage(copyrightBg.addComponent(cc.Sprite), "static/white.png", function() {
	// 	copyrightBg.height = 100
	// 	configComponent(copyrightBg.addComponent(cc.Widget), {
	// 		bottom: 0,
	// 		isAlignBottom: true,
	// 		left: mAliginNum,
	// 		isAlignLeft: true,
	// 		right: mAliginNum,
	// 		isAlignRight: true
	// 	})
	// })

	var copyright = new cc.Node()
	copyright.parent = canvasNode
	loadImage(copyright.addComponent(cc.Sprite), "static/copyright.png", function() {
		configComponent(copyright.addComponent(cc.Widget), {
			bottom: 0,
			isAlignBottom: true,
			left: mAliginNum,
			isAlignLeft: true,
			right: mAliginNum,
			isAlignRight: true
		})
	}, function(spriteframe, texture) {
		spriteframe.setTexture(texture, cc.rect(0, 0, 1229, 84), false, cc.v2(0,0), cc.size(texture.width, texture.height))
	})

	if (needload) {
		var textBg = new cc.Node()
		loadImage(textBg.addComponent(cc.Sprite), "static/textbg.png", function() {
			textBg.parent = canvasNode
			configComponent(textBg.addComponent(cc.Widget), {
				bottom: 120,
				isAlignBottom: true
			})
		})

		var label = new cc.Node()
		label.parent = textBg
		var labelCmp = label.addComponent(cc.Label)
		labelCmp.fontSize = 20
		labelCmp.lineHeight = 22
		labelCmp.string = "资源加载中"

		var progressBg = new cc.Node()
		progressBg.parent = canvasNode
		loadImage(progressBg.addComponent(cc.Sprite), "static/progressbg.png", function() {
			configComponent(progressBg.addComponent(cc.Widget), {
				bottom: 100,
				isAlignBottom: true,
				left: mAliginNum,
				isAlignLeft: true,
				right: mAliginNum,
				isAlignRight: true
			})
		})

		var progress = new cc.Node()
		progress.parent = canvasNode
		progress.anchorX = 0
		progress.opacity = 0
		loadImage(progress.addComponent(cc.Sprite), "static/progress.png", function() {
			configComponent(progress.addComponent(cc.Widget), {
				bottom: 100,
				isAlignBottom: true,
				left: mAliginNum,
				isAlignLeft: true,
				right: mAliginNum,
				isAlignRight: true
			}).updateAlignment()

			progress.originWidth = progress.width
			progress.width = 0
		})

		satatusLabel = labelCmp
		statusProgress = progress
	}

	cc.director.runSceneImmediate(scene, null, onlaunch)
	mAliginNum = -(cc.winSize.width - 1280) / 2
}

function setProgress(ratio) {
	if (satatusLabel && statusProgress && statusProgress.originWidth) {
		satatusLabel.string = "资源加载中(" + ratio + "%)"
		statusProgress.opacity = 255
		statusProgress.width = statusProgress.originWidth * ratio / 100
	}
}

function showMessage(message, exit) {
	wx.showModal({
		title: "提示",
		content: message,
		showCancel: false,
		confirmText: exit ? "确定" : "重试",
		success: function(res) {
			if (exit) {
				wx.exitMiniProgram({
					success: function() {},
					fail: function() {}
				})
			} else {
				loadResource()
			}
		}
	})
}

function removeOutdatedRes() {
	try {
	  fs.rmdirSync(wx.env.USER_DATA_PATH + "/res", true) // 掌心竞技老资源
	} catch (err) {}
  
	try {
	  fs.rmdirSync(wxDownloader.cacheDir, true)
	} catch (err) {}
}

function loadMiniZip(callback) {
	wx.downloadFile({
		url: wxDownloader.REMOTE_SERVER_ROOT + "/res-mini.zip",
		success: function(res) {
			if (res.statusCode == 200) {
				unzipMiniZip(res.tempFilePath || res.filePath, callback)
			} else {
				callback('资源加载错误 ' + res.statusCode)
			}
		},
		fail: function(res) {
			callback(res.errMsg)
		}
	}).onProgressUpdate(function(res) {
		setProgress(res.progress)
	})
}

function unzipMiniZip(path, callback) {
	fs.unzip({
		zipFilePath: path,
		targetPath: wxDownloader.cacheDir,
		success: function(res) {
			callback()
		},
		fail: function(res) {
			callback(res.errMsg)
		}
	})
}

function compareVersion(v1, v2) {
	v1 = v1.split('.')
	v2 = v2.split('.')
	const len = Math.max(v1.length, v2.length)

	while (v1.length < len) {
		v1.push('0')
	}
	while (v2.length < len) {
		v2.push('0')
	}

	for (let i = 0; i < len; i++) {
		const num1 = parseInt(v1[i])
		const num2 = parseInt(v2[i])

		if (num1 > num2) {
			return 1
		} else if (num1 < num2) {
			return -1
		}
	}

	return 0
}

function checkWechatVersion() {
	const version = wx.getSystemInfoSync().SDKVersion || "0.0.0"
	if (compareVersion(version, '2.5.0') >= 0) {
		return true
	}

	showMessage("当前微信版本过低，无法正常使用此小程序，请更新微信到最新版本。", true)
	return false
}

function loadResource() {
	loadMiniZip(function(err) {
		if (err) {
			showMessage(err)
		} else {
			wxDownloader.reload()
			localStorage.setItem(LOADER_STORAGE, wxDownloader.REMOTE_SERVER_ROOT)
			finishCallback()
		}
	})
}

function init(setting, onfinished) {
	wx.setKeepScreenOn({
		keepScreenOn: true
	})

	if (!checkWechatVersion()) {
		return
	}


	var loadPath = wxDownloader.REMOTE_SERVER_ROOT
	var lastLoadPath = localStorage.getItem(LOADER_STORAGE)

	if (loadPath == "" || lastLoadPath == loadPath) {
		showLoadingScene(false, function() {
			onfinished()
		})
	} else {
		finishCallback = onfinished
		showLoadingScene(true, function() {
			removeOutdatedRes()
			loadResource()
		})
	}
}

module.exports = {
	init
}