import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

//import { Offensive_Player_Stats } from './lines/nfl_py_stats/offensive_py';

import { Header } from './components/header';
import { Footer } from './components/footer';
/* pages*/
import Loader from './components/loader';
const Home = lazy(() => import('./pages/home'));
/*nfl */
const Nfl_Inicio = lazy(() => import('./pages/nfl/nfl_inicio'));
const Results_Nfl = lazy(() => import('./display_lines/nfl/results_nfl'));
const Jugadores_NFL = lazy(() => import('./pages/nfl/jugadores_nfl'));
const Offensive_Player_Stats = lazy(() => import('./lines/nfl_py_stats/offensive_py'));
const Deffensive_Player_Stats = lazy(() => import('./lines/nfl_py_stats/deffensive_py'));
const Returning_Player_Stats = lazy(() => import('./lines/nfl_py_stats/returning_py'));
const Punting_Player_Stats = lazy(() => import('./lines/nfl_py_stats/punting_py'));
const Kicking_Player_Stats = lazy(() => import('./lines/nfl_py_stats/kicking_py'));
const Nfl_All_Data = lazy(() => import('./display_lines/nfl/nfl_all_data'));
const Nfl_Team_stats = lazy(() => import('./display_lines/nfl/nfl_team_stats'));
/*nba*/
const NBA_Inicio = lazy(() => import('./pages/nba/nba_inicio'));
const Results_NBA = lazy(() => import('./display_lines/nba/results_nba'));
const Jugadores_NBA = lazy(() => import('./pages/nba/jugadores_nba'));
const NBA_Player_Stats = lazy(() => import('./lines/nba_py_st'));
const NBA_All_Data = lazy(() => import('./display_lines/nba/nba_all_data'));
const Nba_Games = lazy(() => import('./display_lines/nba/nba_games'));
const NBA_Team_stats_display = lazy(() => import('./display_lines/nba/nba_team_stats'));
//wnba
const WNBA_Inicio = lazy(()=>import('./pages/wnba/wnba_inicio'));
const WNBA_All_Data = lazy(()=>import('./display_lines/wnba/wnba_all_data'));
const WNBA_Team_stats_display =lazy(()=>import('./display_lines/wnba/wnba_team_stats'));
const Jugadores_WNBA = lazy(()=>import('./pages/wnba/jugadores_wnba'));
const WNBA_Player_Stats = lazy(()=>import('./lines/wnba_py_st'));
/*MLB */
const MLB_Inicio = lazy(() => import('./pages/mlb/mlb_inicio'));
const Results_MLB = lazy(() => import('./display_lines/mlb/results_mlb'));
const Jugadores_MLB = lazy(() => import('./pages/mlb/jugadores_mlb'));
const Mlb_py_st = lazy(() => import('./lines/mlb_py_st'));
const MLB_All_Data = lazy(() => import('./display_lines/mlb/mlb_all_data'));
const MLB_Games = lazy(() => import('./display_lines/mlb/mbl_games'));
const MLB_Team_stats_display = lazy(() => import('./display_lines/mlb/mlb_team_stats'));
// base ball mexico
const Bs_Mexico_Inicio = lazy (()=>import('./pages/baseball_mexico/bs_mexico_inicio'));
const BS_MX_All_Data = lazy(()=>import('./display_lines/baseball_mexico/bs_mx__all_data'));
const BS_MX_Team_stats_display = lazy(()=>import('./display_lines/baseball_mexico/bs_mx_team_stats_display'));
const Jugadores_BS_MX = lazy(()=>import('./pages/baseball_mexico/jugadores_baseball_mexico'));
const BS_MX_py_st = lazy(()=>import('./lines/bs_mx_py_st'));
/*nhl */
const NHL_Inicio = lazy(() => import('./pages/nhl/nhl_inicio'));
const Results_NHL = lazy(() => import('./display_lines/hockey/results_nhl'));
const Jugadores_NHL = lazy(() => import('./pages/nhl/jugadores_nhl'));
const NHL_py_st = lazy(() => import('./lines/nhl_py_st'));
const NHL_All_Data = lazy(() => import('./display_lines/hockey/nhl_all_data'));
const NHL_Games = lazy(() => import('./display_lines/hockey/nhl_games'));
const NHL_Team_stats_display = lazy(() => import('./display_lines/hockey/nhl_team_stats'));
// soccer
const Soccer_Inicio = lazy(()=>import('./pages/soccer/soccer_inicio'));
const Soccer_All_Data =lazy(()=>import('./display_lines/soccer/soccer_all_data'));
/*mma */
const MMA_Inicio = lazy(() => import('./pages/mma/mma_inicio'));
const MMA_PY_STATS = lazy(() => import('./display_lines/mma/mma_py_stats'));
const MMA_lines = lazy(() => import('./lines/mma_lines'));
const MMA_st = lazy(() => import('./lines/mma_st'));
const MMA_Event = lazy(() => import('./display_lines/mma/mma_fight'));
/*box */
const BOXING_Inicio = lazy(() => import('./pages/boxing/boxing_inicio'));
const Boxer_PY_STATS = lazy(() => import('./display_lines/box/boxer_py_stats'));
const BOX_lines = lazy(() => import('./lines/box_lines'));
const Boxer_st = lazy(() => import('./lines/boxer_st'));
const Box_Event = lazy(() => import('./display_lines/box/box_fight'));
/*ncaa foot */
const NCAA_F_Inicio = lazy(() => import('./pages/ncaa_f/ncaa_f_inicio'));
const Ncaa_Football_Team_stats = lazy(() => import('./display_lines/ncaa/ncaa_football_team_stats'));
const Jugadores_NCAA_F = lazy(() => import('./pages/ncaa_f/jugadores_ncaa_f'));
const NCAA_Football_All_Data = lazy(() => import('./display_lines/ncaa/ncaa_football_all_data'));
const Offensive_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/offensive_player_stats_ncaa'));
const Single_Defensive_PY_Ncaa = lazy(() => import('./lines/ncaa_py_stats/deffensive_player_stats_ncaa'));
const Returning_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/returning_player_stats_ncaa'));
const Punting_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/punting_player_stats_ncaa'));
const Kicking_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/kicking_player_stats_ncaa'));
/*ncaa basket */
const NCAA_BASKET_Inicio = lazy(() => import('./pages/ncaa_basket/ncaa_basket_inicio'));
const NCAA_BASKET_Team_stats_display = lazy(() => import('./display_lines/ncaa_basket/ncaa_basket_team_stats'));
const Jugadores_NCAA_Basket = lazy(() => import('./pages/ncaa_basket/jugadores_ncaa_basket'));
const NCAA_BASKET_Player_Stats = lazy(() => import('./lines/ncaa_basket_py'));
const Ncaa_Basket_All_Data = lazy(() => import('./display_lines/ncaa_basket/ncaa_basketball_all_data'));
/*ncaa baseball */
const NCAA_BASEBALL_Inicio = lazy(()=>import('./pages/ncaa_baseball/ncaa_baseball_inicio'));
const NCAA_BASEBALL_Team_stats_display = lazy(()=>import('./display_lines/ncaa_baseball/ncaa_baseball_team_stats'));
const Ncaa_Baseball_py_st = lazy(() => import('./lines/ncaa_baseball_py_st'));
const Jugadores_NCAA_Baseball = lazy(()=>import('./pages/ncaa_baseball/jugadores_ncaa_baseball'));
const NCAA_BASEBALL_All_Data = lazy(() => import('./display_lines/ncaa_baseball/ncaa_baseball_all_data'));
/*golf */
const Golf_Inicio = lazy(() => import('./pages/golf/golf_inicio'));
const Golfer_st = lazy(() => import('./lines/golfer_st'));
const Golf_Event = lazy(() => import('./lines/golf_event'));
const GOLF_Games = lazy(() => import('./display_lines/golf/golf_games'));
const Golfer_PY_STATS = lazy(()=>import('./display_lines/golf/golf_py_stats'));
// tenis
const Tennis_Inicio = lazy(()=>import('./pages/tennis/tennis_inicio'));
const Tennis_Games = lazy (()=>import('./display_lines/tennis/tennis_games'));
const Tennis_event = lazy(()=>import('./lines/tennis_event'));
const Tennista_STATS = lazy(()=>import('./display_lines/tennis/tennista_stats'));
const Tenista = lazy(()=>import('./lines/tenista'));
/*nascar */
const Nascar_Inicio = lazy(()=>import('./pages/nascar/nascar_inicio'));
const Nascar_Driver_Stats = lazy(() => import('./lines/nascar_driver_st'));
const Nascar_Race = lazy(() => import('./lines/nascar_race'));
const Nascar_Runs = lazy(() => import('./display_lines/nascar/nascar_runs'));
const NASCAR_PY_STATS = lazy(()=>import('./display_lines/nascar/nascar_py_stats'));
/*moto */
const Moto_GP_Inicio = lazy(()=>import('./pages/moto_gp/moto_gp_inicio'));
const Moto_GP_PY_STATS = lazy(() => import('./lines/moto_gp_driver_st'));
const Moto_GP_Race = lazy(() => import('./lines/moto_gp_race'));
const Moto_GP_Runs = lazy(() => import('./display_lines/moto_gp/moto_gp_runs'));
/*soccer */
const SOCCER_py_st = lazy(() => import('./lines/soccer_py_st'));
const Soccer_Team_stats_display = lazy(()=>import('./display_lines/soccer/soccer_team_stats'));
const Results_SOCCER = lazy(()=>import('./display_lines/soccer/results_soccer'));
/*noticias */
const Noticia_Individual = lazy(() => import('./noticias/new'));
/* odds */
const Odds_To_Win = lazy(() => import('./display_lines/globals/odds_to_win'));
/*erroer*/
const Error = lazy(() => import('./pages/404'));
// lineas generales
const Lineas_Generales =lazy(()=>import('./pages/lineas_generales'));
// registro
const Registro = lazy(()=>import('./pages/registro'));
//perfil
const Perfil = lazy(()=>import('./pages/perfil'));
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						{/* nfl */}
						<Route path="/nfl_inicio" component={Nfl_Inicio} />
						<Route path="/results_nfl" component={Results_Nfl} />
						<Route path="/jugadores_nfl" component={Jugadores_NFL} />
						<Route path="/nfl_all_data" component={Nfl_All_Data} />
						<Route path="/nfl_team_stats" component={Nfl_Team_stats} />
						<Route path="/offensive_py/:theid" component={Offensive_Player_Stats} />
						<Route path="/deffensive_py/:theid" component={Deffensive_Player_Stats} />
						<Route path="/returning_py/:theid" component={Returning_Player_Stats} />
						<Route path="/punting_py/:theid" component={Punting_Player_Stats} />
						<Route path="/kicking_py/:theid" component={Kicking_Player_Stats} />
						{/* nba */}
						<Route path="/nba_inicio" component={NBA_Inicio} />
						<Route path="/results_nba" component={Results_NBA} />
						<Route path="/jugadores_nba" component={Jugadores_NBA} />
						<Route path="/nba_all_data" component={NBA_All_Data} />
						<Route path="/nba_games" component={Nba_Games} />
						<Route path="/nba_team_stats" component={NBA_Team_stats_display} />
						<Route path="/wnba_team_stats" component={WNBA_Team_stats_display} />
						<Route path="/nba_py_st/:theid" component={NBA_Player_Stats} />
						{/* wnba */}
						<Route path="/wnba_inicio" component={WNBA_Inicio} />
						<Route path="/wnba_all_data" component={WNBA_All_Data} />
						<Route path="/jugadores_wnba" component={Jugadores_WNBA} />
						<Route path="/wnba_py_st/:theid" component={WNBA_Player_Stats} />
						{/* wnba */}
						{/* mlb */}
						<Route path="/mlb_inicio" component={MLB_Inicio} />
						<Route path="/results_mlb" component={Results_MLB} />
						<Route path="/jugadores_mlb" component={Jugadores_MLB} />
						<Route path="/mlb_all_data" component={MLB_All_Data} />
						<Route path="/mlb_games" component={MLB_Games} />
						<Route path="/mlb_team_stats" component={MLB_Team_stats_display} />
						<Route path="/mlb_py_st/:theid" component={Mlb_py_st} />
						{/* baseball mexico */}
						<Route path="/bs_mexico_inicio" component={Bs_Mexico_Inicio} />
						<Route path="/bs_mx__all_data" component={BS_MX_All_Data} />
						<Route path="/bs_mx_team_stats_display" component={BS_MX_Team_stats_display} />
						<Route path="/jugadores_baseball_mexico" component={Jugadores_BS_MX} />
						<Route path="/bs_mx_py_st/:theid" component={BS_MX_py_st} />
						{/* nhl */}
						<Route path="/nhl_inicio" component={NHL_Inicio} />
						<Route path="/results_nhl" component={Results_NHL} />
						<Route path="/jugadores_nhl" component={Jugadores_NHL} />
						<Route path="/nhl_all_data" component={NHL_All_Data} />
						<Route path="/nhl_games" component={NHL_Games} />
						<Route path="/nhl_team_stats" component={NHL_Team_stats_display} />
						<Route path="/nhl_py_st/:theid" component={NHL_py_st} />
						{/* soccer */}
						<Route path="/soccer_inicio" component={Soccer_Inicio} />
						<Route path="/soccer_all_data" component={Soccer_All_Data} />


						{/* mma */}
						<Route path="/mma_inicio" component={MMA_Inicio} />
						<Route path="/mma_py_stats" component={MMA_PY_STATS} />
						<Route path="/mma_fight" component={MMA_Event} />
						<Route path="/mma_lines/:theid" component={MMA_lines} />
						<Route path="/mma_st/:theid" component={MMA_st} />
						{/* box */}
						<Route path="/boxing_inicio" component={BOXING_Inicio} />
						<Route path="/boxer_py_stats" component={Boxer_PY_STATS} />
						<Route path="/box_fight" component={Box_Event} />
						<Route path="/box_lines/:theid" component={BOX_lines} />
						<Route path="/boxer_st/:theid" component={Boxer_st} />
						{/* ncaa football */}
						<Route path="/ncaa_f_inicio" component={NCAA_F_Inicio} />
						<Route path="/ncaa_football_all_data" component={NCAA_Football_All_Data} />
						<Route path="/jugadores_ncaa_f" component={Jugadores_NCAA_F} />
						<Route path="/ncaa_football_team_stats" component={Ncaa_Football_Team_stats} />
						<Route path="/offensive_player_stats_ncaa/:theid" component={Offensive_Player_Stats_Ncaa} />
						<Route path="/deffensive_player_stats_ncaa/:theid" component={Single_Defensive_PY_Ncaa} />
						<Route path="/returning_player_stats_ncaa/:theid" component={Returning_Player_Stats_Ncaa} />
						<Route path="/punting_player_stats_ncaa/:theid" component={Punting_Player_Stats_Ncaa} />
						<Route path="/kicking_player_stats_ncaa/:theid" component={Kicking_Player_Stats_Ncaa} />
						{/*ncaa Basket  */}
						<Route path="/ncaa_basket_inicio" component={NCAA_BASKET_Inicio} />
						<Route path="/ncaa_basket_team_stats" component={NCAA_BASKET_Team_stats_display} />
						<Route path="/jugadores_ncaa_basket" component={Jugadores_NCAA_Basket} />
						<Route path="/ncaa_basketball_all_data" component={Ncaa_Basket_All_Data} />
						<Route path="/ncaa_basket_py/:theid" component={NCAA_BASKET_Player_Stats} />
						{/* ncaa baseball */}
						<Route path="/ncaa_baseball_all_data" component={NCAA_BASEBALL_All_Data} />
						<Route path="/ncaa_baseball_inicio" component={NCAA_BASEBALL_Inicio} />
						<Route path="/jugadores_ncaa_baseball" component={Jugadores_NCAA_Baseball} />
						<Route path="/ncaa_baseball_team_stats" component={NCAA_BASEBALL_Team_stats_display} />
						<Route path="/ncaa_baseball_py_st/:theid" component={Ncaa_Baseball_py_st} />
						{/* golf */}
						<Route path="/golf_inicio" component={Golf_Inicio} />
						<Route path="/golf_games" component={GOLF_Games} />
						<Route path="/golf_py_stats" component={Golfer_PY_STATS} />
						<Route path="/golfer_st/:theid" component={Golfer_st} />
						<Route path="/golf_event/:theid" component={Golf_Event} />
						{/* tenis */}
						<Route path="/tennis_inicio" component={Tennis_Inicio} />
						<Route path="/tennis_games" component={Tennis_Games} />
						<Route path="/tennista_stats" component={Tennista_STATS} />
						<Route path="/tennis_event/:theid" component={Tennis_event} />
						<Route path="/tenista/:theid" component={Tenista} />
						{/* nascar */}
						<Route path="/nascar_inicio" component={Nascar_Inicio} />
						<Route path="/nascar_runs" component={Nascar_Runs} />
						<Route path="/nascar_py_stats" component={NASCAR_PY_STATS} />
						<Route path="/nascar_driver_st/:theid" component={Nascar_Driver_Stats} />
						<Route path="/nascar_race/:theid" component={Nascar_Race} />
						{/* moto */}
						<Route path="/moto_gp_inicio" component={Moto_GP_Inicio} />
						<Route path="/moto_gp_runs" component={Moto_GP_Runs} />
						<Route path="/moto_gp_driver_stats/:theid" component={Moto_GP_PY_STATS} />
						<Route path="/moto_gp_race/:theid" component={Moto_GP_Race} />
						{/* soccer */}
						<Route path="/soccer_py_st/:theid" component={SOCCER_py_st} />
						<Route path="/soccer_team_stats" component={Soccer_Team_stats_display} />
						<Route path="/results_soccer" component={Results_SOCCER} />
						{/* noticias */}
						<Route path="/new/:theid" component={Noticia_Individual} />
						{/* odds */}
						<Route path="/odds_to_win/:theid" component={Odds_To_Win} />
						{/* lineas_generales */}
						<Route path="/lineas_generales" component={Lineas_Generales} />
						<Route path="/registro" component={Registro} />
						<Route path="/perfil" component={Perfil} />
						<Route>
							<Error />
						</Route>
					</Switch>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
