import React from 'react';
import PropTypes from "prop-types";

export const Single_Tennis_More_Singles = props => {

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
                    {props.single_titles}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center resultado_in_progress text-white">
                    {props.double_titles}
                </div>
            </div>
        </div>
    )
};
Single_Tennis_More_Singles.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    double_titles: PropTypes.string,
    single_titles: PropTypes.string,
    headshot: PropTypes.string,
};
