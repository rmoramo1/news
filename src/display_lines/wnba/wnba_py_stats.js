import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_PY_WBasket } from "../../lines/single_py_wbasket";


function WNBA_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;
    let teams = store.wnba_teams;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Atlanta Hawks");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className=" shadow_spans bg-white mh_display">
            <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-2">Player Stats</div>
                    <div className="col-lg-10">
                        <div className="row g-0">
                            <div className="col-2 text-center">Year</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                    {
                                        selectYear.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-2 text-center">Team</div>
                            <div className="col-lg-4 d-flex align-items-center">
                                <select className="form-select" name="setTeam" aria-label="Default select example" defaultValue={"Arizona Cardinals"} onChange={e => setTeam(e.target.value)} required>
                                    {
                                        teams.map((index) => {
                                            return (
                                                <option key={index} name="teams" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white font_small odds-list">
                    <div className="diez_nueve_spans">Shot</div>
                    <div className="diez_nueve_spans">Name</div>
                    <div className="diez_nueve_spans">GP</div>
                    <div className="diez_nueve_spans">Gs</div>
                    <div className="diez_nueve_spans">Fg</div>
                    <div className="diez_nueve_spans">Fg %</div>
                    <div className="diez_nueve_spans">3Pt</div>
                    <div className="diez_nueve_spans">3Pt %</div>
                    <div className="diez_nueve_spans">Ft</div>
                    <div className="diez_nueve_spans">Ft %</div>
                    <div className="diez_nueve_spans">Or</div>
                    <div className="diez_nueve_spans">Dr</div>
                    <div className="diez_nueve_spans">Reb</div>
                    <div className="diez_nueve_spans">Ast</div>
                    <div className="diez_nueve_spans">Stl</div>
                    <div className="diez_nueve_spans">Blk</div>
                    <div className="diez_nueve_spans">To</div>
                    <div className="diez_nueve_spans">Pf</div>
                    <div className="diez_nueve_spans">Pts</div>
                </div>
                {
                    store.stats_wnba_player.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 p-1 odds-list">
                                    <Single_PY_WBasket
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        gp={item.gp}
                                        gs={item.gs}
                                        headshot={item.headshot}
                                        fg={item.fg}
                                        fg_AVG={item.fg_AVG}
                                        three_pt={item.three_pt}
                                        three_pt_AVG={item.three_pt_AVG}
                                        ft={item.ft}
                                        ft_AVG={item.ft_AVG}
                                        Or={item.Or}
                                        dr={item.dr}
                                        reb={item.reb}
                                        ast={item.ast}
                                        stl={item.stl}
                                        blk={item.blk}
                                        to={item.to}
                                        pf={item.pf}
                                        pts={item.pts}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default WNBA_PY_STATS;