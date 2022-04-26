import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Golfer = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center odds-list">
                        <div className="diez_spans lines"><img src={props.headshot} alt="Headshot"></img></div>
                        <div className="diez_spans lines d-flex justify-content-start align-items-center"><Link to={`/golfer_st/${props.id}`}>{props.name}</Link></div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.swing}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.cuts}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.top10}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.w}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.rnds}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.holes}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.avg}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Golfer.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    holes: PropTypes.string,
    swing: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
    headshot: PropTypes.string,
};