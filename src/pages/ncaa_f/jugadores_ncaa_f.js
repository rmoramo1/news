import React from 'react';

import NCAA_Football_PY_Stats from '../../display_lines/ncaa/ncaa_football_py_stats';

function Jugadores_NCAA_F() {
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <NCAA_Football_PY_Stats/>
            </div>
        </div>
    )
}
export default Jugadores_NCAA_F;
