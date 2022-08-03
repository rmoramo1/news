import React from "react";
import PropTypes from "prop-types";

export const Single_Resultados = props => {
    let st =props.status;
    let className = "col-12 bg-info";
    if(st == "Finished"){
        className = "col-12 resultado_fished text-white";
    }
    if(st == "Pending"){
        className = "col-12 resultado_pending text-white";
    }
    if(st == "In Progress"){
        className = "col-12 resultado_in_progress text-white";
    }
    if(st == "Cancelled"){
        className = "col-12 resultado_cancelled text-white";
    }
    return (
        <div className="col-12 bg-white b_r">
            <div className="row g-0 text-center">
                <div className={className}>{props.status}</div>
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
                        <div className="col-12">{props.final_score_away}</div>
                        <div className="col-12">{props.final_score_home}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Single_Resultados.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    status: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string
};