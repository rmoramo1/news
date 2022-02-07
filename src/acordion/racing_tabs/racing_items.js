import React from "react";

import { Nascar_Runs } from "../../display_lines/nascar/nascar_runs";
import NASCAR_PY_STATS from "../../display_lines/nascar/nascar_py_stats";
import { Futures_Nascar } from "../../display_lines/nascar/future_nascar";
export const RACING_ITEMS = () => {
    return (
        <div className="col">
            <div id="events_nascar" className="accordion-collapse collapse" aria-labelledby="racing_1stq_ac" data-bs-parent="#items_tab_master">
                <Nascar_Runs/>
            </div>
            <div id="DRIVERS_NASCAR" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <NASCAR_PY_STATS/>
            </div>
            <div id="features_racing" className="accordion-collapse collapse" aria-labelledby="features_racing" data-bs-parent="#items_tab_master">
                <Futures_Nascar/>
            </div>
        </div>
    )

}