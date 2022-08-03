import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Ofensive_PY } from "../../lines/nfl_py_stats/single_offensive_py";
import { Single_Defensive_PY } from "../../lines/nfl_py_stats/single_deffensive_player";
import { Single_Returning_PY } from "../../lines/nfl_py_stats/single_returning_py";
import { Single_Punting_PY } from "../../lines/nfl_py_stats/single_punting_stats";
import { Single_Kicking_PY } from "../../lines/nfl_py_stats/single_kicking_py";
import { Single_Rushing_PY } from "../../lines/nfl_py_stats/rushing_py_stats";
import { Single_Passing_PY } from "../../lines/nfl_py_stats/single_passing_py";

function PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;
    let teams = store.nfl_teams;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);
    const [team, setTeam] = useState("Arizona Cardinals");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div className="overflow-hidden">
            <div className=" title_sport bg_base_dark text-white fs-5 font_bold">
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
            <div className="col-12 fs-5">
                Passing Players
            </div>
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="quince_spans">Shot</div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">Gp</div>
                    <div className="quince_spans">CMP</div>
                    <div className="quince_spans">ATT</div>
                    <div className="quince_spans">CMP%</div>
                    <div className="quince_spans">YDS</div>
                    <div className="quince_spans">AVG</div>
                    <div className="quince_spans">YDS/G</div>
                    <div className="quince_spans">LNG</div>
                    <div className="quince_spans">TD</div>
                    <div className="quince_spans">INT</div>
                    <div className="quince_spans">SACK</div>
                    <div className="quince_spans">SYL</div>
                    <div className="quince_spans">RTG</div>
                </div>
                {
                    store.nfl_player_offensive_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Passing_PY
                                        id={index}
                                        name={item.name}
                                        Cmp={item.Cmp}
                                        pass_att={item.pass_att}
                                        headshot={item.headshot}
                                        games={item.games}
                                        cmp_AVG={item.cmp_AVG}
                                        yards={item.yards}
                                        yards_AVG={item.yards_AVG}
                                        yards_pg={item.yards_pg}
                                        long_pass={item.long_pass}
                                        pass_td={item.pass_td}
                                        Int={item.Int}
                                        asck={item.asck}
                                        syl={item.syl}
                                        rtg={item.rtg}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="col-12 fs-5">
                Rushing Players
            </div>
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="quince_spans">Shot</div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">GP</div>
                    <div className="quince_spans">ATT</div>
                    <div className="quince_spans">YDS</div>
                    <div className="quince_spans">AVG</div>
                    <div className="quince_spans">LNG</div>
                    <div className="quince_spans">BIG</div>
                    <div className="quince_spans">TD</div>
                    <div className="quince_spans">YDS/G</div>
                    <div className="quince_spans">FUM</div>
                    <div className="quince_spans">LST</div>
                    <div className="quince_spans">FD</div>
                </div>
                {
                    store.nfl_player_offensive_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Rushing_PY
                                        id={index}
                                        name={item.name}
                                        Cmp={item.Cmp}
                                        pass_att={item.pass_att}
                                        headshot={item.headshot}
                                        games={item.games}
                                        cmp_AVG={item.cmp_AVG}
                                        yards={item.yards}
                                        yards_AVG={item.yards_AVG}
                                        yards_pg={item.yards_pg}
                                        long_pass={item.long_pass}
                                        pass_td={item.pass_td}
                                        Int={item.Int}
                                        asck={item.asck}
                                        syl={item.syl}
                                        rtg={item.rtg}
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
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="diezSiete_spans">Shot</div>
                    <div className="diezSiete_spans">Name</div>
                    <div className="diezSiete_spans">GP</div>
                    <div className="diezSiete_spans">Tack S</div>
                    <div className="diezSiete_spans">Tack A</div>
                    <div className="diezSiete_spans">Tack T</div>
                    <div className="diezSiete_spans">Sacks</div>
                    <div className="diezSiete_spans">Sacks Y</div>
                    <div className="diezSiete_spans">Tfl</div>
                    <div className="diezSiete_spans">PD</div>
                    <div className="diezSiete_spans">Int </div>
                    <div className="diezSiete_spans">Yds</div>
                    <div className="diezSiete_spans">Ing</div>
                    <div className="diezSiete_spans">TD</div>
                    <div className="diezSiete_spans">FF</div>
                    <div className="diezSiete_spans">FTD</div>
                    <div className="diezSiete_spans">KB</div>
                </div>
                {
                    store.nfl_player_deffensive_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Defensive_PY
                                        id={index}
                                        name={item.name}
                                        tack_solo={item.tack_solo}
                                        tack_ast={item.tack_ast}
                                        tack_total={item.tack_total}
                                        sacks={item.sacks}
                                        tfl={item.tfl}
                                        pd={item.pd}
                                        Int={item.Int}
                                        yds={item.yds}
                                        ing={item.ing}
                                        td={item.td}
                                        ff={item.ff}
                                        ftd={item.ftd}
                                        kb={item.kb}
                                        games={item.games}
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
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="quince_spans">Shot</div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">GP</div>
                    <div className="quince_spans">ATT</div>
                    <div className="quince_spans">YDS</div>
                    <div className="quince_spans">AVG</div>
                    <div className="quince_spans">LNG</div>
                    <div className="quince_spans">TD</div>
                    <div className="quince_spans">P ATT</div>
                    <div className="quince_spans">P YDS</div>
                    <div className="quince_spans">P AVG</div>
                    <div className="quince_spans">P LNG</div>
                    <div className="quince_spans">P TD</div>
                    <div className="quince_spans">P FC</div>
                </div>
                {
                    store.nfl_player_returning_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Returning_PY
                                        id={index}
                                        name={item.name}
                                        games={item.games}
                                        kick_returns={item.kick_returns}
                                        kick_returns_yards={item.kick_returns_yards}
                                        y_ppr={item.y_ppr}
                                        l_k_r={item.l_k_r}
                                        k_r_td={item.k_r_td}
                                        punt_r={item.punt_r}
                                        punt_r_y={item.punt_r_y}
                                        lpr={item.lpr}
                                        pr_td={item.pr_td}
                                        punt_r_fair_carches={item.punt_r_fair_carches}
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
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="quince_spans">Shot</div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">GP</div>
                    <div className="quince_spans">Punts</div>
                    <div className="quince_spans">YDS</div>
                    <div className="quince_spans">Lng</div>
                    <div className="quince_spans">AVG</div>
                    <div className="quince_spans">Net</div>
                    <div className="quince_spans">PBlk</div>
                    <div className="quince_spans">IN20</div>
                    <div className="quince_spans">TB</div>
                    <div className="quince_spans">FC</div>
                    <div className="quince_spans">ATT</div>
                    <div className="quince_spans">Punt RY</div>
                    <div className="quince_spans">AVG PRY</div>
                </div>
                {
                    store.nfl_player_punting_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Punting_PY
                                        id={index}
                                        name={item.name}
                                        dorsal={item.dorsal}
                                        headshot={item.headshot}
                                        punts={item.punts}
                                        yards={item.yards}
                                        lng={item.lng}
                                        AVG={item.AVG}
                                        net={item.net}
                                        p_blk={item.p_blk}
                                        IN_20={item.IN_20}
                                        tb={item.tb}
                                        fc={item.fc}
                                        att={item.att}
                                        punt_return_yds={item.punt_return_yds}
                                        AVG_punt_retun_yards={item.AVG_punt_retun_yards}
                                        games={item.games}
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
            <div className="row g-0 overflowX_scroll">
                <div className="row g-0 text-center bg_lines text-white odds-list">
                    <div className="quince_spans">Shot</div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">GP</div>
                    <div className="quince_spans">FGM</div>
                    <div className="quince_spans">FGA</div>
                    <div className="quince_spans">FG%</div>
                    <div className="quince_spans">LNG</div>
                    <div className="quince_spans">1-19</div>
                    <div className="quince_spans">20-29</div>
                    <div className="quince_spans">30-39</div>
                    <div className="quince_spans">40-49</div>
                    <div className="quince_spans">50+</div>
                    <div className="quince_spans">XPM</div>
                    <div className="quince_spans">XPA</div>
                    <div className="quince_spans">XP%</div>
                </div>
                {
                    store.nfl_player_kicking_stats.map((item, index) => {
                        if (item.season == year && item.team == team) {
                            return (
                                <div key={index} className="col-12 odds-list">
                                    <Single_Kicking_PY
                                        id={index}
                                        name={item.name}
                                        headshot={item.headshot}
                                        games={item.games}
                                        fgm={item.fgm}
                                        fga={item.fga}
                                        fg_AVG={item.fg_AVG}
                                        lng={item.lng}
                                        yars_f_goals_1_19={item.yars_f_goals_1_19}
                                        yars_f_goals_20_29={item.yars_f_goals_20_29}
                                        yars_f_goals_30_49={item.yars_f_goals_30_49}
                                        yars_f_goals_40_49={item.xp_AVG}
                                        more_50={item.more_50}
                                        xpm={item.xpm}
                                        xpa={item.xpa}
                                        xp_AVG={item.xp_AVG}
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
export default PY_STATS;