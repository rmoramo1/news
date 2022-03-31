import React from "react";

export const NBA_Tabs = () => {
    return (
        <div className="accordion" id="second_nba">
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_Games_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nba_games" aria-expanded="true" aria-controls="nba_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nba_1stq" aria-expanded="false" aria-controls="nba_1stq">
                        1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_NBA_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_NBA" aria-expanded="false" aria-controls="QUARTERS_NBA">
                        QUARTERS
                    </button>
                </h2>
                <div id="QUARTERS_NBA" className="accordion-collapse collapse" aria-labelledby="QUARTERS_NBA_ac" data-bs-parent="#QUARTERS_NBA_ac">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="secondQNLF_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondQNBA" aria-expanded="true" aria-controls="secondQNBA">
                                    2ND Q
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="tercerNBAQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#threeQNBA" aria-expanded="false" aria-controls="threeQNBA">
                                    3RD Q
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="fourtQ_acNBA">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fourQNBA" aria-expanded="false" aria-controls="fourQNBA">
                                    4TH Q
                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nba1st_H" aria-expanded="false" aria-controls="nba1st_H">
                        1ST H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="nba_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nba2st_H" aria-expanded="false" aria-controls="nba2st_H">
                        2ND H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_nba_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_nba" aria-expanded="false" aria-controls="features_nba">
                        FUTURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_nba_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_nba" aria-expanded="false" aria-controls="team_stats_nba">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_nba_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_nba" aria-expanded="false" aria-controls="player_stats_nba">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_nba_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_nba" aria-expanded="false" aria-controls="alarms_nba">
                        ALARMS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_nba_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_nba" aria-expanded="false" aria-controls="results_nba">
                        RESULTS
                    </button>
                </h2>
            </div>
        </div>
    )
}