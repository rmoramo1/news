import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Ofensive_PY_Ncaa } from "../../lines/ncaa_py_stats/single_offensive_py";
import { Single_Defensive_PY_Ncaa } from "../../lines/ncaa_py_stats/single_deffensive_player";
import { Single_Returning_PY_Ncaa } from "../../lines/ncaa_py_stats/single_returning_py";
import { Single_Punting_PY_Ncaa } from "../../lines/ncaa_py_stats/single_punting_stats";
import { Single_Kicking_PY_Ncaa } from "../../lines/ncaa_py_stats/single_kicking_py";

function Ncaa_Football_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;
    let teams = store.ncaa_foot_teams;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Cincinnati");

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
                                <select className="form-select" name="setTeam" aria-label="Default select example" defaultValue={"Cincinnati"} onChange={e => setTeam(e.target.value)} required>
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
            <div className="col-12 fs-5">
                Offensive Players
            </div>
            <div className="row g-0">
                {
                    store.stats_offensive_player_ncaa_football.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-lg-6 p-1">
                                    <Single_Ofensive_PY_Ncaa
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="col-12 fs-5">
                Deffensive Player
            </div>
            <div className="row g-0">
                {
                    store.stats_defensive_player_ncca_football.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-lg-6 p-1">
                                    <Single_Defensive_PY_Ncaa
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="col-12 fs-5">
                Returning Player
            </div>
            <div className="row g-0">
                {
                    store.stats_returning_player_ncaa_football.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-lg-6 p-1">
                                    <Single_Returning_PY_Ncaa
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="col-12 fs-5">
                Punting Player
            </div>
            <div className="row g-0">
                {
                    store.stats_punting_player_ncaa_football.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-lg-6 p-1">
                                    <Single_Punting_PY_Ncaa
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="col-12 fs-5">
                Kicking Player
            </div>
            <div className="row g-0">
                {
                    store.stats_kiking_player_ncaa_football.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-lg-6 p-1">
                                    <Single_Kicking_PY_Ncaa
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        position={item.position}
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
export default Ncaa_Football_PY_STATS;