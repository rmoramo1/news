import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Q1_PUCK_Lines = props => {
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
                <div className="odds-span">Q1 PUCK L</div>
                <div className="odds-span">Q1 Juice</div>
                <div className="odds-span">Q1 Money Line</div>
                <div className="odds-span">Q1 Total</div>
                <div className="odds-span">Q1 Juice</div>
                <div className="odds-span">Q1 Team Total</div>
                <div className="odds-span">Q1 Juice Over</div>
                <div className="odds-span">Q1 Juice Under</div>
            </div>
            <div>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.date}</div>
                    <div className="odds-spanTeam bb1px lines fw-bold"><img src={props.logo_away} alt="logo away team" className="img_logo_game_day"></img>{props.away}</div>
                    <div className="odds-span bb1px lines">{props.puck_away_1Q}</div>
                    <div className="odds-span bb1px lines">{props.juice_puck_away_1Q}</div>
                    <div className="odds-span bb1px lines">{props.moneyLineAway_1Q}</div>
                    <div className="odds-span bb1px lines">{props.total_1Q}</div>
                    <div className="odds-span bb1px lines">{props.Q1_juice_over}</div>
                    <div className="odds-span bb1px lines">{props.tt_away_1Q}</div>
                    <div className="odds-span bb1px lines">{props.juice_over_away_1Q}</div>
                    <div className="odds-span bb1px lines">{props.juice_under_away_1Q}</div>
                </div>
                <div className="row g-0 text-center odds-list">
                    <div className="odds-span fw-bold">{props.hour}</div>
                    <div className="odds-spanTeam lines fw-bold"><img src={props.logo_home} alt="logo home team" className="img_logo_game_day"></img>{props.home}</div>
                    <div className="odds-span lines">{props.puck_home_1Q}</div>
                    <div className="odds-span lines">{props.juice_puck_home_1Q}</div>
                    <div className="odds-span lines">{props.moneyLineHome_1Q}</div>
                    <div className="odds-span lines"></div>
                    <div className="odds-span lines">{props.Q1_juice_under}</div>
                    <div className="odds-span lines">{props.tt_home_1Q}</div>
                    <div className="odds-span lines">{props.juice_over_home_1Q}</div>
                    <div className="odds-span lines">{props.juice_under_home_1Q}</div>
                </div>
            </div>
        </div>
    )
};
Q1_PUCK_Lines.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    juice_puck_away_1Q: PropTypes.string,
    juice_puck_home_1Q: PropTypes.string,
    puck_home_1Q: PropTypes.string,
    puck_away_1Q: PropTypes.string,
    moneyLineAway_1Q: PropTypes.string,
    moneyLineHome_1Q: PropTypes.string,
    total_1Q: PropTypes.string,
    Q1_juice_over: PropTypes.string,
    Q1_juice_under: PropTypes.string,
    tt_away_1Q: PropTypes.string,
    tt_home_1Q: PropTypes.string,
    juice_over_away_1Q: PropTypes.string,
    juice_over_home_1Q: PropTypes.string,
    juice_under_away_1Q: PropTypes.string,
    juice_under_home_1Q: PropTypes.string,
    logo_away: PropTypes.string,
    logo_home: PropTypes.string
};