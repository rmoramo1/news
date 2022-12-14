import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Single_Quarters_hockey } from "../../lines/single_quarters_hockey";

export const Result_Quarters_Hockey = () => {
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
    const [week, setweek] = useState(dateShow);
    let R_date = year+"-"+month+"-"+week;
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
    let nhlFilter = store.nhl;
	var byDate = nhlFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});
    return (
        <div className="col-12" id="sports">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">Result Quarters Hockey</div>
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
                <div className="accordion-collapse collapse show" id="nhlCollapse" data-bs-parent="#sports">
                    {nhlFilter.map((item, index) => {
                        if (item.date == R_date) {
                            let url_aw = "";
                            let url_hm = "";
                            store.logos_nhl.map((item2) => {
                                if (item2.team == item.away) {
                                    url_aw = item2.url
                                }
                            })
                            store.logos_nhl.map((item3) => {
                                if (item3.team == item.home) {
                                    url_hm = item3.url
                                }
                            })
                            return (
                                <div key={index}>
                                    <Single_Quarters_hockey
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