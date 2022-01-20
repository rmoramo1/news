import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/

import Loader from './components/loader';
const Home = lazy(() => import('./pages/home'));


/*components*/


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
