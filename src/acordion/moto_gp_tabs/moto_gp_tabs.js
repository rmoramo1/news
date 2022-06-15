import React from "react";

export const Moto_gp_Tabs = () => {
    return (
        <div className="accordion" id="second_moto_gp">
            <div className="accordion-item">
                <h2 className="accordion-header" id="racing_1stq_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#events_Moto_gp" aria-expanded="true" aria-controls="events_Moto_gp">
                       EVENTS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="DRIVERS_MOTO_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#DRIVERS_MOTO_GP" aria-expanded="false" aria-controls="DRIVERS_MOTO_GP">
                        DRIVERS
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="features_Moto_GP_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#features_racing" aria-expanded="false" aria-controls="features_Moto_GP">
                        FUTURES
                    </button>
                </h2>
            </div>
        </div>
    )
}