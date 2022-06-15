import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadPlanets(); <---- calling this function from the flux.js actions
			 *
			 **/
			state.actions.logos_nfl();
			state.actions.props();
			//nfl
			state.actions.nfl();
			state.actions.nfl_team_stats();
			state.actions.nfl_player_offensive_stats();
			state.actions.nfl_player_deffensive_stats();
			state.actions.nfl_player_returning_stats();
			state.actions.nfl_player_punting_stats();
			state.actions.nfl_player_kicking_stats();
			state.actions.injuries();
			state.actions.futures();
			//ncaa_football
			state.actions.ncaa_football();
			state.actions.stats_ncaa_football_team();
			state.actions.stats_offensive_player_ncaa_football();
			state.actions.stats_defensive_player_ncca_football();
			state.actions.stats_returning_player_ncaa_football();
			state.actions.stats_punting_player_ncaa_football();
			state.actions.stats_kiking_player_ncaa_football();
			//nba
			state.actions.logos_nba();
			state.actions.nba_games();
			state.actions.stats_nba_team();
			state.actions.stats_nba_player();
			//ncaa basket
			state.actions.ncaa_basket_games();
			state.actions.stats_ncaa_basket_team();
			state.actions.stats_ncaa_basket_player();
			//mlb
			state.actions.logos_mlb();
			state.actions.mlb();
			state.actions.stats_mlb_team();
			state.actions.stats_mlb_player();
			//ncaa_baseball
			state.actions.ncaa_baseball();
			state.actions.stats_ncaa_baseball_team();
			state.actions.stats_ncaa_baseball_player();
			//nhl
			state.actions.logos_nhl();
			state.actions.nhl();
			state.actions.stats_nhl_team();
			state.actions.stats_nhl_player();
			//golf
			state.actions.golf();
			state.actions.golfer();
			//nascar	
			state.actions.nascar();
			state.actions.nascar_drivers();
			//moto_gp	
			state.actions.moto_gp();
			state.actions.moto_gp_drivers();
			//boxeo
			state.actions.boxeo();
			state.actions.stats_box_fighter();
			//mma
			state.actions.mma();
			state.actions.stats_mma_fighter();
			//soccer
			state.actions.soccer();
			state.actions.stats_soccer_team();
			state.actions.logos_soccer();
			state.actions.stats_soccer_player();
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
