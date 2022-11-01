import React, { useContext,useState } from 'react';
import { Context } from "../store/appContext";
import { Single_Usuario } from '../components/single_usuario';
function Perfil() {
    const { store } = useContext(Context);
    let roy = store.username_temp;
    if (!roy) {
        window.location.href = '/';
    } else {

    }
    const[roy_je, setRoy_je]= useState(store.username_temp);
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white">
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

            </div>
        </div>
    )
}
export default Perfil;

