import React from "react";
import PropTypes from "prop-types";

export const Props = props => {
    return (
        <div className="overflowX_scroll">
            <div className="odds-list">
                <div className="row g-0 bg_lines text-white text-center">
                    <div className="col-2">Title</div>
                    <div className="col-2">Away</div>
                    <div className="col-2">Home</div>
                    <div className="col-2">Type</div>
                    <div className="col-2">Line</div>
                    <div className="col-2">Feature</div>
                </div>
                <div>
                    <div className="row g-0 text-center">
                        <div className="col-2 bb1px lines">{props.title}</div>
                        <div className="col-2 bb1px lines">{props.away}</div>
                        <div className="col-2 bb1px lines">{props.home}</div>
                        <div className="col-2 bb1px lines">{props.type_prop}</div>
                        <div className="col-2 bb1px lines">{props.line}</div>
                        <div className="col-2 bb1px lines">{props.feature}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Props.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    sport: PropTypes.string,
    title: PropTypes.string,
    line: PropTypes.string,
    feature: PropTypes.string,
    type_prop: PropTypes.string,
    date: PropTypes.string,
};