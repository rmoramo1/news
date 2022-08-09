import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import {   Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Football_Team_Stats } from "../../lines/football_team_stas";

function Nfl_Team_stats() {
    const { store } = useContext(Context);
    const [year, setyear] = useState("2022");
    let date =new Date();
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

    store.nfl_team_stats.map((index) => {
        data.labels.push(index.team);
    })

    store.nfl_team_stats.map((index) => {
        if(index.season == year){
            data.datasets[0].data.push(index.TP);
        }
    })


    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className="row g-0">
                <div className="col-lg-8">
                    <div className="title_sport bg_base_dark text-white ps-5 fs-2 font_bold">
                        <div className="row g-0">
                            <div className="col-lg-6">Estadística de equipos de la NFL</div>
                            <div className="col-lg-6">
                                <div className="row g-0">
                                    <div className="col-6 text-center">Temporada</div>
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
                    <div className="overflowX_scroll">
                        <div className="row g-0 bg_lines text-white text-center odds-list">
                            <div className="quince_spans"></div>
                            <div className="quince_spans">Team</div>
                            <div className="quince_spans">TPPG</div>
                            <div className="quince_spans">TP</div>
                            <div className="quince_spans">TT</div>
                            <div className="quince_spans">T1sD</div>
                            <div className="quince_spans">CA</div>
                            <div className="quince_spans">RY</div>
                            <div className="quince_spans">TOP</div>
                            <div className="quince_spans">TY</div>
                            <div className="quince_spans">YPG</div>
                            <div className="quince_spans">kT</div>
                            <div className="quince_spans">N%PY</div>
                            <div className="quince_spans">PTY</div>
                            <div className="quince_spans">%PYG</div>
                        </div>
                        {store.nfl_team_stats.map((item, index) => {
                            if (item.season == year) {
                                return (
                                    <div key={index} className="odds-list">
                                        <Football_Team_Stats
                                            ttpg={item.ttpg}
                                            TP={item.TP}
                                            t_td={item.t_td}
                                            t_1_down={item.t_1_down}
                                            Russ_1_d={item.Russ_1_d}
                                            pass_1_d={item.pass_1_d}
                                            down_1_penal={item.down_1_penal}
                                            down_3_eff={item.down_3_eff}
                                            down_3_AVG={item.down_3_AVG}
                                            down_4_eff={item.down_4_eff}
                                            down_4_AVG={item.down_4_AVG}
                                            comp_att={item.comp_att}
                                            net_pass_y={item.net_pass_y}
                                            y_p_pas_attps={item.y_p_pas_attps}
                                            net_pass_y_pg={item.net_pass_y_pg}
                                            pass_td={item.pass_td}
                                            sacks_y_lost={item.sacks_y_lost}
                                            int_t={item.int_t}
                                            russ_attps={item.russ_attps}
                                            russ_y={item.russ_y}
                                            y_p_russ_attp={item.y_p_russ_attp}
                                            russ_y_pg={item.russ_y_pg}
                                            russ_td={item.russ_td}
                                            total_of_plays={item.total_of_plays}
                                            total_y={item.total_y}
                                            y_pg={item.y_pg}
                                            kickoffs_t={item.kickoffs_t}
                                            AVG_kickoff_return_y={item.AVG_kickoff_return_y}
                                            punt_t={item.punt_t}
                                            AVG_punt_ruturn_y={item.AVG_punt_ruturn_y}
                                            AVG_intercept_y={item.AVG_intercept_y}
                                            net_AVG_punt_y={item.net_AVG_punt_y}
                                            punt_ty={item.punt_ty}
                                            fg_goog_attps={item.fg_goog_attps}
                                            touchback_percent={item.touchback_percent}
                                            penal_ty={item.penal_ty}
                                            penal_y_AVG_pg={item.penal_y_AVG_pg}
                                            possesion_time={item.possesion_time}
                                            fumbles_lost={item.fumbles_lost}
                                            turnover_ratio={item.turnover_ratio}
                                            team={item.team}
                                            division={item.division}
                                            season={item.season}
                                            conference={item.conference}
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
export default Nfl_Team_stats;