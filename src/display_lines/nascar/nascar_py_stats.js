import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Nascar } from "../../lines/single_nascar";

function NASCAR_PY_STATS() {
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
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white">
                <div className="title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-6">Estadística de corredor de NASCAR</div>
                        <div className="col-lg-6">
                            <div className="row g-0">
                                <div className="col-2 text-center">Year</div>
                                <div className="col-lg-6 d-flex align-items-center">
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
                        <div className="quince_spans"></div>
                        <div className="quince_spans">Name</div>
                        <div className="quince_spans">Number Car</div>
                        <div className="quince_spans">Rank</div>
                        <div className="quince_spans">Starts</div>
                        <div className="quince_spans">Poles</div>
                        <div className="quince_spans">Top 5</div>
                        <div className="quince_spans">Top 10</div>
                        <div className="quince_spans">Laps Lead</div>
                        <div className="quince_spans">Pts</div>
                        <div className="quince_spans">AVG Laps</div>
                        <div className="quince_spans">AVG Finish</div>
                    </div>
                    {
                        store.nascar_drivers.map((item, index) => {
                            return (
                                <div key={index} className="col-12">
                                    <Single_Nascar
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot}
                                        rank={item.rank}
                                        number_car={item.number_car}
                                        starts={item.starts}
                                        country={item.country}
                                        poles={item.poles}
                                        top5={item.top5}
                                        top10={item.top10}
                                        laps_lead={item.laps_lead}
                                        pts={item.pts}
                                        AVG_laps={item.AVG_laps}
                                        AVG_finish={item.AVG_finish}
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
export default NASCAR_PY_STATS;