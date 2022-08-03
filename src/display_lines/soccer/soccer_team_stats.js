import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

import { Soccer_Team_Stats } from "../../lines/soccer_team_stats";

export const Soccer_Team_stats_display = () => {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Real Madrid");
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let Team_drop = [];
    store.stats_soccer_team.map((item) => {
        if(Team_drop.includes(item.name)){

        }else{
            Team_drop.push(item.name);
        }
    })
    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_base_dark text-white ps-lg-5 fs-2 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">Soccer Statdsdsds</div>
                    <div className="col-lg-8">
                        <div className="row g-0">
                            <div className="col-3 text-center">TEAM</div>
                            <div className="col-lg-3 d-flex align-items-center">
                                <select className="form-select" name="team" aria-label="Default select example" defaultValue={team} onChange={e => setTeam(e.target.value)} required>
                                    {
                                        Team_drop.map((item, index) => {
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
                <div className="accordion-collapse collapse show" id="nba_stats_teamCollapse" data-bs-parent="#sports">
                    {store.stats_soccer_team.map((item, index) => {
                        if (item.name == team && item.season == year) {
                            return (
                                <div key={index}>
                                    <Soccer_Team_Stats
                                        team={item.team}
                                        matches={item.matches}
                                        win={item.win}
                                        loss={item.loss}
                                        pts={item.pts}
                                        goals_for={item.goals_for}
                                        goals_against={item.goals_against}
                                        more_2_5_goals={item.more_2_5_goals}
                                        less_2_5_goals={item.less_2_5_goals}
                                        zero_goal_against={item.zero_goal_against}
                                        zero_goals_for={item.zero_goals_for}
                                        ties={item.ties}
                                        name={item.name}
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