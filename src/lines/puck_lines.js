import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PUCK_Lines = props => {
    const { store } = useContext(Context);
    return (
        <div className="col-12 overflowX_scroll p-1">
            <div className="row g-0 bg_lines text-white text-center odds-list">
                <div className="odds-spanTeam fw-bold" id="statusMLB">
                    <div className="row g-0">
                        <div className="col-6">
                            {props.status}
                        </div>
                        <div className="col-6">
                        
                        </div>
                    </div>
                </div>
                <div className="odds-span"></div>
                <div className="odds-span">PUCK L</div>
                <div className="odds-span">Juice</div>
                <div className="odds-span">Money Line</div>
                <div className="odds-span">Total</div>
                <div className="odds-span">Juice</div>
                <div className="odds-span">Team Total</div>
                <div className="odds-span">Juice Over</div>
                <div className="odds-span">Juice Under</div>
                <div className="odds-span">Score</div>
            </div>
            <div>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.date}</div>
                    <div className="odds-spanTeam bb1px lines fw-bold">{props.away}</div>
                    <div className="odds-span bb1px lines">{props.puck_line_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_puck_away}</div>
                    <div className="odds-span bb1px lines">{props.moneyLineAway}</div>
                    <div className="odds-span bb1px lines">{props.total}</div>
                    <div className="odds-span bb1px lines">{props.juice_total_over}</div>
                    <div className="odds-span bb1px lines">{props.tt_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_over_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_under_away}</div>
                    <div className="odds-span bb1px lines">{props.final_score_away}</div>
                </div>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.hour}</div>
                    <div className="odds-spanTeam lines fw-bold">{props.home}</div>
                    <div className="odds-span lines">{props.puck_line_home}</div>
                    <div className="odds-span lines">{props.juice_puck_home}</div>
                    <div className="odds-span lines">{props.moneyLineHome}</div>
                    <div className="odds-span lines"></div>
                    <div className="odds-span lines">{props.juice_total_under}</div>
                    <div className="odds-span lines">{props.tt_home}</div>
                    <div className="odds-span lines">{props.juice_over_home}</div>
                    <div className="odds-span lines">{props.juice_under_home}</div>
                    <div className="odds-span lines">{props.final_score_home}</div>
                </div>
            </div>
        </div>
    )
};
PUCK_Lines.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    juice_puck_away: PropTypes.string,
    juice_puck_home: PropTypes.string,
    puck_line_home: PropTypes.string,
    puck_line_away: PropTypes.string,
    moneyLineAway: PropTypes.string,
    moneyLineHome: PropTypes.string,
    total: PropTypes.string,
    juice_total_over: PropTypes.string,
    juice_total_under: PropTypes.string,
    tt_away: PropTypes.string,
    tt_home: PropTypes.string,
    juice_over_away: PropTypes.string,
    juice_over_home: PropTypes.string,
    juice_under_away: PropTypes.string,
    juice_under_home: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,

};