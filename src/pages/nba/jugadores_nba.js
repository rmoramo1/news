import React from 'react';

import NBA_PY_STATS from '../../display_lines/nba/nba_py_stats';

function Jugadores_NBA() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <NBA_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_NBA;
