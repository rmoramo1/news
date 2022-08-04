import React,{useContext} from 'react';
import { Context } from "../store/appContext";
import { Single_Top_Headline } from './single_top_headline';

export const Top_Headlines = () => {
    const { store } = useContext(Context);
    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1;
    let noticiasFilter = store.noticias;
    var byDate = noticiasFilter;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="row g-0">
            <div className='col-12 font_impact fs-3 text-center'>
                <span className="font_color_base"><i class="fa-solid fa-newspaper"></i></span> <span className="">Titulares Principales</span>
            </div>
            <div className="col-12">
                {noticiasFilter.map((item, index) => {
                    //if (index < 5 && item.top_head_line == "Si" && item.mes == mesActual) {
                        if (item.top_head_line == "Si") {
                        return (
                            <div key={index} className="col-12">
                                <Single_Top_Headline
                                    id={index}
                                    h1={item.h1}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}
