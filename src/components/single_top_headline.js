import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Top_Headline = props => {
    return (
        <div className="col-12 p-2 mt-2 bb_resultados text-start">
            -<Link className="font_destacado text-decoration-none" to={`/new/${props.id}`}>{props.h1}</Link>
        </div>
    )
};
Single_Top_Headline.propTypes = {
    h1: PropTypes.string,
};
