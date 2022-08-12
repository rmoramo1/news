import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Returning_PY_Ncaa    = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="quince_spans lines"><img src={props.headshot} alt="headshot"></img></div>
                        <div className="quince_spans lines"> <Link to={`/returning_player_stats_ncaa/${props.id}`}>{props.name}</Link></div>
                        <div className="quince_spans lines">{props.games}</div>
                        <div className="quince_spans lines">{props.kick_returns}</div>
                        <div className="quince_spans lines">{props.kick_returns_yards}</div>
                        <div className="quince_spans lines">{props.y_ppr}</div>
                        <div className="quince_spans lines">{props.l_k_r}</div>
                        <div className="quince_spans lines">{props.k_r_td}</div>
                        <div className="quince_spans lines">{props.punt_r}</div>
                        <div className="quince_spans lines">{props.punt_r_y}</div>
                        <div className="quince_spans lines">{props.y_ppr}</div>
                        <div className="quince_spans lines">{props.lpr}</div>
                        <div className="quince_spans lines">{props.pr_td}</div>
                        <div className="quince_spans lines">{props.punt_r_fair_carches}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Returning_PY_Ncaa    .propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    games: PropTypes.string,
    kick_returns: PropTypes.string,
    kick_returns_yards: PropTypes.string,
    y_ppr: PropTypes.string,
    l_k_r: PropTypes.string,
    k_r_td: PropTypes.string,
    punt_r: PropTypes.string,
    punt_r_y: PropTypes.string,
    lpr: PropTypes.string,
    pr_td: PropTypes.string,
    punt_r_fair_carches: PropTypes.string,
    y_ppr: PropTypes.string,
    headshot: PropTypes.string,
};