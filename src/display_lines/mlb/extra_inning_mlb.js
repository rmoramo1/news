import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Single_Extra_Inning } from "../../lines/single_extra_inning";

export const Extra_Inning_MLB = () => {

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
    console.log(R_date + " R_date")  
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
    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-lg-1 fs-5 font_bold">
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
                <div className="accordion-collapse collapse show" id="mlb69Collapse" data-bs-parent="#sports">
                    {store.mlb.map((item, index) => {
                        if (item.date == R_date) {
                            return (
                                <div key={index}>
                                    <Single_Extra_Inning
                                        away={item.away}
                                        home={item.home}
                                        sa_10inning={item.sa_10inning}
                                        sa_11inning={item.sa_11inning}
                                        sa_12inning={item.sa_12inning}
                                        sa_13inning={item.sa_13inning}
                                        sa_14inning={item.sa_14inning}
                                        sa_15inning={item.sa_15inning}
                                        sa_16inning={item.sa_16inning}
                                        sa_17inning={item.sa_17inning}
                                        sa_18inning={item.sa_18inning}
                                        sa_19inning={item.sa_19inning}
                                        sa_20inning={item.sa_20inning}
                                        sa_21inning={item.sa_21inning}

                                        sh_10inning={item.sh_10inning}
                                        sh_11inning={item.sh_11inning}
                                        sh_12inning={item.sh_12inning}
                                        sh_13inning={item.sh_13inning}
                                        sh_14inning={item.sh_14inning}
                                        sh_15inning={item.sh_15inning}
                                        sh_16inning={item.sh_16inning}
                                        sh_17inning={item.sh_17inning}
                                        sh_18inning={item.sh_18inning}
                                        sh_19inning={item.sh_19inning}
                                        sh_20inning={item.sh_20inning}
                                        sh_21inning={item.sh_21inning}

                                        sa_22inning={item.sa_22inning}
                                        sa_23inning={item.sa_23inning}
                                        sa_24inning={item.sa_24inning}
                                        sa_25inning={item.sa_25inning}
                                        sa_26inning={item.sa_26inning}
                                        sa_27inning={item.sa_27inning}
                                        sa_28inning={item.sa_28inning}
                                        sa_29inning={item.sa_29inning}
                                        sa_30inning={item.sa_30inning}
                                        sa_31inning={item.sa_31inning}
                                        sa_32inning={item.sa_32inning}
                                        sa_33inning={item.sa_33inning}

                                        sh_22inning={item.sh_22inning}
                                        sh_23inning={item.sh_23inning}
                                        sh_24inning={item.sh_24inning}
                                        sh_25inning={item.sh_25inning}
                                        sh_26inning={item.sh_26inning}
                                        sh_27inning={item.sh_27inning}
                                        sh_28inning={item.sh_28inning}
                                        sh_29inning={item.sh_29inning}
                                        sh_30inning={item.sh_30inning}
                                        sh_31inning={item.sh_31inning}
                                        sh_32inning={item.sh_32inning}
                                        sh_33inning={item.sh_33inning}

                                        sa_34inning={item.sa_34inning}
                                        sa_35inning={item.sa_35inning}
                                        sa_36inning={item.sa_36inning}
                                        sa_37inning={item.sa_37inning}
                                        sa_38inning={item.sa_38inning}
                                        sa_39inning={item.sa_39inning}
                                        sa_40inning={item.sa_40inning}

                                        sh_34inning={item.sh_34inning}
                                        sh_35inning={item.sh_35inning}
                                        sh_36inning={item.sh_36inning}
                                        sh_37inning={item.sh_37inning}
                                        sh_38inning={item.sh_38inning}
                                        sh_39inning={item.sh_39inning}
                                        sh_40inning={item.sh_40inning}

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