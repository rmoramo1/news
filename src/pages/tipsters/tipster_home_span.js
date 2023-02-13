import React, { useContext } from "react";
import { Context } from '../../store/appContext';
import { Single_Home_Sipsters_Span } from './single_home_tipsters_span';

export default function Tipster_Home_Span() {
    const { store } = useContext(Context);
    let nam = [];
    return (
        <div>
            <div className="col-12 text-center fw-bold fs-2">Tipsters</div>
            <div className="col-12 p-2 mt-2">
                {
                    store.perfil_tipster.map((item, index) => {
                        if (index <= 6) {
                            if (nam.includes(item.name)) {
                            } else {
                                nam.push(item.name);
                                return (
                                    <Single_Home_Sipsters_Span
                                        key={index}
                                        id={index}
                                        name={item.name}
                                        linea={item.linea}
                                        resultado={item.resultado}
                                    />
                                )

                            }
                        }
                    })
                }

            </div>
        </div>
    )
}
