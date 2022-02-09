import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Punting_Player_Stats() {
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
    store.nfl_player_punting_stats.map((index) => {
        if (index.name == store.nfl_player_punting_stats[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.nfl_player_punting_stats.map((index) => {
        if (index.name == store.nfl_player_punting_stats[params.theid].name) {

            data.datasets[0].data.push(index.punts);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].name}
                            </div>
                            <div className="col-12">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center">
                        Punts per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">

                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="eight_spans">Punts</div>
                        <div className="eight_spans">Yards</div>
                        <div className="eight_spans">Lng</div>
                        <div className="eight_spans">AVG</div>
                        <div className="eight_spans">Net</div>
                        <div className="eight_spans">P Blk</div>
                        <div className="eight_spans">IN 20</div>
                        <div className="eight_spans">Tb</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].punts}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].yards}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].lng}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].AVG}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].net}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].p_blk}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].IN_20}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].tb}</div>
                    </div>
                    <div className="row g-0  text-white text-center mt-3">
                        <div className="eight_spans bg_lines">Fc</div>
                        <div className="eight_spans bg_lines">Att</div>
                        <div className="eight_spans bg_lines">Punt R Y</div>
                        <div className="eight_spans bg_lines">AVG P R Y</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].fc}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].att}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].punt_return_yds}</div>
                        <div className="eight_spans bb1px lines">{store.nfl_player_punting_stats[params.theid] && store.nfl_player_punting_stats[params.theid].AVG_punt_retun_yards}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Punting_Player_Stats;