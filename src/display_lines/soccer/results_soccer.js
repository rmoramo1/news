import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Results } from "../../lines/results";
import { Single_Top_Headline } from '../../components/single_top_headline';
import { Games_of_Day } from "../../components/games_of_day";
function Results_SOCCER() {
    let away_team = "";
    let home_team = "";
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
    let R_date = year + "-" + month + "-" + week;
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
    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="col-12 p-2">
            <div className="col-12 d-block d-lg-none py-3">
                <button className="btn btn_orange" type="button" data-bs-toggle="offcanvas" data-bs-target="#Titulares_principales" aria-controls="Titulares_principales">
                    Titulares Principales
                </button>
                <button className="btn col-6 btn_orange float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#Games_of_Day" aria-controls="Games_of_Day">
                    Juegos del Día
                </button>
            </div>
            <div className="rounded_span shadow_spans bg-white mh_display">
                <div className="row g-0">
                    <div className="col-lg-2 border_right  d-none d-lg-block">
                        <div className='col-12 font_impact fs-4 text-center'>
                            <span className="font_color_base"><i className="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                        </div>
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "SOCCER") {
                                    return (
                                        <div key={index} className="col-12">
                                            <Single_Top_Headline
                                                id={index}
                                                h1={item.h1}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="col-12">
                            <Games_of_Day />
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                            <div className="row g-0">
                                <div className="col-lg-4">Results SOCCER</div>
                                <div className="col-lg-8">
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
                        <div className="accordion-item">
                            <div className="accordion-collapse collapse show" id="mlb_results_Collapse" data-bs-parent="#sports">
                                <div className="row g-0">
                                    {
                                        store.soccer.map((item, index) => {
                                            if (item.date == R_date) {
                                                let url_aw = "";
                                                let url_hm = "";
                                                store.logos_soccer.map((item2) => {
                                                    if (item2.team == item.away) {
                                                        url_aw = item2.url
                                                    }
                                                })
                                                store.logos_soccer.map((item3) => {
                                                    if (item3.team == item.home) {
                                                        url_hm = item3.url
                                                    }
                                                })

                                                return (
                                                    <div className="col-lg-6 p-2" key={index}>
                                                        <Results
                                                            logo_away={url_aw}
                                                            logo_home={url_hm}
                                                            away={item.away}
                                                            home={item.home}
                                                            date={item.date}
                                                            final_score_away={item.final_score_away}
                                                            final_score_home={item.final_score_home}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cont_off_top_head'>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="Titulares_principales" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className="font_bold">Titulares Principales</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className='col-12 font_impact fs-4 text-center'>
                            <span className="font_color_base"><i className="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                        </div>
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "SOCCER") {
                                    return (
                                        <div key={index} className="col-12">
                                            <Single_Top_Headline
                                                id={index}
                                                h1={item.h1}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="Games_of_Day" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12">
                            <Games_of_Day />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Results_SOCCER;