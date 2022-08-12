import React from 'react';

import Boxer_PY_STATS from '../../display_lines/box/boxer_py_stats';

function Nascar_Drivers() {
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <Boxer_PY_STATS/>
            </div>
        </div>
    )
}
export default Nascar_Drivers;
