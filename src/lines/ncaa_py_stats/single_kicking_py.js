import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Kicking_PY_Ncaa = props => {
    return (
        <div className="col-12 g-0 mb-5">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="quince_spans lines"> <img src={props.headshot} alt="headshot"></img></div>
                        <div className="quince_spans lines"><Link to={`/kicking_player_stats_ncaa/${props.id}`}>{props.name}</Link></div>
                        <div className="quince_spans lines">{props.games}</div>
                        <div className="quince_spans lines">{props.fgm}</div>
                        <div className="quince_spans lines">{props.fga}</div>
                        <div className="quince_spans lines">{props.fg_AVG}</div>
                        <div className="quince_spans lines">{props.lng}</div>
                        <div className="quince_spans lines">{props.yars_f_goals_1_19}</div>
                        <div className="quince_spans lines">{props.yars_f_goals_20_29}</div>
                        <div className="quince_spans lines">{props.yars_f_goals_30_49}</div>
                        <div className="quince_spans lines">{props.yars_f_goals_40_49}</div>
                        <div className="quince_spans lines">{props.more_50}</div>
                        <div className="quince_spans lines">{props.xpm}</div>
                        <div className="quince_spans lines">{props.xpa}</div>
                        <div className="quince_spans lines">{props.xp_AVG}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Kicking_PY_Ncaa.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    games: PropTypes.string,
    fgm: PropTypes.string,
    fga: PropTypes.string,
    fg_AVG: PropTypes.string,
    lng: PropTypes.string,
    yars_f_goals_1_19: PropTypes.string,
    yars_f_goals_20_29: PropTypes.string,
    yars_f_goals_30_49: PropTypes.string,
    yars_f_goals_30_49: PropTypes.string,
    yars_f_goals_40_49: PropTypes.string,
    xpm: PropTypes.string,
    xpa: PropTypes.string,
    xp_AVG: PropTypes.string
};