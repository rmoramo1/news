import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Single_noticias_Form_1 } from "./single_noticias";
export const Noticias_Para_Desplegar = () => {
    const { store } = useContext(Context);
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1;

    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid bg-white">
            <div className="col-12 bb1 title_noticias font_impact text-center">
                <p>Noticias del Día</p>
            </div>
            <div className="row g-0">
                {noticiasFilter.map((item, index) => {
                    //if (item.dia == hoy && item.mes == mesActual && item.year == añoActual) {
                    if (index < 45) {
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
                    }
                })}
            </div>
        </div>
    )
}
