import React, { useContext, useState } from "react";
import { Spread_Lines } from "../../lines/spread_lines";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

export const NCAA_BASKET_2half = () => {
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
    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">NBA 2ND H</div>
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
                                <select className="form-select" name="month" aria-label="Default select example" defaultValue={monthShow} onChange={e => setmonth(e.target.value)} required>
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
                    {store.ncaa_basket_games.map((item, index) => {
                        let mes = item.date.slice(5, 7);
                        let ano = item.date.slice(0, 4);
                        if (mes == R_date && ano == year && item.type_of_line == typeOfLine) {
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