import React from 'react';
import { Link } from 'react-router-dom';

export const Stadings_Home_Btns = () => {
    return (
        <div className="col-12">
            <div className="col-12 text-center font_impact fs-3 ">
                <i className="fa-solid fa-chart-column font_color_base"></i> Clasificación
            </div>
            <div className="col-12 text-center py-3">
                <div className="row">
                    <div className="col-6">
                        <Link to="/nfl_team_stats" className="btn_gradient_light">NFL</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/nba_team_stats" className="btn_gradient_light">NBA</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <Link to="/mlb_team_stats" className="btn_gradient_light">MLB</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/nhl_team_stats" className="btn_gradient_light">NHL</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
