import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../store/appContext";
import { Single_Games_of_Day } from "./single_games_of_day";

export const Games_of_Day = props => {
    const { store } = useContext(Context);
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;
    const dayLux = DateTime.now().day;

    let monthShow = [];
    if (monthLux < 10) {
        monthShow.push("0" + monthLux);
    } else {
        monthShow.push(monthLux);
    }

    let dayShow = [];
    if (dayLux < 10) {
        dayShow.push("0" + dayLux);
    } else {
        dayShow.push(dayLux);
    }

    const [year ] = useState(yearLux);
    const [month] = useState(monthShow);
    let R_date = month;

    let nbaFilter = store.nba_games;
    var byDate_nba = nbaFilter;
    byDate_nba.sort(function (a, b) {
        return b.id - a.id;
    });

    let nflFilter = store.nfl;
    var byDate_nfl = nflFilter;
    byDate_nfl.sort(function (a, b) {
        return b.id - a.id;
    });
    let mlbFilter = store.mlb;
    var byDate_mlb = mlbFilter;
    byDate_mlb.sort(function (a, b) {
        return b.id - a.id;
    });
    let nhlFilter = store.nhl;
    var byDate_nhl = nhlFilter;
    byDate_nhl.sort(function (a, b) {
        return b.id - a.id;
    });
    let mostrar_juegos = ["NFL", "NBA", "MLB", "NHL"];
    const [display, setdisplay] = useState("NBA");
    let class_display_nba;
    let class_display_nfl;
    let class_display_mlb;
    let class_display_nhl;
    if (display == "NBA") {
        class_display_nba = "d-block";
        class_display_nfl = "d-none";
        class_display_mlb = "d-none";
        class_display_nhl = "d-none";
    }
    if (display == "NFL") {
        class_display_nfl = "d-block";
        class_display_nba = "d-none";
        class_display_mlb = "d-none";
        class_display_nhl = "d-none";
    }
    if (display == "MLB") {
        class_display_mlb = "d-block";
        class_display_nfl = "d-none";
        class_display_nba = "d-none";
        class_display_nhl = "d-none";
    }
    if (display == "NHL") {
        class_display_nhl = "d-block";
        class_display_mlb = "d-none";
        class_display_nfl = "d-none";
        class_display_nba = "d-none";
    }


    return (
        <div>
            <div className="row g-0">
                <div className="col-12 text-center fw-bold font_impact fs-3">
                    <i className="fa-solid fa-list-ul font_color_base"></i> Juegos del Día
                </div>
                <div className="col-8 mx-auto d-flex align-items-center">
                    <select className="form-select" name="display" aria-label="Default select example" defaultValue={display} onChange={e => setdisplay(e.target.value)} >
                        {
                            mostrar_juegos.map((index) => {
                                return (
                                    <option key={index} name="display" value={index}>{index}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={class_display_nba}>
                    {
                        nbaFilter.map((item, index) => {
                            let dia = item.date.slice(8, 10);
                            let mes = item.date.slice(5, 7);
                            let ano = item.date.slice(0, 4);
                            if (mes == R_date && ano == year && dia == dayShow) {
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
                                    <div className="col-12" key={index}>
                                        <Single_Games_of_Day
                                            logo_away={url_aw}
                                            logo_home={url_hm}
                                            away={item.away}
                                            home={item.home}
                                            hour={item.hour}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div className={class_display_nfl}>
                    {
                        nflFilter.map((item, index) => {
                            let dia = item.date.slice(8, 10);
                            let mes = item.date.slice(5, 7);
                            let ano = item.date.slice(0, 4);
                            if (mes == R_date && ano == year && dia == dayShow) {
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
                                    <div className="col-12" key={index}>
                                        <Single_Games_of_Day
                                            logo_away={url_aw}
                                            logo_home={url_hm}
                                            away={item.away}
                                            home={item.home}
                                            hour={item.hour}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div className={class_display_mlb}>
                    {
                        mlbFilter.map((item, index) => {
                            let dia = item.date.slice(8, 10);
                            let mes = item.date.slice(5, 7);
                            let ano = item.date.slice(0, 4);
                            if (mes == R_date && ano == year && dia == dayShow) {
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
                                    <div className="col-12" key={index}>
                                        <Single_Games_of_Day
                                            logo_away={url_aw}
                                            logo_home={url_hm}
                                            away={item.away}
                                            home={item.home}
                                            hour={item.hour}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
                <div className={class_display_nhl}>
                    {
                        nhlFilter.map((item, index) => {
                            let dia = item.date.slice(8, 10);
                            let mes = item.date.slice(5, 7);
                            let ano = item.date.slice(0, 4);
                            if (mes == R_date && ano == year && dia == dayShow) {
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
                                    <div className="col-12" key={index}>
                                        <Single_Games_of_Day
                                            logo_away={url_aw}
                                            logo_home={url_hm}
                                            away={item.away}
                                            home={item.home}
                                            hour={item.hour}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
}
