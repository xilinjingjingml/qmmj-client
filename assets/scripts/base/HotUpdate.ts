import { versionCompare } from "./BaseFuncTs"
import PluginManager from "./PluginManager"

const { ccclass, property } = cc._decorator

@ccclass
export default class HotUpdate extends cc.Component {
    private _progressHandler: (value: number) => void
    private _resultHandler: (ret: number) => void
    private _assetsManager: any
    private _manifestConfig: any = {}
    private _percent: number = 0
    private _tag: string = 'qmmjjs'
    data: { storagePath: string, manifestPath: string, manifestConfig: any, }

    setConfig(url: string, progressHandler: (value: number) => void, resultHandler: (value: number) => void) {
        console.log("[HotUpdate.setConfig]", url)
        url = url + '/' + this._tag + '/'
        this._manifestConfig = {
            packageUrl: url,
            remoteManifestUrl: url + "project.manifest",
            remoteVersionUrl: url + "version.manifest",
        }

        this._progressHandler = progressHandler
        this._resultHandler = resultHandler

        const storagePath = this.data.storagePath
        const manifestPath = this.data.manifestPath
        const manifestConfig = this.data.manifestConfig
        for (const key in this._manifestConfig) {
            manifestConfig[key] = this._manifestConfig[key]
        }

        this._assetsManager = new jsb.AssetsManager(manifestPath, storagePath, versionCompare)
        this._assetsManager.getLocalManifest().parseJSONString(JSON.stringify(manifestConfig), storagePath)
        this._assetsManager.setVerifyCallback(this.setVerifyCallback.bind(this))
        this._assetsManager.setEventCallback(this.updateCallback.bind(this))
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._assetsManager.setMaxConcurrentTask(2)
        }
        this._assetsManager.update()
    }

    updateProgress(percent: number) {
        console.log("[HotUpdate.setConfig] value", percent)
        if (percent > 1) {
            percent = 1
        }
        if (percent <= this._percent) {
            return
        }
        this._percent = percent
        this._progressHandler && this._progressHandler(percent)
    }

    loadLocalManifest() {
        // 暂不使用差异下载路径
        // this._tag = PluginManager.getConfig('HotUpdateTag') || 'hbddzjs'
        console.log("[HotUpdate.loadLocalManifest]", this._tag)
        const storagePath = jsb.fileUtils.getWritablePath() + this._tag
        let manifestPath = cc.sys.localStorage.getItem("HotUpdateSearchPaths") ? storagePath : "thirdparty"
        manifestPath += '/project.manifest'
        console.log("[HotUpdate.loadLocalManifest] manifestPath", manifestPath)

        const manifestConfig = JSON.parse(jsb.fileUtils.getStringFromFile(manifestPath))
        console.log("[HotUpdate.loadLocalManifest] version", manifestConfig.version)
        this.data = {
            storagePath: storagePath,
            manifestPath: manifestPath,
            manifestConfig: manifestConfig,
        }
    }

    loadRemoteManifest() {
        const remoteManifest = this._assetsManager.getRemoteManifest()
        console.log("[HotUpdate.loadRemoteManifest]", remoteManifest && remoteManifest.isLoaded())
        if (remoteManifest && remoteManifest.isLoaded()) {
            const storagePath = jsb.fileUtils.getWritablePath() + this._tag + "_temp"
            const manifestPath = storagePath + "/project.manifest.temp"
            console.log("[HotUpdate.loadRemoteManifest] manifestPath", manifestPath)
            const manifestConfig = JSON.parse(jsb.fileUtils.getStringFromFile(manifestPath))
            console.log("[HotUpdate.loadRemoteManifest] version", manifestConfig.version)
            for (const key in this._manifestConfig) {
                manifestConfig[key] = this._manifestConfig[key]
            }
            remoteManifest.parseJSONString(JSON.stringify(manifestConfig), storagePath)
        }
    }

    setVerifyCallback(path: string, asset: { path: string, md5: string, size: number, compressed?: boolean }): boolean {
        console.log("[HotUpdate.setVerifyCallback] asset", path, JSON.stringify(asset))
        return true
    }

    updateCallback(event: any): void {
        let state = 0 // 1 finished 2 failed 3 already
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("[HotUpdate.updateCallback] No local manifest file found, hot update skipped.")
                state = 2
                break
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("[HotUpdate.updateCallback] Updated file.", event.getMessage())
                console.log(event.getDownloadedFiles(), event.getTotalFiles(), event.getPercentByFile())
                console.log(event.getDownloadedBytes(), event.getTotalBytes(), event.getPercent())
                this.updateProgress(event.getPercent())
                break
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("[HotUpdate.updateCallback] Fail to download manifest file, hot update skipped.")
                state = 2
                break
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("[HotUpdate.updateCallback] Already up to date with the latest remote version.")
                state = 3
                break
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log("[HotUpdate.updateCallback] Update finished.")
                state = 1
                break
            case jsb.EventAssetsManager.UPDATE_FAILED:
                console.log("[HotUpdate.updateCallback] Update failed.")
                state = 2
                break
            case jsb.EventAssetsManager.ERROR_UPDATING:
                console.log("[HotUpdate.updateCallback] Asset update error:", event.getAssetId())
                break
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                console.log("[HotUpdate.updateCallback] ERROR_DECOMPRESS.")
                break
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log("[HotUpdate.updateCallback] NEW_VERSION_FOUND.")
                this.loadRemoteManifest()
                break
            default:
                console.log("[HotUpdate.updateCallback] unkonw event.", event.getEventCode())
                break
        }

        if (state == 0) {
            return
        }

        this._assetsManager.setEventCallback(null)
        this._resultHandler && this._resultHandler(state)
        if (state == 1) {
            let searchPaths = jsb.fileUtils.getSearchPaths()
            let newPaths = this._assetsManager.getLocalManifest().getSearchPaths()
            Array.prototype.unshift.apply(searchPaths, newPaths)
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths))
            jsb.fileUtils.setSearchPaths(searchPaths)
            cc.audioEngine.stopAll()
            console.log("[HotUpdate.updateCallback] restart 1")
            cc.game.restart()
            console.log("[HotUpdate.updateCallback] restart 2")
        }
    }

    retry(): void {
        console.log("[HotUpdate.retry]")
        this._assetsManager.setEventCallback(this.updateCallback.bind(this))
        this._assetsManager.update()
    }

    onDestroy() {
        if (this._assetsManager) {
            this._assetsManager.setEventCallback(null)
        }
    }
}
