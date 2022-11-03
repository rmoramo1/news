import React from "react";
import PropTypes from "prop-types";

export const Historial_Tipsters = props => {
    let rcj = props.resultado;
    let clas;
    if(rcj == "Win"){
        clas = "col bg-success text-white"
    }else{
        clas = "col bg-danger text-white"

    }
    return (
        <div className="odds-list bb1px">
            <div className="row g-0 text-center">
                <div className="col">{props.fecha}</div>
                <div className="col">{props.tipo}</div>
                <div className="col">{props.units}</div>
                <div className="col">{props.deporte}</div>
                <div className="col">{props.equipos}</div>
                <div className="col">{props.linea}</div>
                <div className={clas}>{props.resultado}</div>
            </div>
        </div>
    )
};

Historial_Tipsters.propTypes = {
    id: PropTypes.number,
    deporte: PropTypes.string,
    fecha: PropTypes.string,
    equipos: PropTypes.string,
    tipo: PropTypes.string,
    linea: PropTypes.string,
    name: PropTypes.string,
    units: PropTypes.string,
    estado: PropTypes.string,
    resultado: PropTypes.string,
}
