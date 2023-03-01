import BaseControl from "../Extpands/BaseControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseCircuit extends BaseControl {

    @property()
    _onFire: boolean = false

    start () {

    }

    onFire() {

    }
}
