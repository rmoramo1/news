import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Nascar = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-1 ">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/nascar_driver_st/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11  shadow">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-4">Name</div>
                        <div className="col-4">Country</div>
                        <div className="col-4">Number Car</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.name}</div>
                        <div className="col-4 lines">{props.country}</div>
                        <div className="col-4 lines">{props.number_car}</div>
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
    country: PropTypes.string,
};