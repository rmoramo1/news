import React from "react";

export const HOCKEY_Tabs = () => {
    return (
        <div className="accordion" id="second_hockey">
            <div className="accordion-item">
                <h2 className="accordion-header" id="hockey_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hockey_1stq" aria-expanded="true" aria-controls="hockey_1stq">
                       1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_hockey_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_hockey" aria-expanded="false" aria-controls="QUARTERS_hockey">
                        QUARTERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="hockey_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hockey1st_H" aria-expanded="false" aria-controls="hockey1st_H">
                        1ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="hockey_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hockey2st_H" aria-expanded="false" aria-controls="hockey2st_H">
                        2ST H 
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_hockey" aria-expanded="false" aria-controls="props_hockey">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_hockey" aria-expanded="false" aria-controls="features_hockey">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_hockey" aria-expanded="false" aria-controls="team_stats_hockey">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_hockey" aria-expanded="false" aria-controls="player_stats_hockey">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_hockey" aria-expanded="false" aria-controls="alarms_hockey">
                        ALARMS  
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_hockey" aria-expanded="false" aria-controls="results_hockey">
                        RESULTS  
                    </button>
                </h2>
            </div>
        </div>
    )
}