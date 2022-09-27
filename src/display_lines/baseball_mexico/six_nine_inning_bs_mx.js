import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Single_6_9_Inning } from "../../lines/single_six_nine_i";

export const Six_Nine_Inning_BS_MX = () => {
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
    let bs_mx_Filter = store.baseball_mexico;
	var byDate = bs_mx_Filter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});
    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">6-9 Inning</div>
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
                <div className="accordion-collapse collapse show" id="mlb69Collapse" data-bs-parent="#sports">
                    {bs_mx_Filter.map((item, index) => {
                     let mes = item.date.slice(5, 7);
                     let ano = item.date.slice(0, 4);
                     if (mes == R_date && ano == year && item.type_of_line == typeOfLine) {
                        let url_aw = "";
                        let url_hm = "";
                        store.logos_baseball_mexico.map((item2) => {
                            if (item2.team == item.away) {
                                url_aw = item2.url
                            }
                        })
                        store.logos_baseball_mexico.map((item3) => {
                            if (item3.team == item.home) {
                                url_hm = item3.url
                            }
                        })
                            return (
                                <div key={index}>
                                    <Single_6_9_Inning
                                        away={item.away}
                                        home={item.home}
                                        sa_6inning={item.sa_6inning}
                                        sa_7inning={item.sa_7inning}
                                        sa_8inning={item.sa_8inning}
                                        sa_9inning={item.sa_9inning}
                                        sh_6inning={item.sh_6inning}
                                        sh_7inning={item.sh_7inning}
                                        sh_8inning={item.sh_8inning}
                                        sh_9inning={item.sh_9inning}
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