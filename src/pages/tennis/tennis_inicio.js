import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';
import { Single_noticias_Form_1 } from '../../noticias/single_noticias';
import { Single_Top_Headline } from '../../components/single_top_headline';

import { Single_Prox_Eventos_Golf } from '../../components/single_prox_eventos_golf';

import { Single_Tennis_More_Singles } from '../../components/tennis_more_singles';

function Tennis_Inicio() {
    const { store } = useContext(Context);
    let fecha = new Date();
    // let dia = fecha.getDate();
    // let year = fecha.getFullYear();
    // let mes_actual = fecha.getMonth() + 1;
    let dia = "26";
    let year = "2022";
    let mes_actual = "6";

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

    let teamFilter_tenista = store.tennista;
    var byDate_mma = teamFilter_tenista;
    byDate_mma.sort(function (a, b) {
        return b.w - a.w;
    });
    let resultados_tennis = store.tennis;
    var byDate_mma = resultados_tennis;
    byDate_mma.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white">
                <div className="row g-0">
                    <div className="col-lg-2 border_right">
                        <div className="row g-0">
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/tennis_games" className="btn_gradient_light">Eventos</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/tennista_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                        </div>
                        <div className='col-12 font_impact fs-4 text-center'>
                            <span className="font_color_base"><i class="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                        </div>
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "TENNIS") {
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
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Próximos Eventos</span>
                            </div>
                            {
                                resultados_tennis.map((item, index) => {
                                    let mes = item.date.slice(5, 8);
                                    let ano = item.date.slice(0, 4);
                                    let compara_day = mes_a_dt;
                                    let statu = item.status;
                                    if (mes = compara_day && ano == year && statu == "Pending") {
                                        return (
                                            <div key={index} className="">
                                                <Single_Prox_Eventos_Golf
                                                    id={index}
                                                    event={item.event}
                                                    location={item.location}
                                                    hour={item.hour}
                                                    date={item.date}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-8 border_right">
                        <div className="row g-0">
                            {noticiasFilter.map((item, index) => {
                                if (item.deporte == "TENNIS") {
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
                    <div className="col-lg-2">
                        <div className="row g-0">
                            <div className='col-12 font_impact fs-4 text-center'>
                                <span className="font_color_base"><i className="fa-solid fa-table-list"></i></span> <span className="">Estadísticas del año</span>
                            </div>
                            <div className="row g-0 text-center fw-bold bg_azul text-white">
                                <div className="col-8">Tenista</div>
                                <div className="col-2">Sng</div>
                                <div className="col-2">Dou</div>
                            </div>
                            <div className="bb2px col-12 pb-3">
                                {
                                    teamFilter_tenista.map((item, index) => {
                                        let compara_day = item.season;
                                        if (item.season == compara_day && index < 20) {
                                            return (
                                                <div className="col-12" key={index}>
                                                    <Single_Tennis_More_Singles
                                                        headshot={item.headshot}
                                                        double_titles={item.double_titles}
                                                        single_titles={item.single_titles}
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
    )
};
export default Tennis_Inicio;
