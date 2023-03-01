const { ccclass, property } = cc._decorator;

let opcodeDefine = []
let opcodeReverse = []

let setOpcode = function (name, code) {
    opcodeDefine[name] = code
    opcodeReverse[code] = name
}

setOpcode("mahjong_cb_login_req", 7300)
setOpcode("mahjong_bc_login_ack", 7301)
setOpcode("mahjong_cb_join_table_req", 7302)
setOpcode("mahjong_bc_join_table_ack", 7303)
setOpcode("mahjong_cb_leave_table_req", 7304)
setOpcode("mahjong_bc_leave_table_ack", 7305)
setOpcode("mahjong_bc_ply_join_not", 7306)
setOpcode("mahjong_bc_ply_leave_not", 7307)
setOpcode("mahjong_cb_ready_req", 7308)
setOpcode("mahjong_bc_ready_not", 7309)
setOpcode("mahjong_bc_change_table_req", 7310)
setOpcode("mahjong_cb_chat_req", 7311)
setOpcode("mahjong_bc_chat_not", 7312)
setOpcode("mahjong_cb_change_table_req", 7313)
setOpcode("mahjong_cb_visit_table_req", 7314)
setOpcode("mahjong_cb_get_online_award_req", 7315)
setOpcode("mahjong_bc_get_online_award_ack", 7316)
setOpcode("mahjong_cb_ply_place_not", 7317)
setOpcode("mahjong_bc_update_ply_data_not", 7318)

setOpcode("mahjong_bc_message_not", 7320)
setOpcode("mahjong_bc_create_table_ack", 7322)
setOpcode("mahjong_cb_get_table_list_req", 7323)
setOpcode("mahjong_bc_get_table_list_ack", 7324)
setOpcode("mahjong_cb_give_gift_req", 7325)
setOpcode("mahjong_bc_give_gift_ack", 7326)
setOpcode("mahjong_bc_give_gift_not", 7327)
setOpcode("mahjong_cb_get_match_data_req", 7328)
setOpcode("mahjong_bc_get_match_data_ack", 7329)
setOpcode("mahjong_cb_apply_match_req", 7330)
setOpcode("mahjong_bc_apply_match_ack", 7331)
setOpcode("mahjong_cb_reset_match_req", 7332)
setOpcode("mahjong_bc_reset_match_ack", 7333)
setOpcode("mahjong_cb_get_table_list_req2", 7334)
setOpcode("mahjong_bc_get_table_list_ack2", 7335)
setOpcode("mahjong_cb_kickout_req", 7336)
setOpcode("mahjong_bc_kickout_ack", 7337)
setOpcode("mahjong_cb_send_prop_req", 7338)
setOpcode("mahjong_bc_send_prop_ack", 7339)
setOpcode("mahjong_bc_send_prop_not", 7340)
setOpcode("mahjong_cb_get_assist_info_data_req", 7341)
setOpcode("mahjong_bc_get_assist_info_data_ack", 7342)
setOpcode("mahjong_bc_integal_condition_noti", 7343)
setOpcode("mahjong_bc_coupon_not", 7344)
setOpcode("mahjong_br_need_send_robot_not", 7345)
setOpcode("mahjong_bc_common_message_not", 7346)
setOpcode("mahjong_bc_below_admission_limit_tip_not", 7347)
setOpcode("mahjong_bc_recharge_tip_not", 7348)
setOpcode("mahjong_bc_calc_player_round_count_not", 7349)
setOpcode("mahjong_bc_round_award_items_not", 7350)
setOpcode("mahjong_bc_player_round_not", 7351)
setOpcode("mahjong_cb_get_round_award_req", 7352)
setOpcode("mahjong_bc_get_round_award_ack", 7353)
setOpcode("mahjong_bc_award_type_not", 7354)
setOpcode("mahjong_cb_get_task_system_req", 7356)
setOpcode("mahjong_bc_get_task_system_ack", 7357)
setOpcode("mahjong_cb_get_task_award_req", 7358)
setOpcode("mahjong_bc_get_task_award_ack", 7359)

