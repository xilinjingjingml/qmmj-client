const {ccclass, property} = cc._decorator

@ccclass("BaseNodeInfo")
export default class BaseNodeInfo{
    @property(cc.Node)
    target: cc.Node = null

    @property()
    position: cc.Vec2 = cc.Vec2.ZERO

    @property()
    scale: number = 1

    @property()
    Rotation: number = 0

    @property()
    isHide: boolean = false
}
