import React from "react";

export const BOX_Tabs = () => {
    return (
        <div className="accordion" id="second_box">
            <div className="accordion-item">
                <h2 className="accordion-header" id="event_box_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#event_box" aria-expanded="true" aria-controls="event_box">
                        EVENT
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="QUARTERS_box_ac">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BOXERS_ST" aria-expanded="false" aria-controls="BOXERS_ST">
                        BOXERS ST
                    </button>
                </h2>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="futures_box_tab">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#futures_box" aria-expanded="false" aria-controls="futures_box">
                        FUTURES
                    </button>
                </h2>
            </div>
        </div>
    )
}