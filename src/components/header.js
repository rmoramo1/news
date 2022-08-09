import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import logo from '../assets/img/logo.webp';
import { Link } from "react-router-dom";
export const Header = () => {
    const { actions } = useContext(Context);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [auth, setAuth] = useState(false);

    const enviar = e => {
        e.preventDefault();
        const body = { mail: mail, password: password };

        fetch("https://sportsdata365.com/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            // .then(res => res.json())
            .then(response => {
                if (!response.ok) {
                    setError(true);
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                window.localStorage.setItem("my_token", JSON.stringify(data));
                actions.changename(data.username);

            })
            .catch(err => console.log(err));
    };
    return (
        <div className="container-fluid p-0 bg-white fs-5">
            <div className="row g-0">
                <div className="col-lg-3 text-center">
                    <Link to="/">
                        <img src={logo} alt="logo of the site" className="img-fluid"></img>
                    </Link>
                </div>
                <div className="col-lg-7 d-flex justify-content-center align-items-center">
                    <form onSubmit={enviar}>
                        <div className="row g-0">
                            <div className="col-4 p-1">
                                <div className="input-group mb-3 shadow ">
                                    <span className="input-group-text" id="Usuario">@</span>
                                    <input
                                        id="mail"
                                        onChange={e => setMail(e.target.value)}
                                        name="mail"
                                        type="text"
                                        className="form-control "
                                        placeholder="Usuario"
                                        aria-label="Usuario"
                                        aria-describedby="Usuario"

                                    />
                                </div>
                            </div>
                            <div className="col-4 p-1">
                                <div className="input-group mb-3 shadow">
                                    <span className="input-group-text" id="Contraseña">
                                        <i className="fas fa-key" />
                                    </span>
                                    <input
                                        type="password"
                                        onChange={e => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        className="form-control "
                                        placeholder="Contraseña"
                                        aria-label="pass"
                                        aria-describedby="Contraseña"
                                    />
                                </div>
                            </div>
                            <div className="col-4 p-1">
                                <button type="submit" className="btn btn_gradient">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2 py-2 d-flex justify-content-center align-items-center">
                    <Link className="font_impact text-decoration-none fs-3">
                        Registro <i className="fa-solid fa-user-astronaut"></i>
                    </Link>
                </div>
                <div className="col-12 bg_light text-white">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-10">
                                <ul className="list-unstyled list-inline col-12 m-0 ">
                                    <li class="list-inline-item ul-drop px-3">NFL <i className="fa-solid fa-football"></i>
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
                                    <li class="list-inline-item ul-drop px-3">NBA <i className="fa-solid fa-baseball-bat-ball"></i>
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
                                    <li class="list-inline-item ul-drop px-3">MLB <i className="fa-solid fa-baseball-bat-ball"></i>
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
                                    <li class="list-inline-item ul-drop px-3">NHL <i className="fa-solid fa-hockey-puck"></i>
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
                                    <li class="list-inline-item ul-drop px-3">SOCCER <i className="fa-solid fa-futbol"></i>
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
                                    <li class="list-inline-item ul-drop px-3">MMA <i className="fa-solid fa-hand-fist"></i>
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
                                    <li class="list-inline-item ul-drop-2 px-3">
                                        <i className="fa-solid fa-bars"></i>
                                        <div className="row g-0 rounded shadow_spans drop_span bg-white">
                                            <div className="col-4">
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
                                                        <Link className="text-decoration-none">
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
                                            <div className="col-4">
                                                <ul className="text-start ">

                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none">
                                                            WNBA
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none">
                                                            GOLF
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none">
                                                            NASCAR
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none">
                                                            MOTO GP
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-4">
                                                <ul className="text-start ">

                                                    <li className="li_drop">
                                                        <Link to="/boxing_inicio" className="text-decoration-none">
                                                            BOXING
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none">
                                                            TENNIS
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center align-items-center">
                                <div className="row w-100 g-0">
                                    <div className="col-4">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa-brands fa-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}