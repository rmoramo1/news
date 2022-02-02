import React from "react";

export const MLB_Tabs = () => {
    return (
        <div className="accordion" id="second_mlb">
            <div className="accordion-item">
                <h2 className="accordion-header" id="mlb_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlb_games" aria-expanded="true" aria-controls="mlb_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="mlb_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlb_1stq" aria-expanded="true" aria-controls="mlb_1stq">
                        F5
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_mlb_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#QUARTERS_mlb" aria-expanded="false" aria-controls="QUARTERS_mlb">
                        INNINGS
                    </button>
                </h2>
                <div id="QUARTERS_mlb" className="accordion-collapse collapse" aria-labelledby="headingQuarters" data-bs-parent="#headingQuarters">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="secondQNLF_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#E6_9_score" aria-expanded="true" aria-controls="secondQNLF">
                                    6-9 Inning Score
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="tercerQ_ac">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Extra_Inning_Score" aria-expanded="false" aria-controls="tercerQ">
                                   Extra inning Score
                                </button>
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="mlb_1stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlb1st_H" aria-expanded="false" aria-controls="mlb1st_H">
                        1ST H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="mlb_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mlb2st_H" aria-expanded="false" aria-controls="mlb2st_H">
                        2ST H
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="props_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#props_mlb" aria-expanded="false" aria-controls="props_mlb">
                        PROPS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_mlb" aria-expanded="false" aria-controls="features_mlb">
                        FEATURES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="team_stats_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#team_stats_mlb" aria-expanded="false" aria-controls="team_stats_mlb">
                        TEAM STANDINGS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#player_stats_mlb" aria-expanded="false" aria-controls="player_stats_mlb">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="alarms_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#alarms_mlb" aria-expanded="false" aria-controls="alarms_mlb">
                        ALARMS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="results_mlb_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_mlb" aria-expanded="false" aria-controls="results_mlb">
                        RESULTS
                    </button>
                </h2>
            </div>
        </div>
    )
}