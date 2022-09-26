import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Single_noticias_Form_1 } from "./single_noticias";
export const Noticias_Para_Desplegar = () => {
    const { store } = useContext(Context);
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1;

    const [search, setSearch] = useState();

    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid bg-white">
            <div className="row g-0 bb1">
                <div className="col-lg-6  title_noticias font_impact text-center">
                    <p>Noticias del Día</p>
                </div>
                <div className="col-lg-6 p-3">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Buscar Articulo"
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="row g-0">
                {!search ? noticiasFilter.map((item, index) => {
                    return (
                        <div key={index} className="col-12 p-2">
                            <Single_noticias_Form_1
                                id={index}
                                imagen_principal={item.imagen_principal}
                                h1={item.h1}
                                descripcion={item.descripcion}
                                dia={item.dia}
                                mes={item.mes}
                                year={item.year}
                                autor={item.autor}
                            />
                        </div>
                    );

                }) : noticiasFilter.filter(sea => sea < 45 || sea.h1.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
                    //if (item.dia == hoy && item.mes == mesActual && item.year == añoActual) {
                    return (
                        <div key={index} className="col-12 p-2">
                            <Single_noticias_Form_1
                                id={index}
                                imagen_principal={item.imagen_principal}
                                h1={item.h1}
                                descripcion={item.descripcion}
                                dia={item.dia}
                                mes={item.mes}
                                year={item.year}
                                autor={item.autor}
                            />
                        </div>
                    );

                })}
            </div>
        </div>
    )
}
