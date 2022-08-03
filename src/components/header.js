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
        <div className="container-fluid p-0 bg_base">
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
                    <Link className="text-white font_impact text-decoration-none fs-3">
                        Registro <i className="fa-solid fa-user-astronaut"></i>
                    </Link>
                </div>
                <div className="col-12 bg_light text-white">
                    <div className="col-10 mx-auto ">
                        <ul className="list-unstyled list-inline col-12 text-center fs-5 m-0 py-2">
                            <li class="list-inline-item ul-drop">NFL
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Marcadores
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Clasificación
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Equipos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">NBA
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Marcadores
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Clasificación
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Equipos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">MLB
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Marcadores
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Clasificación
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Equipos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">NHL
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Marcadores
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Clasificación
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Equipos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">SOCCER
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Marcadores
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Clasificación
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Equipos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">BOX
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Events
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Stats
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">MMA
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Events
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Stats
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">GOLF
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Events
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Stats
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">NASCAR
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Events
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Stats
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-inline-item ul-drop">MOTO GP
                                <ul className="text-start rounded shadow_spans">
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Events
                                        </Link>
                                    </li>
                                    <li className="li_drop fs-5">
                                        <Link className="text-decoration-none">
                                            Stats
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}