setOpcode("mahjong_mj_banker_dice_not", 8910)
setOpcode("mahjong_mj_dice_not", 8911)
setOpcode("mahjong_mj_playcard_req", 8912)
setOpcode("mahjong_mj_playcard_ack", 8913)
setOpcode("mahjong_mj_changecard_not", 8914)
setOpcode("mahjong_mj_gameresult_not", 8915)
setOpcode("mahjong_mj_gangresult_not", 8916)//四川麻将废弃消息
setOpcode("mahjong_mj_completedata_req", 8917)
setOpcode("mahjong_mj_completedata_not", 8918)
setOpcode("mahjong_mj_operate_not", 8919)
setOpcode("mahjong_animate_ok_req", 8920)
setOpcode("mahjong_svr_dizhu_not", 8921)
setOpcode("mahjong_Cli_Auto_Req", 8922)
setOpcode("mahjong_Svr_Auto_Not", 8923)
setOpcode("mahjong_Cli_TingType_req", 8924)
setOpcode("mahjong_gc_clienttimer_not", 8925)
setOpcode("mahjong_mj_hudouble_req", 8926)
setOpcode("mahjong_mj_hudouble_ack", 8927)
setOpcode("mahjong_mj_hudouble_not", 8928)
setOpcode("mahjong_gc_task_not", 8929)//四川麻将废弃消息
setOpcode("mahjong_gc_task_complete_not", 8930)//四川麻将废弃消息
setOpcode("mahjong_mj_gang_score_not", 8931)//四川麻将废弃消息
// setOpcode("mahjong_svr_portrait_req", 8932)
// setOpcode("mahjong_svr_portrait_rsp", 8933)
// setOpcode("mahjong_svr_fake_score_not", 8934)
setOpcode("mahjong_Cli_leave_game_req", 8935)//还没加
setOpcode("mahjong_svr_leave_enable_not", 8936)//还没加
setOpcode("mahjong_svr_taifei_not", 8937)
setOpcode("mahjong_mj_gameresult_not_v1_1_0", 8938)//还没加
setOpcode("mahjong_mj_completedata_not_v1_1_0", 8939)//还没加
setOpcode("mahjong_svr_fake_score_not_v1_1_0", 8940)//还没加
// setOpcode("mahjong_svr_choose_ratio_req", 8941)
// setOpcode("mahjong_svr_choose_ratio_rsp", 8942)
// setOpcode("mahjong_svr_choose_ratio_not", 8943)
setOpcode("mahjong_scmj_gc_expression_not", 8944)//还没加
// setOpcode("mahjong_mj_robot_not", 8945)
// setOpcode("mahjong_mj_gameresult_not_v2_1_4", 8946)
setOpcode("mahjong_mj_huedcards_not", 8947)
setOpcode("mahjong_mj_need_charge_req", 8948)
setOpcode("mahjong_mj_need_charge_rsp", 8949)
setOpcode("mahjong_mj_charged_ack", 8950)//还没加
setOpcode("mahjong_mj_wait_game_not", 8951)//还没加
setOpcode("mahjong_mj_giveup_not", 8952)//还没加
setOpcode("mahjong_mj_userdata_not", 8953)//还没加
setOpcode("mahjong_mj_dingque_req", 8954)//还没加
setOpcode("mahjong_mj_dingque_rsp", 8955)//还没加
setOpcode("mahjong_mj_dingque_not", 8956)//还没加
setOpcode("mahjong_mj_tingfan_not", 8957)//还没加
setOpcode("mahjong_mj_gameresult_not_v2_2_0", 8958)
// setOpcode("mahjong_mj_visi_compdata_not", 8959)
// setOpcode("mahjong_mj_visi_compdata_req", 8960)
setOpcode("mahjong_mj_seat_dice_not", 8961)//还没加
setOpcode("mahjong_mj_private_room_result_not", 8962)//还没加
setOpcode("mahjong_mj_rount_count_not", 8963)//还没加
setOpcode("mahjong_get_mj_private_room_result_req", 8964)//还没加
setOpcode("mahjong_get_mj_private_room_result_ack", 8965)//还没加
setOpcode("mahjong_mj_pause_game_not", 8966)//还没加
setOpcode("mahjong_cg_get_redpackets_award_req", 8967)
setOpcode("mahjong_gc_get_redpackets_award_ack", 8968)
setOpcode("mahjong_gc_update_player_tokenmoney_not", 8969)
setOpcode("mahjong_cg_get_redpackets_88yuan_award_req", 8970)
setOpcode("mahjong_gc_get_redpackets_88yuan_award_ack", 8971)
setOpcode("mahjong_bc_specify_item_update_not", 21285)

console.log(opcodeDefine)

export default function opcodeConfig(obj: String | Number) {

    if (typeof obj == "string")
        return opcodeDefine[obj as string]
    else if (typeof obj == "number")
        return opcodeReverse[obj as number]

    return null
}
