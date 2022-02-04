import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { RL_Lines } from "../../lines/rl_lines.js";
export const NCAA_BASEBALL_Games = () => {
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
                    <div className="col-lg-2">NCAA Games</div>
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
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="ncaa_baseballCollapse" data-bs-parent="#sports">
                    {store.ncaa_baseball.map((item, index) => {
                        if (item.date == R_date) {
                            return (
                                <div key={index}>
                                    <RL_Lines
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}
                                        rl_away={item.rl_away}
                                        rl_home={item.rl_home}
                                        juice_rl_away={item.juice_rl_away}
                                        juice_rl_home={item.juice_rl_home}
                                        moneyLineAway={item.moneyLineAway}
                                        moneyLineHome={item.moneyLineHome}
                                        total={item.total}
                                        juice_total_over={item.juice_total_over}
                                        juice_total_under={item.juice_total_under}
                                        tt_away={item.tt_away}
                                        tt_home={item.tt_home}
                                        juice_over_away={item.juice_over_away}
                                        juice_under_away={item.juice_under_away}
                                        juice_over_home={item.juice_over_home}
                                        juice_under_home={item.juice_under_home}
                                        final_score_away={item.final_score_away}
                                        final_score_home={item.final_score_home}
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