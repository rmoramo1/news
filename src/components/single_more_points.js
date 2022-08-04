import React from 'react';
import PropTypes from "prop-types";

export const Single_More_Points = props => {

    return (
        <div className="row g-0 bb1px">
            <div className="row g-0 text-center">
                <div className="col-8">
                <img src={props.logo} alt="logo away team" className="img_logo_game_day"></img>{props.team}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_in_progress text-white">
                    {props.TP}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_cancelled text-white">
                    {props.TP}
                </div>
            </div>
        </div>
    )
};
Single_More_Points.propTypes = {
    id: PropTypes.number,
    team: PropTypes.string,
    TP: PropTypes.string,
    logo: PropTypes.string,
};
