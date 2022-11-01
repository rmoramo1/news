import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Odds_To_Win = props => {
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    return (
        <div className="row g-0 text-center  py-1 shadow_spans ">
            <div className="col-12 d-flex justify-content-center align-items-center fw-bold bb1px">
                <Link to={`/odd_view/${props.id}`}>
                    {props.title}
                </Link>
            </div>
            <div className="col-3 text-center fw-bold">Fecha:</div>
            <div className="col-9 text-center">
                {props.date}
            </div>
        </div>
    )
};
Single_Odds_To_Win.prototype = {
    id: PropTypes.string,
    title: PropTypes.string,
    sport: PropTypes.string,
    date: PropTypes.string,
}
