import React from "react";
import { NCAA_BASEBALL_Games } from "../../../display_lines/ncaa_baseball/ncaa_baseball_games";
import { NCAA_BASEBALL_F5 } from "../../../display_lines/ncaa_baseball/ncaa_baseball_f5";
import { Six_Nine_Inning_NCCAA_Baseball } from "../../../display_lines/ncaa_baseball/six_nine_inning_ncaa_baseball";
import { Extra_Inning_NCAA_BASEBALL } from "../../../display_lines/ncaa_baseball/extra_inning_ncaa_baseball";
import { Futures_NCAA_BASEBALL } from "../../../display_lines/ncaa_baseball/future_ncaa_baseball";
import { NCAA_BASEBALL_Team_stats_display } from "../../../display_lines/ncaa_baseball/ncaa_baseball_team_stats";
import NCAA_BASEBALL_PY_STATS from "../../../display_lines/ncaa_baseball/ncaa_baseball_py_stats";
import { Results_NCAA_BASEBALL } from "../../../display_lines/ncaa_baseball/results_ncaa_baseball";


export const NCAA_BASEBALL_ITEMS = () => {
    return (
        <div className="col">
            <div id="ncaa_baseball_games" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASEBALL_Games/>
            </div>
            <div id="ncaa_baseball_F5" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASEBALL_F5/>
            </div>

            <div id="E6_9_score_ncaa_base" className="accordion-collapse collapse" aria-labelledby="ncaa_1stH_ac" data-bs-parent="#items_tab_master">
                <Six_Nine_Inning_NCCAA_Baseball/>
            </div>
            <div id="Extra_Inning_Score_ncaa_base" className="accordion-collapse collapse" aria-labelledby="ncaa_1stH_ac" data-bs-parent="#items_tab_master">
                <Extra_Inning_NCAA_BASEBALL/>
            </div>

            <div id="features_ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="features_ncaa" data-bs-parent="#items_tab_master">
                <Futures_NCAA_BASEBALL/>
            </div>
            <div id="team_stats_ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="team_stats_ncaa" data-bs-parent="#items_tab_master">
                <NCAA_BASEBALL_Team_stats_display/>
            </div>
            <div id="player_stats_ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="player_stats_ncaa" data-bs-parent="#items_tab_master">
                <NCAA_BASEBALL_PY_STATS/>
            </div>
            <div id="alarms_ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="alarms_ncaa" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_base_dark text-white ps-5 fs-1 font_bold">
                    ALARMS NCAA baseball
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_ncaa_baseball" className="accordion-collapse collapse" aria-labelledby="results_ncaa" data-bs-parent="#items_tab_master">
                <Results_NCAA_BASEBALL/>
            </div>
        </div>
    )

}