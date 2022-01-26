import React from "react";
import { Nfl_Games } from "../../../display_lines/nfl/nfl_games";
import { Nfl_one_q } from "../../../display_lines/nfl/nfl_one_q";
import { Nfl_Two_q } from "../../../display_lines/nfl/nfl_two_q";
import { Nfl_Thre_q } from "../../../display_lines/nfl/nfl_thre";
import { Nfl_Four_q } from "../../../display_lines/nfl/nfl_four_q";
import { Nfl_1half } from "../../../display_lines/nfl/nfl_1half";
import { Nf2_1half } from "../../../display_lines/nfl/nfl_2half";
import { Results_Nfl } from "../../../display_lines/nfl/results_nfl";
import { Nfl_Props } from "../../../display_lines/nfl/nfl_props";
import { Nfl_Team_stats } from "../../../display_lines/nfl/nfl_team_stats";
import PY_STATS from "../../../display_lines/nfl/py_stats";

export const NFL_ITEMS = () => {
    return (
        <div className="col" >
            <div id="nfl_games" className="accordion-collapse collapse show" aria-labelledby="nfl_1stq_ac" data-bs-parent="#items_tab_master">
                <div className="y">
                    <Nfl_Games />
                </div>
            </div>
            <div id="nfl_1stq" className="accordion-collapse collapse" aria-labelledby="nfl_1stq_ac" data-bs-parent="#items_tab_master">
                <Nfl_one_q />
            </div>
            <div id="secondQNLF" className="accordion-collapse collapse" aria-labelledby="secondQNLF_ac" data-bs-parent="#items_tab_master">
                <Nfl_Two_q/>
            </div>
            <div id="tercerQ" className="accordion-collapse collapse" aria-labelledby="tercerQ_ac" data-bs-parent="#items_tab_master">
                <Nfl_Thre_q/>
            </div>
            <div id="fourtQ" className="accordion-collapse collapse" aria-labelledby="fourtQ_ac" data-bs-parent="#items_tab_master">
                <Nfl_Four_q/>
            </div>
            <div id="nfl1st_H" className="accordion-collapse collapse" aria-labelledby="nfl_1stH_ac" data-bs-parent="#items_tab_master">
                <Nfl_1half/>
            </div>
            <div id="nfl2st_H" className="accordion-collapse collapse" aria-labelledby="nfl_2stH_ac" data-bs-parent="#items_tab_master">
                <Nf2_1half/>
            </div>
            <div id="props_nfl" className="accordion-collapse collapse" aria-labelledby="props_nfl" data-bs-parent="#items_tab_master">
                <Nfl_Props/>
            </div>
            <div id="features_nfl" className="accordion-collapse collapse" aria-labelledby="features_nfl" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    FEATURES NFL
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="team_stats_nfl" className="accordion-collapse collapse" aria-labelledby="team_stats_nfl" data-bs-parent="#items_tab_master">
                <Nfl_Team_stats/>
            </div>
            <div id="player_stats_nfl" className="accordion-collapse collapse" aria-labelledby="player_stats_nfl" data-bs-parent="#items_tab_master">
                <PY_STATS/>
            </div>
            <div id="alarms_nfl" className="accordion-collapse collapse" aria-labelledby="alarms_nfl" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS NFL
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_nfl" className="accordion-collapse collapse" aria-labelledby="results_nfl" data-bs-parent="#items_tab_master">
                <Results_Nfl/>
            </div>
        </div>
    )

}