import React from "react";
import { MLB_Tabs } from "./mlb_tabs/mlb_tabs";
import { NCAA_BASEBALL_Tabs } from "./ncaa_baseball_tabs/ncaa_baseball_tabs";


export const BASEBALL_Tabs = () => {
    return (
        <div className="accordion" id="baseball_acordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#nba_ac" aria-expanded="true" aria-controls="nba_ac">
                        MLB
                    </button>
                </h2>
                {/* tabs */}
                <div id="nba_ac" className="accordion-collapse collapse" aria-labelledby="nba_tabs" data-bs-parent="#basket_acordion">
                   <MLB_Tabs/>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_basket_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket" aria-expanded="false" aria-controls="ncaa_basket">
                        NCAA BASEBALL
                    </button>
                </h2>
                <div id="ncaa_basket" className="accordion-collapse collapse" aria-labelledby="ncaa_basket_tabs" data-bs-parent="#basket_acordion">
                  <NCAA_BASEBALL_Tabs/>
                </div>
            </div>
        </div>
    )
}