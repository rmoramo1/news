import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_SOCCER = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center odds-list">
                        <div className="quince_spans lines"><img src={props.headshot} alt="headshot"></img></div>
                        <div className="quince_spans lines d-flex justify-content-start align-items-center"><Link to={`/soccer_py_st/${props.id}`}>{props.name}</Link> </div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.position}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.dorsal}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.games}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.strt}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.fc}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.fa}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.yc}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.rc}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.goals}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.ast}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.sh}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.st}</div>
                        <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.off}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_SOCCER.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    position: PropTypes.string,
    dorsal: PropTypes.string,
    games: PropTypes.string,
    strt: PropTypes.string,
    fc: PropTypes.string,
    fa: PropTypes.string,
    yc: PropTypes.string,
    rc: PropTypes.string,
    goals: PropTypes.string,
    ast: PropTypes.string,
    sh: PropTypes.string,
    st: PropTypes.string,
    off: PropTypes.string,
};