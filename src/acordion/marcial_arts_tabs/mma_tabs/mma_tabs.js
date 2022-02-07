import React from "react";

export const MMA_Tabs = () => {
    return (
        <div className="accordion" id="second_mma">
            <div className="accordion-item">
                <h2 className="accordion-header" id="mma_events_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mma_events" aria-expanded="true" aria-controls="mma_events">
                        EVENTS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="player_stats_mma_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mma_fighter_st" aria-expanded="false" aria-controls="mma_fighter_st">
                        FIGHTER STATS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="futures_mma_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#futures_mma" aria-expanded="false" aria-controls="futures_mma">
                        FUTURES
                    </button>
                </h2>
            </div>
        </div>
    )
}