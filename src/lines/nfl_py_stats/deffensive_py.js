import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Deffensive_Player_Stats() {
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
    store.nfl_player_deffensive_stats.map((index) => {
        if (index.name == store.nfl_player_deffensive_stats[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.nfl_player_deffensive_stats.map((index) => {
        if (index.name == store.nfl_player_deffensive_stats[params.theid].name) {
            
            data.datasets[0].data.push(index.tack_total);

        }
    })

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.nfl_player_deffensive_stats[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.nfl_player_deffensive_stats[params.theid].name}
                            </div>
                            <div className="col-12">{store.nfl_player_deffensive_stats[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.nfl_player_deffensive_stats[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.nfl_player_deffensive_stats[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.nfl_player_deffensive_stats[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.nfl_player_deffensive_stats[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.nfl_player_deffensive_stats[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.nfl_player_deffensive_stats[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center">
                        Tack per Year
                    </div>
                    <div className="chart mh-25">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
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
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].tack_solo}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].tack_ast}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].tack_total}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].sacks}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].sacks_yards}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].tfl}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].pd}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].Int}</div>
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
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].yds}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].ing}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].td}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].ff}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].fr}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].ftd}</div>
                <div className="eight_spans bb1px lines">{store.nfl_player_deffensive_stats[params.theid].kb}</div>
            </div>
        </div>
    )
};
export default Deffensive_Player_Stats;