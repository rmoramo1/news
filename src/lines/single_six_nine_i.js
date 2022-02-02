import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_6_9_Inning = props => {
    return (
        <div className="col-12 g-0 p-1">
            <div className="row g-0 shadow">
                <div className="col-4">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-12">TEAMS</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-12 lines">{props.away}</div>
                        <div className="col-12 lines">{props.home}</div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row g-0 text-center bg_lines text-white">
                        <div className="col-3">Inning 6</div>
                        <div className="col-3">Inning 7</div>
                        <div className="col-3">Inning 8</div>
                        <div className="col-3">Inning 9</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-3 lines">{props.sa_6inning}</div>
                        <div className="col-3 lines">{props.sa_7inning}</div>
                        <div className="col-3 lines">{props.sa_8inning}</div>
                        <div className="col-3 lines">{props.sa_9inning}</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-3 lines">{props.sh_6inning}</div>
                        <div className="col-3 lines">{props.sh_7inning}</div>
                        <div className="col-3 lines">{props.sh_8inning}</div>
                        <div className="col-3 lines">{props.sh_9inning}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_6_9_Inning.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    sa_6inning: PropTypes.string,
    sa_7inning: PropTypes.string,
    sa_9inning: PropTypes.string,
    sh_6inning: PropTypes.string,
    sh_7inning: PropTypes.string,
    sh_8inning: PropTypes.string,
    sh_9inning: PropTypes.string,
};