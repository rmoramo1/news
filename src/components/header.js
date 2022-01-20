import React from "react";
import logo from '../assets/img/logo.webp'
export const Header =()=>{
    return(
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-3 text-center">
                    <img src={logo} alt="logo of the site" className="logo"></img>
                </div>
                <div className="col-lg-9"></div>
            </div>
        </div>
    )
}