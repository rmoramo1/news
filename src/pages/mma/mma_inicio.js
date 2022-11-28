import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';
import { Single_noticias_Form_1 } from '../../noticias/single_noticias';
import { Single_Top_Headline } from '../../components/single_top_headline';
import { Single_More_Figths_Wins } from '../../components/single_more_fights_wins';

import { Single_Peleas } from '../../components/single_peleas';


function MMA_Inicio() {
    const { store } = useContext(Context);
    let fecha = new Date();
    let dia = fecha.getDate();
    let year = fecha.getFullYear();
    let mes_actual = fecha.getMonth() + 1;

    if (dia == "01") {
        mes_actual = fecha.getMonth();
    }
    let dia_zero;
    if (dia < 10) {
        dia_zero = "0" + dia;
    } else {
        dia_zero = dia;
    }

    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }

    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });

    let teamFilter_mma = store.stats_mma_fighter;
    var byDate_mma = teamFilter_mma;
    byDate_mma.sort(function (a, b) {
        return b.w - a.w;
    });
    let resultados_mma = store.mma;
    var byDate_mma = resultados_mma;
    byDate_mma.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid p-2">
            <div className="col-12 d-block d-lg-none py-3">
                <button className="btn btn_orange" type="button" data-bs-toggle="offcanvas" data-bs-target="#Titulares_principales" aria-controls="Titulares_principales">
                    Titulares Principales
                </button>
                <button className="btn col-6 btn_orange float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#Lineas_Off_Can" aria-controls="Lineas_Off_Can">
                    Proximas Peleas
                </button>
                <button className="btn col-12 btn_orange mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#Tabla_posiciones" aria-controls="Tabla_posiciones">
                    Tabla de Posiciones
                </button>
            </div>
            <div className=" shadow_spans bg-white">
                <div className="row g-0">
                    <div className="col-lg-2 border_right">
                        <div className="row g-0">
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/mma_fight" className="btn_gradient_light">Peleas</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/mma_py_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className="d-none d-lg-block">

                        <div className='col-12 font_impact fs-3 text-center'>
                            <span className="font_color_base"><i className="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                        </div>
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "MMA") {
                                    return (
                                        <div key={index} className="col-12">
                                            <Single_Top_Headline
                                                id={index}
                                                h1={item.h1}
                                                />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="col-12 pt-3">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Próximos Encuentros</span>
                            </div>
                            {
                                resultados_mma.map((item, index) => {
                                    let mes4 = item.date.slice(5, 8);
                                    let ano = item.date.slice(0, 4);
                                    let compara_day = mes_a_dt;
                                    let statu = item.status;
                                    if (mes4 = compara_day && ano == year && statu == "Pending") {
                                        return (
                                            <div className="col-12" key={index}>
                                                <Single_Peleas
                                                    status={item.status}
                                                    money_Line_One={item.money_Line_One}
                                                    money_Line_Two={item.money_Line_Two}
                                                    fighter_One={item.fighter_One}
                                                    fighter_Two={item.fighter_Two}
                                                    />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                            </div>
                    <div className="col-lg-8 border_right">
                        <div className="row g-0">
                            {noticiasFilter.map((item, index) => {
                                if (item.deporte == "MMA") {
                                    return (
                                        <div key={index} className="col-12 p-2">
                                            <Single_noticias_Form_1
                                                id={index}
                                                imagen_principal={item.imagen_principal}
                                                h1={item.h1}
                                                descripcion={item.descripcion}
                                                dia={item.dia}
                                                mes={item.mes}
                                                year={item.year}
                                                autor={item.autor}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="row g-0">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-table-list"></i></span> <span className="">Historial de Peleas</span>
                            </div>
                            <div className="row g-0 text-center fw-bold bg_azul text-white">
                                <div className="col-8">Peleador</div>
                                <div className="col-2">W</div>
                                <div className="col-2">L</div>
                            </div>
                            <div className="bb2px col-12 pb-3">
                                {
                                    teamFilter_mma.map((item, index) => {
                                        let compara_day = item.season;
                                        if (item.season == compara_day && index < 20) {
                                            return (
                                                <div className="col-12" key={index}>
                                                    <Single_More_Figths_Wins
                                                        headshot={item.headshot}
                                                        L={item.L}
                                                        w={item.w}
                                                        name={item.name}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cont_off_top_head'>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="Titulares_principales" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className="font_bold">Titulares Principales</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "MMA") {
                                    return (
                                        <div key={index} className="col-12">
                                            <Single_Top_Headline
                                                id={index}
                                                h1={item.h1}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="Lineas_Off_Can" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-12 pt-3">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Proximas Peleas</span>
                            </div>
                            {
                                resultados_mma.map((item, index) => {
                                    let mes4 = item.date.slice(5, 8);
                                    let ano = item.date.slice(0, 4);
                                    let compara_day = mes_a_dt;
                                    let statu = item.status;
                                    if (mes4 = compara_day && ano == year && statu == "Pending") {
                                        return (
                                            <div className="col-12" key={index}>
                                                <Single_Peleas
                                                    status={item.status}
                                                    money_Line_One={item.money_Line_One}
                                                    money_Line_Two={item.money_Line_Two}
                                                    fighter_One={item.fighter_One}
                                                    fighter_Two={item.fighter_Two}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="Tabla_posiciones" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="col-lg-2">
                            <div className="row g-0">
                                <div className='col-12 font_impact fs-4 text-center'>
                                    <span className="font_color_base"><i className="fa-solid fa-table-list"></i></span> <span className="">Tabla de Posiciones</span>
                                </div>
                                <div className="row g-0 text-center fw-bold bg_azul text-white">
                                    <div className="col-8">Equipo</div>
                                    <div className="col-2">W</div>
                                    <div className="col-2">L</div>
                                </div>
                                <div className="bb2px col-12 pb-3">
                                {
                                    teamFilter_mma.map((item, index) => {
                                        let compara_day = item.season;
                                        if (item.season == compara_day && index < 20) {
                                            return (
                                                <div className="col-12" key={index}>
                                                    <Single_More_Figths_Wins
                                                        headshot={item.headshot}
                                                        L={item.L}
                                                        w={item.w}
                                                        name={item.name}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MMA_Inicio;
