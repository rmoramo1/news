import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Football_Team_Stats_DIS = props => {
    const { store } = useContext(Context);
    return (
        <div>

            <div className="row g-0 text-center">
                <div className="quince_spans bb1px lines">
                {
                            store.logos_ncaa_football.map((item, index) => {
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
                <div className="quince_spans d-flex align-items-center justify-content-start bb1px lines">{props.team}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.ttpg}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.TP}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.t_td}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.t_1_down}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.comp_att}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.russ_y}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.total_of_plays}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.total_y}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.y_pg}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.punt_ty}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.net_AVG_punt_y}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.penal_ty}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.penal_y_AVG_pg}</div>
            </div>

        </div>
    )
}
Football_Team_Stats_DIS.propTypes = {
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