import React, {  useState } from "react";

import Soccer_Games from './soccer_games';
import Soccer_Halfs from './soccer_halfs';

function Soccer_All_Data() {

    const [estados, setEstados] = useState("SOCCER");
    if (estados === "SOCCER") {
        var SOCCER = "d-block";
        var NHL_F5_s = "d-none";
        var NHL_Extra = "d-none";
        var NHL_thre_q = "d-none";
        var NHL_four_q = "d-none";
    }
    if (estados === "1H") {
        NHL_F5_s = "d-block";
        SOCCER = "d-none";
        NHL_Extra = "d-none";
        NHL_thre_q = "d-none";
    }
    if (estados === "2H") {
        NHL_Extra = "d-block";
        NHL_F5_s = "d-none";
        SOCCER = "d-none";
        NHL_thre_q = "d-none";
    }

    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">
                            <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("SOCCER")} value={SOCCER} >Games</button></div>
                            <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1H")} value={NHL_F5_s}>1ST Q</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={SOCCER}>
                <Soccer_Games />
            </div>
            <div className={NHL_F5_s}>
                <Soccer_Halfs />
            </div>
        </div>
    )
}
export default Soccer_All_Data;