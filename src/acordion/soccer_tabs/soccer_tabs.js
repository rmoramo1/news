import React from "react";

export const SOCCER_Tabs = () => {
    return (
        <div className="accordion" id="second_soccer">
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_games_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer_games" aria-expanded="true" aria-controls="soccer_games">
                        GAMES
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="HALFS_soccerr_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#HALFS_soccer" aria-expanded="false" aria-controls="HALFS_soccer">
                        HALFS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_py_stats">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#results_soccer" aria-expanded="false" aria-controls="results_soccer">
                        RESULTS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="soccer_2stH_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#soccer_PY_STATS" aria-expanded="false" aria-controls="soccer_PY_STATS">
                        PLAYER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_soccer_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#futures_soccer" aria-expanded="false" aria-controls="futures_soccer">
                        FEATURES
                    </button>
                </h2>
            </div>
        </div>
    )
}