import React from "react";
import Boxer_PY_STATS from "../../../display_lines/box/boxer_py_stats";
import { Futures_Box } from "../../../display_lines/box/future_box";
export const BOX_ITEMS = () => {
    return (
        <div className="col">
            <div id="event_box" className="accordion-collapse collapse" aria-labelledby="box_1stq_ac" data-bs-parent="#items_tab_master">
            </div>
            <div id="BOXERS_ST" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <Boxer_PY_STATS/>
            </div>

            <div id="futures_box" className="accordion-collapse collapse" aria-labelledby="futures_box" data-bs-parent="#items_tab_master">
                <Futures_Box/>
            </div>
        </div>
    )

}