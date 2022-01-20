import React from "react";
import PropTypes from "prop-types";

export const Results = props => {
    return (
        <div className="row g-0 shadow text-center">
            <div className="col-12 text-center bg_lines text-white">
                {props.date}
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
                <img src={props.logo_away} alt="logo away team" className="img_logo"></img>
                </div>
            <div className="col-2 d-flex align-items-center justify-content-center">{props.away}</div>
            <div className="col-1 fs-3 d-flex align-items-center justify-content-center">{props.final_score_away}</div>
            <div className="col-1 fs-3 d-flex align-items-center justify-content-center">{props.final_score_home}</div>
            <div className="col-2 d-flex align-items-center justify-content-center">{props.home}</div>
            <div className="col-3 d-flex align-items-center justify-content-center">
                <img src={props.logo_home} alt="logo home team" className="img_logo"></img>
                </div>
        </div>
    )
}
Results.prototype = {
    away: PropTypes.string,
    home: PropTypes.string,
    date: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,
    logo_away: PropTypes.string,
    logo_home: PropTypes.string
}