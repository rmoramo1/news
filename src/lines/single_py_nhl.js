import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_PY_NHL = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 ">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/nhl_py_st/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11  shadow">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-4">Name</div>
                        <div className="col-4">Position</div>
                        <div className="col-4">Dorsal</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.name}</div>
                        <div className="col-4 lines">{props.position}</div>
                        <div className="col-4 lines">{props.dorsal}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_PY_NHL.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    dorsal: PropTypes.string,
    position: PropTypes.string,
};