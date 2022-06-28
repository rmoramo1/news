import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Injuries } from "../../lines/injuries";

export const Injuries_Global = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [sport, setSport] = useState("FOOTBALL");

    let sports = ["FOOTBALL", "BASKETBALL", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NASCAR", "SOCCER", "NCAA FOOTABAL", "NCAA BASKETBALL", "NCAA BASEBALL"]
    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        selectWeek.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-1 font_bold">
                <div className="row g-0">
                    <div className="col-4">INJURIES</div>
                    <div className="col-8">
                        <div className="row g-0">
                            <div className="col-6 text-center">Sport</div>
                            <div className="col-6 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" onChange={e => setSport(e.target.value)} required>
                                    {
                                        sports.map((item, index) => {
                                            return (
                                                <option key={index} name="promotions" value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row g-0">
                {
                    store.injuries.map((item, index) => {
                        if (item.sport == sport) {
                            return (
                                <div className="col-12 p-1" key={index}>
                                    <Injuries
                                        team={item.team}
                                        name_player={item.name_player}
                                        injurie={item.injurie}
                                        date={item.date}
                                        time_injurie={item.time_injurie}
                                        sport={item.sport}
                                        id={item.id}

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