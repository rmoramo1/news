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
import { Tabs } from "../acordion/tabs";
import { Items } from "../acordion/items"
/* img */

export const config = { amp: true }

function Home(){
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-2">
			<div className="container-fluid rounded_span shadow_spans my-1">
				<Resultados_Carrucel/>
			</div>
			<div className="row g-0 mt-2"  id="accordion_general">
				<div className="col-lg-2 p-1">
					<div className="col-12 rounded_span shadow_spans bg-white"><Top_Headlines/> </div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Lines_Span_Home/></div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Stadings_Home_Btns/></div>
					<div className="col-12 rounded_span shadow_spans bg-white mt-2"><Eventos/></div>
				</div>
				<div className="col-lg-7 p-1">
					<div className="col-12 rounded_span shadow_spans bg-white ">
						<Noticias_Para_Desplegar/>
					</div>
				</div>
				<div className="col-lg-3 p-1">
					<div className="col-12 rounded_span shadow_spans bg-white ">
						<Podcast/>
					</div>
					<div className="col-12 mt-2 rounded_span shadow_spans bg-white">
						<Games_of_Day/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;