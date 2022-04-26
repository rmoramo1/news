import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Defensive_PY = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 bb1px">
                    <div className="row g-0 text-center">
                        <div className="diezSiete_spans lines"> <img src={props.headshot} alt="headshot"></img> </div>
                        <div className="diezSiete_spans lines"><Link to={`/deffensive_py/${props.id}`}>{props.name}</Link></div>
                        <div className="diezSiete_spans lines">{props.games}</div>
                        <div className="diezSiete_spans lines">{props.tack_solo}</div>
                        <div className="diezSiete_spans lines">{props.tack_ast}</div>
                        <div className="diezSiete_spans lines">{props.tack_total}</div>
                        <div className="diezSiete_spans lines">{props.sacks}</div>
                        <div className="diezSiete_spans lines">{props.sacks_yards}</div>
                        <div className="diezSiete_spans lines">{props.tfl}</div>
                        <div className="diezSiete_spans lines">{props.pd}</div>
                        <div className="diezSiete_spans lines">{props.Int}</div>
                        <div className="diezSiete_spans lines">{props.yds}</div>
                        <div className="diezSiete_spans lines">{props.ing}</div>
                        <div className="diezSiete_spans lines">{props.td}</div>
                        <div className="diezSiete_spans lines">{props.ff}</div>
                        <div className="diezSiete_spans lines">{props.ftd}</div>
                        <div className="diezSiete_spans lines">{props.kb}</div>
                 
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Defensive_PY.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    games: PropTypes.string,
    tack_solo: PropTypes.string,
    tack_ast: PropTypes.string,
    tack_total: PropTypes.string,
    sacks: PropTypes.string,
    tfl: PropTypes.string,
    pd: PropTypes.string,
    Int: PropTypes.string,
    yds: PropTypes.string,
    ing: PropTypes.string,
    td: PropTypes.string,
    ff: PropTypes.string,
    ftd: PropTypes.string,
    kb: PropTypes.string
};