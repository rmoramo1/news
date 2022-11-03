import React from "react";
import PropTypes from "prop-types";

export const Single_Tipsters_Next = props => {
    return (
        <div className="row g-0 text-center shadow_spans p-1">
            <div className="col-3 bg_base text-white">{props.deporte}</div>
            <div className="col-3 bg_base text-white">{props.fecha}</div>
            <div className="col-3 bg_base text-white">{props.units}</div>
            <div className="col-3 bg_base text-white">{props.estado}</div>
            <div className="col-4 text-start fw-bold">{props.equipos}</div>
            <div className="col-4 text-start fw-bold">{props.tipo}</div>
            <div className="col-4 text-start fw-bold">{props.linea}</div>
        </div>

    )
};

Single_Tipsters_Next.propTypes = {
    id: PropTypes.number,
    deporte: PropTypes.string,
    fecha: PropTypes.string,
    equipos: PropTypes.string,
    tipo: PropTypes.string,
    linea: PropTypes.string,
    name: PropTypes.string,
    units: PropTypes.string,
    estado: PropTypes.string,
}
