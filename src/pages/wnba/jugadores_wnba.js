import React from 'react';

import WNBA_PY_STATS from '../../display_lines/wnba/wnba_py_stats';

function Jugadores_WNBA() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <WNBA_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_WNBA;
