import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { Single_MMA_Lines } from "../../lines/single_mma_lines.js";
function MMA_Event() {
    const { store } = useContext(Context);
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;

    let monthShow = [];
    if (monthLux < 10) {
        monthShow.push("0" + monthLux);
    } else {
        monthShow.push(monthLux);
    }

    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    let R_date = month;
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            selectMonth.push("0" + i);
        } else {
            selectMonth.push(i);
        }
    }
    let lista_eventos = [];
    let events = store.mma.map((item, index) => {
        if (lista_eventos.includes(item.event) ) {
          
        }
        else if(item.date.slice(5, 7) == month && item.date.slice(0, 4) == year) {
            lista_eventos.push(item.event)
        }
         else {
            
        }
    });
    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">MMA EVENTS</div>
                    <div className="col-lg-10">
                        <div className="row g-0">
                            <div className="col-2 text-center">Year</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="Day" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                    {
                                        selectYear.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-2 text-center">Month</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="month" aria-label="Default select example" defaultValue={month} onChange={e => setmonth(e.target.value)} required>
                                    {
                                        selectMonth.map((index) => {
                                            return (
                                                <option key={index} name="month" value={index}>{index}</option>
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
                    lista_eventos.map((item_event, index) => {
                        return (
                            <div className="col-lg-4 p-3">
                                <div className="col-12 bg_base_dark text-center text-white">
                                    {item_event}
                                </div>
                                <div className="col-12 maxH shadow_spans">
                                    {store.mma.map((item, index) => {
                                        let mes = item.date.slice(5, 7);
                                        let ano = item.date.slice(0, 4);
                                        if (mes == R_date && ano == year && item.event == item_event ) {
                                            return (
                                                <div key={index} className="col">
                                                    <Single_MMA_Lines
                                                        id={index}
                                                        fighter_One={item.fighter_One}
                                                        fighter_Two={item.fighter_Two}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};
export default MMA_Event;