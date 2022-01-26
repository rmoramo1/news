import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Football_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="col-12 fs-2 team_stats">
                <div className="row g-0">
                    <div className="col-6 pe-2 d-flex align-items-center justify-content-end">
                        {props.team}

                    </div>
                    <div className="col-6">
                        {
                            store.logos_nfl.map((item, index) => {
                                let url_aw = "";
                                if (item.team == props.team) {
                                    url_aw = item.url;
                                    return (
                                        <div>
                                            <img className="img_logo" src={url_aw} alt="logo"></img>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>



            </div>
            <div className="col fs-3 py-3">Scoring</div>
            <div className="row g-0 bg_lines text-white text-center">
                <div className="col-4">Total Points Per Game</div>
                <div className="col-4">Total Points</div>
                <div className="col-4">Total Touchdowns</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-4 bb1px lines">{props.ttpg}</div>
                <div className="col-4 bb1px lines">{props.TP}</div>
                <div className="col-4 bb1px lines">{props.t_td}</div>
            </div>
            <div className="col fs-3 py-3">1ST DOWNS</div>
            <div className="row g-0 bg_lines text-white text-center">
                <div className="eight_spans">T 1st D</div>
                <div className="eight_spans">R 1st D</div>
                <div className="eight_spans">P 1st D</div>
                <div className="eight_spans">1st D P</div>
                <div className="eight_spans">3rd D E</div>
                <div className="eight_spans">3rd D %s</div>
                <div className="eight_spans">4th D E</div>
                <div className="eight_spans">4th D %</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{props.t_1_down}</div>
                <div className="eight_spans bb1px lines">{props.Russ_1_d}</div>
                <div className="eight_spans bb1px lines">{props.pass_1_d}</div>
                <div className="eight_spans bb1px lines">{props.down_1_penal}</div>
                <div className="eight_spans bb1px lines">{props.down_3_eff}</div>
                <div className="eight_spans bb1px lines">{props.down_3_AVG}</div>
                <div className="eight_spans bb1px lines">{props.down_4_eff}</div>
                <div className="eight_spans bb1px lines">{props.down_4_AVG}</div>
            </div>
            <div className="col fs-3 py-3">PASSING</div>
            <div className="row g-0 text-white text-center">
                <div className="eight_spans bg_lines">Comp-Att</div>
                <div className="eight_spans bg_lines">NP Y</div>
                <div className="eight_spans bg_lines">YPPA</div>
                <div className="eight_spans bg_lines">NP Y PG</div>
                <div className="eight_spans bg_lines">PT</div>
                <div className="eight_spans bg_lines">Int</div>
                <div className="eight_spans bg_lines">S L</div>
            </div>
            <div className="row g-0 text-center">
                <div className="eight_spans bb1px lines">{props.comp_att}</div>
                <div className="eight_spans bb1px lines">{props.net_pass_y}</div>
                <div className="eight_spans bb1px lines">{props.y_p_pas_attps}</div>
                <div className="eight_spans bb1px lines">{props.net_pass_y_pg}</div>
                <div className="eight_spans bb1px lines">{props.pass_td}</div>
                <div className="eight_spans bb1px lines">{props.int_t}</div>
                <div className="eight_spans bb1px lines">{props.sacks_y_lost}</div>
            </div>
            <div className="col fs-3 py-3">RUSHING</div>
            <div className="row g-0 text-white text-center">
                <div className="col-2 bg_lines">RA</div>
                <div className="col-2 bg_lines">RY</div>
                <div className="col-2 bg_lines">YP RA</div>
                <div className="col-2 bg_lines">RY PG</div>
                <div className="col-2 bg_lines">RT</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.russ_attps}</div>
                <div className="col-2 bb1px lines">{props.russ_y}</div>
                <div className="col-2 bb1px lines">{props.y_p_russ_attp}</div>
                <div className="col-2 bb1px lines">{props.russ_y_pg}</div>
                <div className="col-2 bb1px lines">{props.russ_td}</div>
            </div>
            <div className="col fs-3 py-3">OFFENSE</div>
            <div className="row g-0 text-white text-center">
                <div className="col-2 bg_lines">TO P</div>
                <div className="col-2 bg_lines">TY</div>
                <div className="col-2 bg_lines">Y PG</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.total_of_plays}</div>
                <div className="col-2 bb1px lines">{props.total_y}</div>
                <div className="col-2 bb1px lines">{props.y_pg}</div>
            </div>
            <div className="col fs-3 py-3">RETURNS</div>
            <div className="row g-0 bg_lines text-white text-center">
                <div className="col-2">KT</div>
                <div className="col-2">AVGK R Y</div>
                <div className="col-2">Punt T</div>
                <div className="col-2">AVG PR Y</div>
                <div className="col-2">INT T</div>
                <div className="col-2">AVG I Y</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.kickoffs_t}</div>
                <div className="col-2 bb1px lines">{props.AVG_kickoff_return_y}</div>
                <div className="col-2 bb1px lines">{props.punt_t}</div>
                <div className="col-2 bb1px lines">{props.AVG_punt_ruturn_y}</div>
                <div className="col-2 bb1px lines">{props.int_t}</div>
                <div className="col-2 bb1px lines">{props.AVG_intercept_y}</div>
            </div>
            <div className="col fs-3 py-3">KICKING</div>
            <div className="row g-0 text-white text-center">
                <div className="col-2 bg_lines">N AVG PY</div>
                <div className="col-2 bg_lines">Punt TY</div>
                <div className="col-2 bg_lines">FG: GA</div>
                <div className="col-2 bg_lines">T%</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.net_AVG_punt_y}</div>
                <div className="col-2 bb1px lines">{props.punt_ty}</div>
                <div className="col-2 bb1px lines">{props.fg_goog_attps}</div>
                <div className="col-2 bb1px lines">{props.touchback_percent}</div>
            </div>
            <div className="row g-0">
                <div className="col-lg-4 p-1">
                    <div className="col fs-3 py-3">PENALTIES</div>
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="col-6">Total-Yards</div>
                        <div className="col-6">Avg. Per Game (YDS)</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 bb1px lines">{props.penal_ty}</div>
                        <div className="col-6 bb1px lines">{props.penal_y_AVG_pg}</div>
                    </div>
                </div>
                <div className="col-lg-4 p-1">
                    <div className="col fs-3 py-3">TIME OF POSSESSION</div>
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="col-12">Possession Time Seconds</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-12 bb1px lines">{props.possesion_time}</div>
                    </div>
                </div>
                <div className="col-lg-4 p-1 pb-5">
                    <div className="col fs-3 py-3">MISCELLANEOUS</div>
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="col-6">Fumbles-Lost</div>
                        <div className="col-6">Turnover Ratio</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 bb1px lines">{props.fumbles_lost}</div>
                        <div className="col-6 bb1px lines">{props.turnover_ratio}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
Football_Team_Stats.propTypes = {
    ttpg: PropTypes.string,
    TP: PropTypes.string,
    t_td: PropTypes.string,
    t_1_down: PropTypes.string,
    Russ_1_d: PropTypes.string,
    pass_1_d: PropTypes.string,
    down_1_penal: PropTypes.string,
    down_3_eff: PropTypes.string,
    down_3_AVG: PropTypes.string,
    down_4_eff: PropTypes.string,
    down_4_AVG: PropTypes.string,
    comp_att: PropTypes.string,
    net_pass_y: PropTypes.string,
    y_p_pas_attps: PropTypes.string,
    net_pass_y_pg: PropTypes.string,
    pass_td: PropTypes.string,
    sacks_y_lost: PropTypes.string,
    int_t: PropTypes.string,
    russ_attps: PropTypes.string,
    russ_y: PropTypes.string,
    y_p_russ_attp: PropTypes.string,
    russ_y_pg: PropTypes.string,
    russ_td: PropTypes.string,
    total_of_plays: PropTypes.string,
    total_y: PropTypes.string,
    y_pg: PropTypes.string,
    kickoffs_t: PropTypes.string,
    AVG_kickoff_return_y: PropTypes.string,
    punt_t: PropTypes.string,
    AVG_punt_ruturn_y: PropTypes.string,
    AVG_intercept_y: PropTypes.string,
    net_AVG_punt_y: PropTypes.string,
    punt_ty: PropTypes.string,
    fg_goog_attps: PropTypes.string,
    touchback_percent: PropTypes.string,
    penal_ty: PropTypes.string,
    penal_y_AVG_pg: PropTypes.string,
    possesion_time: PropTypes.string,
    fumbles_lost: PropTypes.string,
    turnover_ratio: PropTypes.string,
    team: PropTypes.string,
    division: PropTypes.string,
    season: PropTypes.string,
    conference: PropTypes.string
};