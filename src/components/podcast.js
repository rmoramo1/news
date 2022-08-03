import React from 'react';
import { Link } from "react-router-dom";

export const Podcast = () => {
    return (
        <div className='col-12 font_impact fs-3 text-center'>
            <Link className="text-decoration-none">
                <span className="font_color_base "><i className="fa-solid fa-microphone-lines"></i></span> <span className="">Podcast</span>
            </Link>
        </div>
    )
}
