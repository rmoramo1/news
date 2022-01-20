import React, { useContext, useState } from "react";
import { Spread_Lines } from "../../lines/spread_lines";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

export const Nf2_1half = () => {
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
                    <div className="col-lg-4">NFL 2ST H</div>
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
                                    <Spread_Lines
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}
                                        spread_away={item.second_half_spread_away}
                                        spread_home={item.second_half_spread_home}
                                        juice_spread_away={item.second_half_juice_spread_away}
                                        juice_spread_home={item.second_half_juice_spread_home}
                                        moneyLineAway={item.second_half_moneyLineAway}
                                        moneyLineHome={item.second_half_moneyLineHome}
                                        total={item.second_half_spread_away}
                                        juice_total_over={item.juice_total_over}
                                        juice_total_under={item.juice_total_under}
                                        tt_away={item.second_half_tt_away}
                                        tt_home={item.second_half_tt_home}
                                        juice_over_away={item.second_half_juice_over_away}
                                        juice_under_away={item.second_half_juice_under_away}
                                        juice_over_home={item.second_half_juice_over_home}
                                        juice_under_home={item.second_half_juice_under_home}
                                        final_score_away={item.second_half_final_score_away}
                                        final_score_home={item.second_half_final_score_home}
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