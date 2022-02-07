import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function Boxer_st() {
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

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_box_fighter[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_box_fighter[params.theid].name}
                            </div>
                            <div className="col-12"><span className="fw-bold">Nickname:</span> {store.stats_box_fighter[params.theid].nickname}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_box_fighter[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span>  {store.stats_box_fighter[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_box_fighter[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Country:</span> {store.stats_box_fighter[params.theid].country}</div>
                            <div className="col-12"><span className="fw-bold">Association:</span> {store.stats_box_fighter[params.theid].association}</div>
                            <div className="col-12"><span className="fw-bold">Category:</span> {store.stats_box_fighter[params.theid].category}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                       Wins per Year
                    </div>
                    <div className="chart mh-25">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="row g-0  text-white text-center">
                <div className="eight_spans bg_lines">W</div>
                <div className="eight_spans bg_lines">W By</div>
                <div className="eight_spans bg_lines">L</div>
                <div className="eight_spans bg_lines">L By</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{store.stats_box_fighter[params.theid].w}</div>
                <div className="eight_spans bb1px lines">{store.stats_box_fighter[params.theid].w_by}</div>
                <div className="eight_spans bb1px lines">{store.stats_box_fighter[params.theid].L}</div>
                <div className="eight_spans bb1px lines">{store.stats_box_fighter[params.theid].L_by}</div>
            </div>
        </div>
    )
};
export default Boxer_st;