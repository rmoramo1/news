import React, { useState } from "react";
import WNba_Games from "./wnba_games";
import { WNBA_1half } from "./wnba_1half";
import { WNBA_2half } from "./wnba_2half";
import { WNBA_Thre_q } from "./wnba_thre";
import { WNBA_Four_q } from "./wnba_four_q";
import { WNBA_one_q } from "./wnba_one_q";
import { WNBA_Two_q } from "./wnba_two_q";

function WNBA_All_Data() {

    const [estados, setEstados] = useState("WNBA");
    if (estados === "WNBA") {
        var WNBA = "d-block";
        var NBA_1half_sp = "d-none";
        var NBA_2half_sp = "d-none";
        var NBA_thre_q = "d-none";
        var NBA_four_q = "d-none";
        var NBA_one_q_s = "d-none";
        var NBA_Two_q_s = "d-none";
    }
    if (estados === "1H") {
        NBA_1half_sp = "d-block";
        WNBA = "d-none";
        NBA_2half_sp = "d-none";
        NBA_thre_q = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "2H") {
        NBA_2half_sp = "d-block";
        NBA_1half_sp = "d-none";
        WNBA = "d-none";
        NBA_thre_q = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "3Q") {
        NBA_thre_q = "d-block";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        WNBA = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "4Q") {
        NBA_four_q = "d-block";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        WNBA = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "1Q") {
        NBA_one_q_s = "d-block";
        NBA_four_q = "d-none";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        WNBA = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "2Q") {
        NBA_Two_q_s = "d-block";
        NBA_one_q_s = "d-none";
        NBA_four_q = "d-none";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        WNBA = "d-none";
    }
    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("WNBA")} value={WNBA} >Games</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1H")} value={NBA_1half_sp}>1st Half</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2H")} value={NBA_2half_sp}>2nd Half</button></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1Q")} value={NBA_one_q_s}>1Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2Q")} value={NBA_Two_q_s}>2Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("3Q")} value={NBA_thre_q}>3Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("4Q")} value={NBA_four_q}>4Q</button></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={WNBA}>
                <WNba_Games />
            </div>
            <div className={NBA_1half_sp}>
                <WNBA_1half />
            </div>
            <div className={NBA_2half_sp}>
                <WNBA_2half />
            </div>
            <div className={NBA_one_q_s}>
                <WNBA_one_q />
            </div>
            <div className={NBA_Two_q_s}>
                <WNBA_Two_q />
            </div>
            <div className={NBA_thre_q}>
                <WNBA_Thre_q />
            </div>
            <div className={NBA_four_q}>
                <WNBA_Four_q />
            </div>
        </div>
    )
}
export default WNBA_All_Data;