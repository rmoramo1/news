import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Deffensive_Player_Stats_Ncaa() {
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
    store.stats_defensive_player_ncca_football.map((index) => {
        if (index.name == store.stats_defensive_player_ncca_football[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_defensive_player_ncca_football.map((index) => {
        if (index.name == store.stats_defensive_player_ncca_football[params.theid].name) {

            data.datasets[0].data.push(index.tack_total);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].name}
                            </div>
                            <div className="col-12">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center">
                        Tack per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="eight_spans">Tack Solo</div>
                        <div className="eight_spans">Tack Ast</div>
                        <div className="eight_spans">Tack Total</div>
                        <div className="eight_spans">Sacks</div>
                        <div className="eight_spans">Sacks Yards</div>
                        <div className="eight_spans">Tfl</div>
                        <div className="eight_spans">PD</div>
                        <div className="eight_spans">Int</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].tack_solo}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].tack_ast}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].tack_total}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].sacks}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].sacks_yards}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].tfl}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].pd}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].Int}</div>
                    </div>
                    <div className="row g-0  text-white text-center mt-3">
                        <div className="eight_spans bg_lines">Yds</div>
                        <div className="eight_spans bg_lines">Ing</div>
                        <div className="eight_spans bg_lines">TD</div>
                        <div className="eight_spans bg_lines">FF</div>
                        <div className="eight_spans bg_lines">FR</div>
                        <div className="eight_spans bg_lines">FTD</div>
                        <div className="eight_spans bg_lines">KB</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].yds}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].ing}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].td}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].ff}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].fr}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].ftd}</div>
                        <div className="eight_spans bb1px lines">{store.stats_defensive_player_ncca_football[params.theid] && store.stats_defensive_player_ncca_football[params.theid].kb}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Deffensive_Player_Stats_Ncaa;