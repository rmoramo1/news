import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Returning_Player_Stats() {
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
    store.nfl_player_returning_stats.map((index) => {
        if (index.name == store.nfl_player_returning_stats[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.nfl_player_returning_stats.map((index) => {
        if (index.name == store.nfl_player_returning_stats[params.theid].name) {
            
            data.datasets[0].data.push(index.pts);

        }
    })

 

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.nfl_player_returning_stats[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.nfl_player_returning_stats[params.theid].name}
                            </div>
                            <div className="col-12">{store.nfl_player_returning_stats[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.nfl_player_returning_stats[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.nfl_player_returning_stats[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.nfl_player_returning_stats[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.nfl_player_returning_stats[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.nfl_player_returning_stats[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.nfl_player_returning_stats[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        Points per Year
                    </div>
                    <div className="chart mh-25">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
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
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].kick_returns}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].kick_returns_yards}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].yards_p_k_p}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].l_k_r}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].k_r_td}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].punt_r}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].punt_r_y}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].y_ppr}</div>
            </div>
            <div className="row g-0 bg_lines text-white text-center mt-3">
                <div className="eight_spans">L PR</div>
                <div className="eight_spans">P RTD</div>
                <div className="eight_spans">Punt R F CL</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].lpr}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].pr_td}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_returning_stats[params.theid].punt_r_fair_carches}</div>
            </div>

        </div>
    )
};
export default Returning_Player_Stats;