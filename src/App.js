import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

//import { Offensive_Player_Stats } from './lines/nfl_py_stats/offensive_py';

import { Header } from './components/header';
/* pages*/
import Loader from './components/loader';
const Home = lazy(() => import('./pages/home'));
const Offensive_Player_Stats = lazy(() => import('./lines/nfl_py_stats/offensive_py'));


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
	