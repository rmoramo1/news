import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Boxers = props => {
    return (
        <div className="col-12 g-0">
            <div className="row g-0">
                <div className="col-12 shadow">
                    <div className="row g-0 text-center odds-list">
                        <div className="diezSiete_spans lines"><img src={props.headshot} alt="Headshot"></img></div>
                        <div className="diezSiete_spans lines d-flex justify-content-start align-items-center">  <Link to={`/boxer_st/${props.id}`}>{props.name}</Link></div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.nickname}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.height}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.weight}</div>
                        <div className="diez_spans lines d-flex justify-content-center align-items-center">{props.category}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.w}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.w_ko_tko}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.w_sub}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.w_dec}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.w_others}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.L}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.L_ko_tko}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.L_sub}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.L_dec}</div>
                        <div className="diezSiete_spans lines d-flex justify-content-center align-items-center">{props.L_others}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Boxers.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    nickname: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    category: PropTypes.string,
    w: PropTypes.string,
    w_by: PropTypes.string,
    L: PropTypes.string,
    L_by: PropTypes.string
};