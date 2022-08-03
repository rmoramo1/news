import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_PY_NCAA_Baseball } from "../../lines/single_py_NCAA_baseball";

function NCAA_BASEBALL_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;
    let teams = store.ncaa_baseball_teams;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Davidson");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div>
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
                                <select className="form-select" name="setTeam" aria-label="Default select example" defaultValue={"Davidson"} onChange={e => setTeam(e.target.value)} required>
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
                    <div className="diez_nueve_spans">Name</div>
                    <div className="diez_nueve_spans">GP</div>
                    <div className="diez_nueve_spans">Ab</div>
                    <div className="diez_nueve_spans">R</div>
                    <div className="diez_nueve_spans">H</div>
                    <div className="diez_nueve_spans">Two B</div>
                    <div className="diez_nueve_spans">Three B</div>
                    <div className="diez_nueve_spans">Hb</div>
                    <div className="diez_nueve_spans">Rbi</div>
                    <div className="diez_nueve_spans">Tb</div>
                    <div className="diez_nueve_spans">Bb</div>
                    <div className="diez_nueve_spans">So</div>
                    <div className="diez_nueve_spans">Sb</div>
                    <div className="diez_nueve_spans">Avg</div>
                    <div className="diez_nueve_spans">Obp</div>
                    <div className="diez_nueve_spans">Slg</div>
                    <div className="diez_nueve_spans">Ops</div>
                </div>
                {
                    store.stats_ncaa_baseball_player.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 p-1 odds-list">
                                    <Single_PY_NCAA_Baseball
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
                                        headshot={item.headshot}
                                        gp={item.gp}
                                        ab={item.ab}
                                        r={item.r}
                                        h={item.h}
                                        two_b={item.two_b}
                                        three_b={item.three_b}
                                        hb={item.hb}
                                        rbi={item.rbi}
                                        tb={item.tb}
                                        bb={item.bb}
                                        so={item.so}
                                        sb={item.sb}
                                        avg={item.avg}
                                        obp={item.obp}
                                        slg={item.slg}
                                        ops={item.ops}
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
export default NCAA_BASEBALL_PY_STATS;