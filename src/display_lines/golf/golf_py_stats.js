import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Golfer } from "../../lines/single_golfer";

function Golfer_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Arizona Diamondbacks");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12 p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-2">Estadísticas de los Golfistas</div>
                        <div className="col-lg-10">
                            <div className="row g-0">
                                <div className="col-2 text-center">Year</div>
                                <div className="col-lg-2 d-flex align-items-center">
                                    <select className="form-select" name="week" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                        {
                                            selectYear.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 overflowX_scroll">
                    <div className="row g-0 text-center bg_lines text-white odds-list">
                        <div className="diez_spans"></div>
                        <div className="diez_spans">Name</div>
                        <div className="diez_spans">Swing</div>
                        <div className="diez_spans bg_lines">Cuts</div>
                        <div className="diez_spans bg_lines">Top 10</div>
                        <div className="diez_spans bg_lines">W</div>
                        <div className="diez_spans bg_lines">Rnds</div>
                        <div className="diez_spans bg_lines">Holes</div>
                        <div className="diez_spans bg_lines">Avg</div>
                    </div>
                    {
                        store.golfer.map((item, index) => {
                            return (
                                <div key={index} className="col-12">
                                    <Single_Golfer
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot}
                                        holes={item.holes}
                                        swing={item.swing}
                                        cuts={item.cuts}
                                        top10={item.top10}
                                        w={item.w}
                                        rnds={item.rnds}
                                        avg={item.avg}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Golfer_PY_STATS;