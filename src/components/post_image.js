import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";



export default function Post_Image() {
    const { store } = useContext(Context);
    let roy = store.username_temp;
    let disaJCR = "";
    let ms = "";
    if (!roy) {
        disaJCR = "disabled"
        ms = "d-block font_shadow fst-italic";
    } else {
        ms = "d-none";
        disaJCR = ""
    }
    const [auth, setAuth] = useState(false);
    const [roy_je, setRoy_je] = useState(store.username_temp);
    const [files, setFiles] = useState(null);
    const [cometario, setComentario] = useState("");
    let conta = cometario.length;
    let actualizar = () => {
        window.location.reload();
    }
    const uploadImage = (e) => {
        e.preventDefault();
        // we are about to send this to the backend.
        let body = new FormData();
        if (files[0].size > 1000000) {
            alert("El archivo es muy grande")
        } else {
            body.append("imagen", files[0]);
            body.append("usuario", roy_je);
            body.append("comentario", cometario);
        }
        const options = {
            body,
            method: "POST"
        };
        // you need to have the user_id in the localStorage
        fetch("https://ins-365.herokuapp.com/imagen", options)
            .then(resp => resp.json())
            .then(data => {
                alert("Imagen Publicada");
                setAuth(true);
                actualizar();
            }
            )
            .catch(error => {
                alert("No se pudo publicar la imagen")
            }
            );
    };
    return (
        <div>
            <form onSubmit={uploadImage}>
                <div className="row g-0">
                    <div className="col-12 fs-2">
                        Comparte tus Ideas
                    </div>
                    <div className={ms}>
                        -Debes Ingresar a tu cuenta para subir archivos-
                    </div>
                    <div className="col-12">
                        <figure>
                            <blockquote className="blockquote">
                                <p>Imagen</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">MAX 1M</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 py-2">
                        <input disabled={disaJCR} id="img_upload_in" type="file" accept=".jpg, .jpeg, .png,.webp" name="imagen" className="form-control" title="Debes Ingresar a tu cuenta para subir archivos" onChange={e => setFiles(e.target.files)} />
                    </div>
                    <div className="col-12">
                        <figure>
                            <blockquote className="blockquote">
                                <p>Comentario</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">MAX 125 caracteres</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12">
                        <textarea disabled={disaJCR} title="Debes Ingresar a tu cuenta para subir archivos" className="form-control" id="contario_user" rows="3" placeholder="Escribe un comentario" maxLength="125" onChange={e => setComentario(e.target.value)} ></textarea>
                    </div>
                    <div className="col-12">
                        Caracteres {conta}
                    </div>
                    <div className="col-12 py-3">
                        <button title="Debes Ingresar a tu cuenta para subir archivos" disabled={disaJCR} className="btn btn_orange" type="submit">Enviar</button>
                        {auth ? <Redirect to="/muro" /> : null}
                    </div>
                </div>
            </form>

        </div>
    )
}
