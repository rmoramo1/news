import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_tenista } from "../../lines/single_tennista";

function Tennista_STATS() {
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

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12 p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-5">Estadísticas de los Tennistas</div>
                        <div className="col-lg-5">
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
                        store.tennista.map((item, index) => {
                            return (
                                <div key={index} className="col-4 p-2">
                                    <Single_tenista
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot}
                                        country={item.country}
                                        season={item.season}
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
export default Tennista_STATS;