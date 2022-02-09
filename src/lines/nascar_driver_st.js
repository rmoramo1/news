import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Nascar_Driver_Stats() {
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
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
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
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        Poles per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
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
    )
};
export default Nascar_Driver_Stats;