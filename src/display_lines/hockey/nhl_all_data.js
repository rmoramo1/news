import React, {  useState } from "react";

import NHL_Games from "./nhl_games";
import { NHL_ONE_Q } from "./nhl_one_q";
import { Result_Quarters_Hockey } from "./result_quarters_hockey";
function NHL_All_Data() {

    const [estados, setEstados] = useState("NHL");
    if (estados === "NHL") {
        var NHL = "d-block";
        var NHL_F5_s = "d-none";
        var NHL_Extra = "d-none";
        var NHL_thre_q = "d-none";
        var NHL_four_q = "d-none";
    }
    if (estados === "1H") {
        NHL_F5_s = "d-block";
        NHL = "d-none";
        NHL_Extra = "d-none";
        NHL_thre_q = "d-none";
    }
    if (estados === "2H") {
        NHL_Extra = "d-block";
        NHL_F5_s = "d-none";
        NHL = "d-none";
        NHL_thre_q = "d-none";
    }

    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">
                            <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("NHL")} value={NHL} >Games</button></div>
                            <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1H")} value={NHL_F5_s}>1ST Q</button></div>
                            <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2H")} value={NHL_Extra}>QUARTERS SCORE</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={NHL}>
                <NHL_Games />
            </div>
            <div className={NHL_F5_s}>
                <NHL_ONE_Q />
            </div>
            <div className={NHL_Extra}>
                <Result_Quarters_Hockey />
            </div>
        </div>
    )
}
export default NHL_All_Data;