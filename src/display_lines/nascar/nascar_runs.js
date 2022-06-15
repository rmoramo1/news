import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { Nascar_Lines } from "../../lines/nacar_lines.js";
export const Nascar_Runs = () => {
    const { store } = useContext(Context);
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;

    let monthShow =[];
    if(monthLux < 10){
        monthShow.push("0" + monthLux);
    }else{
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
        if(i < 10){
            selectMonth.push("0"+i);
        }else{
            selectMonth.push(i);
        }
    }

    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_orange_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">Nascar MATCHUPS</div>
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
            <div className="accordion-item overflowX_scroll">
                <div className="accordion-collapse collapse show row g-0" id="nbaCollapse" data-bs-parent="#sports">
                    {store.nascar.map((item, index) => {
                        let mes = item.date.slice(5,7);
                        let ano = item.date.slice(0,4);
                        if (mes == R_date && ano == year) {
                            return (
                                <div key={index} className="col-lg-4">
                                    <Nascar_Lines
                                        id={index}
                                        race={item.race}
                                        location={item.location}
                                        track={item.track}
                                        place1={item.place1}
                                        place2={item.place2}
                                        place3={item.place3}
                                        date={item.date}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    )
}