const {ccclass, property} = cc._decorator;

let opcodeDefine = []
let opcodeReverse = []

let setOpcode = function(name, code){
    opcodeDefine[name] = code
    opcodeReverse[code] = name
}

setOpcode("proto_cb_login_req", 7300)
setOpcode("proto_bc_login_ack", 7301)
setOpcode("proto_cb_join_table_req", 7302)
setOpcode("proto_bc_join_table_ack", 7303)
setOpcode("proto_cb_leave_table_req", 7304)
setOpcode("proto_bc_leave_table_ack", 7305)
setOpcode("proto_bc_ply_join_not", 7306)
setOpcode("proto_bc_ply_leave_not", 7307)
setOpcode("proto_cb_ready_req", 7308)
setOpcode("proto_bc_ready_not", 7309)
setOpcode("proto_bc_change_table_req", 7310)
setOpcode("proto_cb_chat_req", 7311)
setOpcode("proto_bc_chat_not", 7312)
setOpcode("proto_cb_change_table_req", 7313)
setOpcode("proto_cb_visit_table_req", 7314)
setOpcode("proto_cb_get_online_award_req", 7315)
setOpcode("proto_bc_get_online_award_ack", 7316)
setOpcode("proto_cb_ply_place_not", 7317)
setOpcode("proto_bc_update_ply_data_not", 7318)


setOpcode("proto_cg_start_bet_req", 5100)
setOpcode("proto_gc_start_bet_ack", 5101)
setOpcode("proto_cg_super_award_req", 5102)
setOpcode("proto_gc_super_award_not", 5103)
setOpcode("proto_gc_common_not", 5104)


export default function opcodeConfig(obj : String | Number) {
    
    if (typeof obj == "string")
        return opcodeDefine[obj as string]
    else if (typeof obj == "number")
        return opcodeReverse[obj as number]
   
    return null        
}
