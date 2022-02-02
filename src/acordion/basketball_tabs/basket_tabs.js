import React from "react";
import { NBA_Tabs } from "./nba_tabs/nba_tabs";
import { NCAA_BASKET_Tabs } from "./ncaa_basket_tabs/ncaa_basket_tabs";

export const BASKET_Tabs = () => {
    return (
        <div className="accordion" id="basket_acordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#nba_ac" aria-expanded="true" aria-controls="nba_ac">
                        NBA
                    </button>
                </h2>
                {/* tabs */}
                <div id="nba_ac" className="accordion-collapse collapse" aria-labelledby="nba_tabs" data-bs-parent="#basket_acordion">
                    <NBA_Tabs />
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_basket_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_basket" aria-expanded="false" aria-controls="ncaa_basket">
                        NCAA BASKET
                    </button>
                </h2>
                <div id="ncaa_basket" className="accordion-collapse collapse" aria-labelledby="ncaa_basket_tabs" data-bs-parent="#basket_acordion">
                    <NCAA_BASKET_Tabs />
                </div>
            </div>
        </div>
    )
}