import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';
import { Single_PY_SOCCER } from "../../lines/single_py_soccer";

function SOCCER_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;

    let teams = [];
    store.stats_soccer_player.map((item) => {
        if(teams.includes(item.team)){

        }else{
            teams.push(item.team);
        }
    })

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Real Madrid");
  
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
                                <select className="form-select" name="setTeam" aria-label="Default select example" defaultValue={"Real Madrid"} onChange={e => setTeam(e.target.value)} required>
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
                        <div className="quince_spans"></div>
                        <div className="quince_spans">Name</div>
                        <div className="quince_spans">Position</div>
                        <div className="quince_spans">Dorsal</div>
                        <div className="quince_spans">Games</div>
                        <div className="quince_spans">Starts</div>
                        <div className="quince_spans">FC</div>
                        <div className="quince_spans">FS</div>
                        <div className="quince_spans">YC</div>
                        <div className="quince_spans">RC</div>
                        <div className="quince_spans">G</div>
                        <div className="quince_spans">Ast</div>
                        <div className="quince_spans">SH</div>
                        <div className="quince_spans">ST</div>
                        <div className="quince_spans">Off</div>
                    </div>
                {
                    store.stats_soccer_player.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12">
                                    <Single_PY_SOCCER
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot}
                                        position={item.position}
                                        dorsal={item.dorsal}
                                        games={item.games}
                                        strt={item.strt}
                                        fc={item.fc}
                                        fa={item.fa}
                                        yc={item.yc}
                                        rc={item.rc}
                                        goals={item.goals}
                                        ast={item.ast}
                                        sh={item.sh}
                                        st={item.st}
                                        off={item.off}
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
export default SOCCER_PY_STATS;