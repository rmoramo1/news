import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Football_Team_Stats } from "../../lines/football_team_stas";

function Nfl_Team_stats() {
    let ann = new Date();
    let ane = ann.getFullYear();
    const { store } = useContext(Context);
    const [year, setyear] = useState(ane);

    const [typeTempo, setTypeTempo] = useState("Regular Season");
    const [compara, setCompara] = useState("League")
    let typeTem = ["Regular Season", "Preseason"];
    let compa = ["League", "Conference", "Division"];

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

    store.nfl_team_stats.map((item) => {
        if (item.division == "East Division") {
            data.labels.push(item.team);
        }
    })

    store.nfl_team_stats.map((item) => {
        if (item.division == "West Division") {
            data2.labels.push(item.team);
        }
    })

    store.nfl_team_stats.map((item) => {
        if (item.division == "North Division") {
            data3.labels.push(item.team);
        }
    })
    store.nfl_team_stats.map((item) => {
        if (item.division == "South Division") {
            data4.labels.push(item.team);
        }
    })

    store.nfl_team_stats.map((item) => {
        if (item.season == year && item.division == "East Division") {
            data.datasets[0].data.push(item.w);
        }
    })

    store.nfl_team_stats.map((item) => {
        if (item.season == year && item.division == "West Division") {
            data2.datasets[0].data.push(item.w);
        }
    })
    store.nfl_team_stats.map((item) => {
        if (item.season == year && item.division == "North Division") {
            data3.datasets[0].data.push(item.w);
        }
    })
    store.nfl_team_stats.map((item) => {
        if (item.season == year && item.division == "South Division") {
            data4.datasets[0].data.push(item.w);
        }
    })


    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className=" m-2 bg-white shadow_spans mh_display">
                <div className="title_sport bg_base_dark text-white p-2 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-1 d-flex align-items-center justify-content-center fs-2">NFL</div>
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
                                    <select className="form-select" name="year" aria-label="Default select example" defaultValue="League" onChange={e => setCompara(e.target.value)} required>
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
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="overflowX_scroll">
                        <div className="row g-0 bg_lines text-white text-center odds-list bg_azul_light">
                            <div className="quince_spans"></div>
                            <div className="eight_spans">Team</div>
                            <div className="quince_spans">W</div>
                            <div className="quince_spans">L</div>
                            <div className="quince_spans">T</div>
                            <div className="quince_spans">HOME</div>
                            <div className="quince_spans">AWAY</div>
                            <div className="quince_spans">CONF</div>
                            <div className="quince_spans">PF</div>
                            <div className="quince_spans">PA</div>
                            <div className="quince_spans">DIFF</div>
                            <div className="quince_spans">STRK</div>
                        </div>
                        {store.nfl_team_stats.map((item, index) => {
                            if (item.season == year && item.season_type == typeTempo && item.group_type_comparation ==  compara) {
                                return (
                                    <div key={index} className="odds-list">
                                        <Football_Team_Stats
                                            w={item.w}
                                            L={item.L}
                                            t={item.t}
                                            home={item.home}
                                            away={item.away}
                                            conf={item.conf}
                                            pf={item.pf}
                                            pa={item.pa}
                                            diff={item.diff}
                                            strk={item.strk}
                                            team={item.team}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="col-12 text-center fw-bold font_impact fs-3">
                        Juegos Ganados {year}
                    </div>
                    <div className="col-12 text-center">
                        <h2>East Division</h2>
                    </div>
                    <Bar height={100} options={options} data={data} />
                    <div className="col-12 text-center">
                        <h2>West Division</h2>
                    </div>
                    <Bar height={100} options={options} data={data2} />
                    <div className="col-12 text-center">
                        <h2>North Division</h2>
                    </div>
                    <Bar height={100} options={options} data={data3} />
                    <div className="col-12 text-center">
                        <h2>South Division</h2>
                    </div>
                    <Bar height={100} options={options} data={data4} />
                </div>
            </div>

        </div>
    )
};
export default Nfl_Team_stats;