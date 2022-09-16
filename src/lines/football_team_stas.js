import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Football_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>

            <div className="row g-0 text-center">
                <div className="quince_spans bb1px lines">
                {
                            store.logos_nfl.map((item, index) => {
                                let url_aw = "";
                                if (item.team == props.team) {
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
                <div className="eight_spans d-flex align-items-center justify-content-start bb1px lines">{props.team}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.w}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.L}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.t}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.home}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.away}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.conf}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.pf}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.pa}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.diff}</div>
                <div className="quince_spans d-flex align-items-center justify-content-center bb1px lines">{props.strk}</div>

            </div>

        </div>
    )
}
Football_Team_Stats.propTypes = {
    w: PropTypes.string,
    L: PropTypes.string,
    t: PropTypes.string,
    home: PropTypes.string,
    away: PropTypes.string,
    pf: PropTypes.string,
    pa: PropTypes.string,
    diff: PropTypes.string,
    strk: PropTypes.string,
    team: PropTypes.string,

};