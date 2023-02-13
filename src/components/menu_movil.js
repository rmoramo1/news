import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/ins365_logo_blanco.png';
export const Menu_Movil = () => {
    let roy = window.localStorage.getItem("my_token", JSON.stringify());
    let lineas;
    if (!roy) {
        lineas = "d-none";
    } else {
        lineas = "col-12 mt-3";
    }
    return (
        <div className="container" id="menu_movil">
            <div className="col-12 text-end">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center">
                        <div className="row g-0 w-100 fs-1">
                            {/* <div className="col">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div> */}
                            <div className="col">
                                <a className="text-white" href="https://twitter.com/isn_365" target="_blank">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a className="text-white" href="https://www.instagram.com/isn_365/" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div className="col">
                            <a className="text-white" href="https://www.youtube.com/channel/UCti5xshPxUn8E4FHVBBwBEQ" target="_blank">
                            <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                            {/* <div className="col">
                                <i className="fa-brands fa-reddit-alien"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-4 p-3">
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu_movil_off" aria-controls="menu_movil_off">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-top" tabIndex="-1" id="menu_movil_off" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <a href="/home" data-bs-dismiss="offcanvas">
                            <img src={logo} className="img-fluid"></img>
                        </a>
                    </h5>
                    <button type="button" className="btn text-white fs-1" data-bs-dismiss="offcanvas" aria-label="Close"> <i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div className="col-12">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_nfl" role="button" aria-expanded="false" aria-controls="collapse_nfl">
                            NFL <i className="fa-solid fa-football"></i>
                        </a>
                        <div className="collapse" id="collapse_nfl">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/nfl_inicio">
                                    Portada
                                </Link>

                                <Link to="/nfl_all_data" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Juegos / Lineas
                                </Link>

                                <Link to="/results_nfl" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Resultados
                                </Link>

                                <Link to="/nfl_team_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas
                                </Link>
                                <Link to="/injurie_nfl" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Leciones
                                </Link>

                                {/* <Link to="/jugadores_nfl" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Jugadores
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_nba" role="button" aria-expanded="false" aria-controls="collapse_nba">
                            NBA <i className="fa-solid fa-basketball"></i>
                        </a>
                        <div className="collapse" id="collapse_nba">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/nba_inicio">
                                    Portada
                                </Link>

                                <Link to="/nba_all_data" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Juegos / Lineas
                                </Link>

                                <Link to="/results_nba" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Resultados
                                </Link>

                                <Link to="/nba_team_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas
                                </Link>

                                {/* <Link to="/jugadores_nba" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Jugadores
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_mlb" role="button" aria-expanded="false" aria-controls="collapse_mlb">
                            MLB <i className="fa-solid fa-baseball-bat-ball"></i>
                        </a>
                        <div className="collapse" id="collapse_mlb">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/mlb_inicio">
                                    Portada
                                </Link>

                                <Link to="/mlb_all_data" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Juegos / Lineas
                                </Link>

                                <Link to="/results_mlb" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Resultados
                                </Link>

                                <Link to="/mlb_team_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas
                                </Link>

                                {/* <Link to="/jugadores_mlb" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Jugadores
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_nhl" role="button" aria-expanded="false" aria-controls="collapse_nhl">
                            NHL <i className="fa-solid fa-hockey-puck"></i>
                        </a>
                        <div className="collapse" id="collapse_nhl">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/nhl_inicio">
                                    Portada
                                </Link>

                                <Link to="/nhl_all_data" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Juegos / Lineas
                                </Link>

                                <Link to="/results_nhl" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Resultados
                                </Link>

                                <Link to="/nhl_team_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas
                                </Link>

                                {/* <Link to="/jugadores_nhl" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Jugadores
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_soccer" role="button" aria-expanded="false" aria-controls="collapse_soccer">
                            SOCCER <i className="fa-solid fa-futbol"></i>
                        </a>
                        <div className="collapse" id="collapse_soccer">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/soccer_inicio">
                                    Portada
                                </Link>

                                <Link to="/soccer_all_data" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Juegos / Lineas
                                </Link>

                                <Link to="/results_soccer" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Resultados
                                </Link>

                                <Link to="/soccer_team_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas
                                </Link>

                                {/* <Link to="/jugadores_soccer" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Jugadores
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_mma" role="button" aria-expanded="false" aria-controls="collapse_mma">
                            MMA <i className="fa-solid fa-hand-fist"></i>
                        </a>
                        <div className="collapse" id="collapse_mma">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/mma_inicio">
                                    Portada
                                </Link>

                                <Link to="/mma_fight" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Peleas
                                </Link>

                                <Link to="/mma_py_stats" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    Estadísticas de Peleadores
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <a className="btn btn_orange col-12" data-bs-toggle="collapse" href="#collapse_mas_deportess" role="button" aria-expanded="false" aria-controls="collapse_mas_deportess">
                            Mas Deportes <i className="fa-solid fa-plus"></i>
                        </a>
                        <div className="collapse" id="collapse_mas_deportess">
                            <div className="card card-body">
                                <Link className="text-decoration-none" data-bs-dismiss="offcanvas" to="/ncaa_f_inicio">
                                    NCAA <i className="fa-solid fa-football"></i>
                                </Link>

                                <Link to="/ncaa_basket_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    NCAA <i className="fa-solid fa-basketball"></i>
                                </Link>

                                <Link to="/wnba_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    WNBA <i className="fa-solid fa-basketball"></i>
                                </Link>
                                <Link to="/bs_mexico_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    MEX <i className="fa-solid fa-baseball-bat-ball"></i>
                                </Link>
                                <Link to="/golf_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    GOLF  <i className="fa-solid fa-golf-ball-tee"></i>
                                </Link>
                                <Link to="/nascar_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    NASCAR  <i className="fa-solid fa-car-side"></i>
                                </Link>
                                <Link to="/moto_gp_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    MOTO GP  <i className="fa-solid fa-motorcycle"></i>
                                </Link>
                                <Link to="/boxing_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    BOXING  <i className="fa-regular fa-hand-back-fist"></i>
                                </Link>
                                <Link to="/tennis_inicio" data-bs-dismiss="offcanvas" className="text-decoration-none">
                                    TENNIS
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={lineas}>
                        <a className="btn btn_orange col-12" data-bs-dismiss="offcanvas" href="/lineas_generales">
                            Lineas <i className="fa-solid fa-ranking-star"></i>
                        </a>
                    </div>
                    <div className={lineas}>
                        <a className="btn btn_orange col-12" data-bs-dismiss="offcanvas" href="/perfil">
                            Perfil <i className="fa-solid fa-user-tie"></i>
                        </a>
                    </div>
                    <div className={lineas}>
                        <a className="btn btn_orange col-12" data-bs-dismiss="offcanvas" href="/odds_to_win">
                            Odds to Win <i className="fa-solid fa-list-ul"></i>
                        </a>
                    </div>
                    <div className="col-12 mt-3">
                        <a className="btn btn_orange col-12" data-bs-dismiss="offcanvas" href="#">
                            PODCAST <i className="fa-solid fa-microphone"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
