import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const BaseBall_Team_Stats = props => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="col-12 fs-5 team_stats">
                <div className="row g-0">
                    <div className="col-6 pe-2 d-flex align-items-center justify-content-end">
                        {props.team}
                    </div>
                    <div className="col-6">
                        {
                            store.logos_mlb.map((item, index) => {
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
                </div>
            </div>
            <div className="container p-3">
                <div className="row g-0 bg_lines text-white text-center">
                    <div className="col-2">W</div>
                    <div className="col-2">L</div>
                    <div className="col-2">PTC</div>
                    <div className="col-2">GB</div>
                    <div className="col-2">Home</div>
                    <div className="col-2">Away</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.w}</div>
                    <div className="col-2 bb1px lines">{props.L}</div>
                    <div className="col-2 bb1px lines">{props.pct}</div>
                    <div className="col-2 bb1px lines">{props.gb}</div>
                    <div className="col-2 bb1px lines">{props.home}</div>
                    <div className="col-2 bb1px lines">{props.away}</div>
                </div>

                <div className="row mt-3 g-0 bg_lines text-white text-center">
                    <div className="col-2">Rs</div>
                    <div className="col-2">Ra</div>
                    <div className="col-2">Diff</div>
                    <div className="col-2">Strk</div>
                    <div className="col-2">L10</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.rs}</div>
                    <div className="col-2 bb1px lines">{props.ra}</div>
                    <div className="col-2 bb1px lines">{props.diff}</div>
                    <div className="col-2 bb1px lines">{props.strk}</div>
                    <div className="col-2 bb1px lines">{props.L10}</div>
                </div>
            </div>
        </div>
    )
}
BaseBall_Team_Stats.propTypes = {
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