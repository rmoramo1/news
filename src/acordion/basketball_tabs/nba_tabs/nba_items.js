import React from "react";

import { Nba_Games } from "../../../display_lines/nba/nba_games";
import { NBA_one_q } from "../../../display_lines/nba/nba_one_q";
import { NBA_1half } from "../../../display_lines/nba/nba_1half";
import { NBA_2half } from "../../../display_lines/nba/nba_2half";
import { NBA_Two_q } from "../../../display_lines/nba/nba_two_q";
import { NBA_Thre_q } from "../../../display_lines/nba/nba_thre";
import { NBA_Four_q } from "../../../display_lines/nba/nba_four_q";
import { Futures_NBA } from "../../../display_lines/nba/future_nba";
import { NBA_Team_stats_display } from "../../../display_lines/nba/nba_team_stats";
import NBA_PY_STATS from "../../../display_lines/nba/nba_py_stats";

import { Results_NBA } from "../../../display_lines/nba/results_nba";
export const NBA_ITEMS = () => {
    return (
        <div className="col">
            <div id="nba_games" className="accordion-collapse collapse" aria-labelledby="nba_games" data-bs-parent="#items_tab_master">
                <Nba_Games />
            </div>
            <div id="nba_1stq" className="accordion-collapse collapse" aria-labelledby="nba_1stq_ac" data-bs-parent="#items_tab_master">
                <NBA_one_q />
            </div>
            <div id="secondQNBA" className="accordion-collapse collapse" aria-labelledby="secondQNBA" data-bs-parent="#items_tab_master">
                <NBA_Two_q />
            </div>
            <div id="threeQNBA" className="accordion-collapse collapse" aria-labelledby="threeQNBA" data-bs-parent="#items_tab_master">
                <NBA_Thre_q />
            </div>
            <div id="fourQNBA" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <NBA_Four_q/>
            </div>
            <div id="nba1st_H" className="accordion-collapse collapse" aria-labelledby="nba_1stH_ac" data-bs-parent="#items_tab_master">
                <NBA_1half />
            </div>
            <div id="nba2st_H" className="accordion-collapse collapse" aria-labelledby="nba_2stH_ac" data-bs-parent="#items_tab_master">
                <NBA_2half />
            </div>
            <div id="features_nba" className="accordion-collapse collapse" aria-labelledby="features_nba" data-bs-parent="#items_tab_master">   
                <Futures_NBA/>
            </div>
            <div id="team_stats_nba" className="accordion-collapse collapse" aria-labelledby="team_stats_nba" data-bs-parent="#items_tab_master">
                <NBA_Team_stats_display/>
            </div>
            <div id="player_stats_nba" className="accordion-collapse collapse" aria-labelledby="player_stats_nba" data-bs-parent="#items_tab_master">
                <NBA_PY_STATS/>
            </div>
            <div id="alarms_nba" className="accordion-collapse collapse" aria-labelledby="alarms_nba" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS NBA
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_nba" className="accordion-collapse collapse" aria-labelledby="results_nba" data-bs-parent="#items_tab_master">
                <Results_NBA/>
            </div>
        </div>
    )

}