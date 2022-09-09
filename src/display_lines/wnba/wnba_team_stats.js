import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { WNBA_Team_Stats } from "../../lines/wnba_team_stats";

function WNBA_Team_stats_display() {
    const { store } = useContext(Context);
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
                text: 'Paridos Ganados',
            },
            title: {
                display: false,
                text: 'Paridos Ganados',
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
                    // 'rgba(241, 196, 15, 0.8)',
                    // 'rgba(46, 134, 193, 0.8)',
                    // 'rgba(231, 76, 60, 0.8)',
                    // 'rgba(142, 68, 173, 0.8)',
                    // 'rgba(235, 152, 78, 0.8)',
                    // 'rgba(211, 84, 0, 0.8)',
                    // 'rgba(170, 183, 184, 0.8)',
                    // 'rgba(0, 102, 204, 0.8)',
                    // 'rgba(255, 204, 51, 0.8)',
                    // 'rgba(0, 153, 51, 0.8)',
                    // 'rgba(51, 153, 102, 0.8)',
                    // 'rgba(204, 51, 153, 0.8)',
                    // 'rgba(0, 102, 153, 0.8)',
                    // 'rgba(153, 0, 204, 0.8)',
                    // 'rgba(0, 204, 0, 0.8)',
                    // 'rgba(204, 0, 51, 0.8)',
                    // 'rgba(204, 153, 51, 0.8)',
                    // 'rgba(153, 51, 51, 0.8)',
                    // 'rgba(51, 0, 102, 0.8)',
                ],
                borderColor: [
                    'rgba(230, 126, 34,, .3)',
                ],
                borderWidth: 0,
            },
        ],
    };

    store.stats_wnba_team.map((index) => {
        data.labels.push(index.team);
    })

    store.stats_wnba_team.map((index) => {
        if(index.season == year){
            data.datasets[0].data.push(index.w);
        }
    })



    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let wnbaFilter = store.stats_wnba_team;
    var byDate = wnbaFilter;
    byDate.sort(function (a, b) {
        return b.w - a.w;
    });
    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className="row g-0">
                <div className="col-lg-8">
                    <div className="title_sport bg_base_dark text-white ps-lg-5 fs-2 font_bold">
                        <div className="row g-0">
                            <div className="col-lg-7">Estadística de equipos de la WNBA</div>
                            <div className="col-lg-5">
                                <div className="row g-0">
                                    <div className="col-6 text-center">SEASON</div>
                                    <div className="col-lg-5 d-flex align-items-center">
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
                            <div className="diezSiete_spans"> </div>
                            <div className="diez_spans">Team</div>
                            <div className="diezSiete_spans">W</div>
                            <div className="diezSiete_spans">L</div>
                            <div className="quince_spans">PTC</div>
                            <div className="quince_spans">GB</div>
                            <div className="quince_spans">Home</div>
                            <div className="quince_spans">Away</div>
                            <div className="quince_spans">Div</div>
                            <div className="quince_spans">Conf</div>
                            <div className="quince_spans">PPG</div>
                            <div className="quince_spans">Opp Ppg</div>
                            <div className="quince_spans">Diff</div>
                            <div className="diezSiete_spans">Strk</div>
                            <div className="diezSiete_spans bg_lines">L 10</div>
                        </div>
                        {wnbaFilter.map((item, index) => {
                            if (item.season == year) {
                                return (
                                    <div key={index} className="odds-list">
                                        <WNBA_Team_Stats
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
export default WNBA_Team_stats_display;
