import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Results } from "../../lines/results";

export const Results_Nfl = () => {
    let away_team="";
    let home_team="";
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
                    <div className="col-lg-4">NFL 1ST H</div>
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
                    <div className="row g-0">
                        {
                            store.nfl.map((item, index) => {
                                if (item.date.includes(year) && item.week == week) {
                                    away_team=item.away;
                                    home_team=item.home;
                                    let url_aw="";
                                    let url_hm="";
                                    store.logos_nfl.map((item2)=>{
                                        if(item2.team == item.away){
                                            url_aw = item2.url 
                                        }
                                    })
                                    store.logos_nfl.map((item3)=>{
                                        if(item3.team == item.home){
                                            url_hm = item3.url 
                                        }
                                    })

                                    return (
                                        <div className="col-6 p-2" key={index}>
                                            <Results
                                                logo_away={url_aw}
                                                logo_home={url_hm}
                                                away={item.away}
                                                home={item.home}
                                                date={item.date}
                                                final_score_away={item.first_half_final_score_away}
                                                final_score_home={item.first_half_final_score_home}
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
    )
}