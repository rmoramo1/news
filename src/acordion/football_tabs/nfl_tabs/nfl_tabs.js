import React from "react";

export const Nfl_Tabs = () => {
    return (
        <div className="accordion" id="second_nfl">
            <div className="accordion-item">
                <h2 className="accordion-header" id="nfl_1stq_ac">
                    <button className="accordion-button  show" type="button" data-bs-toggle="collapse" data-bs-target="#nfl_games" aria-expanded="true" aria-controls="nfl_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nfl_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nfl_1stq" aria-expanded="true" aria-controls="nfl_1stq">
                        1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingQuarters">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS" aria-expanded="false" aria-controls="QUARTERS">
                        QUARTERS
                    </button>
                </h2>
                <div id="QUARTERS" className="accordion-collapse collapse" aria-labelledby="headingQuarters" data-bs-parent="#headingQuarters">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="secondQNLF_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondQNLF" aria-expanded="true" aria-controls="secondQNLF">
                                    2ND Q 
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="tercerQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tercerQ" aria-expanded="false" aria-controls="tercerQ">
                                    3RT Q
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="fourtQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fourtQ" aria-expanded="false" aria-controls="fourtQ">
                                    4TH Q
                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nfl_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nfl1st_H" aria-expanded="false" aria-controls="nfl1st_H">
                        1ST H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nfl_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nfl2st_H" aria-expanded="false" aria-controls="nfl2st_H">
                        2ST H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_nfl_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_nfl" aria-expanded="false" aria-controls="features_nfl">
                        FUTURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_nfl_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_nfl" aria-expanded="false" aria-controls="team_stats_nfl">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_nfl_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_nfl" aria-expanded="false" aria-controls="player_stats_nfl">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_nfl_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_nfl" aria-expanded="false" aria-controls="alarms_nfl">
                        ALARMS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_nfl_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_nfl" aria-expanded="false" aria-controls="results_nfl">
                        RESULTS
                    </button>
                </h2>
            </div>
        </div>
    )
}