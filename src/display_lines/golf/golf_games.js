import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";
import { Golf_lines } from "../../lines/golf_lines.js";
export const GOLF_Games = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;

    let dateShow =[];
    if(dateLux < 10){
        dateShow.push("0" + dateLux);
    }else{
        dateShow.push(dateLux);
    }
    let monthShow =[];
    if(monthLux < 10){
        monthShow.push("0" + monthLux);
    }else{
        monthShow.push(monthLux);
    }
    
    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    const [Day, setDay] = useState(dateShow);
    let R_date = year+"-"+month+"-"+Day;    
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

    let selectDay = [];
    for (let i = 1; i < 32; i++) {
        if(i < 10){
            selectDay.push("0"+i);
        }else{
            selectDay.push(i);
        }
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-lg-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">GOLF EVENTS</div>
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
                            <div className="col-2 text-center">Day</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="Day" aria-label="Default select example" defaultValue={Day} onChange={e => setDay(e.target.value)} required>
                                    {
                                        selectDay.map((index) => {
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
            <div className="accordion-item overflowX_scroll">
                <div className="accordion-collapse collapse show" id="nbaCollapse" data-bs-parent="#sports">
                    {store.golf.map((item, index) => {
                        if (item.date == R_date) {
                            return (
                                <div key={index}>
                                    <Golf_lines
                                        event={item.event}
                                        location={item.location}
                                        hour={item.hour}
                                        place1={item.place1}
                                        place2={item.place2}
                                        place3={item.rl_away}
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