import React from 'react';
import PY_STATS from '../../display_lines/nfl/py_stats';

function Jugadores_NFL() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_NFL;
