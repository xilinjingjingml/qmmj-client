const {ccclass, property} = cc._decorator;

let opcodeDefine = []
let opcodeReverse = []

let setOpcode = function(name, code){
    opcodeDefine[name] = code
    opcodeReverse[code] = name
}
setOpcode("proto_cb_login_req",7300)
setOpcode("proto_bc_login_ack",7301)
setOpcode("proto_cb_join_table_req",7302)
setOpcode("proto_bc_join_table_ack",7303)
setOpcode("proto_cb_leave_table_req",7304)
setOpcode("proto_bc_leave_table_ack",7305)
setOpcode("proto_bc_ply_join_not",7306)
setOpcode("proto_bc_ply_leave_not",7307)
setOpcode("proto_cb_ready_req",7308)
setOpcode("proto_bc_ready_not",7309)
setOpcode("proto_cb_change_table_req",7313)
setOpcode("proto_bc_update_ply_data_not",7318)
setOpcode("proto_bc_message_not",7320)
setOpcode("proto_bc_specify_item_update_not",21285)

setOpcode("proto_ppq_gc_table_info_noti",32301)
setOpcode("proto_ppq_cg_set_bet_req",32302)
setOpcode("proto_ppq_gc_set_bet_ack",32303)
setOpcode("proto_ppq_gc_game_end_noti",32304)

export default function opcodeConfig(obj : String | Number) {
    
    if (typeof obj == "string")
        return opcodeDefine[obj as string]
    else if (typeof obj == "number")
        return opcodeReverse[obj as number]
   
    return null        
}
