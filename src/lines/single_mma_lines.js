import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_MMA_Lines = props => {
    return (
        <div className="col-12 p-1">
            <div className="row g-0">
                <div className="col-1 ">
                    <div className="col-12 bg-dark h-100 d-flex justify-content-center align-items-center ">
                        <div className="col-12 text-center">
                            <Link className="text-white" to={`/mma_lines/${props.id}`}><i className="far fa-eye"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-11  shadow">
                    <div className="row g-0 text-center">
                        <div className="col-4 lines">{props.fighter_One}</div>
                        <div className="col-4 lines">VRS</div>
                        <div className="col-4 lines">{props.fighter_Two}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_MMA_Lines.propTypes = {
    id: PropTypes.number,
    fighter_One: PropTypes.string,
    fighter_Two: PropTypes.string,
};