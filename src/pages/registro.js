import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Registro() {
    const { store } = useContext(Context);

    const [startDate, setStartDate] = useState(new Date());
    const [name, setname] = useState();
    const [mail, setmail] = useState();
    const [user, setuser] = useState();
    const [country, setcountry] = useState();
    const [subscription, setSubscription] = useState("Cuenta Básica");

    const [password, setpassword] = useState("roy");
    const [confirmPassword, setconfirmPassword] = useState();
    if (password == confirmPassword) {
        document.getElementById("btnSub").removeAttribute("disabled");
    }
    let actualizar = () => {
        document.getElementById("miFormNcaa_logo_baseball").reset();
    }
    const crear = e => {
        actualizar();
        e.preventDefault();
        const body = {
            name: name,
            mail: mail,
            user: user,
            country: country,
            born: startDate,
            subscription: subscription,
            password: password,
        };
        fetch("https://ins-365.herokuapp.com/user", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
                alert("Usuario creado con éxito");

            })
            .catch(err => alert("No se ha podido crear el Usuario"));
    };
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const onChangeSetSubscripcion = (e) => {
        const valor = e.target.value
        setSubscription(valor)
    }
    return (
        <div className="container-fluid shadow_spans_spans my-1 bg-white">
            <div className="className text-center font_impact font_color_base my-4">
                <h1>Registro</h1>
            </div>
            <div className="container">
                <div className="col-12">
                    <p>Forma parte de nuestra comunidad! Regístrate ahora y conviértete en miembro de la mayor red informativa para amantes del deporte en todos sus aspectos. Aquí podrás encontrar desde los marcadores del día hasta los pronósticos desde varias casas de apuestas.</p>
                    <p>Toma ventaja sobre tus amigos y el mercado informándote con nosotros. Donde podrás obtener alertas con cambios de equipo, lesiones, expulsiones y mucho más! Has tu pronósticos de una manera informada y aumenta tus probabilidades!</p>
                    <p>Conviértete en miembro ahora y disfruta de todo nuestro conocimiento colectivo!</p>
                </div>
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <div className="className text-center fs-1">
                                <i className="fa-solid fa-square-share-nodes"></i>
                            </div>
                            <div className="col-12">
                                <p>Una comunidad donde tu opinión si vale. Hecha para amantes del deporte, podrás discutir temas desde lesiones hasta posibles ganadores! Quien tiene la apuesta segura? Comparte tu opinión! </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="className text-center fs-1">
                                <i class="fa-solid fa-trophy"></i>
                            </div>
                            <div className="col-12">
                                <p>Con el conocimiento de nuestros tipsters, podrás aumentar tus probabilidades de ganar! Cada uno tiene su porcentaje de pérdidas y ganadas disponibles en su perfil para que puedas tomar la mejor opción!</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="className text-center fs-1">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                            <div className="col-12">
                                <p>Aquí queremos proteger tu dinero. Con información de primera mano y disponible en todo momento siempre estarás preparado. Te ayudamos a aumentar tu ventaja y tus probabilidades sobre las casas de apuestas!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="className text-center py-2">
                    <h2>Listo para comenzar?</h2>
                </div>
                <div className="row g-0">
                    <div className="col-12">
                        <form onSubmit={crear} id="miFormNcaa_logo_baseball">
                            <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-lg-6 p-lg-5">
                                        <div className="card shadow_spans">
                                            <div className="py-3 bg_light text-white text-center">
                                                <h2 className="card-title fw-bold">Usuario Intermedio</h2>
                                            </div>
                                            <div className="card-footer text-center">
                                                <p className="fs-2"><span className="font_destacado fw-bold">7$</span> al mes</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item fw-bold">Alertas</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Juegos de 3 equipos</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Resultados de 3 equipos</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Lineas de 3 equipos</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tabla de Posiciones</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Open Line</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tipsters</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Noticias Principales</li>
                                                <li className="list-group-item fw-bold">Paginas Adicionales</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Lineas Completas</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tipsters</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Odds to Win</li>
                                                <li className="list-group-item fw-bold">Affilates</li>
                                            </ul>
                                            <div className="className text-center py-2">
                                                <button className="btn btn_gradient" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRegistro" aria-controls="offcanvasRegistro">Regístrate</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-lg-5">
                                        <div className="card shadow_spans">
                                            <div className="py-3 text-center bg_gadient_dark text-white">
                                                <h2 className="card-title fw-bold">Usuario Premium</h2>
                                            </div>
                                            <div className="card-footer text-center">
                                                <p className="fs-2"><span className="font_destacado fw-bold">10$</span> al mes</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item fw-bold">Alertas</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Juegos Ilimitados</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Resultados Ilimitados</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Lineas Ilimitados</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tabla de Posiciones</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Open Line</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tipsters</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Noticias Principales</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Podcast</li>
                                                <li className="list-group-item fw-bold">Paginas Adicionales</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Lineas Completas</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Tipsters</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Odds to Win</li>
                                                <li className="list-group-item"><i className="fa-solid fa-check fs-5 font_color_base"></i> Lesiones</li>
                                                <li className="list-group-item fw-bold">Affilates</li>
                                                <li className="list-group-item fw-bold">Promociones Especiales</li>
                                            </ul>
                                            <div className="className py-2 text-center">
                                                <button className="btn bg_gadient_dark text-white " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRegistro" aria-controls="offcanvasRegistro">Regístrate</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRegistro" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-body">
                                    <div className="col-12 p-1">
                                        <div className="card shadow_spans p-">
                                            <div className="row g-0 text-center bg_light text-white">
                                                <div className="col-10 d-flex justify-content-center align-items-center">
                                                    <h3>Regístrate</h3>
                                                </div>
                                                <div className="col-2">
                                                    <button type="button" className="btn text-white fs-2" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <div className="col-12 my-3">
                                                    <input type="text" className="form-control selectInner" placeholder="Nombre Completo" name="Nombre" onChange={e => setname(e.target.value)} required />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <input type="email" className="form-control selectInner" placeholder="Correo Electrónico" name="email" onChange={e => setmail(e.target.value)} required />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <input type="text" className="form-control selectInner" placeholder="Usuario" name="Usuario" onChange={e => setuser(e.target.value)} required />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <input type="text" className="form-control selectInner" placeholder="País" name="pais" onChange={e => setcountry(e.target.value)} required />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        selected={startDate}
                                                        peekNextMonth
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        dropdownMode="select"
                                                        onChange={(date) => setStartDate(date)} />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <input type={passwordShown ? "text" : "password"} className="form-control selectInner" placeholder="Contraseña" name="Contraseña" minLength="8" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" onChange={e => setpassword(e.target.value)} required />
                                                    <p className="small"></p>
                                                    <figcaption className="blockquote-footer">
                                                        <cite title="Source Title">la contraseña requiere mayusculas, minusculas y numeros - longitud minima 8 caracteres</cite>
                                                    </figcaption>
                                                </div>
                                                <div className="col-12 my-3">
                                                    <input type={passwordShown ? "text" : "password"} className="form-control selectInner" placeholder="Confirme Contraseña" name="Confirme Contraseña" onChange={e => setconfirmPassword(e.target.value)} required />
                                                </div>
                                                <div className="col-12 my-3">
                                                    <button className="btn btn-primary" type="button" onClick={togglePassword}><i className="fa-regular fa-eye"></i></button>
                                                </div>
                                                <div className="row g-0" defaultValue="Cuenta Básica" onChange={onChangeSetSubscripcion} required>
                                                    <div className="col">
                                                        <div className="form-check py-2">
                                                            <input className="form-check-input" type="radio" name="cuenta" id="cuenta2" value="Cuenta Intermedia" />
                                                            <label className="form-check-label" htmlFor="cuenta2">
                                                                Cuenta Intermedia
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-check py-2">
                                                            <input className="form-check-input" type="radio" name="cuenta" id="cuenta3" value="Cuenta Premium" />
                                                            <label className="form-check-label" htmlFor="cuenta3">
                                                                Cuenta Premium
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="className py-3">
                                                    <button id="btnSub" type="submit" className="btn btn-danger" disabled>Crear</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Registro;