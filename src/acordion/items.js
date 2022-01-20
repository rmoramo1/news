import React from "react";
import { NFL_ITEMS } from "./football_tabs/nfl_tabs/nfl_items";
import { NCAA_ITEMS } from "./football_tabs/ncaa_football/ncaa_foot_items";

import {NBA_ITEMS} from "./basketball_tabs/nba_tabs/nba_items";
import { NCAA_BASKET_ITEMS } from "./basketball_tabs/ncaa_basket_tabs/ncaa_basket_items";

import { NCAA_BASEBALL_ITEMS } from "./baseball_tabs/ncaa_baseball_tabs/ncaa_baseball_items";
import { MLB_ITEMS } from "./baseball_tabs/mlb_tabs/mlb_items";

import { HOCKEY_ITEMS } from "./hockey_tabs/hockey_items";

import { GOlf_ITEMS } from "./golf_tabs/golf_items";

import { RACING_ITEMS } from "./racing_tabs/racing_items";

import { BOX_ITEMS } from "./marcial_arts_tabs/box_tabs/box_items";
import { MMA_ITEMS } from "./marcial_arts_tabs/mma_tabs/mma_items";

import { SOCCER_ITEMS } from "./soccer_tabs/soccer_items";

export const Items = () => {
    return (
        <div id="items_tab_master">
            <NFL_ITEMS/>
            <NCAA_ITEMS/>
            <NBA_ITEMS/>
            <NCAA_BASKET_ITEMS/>
            <NCAA_BASEBALL_ITEMS/>
            <MLB_ITEMS/>
            <HOCKEY_ITEMS/>
            <GOlf_ITEMS/>
            <RACING_ITEMS/>
            <BOX_ITEMS/>
            <MMA_ITEMS/>
            <SOCCER_ITEMS/>
        </div>
    )
}