import React, { useState } from "react";

import { Ncaa_Football_1half } from "./ncaa_football_1half";
import { Ncaa_Football_2half } from "./ncaa_football_2half";
import { Ncaa_Football_one_q } from "./ncaa_football_one_q";
import {Ncaa_Football_Two_q} from "./ncaa_football_two_q";
import { Ncaa_Football_Four_q } from "./ncaa_football_four_q";
import { Ncaa_Football_Thre_q } from "./ncaa_football_thre";
import { Ncaa_Football_Games } from "./ncaa_football_games";

function NCAA_Football_All_Data() {

    const [estados, setEstados] = useState("NFL");
    if (estados == "NFL") {
        var NFL = "d-block";
        var nfl_1half = "d-none";
        var nfl_2half = "d-none";
        var nfl_thre_q = "d-none";
        var nfl_four_q = "d-none";
        var nfl_one_q = "d-none";
        var nfl_two_q = "d-none";
    }
    if (estados == "1H") {
        nfl_1half = "d-block";
        NFL = "d-none";
        nfl_2half = "d-none";
        nfl_thre_q = "d-none";
        nfl_four_q = "d-none";
        nfl_one_q = "d-none";
        nfl_two_q = "d-none";
    }
    if (estados == "2H") {
        nfl_2half = "d-block";
        nfl_1half = "d-none";
        NFL = "d-none";
        nfl_thre_q = "d-none";
        nfl_four_q = "d-none";
        nfl_one_q = "d-none";
        nfl_two_q = "d-none";
    }
    if (estados == "3Q") {
        nfl_thre_q = "d-block";
        nfl_2half = "d-none";
        nfl_1half = "d-none";
        NFL = "d-none";
        nfl_four_q = "d-none";
        nfl_two_q = "d-none";
        nfl_one_q = "d-none";
    }
    if (estados == "4Q") {
        nfl_four_q = "d-block";
        nfl_thre_q = "d-none";
        nfl_2half = "d-none";
        nfl_1half = "d-none";
        NFL = "d-none";
        nfl_one_q = "d-none";
        nfl_two_q = "d-none";
    }
    if (estados == "1Q") {
        nfl_one_q = "d-block";
        nfl_four_q = "d-none";
        nfl_thre_q = "d-none";
        nfl_2half = "d-none";
        nfl_1half = "d-none";
        NFL = "d-none";
        nfl_two_q = "d-none";
    }
    if (estados == "2Q") {
        nfl_two_q = "d-block";
        nfl_one_q = "d-none";
        nfl_four_q = "d-none";
        nfl_thre_q = "d-none";
        nfl_2half = "d-none";
        nfl_1half = "d-none";
        NFL = "d-none";
    }
    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("NFL")} value={NFL} >Games</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1H")} value={nfl_1half}>1st Half</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2H")} value={nfl_2half}>2nd Half</button></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-0 text-center">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("1Q")} value={nfl_one_q}>1Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("2Q")} value={nfl_two_q}>2Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("3Q")} value={nfl_thre_q}>3Q</button></div>
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("4Q")} value={nfl_four_q}>4Q</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={NFL}>
                <Ncaa_Football_Games />
            </div>
            <div className={nfl_1half}>
                <Ncaa_Football_1half />
            </div>
            <div className={nfl_2half}>
                <Ncaa_Football_2half />
            </div>
            <div className={nfl_one_q}>
                <Ncaa_Football_one_q />
            </div>
            <div className={nfl_two_q}>
                <Ncaa_Football_Two_q />
            </div>
            <div className={nfl_thre_q}>
                <Ncaa_Football_Thre_q />
            </div>
            <div className={nfl_four_q}>
                <Ncaa_Football_Four_q />
            </div>
        </div>
    )
}
export default NCAA_Football_All_Data;