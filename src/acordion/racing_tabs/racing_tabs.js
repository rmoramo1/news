import React from "react";

export const RACING_Tabs = () => {
    return (
        <div className="accordion" id="second_racing">
            <div className="accordion-item">
                <h2 className="accordion-header" id="racing_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#events_nascar" aria-expanded="true" aria-controls="events_nascar">
                       EVENTS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="DRIVERS_NASCAR_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#DRIVERS_NASCAR" aria-expanded="false" aria-controls="DRIVERS_NASCAR">
                        DRIVERS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_racing_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_racing" aria-expanded="false" aria-controls="features_racing">
                        FUTURES
                    </button>
                </h2>
            </div>
        </div>
    )
}