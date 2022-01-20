
import React from "react";
import PropTypes from "prop-types";

export const ThreSTq =props=>{
        return (
            <div className="col-12 overflowX_scroll p-1">
                <div className="row g-0 bg_lines text-white text-center odds-list">
                    <div className="odds-spanTeam fw-bold" id="statusNfl">{props.status}</div>
                    <div className="odds-span"></div>
                    <div className="odds-span">Spread</div>
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
                        <div className="odds-span bb1px lines">{props.q3_half_spread_away}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_juice_spread_away}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_moneyLineAway}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_total}</div>
                        <div className="odds-span bb1px lines">{props.q3_juice_over}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_tt_away}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_juice_over_away}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_juice_under_away}</div>
                        <div className="odds-span bb1px lines">{props.q3_half_final_score_away}</div>
                    </div>
                    <div className="row g-0 text-center odds-list">
                        <div className="odds-span fw-bold">{props.hour}</div>
                        <div className="odds-spanTeam lines fw-bold">{props.home}</div>
                        <div className="odds-span lines">{props.q3_half_spread_home}</div>
                        <div className="odds-span lines">{props.q3_half_juice_spread_home}</div>
                        <div className="odds-span lines">{props.q3_half_moneyLineHome}</div>
                        <div className="odds-span lines"></div>
                        <div className="odds-span lines">{props.q3_juice_under}</div>
                        <div className="odds-span lines">{props.q3_half_tt_home}</div>
                        <div className="odds-span lines">{props.q3_half_juice_over_home}</div>
                        <div className="odds-span lines">{props.q3_half_juice_under_home}</div>
                        <div className="odds-span lines">{props.q3_half_final_score_home}</div>
                    </div>
                </div>
            </div>
    )
};
ThreSTq.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    q3_half_spread_away: PropTypes.string,
    q3_half_spread_home: PropTypes.string,
    q3_half_juice_spread_away: PropTypes.string,
    q3_half_juice_spread_home: PropTypes.string,
    q3_half_moneyLineAway: PropTypes.string,
    q3_half_moneyLineHome: PropTypes.string,
    q3_half_total: PropTypes.string,
    q3_juice_over: PropTypes.string,
    q3_juice_under: PropTypes.string,
    q3_half_tt_away: PropTypes.string,
    q3_half_tt_home: PropTypes.string,
    q3_half_juice_over_away: PropTypes.string,
    q3_half_juice_over_home: PropTypes.string,
    q3_half_juice_under_away: PropTypes.string,
    q3_half_juice_under_home: PropTypes.string,
    q3_half_final_score_away: PropTypes.string,
    q3_half_final_score_home: PropTypes.string,

};