import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

//import { Offensive_Player_Stats } from './lines/nfl_py_stats/offensive_py';

import { Header } from './components/header';
import { Footer } from './components/footer';
/* pages*/
import Loader from './components/loader';
const Home = lazy(() => import('./pages/home'));
const Nfl_Inicio = lazy(()=>import('./pages/nfl/nfl_inicio'));

const Offensive_Player_Stats = lazy(() => import('./lines/nfl_py_stats/offensive_py'));
const Deffensive_Player_Stats = lazy(() => import('./lines/nfl_py_stats/deffensive_py'));
const Returning_Player_Stats = lazy(() => import('./lines/nfl_py_stats/returning_py'));
const Punting_Player_Stats = lazy(() => import('./lines/nfl_py_stats/punting_py'));
const Kicking_Player_Stats = lazy(() => import('./lines/nfl_py_stats/kicking_py'));
const Offensive_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/offensive_player_stats_ncaa'));
const Single_Defensive_PY_Ncaa = lazy(() => import('./lines/ncaa_py_stats/deffensive_player_stats_ncaa'));
const Returning_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/returning_player_stats_ncaa'));
const Punting_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/punting_player_stats_ncaa'));
const Kicking_Player_Stats_Ncaa = lazy(() => import('./lines/ncaa_py_stats/kicking_player_stats_ncaa'));
const NBA_Player_Stats = lazy(() => import('./lines/nba_py_st'));
const NCAA_BASKET_Player_Stats = lazy(() => import('./lines/ncaa_basket_py'));
const Mlb_py_st = lazy(() => import('./lines/mlb_py_st'));
const Ncaa_Baseball_py_st = lazy(() => import('./lines/ncaa_baseball_py_st'));
const NHL_py_st = lazy(() => import('./lines/nhl_py_st'));
const Golfer_st = lazy(() => import('./lines/golfer_st'));
const Golf_Event = lazy(() => import('./lines/golf_event'));
const Nascar_Driver_Stats = lazy(() => import('./lines/nascar_driver_st'));
const Nascar_Race = lazy(() => import('./lines/nascar_race'));

const Moto_GP_PY_STATS = lazy(() => import('./lines/moto_gp_driver_st'));
const Moto_GP_Race = lazy(() => import('./lines/moto_gp_race'));


const BOX_lines = lazy(() => import('./lines/box_lines'));
const Boxer_st = lazy(() => import('./lines/boxer_st'));
const MMA_lines = lazy(() => import('./lines/mma_lines'));
const Odds_To_Win = lazy(() => import('./display_lines/globals/odds_to_win'));
const MMA_st = lazy(() => import('./lines/mma_st'));
const SOCCER_py_st = lazy(() => import('./lines/soccer_py_st'));
const Noticia_Individual = lazy(() => import('./noticias/new'));

const Nfl_All_Data = lazy(() => import('./display_lines/nfl/nfl_all_data'));
const NBA_All_Data = lazy(()=>import('./display_lines/nba/nba_all_data'));
const MLB_All_Data = lazy(()=>import('./display_lines/mlb/mlb_all_data'));
const NHL_All_Data =lazy(()=>import('./display_lines/hockey/nhl_all_data'));
const NCAA_Football_All_Data =lazy(()=>import('./display_lines/ncaa/ncaa_football_all_data'));
const Ncaa_Basket_All_Data = lazy(()=>import('./display_lines/ncaa_basket/ncaa_basketball_all_data'));
const NCAA_BASEBALL_All_Data = lazy(()=>import('./display_lines/ncaa_baseball/ncaa_baseball_all_data'));

const Nba_Games = lazy(() => import('./display_lines/nba/nba_games'));
const MLB_Games = lazy(() => import('./display_lines/mlb/mbl_games'));
const NHL_Games = lazy(() => import('./display_lines/hockey/nhl_games'));
const Box_Event = lazy(() => import('./display_lines/box/box_fight'));
const MMA_Event = lazy(()=> import('./display_lines/mma/mma_fight'));
const Nascar_Runs =lazy(()=>import('./display_lines/nascar/nascar_runs'));
const Moto_GP_Runs =lazy(()=>import('./display_lines/moto_gp/moto_gp_runs'));
const GOLF_Games =lazy(()=>import('./display_lines/golf/golf_games'));

