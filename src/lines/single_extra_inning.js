import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Extra_Inning = props => {
    return (
        <div className="col-12 g-0 p-1">
            <div className="row g-0 shadow overflowX_scroll p-1 bb2px">
                <div className=" odds-list">
                    <div className="col-12">
                        <div className="row g-0 text-center bg_lines text-white">
                            <div className="col-2">Teams</div>
                            <div className="col-1">In 10</div>
                            <div className="col-1">In 11</div>
                            <div className="col-1">In 12</div>
                            <div className="col-1">In 13</div>
                            <div className="col-1">In 14</div>
                            <div className="col-1">In 15</div>
                            <div className="col-1">In 16</div>
                            <div className="col-1">In 17</div>
                            <div className="col-1">In 18</div>
                            <div className="col-1">In 19</div>

                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 lines"><img src={props.logo_away} alt="logo away team" className="img_logo_game_day"></img>{props.away}</div>
                            <div className="col-1 lines">{props.sa_10inning}</div>
                            <div className="col-1 lines">{props.sa_11inning}</div>
                            <div className="col-1 lines">{props.sa_12inning}</div>
                            <div className="col-1 lines">{props.sa_13inning}</div>
                            <div className="col-1 lines">{props.sa_14inning}</div>
                            <div className="col-1 lines">{props.sa_15inning}</div>
                            <div className="col-1 lines">{props.sa_16inning}</div>
                            <div className="col-1 lines">{props.sa_17inning}</div>
                            <div className="col-1 lines">{props.sa_18inning}</div>
                            <div className="col-1 lines">{props.sa_19inning}</div>

                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-2 lines"><img src={props.logo_home} alt="logo home team" className="img_logo_game_day"></img>{props.home}</div>
                            <div className="col-1 lines">{props.sh_10inning}</div>
                            <div className="col-1 lines">{props.sh_11inning}</div>
                            <div className="col-1 lines">{props.sh_12inning}</div>
                            <div className="col-1 lines">{props.sh_13inning}</div>
                            <div className="col-1 lines">{props.sh_14inning}</div>
                            <div className="col-1 lines">{props.sh_15inning}</div>
                            <div className="col-1 lines">{props.sh_16inning}</div>
                            <div className="col-1 lines">{props.sh_17inning}</div>
                            <div className="col-1 lines">{props.sh_18inning}</div>
                            <div className="col-1 lines">{props.sh_19inning}</div>

                        </div>
                        <div className="row g-0 text-center  text-white">
                            <div className="col-1 bg_lines">In 20</div>
                            <div className="col-1 bg_lines">In 21</div>
                            <div className="col-1 bg_lines">In 22</div>
                            <div className="col-1 bg_lines">In 23</div>
                            <div className="col-1 bg_lines">In 24</div>
                            <div className="col-1 bg_lines">In 25</div>

                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sa_20inning}</div>
                            <div className="col-1 lines">{props.sa_21inning}</div>
                            <div className="col-1 lines">{props.sa_22inning}</div>
                            <div className="col-1 lines">{props.sa_23inning}</div>
                            <div className="col-1 lines">{props.sa_24inning}</div>
                            <div className="col-1 lines">{props.sa_25inning}</div>

                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sh_20inning}sadasd</div>
                            <div className="col-1 lines">{props.sh_21inning}</div>
                            <div className="col-1 lines">{props.sh_22inning}</div>
                            <div className="col-1 lines">{props.sh_23inning}</div>
                            <div className="col-1 lines">{props.sh_24inning}</div>
                            <div className="col-1 lines">{props.sh_25inning}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Extra_Inning.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    sa_10inning: PropTypes.string,
    sa_11inning: PropTypes.string,
    sa_12inning: PropTypes.string,
    sa_13inning: PropTypes.string,
    sa_14inning: PropTypes.string,
    sa_15inning: PropTypes.string,
    sa_16inning: PropTypes.string,
    sa_17inning: PropTypes.string,
    sa_18inning: PropTypes.string,
    sa_19inning: PropTypes.string,
    sa_20inning: PropTypes.string,
    sa_21inning: PropTypes.string,
    sa_22inning: PropTypes.string,
    sa_23inning: PropTypes.string,
    sa_24inning: PropTypes.string,
    sa_25inning: PropTypes.string,

    sh_10inning: PropTypes.string,
    sh_11inning: PropTypes.string,
    sh_12inning: PropTypes.string,
    sh_13inning: PropTypes.string,
    sh_14inning: PropTypes.string,
    sh_15inning: PropTypes.string,
    sh_16inning: PropTypes.string,
    sh_17inning: PropTypes.string,
    sh_18inning: PropTypes.string,
    sh_19inning: PropTypes.string,
    sh_20inning: PropTypes.string,
    sh_21inning: PropTypes.string,
    sh_22inning: PropTypes.string,
    sh_23inning: PropTypes.string,
    sh_24inning: PropTypes.string,
    sh_25inning: PropTypes.string,

    logo_away: PropTypes.string,
    logo_home: PropTypes.string
};