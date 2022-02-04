import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const NHL_Team_Stats = props => {
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
                </div>
            </div>
            <div className="container p-3">
                <div className="row g-0 bg_lines text-white text-center">
                    <div className="col-2">GP</div>
                    <div className="col-2">W</div>
                    <div className="col-2">L</div>
                    <div className="col-2">Otl</div>
                    <div className="col-2">Pts</div>
                    <div className="col-2">RW</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.gp}</div>
                    <div className="col-2 bb1px lines">{props.w}</div>
                    <div className="col-2 bb1px lines">{props.L}</div>
                    <div className="col-2 bb1px lines">{props.otl}</div>
                    <div className="col-2 bb1px lines">{props.pts}</div>
                    <div className="col-2 bb1px lines">{props.rw}</div>
                </div>
                <div className="row mt-3 g-0 bg_lines text-white text-center">
                    <div className="col-2">ROW</div>
                    <div className="col-2">SOW</div>
                    <div className="col-2">SOL</div>
                    <div className="col-2">Home</div>
                    <div className="col-2">Away</div>
                    <div className="col-2">GF</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.row}</div>
                    <div className="col-2 bb1px lines">{props.sow}</div>
                    <div className="col-2 bb1px lines">{props.sol}</div>
                    <div className="col-2 bb1px lines">{props.home}</div>
                    <div className="col-2 bb1px lines">{props.away}</div>
                    <div className="col-2 bb1px lines">{props.gf}</div>
                </div>
                <div className="row mt-3 g-0 bg_lines text-white text-center">
                    <div className="col-2">GA</div>
                    <div className="col-2">DIFF</div>
                    <div className="col-2">L10</div>
                    <div className="col-2">Strk</div>
                </div>
                <div className="row g-0 text-center">
                    <div className="col-2 bb1px lines">{props.ga}</div>
                    <div className="col-2 bb1px lines">{props.diff}</div>
                    <div className="col-2 bb1px lines">{props.l10}</div>
                    <div className="col-2 bb1px lines">{props.strk}</div>
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