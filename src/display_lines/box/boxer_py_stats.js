import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Boxers } from "../../lines/single_boxer";

function Boxer_PY_STATS() {
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
        <div>
            <div className="title_sport bg_orange_dark text-white p-lg-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">Boxers Stats</div>
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
            <div className="row g-0">
                {
                    store.stats_box_fighter.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-6 p-1">
                                <Single_Boxers
                                    id={index}
                                    name={item.name}
                                    category={item.category}
                                    w={item.w}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Boxer_PY_STATS;