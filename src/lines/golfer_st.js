import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Single_Top_Headline } from '../components/single_top_headline';


function Golfer_st() {
    const params = useParams();
    const { store } = useContext(Context);
    let fecha = new Date();
    // let dia = fecha.getDate();
    // let year = fecha.getFullYear();
    // let mes_actual = fecha.getMonth() + 1;
    let dia = "1";
    let year = "2022";
    let mes_actual = "1";

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
    store.golfer.map((index) => {
        if (index.name == store.golfer[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.golfer.map((index) => {
        if (index.name == store.golfer[params.theid].name) {

            data.datasets[0].data.push(index.holes);
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
                                <Link to="/golf_games" className="btn_gradient_light">Eventos</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/golf_py_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className="col-12 pt-3">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                            </div>
                            {
                                noticiasFilter.map((item, index) => {
                                    if (index < 15 && item.top_head_line == "Si" && item.deporte == "GOLF") {
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
                                    <img className="img-fluid" src={store.golfer[params.theid] && store.golfer[params.theid].headshot} alt="headshot of the player"></img>
                                </div>
                                <div className="col-lg-2 d-flex align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12">
                                            {store.golfer[params.theid] && store.golfer[params.theid].name}
                                        </div>
                                        <div className="col-12">{store.golfer[params.theid] && store.golfer[params.theid].team}</div>
                                        <div className="col-12"><span className="fw-bold">Swing:</span>  #{store.golfer[params.theid] && store.golfer[params.theid].swing}</div>
                                        <div className="col-12"><span className="fw-bold">Country:</span>  {store.golfer[params.theid] && store.golfer[params.theid].country}</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-flex align-items-center p-1">
                                    <div className="row g-0">
                                        <div className="col-12"><span className="fw-bold">Birth:</span> {store.golfer[params.theid] && store.golfer[params.theid].birth}</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="col-12">
                                        Hollos por Año
                                    </div>
                                    <div className="chart mx-auro py-2">
                                        <Pie data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0  text-white text-center">
                            <div className="eight_spans bg_lines">Cuts</div>
                            <div className="eight_spans bg_lines">Top 10</div>
                            <div className="eight_spans bg_lines">W</div>
                            <div className="eight_spans bg_lines">Rnds</div>
                            <div className="eight_spans bg_lines">Holes</div>
                            <div className="eight_spans bg_lines">Avg</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].cuts}</div>
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].top10}</div>
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].w}</div>
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].rnds}</div>
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].holes}</div>
                            <div className="eight_spans bb1px lines">{store.golfer[params.theid] && store.golfer[params.theid].holes}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Golfer_st;