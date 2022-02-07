import React from "react";
import PropTypes from "prop-types";

export const Nascar_Lines = props => {
    return (
        <div className="p-2 odds-list">
            <div className="row g-0  text-white text-center">
                <div className="col-2 bg_lines">Race</div>
                <div className="col-2 bg_lines">Track</div>
                <div className="col-2 bg_lines">Location</div>
                <div className="col-2 bg_lines">Place 1</div>
                <div className="col-2 bg_lines">Place 2</div>
                <div className="col-2 bg_lines">Place 3</div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.race}</div>
                    <div className="col-2 bb1px lines">{props.track}</div>
                    <div className="col-2 bb1px lines">{props.location}</div>
                    <div className="col-2 bb1px lines">{props.place1}</div>
                    <div className="col-2 bb1px lines">{props.place2}</div>
                    <div className="col-2 bb1px lines">{props.place3}</div>
                </div>
            </div>
        </div>
    )
}
Nascar_Lines.propTypes = {
    race: PropTypes.string,
    track: PropTypes.string,
    location: PropTypes.string,
    place1: PropTypes.string,
    place2: PropTypes.string,
    place3: PropTypes.string,
    hour: PropTypes.string,
    date: PropTypes.string
};