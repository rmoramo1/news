import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from '../../store/appContext';

function Tipster_Perfil() {
    const params = useParams();
    const { store } = useContext(Context);
    let nameRJ = store.perfil_tipster[params.theid] && store.perfil_tipster[params.theid].name;
    return (
        <div className="container-fluid rounded_span shadow_spans_spans my-1 bg-white">
            <div className="row g-0">
                <div className="col-lg-6 border_right py-5">
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
                        <div className="row g-0 bb1px py-2">
                            <div className="col d-flex align-items-center">+594</div>
                            <div className="col d-flex align-items-center">NCAA</div>
                            <div className="col fw-bold d-flex align-items-center">12-5</div>
                            <div className="col d-flex align-items-center">de sus ultimos 17 picks</div>
                        </div>
                        <div className="row g-0 bb1px py-2">
                            <div className="col d-flex align-items-center">+594</div>
                            <div className="col d-flex align-items-center">NCAA</div>
                            <div className="col fw-bold d-flex align-items-center">12-5</div>
                            <div className="col d-flex align-items-center">de sus ultimos 17 picks</div>
                        </div>
                        <div className="row g-0 bb1px py-2">
                            <div className="col d-flex align-items-center">+594</div>
                            <div className="col d-flex align-items-center">NCAA</div>
                            <div className="col fw-bold d-flex align-items-center">12-5</div>
                            <div className="col d-flex align-items-center">de sus ultimos 17 picks</div>
                        </div>
                        <div className="row g-0 bb1px py-2">
                            <div className="col d-flex align-items-center">+594</div>
                            <div className="col d-flex align-items-center">NCAA</div>
                            <div className="col fw-bold d-flex align-items-center">12-5</div>
                            <div className="col d-flex align-items-center">de sus ultimos 17 picks</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-2">
                    <div className="col-12">
                        <h2>Próximos Picks</h2>
                    </div>
                    {
                        store.picks_tipster.map((item, index) => {
                            if (item.name == nameRJ ) {
                                console.log(item.name);
                                console.log(nameRJ + " rj");
                                return (
                                    <div key={index} className="row g-0 text-center shadow_spans p-1">
                                        <div className="col-4 bg_base text-white">{item.deporte}</div>
                                        <div className="col-4 bg_base text-white">{item.fecha}</div>
                                        <div className="col-4 bg_base text-white">{item.deporte}</div>
                                        <div className="col-12 text-start fw-bold">{item.equipos}</div>
                                        <div className="col-6 text-start fw-bold">{item.tipo}</div>
                                        <div className="col-6 text-start fw-bold">{item.linea}</div>
                                    </div>
                                )
                            }
                        })
                    }

                    <div className="col-12 mt-3">
                        <h2>Historial</h2>
                    </div>
                    <div className="overflowX_scroll">
                        <div className="odds-list">
                            <div className="row bb1px g-0 text-center">
                                <div className="eight_spans">2022/10/29</div>
                                <div className="quince_spans">SPREAD</div>
                                <div className="quince_spans">1 UNITS</div>
                                <div className="quince_spans">NHL</div>
                                <div className="col">MONTREAL CANADIENS @ ST. LOUIS BLUES</div>
                                <div className="col">MONTREAL CANADIENS +1.5 (105)</div>
                                <div className="quince_spans btn btn-success">
                                    WIN
                                </div>
                            </div>
                            <div className="row bb1px g-0 text-center">
                                <div className="eight_spans">2022/10/29</div>
                                <div className="quince_spans">SPREAD</div>
                                <div className="quince_spans">1 UNITS</div>
                                <div className="quince_spans">NHL</div>
                                <div className="col">MONTREAL CANADIENS @ ST. LOUIS BLUES</div>
                                <div className="col">MONTREAL CANADIENS +1.5 (105)</div>
                                <div className="quince_spans btn btn-success">
                                    WIN
                                </div>
                            </div>
                            <div className="row bb1px g-0 text-center">
                                <div className="eight_spans">2022/10/29</div>
                                <div className="quince_spans">SPREAD</div>
                                <div className="quince_spans">1 UNITS</div>
                                <div className="quince_spans">NHL</div>
                                <div className="col">MONTREAL CANADIENS @ ST. LOUIS BLUES</div>
                                <div className="col">MONTREAL CANADIENS +1.5 (105)</div>
                                <div className="quince_spans btn btn-success">
                                    WIN
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tipster_Perfil;