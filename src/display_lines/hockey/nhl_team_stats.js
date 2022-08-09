import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { NHL_Team_Stats } from "../../lines/nhl_team_stats";

function NHL_Team_stats_display() {
    const { store } = useContext(Context);
    const [year, setyear] = useState("2022");

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
                text: 'Partidos Ganados',
            },
            title: {
                display: false,
                text: 'Partidos Ganados',
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
    
    store.stats_nhl_team.map((index) => {
        data.labels.push(index.team);
    })

    store.stats_nhl_team.map((index) => {
        if (index.season == year) {
            data.datasets[0].data.push(index.w);
        }
    })

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let nhlFilter = store.stats_nhl_team;
    var byDate = nhlFilter;
    byDate.sort(function (a, b) {
        return b.w - a.w;
    });
    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className="row g-0">
                <div className="col-lg-8">
                    <div className="title_sport bg_base_dark text-white ps-lg-5 fs-2 font_bold">
                        <div className="row g-0">
                            <div className="col-lg-4">NHL Team Stadings</div>
                            <div className="col-lg-8">
                                <div className="row g-0">
                                    <div className="col-3 text-center">SEASON</div>
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
                            <div className="diez_ocho_spans"></div>
                            <div className="diez_ocho_spans">Team</div>
                            <div className="diez_ocho_spans">GP</div>
                            <div className="diez_ocho_spans">W</div>
                            <div className="diez_ocho_spans">L</div>
                            <div className="diez_ocho_spans">Otl</div>
                            <div className="diez_ocho_spans">Pts</div>
                            <div className="diez_ocho_spans">RW</div>
                            <div className="diez_ocho_spans">ROW</div>
                            <div className="diez_ocho_spans">SOW</div>
                            <div className="diez_ocho_spans">SOL</div>
                            <div className="diez_ocho_spans">Home</div>
                            <div className="diez_ocho_spans">Away</div>
                            <div className="diez_ocho_spans">GF</div>
                            <div className="diez_ocho_spans">GA</div>
                            <div className="diez_ocho_spans">DIFF</div>
                            <div className="diez_ocho_spans">L10</div>
                            <div className="diez_ocho_spans">Strk</div>
                        </div>
                        <div className="accordion-collapse collapse show" w="nba_stats_teamCollapse" data-bs-parent="#sports">
                            {nhlFilter.map((item, index) => {
                                if (item.season == year) {
                                    return (
                                        <div key={index}>
                                            <NHL_Team_Stats
                                                team={item.team}
                                                w={item.w}
                                                L={item.L}
                                                otl={item.otl}
                                                pts={item.pts}
                                                rw={item.rw}
                                                row={item.row}
                                                sow={item.sow}
                                                sol={item.sol}
                                                home={item.home}
                                                away={item.away}
                                                diff={item.diff}
                                                gf={item.gf}
                                                ga={item.ga}
                                                l10={item.l10}
                                                strk={item.strk}
                                                gp={item.gp}
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
export default NHL_Team_stats_display;