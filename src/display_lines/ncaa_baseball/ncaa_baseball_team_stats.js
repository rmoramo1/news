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
	let ncaa_baseballFilter = store.stats_ncaa_baseball_team;
	var byDate = ncaa_baseballFilter;
	byDate.sort(function(a,b) {
		return b.id - a.id;
	});
    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-2 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">NCAA Team Stats</div>
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
                    <div className="quince_spans"></div>
                    <div className="quince_spans">Team</div>
                    <div className="quince_spans">W</div>
                    <div className="quince_spans">L</div>
                    <div className="quince_spans">PCT</div>
                    <div className="quince_spans">GB</div>
                    <div className="quince_spans">Home</div>
                    <div className="quince_spans">Away</div>
                    <div className="quince_spans">Rs</div>
                    <div className="quince_spans">Ra</div>
                    <div className="quince_spans">Diff</div>
                    <div className="quince_spans">Strk</div>
                    <div className="quince_spans">L10</div>
                </div>
                <div className="accordion-collapse collapse show" id="stats_ncaa_baseball_teamCollapse" data-bs-parent="#sports">
                    {ncaa_baseballFilter.map((item, index) => {
                        if (item.season == year) {
                            return (
                                <div key={index} className="odds-list">
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