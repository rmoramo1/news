import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { NHL_Team_Stats } from "../../lines/nhl_team_stats";

function NHL_Team_stats_display() {
    let ann = new Date();
    let ane = ann.getFullYear();
    const { store } = useContext(Context);
    const [year, setyear] = useState(ane);

    const [typeTempo, setTypeTempo] = useState("Regular Season");
    const [compara, setCompara] = useState("Division")
    let typeTem = ["Regular Season", "Preseason"];
    let compa = ["Division","League", "Conference"];

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
    const data2 = {
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
    const data3 = {
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
    const data4 = {
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
    store.stats_nhl_team.map((index) => {
        if (index.division == "Atlantic") {
            data.labels.push(index.team);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.division == "Metropolitan") {
            data2.labels.push(index.team);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.division == "Central") {
            data3.labels.push(index.team);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.division == "Pacific") {
            data4.labels.push(index.team);
        }
    })

    store.stats_nhl_team.map((index) => {
        if (index.season == year && index.division == "Atlantic") {
            data.datasets[0].data.push(index.w);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.season == year && index.division == "Metropolitan") {
            data2.datasets[0].data.push(index.w);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.season == year && index.division == "Central") {
            data3.datasets[0].data.push(index.w);
        }
    })
    store.stats_nhl_team.map((index) => {
        if (index.season == year && index.division == "Pacific") {
            data4.datasets[0].data.push(index.w);
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
        <div className=" m-2 bg-white shadow_spans mh_display">
            <div className="row g-0">
                <div className="title_sport bg_base_dark text-white p-2 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-1 d-flex align-items-center justify-content-center fs-2">NHL</div>
                        <div className="col-lg-2 pe-2">
                            <div className="row g-0">
                                <div className="col d-flex align-items-center">
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
                        <div className="col-lg-2 pe-2">
                            <div className="row g-0">
                                <div className="col d-flex align-items-center">
                                    <select className="form-select" name="tipo" aria-label="Default select example" defaultValue="Regular Season" onChange={e => setTypeTempo(e.target.value)} required>
                                        {
                                            typeTem.map((index) => {
                                                return (
                                                    <option key={index} name="tipo" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 pe-2">
                            <div className="row g-0">
                                <div className="col d-flex align-items-center">
                                    <select className="form-select" name="year" aria-label="Default select example" defaultValue="Division" onChange={e => setCompara(e.target.value)} required>
                                        {
                                            compa.map((index) => {
                                                return (
                                                    <option key={index} name="compa" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="accordion-item overflowX_scroll">
                        <div className="row g-0 bg_lines text-white text-center odds-list bg_azul_light">
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
                                if (item.season == year && item.season_type == typeTempo && item.group_type_comparation ==  compara) {
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
                        <div className="col-12 text-center">
                            <h2>Atlantic</h2>
                        </div>
                        <Bar height={150} options={options} data={data} />
                        <div className="col-12 text-center">
                            <h2>Metropolitan</h2>
                        </div>
                        <Bar height={150} options={options} data={data2} />
                        <div className="col-12 text-center">
                            <h2>Central</h2>
                        </div>
                        <Bar height={150} options={options} data={data3} />
                        <div className="col-12 text-center">
                            <h2>Pacific</h2>
                        </div>
                        <Bar height={150} options={options} data={data4} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default NHL_Team_stats_display;