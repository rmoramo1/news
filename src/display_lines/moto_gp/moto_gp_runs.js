import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { Moto_GP_Lines } from "../../lines/moto_gp_lines";
function Moto_GP_Runs(){
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
        <div className="bg-white mh_display">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">MOTO GP MATCHUPS</div>
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
                    {store.moto_gp.map((item, index) => {
                        let mes = item.date.slice(5,7);
                        let ano = item.date.slice(0,4);
                        if (mes == R_date && ano == year) {
                            return (
                                <div key={index} className="col-lg-4">
                                    <Moto_GP_Lines
                                        id={index}
                                        race={item.race}
                                        location={item.location}
                                        track={item.track}
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
};
export default Moto_GP_Runs