import React from 'react';
import PropTypes from "prop-types";

  export const Single_Injurie = props => {
    return (
        <div className="row g-0 bb1px">
            <div className="row g-0 text-center">
                <div className="col">
                    {props.team}
                </div>
                <div className="col">
                    {props.name_player}
                </div>
                <div className="col">
                    {props.injurie}
                </div>
                <div className="col">
                    {props.date}
                </div>
                <div className="col">
                    {props.time_injurie}
                </div>
            </div>
        </div>
    )
};
Single_Injurie.propTypes = {
    id: PropTypes.number,
    name_player: PropTypes.string,
    team: PropTypes.string,
    injurie: PropTypes.string,
    headshot: PropTypes.string,
    date: PropTypes.string,
    time_injurie: PropTypes.string,
    sport: PropTypes.string,
};
