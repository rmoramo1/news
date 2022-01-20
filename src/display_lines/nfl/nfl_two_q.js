import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { TwoSTq } from "../../lines/Twoq";
export const Nfl_Two_q = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [week, setweek] = useState(dateLux);
    const [year, setyear] = useState("2022");

    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        selectWeek.push(i);
    }
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-1 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">2ST Q NFL</div>
                    <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">WEEK</div>
                            <div className="col-lg-3 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" defaultValue={week} onChange={e => setweek(e.target.value)} required>
                                    {
                                        selectWeek.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3 text-center">YEAR</div>
                            <div className="col-lg-3 d-flex align-items-center">
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
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    {store.nfl.map((item, index) => {
                        if (item.date.includes(year) && item.week == week) {
                            return (
                                <div key={index}>
                                    <TwoSTq
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}

                                        q2_half_spread_away={item.q2_half_spread_away}
                                        q2_half_spread_home={item.q2_half_spread_home}
                                        q2_half_juice_spread_away={item.q2_half_juice_spread_away}
                                        q2_half_juice_spread_home={item.q2_half_juice_spread_home}
                                        q2_half_moneyLineAway={item.q2_half_moneyLineAway}
                                        q2_half_moneyLineHome={item.q2_half_moneyLineHome}
                                        q2_half_total={item.q2_half_total}
                                        q2_juice_over={item.q2_juice_over}
                                        q2_juice_under={item.q2_juice_under}
                                        q2_half_tt_away={item.q2_half_tt_away}
                                        q2_half_tt_home={item.q2_half_tt_home}
                                        q2_half_juice_over_away={item.q2_half_juice_over_away}
                                        q2_half_juice_over_home={item.q2_half_juice_over_home}
                                        q2_half_juice_under_away={item.q2_half_juice_under_away}
                                        q2_half_juice_under_home={item.q2_half_juice_under_home}
                                        q2_half_final_score_away={item.q2_half_final_score_away}
                                        q2_half_final_score_home={item.q2_half_final_score_home}
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