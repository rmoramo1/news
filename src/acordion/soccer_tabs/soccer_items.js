import React from "react";

import { Soccer_Games } from "../../display_lines/soccer/soccer_games";
import { Soccer_Halfs } from "../../display_lines/soccer/soccer_halfs";
import { Soccer_Team_stats_display } from "../../display_lines/soccer/soccer_team_stats";
import SOCCER_PY_STATS from "../../display_lines/soccer/soccer_py_stats";
import { Results_SOCCER } from "../../display_lines/soccer/results_soccer";
import { Futures_SOCCER } from "../../display_lines/soccer/future_soccer";
export const SOCCER_ITEMS = () => {
    return (
        <div className="col">
            <div id="soccer_games" className="accordion-collapse collapse" aria-labelledby="soccer_1stq_ac" data-bs-parent="#items_tab_master">
                <Soccer_Games/>
            </div>
            <div id="HALFS_soccer" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <Soccer_Halfs/>
            </div>
            <div id="soccer_team_stats" className="accordion-collapse collapse" aria-labelledby="soccer_1stH_ac" data-bs-parent="#items_tab_master">
                <Soccer_Team_stats_display/>
            </div>
            <div id="soccer_PY_STATS" className="accordion-collapse collapse" aria-labelledby="soccer_2stH_ac" data-bs-parent="#items_tab_master">
                <SOCCER_PY_STATS/>
            </div>
            <div id="results_soccer" className="accordion-collapse collapse" aria-labelledby="results_soccer" data-bs-parent="#items_tab_master">
                <Results_SOCCER/>
            </div>
            <div id="futures_soccer" className="accordion-collapse collapse" aria-labelledby="futures_soccer" data-bs-parent="#items_tab_master">
                <Futures_SOCCER/>
            </div>
            <div id="team_stats_soccer" className="accordion-collapse collapse" aria-labelledby="team_stats_soccer" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    TEAM STANDINGS soccer
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="player_stats_soccer" className="accordion-collapse collapse" aria-labelledby="player_stats_soccer" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    PLAYER STATS soccer
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="alarms_soccer" className="accordion-collapse collapse" aria-labelledby="alarms_soccer" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS soccer
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
        </div>
    )

}