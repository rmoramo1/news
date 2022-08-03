import React from "react";


import { NHL_ONE_Q } from "../../display_lines/hockey/nhl_one_q";
import { Result_Quarters_Hockey } from "../../display_lines/hockey/result_quarters_hockey";
import { Futures_NHL } from "../../display_lines/hockey/future_nhl";
import NHL_PY_STATS from "../../display_lines/hockey/nhl_py_stats";
import { Results_NHL } from "../../display_lines/hockey/results_nhl";

export const HOCKEY_ITEMS = () => {
    return (
        <div className="col">
            <div id="hockey_1stq" className="accordion-collapse collapse" aria-labelledby="hockey_1stq_ac" data-bs-parent="#items_tab_master">
                <NHL_ONE_Q />
            </div>
            <div id="QUARTERS_hockey" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <Result_Quarters_Hockey />
            </div>
            <div id="features_hockey" className="accordion-collapse collapse" aria-labelledby="features_hockey" data-bs-parent="#items_tab_master">
                <Futures_NHL/>
            </div>
            <div id="player_stats_hockey" className="accordion-collapse collapse" aria-labelledby="player_stats_hockey" data-bs-parent="#items_tab_master">
                <NHL_PY_STATS/>
            </div>
            <div id="alarms_hockey" className="accordion-collapse collapse" aria-labelledby="alarms_hockey" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_base_dark text-white ps-5 fs-1 font_bold">
                    ALARMS hockey
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_hockey" className="accordion-collapse collapse" aria-labelledby="results_hockey" data-bs-parent="#items_tab_master">
                <Results_NHL/>
            </div>
        </div>
    )

}