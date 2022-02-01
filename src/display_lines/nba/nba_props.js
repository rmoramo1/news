import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Props } from "../../lines/props";

export const NBA_Props = () => {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().weekNumber;
    const [sport, setSport] = useState("FOOTBALL");

    let sports = ["FOOTBALL", "BASKETBALL", "BASEBALL", "HOCKEY", "BOX", "MMA", "GOLF", "NACASCAR", "SOCCER", "NCAA FOOTABAL", "NCAA BASKETBALL", "NCAA BASEBALL"]
    let selectWeek = [];
    for (let i = 1; i < 53; i++) {
        selectWeek.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-1 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">Props</div>
                    <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">Sport</div>
                            <div className="col-lg-3 d-flex align-items-center">
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
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    <div className="row g-0">
                        {
                            store.props.map((item, index) => {
                                if (item.sport == "BASKETBALL") {
                                    return (
                                        <div className="col p-2" key={index}>
                                            <Props
                                                title={item.title}
                                                line={item.line}
                                                away={item.away}
                                                home={item.home}
                                                feature={item.feature}
                                                type_prop={item.type_prop}
                                                sport={item.sport}
                                            />
                                        </div>
                                    );
                                }
                            }
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}