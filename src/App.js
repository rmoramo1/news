import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

//import { Offensive_Player_Stats } from './lines/nfl_py_stats/offensive_py';

import { Header } from './components/header';
/* pages*/
import Loader from './components/loader';
const Home = lazy(() => import('./pages/home'));
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
						<Route>
							<Error/>
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
	