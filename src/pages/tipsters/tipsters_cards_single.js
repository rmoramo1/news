import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from '../../store/appContext';

export const Tipsters_Cards_Single = props => {
    const { store } = useContext(Context);
    let nameRJC = props.name;
    let win_NHL = 0;
    let win_NBA = 0;
    let win_NFL = 0;
    let win_MLB = 0;

    let loss_NHL = 0;
    let loss_NBA = 0;
    let loss_NFL = 0;
    let loss_MLB = 0;
 
    store.picks_tipster.map((item) => {
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NHL" && item.estado != "Pending") {
            win_NHL = win_NHL + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NBA" && item.estado != "Pending") {
            win_NBA = win_NBA + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "NFL" && item.estado != "Pending") {
            win_NFL = win_NFL + 1;
        }
        if (item.name == nameRJC && item.resultado == "Win" && item.deporte == "MLB" && item.estado != "Pending") {
            win_MLB = win_MLB + 1;
        }

        if (item.name == nameRJC && item.deporte == "NHL" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NHL = loss_NHL + 1;
        }
        if (item.name == nameRJC && item.deporte == "NBA" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NBA = loss_NBA + 1;
        }
        if (item.name == nameRJC && item.deporte == "NFL" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_NFL = loss_NFL + 1;
        }
        if (item.name == nameRJC && item.deporte == "MLB" && item.resultado == "Loss" && item.estado != "Pending") {
            loss_MLB = loss_MLB + 1;
        }
    })

    let total;
    total = win_NHL + loss_NHL + win_NBA + win_NFL + win_MLB + loss_NBA + loss_NFL + loss_MLB;
    let total_win = win_NHL + win_NBA + win_NFL + win_MLB;
    return (
        <Link className="text-decoration-none" to={`/tipster_perfil/${props.id}`}>
            <div className="row g-0 shadow_spans rounded_span">
                <div className='col-12 bg_base_dark text-white text-center'>
                    <h3>{props.name}</h3>
                </div>
                <div className="col-12 p-1 bb1px">
                    {props.title}
                </div>
                <div className="col-12 p-1 ">
                    Estadisticas:
                </div>
                <div className="col-12 p-1 fw-bold font_grey">
                    <p>{total_win}-{total} ganados</p>
                </div>
            </div>
        </Link>

    )
};

Tipsters_Cards_Single.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
}
