import React from "react";
import PropTypes from "prop-types";

export const Single_Peleas = props => {
    let st = props.status;
    let className = "col-12 bg-info";
    if (st == "Finished") {
        className = "col-12 resultado_fished text-white";
    }
    if (st == "Pending") {
        className = "col-12 resultado_pending text-white";
    }
    if (st == "In Progress") {
        className = "col-12 resultado_in_progress text-white";
    }
    if (st == "Cancelled") {
        className = "col-12 resultado_cancelled text-white";
    }
    return (
        <div className="col-12 bg-white b_r">
            <div className="row g-0 text-center">
                <div className={className}>{props.status}</div>
                    <div className="col-12 bb_resultados">
                        <div className="row g-0">
                            <div className="col-10">{props.fighter_One}</div>
                            <div className="col-2"><span className="fw-bold">{props.money_Line_One}</span></div>
                        </div>
                          
                    </div>
                    <div className="col-12 bb_resultados">
                        vs
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                            <div className="col-10">{props.fighter_Two}</div>
                            <div className="col-2"><span className="fw-bold">{props.money_Line_Two}</span></div>
                        </div> 
                    </div>
             
            </div>
        </div>
    )
}
Single_Peleas.propTypes = {
    id: PropTypes.number,
    status: PropTypes.string,
    money_Line_One: PropTypes.string,
    money_Line_Two: PropTypes.string,
    fighter_One: PropTypes.string,
    fighter_Two: PropTypes.string
};