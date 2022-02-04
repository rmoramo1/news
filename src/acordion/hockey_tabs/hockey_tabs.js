import React from "react";

export const HOCKEY_Tabs = () => {
    return (
        <div className="accordion" id="second_hockey">
            <div className="accordion-item">
                <h2 className="accordion-header" id="games_hockey_q_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hockey_games" aria-expanded="true" aria-controls="hockey_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="hockey_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hockey_1stq" aria-expanded="true" aria-controls="hockey_1stq">
                        1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_hockey_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_hockey" aria-expanded="false" aria-controls="features_hockey">
                        FUTURES
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