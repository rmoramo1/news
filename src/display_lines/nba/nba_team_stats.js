import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { NBA_Team_Stats } from "../../lines/nba_team_stats";

function NBA_Team_stats_display(){
    const { store } = useContext(Context);
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
	let nbaFilter = store.stats_nba_team;
	var byDate = nbaFilter;
	byDate.sort(function(a,b) {
		return b.w - a.w;
	});
    return (
        <div className="rounded_span m-2 bg-white shadow_spans mh_display">
            <div className="title_sport bg_base_dark text-white ps-lg-5 fs-2 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">NBA Team Stadings</div>
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
                <div className="accordion-collapse collapse show" id="nba_stats_teamCollapse" data-bs-parent="#sports">
                    {nbaFilter.map((item, index) => {
                        if (item.season == year) {
                            return (
                                <div key={index} className="odds-list">
                                    <NBA_Team_Stats
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
    )
};
export default NBA_Team_stats_display;