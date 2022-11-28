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

    const [selectedFile, setSelectedFile] = useState("null");
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true)
    };
    console.log(selectedFile)

    const [like, setlike] = useState("");
    const [dislike, setdislike] = useState("");
    const [comentario, setcomentario] = useState("");
    const [usuario, setusuario] = useState("");

    const [roy_je, setRoy_je] = useState(store.username_temp);

    const submit = e => {
        e.preventDefault();
        const data = new FormData();

        const body = {
            img: selectedFile,
            name: selectedFile.name,
            mimetype: selectedFile.mimetype,
            like: "",
            dislike: "",
            comentario: "",
            usuario: "",
        };
        fetch("https://isn365.herokuapp.com/upload", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => res.json())
            .then(data => {
                alert("Logo se creo"+ data);
            })
            .catch(err => console.log(err));


        // data.append("img", selectedFile)
        // const url = "https://isn365.herokuapp.com/upload";
        // data.append('file', selectedFile.name)

        // fetch(url,
        //     {
        //         method: 'POST',
        //         body: data,
        //     })
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log('Success:', result);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
            // const config = {
            //     headers: {
            //       'content-type': 'multipart/form-data',
            //     },
            //   };
            // axios.post(url,data)
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
                    <form method="POST" encType="multipart/form-data" onSubmit={submit}>
                        <div>
                            <input type="file" name="img" onChange={changeHandler} accept="image/*" />
                            {isSelected ? (
                                <div>
                                    <p>Filename: {selectedFile.name}</p>
                                    <p>Filetype: {selectedFile.type}</p>
                                    <p>Size in bytes: {selectedFile.size}</p>
                                    <p>
                                        lastModifiedDate:{' '}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p>Select a file to show details</p>
                            )}
                            <div>
                                <button onClick={submit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default Perfil;

