import React from "react";

import { Football_Tabs } from "./football_tabs/football_tabs";
import { BASKET_Tabs } from "./basketball_tabs/basket_tabs";
import { BASEBALL_Tabs } from "./baseball_tabs/baseball_tabs";
import { HOCKEY_Tabs } from "./hockey_tabs/hockey_tabs";
import { GOLF_Tabs } from "./golf_tabs/golf_tabs";
import { RACING_Tabs } from "./racing_tabs/racing_tabs";
import { MARCIAL_Tabs } from "./marcial_arts_tabs/marcial_a_tabs";
import { SOCCER_Tabs } from "./soccer_tabs/soccer_tabs";
import { Moto_gp_Tabs } from "./moto_gp_tabs/moto_gp_tabs";

export const Tabs = () => {
    return (
        <div className="col">
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="amFt">
                        <button className="accordion-button font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#american_football" aria-expanded="true" aria-controls="american_football">
                            AMERICAN FOOTBALL <i className="ps-5 fs-3 fas fa-football-ball"></i>
                        </button>
                    </h2>
                    <div id="american_football" className="accordion-collapse show" aria-labelledby="amFt" data-bs-parent="#accordion_general">
                        <Football_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            BASKETBALL <i className="ps-5 fs-3 fas fa-basketball-ball"></i>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion_general">
                        <BASKET_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            BASEBALL <i className="ps-5 fs-3 fas fa-baseball-ball"></i>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion_general">
                        <BASEBALL_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            HOCKEY <i className="ps-5 fs-3 fas fa-hockey-puck"></i>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion_general">
                        <HOCKEY_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            GOLF <i className="ps-5 fs-3 fas fa-golf-ball"></i>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion_general">
                        <GOLF_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            NASCAR <i className="ps-5 fs-3 fas fa-car"></i>
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordion_general">
                        <RACING_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTREIO">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMoto_gp" aria-expanded="false" aria-controls="collapseMoto_gp">
                            MOTO GP <i className="ps-5 fs-3 fas fa-motorcycle"></i>
                        </button>
                    </h2>
                    <div id="collapseMoto_gp" className="accordion-collapse collapse" aria-labelledby="headingTREIO" data-bs-parent="#accordion_general">
                        <Moto_gp_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            MARTIAL ARTS <i className="ps-5 fs-3 far fa-hand-rock"></i>
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion_general">
                        <MARCIAL_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            SOCCER <i className="ps-5 fs-3 fas fa-futbol"></i>
                        </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordion_general">
                        <SOCCER_Tabs />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="props_nfl_tab">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#props_nfl" aria-expanded="false" aria-controls="props_nfl">
                            ODDS TO WIN  <i className="ps-5 fs-3 fas fa-star"></i>
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="injuries">
                        <button className="accordion-button collapsed font_bold" type="button" data-bs-toggle="collapse" data-bs-target="#Injuries_glob" aria-expanded="false" aria-controls="injuries_Collapse">
                            INJURIES
                        </button>
                    </h2>
                </div>
            </div>
        </div>
    )
}