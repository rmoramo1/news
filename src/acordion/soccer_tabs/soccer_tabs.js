import React from "react";

export const SOCCER_Tabs = () => {
    return (
        <div className="accordion" id="second_soccer">
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer_1stq" aria-expanded="true" aria-controls="soccer_1stq">
                       1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_soccer_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_soccer" aria-expanded="false" aria-controls="QUARTERS_soccer">
                        QUARTERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer1st_H" aria-expanded="false" aria-controls="soccer1st_H">
                        1ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer2st_H" aria-expanded="false" aria-controls="soccer2st_H">
                        2ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_soccer" aria-expanded="false" aria-controls="props_soccer">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_soccer" aria-expanded="false" aria-controls="features_soccer">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_soccer" aria-expanded="false" aria-controls="team_stats_soccer">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_soccer" aria-expanded="false" aria-controls="player_stats_soccer">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_soccer" aria-expanded="false" aria-controls="alarms_soccer">
                        ALARMS  
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_soccer" aria-expanded="false" aria-controls="results_soccer">
                        RESULTS  
                    </button>
                </h2>
            </div>
        </div>
    )
}