import React, { useContext } from 'react';
import { Single_Injurie } from '../single_injurie';
import { Context } from '../../store/appContext';

export default function Injurie_Nfl() {
    const { store } = useContext(Context);
    let year =new Date();
    let mes = year.getMonth()+1;

    return (
        <div className="container-fluid p-2 ">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <div className="col-12 bg_base text-center text-white border-bottom py-2">
                    <h1>
                        Lesiones en Fooball Americano
                    </h1>
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
                            if (item.sport == "FOOTBALL" && item.date.slice(0,2) == mes) {
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
