import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Moto_GP_Lines = props => {
    return (
        <div className="col-12 p-2">
            <div className="row g-0  text-white text-center">
                <div className="col-4 bg_lines">Race</div>
                <div className="col-4 bg_lines">Track</div>
                <div className="col-4 bg_lines">Location</div>

            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-4 bb1px lines"><Link to={`/moto_gp_race/${props.id}`}>{props.race}</Link></div>
                    <div className="col-4 bb1px lines">{props.track}</div>
                    <div className="col-4 bb1px lines">{props.location}</div>
                </div>
            </div>
        </div>
    )
}
Moto_GP_Lines.propTypes = {
    race: PropTypes.string,
    track: PropTypes.string,
    location: PropTypes.string,

    hour: PropTypes.string,
    date: PropTypes.string
};