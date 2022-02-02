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
						<Route>
							<h1>Error</h1>
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
	