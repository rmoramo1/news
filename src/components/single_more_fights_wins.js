import React from 'react';
import PropTypes from "prop-types";

export const Single_More_Figths_Wins = props => {

    return (
        <div className="row g-0 bb1px">
            <div className="row g-0 text-center">
                <div className="col-2">
                    <img src={props.headshot} alt="headshot" className="img_logo_game_day"></img>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    {props.name}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_in_progress text-white">
                    {props.w}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_cancelled text-white">
                    {props.L}
                </div>
            </div>
        </div>
    )
};
Single_More_Figths_Wins.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    L: PropTypes.string,
    w: PropTypes.string,
    headshot: PropTypes.string,
};
