import React from 'react';
import { Link } from 'react-router-dom';

export const Lines_Span_Home = () => {
    return (
        <div className="col-12">
            <div className="col-12 text-center font_impact fs-3 ">
                <i className="fa-solid fa-bullseye font_color_base"></i> Lineas
            </div>
            <div className="col-12 text-center py-3">
                <div className="row">
                    <div className="col-6">
                        <Link to="/nfl_all_data" className="btn_gradient_light">NFL</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/nba_all_data" className="btn_gradient_light">NBA</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <Link to="/mlb_all_data" className="btn_gradient_light">MLB</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/nhl_all_data" className="btn_gradient_light">NHL</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
