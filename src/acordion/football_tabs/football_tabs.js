import React from "react";

import { Nfl_Tabs } from "./nfl_tabs/nfl_tabs";
import { NCAA_Tabs } from "./ncaa_football/ncaa_foot_tabs";

export const Football_Tabs = () => {
    return (
        <div className="accordion" id="football_acordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="nfl_tabs">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#nfl_ac" aria-expanded="true" aria-controls="nfl_ac">
                        NFL
                    </button>
                </h2>
                {/* tabs */}
                <div id="nfl_ac" className="accordion-collapse  show" aria-labelledby="nfl_tabs" data-bs-parent="#football_acordion">
                    <Nfl_Tabs />
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_tabs">
                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa" aria-expanded="false" aria-controls="ncaa">
                        NCAA FOOTBALL
                    </button>
                </h2>
                <div id="ncaa" className="accordion-collapse collapse" aria-labelledby="ncaa_tabs" data-bs-parent="#football_acordion">
                    <NCAA_Tabs />
                </div>
            </div>
        </div>
    )
}