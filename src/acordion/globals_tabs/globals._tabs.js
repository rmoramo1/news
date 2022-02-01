import React from "react";
import { Injuries_Global } from "../../display_lines/globals/injuries_global";


export const Globals_Tabs = () => {
    return (
        <div className="col" >
            <div id="Injuries_glob" className="accordion-collapse collapse" aria-labelledby="nfl_1stq_ac" data-bs-parent="#items_tab_master">
                <div className="y">
                    <Injuries_Global />
                </div>
            </div>
        </div>
    )

}