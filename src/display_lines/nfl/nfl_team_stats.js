import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Football_Team_Stats } from "../../lines/football_team_stas";

export const Nfl_Team_stats = () => {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Arizona Cardinals");
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-2 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">NFL Team Stats</div>
                    <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">TEAM</div>
                            <div className="col-lg-3 d-flex align-items-center">
                                <select className="form-select" name="team" aria-label="Default select example" defaultValue={team} onChange={e => setTeam(e.target.value)} required>
                                    {
                                        store.nfl_teams.map((item,index) => {
                                            return (
                                                <option key={index} name="team" value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
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
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    {store.nfl_team_stats.map((item, index) => {
                     if(item.team == team && item.season == year){
                         return (
                             <div key={index}>
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
        </div>
    )
}