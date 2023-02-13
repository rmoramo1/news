import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from '../../store/appContext';
import { Single_Tipsters_Next } from './single_tipster_next';
import { Historial_Tipsters } from './historial_tipsters';
function Tipster_Perfil() {
    const params = useParams();
    const { store } = useContext(Context);

    let nameRJC = store.perfil_tipster[params.theid] && store.perfil_tipster[params.theid].name;
    let win_NHL = 0;
    let win_NBA = 0;
    let win_NFL = 0;
    let win_MLB = 0;

    let loss_NHL = 0;
    let loss_NBA = 0;
    let loss_NFL = 0;
    let loss_MLB = 0;
    store.picks_tipster.map((item) => {
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NHL" && item.estado != "Pending") {
            win_NHL = win_NHL + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NBA" && item.estado != "Pending") {
            win_NBA = win_NBA + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NFL" && item.estado != "Pending") {
            win_NFL = win_NFL + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "MLB" && item.estado != "Pending") {
            win_MLB = win_MLB + 1;
        }

        if (item.name == nameRJC && item.deporte == "NHL" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NHL = loss_NHL + 1;
        }
        if (item.name == nameRJC && item.deporte == "NBA" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NBA = loss_NBA + 1;
        }
        if (item.name == nameRJC && item.deporte == "NFL" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NFL = loss_NFL + 1;
        }
        if (item.name == nameRJC && item.deporte == "MLB" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_MLB = loss_MLB + 1;
        }
    })

    let total;
    total = win_NHL + loss_NHL + win_NBA + win_NFL + win_MLB + loss_NBA + loss_NFL + loss_MLB;
    let total_win = win_NHL + win_NBA + win_NFL + win_MLB;
    let total_loss = loss_NHL + loss_NBA + loss_NFL + loss_MLB;

    return (
        <div className="container-fluid  shadow_spans_spans my-1 bg-white">
            <div className="row g-0">
                <div className="col-lg-4 border_right py-5">
                    <div className="col-12 ">
                        <h1>{store.perfil_tipster[params.theid] && store.perfil_tipster[params.theid].name}</h1>
                    </div>
                    <div className="col-12 ">
                        <h3>{store.perfil_tipster[params.theid] && store.perfil_tipster[params.theid].title}</h3>
                    </div>
                    <div className="col-12 bb1px pt-3">
                        <h5>{store.perfil_tipster[params.theid] && store.perfil_tipster[params.theid].description}</h5>
                    </div>
                    <div className="col-12 pt-3">
                        <h4>Estadisticas</h4>
                        <div className="bb1px text-center ">
                            <div className="row g-0 bb1px">
                                <div className="col-3">
                                    <div className="row g-0 border_right">
                                        <div className="col-12">NBA</div>
                                        <div className="col-6 bg-success text-white">Win</div>
                                        <div className="col-6 bg-danger text-white">Loss</div>
                                        <div className="col-6">{win_NBA} </div>
                                        <div className="col-6">{loss_NBA}</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="row g-0 border_right">
                                        <div className="col-12">NFL</div>
                                        <div className="col-6 bg-success text-white">Win</div>
                                        <div className="col-6 bg-danger text-white">Loss</div>
                                        <div className="col-6">{win_NFL} </div>
                                        <div className="col-6">{loss_NFL}</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="row g-0 border_right">
                                        <div className="col-12">MLB</div>
                                        <div className="col-6 bg-success text-white">Win</div>
                                        <div className="col-6 bg-danger text-white">Loss</div>
                                        <div className="col-6">{win_MLB} </div>
                                        <div className="col-6">{loss_MLB}</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="row g-0">
                                        <div className="col-12">NHL</div>
                                        <div className="col-6 bg-success text-white">Win</div>
                                        <div className="col-6 bg-danger text-white">Loss</div>
                                        <div className="col-6">{win_NHL} </div>
                                        <div className="col-6">{loss_NHL}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-4 bg-success text-white">Ganados {total_win}</div>
                                    <div className="col-4 bg-danger text-white">Perdidos {total_loss}</div>
                                    <div className="col-4">Total: {total}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 p-2">
                    <div className="col-12">
                        <h2>Próximos Picks</h2>
                    </div>
                    {
                        store.picks_tipster.map((item, index) => {
                            if (item.name == nameRJC && item.estado == "Pending") {
                                return (
                                    <Single_Tipsters_Next
                                        key={index}
                                        id={index}
                                        name={item.name}
                                        deporte={item.deporte}
                                        fecha={item.fecha}
                                        equipos={item.equipos}
                                        tipo={item.tipo}
                                        linea={item.linea}
                                        units={item.units}
                                        estado={item.estado}

                                    />
                                )
                            }
                        })
                    }

                    <div className="col-12 mt-3">
                        <h2>Historial</h2>
                    </div>
                    <div className="overflowX_scroll">
                        {
                            store.picks_tipster.map((item, index) => {
                                if (item.name == nameRJC && item.estado != "Pending") {
                                    return (
                                        <Historial_Tipsters
                                            key={index}
                                            id={index}
                                            name={item.name}
                                            deporte={item.deporte}
                                            fecha={item.fecha}
                                            equipos={item.equipos}
                                            tipo={item.tipo}
                                            linea={item.linea}
                                            units={item.units}
                                            estado={item.estado}
                                            resultado={item.resultado}
                                        />
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tipster_Perfil;