import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import bg_register from '../assets/img/register.webp'

function Registro() {
    const { store } = useContext(Context);
    let roy = store.username_temp;
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)

    const [name, setname] = useState();
    const [mail, setmail] = useState();
    const [user, setuser] = useState();
    const [country, setcountry] = useState();

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
            password: password,
        };
        fetch("https://isn365.herokuapp.com/user", {
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
    return (
        <div className="container-fluid rounded_span shadow_spans my-1 bg-white">
            <div className="col-12 text-center font_impact font_color_base my-4">
                <h1>Registro</h1>
            </div>
            <div className="container">
                <div className="col-12">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className="row g-0">
                    <div className="col-lg-8">
                        <div className="col-lg-6 mx-auto">
                            <form onSubmit={crear} id="miFormNcaa_logo_baseball">
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
                                    <input type={passwordShown ? "text" : "password"} className="form-control selectInner" placeholder="Contraseña" name="Contraseña" minlength="8" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" onChange={e => setpassword(e.target.value)} required />
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
                                <div className="col-12 text-center py-3">
                                    <button id="btnSub" type="submit" className="btn btn-danger" disabled>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={bg_register} alt="background de registro"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Registro;