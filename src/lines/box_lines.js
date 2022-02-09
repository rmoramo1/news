import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

function BOX_lines() {
    const params = useParams();
    const { store } = useContext(Context);
    return (
        <div className="p-2 shadow">
            <div className="row g-0 text-center py-3">
                <div className="col-2 font_bold">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}</div>
                <div className="col-2">VRS</div>
                <div className="col-2 font_bold">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_Two}</div>
                <div className="col-2 font_bold bg_lines text-white">Winner</div>
                <div className="col-2 font_bold bg_lines text-white">{store.boxeo[params.theid] && store.boxeo[params.theid].winner}</div>
            </div>
            <div className="row g-0  text-white text-center">
                <div className="col-2 bg_lines">Date</div>
                <div className="col-2 bg_lines">Hour</div>
                <div className="col-2 bg_lines">Event</div>
                <div className="col-2 bg_lines">Rounds</div>
                <div className="col-2 bg_lines">Location</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].date}</div>
                <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].hour}</div>
                <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].event}</div>
                <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].rounds}</div>
                <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].location_Fight}</div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">
                    <div className="row g-0  text-white text-center">
                        <div className="col-2 bg_lines">Fighter One</div>
                        <div className="col-2 bg_lines">ML</div>
                        <div className="col-2 bg_lines">Fighter Two</div>
                        <div className="col-2 bg_lines">ML</div>
                        <div className="col-2 bg_lines">Winner</div>
                        <div className="col-2 bg_lines">Finish By</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_One}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].money_Line_One}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].fighter_Two}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].money_Line_Two}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].winner}</div>
                        <div className="col-2 bb1px lines">{store.boxeo[params.theid] && store.boxeo[params.theid].finish_by}</div>
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