import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { Single_Usuario } from '../components/single_usuario';
function Perfil() {
    const { store } = useContext(Context);
    let roy = store.username_temp;
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const [roy_je, setRoy_je] = useState(store.username_temp);

    const [files, setFiles] = useState(null);

    const uploadImage = (e) => {
        e.preventDefault();
        // we are about to send this to the backend.
        console.log("This are the files", files);
        let body = new FormData();
        console.log(body)
        body.append("imagen", files[0]);
        const options = {
            body,
            method: "POST"
        };
        // you need to have the user_id in the localStorage

        fetch("http://192.168.20.220:3000/imagen", options)
            .then(resp => resp.json())
            .then(data => console.log("Success!!!!", data))
            .catch(error => console.error("ERRORRRRRR!!!", error));
    };

    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white">
                <div className="container">
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
                <form onSubmit={uploadImage}>
                    <div>
                        <input type="file" name="imagen" onChange={e => setFiles(e.target.files)}/>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Perfil;