const Nfl_Team_stats = lazy(() =>import('./display_lines/nfl/nfl_team_stats'));
const NBA_Team_stats_display = lazy(() =>import('./display_lines/nba/nba_team_stats'));
const MLB_Team_stats_display = lazy(() =>import('./display_lines/mlb/mlb_team_stats'));
const NHL_Team_stats_display = lazy(() =>import('./display_lines/hockey/nhl_team_stats'));


const Error = lazy(() => import('./pages/404'));

/*components*/

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Header/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route path="/nfl_inicio" component={Nfl_Inicio} />

						<Route path="/nfl_all_data" component={Nfl_All_Data} />
						<Route path="/nba_all_data" component={NBA_All_Data} />
						<Route path="/mlb_all_data" component={MLB_All_Data} />
						<Route path="/nhl_all_data" component={NHL_All_Data} />
						<Route path="/ncaa_football_all_data" component={NCAA_Football_All_Data} />
						<Route path="/ncaa_basketball_all_data" component={Ncaa_Basket_All_Data} />
						<Route path="/ncaa_baseball_all_data" component={NCAA_BASEBALL_All_Data} />

						<Route path="/nba_games" component={Nba_Games} />
						<Route path="/mlb_games" component={MLB_Games} />
						<Route path="/nhl_games" component={NHL_Games} />
						<Route path="/box_fight" component={Box_Event} />
						<Route path="/mma_fight" component={MMA_Event} />
						<Route path="/nascar_runs" component={Nascar_Runs} />
						<Route path="/moto_gp_runs" component={Moto_GP_Runs} />
						<Route path="/golf_games" component={GOLF_Games} />

						<Route path="/nfl_team_stats" component={Nfl_Team_stats} />
						<Route path="/nba_team_stats" component={NBA_Team_stats_display} />
						<Route path="/mlb_team_stats" component={MLB_Team_stats_display} />
						<Route path="/nhl_team_stats" component={NHL_Team_stats_display} />

						<Route path="/offensive_py/:theid" component={Offensive_Player_Stats} />
						<Route path="/deffensive_py/:theid" component={Deffensive_Player_Stats} />
						<Route path="/returning_py/:theid" component={Returning_Player_Stats} />
						<Route path="/punting_py/:theid" component={Punting_Player_Stats} />
						<Route path="/kicking_py/:theid" component={Kicking_Player_Stats} />
						<Route path="/offensive_player_stats_ncaa/:theid" component={Offensive_Player_Stats_Ncaa} />
						<Route path="/deffensive_player_stats_ncaa/:theid" component={Single_Defensive_PY_Ncaa} />
						<Route path="/returning_player_stats_ncaa/:theid" component={Returning_Player_Stats_Ncaa} />
						<Route path="/punting_player_stats_ncaa/:theid" component={Punting_Player_Stats_Ncaa} />
						<Route path="/kicking_player_stats_ncaa/:theid" component={Kicking_Player_Stats_Ncaa} />




						<Route path="/nba_py_st/:theid" component={NBA_Player_Stats} />
						<Route path="/ncaa_basket_py_stats/:theid" component={NCAA_BASKET_Player_Stats} />
						<Route path="/mlb_py_st/:theid" component={Mlb_py_st} />
						<Route path="/ncaa_baseball_py_st/:theid" component={Ncaa_Baseball_py_st} />
						<Route path="/nhl_py_st/:theid" component={NHL_py_st} />
						<Route path="/golfer_st/:theid" component={Golfer_st} />
						<Route path="/nascar_driver_st/:theid" component={Nascar_Driver_Stats} />
						<Route path="/box_lines/:theid" component={BOX_lines} />
						<Route path="/mma_lines/:theid" component={MMA_lines} />
						<Route path="/mma_st/:theid" component={MMA_st} />
						<Route path="/soccer_py_st/:theid" component={SOCCER_py_st} />
						<Route path="/boxer_st/:theid" component={Boxer_st} />
						<Route path="/golf_event/:theid" component={Golf_Event} />
						<Route path="/nascar_race/:theid" component={Nascar_Race} />
						<Route path="/moto_gp_driver_stats/:theid" component={Moto_GP_PY_STATS} />
						<Route path="/moto_gp_race/:theid" component={Moto_GP_Race} />
						<Route path="/odds_to_win/:theid" component={Odds_To_Win} />
						<Route path="/new/:theid" component={Noticia_Individual} />
						<Route>
							<Error/>
						</Route>
					</Switch>
					<Footer/>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
	