import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { Resultados_Carrucel } from "../components/resultados_carrucel";
import { Noticias_Para_Desplegar } from "../noticias/noticias_para desplegar";
import { Stadings_Home_Btns } from "../components/stadings_home_btns";
import { Top_Headlines } from "../components/top_headlines";
import { Podcast } from "../components/podcast";
import { Games_of_Day } from "../components/games_of_day";
import { Lines_Span_Home } from "../components/lines_span_home";
import { Eventos } from "../components/eventos";
//acordion


export const config = { amp: true }

function Home() {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-2">
			<div className="container-fluid rounded_span shadow_spans my-1">
				<Resultados_Carrucel />
			</div>
			<div className="row g-0 mt-2" id="accordion_general">
				<div className="col-12 d-block d-lg-none">
					<button className="btn btn_orange" type="button" data-bs-toggle="offcanvas" data-bs-target="#Titulares_principales" aria-controls="Titulares_principales">
						TiTulares Principales
					</button>
					<button className="btn float-end col-6 btn_orange" type="button" data-bs-toggle="offcanvas" data-bs-target="#Lineas_Off_Can" aria-controls="Lineas_Off_Can">
						Lineas
					</button>
					<button className="btn col-12 btn_orange mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#Juegos_dia" aria-controls="Juegos_dia">
						Juegos del Día
					</button>
				</div>
				<div className="col-lg-2 p-1">
					<div className="col-12 rounded_span shadow_spans bg-white d-none d-lg-block"><Top_Headlines /> </div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2 d-none d-lg-block"><Lines_Span_Home /></div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2 d-none d-lg-block"><Stadings_Home_Btns /></div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2 d-none d-lg-block"><Eventos /></div>
				</div>
				<div className="col-lg-7 p-1">
					<div className="col-12 rounded_span shadow_spans bg-white ">
						<Noticias_Para_Desplegar />
					</div>
				</div>
				<div className="col-lg-3 p-1 d-none d-lg-block">
					<div className="col-12 rounded_span shadow_spans bg-white">
						<Podcast />
					</div>
					<div className="col-12 mt-2 rounded_span shadow_spans bg-white">
						<Games_of_Day />
					</div>
				</div>
			</div>
			<div className="cont_off_top_head">
				<div className="offcanvas offcanvas-start" tabIndex="-1" id="Titulares_principales" aria-labelledby="offcanvasTopLabel">
					<div className="offcanvas-header">
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<Top_Headlines />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="Lineas_Off_Can" aria-labelledby="offcanvasTopLabel">
					<div className="offcanvas-header">
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Lines_Span_Home /></div>
						<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Stadings_Home_Btns /></div>
						<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Eventos /></div>
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="Juegos_dia" aria-labelledby="offcanvasTopLabel">
					<div className="offcanvas-header">
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Games_of_Day /></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;