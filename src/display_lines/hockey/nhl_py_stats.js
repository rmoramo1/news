import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_PY_NHL } from "../../lines/single_py_nhl";


function NHL_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;
    let teams = store.nhl_teams;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Boston Bruins");
  
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div>
            <div className=" title_sport bg_orange_dark text-white p-1 fs-5 font_bold">
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
                                <select className="form-select" name="setTeam" aria-label="Default select example" defaultValue={"Boston Bruins"} onChange={e => setTeam(e.target.value)} required>
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
            <div className="row g-0 text-center bg_lines text-white odds-list">
                        <div className="diez_nueve_spans"></div>
                        <div className="diez_nueve_spans">NAME</div>
                        <div className="diez_nueve_spans">GP</div>
                        <div className="diez_nueve_spans">G</div>
                        <div className="diez_nueve_spans">A</div>
                        <div className="diez_nueve_spans">PTS</div>
                        <div className="diez_nueve_spans">PMR</div>
                        <div className="diez_nueve_spans">PIM</div>
                        <div className="diez_nueve_spans">SOG</div>
                        <div className="diez_nueve_spans">SPCT</div>
                        <div className="diez_nueve_spans">PPG</div>
                        <div className="diez_nueve_spans">PPA</div>
                        <div className="diez_nueve_spans">SHG</div>
                        <div className="diez_nueve_spans">SHA</div>
                        <div className="diez_nueve_spans">GWG</div>
                        <div className="diez_nueve_spans">GTG</div>
                        <div className="diez_nueve_spans">TOIG</div>
                        <div className="diez_nueve_spans">PROD</div>
                    </div>
                {
                    store.stats_nhl_player.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12">
                                    <Single_PY_NHL
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot} 
                                        gp={item.gp}
                                        g={item.g}
                                        a={item.a}
                                        pts={item.pts}
                                        p_m_rating={item.p_m_rating}
                                        pim={item.pim}
                                        sog={item.sog}
                                        ppg={item.ppg}
                                        ppa={item.ppa}
                                        shg={item.shg}
                                        sha={item.sha}
                                        gwg={item.gwg}
                                        gtg={item.gtg}
                                        toi_g={item.toi_g}
                                        prod={item.prod}
                                        spct={item.spct}

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
export default NHL_PY_STATS;