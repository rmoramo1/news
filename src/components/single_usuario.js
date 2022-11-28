import React, { useState, useContext } from 'react';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import imge from "../assets/img/perfil.webp";
export const Single_Usuario = props => {
	const { store } = useContext(Context);
	const [toSend, setToSend] = useState({
		fullname: '',
		email: '',
		message: '',
		country: '',
		phone: '',
		password: '',
		players: '',
		SportsCasinoHorses: '',
		LiveBettin: '',
		LiveCasino: '',
		DynamicBetting: '',
		equipos_nfl: [],
		equipos_nba: [],
		equipos_mlb: [],
		equipos_nhl: [],
		PropBuilder: '',
	});
	const contacSend = (e) => {
		e.preventDefault();
		send(
			// 'service_c5ege19',
			// 'template_wxz9lki',
			// toSend,
			// 'user_ueDJqGkpi3yp8nodYgnsk'
		)
			.then((response) => {
				alert("The form was sent correctly");
				console.log('SUCCESS!', response.status, response.text);
			})
			.catch((err) => {
				alert("The form was not submitted correctly");
				console.log('FAILED...', err);
			});
		e.target.reset()
	};

	const onChangeValueType = (e) => {
		const valor = e.target.value
		toSend.type = valor;

	}
	const handleArticulos = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.SportsCasinoHorses = value;

	}
	const promoVipPerHead = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.LiveBettin = value;

	}
	const bonoSportsbbok = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.LiveBettin = value;

	}
	const alertLesiones = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.LiveCasino = value;

	}
	const alertResultados = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.DynamicBetting = value;
	}
	const equiposNFL = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.equipos_nfl.push(target.value)
	}
	const equiposNBA = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.equipos_nba.push(target.value)
	}
	const equiposMLB = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.equipos_mlb.push(target.value)
	}
	const equiposNHL = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.equipos_nhl.push(target.value)
	}
	const handlePropBuilder = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.PropBuilder = value;

	}
	let rsj = props.born;
	let rcj = rsj.slice(0,10);

	return (
		<div className="row g-0 bb1px">
			<div className="col-12 text-center mt-3">
				<h1>Bienvenido {props.name} </h1>
			</div>
			<div className="col-12 my-5">
				<p>
					Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. The semiotics of the previous century. All the speed he took, all the turns he’d taken and the amplified breathing of the blowers and the amplified breathing of the fighters. She peered at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. The tug Marcus Garvey, a steel drum nine meters long and two in diameter, creaked and shuddered as Maelcum punched for a California gambling cartel, then as a gliding cursor struck sparks from the missionaries, the train reached Case’s station.

				</p>
			</div>
			<div className="row g-0 text-start">
				<div className="col-lg-10 ">
					<div className="row fs-3">
						<div className="col-12">Nombre: {props.name}</div>
						<div className="col-12">Usuario: {props.user}</div>
						<div className="col-12">País: {props.country}</div>
						<div className="col-12">Email: {props.mail}</div>
						<div className="col-12">Fecha de Nacimiento: {rcj}</div>
						<div className="col-12">Tipo de Subscripción: {props.subscription}</div>
					</div>
					<div className="col-12 py-5">
						<p>Its hands were holograms that altered to match the convolutions of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes
						</p>
					</div>
					<div className="col-12">
						<form onSubmit={contacSend}>
							<div className="row g-0">
								<div className="col-lg-12">
									<div className="row g-0" onChange={onChangeValueType}>
										<div className="col-6">
											<div className="form-check py-2">
												<div className="form-check py-2">
													<input className="form-check-input" type="checkbox" name="Sports" id="Sports" value="Sports" onChange={handleArticulos} />
													<label className="form-check-label" htmlFor="Sports">
														Articulos Deportivos
													</label>
												</div>
												<div className="form-check py-2">
													<input className="form-check-input" type="checkbox" name="LiveBettin" id="LiveBettin" value="Live Bettin" onChange={promoVipPerHead} />
													<label className="form-check-label" htmlFor="LiveBettin">
														Promociones Especiales de Per Head
													</label>
												</div>
												<div className="form-check py-2">
													<input className="form-check-input" type="checkbox" name="LiveBettin" id="LiveBettin" value="Live Bettin" onChange={bonoSportsbbok} />
													<label className="form-check-label" htmlFor="LiveBettin">
														Bonos Especiales de Sportsbooks
													</label>
												</div>
												<div className="form-check py-2">
													<input className="form-check-input" type="checkbox" name="LiveCasino" id="LiveCasino" value="Live Casino" onChange={alertLesiones} />
													<label className="form-check-label" htmlFor="LiveCasino">
														Alertas de Lesiones
													</label>
												</div>
											</div>
										</div>
										<div className="col-6">
											<div className="form-check py-2">
												<input className="form-check-input" type="checkbox" name="DynamicBetting" id="DynamicBetting" value="Dynamic Betting" onChange={alertResultados} />
												<label className="form-check-label" htmlFor="DynamicBetting">
													Alertas de Resultados
												</label>
											</div>
											<div className="form-check py-2">
												<input className="form-check-input" type="checkbox" name="PropBuilder" id="PropBuilder" value="Prop Builder" onChange={handlePropBuilder} />
												<label className="form-check-label" htmlFor="PropBuilder">
													Alertas de Podcast(Lineas del Día - Lineas de la Semana)
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 text-center ps-1">
									<div className="col-12">
										<h3>Equipos para Alertas</h3>
									</div>
									<div className="col-12">
										<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
											<li className="nav-item col " role="presentation">
												<button className="nav-link active" id="pills-nfl-tab" data-bs-toggle="pill" data-bs-target="#pills-nfl" type="button" role="tab" aria-controls="pills-nfl" aria-selected="true">NFL</button>
											</li>
											<li className="nav-item col " role="presentation">
												<button className="nav-link" id="pills-nba-tab" data-bs-toggle="pill" data-bs-target="#pills-nba" type="button" role="tab" aria-controls="pills-nba" aria-selected="false">NBA</button>
											</li>
											<li className="nav-item col " role="presentation">
												<button className="nav-link" id="pills-mlb-tab" data-bs-toggle="pill" data-bs-target="#pills-mlb" type="button" role="tab" aria-controls="pills-mlb" aria-selected="false">MLB</button>
											</li>
											<li className="nav-item col " role="presentation">
												<button className="nav-link" id="pills-NHL-tab" data-bs-toggle="pill" data-bs-target="#pills-NHL" type="button" role="tab" aria-controls="pills-NHL" aria-selected="false">NHL</button>
											</li>
										</ul>
										<div className="tab-content p-2" id="pills-tabContent">
											<div className="tab-pane fade show active" id="pills-nfl" role="tabpanel" aria-labelledby="pills-nfl-tab">
												<div className="row g-0">

													{
														store.nfl_teams.map((index,item) => {
															return (
																<div className="col-2" key={item}>
																	<div className="form-check py-2">
																		<input className="form-check-input" type="checkbox" name="equiposNFL" id="equiposNFL" value={index} onChange={equiposNFL} />
																		<label className="form-check-label" value={index} htmlFor="equiposNFL">
																			{index}
																		</label>
																	</div>
																</div>
															)
														})
													}
												</div>
											</div>
											<div className="tab-pane fade" id="pills-nba" role="tabpanel" aria-labelledby="pills-nba-tab">
												<div className="row g-0">
													{
														store.nba_teams.map((index , item) => {
															return (
																<div className="col-2" key={item}>
																	<div className="form-check py-2">
																		<input className="form-check-input"  type="checkbox" name="equiposNBA" id="equiposNBA" value={index} onChange={equiposNBA} />
																		<label className="form-check-label" value={index} htmlFor="equiposNBA">
																			{index}
																		</label>
																	</div>
																</div>
															)
														})
													}
												</div>
											</div>
											<div className="tab-pane fade" id="pills-mlb" role="tabpanel" aria-labelledby="pills-mlb-tab">
												<div className="row g-0">
													{
														store.mlb_teams.map((index , item) => {
															return (
																<div className="col-2" key={item}>
																	<div className="form-check py-2">
																		<input className="form-check-input" type="checkbox" name="equiposMLB" id="equiposMLB" value={index} onChange={equiposMLB} />
																		<label className="form-check-label" value={index} htmlFor="equiposMLB">
																			{index}
																		</label>
																	</div>
																</div>
															)
														})
													}
												</div>
											</div>
											<div className="tab-pane fade" id="pills-NHL" role="tabpanel" aria-labelledby="pills-mlb-tab">
												<div className="row g-0">
													{
														store.nhl_teams.map((index, item) => {
															return (
																<div className="col-2" key={item}>
																	<div className="form-check py-2">
																		<input className="form-check-input" type="checkbox" name="equiposNHL" id="equiposNHL" value={index} onChange={equiposNHL} />
																		<label className="form-check-label" value={index} htmlFor="equiposNHL">
																			{index}
																		</label>
																	</div>
																</div>
															)
														})
													}
												</div>
											</div>
										</div>
									</div>
									<div className="col-12">

									</div>
								</div>
								<div className="col-12 text-end py-5">
									<button className="btn btn_gradient" type="submit">Enviar</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="col-lg-2">
					<div className="col-12 py-2">
						<img className="img-fluid" src={imge} alt="imagen de perfil"></img>
					</div>
				</div>

			</div>
		</div>
	)
};
Single_Usuario.propTypes = {
	id: PropTypes.number,
	mail: PropTypes.string,
	name: PropTypes.string,
	user: PropTypes.string,
	country: PropTypes.string,
	born: PropTypes.string,
	subscription: PropTypes.string,
};
