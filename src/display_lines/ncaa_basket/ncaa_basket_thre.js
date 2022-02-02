import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { ThreSTq } from "../../lines/Threq ";

export const NCAA_BASKET_Thre_q = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    let monthShow = [];
    if (monthLux < 10) {
        monthShow.push("0" + monthLux);
    } else {
        monthShow.push(monthLux);
    }

    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    const [week, setweek] = useState(dateShow);
    let R_date = year+"-"+month+"-"+week;  
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

    let selectDay = [];
    for (let i = 1; i < 32; i++) {
        if (i < 10) {
            selectDay.push("0" + i);
        } else {
            selectDay.push(i);
        }
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-lg-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">3ST Q NCAA</div>
                    <div className="col-lg-10">
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
                                    <select className="form-select" name="week" aria-label="Default select example" defaultValue={week} onChange={e => setweek(e.target.value)} required>
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
            </div>
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    {store.ncaa_basket_games.map((item, index) => {
                        if (item.date == R_date) {
                            return (
                                <div key={index}>
                                    <ThreSTq
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}

                                        q3_half_spread_away={item.q3_half_spread_away}
                                        q3_half_spread_home={item.q3_half_spread_home}
                                        q3_half_juice_spread_away={item.q3_half_juice_spread_away}
                                        q3_half_juice_spread_home={item.q3_half_juice_spread_home}
                                        q3_half_moneyLineAway={item.q3_half_moneyLineAway}
                                        q3_half_moneyLineHome={item.q3_half_moneyLineHome}
                                        q3_half_total={item.q3_half_total}
                                        q3_juice_over={item.q3_juice_over}
                                        q3_juice_under={item.q3_juice_under}
                                        q3_half_tt_away={item.q3_half_tt_away}
                                        q3_half_tt_home={item.q3_half_tt_home}
                                        q3_half_juice_over_away={item.q3_half_juice_over_away}
                                        q3_half_juice_over_home={item.q3_half_juice_over_home}
                                        q3_half_juice_under_away={item.q3_half_juice_under_away}
                                        q3_half_juice_under_home={item.q3_half_juice_under_home}
                                        q3_half_final_score_away={item.q3_half_final_score_away}
                                        q3_half_final_score_home={item.q3_half_final_score_home}
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