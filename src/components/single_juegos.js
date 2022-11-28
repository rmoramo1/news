import React from "react";
import PropTypes from "prop-types";

export const Single_Juegos = props => {

    return (
        <div className="col-12 b_r">
            <div className="row g-0 text-center">
                <div className="col-12 bg_base_dark text-white">Hora: {props.hour}</div>
                <div className="row g-0">
                    <div className="col-10">
                        <div className="col-12 bb_resultados">
                            {props.away}
                        </div>
                        <div className="col-12">
                            {props.home}
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="col-12">{props.moneyLineAway}</div>
                        <div className="col-12">{props.moneyLineHome}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Single_Juegos.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    moneyLineAway: PropTypes.string,
    moneyLineHome: PropTypes.string
};