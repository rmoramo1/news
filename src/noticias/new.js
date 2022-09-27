import { Link, useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Top_Headlines } from '../components/top_headlines';

export default function Noticia_Individual() {
  const params = useParams();
  const { store } = useContext(Context);
  let video_1 = store.noticias[params.theid] && store.noticias[params.theid].video_1;
  let video_2 = store.noticias[params.theid] && store.noticias[params.theid].video_2;
  let video_sp_1;
  let video_sp_2;
  video_1 ? video_sp_1 = "d-block text-center col-lg-6 p-lg-1" : video_sp_1 = "d-none";
  video_2 ? video_sp_2 = "d-block text-center col-lg-6 p-lg-1" : video_sp_2 = "d-none";
  let enlace1 = store.noticias[params.theid] && store.noticias[params.theid].enlace_1;
  let enlace2 = store.noticias[params.theid] && store.noticias[params.theid].enlace_2;
  let enlace3 = store.noticias[params.theid] && store.noticias[params.theid].enlace_3;
  let enlace_sp;
  enlace1 ? enlace_sp = "d-block fw-bold fs-3" : enlace_sp = "d-none";
  return (
    <div>
      <div className="col-12 d-block d-lg-none p-3">
        <button className="btn btn_orange col-12" type="button" data-bs-toggle="offcanvas" data-bs-target="#Titulares_principales" aria-controls="Titulares_principales">
          Titulares Principales
        </button>
      </div>
      <div className="row m-3 rounded_span shadow_spans bg-white">
        <div className="row g-0">
          <div className="col-lg-3 text-center border_right d-none d-lg-block">
            <Top_Headlines />
          </div>
          <div className="col-lg-9 text-center">
            <div className="col-12">
              <img className="img-fluid" src={store.noticias[params.theid] && store.noticias[params.theid].imagen_principal} alt="Image"></img>
            </div>
            <div className="col-12">
              <h1 className='fw-bold font_destacado font_impact'>
                {store.noticias[params.theid] && store.noticias[params.theid].h1} <br />
              </h1>
            </div>
            <div className="col-12 text-start px-2">
              <p className="fw-bold">
                {store.noticias[params.theid] && store.noticias[params.theid].descripcion}
              </p>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo1}
              </p>
              <h2>
                {store.noticias[params.theid] && store.noticias[params.theid].h2}
              </h2>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo2}
              </p>
              <div className="col-12 text-center">
                <img className="img-fluid" src={store.noticias[params.theid] && store.noticias[params.theid].imagen_secundaria_1}></img>
              </div>
              <h3>
                {store.noticias[params.theid] && store.noticias[params.theid].h3}
              </h3>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo3}
              </p>
              <div className="col-12 text-center">
                <img src={store.noticias[params.theid] && store.noticias[params.theid].imagen_secundaria_2}></img>
              </div>
              <h4>
                {store.noticias[params.theid] && store.noticias[params.theid].h4}
              </h4>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo4}
              </p>
              <h5>
                {store.noticias[params.theid] && store.noticias[params.theid].h5}
              </h5>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo5}
              </p>
              <div className="col-12 text-center">
                <img className="img-fluid" src={store.noticias[params.theid] && store.noticias[params.theid].imagen_secundaria_3}></img>
              </div>
              <h6>
                {store.noticias[params.theid] && store.noticias[params.theid].h6}
              </h6>
              <p>
                {store.noticias[params.theid] && store.noticias[params.theid].desarrollo6}
              </p>
              <p className={enlace_sp}>
                Related News
              </p>
              <p>
                <Link to={{ pathname: enlace1 }} rel="noopener noreferrer" target={"_blank"}>{store.noticias[params.theid] && store.noticias[params.theid].enlace_1}</Link>
              </p>
              <p>
                <Link to={{ pathname: enlace2 }} rel="noopener noreferrer" target={"_blank"}>{store.noticias[params.theid] && store.noticias[params.theid].enlace_2}</Link>
              </p>
              <p>
                <Link to={{ pathname: enlace3 }} rel="noopener noreferrer" target={"_blank"}>{store.noticias[params.theid] && store.noticias[params.theid].enlace_3}</Link>
              </p>
              <div className="row g-0">
                <div className={video_sp_1}>
                  <iframe width="100%" height="315" src={store.noticias[params.theid] && store.noticias[params.theid].video_1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={video_sp_2}>
                  <iframe width="100%" height="315" src={store.noticias[params.theid] && store.noticias[params.theid].video_2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <p className="text-start ps-1"><span className="fw-bold">Autor: </span> {store.noticias[params.theid] && store.noticias[params.theid].autor} -<span className="fw-bold"> {store.noticias[params.theid] && store.noticias[params.theid].mes}-{store.noticias[params.theid] && store.noticias[params.theid].dia}-{store.noticias[params.theid] && store.noticias[params.theid].year}</span></p>
          </div>
        </div>
      </div>
      <div className='cont_off_top_head'>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="Titulares_principales" aria-labelledby="offcanvasTopLabel">
          <div className="offcanvas-header">
            <h5 className="font_bold">Titulares Principales</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="col-12">
              <Top_Headlines />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
