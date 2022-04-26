import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_NHL = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center odds-list">
                        <div className="diez_nueve_spans lines">
                            <img src={props.headshot} alt="headshot"></img>
                        </div>
                        <div className="diez_nueve_spans lines d-flex justify-content-start align-items-center">
                            <Link to={`/nhl_py_st/${props.id}`}>{props.name}</Link>
                        </div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.gp}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.g}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.a}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.pts}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.p_m_rating}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.pim}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.sog}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.spct}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.ppg}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.ppa}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.shg}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.sha}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.gwg}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.gtg}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.toi_g}</div>
                        <div className="diez_nueve_spans lines d-flex justify-content-center align-items-center">{props.prod}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_NHL.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    gp: PropTypes.string,
    g: PropTypes.string,
    a: PropTypes.string,
    pts: PropTypes.string,
    p_m_rating: PropTypes.string,
    pim: PropTypes.string,
    sog: PropTypes.string,
    ppg: PropTypes.string,
    ppa: PropTypes.string,
    shg: PropTypes.string,
    sha: PropTypes.string,
    gwg: PropTypes.string,
    gtg: PropTypes.string,
    toi_g: PropTypes.string,
    prod: PropTypes.string,
    spct: PropTypes.string,
};