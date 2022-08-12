import React from 'react';

import NBA_PY_STATS from '../../display_lines/nba/nba_py_stats';
import NCAA_BASKET_PY_STATS from '../../display_lines/ncaa_basket/ncaa_basket_py_stats';

function Jugadores_NCAA_Basket() {
    return (
        <div className="container-fluid p-2">
            <div className="rounded_span shadow_spans bg-white mh_display">
                <NCAA_BASKET_PY_STATS/>
            </div>
        </div>
    )
}
export default Jugadores_NCAA_Basket;
