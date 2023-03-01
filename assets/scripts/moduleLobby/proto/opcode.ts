const {ccclass, property} = cc._decorator;

let opcodeDefine = []
let opcodeReverse = []

let setOpcode = function(name, code){
    opcodeDefine[name] = code
    opcodeReverse[code] = name
}

// setOpcode("mahjong_ping", 7200)
// setOpcode("mahjong_pong", 7201)
setOpcode("mahjong_bc_message_not", 7320)
setOpcode("mahjong_lc_get_total_game_round_ack",20023)
// setOpcode("mahjong_bc_match_cancel_not",21252)
setOpcode("mahjong_lc_get_total_game_round_ack",20023)
// setOpcode("mahjong_cb_match_table_by_marriage_req",7377)
setOpcode("mahjong_cb_get_task_system_req",7356)
setOpcode("mahjong_lc_room_limit_refresh_not",20130)
setOpcode("mahjong_bc_send_prop_ack",7339)
// setOpcode("mahjong_bc_new_table_not",21228)
setOpcode("mahjong_lc_get_server_status_ack",7287)
setOpcode("mahjong_bc_send_disconnect_ack",21225)
setOpcode("mahjong_cl_spec_trumpet_req",7294)
setOpcode("mahjong_bc_calc_player_round_count_not",7349)
setOpcode("mahjong_cl_get_user_signin_award_info_req",20004)
// setOpcode("mahjong_lc_club_invite_to_game_ack",20140)
setOpcode("mahjong_cl_modify_password_safe_req",7253)
// setOpcode("mahjong_lc_use_protocol_mahjong_ack",20155)
setOpcode("mahjong_lc_get_season_card_award_ack",20201)
setOpcode("mahjong_lc_get_merged_achieve_award_ack",20015)
setOpcode("mahjong_bc_give_gift_not",7327)
setOpcode("mahjong_cl_get_turntable_login_award_config_req",20055)
// setOpcode("mahjong_lc_club_list_change_noti",20128)
setOpcode("mahjong_cl_get_user_level_desc_req",20065)
setOpcode("mahjong_lc_get_safe_history_ack",7256)
setOpcode("mahjong_cl_get_achieve_ext_award_req",7237)
setOpcode("mahjong_lc_get_user_signin_award_ext_ack",20111)
// setOpcode("mahjong_cl_get_private_game_replay_record_req",20114)
setOpcode("mahjong_lc_get_at_achieve_award_ack",20070)
setOpcode("mahjong_bc_get_relief_ack",7387)
setOpcode("mahjong_lc_send_friend_msg_ack",7246)
setOpcode("mahjong_bc_do_tip_dila_notf",21210)
setOpcode("mahjong_cb_web_socket_shake_hand_req",6900)
setOpcode("mahjong_lc_verity_ticket_ack",7203)
setOpcode("mahjong_bc_get_player_feel_value_ack",7376)
setOpcode("mahjong_bc_get_achieve_award_not",7355)
setOpcode("mahjong_lc_get_rp_relief_ack",20145)
setOpcode("mahjong_lc_send_vip_data_change_not",20009)
setOpcode("mahjong_lc_get_turntable_login_award_ack",20058)
setOpcode("mahjong_cl_get_merged_achieve_award_req",20014)
setOpcode("mahjong_cl_get_private_invite_info_req",20083)
setOpcode("mahjong_cb_visit_table_req",7314)
setOpcode("mahjong_cb_send_disconnect_req",21224)
setOpcode("mahjong_bc_change_dila_ack",21207)
setOpcode("mahjong_lc_update_achieve_award_not",7264)
// setOpcode("mahjong_cl_sign_match_req",20097)
setOpcode("mahjong_lc_trumpet_ack",7215)
// setOpcode("mahjong_lc_match_lost_notf",20028)
// setOpcode("mahjong_cl_club_get_room_list_by_rule_req",20175)
setOpcode("mahjong_lc_integal_condition_noti",7245)
setOpcode("mahjong_bc_join_table_ack",7303)
setOpcode("mahjong_lc_get_merged_achieve_list_data_ack",20013)
// setOpcode("mahjong_bc_match_survival_config_ack",21307)
// setOpcode("mahjong_bc_match_reach_achiev_noti",21324)
setOpcode("mahjong_lc_get_fetion_rank_list_ack",7293)
setOpcode("mahjong_lc_get_ply_city_data_ack",20075)
// // setOpcode("mahjong_lc_club_get_club_list_ack",20121)
setOpcode("mahjong_lc_get_win_round_score_ack",7269)
setOpcode("mahjong_lc_get_private_game_replay_ack",20113)
setOpcode("mahjong_lc_server_status_not",7205)
setOpcode("mahjong_cl_synthesis_monkey_req",20078)
// // setOpcode("mahjong_bc_match_join_flow_match_ack",21336)
setOpcode("mahjong_cb_get_online_award_items_req",7363)
// setOpcode("mahjong_lc_match_status_notf",20048)
setOpcode("mahjong_bc_get_mahjong_quick_daily_task_award_ack",21221)
// setOpcode("mahjong_bc_match_get_dynamic_award_ack",21328)
setOpcode("mahjong_lc_valid_identify_info_ack",20082)
// setOpcode("mahjong_bc_match_info_noti",21290)
setOpcode("mahjong_cl_get_card_road_data_req",20093)
setOpcode("mahjong_cl_trumpet_req",7214)
// setOpcode("mahjong_cl_match_require_status_req",20033)
setOpcode("mahjong_bc_chat_ack",21235)
// setOpcode("mahjong_cl_quit_sign_match_req",20100)
setOpcode("mahjong_lc_get_relief_times_ack",7285)
setOpcode("mahjong_lc_send_user_data_change_not",7239)
setOpcode("mahjong_bc_get_online_award_items_ack",7364)
setOpcode("mahjong_cl_get_merged_achieve_list_data_req",20012)
setOpcode("mahjong_lc_get_position_info_ack",7234)
setOpcode("mahjong_bc_common_message_not",7346)
setOpcode("mahjong_bc_get_finished_newbie_award_ack",7397)
setOpcode("mahjong_lc_get_daily_task_award_ack",7228)
setOpcode("mahjong_cl_store_safe_amount_req",7249)
setOpcode("mahjong_lc_get_user_good_card_ack",20011)
setOpcode("mahjong_bc_player_round_not",7351)
setOpcode("mahjong_cl_get_daily_task_award_req",7227)
// setOpcode("mahjong_lc_match_require_status_ack",20034)
// setOpcode("mahjong_cb_match_survival_config_req",21306)
setOpcode("mahjong_bc_get_round_award_ack",7353)
setOpcode("mahjong_cl_get_relief_times_req",7284)
// setOpcode("mahjong_lc_get_private_game_replay_record_ack",20115)
setOpcode("mahjong_bc_get_spec_props_list_ack",21201)
setOpcode("mahjong_lc_get_user_signin_award_ack",20007)
// setOpcode("mahjong_bc_apply_match_ack",7331)
setOpcode("mahjong_cl_update_achieve_req",7263)
setOpcode("mahjong_lc_get_friend_list_ack",7221)
setOpcode("mahjong_bc_update_feel_value_not",7372)
setOpcode("mahjong_cl_continuous_landing_get_reward_req",20134)
setOpcode("mahjong_cb_get_all_dila_req",21211)
setOpcode("mahjong_cb_get_round_award_req",7352)
setOpcode("mahjong_cl_end_chat_req",7277)
setOpcode("mahjong_bc_give_back_win_money_ack",7374)
setOpcode("mahjong_lc_get_ply_current_rank_ack",20052)
setOpcode("mahjong_bc_get_online_award_ack",7316)
setOpcode("mahjong_cl_get_daily_task_list_req",7225)
// setOpcode("mahjong_cb_match_get_dynamic_award_req",21327)
setOpcode("mahjong_lc_get_user_signin_days_ack",20001)
setOpcode("mahjong_cl_get_safe_history_req",7255)
setOpcode("mahjong_lc_trumpet_not",7216)
setOpcode("mahjong_cb_get_player_level_req",7361)
setOpcode("mahjong_bc_get_table_list_ack",7324)
setOpcode("mahjong_cb_join_table_req",7302)
// setOpcode("mahjong_bc_match_relive_ack",21284)
setOpcode("mahjong_lc_server_data_not2",7217)
setOpcode("mahjong_cl_verify_ticket_req",7202)
// setOpcode("mahjong_lc_match_unfinished_notf",20037)
setOpcode("mahjong_lc_get_rank_list_ack",7209)
// setOpcode("mahjong_cl_club_get_member_list_req",20122)
setOpcode("mahjong_cl_get_user_signin_award_ext_req",20110)
setOpcode("mahjong_cl_get_all_frd_feel_value_req",7275)
setOpcode("mahjong_bc_use_spec_props_ack",21203)
setOpcode("mahjong_lc_get_online_rank_list_mj_ack",20062)
setOpcode("mahjong_lc_get_achieve_ext_list_ack",7236)
setOpcode("mahjong_cb_do_tip_dila_req",21208)
setOpcode("mahjong_lc_update_player_marriage_ack",7280)
// setOpcode("mahjong_cl_club_get_limit_group_list_req",20180)
// setOpcode("mahjong_cl_get_match_sign_num_req",20117)
setOpcode("mahjong_lc_get_achieve_ext_award_ack",7238)
setOpcode("mahjong_cb_leave_table_req",7304)
setOpcode("mahjong_cl_get_ply_status_req",7206)
setOpcode("mahjong_lc_send_friend_msg_not",7223)
setOpcode("mahjong_cb_get_assist_info_data_req",7341)
setOpcode("mahjong_lc_broadcast_message_not",20116)
setOpcode("mahjong_cl_get_rp_relief_req",20144)
setOpcode("mahjong_lc_get_card_road_data_ack",20094)
setOpcode("mahjong_cb_change_dila_req",21206)
// setOpcode("mahjong_bc_use_protocol_mahjong_ack",21321)
setOpcode("mahjong_lc_get_three_draw_data_ack",20096)
setOpcode("mahjong_cl_op_friend_req",7218)
setOpcode("mahjong_bc_successive_victory_not",7380)
setOpcode("mahjong_bc_cur_table_round_notf",21216)
// setOpcode("mahjong_cl_club_get_room_list_req",20125)
// setOpcode("mahjong_lc_match_perpare_notf",20026)
setOpcode("mahjong_cb_chat_req",7311)
setOpcode("mahjong_cb_check_relief_status_req",7384)
setOpcode("mahjong_cl_get_unread_msg_req",7224)
setOpcode("mahjong_bc_below_admission_limit_tip_not",7347)
// setOpcode("mahjong_lc_quit_sign_match_ack",20101)
setOpcode("mahjong_bc_give_gift_ack",7326)
setOpcode("mahjong_cl_get_rank_list_mj_req",20045)
setOpcode("mahjong_bc_leave_table_ack2",21217)
setOpcode("mahjong_cl_get_fetion_rank_list_req",7292)
setOpcode("mahjong_lc_get_user_accumulate_signin_award_ack",20161)
setOpcode("mahjong_cl_get_achieve_award_req",7212)
setOpcode("mahjong_bc_get_task_award_ack",7359)
// setOpcode("mahjong_cb_match_stage_config_req",21311)
// setOpcode("mahjong_bc_reset_match_ack",7333)
setOpcode("mahjong_cl_rp_check_relief_status_req",20142)
setOpcode("mahjong_cl_get_user_signin_days_ext_req",20108)
setOpcode("mahjong_lc_server_data_not",7204)
// setOpcode("mahjong_cl_get_private_game_log_req",20103)
setOpcode("mahjong_cb_force_dismiss_private_table_ack",21233)
// setOpcode("mahjong_lc_load_club_table_rule_ack",20171)
setOpcode("mahjong_bc_user_level_exp_update_notf",21213)
setOpcode("mahjong_lc_update_extra_login_award_not",7265)
setOpcode("mahjong_cb_get_table_list_req",7323)
setOpcode("mahjong_bc_kickout_ack",7337)
setOpcode("mahjong_lc_sync_item_data_notf",20008)
// setOpcode("mahjong_cl_match_reborn_req",20029)
setOpcode("mahjong_bc_use_spec_props_not",21204)
// setOpcode("mahjong_lc_get_match_sign_num_ack",20118)
setOpcode("mahjong_cb_get_luck_draw_record_req",7394)
setOpcode("mahjong_lc_check_relief_status_ack",7289)
setOpcode("mahjong_cl_get_merged_daily_task_award_req",20018)
setOpcode("mahjong_cb_get_rank_list_req",21247)
// setOpcode("mahjong_bc_match_survival_noti",21302)
// setOpcode("mahjong_lc_get_private_game_log_ack",20104)
setOpcode("mahjong_lc_reload_user_data_ack",7272)
setOpcode("mahjong_lc_modify_password_safe_ack",7254)
setOpcode("mahjong_cb_get_hook_status_req",21214)
// setOpcode("mahjong_cl_club_invite_to_game_req",20139)
// setOpcode("mahjong_bc_match_stage_award_noti",21314)
setOpcode("mahjong_lc_get_all_frd_feel_value_ack",7276)
// setOpcode("mahjong_bc_match_scores_not",21243)
// setOpcode("mahjong_cb_match_continue_req",21245)
setOpcode("mahjong_bc_leave_table_ack",7305)
setOpcode("mahjong_cl_continuous_landing_reward_data_req",20132)
setOpcode("mahjong_cl_get_achieve_list_req",7210)
// setOpcode("mahjong_lc_get_club_settting_ack",20147)
setOpcode("mahjong_cl_get_season_card_award_req",20200)
setOpcode("mahjong_cl_get_ply_current_rank_req",20051)
setOpcode("mahjong_cl_get_player_level_req",7266)
setOpcode("mahjong_cl_valid_identify_info_req",20081)
setOpcode("mahjong_cl_get_achieve_ext_list_req",7235)
setOpcode("mahjong_cb_get_mahjong_quick_daily_task_data_req",21218)
// setOpcode("mahjong_bc_get_match_data_ack",7329)
setOpcode("mahjong_lc_give_back_win_money_not",7274)
setOpcode("mahjong_cb_get_win_round_score_req",7366)
setOpcode("mahjong_lc_get_zzyk_award_ack",20043)
setOpcode("mahjong_lc_sys_feel_not",7273)
setOpcode("mahjong_cl_load_dwc_room_info_req",20150)
setOpcode("mahjong_bc_force_dismiss_private_table_not",21234)
setOpcode("mahjong_lc_spec_trumpet_not",7296)
// setOpcode("mahjong_cb_club_create_room_req",21310)
setOpcode("mahjong_cl_server_data_req",20021)
setOpcode("mahjong_lc_get_achieve_award_ack",7213)
setOpcode("mahjong_lc_auto_add_frd_not",7283)
setOpcode("mahjong_cl_get_private_game_data_list_req",20106)
// setOpcode("mahjong_cl_do_sign_match_req",20024)
setOpcode("mahjong_bc_force_dismiss_private_table_req",21232)
setOpcode("mahjong_lc_get_user_signin_award_info_ack",20005)
setOpcode("mahjong_bc_award_type_not",7354)
// setOpcode("mahjong_bc_match_weed_out_score_not",21253)
setOpcode("mahjong_lc_get_private_invite_info_ack",20084)
setOpcode("mahjong_cl_friend_approve_ack",7230)
setOpcode("mahjong_cb_get_spec_props_list_req",21200)
setOpcode("mahjong_bc_login_ack",7301)
// setOpcode("mahjong_lc_match_victor_noti",20131)
setOpcode("mahjong_lc_friend_approve_req",7229)
setOpcode("mahjong_lc_load_dwc_room_info_ack",20151)
// setOpcode("mahjong_lc_player_lost_per_match_notf",20047)
setOpcode("mahjong_cb_kickout_req",7336)
// setOpcode("mahjong_cl_get_club_settting_req",20146)
setOpcode("mahjong_lc_get_at_achieve_list_ack",20068)
setOpcode("mahjong_lc_get_user_already_login_days_ack",7282)
setOpcode("mahjong_lc_table_change_noti",20172)
setOpcode("mahjong_lc_get_game_config_ack",7242)
setOpcode("mahjong_cl_get_friend_list_req",7220)
setOpcode("mahjong_cl_get_zzyk_status_req",20040)
setOpcode("mahjong_cl_get_relief_req",7290)
// setOpcode("mahjong_cl_club_rule_change_noti",20179)
// setOpcode("mahjong_lc_dismiss_club_table_ack",20157)
setOpcode("mahjong_br_need_send_robot_not",7345)
// setOpcode("mahjong_cb_player_join_match_req",21100)
// setOpcode("mahjong_lc_match_result_notf",20031)
setOpcode("mahjong_bc_get_achieve_award_ack",7371)
setOpcode("mahjong_lc_set_ply_city_data_ack",20077)
setOpcode("mahjong_cb_get_relief_req",7386)
// setOpcode("mahjong_lc_club_change_setting_ack",20149)
setOpcode("mahjong_bc_get_assist_info_data_ack",7342)
// setOpcode("mahjong_bc_match_relive_noti",21282)
setOpcode("mahjong_cl_web_socket_shake_hand_req",7000)
// setOpcode("mahjong_lc_club_invite_to_game_noti",20141)
setOpcode("mahjong_lc_get_user_accumulate_signin_days_ack",20159)
// setOpcode("mahjong_cb_use_protocol_mahjong_req",21320)
// setOpcode("mahjong_bc_join_match_ack",21239)
setOpcode("mahjong_cb_use_spec_props_req",21202)
// setOpcode("mahjong_lc_match_begin_not",20099)
setOpcode("mahjong_lc_get_merged_daily_task_award_ack",20019)
setOpcode("mahjong_lc_item_config_not",20020)
setOpcode("mahjong_cl_get_user_accumulate_signin_award_req",20160)
setOpcode("mahjong_cl_get_miniGame_req",7261)
// setOpcode("mahjong_cb_match_relive_req",21283)
setOpcode("mahjong_cl_set_user_accumulate_signin_days_req",20162)
// setOpcode("mahjong_bc_match_sign_num_not",21242)
setOpcode("mahjong_lc_set_password_safe_ack",7248)
// setOpcode("mahjong_lc_dynamic_sign_get_match_sign_num_ack",20187)
// setOpcode("mahjong_bc_match_add_score_ack",21330)
setOpcode("mahjong_cl_player_signature_req",20059)
// setOpcode("mahjong_cb_club_create_room_more_game_req",21325)
setOpcode("mahjong_cl_remove_safe_amount_req",7251)
// setOpcode("mahjong_bc_dismiss_club_table_noti",21322)
setOpcode("mahjong_cl_get_player_game_list_req",20166)
setOpcode("mahjong_lc_get_player_game_list_ack",20167)
// setOpcode("mahjong_cl_set_club_create_table_rule_req",20168)
// setOpcode("mahjong_cl_load_club_table_rule_req",20170)
// setOpcode("mahjong_cl_dismiss_club_table_req",20156)
setOpcode("mahjong_cl_get_user_signin_days_req",20000)
setOpcode("mahjong_lc_get_turntable_login_award_config_ack",20056)
// setOpcode("mahjong_cb_apply_match_req",7330)
// setOpcode("mahjong_cb_get_match_data_req",7328)
setOpcode("mahjong_lc_synthesis_monkey_ack",20079)
// setOpcode("mahjong_cl_get_private_game_statistics_req",20085)
setOpcode("mahjong_bc_get_luck_draw_ack",7393)
// setOpcode("mahjong_lc_club_member_info_change_noti",20124)
setOpcode("mahjong_bc_get_luck_draw_record_ack",7395)
setOpcode("mahjong_lc_get_miniGame_ack",7262)
// setOpcode("mahjong_cb_reset_match_req",7332)
// setOpcode("mahjong_cb_get_private_invite_req",21249)
setOpcode("mahjong_bc_get_all_dila_ack",21212)
setOpcode("mahjong_lc_get_extra_relief_list_ack",20191)
setOpcode("mahjong_bc_do_tip_dila_ack",21209)
setOpcode("mahjong_bc_change_table_req",7310)
// setOpcode("mahjong_cl_club_create_table_req",20173)
// setOpcode("mahjong_cl_club_get_room_property_req",20177)
// setOpcode("mahjong_lc_match_player_num_not",20102)
// setOpcode("mahjong_bc_match_stage_config_ack",21312)
setOpcode("mahjong_lc_store_safe_amount_ack",7250)
setOpcode("mahjong_cl_send_friend_msg_req",7222)
// setOpcode("mahjong_bc_match_rank_not",21240)
setOpcode("mahjong_cl_get_serverdata_by_serverid_req",20063)
setOpcode("mahjong_lc_get_private_game_data_list_ack",20107)
setOpcode("mahjong_cl_update_player_marriage_req",7279)
setOpcode("mahjong_cb_create_table_req",7321)
setOpcode("mahjong_lc_player_signature_ack",20060)
setOpcode("mahjong_bc_get_mahjong_quick_daily_task_data_ack",21219)
setOpcode("mahjong_lc_friend_loginout_tip_not",7240)
setOpcode("mahjong_lc_get_merged_daily_task_data_ack",20017)
setOpcode("mahjong_lc_get_serverdata_by_serverid_ack",20064)
setOpcode("mahjong_lc_set_user_accumulate_signin_days_ack",20163)
// setOpcode("mahjong_cl_get_match_sign_count_req",20049)
setOpcode("mahjong_bc_get_streak_task_ack",7389)
setOpcode("mahjong_lc_get_achieve_list_ack",7211)
setOpcode("mahjong_cl_get_online_rank_list_mj_req",20061)
// setOpcode("mahjong_lc_club_get_limit_group_list_ack",20181)
// setOpcode("mahjong_lc_club_updata_limit_group_list_ack",20183)
setOpcode("mahjong_cb_get_daily_task_award_req",7381)
setOpcode("mahjong_cl_active_game_server_info_req",20164)
setOpcode("mahjong_cb_get_finished_newbie_award_req",7396)
setOpcode("mahjong_lc_spec_trumpet_ack",7295)
setOpcode("mahjong_cb_get_luck_draw_req",7392)
// // setOpcode("mahjong_cl_club_get_club_limit_group_list_req",20184)
setOpcode("mahjong_bc_chat_not",7312)
// setOpcode("mahjong_cl_get_private_room_data_req",20087)
// setOpcode("mahjong_cl_get_private_room_rebate_award_req",20091)
setOpcode("mahjong_cl_get_merged_daily_task_data_req",20016)
setOpcode("mahjong_lc_get_relief_ack",7291)
setOpcode("mahjong_cb_change_table_req",7313)
setOpcode("mahjong_cl_get_win_round_score_req",7268)
setOpcode("mahjong_cl_set_user_signin_days_req",20002)
// // setOpcode("mahjong_cl_club_get_club_list_req",20120)
setOpcode("mahjong_lc_trumpet_by_type_not",20073)
setOpcode("mahjong_lc_get_rank_list_mj_ack",20046)
// setOpcode("mahjong_lc_match_reborn_ack",20030)
setOpcode("mahjong_cb_update_big_card_user_info_req",7390)
setOpcode("mahjong_bc_update_dila_notf",21205)
setOpcode("mahjong_lc_get_dynamic_award_rank_ack",20189)
setOpcode("mahjong_lc_set_user_signin_days_ack",20003)
setOpcode("mahjong_cl_get_mail_info_req",20152)
setOpcode("mahjong_cb_send_prop_req",7338)
setOpcode("mahjong_cl_reload_user_data_req",7271)
// setOpcode("mahjong_cl_get_private_room_log_data_req",20089)
setOpcode("mahjong_bc_dismiss_private_result_not",21250)
// setOpcode("mahjong_bc_match_stage_message_noti",21313)
setOpcode("mahjong_lc_remove_safe_amount_ack",7252)
// setOpcode("mahjong_lc_wawaji_list_refresh_not",20119)
// setOpcode("mahjong_lc_club_create_table_ack",20174)
setOpcode("mahjong_bc_round_award_items_not",7350)
setOpcode("mahjong_bc_ply_leave_not",7307)
setOpcode("mahjong_lc_user_data_broadcast_msg_not",7270)
// setOpcode("mahjong_lc_match_round_end_notf",20032)
setOpcode("mahjong_cl_get_rank_list_req",7208)
setOpcode("mahjong_cb_dismiss_private_table_req",21230)
setOpcode("mahjong_bc_update_ply_data_not",7318)
// setOpcode("mahjong_lc_club_get_member_list_ack",20123)
setOpcode("mahjong_cl_get_ply_city_data_req",20074)
setOpcode("mahjong_cl_get_extra_relief_award_req",20194)
setOpcode("mahjong_cl_trumpet_by_type_req",20071)
setOpcode("mahjong_cl_get_turntable_login_award_req",20057)
setOpcode("mahjong_bc_update_big_card_user_info_ack",7391)
// setOpcode("mahjong_lc_match_require_info_ack",20036)
// setOpcode("mahjong_lc_set_club_create_table_rule_ack",20169)
// setOpcode("mahjong_lc_do_sign_match_ack",20025)
setOpcode("mahjong_bc_rematch_notf",21102)
// setOpcode("mahjong_lc_get_match_rank_ack",20039)
// setOpcode("mahjong_lc_club_get_room_property_ack",20178)
// setOpcode("mahjong_cl_dynamic_sign_get_match_sign_num_req",20186)
setOpcode("mahjong_lc_get_user_level_desc_ack",20066)
setOpcode("mahjong_cl_get_zzyk_award_req",20042)
setOpcode("mahjong_lc_get_extra_relief_award_ack",20195)
setOpcode("mahjong_bc_web_socket_shake_hand_ack",6901)
setOpcode("mahjong_lc_active_game_server_info_ack",20165)
setOpcode("mahjong_bc_get_hook_status_ack",21215)
setOpcode("mahjong_lc_get_season_card_status_ack",20199)
setOpcode("mahjong_lc_end_chat_ack",7278)
setOpcode("mahjong_cb_login_req",7300)
setOpcode("mahjong_lc_get_ply_status_ack",7207)
setOpcode("mahjong_bc_get_rank_list_ack",21248)
setOpcode("mahjong_cl_get_private_game_replay_req",20112)
setOpcode("mahjong_lc_get_player_level_ack",7267)
setOpcode("mahjong_bc_ply_join_not",7306)
setOpcode("mahjong_cl_get_at_achieve_list_req",20067)
setOpcode("mahjong_cb_ready_req",7308)
setOpcode("mahjong_cl_update_extra_relief_status_req",20192)
setOpcode("mahjong_bc_ready_not",7309)
// setOpcode("mahjong_cl_sign_flow_match_req",20196)
setOpcode("mahjong_cl_get_user_signin_award_req",20006)
setOpcode("mahjong_cl_get_safe_data_req",7257)
setOpcode("mahjong_lc_get_safe_data_ack",7258)
setOpcode("mahjong_bc_get_achieve_list_ack",7369)
setOpcode("mahjong_cb_get_online_award_req",7315)
setOpcode("mahjong_cl_get_game_config_req",7241)
setOpcode("mahjong_lc_op_friend_ack",7219)
// setOpcode("mahjong_lc_club_get_room_list_by_rule_ack",20176)
// setOpcode("mahjong_cb_match_add_score_req",21329)
setOpcode("mahjong_bc_get_win_round_score_ack",7367)
// setOpcode("mahjong_bc_match_survival_award_noti",21303)
setOpcode("mahjong_cl_send_ply_position_info_req",7231)
setOpcode("mahjong_bc_create_table_ack",7322)
setOpcode("mahjong_cl_check_relief_status_req",7288)
setOpcode("mahjong_cl_set_ply_city_data_req",20076)
setOpcode("mahjong_cb_get_table_list_req2",7334)
setOpcode("mahjong_bc_get_table_list_ack2",7335)
setOpcode("mahjong_lc_web_socket_shake_hand_ack",7001)
setOpcode("mahjong_lc_get_continuous_game_award_ack",7260)
// setOpcode("mahjong_lc_club_user_data_noti",20129)
setOpcode("mahjong_cl_get_dynamic_award_rank_req",20188)
setOpcode("mahjong_bc_private_invite_code_not",21226)
setOpcode("mahjong_bc_send_prop_not",7340)
// setOpcode("mahjong_lc_match_round_avoid_notf",20027)
// setOpcode("mahjong_lc_private_card_index_not",20105)
setOpcode("mahjong_lc_trumpet_by_type_ack",20072)
// setOpcode("mahjong_cl_club_updata_limit_group_list_req",20182)
setOpcode("mahjong_cl_get_continuous_game_award_req",7259)
setOpcode("mahjong_bc_integal_condition_noti",7343)
// setOpcode("mahjong_lc_club_get_room_list_ack",20126)
setOpcode("mahjong_cl_get_user_good_card_req",20010)
setOpcode("mahjong_bc_common_award_not",7365)
setOpcode("mahjong_bc_get_task_system_ack",7357)
// setOpcode("mahjong_lc_get_match_sign_count_ack",20050)
setOpcode("mahjong_cl_get_server_status_req",7286)
setOpcode("mahjong_cb_get_task_award_req",7358)
// setOpcode("mahjong_bc_match_update_achiev_noti",21323)
setOpcode("mahjong_cl_get_user_already_login_days_req",7281)
setOpcode("mahjong_bc_item_update_not",7360)
setOpcode("mahjong_bc_get_player_level_ack",7362)
setOpcode("mahjong_bc_recharge_tip_not",7348)
setOpcode("mahjong_lc_login_online_data_not",20080)
setOpcode("mahjong_lc_get_zzyk_status_ack",20041)
setOpcode("mahjong_bc_game_get_score_noti",21319)
setOpcode("mahjong_cb_get_streak_task_req",7388)
setOpcode("mahjong_cb_get_achieve_list_req",7368)
setOpcode("mahjong_bc_get_daily_task_award_ack",7382)
setOpcode("mahjong_cl_get_total_game_round_req",20022)
setOpcode("mahjong_cb_get_achieve_award_req",7370)
setOpcode("mahjong_lc_rp_check_relief_status_ack",20143)
setOpcode("mahjong_bc_get_daily_task_award_not",7379)
// setOpcode("mahjong_lc_get_private_room_rebate_award_ack",20092)
setOpcode("mahjong_cl_set_password_safe_req",7247)
setOpcode("mahjong_cb_get_mahjong_quick_daily_task_award_req",21220)
// setOpcode("mahjong_bc_match_table_by_marriage_ack",7378)
setOpcode("mahjong_cl_get_three_draw_data_req",20095)
setOpcode("mahjong_lc_get_server_status_not",20044)
setOpcode("mahjong_cl_get_season_card_status_req",20198)
setOpcode("mahjong_bc_get_luck_draw_data_list_ack",7399)
// setOpcode("mahjong_bc_match_transfer_server_noti",21260)
// // setOpcode("mahjong_cb_match_join_flow_match_req",21335)
setOpcode("mahjong_lc_send_ply_position_info_ack",7232)
// // setOpcode("mahjong_lc_club_get_club_limit_group_list_ack",20185)
// setOpcode("mahjong_cl_match_require_info_req",20035)
setOpcode("mahjong_bc_ready_ack",7383)
setOpcode("mahjong_lc_update_extra_relief_status_ack",20193)
setOpcode("mahjong_bc_cli_timer_not",7319)
// setOpcode("mahjong_lc_get_private_game_statistics_ack",20086)
// setOpcode("mahjong_lc_get_private_room_log_data_ack",20090)
// setOpcode("mahjong_lc_sign_flow_match_ack",20197)
// setOpcode("mahjong_cl_get_match_rank_req",20038)
setOpcode("mahjong_lc_get_assist_info_data_ack",7244)
setOpcode("mahjong_lc_continuous_landing_get_reward_ack",20135)
setOpcode("mahjong_bc_win_lose_limit_exceed_not",21244)
setOpcode("mahjong_lc_get_mail_info_ack",20153)
setOpcode("mahjong_cl_get_assist_info_data_req",7243)
setOpcode("mahjong_cb_ply_place_not",7317)
// setOpcode("mahjong_lc_get_private_room_data_ack",20088)
setOpcode("mahjong_cl_get_at_achieve_award_req",20069)
// setOpcode("mahjong_cl_club_change_setting_req",20148)
// setOpcode("mahjong_cb_join_match_req",21238)
setOpcode("mahjong_bc_specify_item_update_not",21285)
// setOpcode("mahjong_lc_sign_match_ack",20098)
setOpcode("mahjong_cl_get_miniGame_by_id_req",20053)
// setOpcode("mahjong_bc_player_join_match_ack",21101)
setOpcode("mahjong_cl_get_position_info_req",7233)
setOpcode("mahjong_cb_user_join_table_req",21236)
setOpcode("mahjong_cb_get_luck_draw_data_list_req",7398)
setOpcode("mahjong_lc_continuous_landing_reward_data_ack",20133)
setOpcode("mahjong_bc_coupon_not",7344)
// setOpcode("mahjong_cl_use_protocol_mahjong_req",20154)
setOpcode("mahjong_cb_give_back_win_money_req",7373)
setOpcode("mahjong_cb_give_gift_req",7325)
setOpcode("mahjong_cl_get_extra_relief_list_req",20190)
setOpcode("mahjong_bc_dismiss_private_table_ack",21231)
setOpcode("mahjong_lc_get_user_signin_days_ext_ack",20109)
setOpcode("mahjong_cb_get_player_feel_value_req",7375)
setOpcode("mahjong_cl_get_user_accumulate_signin_days_req",20158)
setOpcode("mahjong_bc_check_relief_status_ack",7385)
setOpcode("mahjong_lc_get_miniGame_by_id_ack",20054)
setOpcode("mahjong_lc_get_daily_task_list_ack",7226)
// setOpcode("mahjong_lc_club_room_change_noit",20127)

// console.log(opcodeDefine)

export default function opcodeConfig(obj : String | Number) {   
    if (typeof obj == "string")
        return opcodeDefine[obj as string]
    else if (typeof obj == "number")
        return opcodeReverse[obj as number]
   
    return null        
}
