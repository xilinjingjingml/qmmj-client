import BaseCircuit from "../Circuit/BaseCircuit"
import BaseNodeInfo from "./BaseNodeInfo";
import DataManager from "../../baseData/DataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseTrigger extends cc.Component {

    @property()
    disableTrigger: boolean = false

    // 允许多触发
    @property({
        type: [BaseNodeInfo],
        serializable: true
    })
    target: BaseNodeInfo[] = []

    bEffect: boolean = true

    onTrigger() {
        if (this.disableTrigger)
            return 

        if (this.bEffect)
            cc.audioEngine.playEffect(DataManager.Instance.menuEffect, false)

        let circuits = this.node.getComponents(BaseCircuit)
        circuits.forEach(circuit => circuit.onFire())
        this.target.forEach(item => {
            if (item.target) {
                item.target.runAction(cc.moveBy(0.1, item.position))
                item.target.runAction(cc.scaleBy(0.1, item.scale))
                item.target.runAction(cc.rotateBy(0.1, -item.rotation))
                item.target.active = !item.isHide
            }

            let circuits = item.target.getComponents(BaseCircuit) || []
            circuits.forEach(circuit => circuit.onFire())
        })
    }
}
