import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { BOX_lines } from "../../lines/box_lines.js";
export const MMA_Event = () => {
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
                    {store.mma.map((item, index) => {
                        if (item.date == R_date) {
                            return (
                                <div key={index}>
                                    <BOX_lines
                                        date={item.date}
                                        hour={item.hour}
                                        event={item.event}
                                        rounds={item.rounds}
                                        location_Fight={item.location_Fight}
                                        fighter_One={item.fighter_One}
                                        money_Line_One={item.money_Line_One}
                                        fighter_Two={item.fighter_Two}
                                        winner={item.winner}
                                        finish_by={item.finish_by}
                                        r1_result={item.r1_result}
                                        r2_result={item.r2_result}
                                        r3_result={item.r3_result}
                                        r4_result={item.r4_result}
                                        r5_result={item.r5_result}
                                        r6_result={item.r6_result}
                                        r7_result={item.r7_result}
                                        r8_result={item.r8_result}
                                        r9_result={item.r9_result}
                                        r10_result={item.r10_result}
                                        r11_result={item.r11_result}
                                        r12_result={item.r12_result}
                                        r13_result={item.r13_result}
                                        r14_result={item.r14_result}
                                        r15_result={item.r15_result}
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