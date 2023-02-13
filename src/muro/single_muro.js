import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Single_Muro = props => {
    const { store } = useContext(Context);
    let actualizar = () => {
        window.location.reload();
    }

    let roy = store.username_temp;
    let btnn = "";

    if (!roy) {
        btnn = "disabled";
    } else {

    }

    let comentarios_img = store.like_come;
    let rsil = [];
    let rcar = store.like_come.map((item, index) => {
        rsil.push(item.id)
    });

    let lik = props.like;
    const [like_plus, setLike_plus] = useState(lik);
    let pr = () => {
        setLike_plus(like_plus + 1);
        document.getElementById("btn" + props.id);
    }

    const like = e => {
        e.preventDefault();
        pr();
        const body = {
            like: like_plus + 1,
        };

        fetch("https://ins-365.herokuapp.com/upload/" + props.id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem("my_token", data.token);
            })
            .catch(err => console.log(err));
    };

    const [comenta, setComenta] = useState("");

    let rjek = props.imgURL;
    const [imagenIDS] = useState(rjek);


    const ComentarioSend = e => {
        e.preventDefault();

        const body = {
            imagenID: imagenIDS,
            comentario: comenta,
            usuario: roy,
        };
        console.log(body.imagenID + " imagenIDS senbd")

        fetch("https://ins-365.herokuapp.com/like-comentario/", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                alert("Comentario se Publico");
                actualizar();
            })
            .catch(error => {
                alert("Solo se puede comentar una vez")
            });
    };
    return (
        <div className="col-12 p-1">
            <div className="row g-0">
                <div className="col-lg-8 mx-auto card shadow_spans p-1">
                    <div className="col-12 bb_resultados fw-bold fs-3">
                        {props.usuario}
                    </div>
                    <div className="col-12 bb_resultados my-3">
                        <p>
                            {props.comentario}
                        </p>
                    </div>
                    <div className="col-12">
                        <img src={props.imgURL} className="img-fluid" />
                    </div>
                    <div className="row g-0 text-center">
                        <div className="col-6 ">
                            <button disabled={btnn} className="btn text-success fs-3" onClick={like} id={"btn" + props.id}> <i className="fa-regular fa-thumbs-up"></i> {like_plus}</button>
                        </div>
                        <div className="col-6">
                            <button disabled={btnn} className="btn fs-3" data-bs-toggle="modal" data-bs-target="#comentario" ><i className="fa-regular fa-comment"></i></button>
                        </div>
                    </div>

                    <div className="border">
                        <a className="" type="button" data-bs-toggle="collapse" data-bs-target=".collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Comentarios
                        </a>
                        <div className="collapse collapseExample" id="collapseExample">
                            {
                                rsil.map((item, index) => {
                                    if (index == 1) {
                                        return (
                                            <>
                                                <div className="card card-body">
                                                    <ul className="list-unstyled">
                                                        {
                                                            comentarios_img.map((item, index) => {
                                                                if (props.imgURL == item.imagenID) {
                                                                    return (
                                                                        <li className="bb1px" key={index}>
                                                                            <strong>{item.usuario}</strong>:  {item.comentario}
                                                                        </li>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="comentario" tabIndex="-1" aria-labelledby="comentarioLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="comentarioLabel">Añade tu comentario </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control selectInner" placeholder="Comentario" name="Comantario" onChange={e => setComenta(e.target.value)} required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={ComentarioSend} className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Publicar Comentario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Muro.prototype = {
    id: PropTypes.string,
    comentario: PropTypes.string,
    dislike: PropTypes.string,
    imgURL: PropTypes.string,
    like: PropTypes.string,
    usuario: PropTypes.string
}

