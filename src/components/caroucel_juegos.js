import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Single_Juegos } from "./single_juegos";

export default function Caroucel_Juegos() {
    const { store } = useContext(Context);

    let fecha = new Date();
    let dia = fecha.getDate();
    let ayer = new Date(fecha.getTime());
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

    let class_para_mlb = "d-none col-lg-10";
    let class_para_nba = "d-none col-lg-10";
    let class_para_nfl = "d-none col-lg-10";
    let class_para_nhl = "d-none col-lg-10";
    if (sport_sort_ == "MLB") {
        class_para_mlb = "d-block col-lg-10";
        class_para_nba = "d-none col-lg-10";
        class_para_nfl = "d-none col-lg-10";
        class_para_nhl = "d-none col-lg-10";
    }
    if (sport_sort_ == "NBA") {
        class_para_mlb = "d-none col-lg-10";
        class_para_nba = "d-block col-lg-10";
        class_para_nfl = "d-none col-lg-10";
        class_para_nhl = "d-none col-lg-10";
    }
    if (sport_sort_ == "NFL") {
        class_para_nfl = "d-block col-lg-10";
        class_para_mlb = "d-none col-lg-10";
        class_para_nba = "d-none col-lg-10";
        class_para_nhl = "d-none col-lg-10";
    }
    if (sport_sort_ == "NHL") {
        class_para_nhl = "d-block col-lg-10";
        class_para_nfl = "d-none col-lg-10";
        class_para_mlb = "d-none col-lg-10";
        class_para_nba = "d-none col-lg-10";
    }


    return (
        <div className="row g-0" id="sports">
            <div className="col-lg-2 p-3">
                <div className="col-12 text-center fw-bold">Juegos de Hoy</div>
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
                <div className="scroll_over display_en_linea col-12">
                    {
                        teamFilter.map((item, index) => {
                            let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                            if (item.date == compara_day) {
                                return (
                                    <div className="campo_resultado" key={index}>
                                        <Single_Juegos
                                            hour={item.hour}
                                            away={item.away}
                                            home={item.home}
                                            moneyLineHome={item.moneyLineHome}
                                            moneyLineAway={item.moneyLineAway}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className={class_para_nba}>
                <div className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nba_games.map((item, index) => {
                            let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                            if (item.date == compara_day) {
                                return (
                                    <div className="campo_resultado" key={index}>
                                        <Single_Juegos
                                            hour={item.hour}
                                            away={item.away}
                                            home={item.home}
                                            moneyLineAway={item.moneyLineAway}
                                            moneyLineHome={item.moneyLineHome}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className={class_para_nfl}>
                <div className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nfl.map((item, index) => {
                            let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                            if (item.date == compara_day) {
                                return (
                                    <div className="campo_resultado" key={index}>
                                        <Single_Juegos
                                            hour={item.hour}
                                            away={item.away}
                                            home={item.home}
                                            moneyLineAway={item.moneyLineAway}
                                            moneyLineHome={item.moneyLineHome}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className={class_para_nhl}>
                <div className="scroll_over display_en_linea col-12">
                    {
                        teamFilter_nhl.map((item, index) => {
                            let compara_day = year + "-" + mes_a_dt + "-" + mostrar_ayer;
                            if (item.date == compara_day) {
                                return (
                                    <div className="campo_resultado" key={index}>
                                        <Single_Juegos
                                            hour={item.hour}
                                            away={item.away}
                                            home={item.home}
                                            moneyLineAway={item.moneyLineAway}
                                            moneyLineHome={item.moneyLineHome}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
