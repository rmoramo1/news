import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Rushing_PY = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center">
                        <div className="quince_spans"> <img src={props.headshot}></img> </div>
                        <div className="quince_spans"> <Link to={`/offensive_py/${props.id}`}>{props.name}</Link></div>
                        <div className="quince_spans">{props.games}</div>
                        <div className="quince_spans">{props.russ_att}</div>
                        <div className="quince_spans">{props.russ_yards}</div>
                        <div className="quince_spans">{props.yards_p_r}</div>
                        <div className="quince_spans">{props.lr}</div>
                        <div className="quince_spans">{props.r_big}</div>
                        <div className="quince_spans">{props.r_td}</div>
                        <div className="quince_spans">{props.rush_yard_pg}</div>
                        <div className="quince_spans">{props.yards}</div>
                        <div className="quince_spans">{props.yards}</div>
                        <div className="quince_spans">{props.yards}</div>
                        <div className="quince_spans">{props.yards}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Rushing_PY.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    dorsal: PropTypes.string,
    position: PropTypes.string,
};