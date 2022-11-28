import React from 'react';

import MMA_PY_STATS from '../../display_lines/mma/mma_py_stats';

function Peleadores_MMA() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <MMA_PY_STATS/>
            </div>
        </div>
    )
}
export default Peleadores_MMA;
