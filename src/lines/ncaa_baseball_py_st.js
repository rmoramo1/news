import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Ncaa_Baseball_py_st() {
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
    store.stats_ncaa_baseball_player.map((index) => {
        if (index.name == store.stats_ncaa_baseball_player[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_ncaa_baseball_player.map((index) => {
        if (index.name == store.stats_ncaa_baseball_player[params.theid].name) {
            
            data.datasets[0].data.push(index.r);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_ncaa_baseball_player[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_ncaa_baseball_player[params.theid].name}
                            </div>
                            <div className="col-12">{store.stats_ncaa_baseball_player[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_ncaa_baseball_player[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_ncaa_baseball_player[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_ncaa_baseball_player[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_ncaa_baseball_player[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_ncaa_baseball_player[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_ncaa_baseball_player[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        RUN per Year
                    </div>
                    <div className="chart mh-25">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
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
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].gp}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].ab}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].r}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].h}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].two_b}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].three_b}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].hb}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].rbi}</div>
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
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].tb}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].bb}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].so}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].sb}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].avg}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].obp}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].slg}</div>
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].ops}</div>
            </div>
            <div className="row g-0 text-white text-center mt-3">
                <div className="eight_spans bg_lines">War</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{store.stats_ncaa_baseball_player[params.theid].war}</div>
            </div>
        </div>
    )
};
export default Ncaa_Baseball_py_st;