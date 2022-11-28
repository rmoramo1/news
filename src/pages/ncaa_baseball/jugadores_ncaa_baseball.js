import React from 'react';

import NCAAA_BASEBALL from '../../display_lines/ncaa_baseball/ncaa_baseball_py_stats'

function Jugadores_NCAA_Baseball() {
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white mh_display">
                <NCAAA_BASEBALL/>
            </div>
        </div>
    )
}
export default Jugadores_NCAA_Baseball;
