import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Top_Headlines } from "../components/top_headlines";
import { Games_of_Day } from "../components/games_of_day";

function BOX_lines() {
    const params = useParams();
    const { store } = useContext(Context);
    let head_fighter_one;
    let head_fighter_two;
    let id_one;
    let id_two;
    store.stats_box_fighter.map((item, index) => {
        if (item.name == store.boxeo[params.theid].fighter_One) {
            head_fighter_one = item.headshot;
            id_one = index
        }
    })
    store.stats_box_fighter.map((item, index) => {
        if (item.name == store.boxeo[params.theid].fighter_Two) {
            head_fighter_two = item.headshot;
            id_two = index
        }
    })

    return (
        <div className="container-fluid">
            <div className="row g-0 text-center">
                <div className="col-lg-3 p-1 d-none d-lg-block">
                    <div className="col-12  shadow_spans bg-white"><Top_Headlines /></div>
                    <div className="col-12  shadow_spans bg-white mt-3"><Games_of_Day /></div>
                </div>
                <div className="col-lg-9 p-1">
                    <div className="col-12 py-3  shadow_spans bg-white">
                        <div className="col-lg-12">
                            <div className="bg_gradient_light">
                                <div className="col-12 fs-1">
                                    <span className="font_bold">Location: </span>  {store.boxeo[params.theid] && store.boxeo[params.theid].location_Fight}
                                </div>
                                <div className="col-12 font_bold fst-italic fs-2 py-2">
                                    <span className="font_bold">Event: </span> {store.boxeo[params.theid] && store.boxeo[params.theid].event} {store.boxeo[params.theid] && store.boxeo[params.theid].rounds} rounds
                                </div>
                                <div className="col-12 fs-4">
                                    <span className="font_bold">Date: </span> {store.boxeo[params.theid] && store.boxeo[params.theid].date} {store.boxeo[params.theid] && store.boxeo[params.theid].hour}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0 fst-italic fs-1 my-3 py-3">
                                    <div className="col-lg-5 font_bold">
                                        <div className="col-5 shadow_spans mx-auto bg_light">
                                            <Link className="text-white" to={`/boxer_st/${id_one}`}>
                                                <img className="img-fluid" src={head_fighter_one} alt="headshot of the player"></img>
                                                <div className="col-12 fs-4 text-white">
                                                    {store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex align-items-center justify-content-center">VR</div>
                                    <div className="col-lg-5 font_bold">
                                        <div className="col-5 shadow_spans mx-auto bg_light">
                                                <Link className="text-white" to={`/boxer_st/${id_two}`}>
                                            <img className="img-fluid" src={head_fighter_two} alt="headshot of the player"></img>
                                            <div className="col-12 fs-4 text-white">
                                                    {store.boxeo[params.theid] && store.boxeo[params.theid].fighter_Two}
                                            </div>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 mx-auto my-4 d-flex align-items-center justify-content-center">
                            <div className="row w-100 py-3">
                                <div className="col-lg-6 text-center font_bold fs-3">Winner: {store.boxeo[params.theid] && store.boxeo[params.theid].winner} </div>
                                <div className="col-lg-6 text-center font_bold fs-3">Finish by: {store.boxeo[params.theid] && store.boxeo[params.theid].finish_by}</div>
                            </div>
                        </div>
                        <div className="overflowX_scroll bg-white shadow">
                            <div className="odds-list">
                                <div className="row g-0  text-white text-center">
                                    <div className="col-2 bg_lines">Fighter</div>
                                    <div className="col-2 bg_lines">ML</div>
                                    <div className="col-2 bg_lines">Total</div>
                                    <div className="col-2 bg_lines">Juice</div>
                                </div>
                                <div className="row g-0 text-center font_color_base">
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}</div>
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].money_Line_One}</div>
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].total}</div>
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].juice_Over}</div>
                                </div>
                                <div className="row g-0 text-center mb-3 font_color_base">
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_Two}</div>
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].money_Line_Two}</div>
                                    <div className="col-2 bb1px lines"></div>
                                    <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].juice_Under}</div>
                                </div>
                                <div className="row g-0  text-white text-center">
                                    <div className="col-1 bg_lines">R1</div>
                                    <div className="col-1 bg_lines">R2</div>
                                    <div className="col-1 bg_lines">R3</div>
                                    <div className="col-1 bg_lines">R4</div>
                                    <div className="col-1 bg_lines">R5</div>
                                    <div className="col-1 bg_lines">R6</div>
                                    <div className="col-1 bg_lines">R7</div>
                                    <div className="col-1 bg_lines">R8</div>
                                    <div className="col-1 bg_lines">R9</div>
                                    <div className="col-1 bg_lines">R10</div>
                                    <div className="col-1 bg_lines">R11</div>
                                    <div className="col-1 bg_lines">R12</div>
                                </div>
                                <div className="row g-0 text-center font_color_base">
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r1_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r2_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r3_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r4_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r5_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r6_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r7_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r8_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r9_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r10_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r11_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r12_result}</div>
                                </div>
                                <div className="row g-0  text-white text-center">
                                    <div className="col-1 bg_lines">R13</div>
                                    <div className="col-1 bg_lines">R14</div>
                                    <div className="col-1 bg_lines">R15</div>
                                </div>
                                <div className="row g-0 text-center font_color_base">
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r13_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r14_result}</div>
                                    <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r15_result}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 p-1 d-block d-lg-none">
                    <div className="col-12  shadow_spans bg-white"><Top_Headlines /></div>
                    <div className="col-12  shadow_spans bg-white mt-3"><Games_of_Day /></div>
                </div>
            </div>

        </div>
    )
}
export default BOX_lines;