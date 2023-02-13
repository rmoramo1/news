import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import DateTime from 'luxon/src/datetime'
import { Single_noticias_Form_1 } from "../noticias/single_noticias";
import { Results } from "../lines/results";
export default function Busqueda_Equipo() {
    const { store } = useContext(Context);
    const [bus, setBus] = useState('')
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;
    let dis = "";
    if (bus == "") {
        dis = "disabled";
    } else {
        dis = "";
    }
    let search_btn = () => {

    }

    let monthShow = [];
    if (monthLux < 10) {
        monthShow.push("0" + monthLux);
    } else {
        monthShow.push(monthLux);
    }

    let nflFilter = store.nfl;
    var byDateNFL = nflFilter;
    byDateNFL.sort(function (a, b) {
        return b.id - a.id;
    });
    let nbaFilter = store.nba_games;
    var byDateNBA = nbaFilter;
    byDateNBA.sort(function (a, b) {
        return b.id - a.id;
    });
    let nhlFilter = store.nhl;
    var byDateNHL = nhlFilter;
    byDateNHL.sort(function (a, b) {
        return b.id - a.id;
    });
    let mlbFilter = store.mlb;
    var byDateMLB = mlbFilter;
    byDateMLB.sort(function (a, b) {
        return b.id - a.id;
    });
    let mmaFilter = store.mma;
    var byDateMLB = mmaFilter;
    byDateMLB.sort(function (a, b) {
        return b.id - a.id;
    });

    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="col-12">
            <div className="input-group">
                <button id="btn_serc" disabled={dis} className="btn bg_base_dark text-white" onClick={search_btn}><i className="fa-solid fa-magnifying-glass" data-bs-toggle="offcanvas" data-bs-target="#search_canvas" aria-controls="search_canvas"></i></button>
                <input className="form-control" placeholder="Equipos de NBA-NFL-MLB-NHL" onChange={e => setBus(e.target.value)} type="text" id="site-search" name="q" />
            </div>
            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="search_canvas" aria-labelledby="search_canvas">
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Resultado de la busqueda <strong>{bus}</strong></h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="col-12 fs-2 fw-bold text-center sticky-top bg-white">Ultimos Resultados</div>
                            {
                                nflFilter.map((item, index) => {
                                    if (index < 20) {
                                        let search_in = bus;
                                        let mes = item.date.slice(5, 7);
                                        let ano = item.date.slice(0, 4);

                                        if (ano == yearLux && item.away.toLowerCase().includes(search_in) || ano == yearLux && item.home.toLowerCase().includes(search_in)) {
                                            let url_aw = "";
                                            let url_hm = "";
                                            store.logos_nfl.map((item2) => {
                                                if (item2.team == item.away) {
                                                    url_aw = item2.url
                                                }
                                            })
                                            store.logos_nfl.map((item3) => {
                                                if (item3.team == item.home) {
                                                    url_hm = item3.url
                                                }
                                            })
                                            return (
                                                <div className="col-12 p-2" key={index}>
                                                    <Results
                                                        logo_away={url_aw}
                                                        logo_home={url_hm}
                                                        away={item.away}
                                                        home={item.home}
                                                        date={item.date}
                                                        final_score_away={item.final_score_away}
                                                        final_score_home={item.final_score_home}
                                                    />
                                                </div>
                                            );

                                        }
                                    }
                                })
                            }

                            {
                                nbaFilter.map((item, index) => {
                                    if (index < 20) {
                                        let search_in = bus;
                                        let mes = item.date.slice(5, 7);
                                        let ano = item.date.slice(0, 4);
                                        if (ano == yearLux && item.away.toLowerCase().includes(search_in) || ano == yearLux && item.home.toLowerCase().includes(search_in)) {
                                            let url_aw = "";
                                            let url_hm = "";
                                            store.logos_nba.map((item2) => {
                                                if (item2.team == item.away) {
                                                    url_aw = item2.url
                                                }
                                            })
                                            store.logos_nba.map((item3) => {
                                                if (item3.team == item.home) {
                                                    url_hm = item3.url
                                                }
                                            })
                                            return (
                                                <div className="col-12 p-2" key={index}>
                                                    <Results
                                                        logo_away={url_aw}
                                                        logo_home={url_hm}
                                                        away={item.away}
                                                        home={item.home}
                                                        date={item.date}
                                                        final_score_away={item.final_score_away}
                                                        final_score_home={item.final_score_home}
                                                    />
                                                </div>
                                            );

                                        }
                                    }
                                })
                            }
                            {
                                nhlFilter.map((item, index) => {
                                    if (index < 20) {
                                        let search_in = bus;
                                        let mes = item.date.slice(5, 7);
                                        let ano = item.date.slice(0, 4);

                                        if (ano == yearLux && item.away.toLowerCase().includes(search_in) || ano == yearLux && item.home.toLowerCase().includes(search_in)) {
                                            let url_aw = "";
                                            let url_hm = "";
                                            store.logos_nhl.map((item2) => {
                                                if (item2.team == item.away) {
                                                    url_aw = item2.url
                                                }
                                            })
                                            store.logos_nhl.map((item3) => {
                                                if (item3.team == item.home) {
                                                    url_hm = item3.url
                                                }
                                            })
                                            return (
                                                <div className="col-12 p-2" key={index}>
                                                    <Results
                                                        logo_away={url_aw}
                                                        logo_home={url_hm}
                                                        away={item.away}
                                                        home={item.home}
                                                        date={item.date}
                                                        final_score_away={item.final_score_away}
                                                        final_score_home={item.final_score_home}
                                                    />
                                                </div>
                                            );
                                        }
                                    }
                                })
                            }
                            {
                                mlbFilter.map((item, index) => {
                                    if (index < 20) {
                                        let search_in = bus;
                                        let mes = item.date.slice(5, 7);
                                        let ano = item.date.slice(0, 4);
                                        if (ano == yearLux && item.away.toLowerCase().includes(search_in) || ano == yearLux && item.home.toLowerCase().includes(search_in)) {
                                            let url_aw = "";
                                            let url_hm = "";
                                            store.logos_mlb.map((item2) => {
                                                if (item2.team == item.away) {
                                                    url_aw = item2.url
                                                }
                                            })
                                            store.logos_mlb.map((item3) => {
                                                if (item3.team == item.home) {
                                                    url_hm = item3.url
                                                }
                                            })
                                            return (
                                                <div className="col-12 p-2" key={index}>
                                                    <Results
                                                        logo_away={url_aw}
                                                        logo_home={url_hm}
                                                        away={item.away}
                                                        home={item.home}
                                                        date={item.date}
                                                        final_score_away={item.final_score_away}
                                                        final_score_home={item.final_score_home}
                                                    />
                                                </div>
                                            );
                                        }
                                    }
                                })
                            }
                        </div>
                        <div className="col-lg-6">
                            <div className="col-12 fs-2 fw-bold text-center sticky-top bg-white">Noticias</div>
                            {noticiasFilter.map((item, index) => {
                                let search_in = bus;
                                let title = item.h1.toLowerCase();
                                if (title.includes(search_in) ) {
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
                </div>
            </div>
        </div>
    )
}
