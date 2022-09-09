import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/ins365_logo_blanco.png';
export const Menu_Movil = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg_azul">
                <div className="container-fluid">
                    <div className="row w-100 g-0">
                        <div className="col-2 offset-10">
                            <button className="navbar-toggler text-white fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-12">
                            <ul className="list-unstyled col-12 m-0 ">
                                <li className="ul-drop-movil px-3">NFL <i className="fa-solid fa-football"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link className="text-decoration-none" to="/nfl_inicio">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nfl_all_data" className="text-decoration-none">
                                                Juegos / Lineas
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/results_nfl" className="text-decoration-none">
                                                Resultados
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nfl_team_stats" className="text-decoration-none">
                                                Tabla de Posiciones
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/jugadores_nfl" className="text-decoration-none">
                                                Jugadores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-movil px-3">NBA <i className="fa-solid fa-basketball"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link to="/nba_inicio" className="text-decoration-none">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nba_all_data" className="text-decoration-none">
                                                Juegos / Lineas
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/results_nba" className="text-decoration-none">
                                                Resultados
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nba_team_stats" className="text-decoration-none">
                                                Tabla de Posiciones
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/jugadores_nba" className="text-decoration-none">
                                                Jugadores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-movil px-3">MLB <i className="fa-solid fa-baseball-bat-ball"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link to="/mlb_inicio" className="text-decoration-none">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/mlb_all_data" className="text-decoration-none">
                                                Juegos / Lineas
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/results_mlb" className="text-decoration-none">
                                                Resultados
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="mlb_team_stats" className="text-decoration-none">
                                                Tabla de Posiciones
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/jugadores_mlb" className="text-decoration-none">
                                                Jugadores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-movil px-3">NHL <i className="fa-solid fa-hockey-puck"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link to="/nhl_inicio" className="text-decoration-none">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nhl_all_data" className="text-decoration-none">
                                                Juegos / Lineas
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/results_nhl" className="text-decoration-none">
                                                Resultados
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/nhl_team_stats" className="text-decoration-none">
                                                Tabla de Posiciones
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/jugadores_nhl" className="text-decoration-none">
                                                Jugadores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-movil px-3">SOCCER <i className="fa-solid fa-futbol"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link className="text-decoration-none">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link className="text-decoration-none">
                                                Marcadores
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link className="text-decoration-none">
                                                Clasificación
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link className="text-decoration-none">
                                                Equipos
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-movil px-3">MMA <i className="fa-solid fa-hand-fist"></i>
                                    <ul className="text-start rounded shadow_spans">
                                        <li className="li_drop">
                                            <Link to="/mma_inicio" className="text-decoration-none">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/mma_fight" className="text-decoration-none">
                                                Peleas
                                            </Link>
                                        </li>
                                        <li className="li_drop">
                                            <Link to="/mma_py_stats" className="text-decoration-none">
                                                Estadísticas de Peleadores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="ul-drop-3 px-3">
                                    <i className="fa-solid fa-bars"></i>
                                    <div className="">
                                        <div className="col-12">
                                            <ul className="text-start ">
                                                <li className="li_drop">
                                                    <Link to="/ncaa_f_inicio" className="text-decoration-none">
                                                        NCAA <i className="fa-solid fa-football"></i>
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/ncaa_basket_inicio" className="text-decoration-none">
                                                        NCAA <i className="fa-solid fa-basketball"></i>
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/ncaa_baseball_inicio" className="text-decoration-none">
                                                        NCAA <i className="fa-solid fa-baseball-bat-ball"></i>
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link className="text-decoration-none">
                                                        <i className="fa-solid fa-baseball-bat-ball"></i> MEXICANO
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12">
                                            <ul className="text-start ">

                                                <li className="li_drop">
                                                    <Link to="/wnba_inicio"  className="text-decoration-none">
                                                        WNBA
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/golf_inicio" className="text-decoration-none">
                                                        GOLF
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/nascar_inicio" className="text-decoration-none">
                                                        NASCAR
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/moto_gp_inicio" className="text-decoration-none">
                                                        MOTO GP
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12">
                                            <ul className="text-start ">
                                                <li className="li_drop">
                                                    <Link to="/boxing_inicio" className="text-decoration-none">
                                                        BOXING
                                                    </Link>
                                                </li>
                                                <li className="li_drop">
                                                    <Link to="/tennis_inicio" className="text-decoration-none">
                                                        TENNIS
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
