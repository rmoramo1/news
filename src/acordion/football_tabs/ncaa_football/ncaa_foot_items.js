import React from "react";

import { Ncaa_Football_Games } from "../../../display_lines/ncaa/ncaa_football_games";
import { Ncaa_Football_one_q } from "../../../display_lines/ncaa/ncaa_football_one_q";
import { Ncaa_Football_1half } from "../../../display_lines/ncaa/ncaa_football_1half";
import { Ncaa_Football_2half } from "../../../display_lines/ncaa/ncaa_football_2half";
import { Ncaa_Football_Thre_q } from "../../../display_lines/ncaa/ncaa_football_thre";
import { Ncaa_Football_Four_q } from "../../../display_lines/ncaa/ncaa_football_four_q";
import { Ncaa_Football_Futures } from "../../../display_lines/ncaa/future_ncaa_football";
import { Ncaa_Football_Team_stats } from "../../../display_lines/ncaa/ncaa_football_team_stats";
import Ncaa_Football_PY_STATS from "../../../display_lines/ncaa/ncaa_football_py_stats";
import { Results_Ncaa_Football } from "../../../display_lines/ncaa/results_ncaa_football";


export const NCAA_ITEMS = () => {
    return (
        <div className="col">
            <div id="ncaa_games_foot" className="accordion-collapse collapse" aria-labelledby="ncaa_games_foot" data-bs-parent="#items_tab_master">
                <Ncaa_Football_Games />
            </div>
            <div id="ncaa_1stq" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq_ac" data-bs-parent="#items_tab_master">
                <Ncaa_Football_one_q />
            </div>
            <div id="ncaa1st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_1stH_ac" data-bs-parent="#items_tab_master">
                <Ncaa_Football_1half />
            </div>
            <div id="ncaa2st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_2stH_ac" data-bs-parent="#items_tab_master">
                <Ncaa_Football_2half />
            </div>
            <div id="ncaa3st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_3stH_ac" data-bs-parent="#items_tab_master">
                <Ncaa_Football_Thre_q />
            </div>
            <div id="ncaa4st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_4stH_ac" data-bs-parent="#items_tab_master">
                <Ncaa_Football_Four_q />
            </div>

            <div id="features_ncaa" className="accordion-collapse collapse" aria-labelledby="features_ncaa" data-bs-parent="#items_tab_master">
                <Ncaa_Football_Futures/>
            </div>
            <div id="team_stats_ncaa" className="accordion-collapse collapse" aria-labelledby="team_stats_ncaa" data-bs-parent="#items_tab_master">
                <Ncaa_Football_Team_stats/>
            </div>
            <div id="player_stats_ncaa" className="accordion-collapse collapse" aria-labelledby="player_stats_ncaa" data-bs-parent="#items_tab_master">
                <Ncaa_Football_PY_STATS/>
            </div>
            <div id="alarms_ncaa" className="accordion-collapse collapse" aria-labelledby="alarms_ncaa" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS NCAA FOOTBALL
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_ncaa" className="accordion-collapse collapse" aria-labelledby="results_ncaa" data-bs-parent="#items_tab_master">
                <Results_Ncaa_Football/>
            </div>
        </div>
    )

}