import React from 'react';

import BS_MX_PY_STATS from '../../display_lines/baseball_mexico/bs_mx_py_stats';

function Jugadores_BS_MX() {
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <BS_MX_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_BS_MX;
