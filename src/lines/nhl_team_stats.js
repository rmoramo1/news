import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const NHL_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="container-fluid">

                <div className="row g-0 text-center odds-list">
                    <div className="diez_nueve_spans bb1px lines">
                    {
                            store.logos_nhl.map((item, index) => {
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
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-start align-items-center"> {props.team}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.gp}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.w}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.L}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.otl}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.pts}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.rw}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.row}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.sow}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.sol}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.home}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.away}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.gf}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.ga}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.diff}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.l10}</div>
                    <div className="diez_nueve_spans bb1px lines d-flex justify-content-center align-items-center">{props.strk}</div>
                </div>
            </div>
        </div>
    )
}
NHL_Team_Stats.propTypes = {
    gp: PropTypes.string,
    w: PropTypes.string,
    L: PropTypes.string,
    otl: PropTypes.string,
    pts: PropTypes.string,
    rw: PropTypes.string,
    row: PropTypes.string,

    sow: PropTypes.string,
    sol: PropTypes.string,
    home: PropTypes.string,
    away: PropTypes.string,
    diff: PropTypes.string,
    gf: PropTypes.string,
    ga: PropTypes.string,
    l10: PropTypes.string,
    strk: PropTypes.string,

};