import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { NCAA_BASKET_Team_Stats } from "../../lines/ncaa_basket_team_stats";

function NCAA_BASKET_Team_stats_display() {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Bellarmine Knights");
    const [year, setyear] = useState("2022");
    let date = new Date();
    let ano = date.getFullYear();

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 0,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'none',
            },
            title: {
                display: false,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };
    const data = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                backgroundColor: [
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(110, 155, 211, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(46, 134, 193, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(142, 68, 173, 0.8)',
                    'rgba(235, 152, 78, 0.8)',
                    'rgba(211, 84, 0, 0.8)',
                    'rgba(170, 183, 184, 0.8)',
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(255, 204, 51, 0.8)',
                    'rgba(0, 153, 51, 0.8)',
                    'rgba(51, 153, 102, 0.8)',
                    'rgba(204, 51, 153, 0.8)',
                    'rgba(0, 102, 153, 0.8)',
                    'rgba(153, 0, 204, 0.8)',
                    'rgba(0, 204, 0, 0.8)',
                    'rgba(204, 0, 51, 0.8)',
                    'rgba(204, 153, 51, 0.8)',
                    'rgba(153, 51, 51, 0.8)',
                    'rgba(51, 0, 102, 0.8)',
                ],
                borderColor: [
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(110, 155, 211, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(46, 134, 193, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(142, 68, 173, 0.8)',
                    'rgba(235, 152, 78, 0.8)',
                    'rgba(211, 84, 0, 0.8)',
                    'rgba(170, 183, 184, 0.8)',
                    'rgba(0, 102, 204, 0.8)',
                    'rgba(255, 204, 51, 0.8)',
                    'rgba(0, 153, 51, 0.8)',
                    'rgba(51, 153, 102, 0.8)',
                    'rgba(204, 51, 153, 0.8)',
                    'rgba(0, 102, 153, 0.8)',
                    'rgba(153, 0, 204, 0.8)',
                    'rgba(0, 204, 0, 0.8)',
                    'rgba(204, 0, 51, 0.8)',
                    'rgba(204, 153, 51, 0.8)',
                    'rgba(153, 51, 51, 0.8)',
                    'rgba(51, 0, 102, 0.8)',
                ],
                borderWidth: 0,
            },
        ],
    };

    store.stats_ncaa_basket_team.map((index) => {
        data.labels.push(index.team);
    })

    store.stats_ncaa_basket_team.map((index) => {
        if (index.season == year) {
            data.datasets[0].data.push(index.w);
        }
    })


    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="row g-0">
                <div className="col-lg-8">
                    <div className="title_sport bg_base_dark text-white ps-lg-5 fs-2 font_bold">
                        <div className="row g-0">
                            <div className="col-lg-6">NCAA BASKETBALL Team Stats</div>
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col-lg-6 text-center">SEASON</div>
                                    <div className="col-lg-3 d-flex align-items-center">
                                        <select className="form-select" name="year" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                            {
                                                selectYear.map((index) => {
                                                    return (
                                                        <option key={index} name="year" value={index}>{index}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item overflowX_scroll">
                        <div className="row g-0 bg_lines text-white text-center odds-list">
                            <div className="quince_spans d-flex justify-content-center align-items-center"> </div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Team</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">W</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">L</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">PTC</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">GB</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Home</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Away</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Div</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Conf</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">PPG</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Opp Ppg</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Diff</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center">Strk</div>
                            <div className="quince_spans d-flex justify-content-center align-items-center bg_lines">L 10</div>
                        </div>
                        <div className="accordion-collapse collapse show" id="nba_stats_teamCollapse" data-bs-parent="#sports">
                            {store.stats_ncaa_basket_team.map((item, index) => {
                                if (item.season == year) {
                                    return (
                                        <div key={index} className="odds-list">
                                            <NCAA_BASKET_Team_Stats
                                                team={item.team}
                                                w={item.w}
                                                L={item.L}
                                                ptc={item.ptc}
                                                gb={item.gb}
                                                home={item.home}
                                                away={item.away}
                                                div={item.div}
                                                conf={item.conf}
                                                ppg={item.ppg}
                                                opp_ppg={item.opp_ppg}
                                                diff={item.diff}
                                                strk={item.strk}
                                                l10={item.l10}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="col-12 text-center fw-bold font_impact fs-3">
                        Juegos Ganados {year}
                    </div>
                    <Bar height={500} options={options} data={data} />
                </div>
            </div>

        </div>
    )
};
export default NCAA_BASKET_Team_stats_display;