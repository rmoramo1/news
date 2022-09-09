import React from "react";
import PropTypes from "prop-types";

export const Single_Prox_Eventos_Golf = props => {
    return (
        <div className="row g-0 text-center bb1 py-1">
            <div className="col-12 d-flex justify-content-center align-items-center fw-bold">{props.event}</div>
            <div className="col-12 d-flex justify-content-center align-items-center pb-2">
                {props.location}
            </div>
            <div className="col-3 text-center fw-bold">Fecha:</div>
            <div className="col-6 text-center">
              {props.date}
            </div>
            <div className="col-3 text-center">
            {props.hour}
            </div>
        </div>
    )
};
Single_Prox_Eventos_Golf.prototype = {
    event: PropTypes.string,
    location: PropTypes.string,
    hour: PropTypes.string,
    date: PropTypes.string,
}
