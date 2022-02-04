import React from "react";

export const NCAA_BASEBALL_Tabs = () => {
    return (
        <div className="accordion" id="second_ncaa_baseball">
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_baseball_games_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball_games" aria-expanded="true" aria-controls="ncaa_baseball_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="ncaa_baseball_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ncaa_baseball_F5" aria-expanded="true" aria-controls="ncaa_baseball_F5">
                        F5
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_NCAA_baseball_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_NCAA_baseball" aria-expanded="false" aria-controls="QUARTERS_NCAA_baseball">
                        INNINGS
                    </button>
                </h2>
                <div id="QUARTERS_NCAA_baseball" className="accordion-collapse collapse" aria-labelledby="headingQuarters" data-bs-parent="#headingQuarters">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="six_nine_ncaa">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#E6_9_score_ncaa_base" aria-expanded="true" aria-controls="QUARTERS_NCAA_baseball">
                                    6-9 Inning Score
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="tercerQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Extra_Inning_Score_ncaa_base" aria-expanded="false" aria-controls="Extra_Inning_Score_ncaa_base">
                                   Extra inning Score
                                </button>
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_ncaa_baseball_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_ncaa_baseball" aria-expanded="false" aria-controls="features_ncaa_baseball">
                        FUTURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_ncaa_baseball_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_ncaa_baseball" aria-expanded="false" aria-controls="team_stats_ncaa_baseball">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_ncaa_baseball_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_ncaa_baseball" aria-expanded="false" aria-controls="player_stats_ncaa_baseball">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_ncaa_baseball_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_ncaa_baseball" aria-expanded="false" aria-controls="alarms_ncaa_baseball">
                        ALARMS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_ncaa_baseball_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_ncaa_baseball" aria-expanded="false" aria-controls="results_ncaa_baseball">
                        RESULTS
                    </button>
                </h2>
            </div>
        </div>
    )
}