import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Tennis_lines = props => {
    return (
        <div className="col-12 p-2">
            <div className="row g-0  text-white text-center">
                <div className="col-4 bg_lines">Event</div>
                <div className="col-4 bg_lines">Location</div>
                <div className="col-4 bg_lines">Hour</div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-4 bb1px lines"><Link to={`/tennis_event/${props.id}`}>{props.event}</Link></div>
                    <div className="col-4 bb1px lines">{props.location}</div>
                    <div className="col-4 bb1px lines">{props.hour}</div>
                </div>
            </div>
        </div>
    )
}
Tennis_lines.propTypes = {
    id: PropTypes.number,
    event: PropTypes.string,
    location: PropTypes.string,
    hour: PropTypes.string,
    date: PropTypes.string
};