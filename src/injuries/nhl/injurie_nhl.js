import React, { useContext, useState } from 'react';
import { Single_Injurie } from '../single_injurie';
import { Context } from '../../store/appContext';

export default function Injurie_NHL() {
    const { store } = useContext(Context);
    let year = new Date();
    let ano = year.getFullYear();

    let mes = year.getMonth() + 1;

    let monthShow = [];
    if (mes < 10) {
        monthShow.push("0" + mes);
    } else {
        monthShow.push(mes);
    }
    
    let selectMonth = [];

    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            selectMonth.push("0" + i);
        } else {
            selectMonth.push(i);
        }
    }
    const [mesD, setMesD] = useState(monthShow);
    return (
        <div className="container-fluid p-2 ">
            <div className=" shadow_spans bg-white mh_display">
                <div className="row g-0 bg_base text-center text-white border-bottom py-2">
                    <div className="col-lg-6 ">
                        <h1>
                            Lesiones en la NHL
                        </h1>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center fs-2 justify-content-center">Año {ano}</div>
                    <div className="col-lg-3 px-3 d-flex align-items-center">
                        <span className="fs-2 pe-3">Mes</span>
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={monthShow} onChange={e => setMesD(e.target.value)} required>
                            {
                                selectMonth.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="overflowX_scroll">
                    <div className="odds-list">

                        <div className="row g-0 bb1px bg_base text-center text-white">
                            <div className="col">
                                Equipo
                            </div>
                            <div className="col">
                                Jugador
                            </div>
                            <div className="col">
                                Lesión
                            </div>
                            <div className="col">
                                Fecha de Lesión
                            </div>
                            <div className="col">
                                Tiempo Probable
                            </div>
                        </div>
                        {store.injuries.map((item, index) => {
                            if (item.sport == "NHL" && item.date.slice(6, 10) == ano && item.date.slice(0, 2) == mesD) {
                                return (
                                    <div key={index} className="col-12">
                                        <Single_Injurie
                                            id={index}
                                            name_player={item.name_player}
                                            team={item.team}
                                            injurie={item.injurie}
                                            date={item.date}
                                            time_injurie={item.time_injurie}
                                            sport={item.sport}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
