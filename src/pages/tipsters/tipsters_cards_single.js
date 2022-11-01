import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Tipsters_Cards_Single = props => {
    return (
        <Link className="text-decoration-none" to={`/tipster_perfil/${props.id}`}>
            <div className="row g-0 shadow_spans rounded_span">
                <div className='col-12 bg_base_dark text-white text-center'>
                    <h3>{props.name}</h3>
                </div>
                <div className="col-12 p-1 bb1px">
                    {props.title}
                </div>
                <div className="col-12 p-1 ">
                    Estadisticas:
                </div>
                <div className="col-12 p-1 fw-bold font_grey">
                    <p>+1,044 JHL 13-7 of his last 2-picks</p>
                    <p>+1,454 25-5 of his last 30 picks.</p>
                    <p>+1,042 20-5 of his last 25 picks.</p>
                    <p>+964 SPREAD 14-3 of his last 17 picks.</p>
                    <p>+881 16-4 of his last 20 picks.</p>
                </div>
            </div>
        </Link>

    )
};

Tipsters_Cards_Single.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
}
