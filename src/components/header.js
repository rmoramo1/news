import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import logo_2 from '../assets/img/logo_v2.2.png';
import { Link } from "react-router-dom";
import { Menu_Movil } from "./menu_movil";
import Caroucel_Juegos from "./caroucel_juegos";
export const Header = () => {
    const { store } = useContext(Context);
    const { actions } = useContext(Context);
    const [user, setuser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    let actualizar = () => {
        document.getElementById("loginForm").reset();
    }

    let refrescar = () => {
        window.localStorage.removeItem("my_token");
        window.location.reload(true)
    };
    const enviar = e => {
        actualizar();
        e.preventDefault();
        const body = { user: user, password: password };

        fetch("https://isn365.herokuapp.com/login", {
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
            .catch(error => alert("Usuario o contraseña incorrectos"));
    };

    let roy = store.username_temp;
    let btn;
    let reg;
    let lineas;
    let form;
    let enlace;
    let perfil;

    if (!roy) {
        lineas = "d-none";
        btn = "d-none";
        reg = "d-block btn btn_gradient";
        form = ""
        perfil = "d-none";
        enlace = "d-none";
    } else {
        btn = "d-block col-1 float-left";
        reg = "d-none";
        lineas = "list-inline-item ul-drop px-3";
        form = "d-none";
        enlace = "li_drop";
        perfil = "fw-bold d-flex justify-content-center align-items-center col-1";
    }
    return (
        <div className="container-fluid p-0 bg-white">
            <div className="row g-0">
                <div className="col-lg-2 d-flex justify-content-center align-items-center">
                    <Link to="/">
                        <img src={logo_2} alt="logo of the site" className="img-fluid"></img>
                    </Link>
                </div>
                <div className="col-lg-7">
                    <Caroucel_Juegos />
                </div>
                <div className="col-lg-3 py-1">
                    <div className="row g-0">
                        <div className="col-12">
                            <form className={form} onSubmit={enviar} id="loginForm">
                                <div className="row g-0">
                                    <div className="col-6 p-1">
                                        <div className="input-group mb-3 shadow">
                                            <span className="input-group-text" id="Usuario"><i className="fa-regular fa-user"></i></span>
                                            <input
                                                id="user"
                                                onChange={e => setuser(e.target.value)}
                                                name="user"
                                                type="text"
                                                className="form-control "
                                                placeholder="Usuario"
                                                aria-label="Usuario"
                                                aria-describedby="Usuario"

                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 p-1">
                                        <div className="input-group shadow">
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
                                    <div className="col-12 text-center">
                                        <div className="row g-0">
                                            <div className="col-6 px-2">
                                                <button type="submit" className="btn btn_gradient col-12">
                                                    Ingresar
                                                </button>
                                            </div>
                                            <div className="col-6 px-2">
                                                <Link to="/registro" className={reg}>
                                                    Registro
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row g-0 justify-content-center align-items-center">
                                <div className={perfil}>
                                    <Link to="/perfil" className="text-decoration-none">
                                        {store.username_temp}
                                    </Link>
                                </div>
                                <div className={btn} id="btnLogOut">
                                    <a href="#" onClick={refrescar} className="text-danger ps-3 fs-3">
                                        <span>
                                            <i className="fas fa-sign-out-alt" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mx-auto">
                            <div className="row w-100 g-0 d-none d-lg-block">
                                <div className="row g-0">
                                    <div className="col">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-youtube"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-reddit-alien"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 bg_light text-white d-none d-lg-block fs-5">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-lg-12">
                                <ul className="list-unstyled list-inline col-12 m-0 ">
                                    <li className="list-inline-item ul-drop px-3">NFL <i className="fa-solid fa-football"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link className="text-decoration-none" to="/nfl_inicio">
                                                    Portada
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
                                                    Estadísticas
                                                </Link>
                                            </li>
                                            {/* <li className="li_drop">
                                                <Link to="/jugadores_nfl" className="text-decoration-none">
                                                    Jugadores
                                                </Link>
                                            </li> */}
                                            <li className={enlace}>
                                                <Link to="/injurie_nfl" className="text-decoration-none">
                                                    Lesiones
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">NBA <i className="fa-solid fa-basketball"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link to="/nba_inicio" className="text-decoration-none">
                                                    Portada
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
                                                    Estadísticas
                                                </Link>
                                            </li>
                                            {/* <li className="li_drop">
                                                <Link to="/jugadores_nba" className="text-decoration-none">
                                                    Jugadores
                                                </Link>
                                            </li> */}
                                            <li className={enlace}>
                                                <Link to="/injurie_nba" className="text-decoration-none">
                                                    Lesiones
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">MLB <i className="fa-solid fa-baseball-bat-ball"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link to="/mlb_inicio" className="text-decoration-none">
                                                    Portada
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
                                                    Estadísticas
                                                </Link>
                                            </li>
                                            {/* <li className="li_drop">
                                                <Link to="/jugadores_mlb" className="text-decoration-none">
                                                    Jugadores
                                                </Link>
                                            </li> */}
                                            <li className={enlace}>
                                                <Link to="/injurie_mlb" className="text-decoration-none">
                                                    Lesiones
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">NHL <i className="fa-solid fa-hockey-puck"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link to="/nhl_inicio" className="text-decoration-none">
                                                    Portada
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
                                                    Estadísticas
                                                </Link>
                                            </li>
                                            {/* <li className="li_drop">
                                                <Link to="/jugadores_nhl" className="text-decoration-none">
                                                    Jugadores
                                                </Link>
                                            </li> */}
                                            <li className={enlace}>
                                                <Link to="/injurie_nhl" className="text-decoration-none">
                                                    Lesiones
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">SOCCER <i className="fa-solid fa-futbol"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link to="/soccer_inicio" className="text-decoration-none">
                                                    Portada
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/results_soccer" className="text-decoration-none">
                                                    Resultados
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/soccer_team_stats" className="text-decoration-none">
                                                    Estadísticas de Equipos
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">MMA <i className="fa-solid fa-hand-fist"></i>
                                        <ul className="text-start rounded shadow_spans">
                                            <li className="li_drop">
                                                <Link to="/mma_inicio" className="text-decoration-none">
                                                    Portada
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/mma_fight" className="text-decoration-none">
                                                    Peleas
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/resultados_peleas_mma" className="text-decoration-none">
                                                    Resultados
                                                </Link>
                                            </li>
                                            <li className="li_drop">
                                                <Link to="/mma_py_stats" className="text-decoration-none">
                                                    Estadísticas de Peleadores
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-inline-item ul-drop px-3">
                                        <Link to="/#" className="text-decoration-none text-white">
                                            PODCAST <i className="fa-solid fa-microphone"></i>
                                        </Link>
                                    </li>
                                    <li className={lineas}>
                                        <Link to="/lineas_generales" className="text-decoration-none text-white">
                                            LINEAS <i className="fa-solid fa-ranking-star"></i>
                                        </Link>
                                    </li>
                                    {/* <li className="d-inline list-inline-item ul-drop px-3"> */}
                                    <li className={lineas}>
                                        <Link to="/tipsters_cards" className="text-decoration-none text-white">
                                            TIPSTERS <i className="fa-solid fa-address-book"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item ul-drop-2 px-3">
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
                                                        <Link to="/ncaa_baseball_inicio" className="text-decoration-none">
                                                            NCAA <i className="fa-solid fa-baseball-bat-ball"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link to="/wnba_inicio" className="text-decoration-none">
                                                            WNBA <i className="fa-solid fa-basketball"></i>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="col-4">
                                                <ul className="text-start ">
                                                    <li className="li_drop">
                                                        <Link className="text-decoration-none" to="/bs_mexico_inicio">
                                                            MEX <i className="fa-solid fa-baseball-bat-ball"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link to="/golf_inicio" className="text-decoration-none">
                                                            GOLF <i className="fa-solid fa-golf-ball-tee"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link to="/nascar_inicio" className="text-decoration-none">
                                                            NASCAR <i className="fa-solid fa-car-side"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="li_drop">
                                                        <Link to="/moto_gp_inicio" className="text-decoration-none">
                                                            MOTO GP <i className="fa-solid fa-motorcycle"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-4">
                                                <ul className="text-start ">
                                                    <li className="li_drop">
                                                        <Link to="/boxing_inicio" className="text-decoration-none">
                                                            BOXING <i className="fa-regular fa-hand-back-fist"></i>
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
                </div>
                <div className="col-12 bg_light text-white d-block d-lg-none">
                    <Menu_Movil />
                </div>
            </div>
        </div>
    )
}