import React from "react";

export const NCAA_Tabs = () => {
    return (
        <div className="accordion" id="second_ncaa">
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_1stq" aria-expanded="true" aria-controls="ncaa_1stq">
                       1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_NCAA_Two">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_NCAA" aria-expanded="false" aria-controls="QUARTERS_NCAA">
                        QUARTERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa1st_H" aria-expanded="false" aria-controls="ncaa1st_H">
                        1ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa2st_H" aria-expanded="false" aria-controls="ncaa2st_H">
                        2ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_ncaa" aria-expanded="false" aria-controls="props_ncaa">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_ncaa" aria-expanded="false" aria-controls="features_ncaa">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_ncaa" aria-expanded="false" aria-controls="team_stats_ncaa">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_ncaa" aria-expanded="false" aria-controls="player_stats_ncaa">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_ncaa" aria-expanded="false" aria-controls="alarms_ncaa">
                        ALARMS  
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_ncaa" aria-expanded="false" aria-controls="results_ncaa">
                        RESULTS  
                    </button>
                </h2>
            </div>
        </div>
    )
}