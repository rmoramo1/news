import React, { useContext, useState } from 'react';
import { Context } from "../../store/appContext";

import { Single_Odds_To_Win } from './single_odds_to_win';

function Odds_To_Win() {
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const { store } = useContext(Context);
    let fecha = new Date();
    let year = fecha.getFullYear();
    let mes_actual = fecha.getMonth() + 1;

    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }

    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            i = "0" + i;
            selectMonth.push(i);
        } else {
            selectMonth.push(i);
        }
    }

    let odds_to_win_Filter = store.odds_to_win;
    var byDate = odds_to_win_Filter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });

    let sports = [];
    store.odds_to_win.map((item) => {
        if (sports.includes(item.sport)) {

        } else {
            sports.push(item.sport)
        }
    })

    const [drSoprts, setDrSoprts] = useState("NBA");
    const [drMes, setDrMes] = useState(mes_a_dt);
    return (
        <div className="container-fluid p-2">
            <div className="bg-white mh_display">
                <div className="row g-0 text-center bg_azul text-white py-2">
                    <div className="col-lg-6">
                        <h2>Odds To Win</h2>
                    </div>
                    <div className="col-lg-2">
                        Año {year}
                    </div>
                    <div className="col-lg-1 p-1">
                        <select className="form-select" name="status" aria-label="meses" defaultValue={mes_a_dt} onChange={e => setDrMes(e.target.value)} required>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-lg-2 p-1">
                        <select className="form-select" name="status" aria-label="Deportes" defaultValue="NBA" onChange={e => setDrSoprts(e.target.value)} required>
                            {
                                sports.map((index) => {
                                    return (
                                        <option key={index} name="status" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row g-0">
                    {odds_to_win_Filter.map((item, index) => {
          
                        if (item.sport == drSoprts && item.date.slice(0, 4) == year && item.date.slice(5, 7) == drMes) {
                            return (
                                <div key={index} className="col-lg-3 p-2">
                                    <Single_Odds_To_Win
                                        id={index}
                                        title={item.title}
                                        sport={item.sport}
                                        date={item.date}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    )
};
export default Odds_To_Win;
