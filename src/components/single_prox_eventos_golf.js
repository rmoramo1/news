import React from "react";
import PropTypes from "prop-types";

export const Single_Prox_Eventos_Golf = props => {
    return (
        <div className="row g-0 text-center bb1 py-1">
            <div className="col-12 d-flex justify-content-center align-items-center fw-bold">{props.event}</div>
            <div className="col-12 d-flex justify-content-center align-items-center ">
                {props.location}
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center fw-bold">
               Fecha: {props.date}
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center fw-bold">
                Hora: {props.hour}
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
