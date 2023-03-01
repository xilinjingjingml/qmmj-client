const {ccclass, property} = cc._decorator;

let opcodeDefine = []
let opcodeReverse = []

let setOpcode = function(name, code){
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
setOpcode("mahjong_cb_create_table_req", 7321)
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
setOpcode("mahjong_ermj_dice_not", 8910)
setOpcode("mahjong_ermj_playcard_req", 8911)
setOpcode("mahjong_ermj_playcard_ack", 8912)
setOpcode("mahjong_ermj_changecard_not", 8913)
setOpcode("mahjong_ermj_gameresult_not", 8914)
setOpcode("mahjong_ermj_completedata_req", 8915)
setOpcode("mahjong_ermj_completedata_not", 8916)
setOpcode("mahjong_ermj_operate_not", 8917)
setOpcode("mahjong_ermj_animate_ok_req", 8918)
setOpcode("mahjong_ermj_svr_dizhu_not", 8919)
setOpcode("mahjong_ermj_Cli_Auto_Req", 8920)
setOpcode("mahjong_ermj_Svr_Auto_Not", 8921)
setOpcode("mahjong_ermj_Cli_TingType_req", 8922)
setOpcode("mahjong_ermj_gc_clienttimer_not", 8923)
setOpcode("mahjong_ermj_hudouble_req", 8924)
setOpcode("mahjong_ermj_hudouble_ack", 8925)
setOpcode("mahjong_ermj_hudouble_not", 8926)
setOpcode("mahjong_ermj_gc_expression_not", 8929)
setOpcode("mahjong_ermj_task_not", 8930)
setOpcode("mahjong_ermj_task_change_req", 8931)
setOpcode("mahjong_ermj_task_change_rsp", 8932)
setOpcode("mahjong_ermj_task_complete_not", 8933)
setOpcode("mahjong_ermj_baopai_not", 8934)
setOpcode("mahjong_ermj_baopai_change_req", 8935)
setOpcode("mahjong_ermj_baopai_change_rsp", 8936)
setOpcode("mahjong_ermj_taifei_not", 8937)
setOpcode("mahjong_ermj_mingpai_ratio_not", 8938)
setOpcode("mahjong_ermj_mingpai_ratio_req", 8939)
setOpcode("mahjong_ermj_hupai_ratio_not", 8940)
setOpcode("mahjong_ermj_hupai_ratio_req", 8941)
setOpcode("mahjong_ermj_hupai_ratio_rsp", 8942)
setOpcode("mahjong_ermj_achieve_req", 8943)
setOpcode("mahjong_ermj_tingcards_not", 8944)
setOpcode("mahjong_ermj_winstreak_req", 8945)
setOpcode("mahjong_ermj_winstreak_rsp", 8946)
setOpcode("mahjong_ermj_tingfan_not", 8949)
setOpcode("mahjong_ermj_readyting_not", 8950)
setOpcode("mahjong_ermj_gameresult_not_jj", 8953)
setOpcode("mahjong_ermj_gc_clienttimer_not_new", 8960)
setOpcode("mahjong_ermj_completedata_not_new", 8961)
setOpcode("mahjong_ermj_svr_fake_score_not", 8962)
setOpcode("mahjong_cb_get_mahjong_quick_daily_task_data_req", 21218)
setOpcode("mahjong_bc_get_mahjong_quick_daily_task_data_ack", 21219)
setOpcode("mahjong_cb_get_mahjong_quick_daily_task_award_req", 21220)
setOpcode("mahjong_bc_get_mahjong_quick_daily_task_award_ack", 21221)
setOpcode("mahjong_bc_new_table_not", 21228)
setOpcode("mahjong_mj_seat_dice_not", 8954)
setOpcode("mahjong_mj_private_room_result_not", 8955)
setOpcode("mahjong_mj_rount_count_not", 8956)
setOpcode("mahjong_get_mj_private_room_result_req", 8957)
setOpcode("mahjong_get_mj_private_room_result_ack", 8958)
setOpcode("mahjong_mj_pause_game_not", 8959)
setOpcode("mahjong_mj_replay_data_not", 8963)
setOpcode("mahjong_ermj_playcard_req_new", 8964)
setOpcode("mahjong_ermj_hudouble_req_new", 8965)
setOpcode("mahjong_ermj_changecard_not_new", 8966)
setOpcode("mahjong_bc_match_weed_out_score_not", 21253)
setOpcode("mahjong_bc_match_relive_noti", 21282)
setOpcode("crobo_match_relive_req", 21283)
setOpcode("mahjong_bc_match_relive_ack", 21284)
setOpcode("mahjong_bc_match_config_not", 21290)
setOpcode("mahjong_bc_match_rank_not", 21240)
setOpcode("mahjong_cg_get_redpackets_award_req", 8967)
setOpcode("mahjong_gc_get_redpackets_award_ack", 8968)
setOpcode("mahjong_bc_specify_item_update_not", 21285)
setOpcode("mahjong_gc_update_player_tokenmoney_not", 8969)
setOpcode("mahjong_cg_get_redpackets_88yuan_award_req",8970)
setOpcode("mahjong_gc_get_redpackets_88yuan_award_ack",8971)

setOpcode("mahjong_cb_create_table_req", 7321)
setOpcode("mahjong_bc_create_table_ack", 7322)
setOpcode("mahjong_bc_private_invite_code_not", 21226)
setOpcode("mahjong_cb_dismiss_private_table_req", 21230)
setOpcode("mahjong_bc_dismiss_private_table_ack", 21231)
setOpcode("mahjong_bc_force_dismiss_private_table_req",21232)
setOpcode("mahjong_cb_force_dismiss_private_table_ack",21233)
setOpcode("mahjong_bc_force_dismiss_private_table_not",21234)
setOpcode("mahjong_bc_dismiss_private_result_not",21250)

console.log(opcodeDefine)

export default function opcodeConfig(obj : String | Number) {
    
    if (typeof obj == "string")
        return opcodeDefine[obj as string]
    else if (typeof obj == "number")
        return opcodeReverse[obj as number]
   
    return null        
}
