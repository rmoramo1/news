import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Punting_PY_Ncaa = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="quince_spans lines"><img src={props.headshot} alt="Headshot"></img></div>
                        <div className="quince_spans lines"><Link to={`/punting_player_stats_ncaa/${props.id}`}>{props.name} </Link></div>
                        <div className="quince_spans lines">{props.games}</div>
                        <div className="quince_spans lines">{props.punts}</div>
                        <div className="quince_spans lines">{props.yards}</div>
                        <div className="quince_spans lines">{props.lng}</div>
                        <div className="quince_spans lines">{props.AVG}</div>
                        <div className="quince_spans lines">{props.net}</div>
                        <div className="quince_spans lines">{props.p_blk}</div>
                        <div className="quince_spans lines">{props.IN_20}</div>
                        <div className="quince_spans lines">{props.tb}</div>
                        <div className="quince_spans lines">{props.fc}</div>
                        <div className="quince_spans lines">{props.att}</div>
                        <div className="quince_spans lines">{props.punt_return_yds}</div>
                        <div className="quince_spans lines">{props.AVG_punt_retun_yards}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Punting_PY_Ncaa.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    punts: PropTypes.string,
    games: PropTypes.string,
    yards: PropTypes.string,
    lng: PropTypes.string,
    AVG: PropTypes.string,
    net: PropTypes.string,
    p_blk: PropTypes.string,
    IN_20: PropTypes.string,
    tb: PropTypes.string,
    fc: PropTypes.string,
    att: PropTypes.string,
    punt_return_yds: PropTypes.string,
    AVG_punt_retun_yards: PropTypes.string
};