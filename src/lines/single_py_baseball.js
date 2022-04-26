import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_Baseball = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0 odds-list">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center">
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines"><img src={props.headshot} alt="Headshot"></img></div>
                        <div className="diez_nueve_spans d-flex justify-content-start align-items-center lines">
                            <Link to={`/mlb_py_st/${props.id}`}>{props.name}</Link>
                        </div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.gp}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.ab}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.r}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.h}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.two_b}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.three_b}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.hb}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.rbi}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.tb}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.bb}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.so}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.sb}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.avg}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.obp}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.slg}</div>
                        <div className="diez_nueve_spans d-flex justify-content-center align-items-center lines">{props.ops}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_Baseball.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    gp: PropTypes.string,
    ab: PropTypes.string,
    r: PropTypes.string,
    h: PropTypes.string,
    two_b: PropTypes.string,
    three_b: PropTypes.string,
    hb: PropTypes.string,
    rbi: PropTypes.string,
    tb: PropTypes.string,
    bb: PropTypes.string,
    so: PropTypes.string,
    sb: PropTypes.string,
    avg: PropTypes.string,
    obp: PropTypes.string,
    slg: PropTypes.string,
    ops: PropTypes.string
};