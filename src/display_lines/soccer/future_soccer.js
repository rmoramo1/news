import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Futures_Lines } from "../../lines/futures_lines";

export const Futures_SOCCER = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [team, setTeam] = useState("FOOTBALL");

    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        selectWeek.push(i);
    }

    let sports = ["FOOTBALL", "BASKETBALL", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NACASCAR", "SOCCER", "NCAA FOOTABAL", "NCAA BASKETBALL", "NCAA BASEBALL"]

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-1 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">Futures</div>
                    {/* <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">Sport</div>
                            <div className="col-lg-3 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Teams" onChange={e => setTeam(e.target.value)} required>
                                    {
                                        sports.map((item, index) => {
                                            return (
                                                <option key={index} name="teams" value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
            <div className="row g-0">
                {
                    store.futures.map((item, index) => {
                        if (item.sport == "SOCCER") {
                            return (
                                <div className="col-lg-6 p-1" key={index}>
                                    <Futures_Lines
                                        future={item.future}
                                        sport={item.sport}
                                        line={item.line}
                                    />
                                </div>
                            );
                        }
                    }
                    )
                }


            </div>
        </div>
    )
}