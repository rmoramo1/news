import React, { useState } from "react";

import { NCAA_BASKET_Games } from "./ncaa_basket_games";
import { NCAA_BASKET_2half } from "./ncaa_basket_2half";
import { NCAA_BASKET_1half } from "./ncaa_basket_1half";
import { NCAA_BASKET_Thre_q } from "./ncaa_basket_thre";
import { NCAA_BASKET_Four_q } from "./ncaa_basket_four_q";
import { NCAA_BASKET_one_q } from "./ncaa_basket_one_q";
import { NCAA_BASKET_Two_q } from "./ncaa_basket_two_q";

function Ncaa_Basket_All_Data() {

    const [estados, setEstados] = useState("NBA");
    if (estados === "NBA") {
        var NBA = "d-block";
        var NBA_1half_sp = "d-none";
        var NBA_2half_sp = "d-none";
        var NBA_thre_q = "d-none";
        var NBA_four_q = "d-none";
        var NBA_one_q_s = "d-none";
        var NBA_Two_q_s = "d-none";
    }
    if (estados === "1H") {
        NBA_1half_sp = "d-block";
        NBA = "d-none";
        NBA_2half_sp = "d-none";
        NBA_thre_q = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "2H") {
        NBA_2half_sp = "d-block";
        NBA_1half_sp = "d-none";
        NBA = "d-none";
        NBA_thre_q = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "3Q") {
        NBA_thre_q = "d-block";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        NBA = "d-none";
        NBA_four_q = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "4Q") {
        NBA_four_q = "d-block";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        NBA = "d-none";
        NBA_one_q_s = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "1Q") {
        NBA_one_q_s = "d-block";
        NBA_four_q = "d-none";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        NBA = "d-none";
        NBA_Two_q_s = "d-none";
    }
    if (estados === "2Q") {
        NBA_Two_q_s = "d-block";
        NBA_one_q_s = "d-none";
        NBA_four_q = "d-none";
        NBA_thre_q = "d-none";
        NBA_2half_sp = "d-none";
        NBA_1half_sp = "d-none";
        NBA = "d-none";
    }
    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="col-12 py-3">
                <div className="row w-100 g-0">
                    <div className="col-lg-8 mx-auto">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col p-1"><button className="btn_gradient_light" onClick={e => setEstados("NBA")} value={NBA} >Games</button></div>
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
            <div className={NBA}>
                <NCAA_BASKET_Games />
            </div>
            <div className={NBA_1half_sp}>
                <NCAA_BASKET_1half />
            </div>
            <div className={NBA_2half_sp}>
                <NCAA_BASKET_2half />
            </div>
            <div className={NBA_one_q_s}>
                <NCAA_BASKET_one_q />
            </div>
            <div className={NBA_Two_q_s}>
                <NCAA_BASKET_Two_q />
            </div>
            <div className={NBA_thre_q}>
                <NCAA_BASKET_Thre_q />
            </div>
            <div className={NBA_four_q}>
                <NCAA_BASKET_Four_q />
            </div>
        </div>
    )
}
export default Ncaa_Basket_All_Data;