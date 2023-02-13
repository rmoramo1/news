import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Single_Resultados } from "./single_resultados";
export const Resultados_Carrucel = () => {
    const { store } = useContext(Context);

    let fecha = new Date();
    let dia = fecha.getDate();
    let ayer = new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
    let mostrar_ayer = ayer.getDate();
    let year = fecha.getFullYear();
    let mes_actual = fecha.getMonth() + 1;

    if (mostrar_ayer == "01") {
        mes_actual = fecha.getMonth();
    }

    if (mostrar_ayer < 10) {
        mostrar_ayer = "0" + mostrar_ayer;
    }

    if (dia == "01") {
        mes_actual = fecha.getMonth();
    }


    let mes_a_dt;
    if (mes_actual < 10) {
        mes_a_dt = "0" + mes_actual;
    } else {
        mes_a_dt = mes_actual;
    }



    let teamFilter = store.mlb;
    var byDate_mlb = teamFilter;
    byDate_mlb.sort(function (a, b) {
        return b.id - a.id;
    });

    let teamFilter_nba_games = store.nba_games;
    var byDate_nba = teamFilter_nba_games;
    byDate_nba.sort(function (a, b) {
        return b.id - a.id;
    });

    let teamFilter_nfl = store.nfl;
    var byDate_nfl = teamFilter_nfl;
    byDate_nfl.sort(function (a, b) {
        return b.id - a.id;
    });

    let teamFilter_nhl = store.nhl;
    var byDate_nhl = teamFilter_nhl;
    byDate_nhl.sort(function (a, b) {
        return b.id - a.id;
    });

    const [sport_sort_, setsport_sort_] = useState("NBA");
    let sports = ["NFL", "NBA", "MLB", "NHL"];

    let class_para_mlb = "d-none col-lg-11";
    let class_para_nba = "d-none col-lg-11";
    let class_para_nfl = "d-none col-lg-11";
    let class_para_nhl = "d-none col-lg-11";
    if (sport_sort_ == "MLB") {
        class_para_mlb = "d-block col-lg-11";
        class_para_nba = "d-none col-lg-11";
        class_para_nfl = "d-none col-lg-11";
        class_para_nhl = "d-none col-lg-11";
    }
    if (sport_sort_ == "NBA") {
        class_para_mlb = "d-none col-lg-11";
        class_para_nba = "d-block col-lg-11";
        class_para_nfl = "d-none col-lg-11";
        class_para_nhl = "d-none col-lg-11";
    }
    if (sport_sort_ == "NFL") {
        class_para_nfl = "d-block col-lg-11";
        class_para_mlb = "d-none col-lg-11";
        class_para_nba = "d-none col-lg-11";
        class_para_nhl = "d-none col-lg-11";
    }
    if (sport_sort_ == "NHL") {
        class_para_nhl = "d-block col-lg-11";
        class_para_nfl = "d-none col-lg-11";
        class_para_mlb = "d-none col-lg-11";
        class_para_nba = "d-none col-lg-11";
    }

    let onclick = () => {
        document.getElementById('scroll_over').scrollLeft -= 300;
    };
    let onclickLNBA = () => {
        document.getElementById('scroll_over').scrollLeft += 300;
    };
    let onclickMLBR = () => {
        document.getElementById('scroll_overMLB').scrollLeft -= 300;
    };
    let onclickMLBL = () => {
        document.getElementById('scroll_overMLB').scrollLeft += 300;
    };
    let onclickNFLR = () => {
        document.getElementById('scroll_overNFL').scrollLeft -= 300;
    };
    let onclickNFLL = () => {
        document.getElementById('scroll_overNFL').scrollLeft += 300;
    };
    let onclickNHLR = () => {
        document.getElementById('scroll_overNHL').scrollLeft -= 300;
    };
    let onclickNHLL = () => {
        document.getElementById('scroll_overNHL').scrollLeft += 300;
    };
    return (
        <div className="row g-0 bg-white" id="sports">
            <div className="col-lg-1 p-1">
                <div className="col-12 text-center fw-bold">Resultados de Ayer</div>
                <div className="col-12">
                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={sport_sort_} onChange={e => setsport_sort_(e.target.value)} required>
                        {
                            sports.map((index) => {
                                return (
                                    <option key={index} name="promotions" value={index}>{index}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className={class_para_mlb}>
                <div id="scroll_overMLB" className="scroll_over display_en_linea col-12">
                    {
                        teamFilter.map((item, index) => {
                            if (index < 120) {
                                let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                                if (item.date == compara_day) {
                                    return (
                                        <div className="campo_resultado" key={index}>
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
                            }
                        })
                    }
                </div>
                <button className="btn d-none d-lg-block btn_left" type="button" onClick={onclickMLBL}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn d-none d-lg-block btn_right" type="button" onClick={onclickMLBR}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className={class_para_nba}>
                <div id="scroll_over" className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nba_games.map((item, index) => {
                            if (index < 120) {
                                let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                                if (item.date == compara_day) {
                                    return (
                                        <div className="campo_resultado" key={index}>
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
                            }
                        })
                    }
                </div>
                <button className="btn d-none d-lg-block btn_left" type="button" onClick={onclickLNBA}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn d-none d-lg-block btn_right" type="button" onClick={onclick}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div id="scroll_overNFL" className={class_para_nfl}>
                <div className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nfl.map((item, index) => {
                            if (index < 120) {
                                let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                                if (item.date == compara_day) {
                                    return (
                                        <div className="campo_resultado" key={index}>
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
                            }
                        })
                    }
                </div>
                <button className="btn d-none d-lg-block btn_left" type="button" onClick={onclickNFLL}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn d-none d-lg-block btn_right" type="button" onClick={onclickNFLR}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className={class_para_nhl}>
                <div id="scroll_overNHL" className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nhl.map((item, index) => {
                            if (index < 120) {
                                let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                                if (item.date == compara_day) {
                                    return (
                                        <div className="campo_resultado" key={index}>
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
                            }
                        })
                    }
                </div>
                <button className="btn d-none d-lg-block btn_left" type="button" onClick={onclickNHLR}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn d-none d-lg-block btn_right" type="button" onClick={onclickNHLL}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}
