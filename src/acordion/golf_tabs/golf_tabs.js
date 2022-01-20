import React from "react";

export const GOLF_Tabs = () => {
    return (
        <div className="accordion" id="second_golf">
            <div className="accordion-item">
                <h2 className="accordion-header" id="golf_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golf_1stq" aria-expanded="true" aria-controls="golf_1stq">
                       1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_golf_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_golf" aria-expanded="false" aria-controls="QUARTERS_golf">
                        QUARTERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="golf_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golf1st_H" aria-expanded="false" aria-controls="golf1st_H">
                        1ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="golf_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golf2st_H" aria-expanded="false" aria-controls="golf2st_H">
                        2ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_golf" aria-expanded="false" aria-controls="props_golf">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_golf" aria-expanded="false" aria-controls="features_golf">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_golf" aria-expanded="false" aria-controls="team_stats_golf">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_golf" aria-expanded="false" aria-controls="player_stats_golf">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_golf" aria-expanded="false" aria-controls="alarms_golf">
                        ALARMS  
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_golf" aria-expanded="false" aria-controls="results_golf">
                        RESULTS  
                    </button>
                </h2>
            </div>
        </div>
    )
}