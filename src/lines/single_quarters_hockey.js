import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Quarters_hockey = props => {
    return (
        <div className="col-12 g-0 p-1">
            <div className="row g-0 shadow">
                <div className="col-4">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-12">TEAMS</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-12 lines"><img src={props.logo_away} alt="logo away team" className="img_logo_game_day"></img>{props.away}</div>
                        <div className="col-12 lines"><img src={props.logo_home} alt="logo home team" className="img_logo_game_day"></img>{props.home}</div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-3">S 1Q</div>
                        <div className="col-3">S 2Q</div>
                        <div className="col-3">S 3Q</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-3 lines">{props.sa_1Q}</div>
                        <div className="col-3 lines">{props.sa_2Q}</div>
                        <div className="col-3 lines">{props.sa_3Q}</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-3 lines">{props.sh_1Q}</div>
                        <div className="col-3 lines">{props.sh_2Q}</div>
                        <div className="col-3 lines">{props.sh_3Q}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Quarters_hockey.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    sa_1Q: PropTypes.string,
    sa_2Q: PropTypes.string,
    sa_3Q: PropTypes.string,
    sh_1Q: PropTypes.string,
    sh_2Q: PropTypes.string,
    sh_3Q: PropTypes.string,
    logo_away: PropTypes.string,
    logo_home: PropTypes.string
};