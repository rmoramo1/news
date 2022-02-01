import React from "react";

export const NCAA_Tabs = () => {
    return (
        <div className="accordion" id="second_ncaa">
            <div className="accordion-item">
                <h2 className="accordion-header" id="games_ncaa_foot">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_games_foot" aria-expanded="true" aria-controls="ncaa_games_foot">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_1stq" aria-expanded="true" aria-controls="ncaa_1stq">
                        1STQ
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingQuarters_ncaa">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_NcaaFootball" aria-expanded="false" aria-controls="QUARTERS_NcaaFootball">
                        QUARTERS
                    </button>
                </h2>
                <div id="QUARTERS_NcaaFootball" className="accordion-collapse collapse" aria-labelledby="headingQuarters_ncaa" data-bs-parent="#headingQuarters_ncaa">
                    <div className="accordion" id="accordionNcaa_football">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="secondQ_ncaa_foot">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa2st_H" aria-expanded="false" aria-controls="ncaa2st_H">
                                    2ND Q
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="tercerQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa3st_H" aria-expanded="false" aria-controls="ncaa3st_H">
                                    3RT Q
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="fourtQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa4st_H" aria-expanded="false" aria-controls="ncaa4st_H">
                                    4TH Q
                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
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
                <h2 className="accordion-header" id="futures_ncaa_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_ncaa" aria-expanded="false" aria-controls="features_ncaa">
                        FUTURES
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