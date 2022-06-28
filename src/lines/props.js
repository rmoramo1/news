import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Props = props => {
    return (
        <div className="">
            <div className="row g-0 bg_lines text-white text-center">
                <div className="col-4">Sport</div>
                <div className="col-4">
                    Title
                </div>
                <div className="col-4">Date</div>

            </div>
            <div className="row g-0 text-center">
                <div className="col-4 bb1px lines">{props.sport}</div>
                <div className="col-4 bb1px lines">
                    <Link to={`/odds_to_win/${props.id}`}>
                        {props.title}
                    </Link>
                </div>
                <div className="col-4 bb1px lines">{props.date}</div>
            </div>
        </div>
    )
}
Props.propTypes = {
    id: PropTypes.string,
    sport: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
};