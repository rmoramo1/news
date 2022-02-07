import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function NHL_py_st() {
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
    store.stats_nhl_player.map((index) => {
        if (index.name == store.stats_nhl_player[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_nhl_player.map((index) => {
        if (index.name == store.stats_nhl_player[params.theid].name) {

            data.datasets[0].data.push(index.g);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_nhl_player[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_nhl_player[params.theid].name}
                            </div>
                            <div className="col-12">{store.stats_nhl_player[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_nhl_player[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_nhl_player[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_nhl_player[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_nhl_player[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_nhl_player[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_nhl_player[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        Goals per Year
                    </div>
                    <div className="chart mh-25">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="row g-0 bg_lines text-white text-center">
                <div className="eight_spans">GP</div>
                <div className="eight_spans">G</div>
                <div className="eight_spans">A</div>
                <div className="eight_spans">Pts</div>
                <div className="eight_spans">P M Rating</div>
                <div className="eight_spans">Pim</div>
                <div className="eight_spans">Sog</div>
                <div className="eight_spans">Spct</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].gp}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].g}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].a}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].pts}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].p_m_rating}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].pim}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].sog}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].spct}</div>
            </div>
            <div className="row g-0 bg_lines text-white text-center mt-3">
                <div className="eight_spans">Ppg</div>
                <div className="eight_spans">Ppa</div>
                <div className="eight_spans">Shg</div>
                <div className="eight_spans">Sha</div>
                <div className="eight_spans">Gwg</div>
                <div className="eight_spans">Gtg</div>
                <div className="eight_spans">Toi G</div>
                <div className="eight_spans">Prod</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].ppg}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].ppa}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].shg}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].sha}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].gwg}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].gtg}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].toi_g}</div>
                <div className="eight_spans bb1px lines">{store.stats_nhl_player[params.theid].prod}</div>
            </div>
        </div>
    )
};
export default NHL_py_st;