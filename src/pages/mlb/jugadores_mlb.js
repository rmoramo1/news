import React from 'react';

import MLB_PY_STATS from '../../display_lines/mlb/mlb_py_stats';

function Jugadores_MLB() {
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <MLB_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_MLB;
