import React from "react";
import PropTypes from "prop-types";

export const Single_Games_of_Day = props => {
    return (
        <div className="row g-0 text-center bb1 py-1">
            <div className="row g-0">
                <div className="col-8">
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={props.logo_away} alt="logo away team" className="img_logo_game_day"></img>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center">{props.away}</div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4">
                            <img src={props.logo_home} alt="logo away team" className="img_logo_game_day"></img>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center">{props.home}</div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center fw-bold">
                    {props.hour}
                </div>
            </div>
        </div>
    )
};
Single_Games_of_Day.prototype = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    logo_away: PropTypes.string,
    logo_home: PropTypes.string
}
