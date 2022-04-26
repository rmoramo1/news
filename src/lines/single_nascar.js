import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Nascar = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center odds-list">
                        <div className="quince_spans lines"><img src={props.headshot} alt="headshot"></img> </div>
                        <div className="quince_spans lines d-flex justify-content-start align-items-center">
                        <Link  to={`/nascar_driver_st/${props.id}`}>{props.name}</Link>
                            </div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.number_car}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.rank}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.starts}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.poles}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.top5}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.top10}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.laps_lead}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.pts}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.AVG_laps}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.AVG_finish}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Nascar.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    number_car: PropTypes.string,
    headshot: PropTypes.string,
    rank: PropTypes.string,
    starts: PropTypes.string,
    poles: PropTypes.string,
    top5: PropTypes.string,
    top10: PropTypes.string,
    laps_lead: PropTypes.string,
    pts: PropTypes.string,
    AVG_laps: PropTypes.string,
    AVG_finish: PropTypes.string
};