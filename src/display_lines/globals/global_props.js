import React, { useContext, useEffect, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Props } from "../../lines/props";

export const Nfl_Props = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [sport, setSport] = useState("NBA");

    let sports = ["FOOTBALL", "NBA", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NASCAR", "SOCCER", "NCAA FOOTABAL", "NCAA BASKETBALL", "NCAA BASEBALL"]
    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        selectWeek.push(i);
    }
    let propsFilter = store.props;
    var byDate = propsFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });

    let sportsTU = []

    store.props.map((item) => {
        let sp = item.sport;
        sportsTU.includes(sp) ? console.log(sportsTU) : sportsTU.push(sp)
    }
    )

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_base_dark text-white ps-lg-5 fs-1 font_bold">
                <div className="row g-0">
                    <div className="col-4">ODDS TO WIN</div>
                    <div className="col-8">
                        <div className="row g-0">
                            <div className="col-6 text-center">Sport</div>
                            <div className="col-6 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" defaultValue="NBA" onChange={e => setSport(e.target.value)} required>
                                    {
                                        sportsTU.map((item, index) => {
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
                    propsFilter.map((item, index) => {
                        if (item.sport == sport) {
                            return (
                                <div className="col-lg-6 p-2" key={index}>
                                    <Props
                                        sport={item.sport}
                                        title={item.title}
                                        date={item.date}
                                        id={index}
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