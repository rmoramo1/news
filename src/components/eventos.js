import React from 'react';
import { Link } from 'react-router-dom';

export const Eventos = () => {
    return (
        <div>
            <div className='col-12 font_impact fs-3 text-center'>
                <span className="font_color_base"><i className="fa-solid fa-medal"></i></span> <span className="">MATCHUPS</span>
            </div>
            <div className="col-12 text-center py-3">
                <div className="row">
                    <div className="col-6">
                        <Link to="/box_fight" data-bs-dismiss="offcanvas" className="btn_gradient_light">BOX</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/nascar_runs" data-bs-dismiss="offcanvas" className="btn_gradient_light">NASCAR</Link>
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-6">
                        <Link to="/mma_fight" data-bs-dismiss="offcanvas" className="btn_gradient_light">MMA</Link>
                    </div>
       
                    <div className="col-6">
                        <Link to="/moto_gp_runs" data-bs-dismiss="offcanvas" className="btn_gradient_light">MOTO GP</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6 mx-auto">
                        <Link to="/golf_games" data-bs-dismiss="offcanvas" className="btn_gradient_light">GOLF</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
