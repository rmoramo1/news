import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_tenista = props => {
    return (
        <div className="col-12 shadow">
            <div className="row g-0 text-center border">
                <div className="col-4 lines"><img src={props.headshot} alt="Headshot"></img></div>
                <div className="col-4 lines d-flex justify-content-start align-items-center"><Link to={`/tenista/${props.id}`}>{props.name}</Link></div>
                <div className="col-4 lines d-flex justify-content-center align-items-center">{props.country}</div>
            </div>
        </div>
    )
};
Single_tenista.propTypes = {
    id: PropTypes.number,
    headshot: PropTypes.string,
    country: PropTypes.string,
    name: PropTypes.string,
    season: PropTypes.string,
};