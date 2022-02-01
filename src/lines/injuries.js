import React from "react";
import PropTypes from "prop-types";

export const Injuries = props => {
    return (
        <div>
            <div className="row g-0  text-white text-center">
                <div className="col-2 bg_lines">Sport</div>
                <div className="col-2 bg_lines">Team</div>
                <div className="col-2 bg_lines">Name Player</div>
                <div className="col-2 bg_lines">Injurie</div>
                <div className="col-2 bg_lines">Date</div>
                <div className="col-2 bg_lines">Time Injurie</div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.sport}</div>
                    <div className="col-2 bb1px lines">{props.team}</div>
                    <div className="col-2 bb1px lines">{props.name_player}</div>
                    <div className="col-2 bb1px lines">{props.injurie}</div>
                    <div className="col-2 bb1px lines">{props.date}</div>
                    <div className="col-2 bb1px lines">{props.time_injurie}</div>
                </div>
            </div>
        </div>
    )
}
Injuries.propTypes = {
    sport: PropTypes.string,
    team: PropTypes.string,
    name_player: PropTypes.string,
    injurie: PropTypes.string,
    date: PropTypes.string,
    time_injurie: PropTypes.string
};