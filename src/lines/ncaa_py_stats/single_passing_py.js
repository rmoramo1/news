import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Passing_PY = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="quince_spans lines"> <img src={props.headshot}></img>  </div>
                        <div className="quince_spans lines"> <Link to={`/offensive_py/${props.id}`}>{props.name}</Link></div>
                        <div className="quince_spans lines">{props.games}</div>
                        <div className="quince_spans lines">{props.Cmp}</div>
                        <div className="quince_spans lines">{props.pass_att}</div>
                        <div className="quince_spans lines">{props.cmp_AVG}</div>
                        <div className="quince_spans lines">{props.yards}</div>
                        <div className="quince_spans lines">{props.yards_AVG}</div>
                        <div className="quince_spans lines">{props.yards_pg}</div>
                        <div className="quince_spans lines">{props.long_pass}</div>
                        <div className="quince_spans lines">{props.pass_td}</div>
                        <div className="quince_spans lines">{props.Int}</div>
                        <div className="quince_spans lines">{props.asck}</div>
                        <div className="quince_spans lines">{props.syl}</div>
                        <div className="quince_spans lines">{props.rtg}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Passing_PY.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    Cmp: PropTypes.string,
    pass_att: PropTypes.string,
    headshot: PropTypes.string,
    games: PropTypes.string,
    cmp_AVG: PropTypes.string,
    yards: PropTypes.string,
    yards_AVG: PropTypes.string,
    yards_pg: PropTypes.string,
    long_pass: PropTypes.string,
    pass_td: PropTypes.string,
    Int: PropTypes.string,
    asck: PropTypes.string,
    syl: PropTypes.string,
    rtg: PropTypes.string
};