import React from "react";

import { MMA_Event } from "../../../display_lines/mma/mma_fight";
import MMA_PY_STATS from "../../../display_lines/mma/mma_py_stats";
import { Futures_MMA } from "../../../display_lines/mma/future_mma";

export const MMA_ITEMS = () => {
    return (
        <div className="col">
            <div id="mma_events" className="accordion-collapse collapse" aria-labelledby="ncaa_1stq" data-bs-parent="#items_tab_master">
                <MMA_Event/>
            </div>
            <div id="mma_fighter_st" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <MMA_PY_STATS/>
            </div>
            <div id="futures_mma" className="accordion-collapse collapse" aria-labelledby="features_ncaa" data-bs-parent="#items_tab_master">
                <Futures_MMA/>
            </div>
        </div>
    )

}