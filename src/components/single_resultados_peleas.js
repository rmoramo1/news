import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Resultados_Peleas = props => {
  return (
    <div className="col-12 p-1 mt-1">
    <div className="row g-0">
        <div className="col-12 bb1px">
            <Link className="text-decoration-none" to={`/mma_lines/${props.id}`}>
                <div className="row g-0 text-center">
                    <div className="col-3">{props.fighter_One}</div>
                    <div className="col-3">VRS</div>
                    <div className="col-3">{props.fighter_Two}</div>
                    <div className="col-3 text-danger">{props.winner}</div>
                </div>
            </Link>
        </div>
    </div>
</div>
  )
};
Single_Resultados_Peleas.propTypes = {
    id: PropTypes.number,
    fighter_One: PropTypes.string,
    fighter_Two: PropTypes.string,
    winner: PropTypes.string,
    status: PropTypes.string,
};

