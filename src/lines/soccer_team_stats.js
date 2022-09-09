import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Soccer_Team_Stats = props => {
    const { store } = useContext(Context);
    return (


        <div className="row g-0 text-center">
            <div className="diez_spans bb1px lines">{props.matches}</div>
            <div className="diez_ocho_spans bb1px lines">{props.win}</div>
            <div className="diez_ocho_spans bb1px lines">{props.loss}</div>
            <div className="diez_ocho_spans bb1px lines">{props.pts}</div>
            <div className="diez_spans bb1px lines">{props.goals_for}</div>
            <div className="diez_spans bb1px lines">{props.goals_against}</div>
            <div className="diez_spans bb1px lines">{props.more_2_5_goals}</div>
            <div className="diez_spans bb1px lines">{props.less_2_5_goals}</div>
            <div className="diez_spans bb1px lines">{props.zero_goal_against}</div>
            <div className="diez_spans bb1px lines">{props.zero_goals_for}</div>
            <div className="diez_ocho_spans bb1px lines">{props.ties}</div>
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