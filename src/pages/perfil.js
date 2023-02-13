import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Single_Usuario } from '../components/single_usuario';
import Post_Image from '../components/post_image';
import user from "../assets/img/perfil.webp";
function Perfil() {
    const { store } = useContext(Context);
    const [auth, setAuth] = useState(false);
    let roy = store.username_temp;
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [roy_je, setRoy_je] = useState(store.username_temp);
    const [files, setFiles] = useState(null);
    const[cometario, setComentario] = useState("");
    let conta = cometario.length;
    let actualizar = () =>{
        window.location.reload();
    }
    const uploadImage = (e) => {
        e.preventDefault();
        // we are about to send this to the backend.
        let body = new FormData();
        if(files[0].size > 1000000){
            alert("El archivo es muy grande")
        }else{
            body.append("imagen", files[0]);
            body.append("usuario", roy_je);
            body.append("comentario", cometario);
        }
        const options = {
            body,
            method: "POST"
        };
        // you need to have the user_id in the localStorage
        fetch("http://192.168.20.220:3000/imagen", options)
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
        <div className="container-fluid p-2">
            <div className="shadow_spans bg-white">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-9">
                            {
                                store.user.map((item, index) => {
                                    if (roy_je == item.user) {
                                        return (
                                            <div key={index} className="">
                                                <Single_Usuario
                                                    id={index}
                                                    country={item.country}
                                                    mail={item.mail}
                                                    user={item.user}
                                                    name={item.name}
                                                    born={item.born}
                                                    subscription={item.subscription}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="col-lg-3 p-2 bg_gadient_dark text-white">
                            <Post_Image/>
                            <div className="col-12">
                                <img src={user} className="img-fluid" alt="imagen de persona con tablet"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perfil;

