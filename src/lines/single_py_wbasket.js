import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_WBasket = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="diez_nueve_spans lines">
                            <img src={props.headshot}></img>
                            </div>
                        <div className="diez_nueve_spans pt-2 lines"><Link to={`/wnba_py_st/${props.id}`}>{props.name}</Link></div>
                        <div className="diez_nueve_spans pt-2 lines">{props.gp}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.gs}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.fg}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.fg_AVG}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.three_pt}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.three_pt_AVG}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.ft}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.ft_AVG}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.Or}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.dr}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.reb}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.ast}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.stl}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.blk}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.to}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.pf}</div>
                        <div className="diez_nueve_spans pt-2 lines">{props.pts}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_WBasket.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    gp: PropTypes.string,
    gs: PropTypes.string,
    fg: PropTypes.string,
    fg_AVG: PropTypes.string,
    three_pt: PropTypes.string,
    three_pt_AVG: PropTypes.string,
    ft: PropTypes.string,
    ft_AVG: PropTypes.string,
    Or: PropTypes.string,
    dr: PropTypes.string,
    reb: PropTypes.string,
    ast: PropTypes.string,
    stl: PropTypes.string,
    blk: PropTypes.string,
    to: PropTypes.string,
    pf: PropTypes.string,
    pts: PropTypes.string
};