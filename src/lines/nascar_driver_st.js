import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Single_Resultados } from '../components/single_resultados';
import { Single_Top_Headline } from '../components/single_top_headline';


function Nascar_Driver_Stats() {
    const params = useParams();
    const { store } = useContext(Context);
    let fecha = new Date();
    // let dia = fecha.getDate();
    // let year = fecha.getFullYear();
    // let mes_actual = fecha.getMonth() + 1;
    let dia = "24";
    let year = "2022";
    let mes_actual = "1";

    if (dia == "01") {
        mes_actual = fecha.getMonth();
    }

    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }
    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
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
    store.nascar_drivers.map((index) => {
        if (index.name == store.nascar_drivers[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.nascar_drivers.map((index) => {
        if (index.name == store.nascar_drivers[params.theid].name) {

            data.datasets[0].data.push(index.poles);

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
                                <Link to="/nascar_runs" className="btn_gradient_light">Eventos</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/nascar_py_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className="col-12 pt-3">
                        <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i class="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                            </div>
                            {
                                noticiasFilter.map((item, index) => {
                                    if (index < 15 && item.top_head_line == "Si" && item.deporte == "NASCAR") {
                                        return (
                                            <div key={index} className="col-12">
                                                <Single_Top_Headline
                                                    id={index}
                                                    h1={item.h1}
                                                />
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="fs-5">
                            <div className="row g-0">
                                <div className="col-lg-4 p-2">
                                    <img className="img-fluid" src={store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].headshot} alt="headshot of the player"></img>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            {store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].name}
                                        </div>
                                        <div className="col-12">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].team}</div>
                                        <div className="col-12"><span className="fw-bold">Number Car:</span>  #{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].number_car}</div>
                                        <div className="col-12"><span className="fw-bold">Sponsor:</span>  {store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].sponsor}</div>
                                        <div className="col-12"><span className="fw-bold">Season:</span>  {store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].engine}</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-flex align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12"><span className="fw-bold">Birth:</span> {store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].birth}</div>
                                        <div className="col-12"><span className="fw-bold">Engine:</span>  {store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].engine}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="col-12">
                                        Poles per Year
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
                                    <div className="eight_spans">Rank</div>
                                    <div className="eight_spans">Starts</div>
                                    <div className="eight_spans">Poles</div>
                                    <div className="eight_spans">Top 5</div>
                                    <div className="eight_spans">Top 10</div>
                                    <div className="eight_spans">Laps Lead</div>
                                    <div className="eight_spans">Pts</div>
                                    <div className="eight_spans">AVG Laps</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].rank}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].starts}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].poles}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].top5}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].top10}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].laps_lead}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].pts}</div>
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].AVG_laps}</div>
                                </div>
                                <div className="row g-0  text-white text-center mt-3">
                                    <div className="eight_spans bg_lines">AVG Finish</div>
                                </div>
                                <div className="row g-0 text-center">
                                    <div className="eight_spans bb1px lines">{store.nascar_drivers[params.theid] && store.nascar_drivers[params.theid].AVG_finish}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Nascar_Driver_Stats;