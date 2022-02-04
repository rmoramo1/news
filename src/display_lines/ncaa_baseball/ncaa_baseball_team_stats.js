import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

import { BaseBall_Team_Stats } from "../../lines/baseball_team_stats";

export const NCAA_BASEBALL_Team_stats_display = () => {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Davidson");
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-2 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">NCAA Team Stats</div>
                    <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">TEAM</div>
                            <div className="col-lg-3 d-flex align-items-center">
                                <select className="form-select" name="team" aria-label="Default select example" defaultValue={team} onChange={e => setTeam(e.target.value)} required>
                                    {
                                        store.ncaa_baseball_teams.map((item, index) => {
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
                <div className="accordion-collapse collapse show" id="stats_ncaa_baseball_teamCollapse" data-bs-parent="#sports">
                    {store.stats_ncaa_baseball_team.map((item, index) => {
                        if (item.team == team && item.season == year) {
                            return (
                                <div key={index}>
                                    <BaseBall_Team_Stats
                                        team={item.team}
                                        w={item.w}
                                        L={item.L}
                                        pct={item.pct}
                                        gb={item.gb}
                                        home={item.home}
                                        away={item.away}
                                        rs={item.rs}
                                        ra={item.ra}
                                        diff={item.diff}
                                        strk={item.strk}
                                        L10={item.L10}
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