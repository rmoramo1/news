import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Golfer_st() {
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
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
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
                    <div className="col-lg-1 d-flex  align-items-center">
                        Holes per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
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
    )
};
export default Golfer_st;