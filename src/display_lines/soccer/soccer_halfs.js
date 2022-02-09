import React, { useContext, useState } from "react";
import DateTime from '../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../store/appContext";

import { Goal_Lines } from "../../lines/goal_lines.js";
export const Soccer_Halfs = () => {
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

    let Country_drop = [];
    store.soccer.map((item) => {
        if(Country_drop.includes(item.country)){

        }else{
            Country_drop.push(item.country);
        }
    })
    let tournament_drop = [];
    store.soccer.map((item) => {
        if(tournament_drop.includes(item.tournament)){

        }else{
            tournament_drop.push(item.tournament);
        }
    })

    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    const [Day, setDay] = useState(dateShow);
    const [Country, setCountry] = useState("Costa Rica");
    const [Tournament, setTournament] = useState("PRIMERA DIVICIO");

    let R_date = year + "-" + month + "-" + Day;
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
            <div className=" title_sport bg_orange_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">Soccer Halfs</div>
                    <div className="col-lg-4 ">
                        <div className="row g-0">
                            <div className="col-lg-6 px-lg-1 py-1 py-lg-0 d-flex align-items-center">
                                <select className="form-select" name="Day" aria-label="Default select example" defaultValue={Country} onChange={e => setCountry(e.target.value)} required>
                                    {
                                        Country_drop.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <select className="form-select" name="month" aria-label="Default select example" defaultValue={Tournament} onChange={e => setTournament(e.target.value)} required>
                                    {
                                        tournament_drop.map((index) => {
                                            return (
                                                <option key={index} name="month" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto">
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
                <div className="accordion-collapse collapse show" id="nbaCollapse" data-bs-parent="#sports">
                    {store.soccer.map((item, index) => {
                        if (item.date == R_date && item.country == Country && item.tournament == Tournament) {
                            return (
                                <div key={index}>
                                    <Goal_Lines
                                        away={item.away}
                                        home={item.home}
                                        hour={item.hour}
                                        status={item.status}
                                        date={item.date}
                                        goal_line_away={item.goal_away_1H}
                                        goal_line_home={item.goal_home_1H}
                                        juice_goal_away={item.juice_goal_away_1H}
                                        juice_goal_home={item.juice_goal_home_1H}
                                        moneyLineAway={item.moneyLineAway_1H}
                                        moneyLineHome={item.moneyLineHome_1H}
                                        total={item.total_1H}
                                        juice_total_over={item.H1_juice_over}
                                        juice_total_under={item.H1_juice_under}
                                        tt_away={item.tt_away_1H}
                                        tt_home={item.tt_home_1H}
                                        juice_over_away={item.juice_over_away_1H}
                                        juice_under_away={item.juice_under_away_1H}
                                        juice_over_home={item.juice_over_home_1H}
                                        juice_under_home={item.juice_under_home_1H}
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