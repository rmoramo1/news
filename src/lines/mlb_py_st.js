import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Single_Resultados } from '../components/single_resultados';

function Mlb_py_st() {
    const params = useParams();
    const { store } = useContext(Context);
    let fecha = new Date();
    // let dia = fecha.getDate();
    // let year = fecha.getFullYear();
    // let mes_actual = fecha.getMonth() + 1;
    let dia = "2";
    let year = "2022";
    let mes_actual = "2";

    if (dia == "01") {
        mes_actual = fecha.getMonth();
    }
    let dia_span;
    if (dia < 10) {
        dia_span = "0" + dia;
    } else {
        dia_span = dia;
    }

    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }
    let resultados_mlb = store.mlb;
    var byDate_mlb = resultados_mlb;
    byDate_mlb.sort(function (a, b) {
        return b.id - a.id;
    });

    const data = {
        labels: [],
        datasets: [
            {
                label: "PTS",
                data: [],
                backgroundColor: [
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(110, 155, 211, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(46, 134, 193, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(142, 68, 173, 0.8)',
                    'rgba(235, 152, 78, 0.8)',
                    'rgba(211, 84, 0, 0.8)',
                    'rgba(170, 183, 184, 0.8)',
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(255, 204, 51, 0.8)',
                    'rgba(0, 153, 51, 0.8)',
                    'rgba(51, 153, 102, 0.8)',
                    'rgba(204, 51, 153, 0.8)',
                    'rgba(0, 102, 153, 0.8)',
                    'rgba(153, 0, 204, 0.8)',
                    'rgba(0, 204, 0, 0.8)',
                    'rgba(204, 0, 51, 0.8)',
                    'rgba(204, 153, 51, 0.8)',
                    'rgba(153, 51, 51, 0.8)',
                    'rgba(51, 0, 102, 0.8)',
                ],
                borderColor: [
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(110, 155, 211, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(46, 134, 193, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(142, 68, 173, 0.8)',
                    'rgba(235, 152, 78, 0.8)',
                    'rgba(211, 84, 0, 0.8)',
                    'rgba(170, 183, 184, 0.8)',
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(255, 204, 51, 0.8)',
                    'rgba(0, 153, 51, 0.8)',
                    'rgba(51, 153, 102, 0.8)',
                    'rgba(204, 51, 153, 0.8)',
                    'rgba(0, 102, 153, 0.8)',
                    'rgba(153, 0, 204, 0.8)',
                    'rgba(0, 204, 0, 0.8)',
                    'rgba(204, 0, 51, 0.8)',
                    'rgba(204, 153, 51, 0.8)',
                    'rgba(153, 51, 51, 0.8)',
                    'rgba(51, 0, 102, 0.8)',
                ],
                borderWidth: 1,
            },
        ],
    };
    store.stats_mlb_player.map((index) => {
        if (index.name == store.stats_mlb_player[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_mlb_player.map((index) => {
        if (index.name == store.stats_mlb_player[params.theid].name) {

            data.datasets[0].data.push(index.r);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <div className="row g-0">
                    <div className="col-lg-2 border_right">
                        <div className="row g-0">
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/mlb_all_data" className="btn_gradient_light">Lineas</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/mlb_team_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className="col-12 pt-3">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Resultados del Día</span>
                            </div>
                            {
                                resultados_mlb.map((item, index) => {
                                    let compara_day = year + "-" + mes_a_dt + "-" + dia_span;
                                    if (item.date == compara_day) {
                                        return (
                                            <div className="col-12" key={index}>
                                                <Single_Resultados
                                                    status={item.status}
                                                    away={item.away}
                                                    home={item.home}
                                                    final_score_away={item.final_score_away}
                                                    final_score_home={item.final_score_home}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="fs-5">
                            <div className="row g-0">
                                <div className="col-lg-4 p-2">
                                    <img className="img-fluid" src={store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].headshot} alt="headshot of the player"></img>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12 fw-bold fs-2">
                                            {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].name}
                                        </div>
                                        <div className="col-12">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].team}</div>
                                        <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].dorsal}</div>
                                        <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].position}</div>
                                        <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].season}</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].birth}</div>
                                        <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].height}</div>
                                        <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].weight}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="col-12">
                                        Carreras por año
                                    </div>
                                    <div className="chart mx-auto py-2">
                                        <Pie data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflowX_scroll">
                            <div className="odds-list">
                                <div className="row g-0 bg_lines text-white text-center">
                                    <div className="eight_spans">GP</div>
                                    <div className="eight_spans">Ab</div>
                                    <div className="eight_spans">R</div>
                                    <div className="eight_spans">H</div>
                                    <div className="eight_spans">Two B</div>
                                    <div className="eight_spans">Three B</div>
                                    <div className="eight_spans">Hb</div>
                                    <div className="eight_spans">Rbi</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].gp}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].ab}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].r}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].h}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].two_b}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].three_b}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].hb}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].rbi}</div>
                                </div>
                                <div className="row g-0 bg_lines text-white text-center mt-3">
                                    <div className="eight_spans">Tb</div>
                                    <div className="eight_spans">Bb</div>
                                    <div className="eight_spans">So</div>
                                    <div className="eight_spans">Sb</div>
                                    <div className="eight_spans">Avg</div>
                                    <div className="eight_spans">Obp</div>
                                    <div className="eight_spans">Slg</div>
                                    <div className="eight_spans">Ops</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].tb}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].bb}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].so}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].sb}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].avg}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].obp}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].slg}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].ops}</div>
                                </div>
                                <div className="row g-0 text-white text-center mt-3">
                                    <div className="eight_spans bg_lines">War</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.stats_mlb_player[params.theid] && store.stats_mlb_player[params.theid].war}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Mlb_py_st;