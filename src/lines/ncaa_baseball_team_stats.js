import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const NCAA_BaseBall_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="container-fluid">
                <div className="row g-0 text-center odds-list">
                    <div className="diez_spans bb1px lines">
                    {
                            store.logos_ncaa_baseball.map((item, index) => {
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
                    <div className="diez_spans d-flex justify-content-start align-items-center bb1px lines">{props.team}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.w}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.L}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.pct}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.gb}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.home}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.away}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.rs}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.ra}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.diff}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.strk}</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bb1px lines">{props.L10}</div>
                </div>
            </div>
        </div>
    )
}
NCAA_BaseBall_Team_Stats.propTypes = {
    team: PropTypes.string,
    w: PropTypes.string,
    L: PropTypes.string,
    pct: PropTypes.string,
    gb: PropTypes.string,
    home: PropTypes.string,
    away: PropTypes.string,

    rs: PropTypes.string,
    ra: PropTypes.string,
    diff: PropTypes.string,
    strk: PropTypes.string,
    diff: PropTypes.string,
    L10: PropTypes.string,

};