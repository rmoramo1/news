import React from "react";
import { NCAA_BASKET_Games } from "../../../display_lines/ncaa_basket/ncaa_basket_games";
import { NCAA_BASKET_one_q } from "../../../display_lines/ncaa_basket/ncaa_basket_one_q";
import { NCAA_BASKET_Two_q } from "../../../display_lines/ncaa_basket/ncaa_basket_two_q";
import { NCAA_BASKET_Thre_q } from "../../../display_lines/ncaa_basket/ncaa_basket_thre";
import { NCAA_BASKET_Four_q } from "../../../display_lines/ncaa_basket/ncaa_basket_four_q";
import { NCAA_BASKET_1half } from "../../../display_lines/ncaa_basket/ncaa_basket_1half";
import { NCAA_BASKET_2half } from "../../../display_lines/ncaa_basket/ncaa_basket_2half";
import { Futures_NCAA_BASKET } from "../../../display_lines/ncaa_basket/future_ncaa_basket";
import { NCAA_BASKET_Team_stats_display } from "../../../display_lines/ncaa_basket/ncaa_basket_team_stats";
import NCAA_BASKET_PY_STATS from "../../../display_lines/ncaa_basket/ncaa_basket_py_stats";
import { Results_NCAA_BASKET } from "../../../display_lines/ncaa_basket/results_ncaa_basket";

export const NCAA_BASKET_ITEMS = () => {
    return (
        <div className="col">
            <div id="ncaa_BASKET_GAMES" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_Games />
            </div>
            <div id="ncaa_BASKET_1stq" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_one_q />
            </div>
            <div id="secondQ_ncaa_Basket" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_Two_q />
            </div>
            <div id="ncaa3st_H_BASK_NCAA" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_Thre_q />
            </div>
            <div id="ncaa4st_H_BASK_NCAA" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_Four_q />
            </div>
            <div id="ncaa_BASKET_1st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_1stH_ac" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_1half/>
            </div>
            <div id="ncaa_BASKET_2st_H" className="accordion-collapse collapse" aria-labelledby="ncaa_2stH_ac" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_2half/>
            </div>
            <div id="features_ncaa_BASKET" className="accordion-collapse collapse" aria-labelledby="features_ncaa" data-bs-parent="#items_tab_master">
                <Futures_NCAA_BASKET/>
            </div>
            <div id="team_stats_ncaa_BASKET" className="accordion-collapse collapse" aria-labelledby="team_stats_ncaa" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_Team_stats_display/>
            </div>
            <div id="player_stats_ncaa_BASKET" className="accordion-collapse collapse" aria-labelledby="player_stats_ncaa" data-bs-parent="#items_tab_master">
                <NCAA_BASKET_PY_STATS/>
            </div>
            <div id="alarms_ncaa_BASKET" className="accordion-collapse collapse" aria-labelledby="alarms_ncaa" data-bs-parent="#items_tab_master">
                <div className="title_sport bg_orange_dark text-white ps-5 fs-1 font_bold">
                    ALARMS NCAA BASKET
                </div>
                <div className="accordion-body">
                    aqui van las lineas
                </div>
            </div>
            <div id="results_ncaa_BASKET" className="accordion-collapse collapse" aria-labelledby="results_ncaa" data-bs-parent="#items_tab_master">
                <Results_NCAA_BASKET/>
            </div>
        </div>
    )

}