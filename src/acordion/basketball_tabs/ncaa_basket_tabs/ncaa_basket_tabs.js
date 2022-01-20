import React from "react";

export const NCAA_BASKET_Tabs = () => {
    return (
        <div className="accordion" id="second_ncaa_basket">
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_BASKET_1stq" aria-expanded="true" aria-controls="ncaa_BASKET_1stq">
                       1STQ 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_NCAA_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_NCAA_BASKET" aria-expanded="false" aria-controls="QUARTERS_NCAA_BASKET">
                        QUARTERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_BASKET_1st_H" aria-expanded="false" aria-controls="ncaa_BASKET_1st_H">
                        1ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_BASKET_2st_H" aria-expanded="false" aria-controls="ncaa_BASKET_2st_H">
                        2ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_ncaa_BASKET" aria-expanded="false" aria-controls="props_ncaa_BASKET">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_ncaa_BASKET" aria-expanded="false" aria-controls="features_ncaa_BASKET">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_ncaa_BASKET" aria-expanded="false" aria-controls="team_stats_ncaa_BASKET">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_ncaa_BASKET" aria-expanded="false" aria-controls="player_stats_ncaa_BASKET">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_ncaa_BASKET" aria-expanded="false" aria-controls="alarms_ncaa_BASKET">
                        ALARMS  
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_ncaa_BASKET" aria-expanded="false" aria-controls="results_ncaa_BASKET">
                        RESULTS  
                    </button>
                </h2>
            </div>
        </div>
    )
}