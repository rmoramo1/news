import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const NBA_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="container-fluid">
                <div className="row g-0 text-center">
                    <div className="quince_spans bb1px lines">
                        {
                            store.logos_nba.map((item, index) => {
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
                    <div className="quince_spans d-flex justify-content-start align-items-center bb1px lines">{props.team}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.w}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.L}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.ptc}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.gb}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.home}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.away}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.div}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.conf}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.ppg}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.opp_ppg}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.diff}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.strk}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.l10}</div>
                </div>
            </div>
        </div>
    )
}
NBA_Team_Stats.propTypes = {
    team: PropTypes.string,
    w: PropTypes.string,
    L: PropTypes.string,
    ptc: PropTypes.string,
    gb: PropTypes.string,
    home: PropTypes.string,
    away: PropTypes.string,
    div: PropTypes.string,
    conf: PropTypes.string,
    ppg: PropTypes.string,
    opp_ppg: PropTypes.string,
    diff: PropTypes.string,
    strk: PropTypes.string,
    l10: PropTypes.string
};