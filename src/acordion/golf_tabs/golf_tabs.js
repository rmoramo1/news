import React from "react";

export const GOLF_Tabs = () => {
    return (
        <div className="accordion" id="second_golf">
            <div className="accordion-item">
                <h2 className="accordion-header" id="golf_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golf_Events" aria-expanded="true" aria-controls="golf_Events">
                       EVENTS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_golf_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#golfers" aria-expanded="false" aria-controls="golfers">
                        GOLFERS
                    </button>
                </h2>

            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_golf_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_golf" aria-expanded="false" aria-controls="features_golf">
                        FUTURES
                    </button>
                </h2>
            </div>
        </div>
    )
}