import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { TwoSTq } from "../../lines/Twoq";
export const Ncaa_Football_Two_q = () => {
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
	let ncaa_footballFilter = store.ncaa_football;
	var byDate = ncaa_footballFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});
    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">2ST Q NFL FOOTBALL</div>
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
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    {ncaa_footballFilter.map((item, index) => {
                        let mes = item.date.slice(5, 7);
                        let ano = item.date.slice(0, 4);
                        if (mes == R_date && ano == year && item.type_of_line == typeOfLine) {
                            let url_aw = "";
                            let url_hm = "";
                            store.logos_ncaa_football.map((item2) => {
                                if (item2.team == item.away) {
                                    url_aw = item2.url
                                }
                            })
                            store.logos_ncaa_football.map((item3) => {
                                if (item3.team == item.home) {
                                    url_hm = item3.url
                                }
                            })
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
                                        logo_away={url_aw}
                                        logo_home={url_hm}
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