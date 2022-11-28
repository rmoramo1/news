import React, { useState } from "react";

import { NCAA_BASEBALL_Games } from "./ncaa_baseball_games";
import { NCAA_BASEBALL_F5 } from "./ncaa_baseball_f5";
import { Six_Nine_Inning_NCCAA_Baseball } from "./six_nine_inning_ncaa_baseball";
import { Extra_Inning_NCAA_BASEBALL } from "./extra_inning_ncaa_baseball";



function NCAA_BASEBALL_All_Data() {

    const [estados, setEstados] = useState("MLB");
    if (estados === "MLB") {
        var MLB = "d-block";
        var MLB_F5_s = "d-none";
        var MLB_Extra = "d-none";
        var MLB_thre_q = "d-none";
        var MLB_four_q = "d-none";
    }
    if (estados === "1H") {
        MLB_F5_s = "d-block";
        MLB = "d-none";
        MLB_Extra = "d-none";
        MLB_thre_q = "d-none";
    }
    if (estados === "2H") {
        MLB_Extra = "d-block";
        MLB_F5_s = "d-none";
        MLB = "d-none";
        MLB_thre_q = "d-none";
    }
    if (estados === "3Q") {
        MLB_thre_q = "d-block";
        MLB_Extra = "d-none";
        MLB_F5_s = "d-none";
        MLB = "d-none";
    }

    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">

                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("MLB")} value={MLB} >Games</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1H")} value={MLB_F5_s}>F5 Inning</button></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2H")} value={MLB_Extra}>6-9 Inning Score</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("3Q")} value={MLB_thre_q}>Extra Inning Score</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={MLB}>
                <NCAA_BASEBALL_Games />
            </div>
            <div className={MLB_F5_s}>
                <NCAA_BASEBALL_F5 />
            </div>
            <div className={MLB_Extra}>
                <Six_Nine_Inning_NCCAA_Baseball />
            </div>
            <div className={MLB_thre_q}>
                <Extra_Inning_NCAA_BASEBALL />
            </div>
        </div>
    )
}
export default NCAA_BASEBALL_All_Data;