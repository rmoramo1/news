const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			logos_nfl: [],
			logos_nba: [],
			injuries: [],
			futures: [],
			props: [
				{
					"away": "-",
					"date": "2",
					"feature": "-",
					"home": "-",
					"id": 1,
					"line": "-",
					"sport": "F",
					"title": "-",
					"type_prop": "-"
				}
			],
			nfl: [
				{
					"away": "-",
					"casino": "-",
					"date": "-",
					"fh_juice_total_over": "-",
					"fh_juice_total_under": "-",
					"final_score_away": "-",
					"final_score_home": "-",
					"first_half_final_score_away": "-",
					"first_half_final_score_home": "-",
					"first_half_juice_over_away": "-",
					"first_half_juice_over_home": "-",
					"first_half_juice_spread_away": "-",
					"first_half_juice_spread_home": "-",
					"first_half_juice_under_away": "-",
					"first_half_juice_under_home": "-",
					"first_half_moneyLineAway": "-",
					"first_half_moneyLineHome": "-",
					"first_half_spread_away": "-",
					"first_half_spread_home": "-",
					"first_half_total": "-",
					"first_half_tt_away": "-",
					"first_half_tt_home": "-",
					"home": "Washington",
					"hour": "-",
					"id": 1,
					"juice_over_away": "-",
					"juice_over_home": "-",
					"juice_spread_away": "-",
					"juice_spread_home": "-",
					"juice_total_over": "-",
					"juice_total_under": "-",
					"juice_under_away": "-",
					"juice_under_home": "-",
					"moneyLineAway": "-",
					"moneyLineHome": "-",
					"q1_half_final_score_away": "-",
					"q1_half_final_score_home": "-",
					"q1_half_juice_over_away": "-",
					"q1_half_juice_over_home": "-",
					"q1_half_juice_spread_away": "-",
					"q1_half_juice_spread_home": "-",
					"q1_half_juice_under_away": "-",
					"q1_half_juice_under_home": "-",
					"q1_half_moneyLineAway": "-",
					"q1_half_moneyLineHome": "-",
					"q1_half_spread_away": "-",
					"q1_half_spread_home": "-",
					"q1_half_total": "-",
					"q1_half_tt_away": "-",
					"q1_half_tt_home": "-",
					"q1_juice_over": "-",
					"q1_juice_under": "-",
					"q2_half_final_score_away": "-",
					"q2_half_final_score_home": "-",
					"q2_half_juice_over_away": "-",
					"q2_half_juice_over_home": "-",
					"q2_half_juice_spread_away": "-",
					"q2_half_juice_spread_home": "-",
					"q2_half_juice_under_away": "-",
					"q2_half_juice_under_home": "-",
					"q2_half_moneyLineAway": "-",
					"q2_half_moneyLineHome": "-",
					"q2_half_spread_away": "-",
					"q2_half_spread_home": "-",
					"q2_half_total": "-",
					"q2_half_tt_away": "-",
					"q2_half_tt_home": "-",
					"q2_juice_over": "-",
					"q2_juice_under": "-",
					"q3_half_final_score_away": "-",
					"q3_half_final_score_home": "-",
					"q3_half_juice_over_away": "-",
					"q3_half_juice_over_home": "-",
					"q3_half_juice_spread_away": "-",
					"q3_half_juice_spread_home": "-",
					"q3_half_juice_under_away": "-",
					"q3_half_juice_under_home": "-",
					"q3_half_moneyLineAway": "-",
					"q3_half_moneyLineHome": "-",
					"q3_half_spread_away": "-",
					"q3_half_spread_home": "-",
					"q3_half_total": "-",
					"q3_half_tt_away": "-",
					"q3_half_tt_home": "-",
					"q3_juice_over": "-",
					"q3_juice_under": "-",
					"q4_half_final_score_away": "-",
					"q4_half_final_score_home": "-",
					"q4_half_juice_over_away": "-",
					"q4_half_juice_over_home": "-",
					"q4_half_juice_spread_away": "-",
					"q4_half_juice_spread_home": "-",
					"q4_half_juice_under_away": "-",
					"q4_half_juice_under_home": "-",
					"q4_half_moneyLineAway": "-",
					"q4_half_moneyLineHome": "-",
					"q4_half_spread_away": "-",
					"q4_half_spread_home": "-",
					"q4_half_total": "-",
					"q4_half_tt_away": "-",
					"q4_half_tt_home": "-",
					"q4_juice_over": "-",
					"q4_juice_under": "-",
					"rotation_away": "-",
					"rotation_home": "-",
					"second_half_final_score_away": "-",
					"second_half_final_score_home": "-",
					"second_half_juice_over_away": "-",
					"second_half_juice_over_home": "-",
					"second_half_juice_spread_away": "-",
					"second_half_juice_spread_home": "-",
					"second_half_juice_under_away": "-",
					"second_half_juice_under_home": "-",
					"second_half_moneyLineAway": "-",
					"second_half_moneyLineHome": "-",
					"second_half_spread_away": "-",
					"second_half_spread_home": "-",
					"second_half_total": "-",
					"second_half_tt_away": "-",
					"second_half_tt_home": "-",
					"sh_juice_total_over": "-",
					"sh_juice_total_under": "-",
					"spread_away": "-",
					"spread_home": "-",
					"status": "-",
					"total": "-",
					"tt_away": "-",
					"tt_home": "-",
					"week": "-"
				}
			],
			nfl_team_stats: [
				{
					"AVG_intercept_y": "-",
					"AVG_kickoff_return_y": "-",
					"AVG_punt_ruturn_y": "-",
					"Russ_1_d": "-",
					"TP": "-",
					"comp_att": "-",
					"conference": "-",
					"division": "-",
					"down_1_penal": "-",
					"down_3_AVG": "-",
					"down_3_eff": "-",
					"down_4_AVG": "-",
					"down_4_eff": "-",
					"fg_goog_attps": "-",
					"fumbles_lost": "-",
					"id": 1,
					"int_t": "-",
					"interceptions": "-",
					"kickoffs_t": "-",
					"net_AVG_punt_y": "-",
					"net_pass_y": "-",
					"net_pass_y_pg": "-",
					"pass_1_d": "-",
					"pass_td": "-",
					"penal_ty": "-",
					"penal_y_AVG_pg": "-",
					"possesion_time": "-",
					"punt_t": "-",
					"punt_ty": "-",
					"russ_attps": "-",
					"russ_td": "-",
					"russ_y": "-",
					"russ_y_pg": "-",
					"sacks_y_lost": "-",
					"season": "-",
					"season_type": "-",
					"t_1_down": "-",
					"t_td": "-",
					"team": "-",
					"total_of_plays": "-",
					"total_y": "-",
					"touchback_percent": "-",
					"ttpg": "-",
					"turnover_ratio": "-",
					"y_p_pas_attps": "-",
					"y_p_russ_attp": "-",
					"y_pg": "-"
				}
			],
			nfl_player_offensive_stats: [
				{
					"Cmp": "-",
					"Int": "-",
					"asck": "-",
					"big": "-",
					"birth": "-",
					"cmp_AVG": "-",
					"dorsal": "-",
					"fd": "-",
					"fum": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 6,
					"lr": "-",
					"lst": "-",
					"name": "-",
					"pass_att": "-",
					"pass_td": "-",
					"position": "-",
					"pts": "-",
					"r_big": "-",
					"r_fd": "-",
					"r_fl": "-",
					"r_td": "-",
					"r_tgts": "-",
					"r_yac": "-",
					"r_yards": "-",
					"r_ypg": "-",
					"rec": "-",
					"rtg": "-",
					"rush_tt": "-",
					"rush_yard_pg": "-",
					"russ_att": "-",
					"russ_yards": "-",
					"season": "-",
					"syl": "-",
					"team": "-",
					"weight": "-",
					"yards": "-",
					"yards_AVG": "-",
					"yards_p_r": "-",
					"yards_p_russ": "-",
					"yards_pg": "-"
				}
			],
			nfl_player_deffensive_stats: [
				{
					"Int": "-",
					"birth": "-",
					"dorsal": "-",
					"ff": "-",
					"fr": "-",
					"ftd": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 3,
					"ing": "-",
					"kb": "-",
					"name": "-",
					"pd": "-",
					"position": "-",
					"sacks": "-",
					"sacks_yards": "-",
					"season": "-",
					"tack_ast": "-",
					"tack_solo": "-",
					"tack_total": "-",
					"td": "-",
					"team": "-",
					"tfl": "-",
					"weight": "-",
					"yds": "-"
				}
			],
			nfl_player_returning_stats: [
				{
					"birth": "-",
					"dorsal": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 1,
					"k_r_td": "-",
					"kick_returns": "-",
					"kick_returns_yards": "-",
					"l_k_r": "-",
					"lpr": "-",
					"name": "Roy Mora",
					"position": "-",
					"pr_td": "-",
					"punt_r": "-",
					"punt_r_fair_carches": "-",
					"punt_r_y": "-",
					"season": "-",
					"team": "-",
					"weight": "-",
					"y_ppr": "-",
					"yards_p_k_p": "-"
				}
			],
			nfl_player_punting_stats: [
				{
					"AVG": "-",
					"AVG_punt_retun_yards": "-",
					"IN_20": "-",
					"att": "-",
					"birth": "-",
					"dorsal": "-",
					"fc": "-",
					"games": "-",
					"headshot": "-",
					"height": "https://i.postimg.cc/09bnr20R/avatar.png",
					"id": 1,
					"lng": "-",
					"name": "-",
					"net": "-",
					"p_blk": "-",
					"position": "-",
					"punt_return_yds": "-",
					"punts": "-",
					"season": "-",
					"tb": "-",
					"team": "-",
					"weight": "-",
					"yards": "-"
				}
			],
			nfl_player_kicking_stats: [
				{
					"birth": "-",
					"dorsal": "-",
					"fg_AVG": "-",
					"fga": "-",
					"fgm": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 1,
					"lng": "-",
					"more_50": "-",
					"name": "-",
					"position": "-",
					"season": "-",
					"team": "-",
					"weight": "-",
					"xp_AVG": "-",
					"xpa": "-",
					"xpm": "-",
					"yars_f_goals__9": "-",
					"yars_f_goals_20_29": "-",
					"yars_f_goals_30_49": "-",
					"yars_f_goals_40_49": "-"
				}
			],
			//ncaa_football_team
			ncaa_football: [
				{
					"away": "-",
					"casino": "-",
					"date": "-",
					"fh_juice_total_over": "-",
					"fh_juice_total_under": "-",
					"final_score_away": "-",
					"final_score_home": "-",
					"first_half_final_score_away": "-",
					"first_half_final_score_home": "-",
					"first_half_juice_over_away": "-",
					"first_half_juice_over_home": "-",
					"first_half_juice_spread_away": "-",
					"first_half_juice_spread_home": "-",
					"first_half_juice_under_away": "-",
					"first_half_juice_under_home": "-",
					"first_half_moneyLineAway": "-",
					"first_half_moneyLineHome": "-",
					"first_half_spread_away": "-",
					"first_half_spread_home": "-",
					"first_half_total": "-",
					"first_half_tt_away": "-",
					"first_half_tt_home": "-",
					"home": "Washington",
					"hour": "-",
					"id": 1,
					"juice_over_away": "-",
					"juice_over_home": "-",
					"juice_spread_away": "-",
					"juice_spread_home": "-",
					"juice_total_over": "-",
					"juice_total_under": "-",
					"juice_under_away": "-",
					"juice_under_home": "-",
					"moneyLineAway": "-",
					"moneyLineHome": "-",
					"q1_half_final_score_away": "-",
					"q1_half_final_score_home": "-",
					"q1_half_juice_over_away": "-",
					"q1_half_juice_over_home": "-",
					"q1_half_juice_spread_away": "-",
					"q1_half_juice_spread_home": "-",
					"q1_half_juice_under_away": "-",
					"q1_half_juice_under_home": "-",
					"q1_half_moneyLineAway": "-",
					"q1_half_moneyLineHome": "-",
					"q1_half_spread_away": "-",
					"q1_half_spread_home": "-",
					"q1_half_total": "-",
					"q1_half_tt_away": "-",
					"q1_half_tt_home": "-",
					"q1_juice_over": "-",
					"q1_juice_under": "-",
					"q2_half_final_score_away": "-",
					"q2_half_final_score_home": "-",
					"q2_half_juice_over_away": "-",
					"q2_half_juice_over_home": "-",
					"q2_half_juice_spread_away": "-",
					"q2_half_juice_spread_home": "-",
					"q2_half_juice_under_away": "-",
					"q2_half_juice_under_home": "-",
					"q2_half_moneyLineAway": "-",
					"q2_half_moneyLineHome": "-",
					"q2_half_spread_away": "-",
					"q2_half_spread_home": "-",
					"q2_half_total": "-",
					"q2_half_tt_away": "-",
					"q2_half_tt_home": "-",
					"q2_juice_over": "-",
					"q2_juice_under": "-",
					"q3_half_final_score_away": "-",
					"q3_half_final_score_home": "-",
					"q3_half_juice_over_away": "-",
					"q3_half_juice_over_home": "-",
					"q3_half_juice_spread_away": "-",
					"q3_half_juice_spread_home": "-",
					"q3_half_juice_under_away": "-",
					"q3_half_juice_under_home": "-",
					"q3_half_moneyLineAway": "-",
					"q3_half_moneyLineHome": "-",
					"q3_half_spread_away": "-",
					"q3_half_spread_home": "-",
					"q3_half_total": "-",
					"q3_half_tt_away": "-",
					"q3_half_tt_home": "-",
					"q3_juice_over": "-",
					"q3_juice_under": "-",
					"q4_half_final_score_away": "-",
					"q4_half_final_score_home": "-",
					"q4_half_juice_over_away": "-",
					"q4_half_juice_over_home": "-",
					"q4_half_juice_spread_away": "-",
					"q4_half_juice_spread_home": "-",
					"q4_half_juice_under_away": "-",
					"q4_half_juice_under_home": "-",
					"q4_half_moneyLineAway": "-",
					"q4_half_moneyLineHome": "-",
					"q4_half_spread_away": "-",
					"q4_half_spread_home": "-",
					"q4_half_total": "-",
					"q4_half_tt_away": "-",
					"q4_half_tt_home": "-",
					"q4_juice_over": "-",
					"q4_juice_under": "-",
					"rotation_away": "-",
					"rotation_home": "-",
					"second_half_final_score_away": "-",
					"second_half_final_score_home": "-",
					"second_half_juice_over_away": "-",
					"second_half_juice_over_home": "-",
					"second_half_juice_spread_away": "-",
					"second_half_juice_spread_home": "-",
					"second_half_juice_under_away": "-",
					"second_half_juice_under_home": "-",
					"second_half_moneyLineAway": "-",
					"second_half_moneyLineHome": "-",
					"second_half_spread_away": "-",
					"second_half_spread_home": "-",
					"second_half_total": "-",
					"second_half_tt_away": "-",
					"second_half_tt_home": "-",
					"sh_juice_total_over": "-",
					"sh_juice_total_under": "-",
					"spread_away": "-",
					"spread_home": "-",
					"status": "-",
					"total": "-",
					"tt_away": "-",
					"tt_home": "-",
					"week": "-"
				}
			],
			stats_ncaa_football_team:[
				{
					"AVG_intercept_y": "-", 
					"AVG_kickoff_return_y": "-", 
					"AVG_punt_ruturn_y": "-", 
					"Russ_1_d": "-", 
					"TP": "-", 
					"comp_att": "-", 
					"conference": "-", 
					"division": "Atlantic", 
					"down_1_penal": "-", 
					"down_3_AVG": "-", 
					"down_3_eff": "-", 
					"down_4_AVG": "-", 
					"down_4_eff": "-", 
					"fg_goog_attps": "-", 
					"fumbles_lost": "-", 
					"id": 1, 
					"int_t": "-", 
					"interceptions": "-", 
					"kickoffs_t": "-", 
					"net_AVG_punt_y": "-", 
					"net_pass_y": "-", 
					"net_pass_y_pg": "-", 
					"pass_1_d": "-", 
					"pass_td": "-", 
					"penal_ty": "-", 
					"penal_y_AVG_pg": "-", 
					"possesion_time": "-", 
					"punt_t": "-", 
					"punt_ty": "-", 
					"russ_attps": "-", 
					"russ_td": "-", 
					"russ_y": "-", 
					"russ_y_pg": "-", 
					"sacks_y_lost": "-", 
					"season": "-", 
					"t_1_down": "-", 
					"t_td": "-", 
					"team": "-", 
					"total_of_plays": "-", 
					"total_y": "-", 
					"touchback_percent": "-", 
					"ttpg": "-", 
					"turnover_ratio": "-", 
					"y_p_pas_attps": "-", 
					"y_p_russ_attp": "-", 
					"y_pg": "-"
				  }
			],
			stats_offensive_player_ncaa_football: [
				{
					"Cmp": "-",
					"Int": "-",
					"asck": "-",
					"big": "-",
					"birth": "-",
					"cmp_AVG": "-",
					"dorsal": "-",
					"fd": "-",
					"fum": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 6,
					"lr": "-",
					"lst": "-",
					"name": "-",
					"pass_att": "-",
					"pass_td": "-",
					"position": "-",
					"pts": "-",
					"r_big": "-",
					"r_fd": "-",
					"r_fl": "-",
					"r_td": "-",
					"r_tgts": "-",
					"r_yac": "-",
					"r_yards": "-",
					"r_ypg": "-",
					"rec": "-",
					"rtg": "-",
					"rush_tt": "-",
					"rush_yard_pg": "-",
					"russ_att": "-",
					"russ_yards": "-",
					"season": "-",
					"syl": "-",
					"team": "-",
					"weight": "-",
					"yards": "-",
					"yards_AVG": "-",
					"yards_p_r": "-",
					"yards_p_russ": "-",
					"yards_pg": "-"
				}
			],
			stats_defensive_player_ncca_football: [
				{
					"Int": "-",
					"birth": "-",
					"dorsal": "-",
					"ff": "-",
					"fr": "-",
					"ftd": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 3,
					"ing": "-",
					"kb": "-",
					"name": "-",
					"pd": "-",
					"position": "-",
					"sacks": "-",
					"sacks_yards": "-",
					"season": "-",
					"tack_ast": "-",
					"tack_solo": "-",
					"tack_total": "-",
					"td": "-",
					"team": "-",
					"tfl": "-",
					"weight": "-",
					"yds": "-"
				}
			],
			stats_returning_player_ncaa_football: [
				{
					"birth": "-",
					"dorsal": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 1,
					"k_r_td": "-",
					"kick_returns": "-",
					"kick_returns_yards": "-",
					"l_k_r": "-",
					"lpr": "-",
					"name": "Roy Mora",
					"position": "-",
					"pr_td": "-",
					"punt_r": "-",
					"punt_r_fair_carches": "-",
					"punt_r_y": "-",
					"season": "-",
					"team": "-",
					"weight": "-",
					"y_ppr": "-",
					"yards_p_k_p": "-"
				}
			],
			stats_punting_player_ncaa_football: [
				{
					"AVG": "-",
					"AVG_punt_retun_yards": "-",
					"IN_20": "-",
					"att": "-",
					"birth": "-",
					"dorsal": "-",
					"fc": "-",
					"games": "-",
					"headshot": "-",
					"height": "https://i.postimg.cc/09bnr20R/avatar.png",
					"id": 1,
					"lng": "-",
					"name": "-",
					"net": "-",
					"p_blk": "-",
					"position": "-",
					"punt_return_yds": "-",
					"punts": "-",
					"season": "-",
					"tb": "-",
					"team": "-",
					"weight": "-",
					"yards": "-"
				}
			],
			stats_kiking_player_ncaa_football: [
				{
					"birth": "-",
					"dorsal": "-",
					"fg_AVG": "-",
					"fga": "-",
					"fgm": "-",
					"games": "-",
					"headshot": "https://i.postimg.cc/09bnr20R/avatar.png",
					"height": "-",
					"id": 1,
					"lng": "-",
					"more_50": "-",
					"name": "-",
					"position": "-",
					"season": "-",
					"team": "-",
					"weight": "-",
					"xp_AVG": "-",
					"xpa": "-",
					"xpm": "-",
					"yars_f_goals__9": "-",
					"yars_f_goals_20_29": "-",
					"yars_f_goals_30_49": "-",
					"yars_f_goals_40_49": "-"
				}
			],
			//nba
			nba_games:[
				{
					"away": "-", 
					"casino": "-", 
					"date": "-", 
					"fh_juice_total_over": "-", 
					"fh_juice_total_under": "-", 
					"final_score_away": "-", 
					"final_score_home": "-", 
					"first_half_final_score_away": "-", 
					"first_half_final_score_home": "-", 
					"first_half_juice_over_away": "-", 
					"first_half_juice_over_home": "-", 
					"first_half_juice_spread_away": "-", 
					"first_half_juice_spread_home": "-", 
					"first_half_juice_under_away": "-", 
					"first_half_juice_under_home": "-", 
					"first_half_moneyLineAway": "-", 
					"first_half_moneyLineHome": "-", 
					"first_half_spread_away": "-", 
					"first_half_spread_home": "-", 
					"first_half_total": "-", 
					"first_half_tt_away": "-", 
					"first_half_tt_home": "-", 
					"home": "Dallas Mavericks", 
					"hour": "19:30", 
					"id": 6, 
					"juice_over_away": "-115", 
					"juice_over_home": "-115", 
					"juice_spread_away": "-", 
					"juice_spread_home": "-", 
					"juice_total_over": "-", 
					"juice_total_under": "-", 
					"juice_under_away": "-115", 
					"juice_under_home": "-115", 
					"moneyLineAway": "-150", 
					"moneyLineHome": "+130", 
					"q1_half_final_score_away": "-", 
					"q1_half_final_score_home": "-", 
					"q1_half_juice_over_away": "-", 
					"q1_half_juice_over_home": "-", 
					"q1_half_juice_spread_away": "-", 
					"q1_half_juice_spread_home": "-", 
					"q1_half_juice_under_away": "-", 
					"q1_half_juice_under_home": "-", 
					"q1_half_moneyLineAway": "-", 
					"q1_half_moneyLineHome": "-", 
					"q1_half_spread_away": "-", 
					"q1_half_spread_home": "-", 
					"q1_half_total": "-", 
					"q1_half_tt_away": "-", 
					"q1_half_tt_home": "-", 
					"q1_juice_over": "-", 
					"q1_juice_under": "-", 
					"q2_half_final_score_away": "-", 
					"q2_half_final_score_home": "-", 
					"q2_half_juice_over_away": "-", 
					"q2_half_juice_over_home": "-", 
					"q2_half_juice_spread_away": "-", 
					"q2_half_juice_spread_home": "-", 
					"q2_half_juice_under_away": "-", 
					"q2_half_juice_under_home": "-", 
					"q2_half_moneyLineAway": "-", 
					"q2_half_moneyLineHome": "-", 
					"q2_half_spread_away": "-", 
					"q2_half_spread_home": "-", 
					"q2_half_total": "-", 
					"q2_half_tt_away": "-", 
					"q2_half_tt_home": "-", 
					"q2_juice_over": "-", 
					"q2_juice_under": "-", 
					"q3_half_final_score_away": "-", 
					"q3_half_final_score_home": "-", 
					"q3_half_juice_over_away": "-", 
					"q3_half_juice_over_home": "-", 
					"q3_half_juice_spread_away": "-", 
					"q3_half_juice_spread_home": "-", 
					"q3_half_juice_under_away": "-", 
					"q3_half_juice_under_home": "-", 
					"q3_half_moneyLineAway": "-", 
					"q3_half_moneyLineHome": "-", 
					"q3_half_spread_away": "-", 
					"q3_half_spread_home": "-", 
					"q3_half_total": "-", 
					"q3_half_tt_away": "-", 
					"q3_half_tt_home": "-", 
					"q3_juice_over": "-", 
					"q3_juice_under": "-", 
					"q4_half_final_score_away": "-", 
					"q4_half_final_score_home": "-", 
					"q4_half_juice_over_away": "-", 
					"q4_half_juice_over_home": "-", 
					"q4_half_juice_spread_away": "-", 
					"q4_half_juice_spread_home": "-", 
					"q4_half_juice_under_away": "-", 
					"q4_half_juice_under_home": "-", 
					"q4_half_moneyLineAway": "-", 
					"q4_half_moneyLineHome": "-", 
					"q4_half_spread_away": "-", 
					"q4_half_spread_home": "-", 
					"q4_half_total": "-", 
					"q4_half_tt_away": "-", 
					"q4_half_tt_home": "-", 
					"q4_juice_over": "-", 
					"q4_juice_under": "-", 
					"rotation_away": "529", 
					"rotation_home": "530", 
					"second_half_final_score_away": "-", 
					"second_half_final_score_home": "-", 
					"second_half_juice_over_away": "-", 
					"second_half_juice_over_home": "-", 
					"second_half_juice_spread_away": "-", 
					"second_half_juice_spread_home": "-", 
					"second_half_juice_under_away": "-", 
					"second_half_juice_under_home": "-", 
					"second_half_moneyLineAway": "-", 
					"second_half_moneyLineHome": "-", 
					"second_half_spread_away": "-", 
					"second_half_spread_home": "-", 
					"second_half_total": "-", 
					"second_half_tt_away": "-", 
					"second_half_tt_home": "-", 
					"sh_juice_total_over": "-", 
					"sh_juice_total_under": "-", 
					"spread_away": "-3", 
					"spread_home": "+3", 
					"status": "Pending", 
					"total": "216", 
					"tt_away": "109.5", 
					"tt_home": "106.5", 
					"week": "03"
				  }
			],
			stats_nba_team:[
				{
					"L": "-", 
					"away": "-", 
					"conf": "-", 
					"conference": "-", 
					"diff": "-", 
					"div": "-", 
					"division": "-", 
					"gb": "-", 
					"group_type_comparation": "-", 
					"home": "-", 
					"id": 1, 
					"l10": "-", 
					"opp_ppg": "-", 
					"ppg": "-", 
					"ptc": "-", 
					"season": "-", 
					"season_type": "-", 
					"strk": "-", 
					"team": "-", 
					"w": "-"
				  }
			],
			//teams
			nfl_teams: [
				"Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Football Team"
			],
			nba_teams: [
				"Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
			],
			mlb_teams: [
				"Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Indians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"
			],
			nhl_teams: [
				"Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs", "Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals", "Arizona Coyotes", "Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St. Louis Blues", "Winnipeg Jets", "Anaheim Ducks", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Vegas Golden Knights", "Florida Panthers"
			],
			ncaa_foot_teams: ["Cincinnati", "East Carolina", "Houston", "Memphis", "Navy", "SMU", "South Florida", "Temple", "Tulane", "Tulsa", "UCF", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "NC State", "North Carolina", "Pittsburgh", "Syracuse", "Virginia", "Virginia Tech", "Wake Forest", "Baylor", "Iowa State", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia", "Illinois", "Indiana", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "Wisconsin", "Charlotte", "Florida Atlantic", "Florida International", "Louisiana Tech", "Marshall", "Middle Tennessee", "North Texas", "Old Dominion", "Rice", "Southern Miss", "UAB", "UTEP", "UTSA", "Western Kentucky", "Army", "BYU", "Liberty", "New Mexico State", "Notre Dame", "UConn", "UMass", "Akron", "Akron", "Bowling Green", "Buffalo", "Central Michigan", "Eastern Michigan", "Kent State", "Miami (OH)", "Northern Illinois", "Ohio", "Toledo", "Western Michigan", "Air Force", "Boise State", "Colorado State", "Fresno State", "Hawai'i", "Nevada", "New Mexico", "San Diego State", "San José State", "UNLV", "Utah State", "Wyoming", "Arizona", "Arizona State", "California", "Colorado", "Oregon", "Oregon State", "Stanford", "UCLA", "USC", "Utah", "Washington", "Washington State", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "LSU", "Mississippi State", "Missouri", "Ole Miss", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt", "Sun Belt", "Appalachian State", "Arkansas State", "Coastal Carolina", "Georgia Southern", "Georgia State", "Louisiana", "South Alabama", "Texas State", "Troy", "UL Monroe"],

			ncaa_basket_teams: ["Bellarmine Knights", "Central Arkansas Bears", "Eastern Kentucky Colonel", "Florida Gulf Coast Eagles", "Jacksonville Dolphins", "Jacksonville State Gamecocks", "Kennesaw State Owls", "Liberty Flames", "Lipscomb Bisons", "North Alabama Lions", "North Florida Ospreys", "Stetson Hatters", "Albany Great Danes", "Binghamton Bearcats", "Hartford Hawks", "Maine Black Bears", "NJIT Highlanders", "New Hampshire Wildcats", "Stony Brook Seawolves", "UMBC Retrievers", "UMass Lowell River Hawks", "Vermont Catamounts", "Cincinnati Bearcats", "East Carolina Pirates", "Houston Cougars", "Memphis Tigers", "SMU Mustangs", "South Florida Bulls", "Temple Owls", "Tulane Green Wave", "Tulsa Golden Hurricane", "UCF Knights", "Wichita State Shockers", "Davidson Wildcats", "Dayton Flyers", "Duquesne Dukes", "Fordham Rams", "George Mason Patriots", "George Washington Colonials", "La Salle Explorers", "Rhode Island Rams", "Richmond Spiders", "Saint Joseph's Hawks", "Saint Louis Billikens", "St. Bonaventure Bonnies", "UMass Minutemen", "VCU Rams", "Boston College Eagles", "Clemson Tigers", "Duke Blue Devils", "Florida State Seminoles", "Georgia Tech Yellow Jackets", "Louisville Cardinals", "Miami Hurricanes", "NC State Wolfpack", "North Carolina Tar Heels", "Notre Dame Fighting Irish", "Pittsburgh Panthers", "Syracuse Orange", "Virginia Cavaliers", "Virginia Tech Hokies", "Wake Forest Demon Deacons", "Baylor Bears", "Iowa State Cyclones", "Kansas Jayhawks", "Kansas State Wildcats", "Oklahoma Sooners", "Oklahoma State Cowboys", "TCU Horned Frogs", "Texas Longhorns", "Texas Tech Red Raiders", "West Virginia Mountaineers", "Butler Bulldogs", "Creighton Bluejays", "DePaul Blue Demons", "Georgetown Hoyas", "Marquette Golden Eagles", "Providence Friars", "Seton Hall Pirates", "St. John's Red Storm", "UConn Huskies", "Villanova Wildcats", "Xavier Musketeers", "Eastern Washington Eagles", "Idaho State Bengals", "Idaho Vandals", "Montana Grizzlies", "Montana State Bobcats", "Northern Arizona Lumberjacks", "Northern Colorado Bears", "Portland State Vikings", "Sacramento State Hornets", "Southern Utah Thunderbirds", "Weber State Wildcats", "Campbell Fighting Camels", "Charleston Southern Buccaneers", "Gardner-Webb Runnin' Bulldogs", "Hampton Pirates", "High Point Panthers", "Longwood Lancers", "North Carolina A&T Aggies", "Presbyterian Blue Hose", "Radford Highlanders", "South Carolina Upstate Spartans", "UNC Asheville Bulldogs", "Winthrop Eagles", "Illinois Fighting Illini", "Indiana Hoosiers", "Maryland Terrapins", "Iowa Hawkeyes", "Michigan State Spartans", "Michigan Wolverines", "Minnesota Golden Gophers", "Nebraska Cornhuskers", "Northwestern Wildcats", "Ohio State Buckeyes", "Penn State Nittany Lions", "Purdue Boilermakers", "Rutgers Scarlet Knights", "Wisconsin Badgers", "CSU Bakersfield Roadrunners", "CSU Fullerton Titans", "CSU Northridge Matadors", "Cal Poly Mustangs", "Hawai'i Rainbow Warriors", "Long Beach State Beach", "UC Davis Aggies", "UC Irvine Anteaters", "UC Riverside Highlanders", "UC San Diego Tritons", "UC Santa Barbara Gauchos", "Charleston Cougars", "Delaware Blue Hens", "Drexel Dragons", "Elon Phoenix", "Hofstra Pride", "James Madison Dukes", "Northeastern Huskies", "Towson Tigers", "UNC Wilmington Seahawks", "William & Mary Tribe", "Charlotte 49ers", "Florida Atlantic Owls", "Florida International Panthers", "Louisiana Tech Bulldogs", "Marshall Thundering Herd", "Middle Tennessee Blue Raiders", "North Texas Mean Green", "Old Dominion Monarchs", "Rice Owls", "Southern Miss Golden Eagles", "UAB Blazers", "UTEP Miners", "UTSA Roadrunners", "Western Kentucky Hilltoppers", "Horizon", "Cleveland State Vikings", "Detroit Mercy Titans", "Green Bay Phoenix", "IUPUI Jaguars", "Milwaukee Panthers", "Northern Kentucky Norse", "Oakland Golden Grizzlies", "Purdue Fort Wayne Mastodons", "Robert Morris Colonials", "UIC Flames", "Wright State Raiders", "Youngstown State Penguins", "Ivy", "Brown Bears", "Columbia Lions", "Cornell Big Red", "Dartmouth Big Green", "Harvard Crimson", "Pennsylvania Quakers", "Princeton Tigers", "Yale Bulldogs", "Canisius Golden Griffins", "Fairfield Stags", "Iona Gaels", "Manhattan Jaspers", "Marist Red Foxes", "Monmouth Hawks", "Niagara Purple Eagles", "Quinnipiac Bobcats", "Rider Broncs", "Saint Peter's Peacocks", "Siena Saints"],

			ncaa_baseball_teams: ["Davidson", "Dayton", "Fordham", "George Mason", "George Washington", "La Salle", "Massachusetts", "Rhode Island", "Richmond", "Saint Joseph's", "Saint Louis", "St. Bonaventure", "VCU", "Boston College", "Clemson", "Duke", "Florida State", "Georgia Tech", "Louisville", "Miami", "NC State", "North Carolina", "Notre Dame", "Pittsburgh", "Virginia", "Virginia Tech", "Wake Forest", "Bellarmine", "Central Arkansas", "Eastern Kentucky", "Florida Gulf Coast", "Jacksonville", "Kennesaw State", "Liberty", "Lipscomb", "North Alabama", "North Florida", "Stetson", "Baylor", "Kansas", "Kansas State", "Oklahoma", "Oklahoma State", "TCU", "Texas", "Texas Tech", "West Virginia", "Butler", "Connecticut", "Creighton", "Georgetown", "Seton Hall", "St. John's", "Villanova", "Xavier", "Campbell", "Charleston Southern", "Gardner-Webb", "High Point", "Longwood", "North Carolina A&T", "Presbyterian", "Radford", "UNC Asheville", "USC Upstate", "Winthrop", "Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Michigan State", "Minnesota", "Nebraska", "Northwestern", "Ohio State", "Penn State", "Purdue", "Rutgers", "CSU Bakersfield", "Cal Poly", "Cal State Fullerton", "Cal State Northridge", "Hawaii", " Long Beach State", "UC Davis", "UC Irvine", "UC Riverside", "UC San Diego", "UC Santa Barbara", "College of Charleston", "Delaware", "Elon", "Hofstra", "James Madison", "Northeastern", "Towson", "UNC Wilmington", "William & Mary", "Charlotte", "Florida Atlantic", "Florida International", "Louisiana Tech", "Marshall", "Middle Tennessee", "Old Dominion", "Rice", "Southern Miss", "UAB", "UTSA", "Western Kentucky", "Illinois-Chicago", "Milwaukee", "Northern Kentucky", "Oakland", "Purdue Fort Wayne", "Wright State", "Youngstown State", "Brown", "Columbia", "Dartmouth", "Harvard", "Pennsylvania", "Princeton", "Yale", "Canisius", "Fairfield", "Iona", "Manhattan", "Marist", "Monmouth", "Niagara", "Quinnipiac", "Rider", "Saint Peter's", "Siena", "Akron", "Ball State", "Bowling Green", "Central Michigan", "Eastern Michigan", "Kent State", "Miami (OH)", "Northern Illinois", "Ohio", "Toledo", "Western Michigan", "Coppin State", "Delaware State", "Norfolk State", "UMES", "Air Force", "Fresno State", "Nevada", "New Mexico", "San Diego State", "San Jose State", "UNLV", "Bryant", "Central Connecticut", "Fairleigh Dickinson", "Long Island", "Merrimack", "Mount St. Mary's", "Sacred Heart", "Wagner", "Arizona", "Arizona State", "California", "Oregon", "Oregon State", "Southern California", "Stanford", "UCLA", "Utah", "Washington", "Washington State", "Army", "Bucknell", "Holy Cross", "Lafayette", "Lehigh", "Navy", "Alabama", "Arkansas", "Auburn", "Florida", "Georgia", "Kentucky", "LSU", "Mississippi State", "Missouri", "Ole Miss", "South Carolina", "Tennessee", "Texas A&M", "Vanderbilt", "East Tennessee State", "Mercer", "Samford", "The Citadel", "UNC Greensboro", "VMI", "Western Carolina", "Wofford", "Houston Baptist", "Incarnate Word", "McNeese", "New Orleans", "Nicholls", "Northwestern State", "Southeastern Louisiana", "Texas A&M-Corpus Christi", "North Dakota State", "Northern Colorado", "Omaha", "Oral Roberts", "South Dakota State", "Western Illinois", "Appalachian State", "Arkansas State", "Coastal Carolina", "Georgia Southern", "Georgia State", "Little Rock", "Louisiana", "South Alabama", "Texas State", "Troy", "UL Monroe", "UT Arlington", "Abilene Christian", "BYU", "Gonzaga", "Lamar", "Loyola Marymount", "Pacific", "Pepperdine", "Portland", "Saint Mary's", "Sam Houston", "San Diego", "San Francisco", "Santa Clara", "Stephen F. Austin", "California Baptist", "Dixie State", "Grand Canyon", "New Mexico State", "Sacramento State", "Seattle", "Tarleton", "UT Rio Grande Valley", "Utah Valley", "Stoony Brook", "East Carolina", "New Jersey Tech", "Tulane", "Albany", "Wichita State", "Maine", "Cincinnati", "Hartford", "UCF", "UMass Lowell", "South Florida", "Binghamton", "Houston", "UMBC", "Memphis"],
		},
		actions: {
			//nfl
			nfl: async () => {
				const url = "https://allfansports.herokuapp.com/nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl: results });
			},
			logos_nfl: async () => {
				const url = "https://allfansports.herokuapp.com/logos_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_nfl: results });
			},
			props: async () => {
				const url = "https://allfansports.herokuapp.com/props";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ props: results });
			},
			nfl_team_stats: async () => {
				const url = "https://allfansports.herokuapp.com/stats_nfl_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_team_stats: results });
			},
			nfl_player_offensive_stats: async () => {
				const url = "http://www.sportsdata365.com/stats_offensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_player_offensive_stats: results });
			},
			nfl_player_deffensive_stats: async () => {
				const url = "http://www.sportsdata365.com/stats_defensive_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_player_deffensive_stats: results });
			},
			nfl_player_returning_stats: async () => {
				const url = "http://www.sportsdata365.com/stats_returning_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_player_returning_stats: results });
			},
			nfl_player_punting_stats: async () => {
				const url = "http://www.sportsdata365.com/stats_punting_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_player_punting_stats: results });
			},
			nfl_player_kicking_stats: async () => {
				const url = "http://www.sportsdata365.com/stats_kiking_player_nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nfl_player_kicking_stats: results });
			},
			//ncaa_football
			ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ ncaa_football: results });
			},
			stats_ncaa_football_team: async () => {
				const url = "https://www.sportsdata365.com/stats_ncaa_football_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_ncaa_football_team: results });
			},
			stats_offensive_player_ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/stats_offensive_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_offensive_player_ncaa_football: results });
			},
			stats_defensive_player_ncca_football: async () => {
				const url = "https://www.sportsdata365.com/stats_defensive_player_ncca_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_defensive_player_ncca_football: results });
			},
			stats_returning_player_ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/stats_returning_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_returning_player_ncaa_football: results });
			},
			stats_punting_player_ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/stats_punting_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_punting_player_ncaa_football: results });
			},
			stats_punting_player_ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/stats_punting_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_punting_player_ncaa_football: results });
			},
			stats_kiking_player_ncaa_football: async () => {
				const url = "https://www.sportsdata365.com/stats_kiking_player_ncaa_football";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_kiking_player_ncaa_football: results });
			},
			//nba
			logos_nba: async () => {
				const url = "https://allfansports.herokuapp.com/logos_nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ logos_nba: results });
			},
			nba_games: async () => {
				const url = "https://www.sportsdata365.com/nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba_games: results });
			},
			stats_nba_team: async () => {
				const url = "https://www.sportsdata365.com/stats_nba_team";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ stats_nba_team: results });
			},
			
			//injueries
			injuries: async () => {
				const url = "http://www.sportsdata365.com/injuries";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ injuries: results });
			},
			//futures
			futures: async () => {
				const url = "http://www.sportsdata365.com/futures";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ futures: results });
			},
		}
	};
};

export default getState;
