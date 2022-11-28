import React from 'react';
import NHL_PY_STATS from '../../display_lines/hockey/nhl_py_stats';

function Jugadores_NHL() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <NHL_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_NHL;
