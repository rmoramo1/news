import React from "react";
import PropTypes from "prop-types";

export const Futures_Lines = props => {
    return (
        <div>
            <div className="row g-0  text-white text-center">
                <div className="col-4 bg_lines">Future</div>
                <div className="col-4 bg_lines">Sport</div>
                <div className="col-4 bg_lines">Line</div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-4 bb1px lines">{props.future}</div>
                    <div className="col-4 bb1px lines">{props.sport}</div>
                    <div className="col-4 bb1px lines">{props.line}</div>
                </div>
            </div>
        </div>
    )
}
Futures_Lines.propTypes = {
    sport: PropTypes.string,
    future: PropTypes.string,
    line: PropTypes.string
};