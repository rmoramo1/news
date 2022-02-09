import React from "react";
import logo from '../assets/img/logo.webp';
import { Link } from "react-router-dom";
export const Header =()=>{
    return(
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-3 text-center">
                    <Link to="/">
                        <img src={logo} alt="logo of the site" className="logo"></img>
                    </Link>
                </div>
                <div className="col-lg-9"></div>
            </div>
        </div>
    )
}