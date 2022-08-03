import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_noticias_Form_1 = props => {
    return (
        <div className="col-12 p-2 mt-2 bb1">
            <div className="row g-0 ">
                <div className="col-lg-4 d-flex align-items-center"><img className="img-fluid" src={props.imagen_principal} alt="image of news"></img> </div>
                <div className="col-lg-8 p-2">
                    <div className="col-12  fw-bold">
                        <Link className="font_destacado" to={`/new/${props.id}`}>{props.h1}</Link>
                        <div className="col-12 fw-bold">{props.mes}-{props.dia}-{props.year}</div>
                    </div>
                    <div className="col-12">{props.descripcion}</div>
                    <div className="col-12 fw-bold">Author: {props.autor}</div>
                </div>
            </div>
        </div>
    )
}
Single_noticias_Form_1.propTypes = {
    imagen_principal: PropTypes.string,
    h1: PropTypes.string,
    descripcion: PropTypes.string,
    mes: PropTypes.string,
    year: PropTypes.string,
    autor: PropTypes.string,
    dia: PropTypes.string
};