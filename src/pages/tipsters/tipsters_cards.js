import React, { useContext } from 'react';
import { Tipsters_Cards_Single } from './tipsters_cards_single'
import { Context } from "../../store/appContext";
function Tipsters_Cards() {
    const { store } = useContext(Context);

    return (
        <div className="container-fluid shadow_spans_spans my-1 bg-white">
            <div className="col-12 text-center ">
                <h1>
                    Tarjeta de Tipsters
                </h1>
            </div>
            <div className="row g-0">
                {
                    store.perfil_tipster.map((item, index) => {
                        {
                            return (
                                <div key={index} className="col-lg-4 p-2">
                                    <Tipsters_Cards_Single
                                        key={index}
                                        id={index}
                                        name={item.name}
                                        title={item.title}
                                    />
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    )
};
export default Tipsters_Cards;
