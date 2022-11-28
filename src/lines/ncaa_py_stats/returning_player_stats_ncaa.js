import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Single_Resultados } from '../../components/single_resultados';


function Returning_Player_Stats_Ncaa() {
    const params = useParams();
    const { store } = useContext(Context);
    let fecha = new Date();
    // let dia = fecha.getDate();
    // let year = fecha.getFullYear();
    // let mes_actual = fecha.getMonth() + 1;
    let dia = "4";
    let year = "2022";
    let mes_actual = "8";

    if (dia == "01") {
        mes_actual = fecha.getMonth();
    }

    let dia_a_dt;
    if (dia < 10) {
        dia_a_dt = "0" + dia;
    } else {
        dia_a_dt = dia;
    }

    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }
    let resultados_ncaa_fut = store.ncaa_football;
    var byDate_nba = resultados_ncaa_fut;
    byDate_nba.sort(function (a, b) {
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
    store.stats_returning_player_ncaa_football.map((index) => {
        if (index.name == store.stats_returning_player_ncaa_football[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_returning_player_ncaa_football.map((index) => {
        if (index.name == store.stats_returning_player_ncaa_football[params.theid].name) {

            data.datasets[0].data.push(index.kick_returns);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <div className="row g-0">
                    <div className="col-lg-2 border_right">
                        <div className="row g-0">
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/ncaa_football_all_data" className="btn_gradient_light">Lineas</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/ncaa_football_team_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className="col-12 pt-3">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Resultados del Día</span>
                            </div>
                            {
                                resultados_ncaa_fut.map((item, index) => {
                                    let compara_day = year + "-" + mes_a_dt + "-" + dia_a_dt;
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
                                    <img className="img-fluid" src={store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].headshot} alt="headshot of the player"></img>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].name}
                                        </div>
                                        <div className="col-12">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].team}</div>
                                        <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].dorsal}</div>
                                        <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].position}</div>
                                        <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].season}</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].birth}</div>
                                        <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].height}</div>
                                        <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].weight}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="col-12">
                                        Kick Returns Year
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
                                    <div className="eight_spans">Kick Returns</div>
                                    <div className="eight_spans">Kick Returns Y</div>
                                    <div className="eight_spans">Yards P K P</div>
                                    <div className="eight_spans">L K R</div>
                                    <div className="eight_spans">K R TD</div>
                                    <div className="eight_spans">Punt R</div>
                                    <div className="eight_spans">Punt R Y</div>
                                    <div className="eight_spans">Y PPR</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].kick_returns}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].kick_returns_yards}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].yards_p_k_p}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].l_k_r}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].k_r_td}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].punt_r}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].punt_r_y}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].y_ppr}</div>
                                </div>
                                <div className="row g-0 bg_lines text-white text-center mt-3">
                                    <div className="eight_spans">L PR</div>
                                    <div className="eight_spans">P RTD</div>
                                    <div className="eight_spans">Punt R F CL</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].lpr}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].pr_td}</div>
                                    <div className="eight_spans bb1px lines">{store.stats_returning_player_ncaa_football[params.theid] && store.stats_returning_player_ncaa_football[params.theid].punt_r_fair_carches}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Returning_Player_Stats_Ncaa;