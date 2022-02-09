import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function NCAA_BASKET_Player_Stats() {
    const params = useParams();
    const { store } = useContext(Context);

    const data = {
        labels: [],
        datasets: [
            {
                label: "PTS",
                data: [],
                backgroundColor: [
                    'rgba(217, 136, 128, 0.8)',
                    'rgba(195, 155, 211, 0.8)',
                    'rgba(127, 179, 213, 0.8)',
                    'rgba(118, 215, 196, 0.8)',
                    'rgba(115, 198, 182, 0.8)',
                    'rgba(248, 196, 113, 0.8)',
                ],
                borderColor: [
                    'rgba(217, 136, 128, 1)',
                    'rgba(195, 155, 211, 1)',
                    'rgba(127, 179, 213, 1)',
                    'rgba(118, 215, 196, 1)',
                    'rgba(115, 198, 182, 1)',
                    'rgba(248, 196, 113, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    store.stats_ncaa_basket_player.map((index) => {
        if (index.name == store.stats_ncaa_basket_player[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_ncaa_basket_player.map((index) => {
        if (index.name == store.stats_ncaa_basket_player[params.theid].name) {

            data.datasets[0].data.push(index.pts);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].name}
                            </div>
                            <div className="col-12">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].weight}</div>
                            <div className="col-12"><span className="fw-bold">College:</span> {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].college}</div>
                            <div className="col-12"><span className="fw-bold">Minutes:</span> {store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].minutes}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        Points per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="eight_spans">GP</div>
                        <div className="eight_spans">Gs</div>
                        <div className="eight_spans">Fg</div>
                        <div className="eight_spans">Fg AVG</div>
                        <div className="eight_spans">Three Pt</div>
                        <div className="eight_spans">Three Pt AVG</div>
                        <div className="eight_spans">Ft</div>
                        <div className="eight_spans">Ft AVG</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].gp}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].gs}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].fg}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].fg_AVG}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].three_pt}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].three_pt_AVG}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].ft}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].ft_AVG}</div>
                    </div>
                    <div className="row g-0 bg_lines text-white text-center mt-3">
                        <div className="eight_spans">Or</div>
                        <div className="eight_spans">Dr</div>
                        <div className="eight_spans">Reb</div>
                        <div className="eight_spans">Ast</div>
                        <div className="eight_spans">Stl</div>
                        <div className="eight_spans">Blk</div>
                        <div className="eight_spans">To</div>
                        <div className="eight_spans">Pf</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].Or}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].dr}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].reb}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].ast}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].stl}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].blk}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].to}</div>
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].pf}</div>
                    </div>
                    <div className="row g-0 text-white text-center mt-3">
                        <div className="eight_spans bg_lines">Pts</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_ncaa_basket_player[params.theid] && store.stats_ncaa_basket_player[params.theid].pts}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default NCAA_BASKET_Player_Stats;