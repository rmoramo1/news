import React from "react";

import Golfer_PY_STATS from "../../display_lines/golf/golf_py_stats";
import { Futures_GOLF } from "../../display_lines/golf/future_golf";
export const GOlf_ITEMS = () => {
    return (
        <div className="col">
            <div id="golfers" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <Golfer_PY_STATS/>
            </div>
            <div id="features_golf" className="accordion-collapse collapse" aria-labelledby="features_golf" data-bs-parent="#items_tab_master">
                <Futures_GOLF/>
            </div>
        </div>
    )

}