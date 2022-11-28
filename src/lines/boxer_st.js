import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Single_Top_Headline } from '../components/single_top_headline';
import { Games_of_Day } from '../components/games_of_day';
import { Single_Box_Lines } from './single_box_lines';

function Boxer_st() {
    const params = useParams();
    const { store } = useContext(Context);

    const data = {
        labels: [],
        datasets: [
            {
                label: "Wins",
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
    store.stats_box_fighter.map((index) => {
        if (index.name == store.stats_box_fighter[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_box_fighter.map((index) => {
        if (index.name == store.stats_box_fighter[params.theid].name) {
            data.datasets[0].data.push(index.w);
        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div>
            <div className="col-12 d-block d-lg-none py-3">
                <button className="btn btn_orange" type="button" data-bs-toggle="offcanvas" data-bs-target="#Titulares_principales" aria-controls="Titulares_principales">
                    Titulares Principales
                </button>
                <button className="btn col-6 btn_orange float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#Lineas_Off_Can" aria-controls="Lineas_Off_Can">
                    Juegos del Día
                </button>
            </div>
            <div className=" m-2 bg-white shadow_spans mh_display bg_light">
                <div className="row g-0">
                    <div className="col-lg-3 d-none d-lg-block border_right">
                        {noticiasFilter.map((item, index) => {
                            if (index < 15 && item.top_head_line == "Si" && item.deporte == "BOX") {
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
                        <Games_of_Day />
                    </div>
                    <div className="col-lg-6 border_right">
                        <div className="row g-0">
                            <div className="col-lg-4 p-2 text-center">
                                <img className="img-fluid" src={store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].headshot} alt="headshot of the player"></img>
                                <div className="col-12"><span className="fw-bold">Country:</span> {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].country}</div>
                                <div className="col-12"><span className="fw-bold">Association:</span> {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].association}</div>
                                <div className="col-12"><span className="fw-bold">Category:</span> {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].category}</div>
                            </div>
                            <div className="col-lg-8 text-center fs-4 d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="col-12 display-4 fw-bold">
                                        {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].name}
                                    </div>
                                    <div className="col-12 fs-4"><span className="fw-bold font_grey">Nickname:</span><i className="fw-bold"> "{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].nickname}"</i></div>
                                    <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].birth}</div>
                                    <div className="col-12">
                                        <div className="row g-0">
                                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].height}</div>
                                            <div className="col-12"><span className="fw-bold">Weight:</span>  {store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].weight}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 mt-5 bg_gradient_light ">
                                <div className="h1 text-center">Historial de Encuentros</div>
                                <div>
                                    {store.boxeo.map((item, index) => {
                                        let f1 = item.fighter_One;
                                        let f2 = item.fighter_Two;
                                        let name = store.stats_box_fighter[params.theid].name
                                        if (f1 == name || f2 == name) {
                                            return (
                                                <div key={index} className="col-lg-6 p-1">
                                                    <Single_Box_Lines
                                                        id={index}
                                                        fighter_One={item.fighter_One}
                                                        fighter_Two={item.fighter_Two}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row g-0 resultado_in_progress text-center fs-1 p-2">
                            <div className="col-6 text-white fw-bold font_shadow">Wins</div>
                            <div className="col-6 bg-white">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].w}</div>
                        </div>
                        <div className="row g-0 resultado_cancelled text-center fs-1 p-2">
                            <div className="col-6 text-white fw-bold font_shadow">Losses</div>
                            <div className="col-6 bg-white">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].L}</div>
                        </div>
                        <div className="row g-0 text-center resultado_in_progress text-white">
                            <div className="col-3">W KO/TKO</div>
                            <div className="col-3">W SUB</div>
                            <div className="col-3">W DEC</div>
                            <div className="col-3">W OTHERS</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].w_ko_tko}</div>
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].w_sub}</div>
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].w_dec}</div>
                            <div className="col-3">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].w_others}</div>
                        </div>
                        <div className="row g-0 text-center resultado_cancelled text-white">
                            <div className="col-3">L KO/TKO</div>
                            <div className="col-3">L SUB</div>
                            <div className="col-3">L DEC</div>
                            <div className="col-3">L OTHERS</div>
                        </div>
                        <div className="row g-0 text-center bb1px">
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].L_ko_tko}</div>
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].L_sub}</div>
                            <div className="col-3 border_right">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].L_dec}</div>
                            <div className="col-3">{store.stats_box_fighter[params.theid] && store.stats_box_fighter[params.theid].L_others}</div>
                        </div>

                        <div className="col-12 text-center fs-4">
                            Wins per Year
                        </div>
                        <div className="chart mh-25 py-2">
                            <Pie data={data} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='cont_off_top_head'>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="Titulares_principales" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className="font_bold">Titulares Principales</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "BOX") {
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
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="Lineas_Off_Can" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Games_of_Day />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Boxer_st;