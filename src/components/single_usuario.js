import React from 'react';
import PropTypes from "prop-types";

export const Single_Usuario = props => {

    return (
        <div className="row g-0 bb1px">
            <div className="row g-0 text-center">
                <div className="col-2">
             {props.country}
                </div>
                <div className="col-6">
                {props.mail}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_in_progress text-white">
                    {props.user}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_cancelled text-white">
                    {props.name}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_cancelled text-white">
                    {props.born}
                </div>
            </div>
        </div>
    )
};
Single_Usuario.propTypes = {
    id: PropTypes.number,
    mail: PropTypes.string,
    name: PropTypes.string,
    user: PropTypes.string,
    country: PropTypes.string,
    born: PropTypes.string,
};
