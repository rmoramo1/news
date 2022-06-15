import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

function BOX_lines() {
    const params = useParams();
    const { store } = useContext(Context);
    return (
        <div className="p-2 shadow">
            <div className="row g-0 pb-5">
                <div className="col-lg-6">
                    <div className="col-12 fs-5">
                        {store.boxeo[params.theid] && store.boxeo[params.theid].location_Fight} 
                    </div>
                    <div className="col-12">
                        <div className="row g-0 fst-italic fs-1">
                            <div className="col-lg-5 font_bold ">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}</div>
                            <div className="col-lg-2">VR</div>
                            <div className="col-lg-5 font_bold">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_Two}</div>
                        </div>
                    </div>
                    <div className="col-12 font_bold fst-italic fs-5 font_orange">{store.boxeo[params.theid] && store.boxeo[params.theid].event} {store.boxeo[params.theid] && store.boxeo[params.theid].rounds} rounds</div>
                    <div className="col-12">{store.boxeo[params.theid] && store.boxeo[params.theid].date} {store.boxeo[params.theid] && store.boxeo[params.theid].hour}</div>
                </div>
                <div className="col-lg-6 shadow border d-flex align-items-center justify-content-center">
                    <div className="row py-3">
                        <div className="col-6 text-end font_bold  fs-2">Winner: </div>
                        <div className="col-6 text-start font_bold fs-2">{store.boxeo[params.theid] && store.boxeo[params.theid].winner}</div>
                        <div className="col-12 text-start font_bold fs-2">Finish by: {store.boxeo[params.theid] && store.boxeo[params.theid].finish_by}</div>
                    </div>
                </div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">
                    <div className="row g-0  text-white text-center">
                        <div className="col-2 bg_lines">Fighter</div>
                        <div className="col-2 bg_lines">ML</div>
                        <div className="col-2 bg_lines">Total</div>
                        <div className="col-2 bg_lines">Juice</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].money_Line_One}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].total}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].juice_Over}</div>
                    </div>
                    <div className="row g-0 text-center mb-3">
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
                    <div className="row g-0 text-center">
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
                    <div className="row g-0 text-center">
                        <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r13_result}</div>
                        <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r14_result}</div>
                        <div className="col-1 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].r15_result}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BOX_lines;