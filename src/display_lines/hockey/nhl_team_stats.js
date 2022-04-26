import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

import { NHL_Team_Stats } from "../../lines/nhl_team_stats";

export const NHL_Team_stats_display = () => {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Boston Bruins");
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white ps-lg-5 fs-2 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">NHL Team Stats</div>
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
                    <div className="diez_nueve_spans"></div>
                    <div className="diez_nueve_spans">Team</div>
                    <div className="diez_nueve_spans">GP</div>
                    <div className="diez_nueve_spans">W</div>
                    <div className="diez_nueve_spans">L</div>
                    <div className="diez_nueve_spans">Otl</div>
                    <div className="diez_nueve_spans">Pts</div>
                    <div className="diez_nueve_spans">RW</div>
                    <div className="diez_nueve_spans">ROW</div>
                    <div className="diez_nueve_spans">SOW</div>
                    <div className="diez_nueve_spans">SOL</div>
                    <div className="diez_nueve_spans">Home</div>
                    <div className="diez_nueve_spans">Away</div>
                    <div className="diez_nueve_spans">GF</div>
                    <div className="diez_nueve_spans">GA</div>
                    <div className="diez_nueve_spans">DIFF</div>
                    <div className="diez_nueve_spans">L10</div>
                    <div className="diez_nueve_spans">Strk</div>
                </div>
                <div className="accordion-collapse collapse show" id="nba_stats_teamCollapse" data-bs-parent="#sports">
                    {store.stats_nhl_team.map((item, index) => {
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
    )
}