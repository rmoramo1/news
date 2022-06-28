import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { OneSTq } from "../../lines/Oneq";
export const MLB_F5 = () => {
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
    const [typeOfLine, settypeOfLine] = useState("");
    console.log(typeOfLine)
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
	let mlbFilter = store.mlb;
	var byDate = mlbFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});
    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_orange_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">F5 MLB</div>
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
                            <div className="col-2 text-center">Type of Line</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="tipe" aria-label="Default select example" defaultValue={" "} onChange={e => settypeOfLine(e.target.value)} required>
                                    {
                                        store.type_of_line.map((index) => {
                                            return (
                                                <option key={index} name="tipe" value={index}>{index}</option>
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
                <div className="accordion-collapse collapse show" id="mlbCollapse" data-bs-parent="#sports">
                    {mlbFilter.map((item, index) => {
                        let mes = item.date.slice(5, 7);
                        let ano = item.date.slice(0, 4);
                        if (mes == R_date && ano == year && item.type_of_line == typeOfLine) {
                            return (
                                <div key={index}>
                                    <OneSTq
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}

                                        q1_half_spread_away={item.rl_away_f5}
                                        q1_half_spread_home={item.rl_home_f5}
                                        q1_half_juice_spread_away={item.juice_rl_away_f5}
                                        q1_half_juice_spread_home={item.juice_rl_home_f5}
                                        q1_half_moneyLineAway={item.moneyLineAway_f5}
                                        q1_half_moneyLineHome={item.moneyLineHome_f5}
                                        q1_half_total={item.total_f5}
                                        q1_juice_over={item.juice_total_over_f5}
                                        q1_juice_under={item.juice_total_under_f5}
                                        q1_half_tt_away={item.tt_away_f5}
                                        q1_half_tt_home={item.tt_home_f5}
                                        q1_half_juice_over_away={item.juice_over_away_f5}
                                        q1_half_juice_over_home={item.juice_over_home_f5}
                                        q1_half_juice_under_away={item.juice_under_away_f5}
                                        q1_half_juice_under_home={item.juice_under_home_f5}
                                        q1_half_final_score_away={item.fs_away_f5}
                                        q1_half_final_score_home={item.fs_home_f5}
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