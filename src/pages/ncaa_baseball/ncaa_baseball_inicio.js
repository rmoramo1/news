import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';
import { Single_noticias_Form_1 } from '../../noticias/single_noticias';
import { Single_Top_Headline } from '../../components/single_top_headline';
import { Single_More_Points } from '../../components/single_more_points';
import { Single_Resultados } from '../../components/single_resultados';


function NCAA_BASEBALL_Inicio() {
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

    let teamFilter_ncaa_baseball = store.stats_ncaa_baseball_team;
    var byDate_nfl = teamFilter_ncaa_baseball;
    byDate_nfl.sort(function (a, b) {
        return b.w - a.w;
    });
    let resultados_ncaa_baseball = store.ncaa_baseball;
    var byDate_ncaa_baseball = resultados_ncaa_baseball;
    byDate_ncaa_baseball.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white">

                <div className="row g-0">
                    <div className="col-lg-2 border_right">
                        <div className="row g-0">
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/ncaa_baseball_all_data" className="btn_gradient_light">Lineas</Link>
                            </div>
                            <div className="col-6 text-center py-3 bb1px">
                                <Link to="/ncaa_baseball_team_stats" className="btn_gradient_light">Estadísticas</Link>
                            </div>
                            {/* <div className="col text-center py-3 bb1px">
                                <Link to="/jugadores_ncaa_baseball" className="btn_gradient_light">Jugadores</Link>
                            </div> */}
                        </div>
                        <div className='col-12 font_impact fs-3 text-center'>
                            <span className="font_color_base"><i className="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
                        </div>
                        <div className="col-12">
                            {noticiasFilter.map((item, index) => {
                                if (index < 15 && item.top_head_line == "Si" && item.deporte == "NCAA_BASEBALL") {
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
                                <span className="font_color_base"><i className="fa-solid fa-list-ol"></i></span> <span className="">Resultados del Día</span>
                            </div>
                            {
                                resultados_ncaa_baseball.map((item, index) => {
                                    let compara_day = year + "-" + mes_a_dt + "-" + dia_zero;
                                    if (item.date == compara_day) {
                                        return (
                                            <div className="col-12" key={index}>
                                                <Single_Resultados
                                                    status={item.status}
                                                    away={item.away}
                                                    home={item.home}
                                                    final_score_away={item.final_score_away}
                                                    final_score_home={item.final_score_home}
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
                                if (item.deporte == "NCAA_BASEBALL") {
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
                                <span className="font_color_base"><i className="fa-solid fa-table-list"></i></span> <span className="">Tabla de Posiciones</span>
                            </div>
                            <div className="row g-0 text-center fw-bold bg_azul text-white">
                                <div className="col-8">Equipo</div>
                                <div className="col-2">W</div>
                                <div className="col-2">L</div>
                            </div>
                            <div className="bb2px col-12 pb-3">
                                {
                                    teamFilter_ncaa_baseball.map((item, index) => {
                                        let compara_day = item.season;
                                        if (item.season == year) {
                                            let url_hm = "";
                                            store.logos_ncaa_baseball.map((item3) => {
                                                if (item3.team == item.team) {
                                                    url_hm = item3.url
                                                }
                                            })
                                            return (
                                                <div className="col-12" key={index}>
                                                    <Single_More_Points
                                                        team={item.team}
                                                        L={item.L}
                                                        w={item.w}
                                                        logo={url_hm}
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
export default NCAA_BASEBALL_Inicio;
