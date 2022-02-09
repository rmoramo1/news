import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Soccer_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="col-12 fs-5 team_stats">
                <div className="row g-0">
                    <div className="col-6 pe-2 d-flex align-items-center justify-content-end">
                        {props.name}
                    </div>
                    <div className="col-6">
                        {
                            store.logos_soccer.map((item, index) => {
                                let url_aw = "";
                                if (item.team == props.name) {
                                    url_aw = item.url;
                                    return (
                                        <div>
                                            <img className="img_logo" src={url_aw} alt="logo"></img>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container p-3">
                <div className="row g-0 bg_lines text-white text-center">
                    <div className="col-2">Matches</div>
                    <div className="col-2">Win</div>
                    <div className="col-2">Loss</div>
                    <div className="col-2">Pts</div>
                    <div className="col-2">Goals For</div>
                    <div className="col-2">Goals Against</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.matches}</div>
                    <div className="col-2 bb1px lines">{props.win}</div>
                    <div className="col-2 bb1px lines">{props.loss}</div>
                    <div className="col-2 bb1px lines">{props.pts}</div>
                    <div className="col-2 bb1px lines">{props.goals_for}</div>
                    <div className="col-2 bb1px lines">{props.goals_against}</div>
                </div>

                <div className="row mt-3 g-0 bg_lines text-white text-center">
                    <div className="col-2">More 2.5 Goals</div>
                    <div className="col-2">Less 2.5 Goals</div>
                    <div className="col-2">Zero Goal Gainst</div>
                    <div className="col-2">Zero Goals For</div>
                    <div className="col-2">Ties</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.more_2_5_goals}</div>
                    <div className="col-2 bb1px lines">{props.less_2_5_goals}</div>
                    <div className="col-2 bb1px lines">{props.zero_goal_against}</div>
                    <div className="col-2 bb1px lines">{props.zero_goals_for}</div>
                    <div className="col-2 bb1px lines">{props.ties}</div>
                </div>
            </div>
        </div>
    )
}
Soccer_Team_Stats.propTypes = {
    name: PropTypes.string,
    matches: PropTypes.string,
    win: PropTypes.string,
    loss: PropTypes.string,
    pts: PropTypes.string,
    goals_for: PropTypes.string,
    goals_against: PropTypes.string,

    more_2_5_goals: PropTypes.string,
    less_2_5_goals: PropTypes.string,
    zero_goal_against: PropTypes.string,
    zero_goals_for: PropTypes.string,
    ties: PropTypes.string,

};