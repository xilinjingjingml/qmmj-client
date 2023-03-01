const {ccclass, property} = cc._decorator

@ccclass("ItemData")
export default class ItemData {
    @property()
    idx: number = 0

    @property()
    num: number = 0

    @property()
    gameId: number = 0

    @property()
    param1: number = 0

    @property()
    param2: number = 0

    @property()
    iName: string = ""

    @property()
    url: string = ""

    static create(item) {
        let obj = new ItemData()
        obj.idx = item["index"]
        obj.num = item["num"]
        obj.gameId = item["gameId"]
        obj.param1 = item["param1"]
        obj.param2 = item["param2"]
        obj.iName = item["name"]
        obj.url = item["url"]
        return obj
    }
}
