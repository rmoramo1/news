import React from "react";
import { BOX_Tabs } from "./box_tabs/box_tabs";
import { MMA_Tabs } from "./mma_tabs/mma_tabs";



export const MARCIAL_Tabs = () => {
    return (
        <div className="accordion" id="marcial_acordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="box_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#box_ac" aria-expanded="true" aria-controls="box_ac">
                        BOX
                    </button>
                </h2>
                {/* tabs */}
                <div id="box_ac" className="accordion-collapse collapse" aria-labelledby="nba_tabs" data-bs-parent="#marcial_acordion">
                   <BOX_Tabs/>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="mma_tabs">
                    <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#mma" aria-expanded="false" aria-controls="mma">
                        MMA
                    </button>
                </h2>
                <div id="mma" className="accordion-collapse collapse" aria-labelledby="mma_tabs" data-bs-parent="#marcial_acordion">
                    <MMA_Tabs/>
                </div>
            </div>
        </div>
    )
}