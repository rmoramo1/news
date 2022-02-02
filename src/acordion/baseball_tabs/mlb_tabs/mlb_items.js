import React from "react";

import { MLB_Games } from "../../../display_lines/mlb/mbl_games";
import { MLB_F5 } from "../../../display_lines/mlb/mlb_f5";
import { Six_Nine_Inning_Mlb } from "../../../display_lines/mlb/six_nine_inning_mlb";
import { Extra_Inning_MLB } from "../../../display_lines/mlb/extra_inning_mlb";

export const MLB_ITEMS = () => {
    return (
        <div className="col">
            <div id="mlb_games" className="accordion-collapse collapse" aria-labelledby="mlb_1stq_ac" data-bs-parent="#items_tab_master">
                <MLB_Games/>
            </div>
            <div id="mlb_1stq" className="accordion-collapse collapse" aria-labelledby="mlb_1stq_ac" data-bs-parent="#items_tab_master">
                <MLB_F5/>
            </div>
            <div id="E6_9_score" className="accordion-collapse collapse" aria-labelledby="mlb_1stq_ac" data-bs-parent="#items_tab_master">
               <Six_Nine_Inning_Mlb/>
            </div>
            <div id="Extra_Inning_Score" className="accordion-collapse collapse" aria-labelledby="mlb_1stq_ac" data-bs-parent="#items_tab_master">
               <Extra_Inning_MLB/>
            </div>
            <div id="mlb1st_H" className="accordion-collapse collapse" aria-labelledby="mlb_1stH_ac" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    1ST H mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="mlb2st_H" className="accordion-collapse collapse" aria-labelledby="mlb_2stH_ac" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    2ST H mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="props_mlb" className="accordion-collapse collapse" aria-labelledby="props_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    PROPS mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="features_mlb" className="accordion-collapse collapse" aria-labelledby="features_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    FEATURES mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="team_stats_mlb" className="accordion-collapse collapse" aria-labelledby="team_stats_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    TEAM STANDINGS mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="player_stats_mlb" className="accordion-collapse collapse" aria-labelledby="player_stats_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    PLAYER STATS mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="alarms_mlb" className="accordion-collapse collapse" aria-labelledby="alarms_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_mlb" className="accordion-collapse collapse" aria-labelledby="results_mlb" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    RESULTS mlb
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
        </div>
    )

}