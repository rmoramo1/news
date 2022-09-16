import react from "react";

import Nba_Games from "../display_lines/nba/nba_games";
import Nfl_Games from "../display_lines/nfl/nfl_games";
import MLB_Games from "../display_lines/mlb/mbl_games";
import NHL_Games from "../display_lines/hockey/nhl_games";
import Soccer_Games from "../display_lines/soccer/soccer_games";
import MMA_Event from "../display_lines/mma/mma_fight";
import Box_Event from "../display_lines/box/box_fight";
import { Ncaa_Football_Games } from "../display_lines/ncaa/ncaa_football_games";
import { NCAA_BASEBALL_Games } from "../display_lines/ncaa_baseball/ncaa_baseball_games";
import { NCAA_BASKET_Games } from "../display_lines/ncaa_basket/ncaa_basket_games";
import WNba_Games from "../display_lines/wnba/wnba_games";
import BS_MX_Games from "../display_lines/baseball_mexico/bs_mx_games";
import Nascar_Runs from "../display_lines/nascar/nascar_runs";
import Moto_GP_Runs from "../display_lines/moto_gp/moto_gp_runs";
function Lineas_Generales() {
    return (
        <div className="container-fluid p-2" id="lineas_general">
            <div className="rounded_span shadow_spans bg-white">
                <div className="row g-0" id="lineas_bg">
                    <div className="col-lg-2">
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#american_football" aria-expanded="false" aria-controls="american_football">
                                FOOTBALL AMERICANO
                            </button>
                            <div className="collapse" id="american_football" aria-labelledby="1" data-bs-parent="#lineas_bg">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#NFL_COLLAPSE" aria-expanded="true" aria-controls="NFL_COLLAPSE">
                                    - NFL
                                </button>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#NCAA_COLLAPSE" aria-expanded="true" aria-controls="NCAA_COLLAPSE">
                                    - NCAA F
                                </button>
                            </div>

                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BASKKETT_COLLA" aria-expanded="false" aria-controls="BASKKETT_COLLA">
                                BASKET
                            </button>
                            <div className="collapse" id="BASKKETT_COLLA" aria-labelledby="2" data-bs-parent="#lineas_bg">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#NBA_COLLAPSE" aria-expanded="true" aria-controls="NBA_COLLAPSE">
                                    - NBA
                                </button>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#NCAA_BASKET_COLLAPSE" aria-expanded="true" aria-controls="NCAA_BASKET_COLLAPSE">
                                    - NCAA Basket
                                </button>

                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#WNBA" aria-expanded="true" aria-controls="WNBA">
                                    - WNBA
                                </button>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BASEBALL_COLLA" aria-expanded="false" aria-controls="BASEBALL_COLLA">
                                BASEBALL
                            </button>

                            <div className="collapse" id="BASEBALL_COLLA" aria-labelledby="3" data-bs-parent="#lineas_bg">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#MLB_COLLAPSE" aria-expanded="true" aria-controls="MLB_COLLAPSE">
                                    - MLB
                                </button>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#NCAA_BASEBALL_COLLAPSE" aria-expanded="true" aria-controls="NCAA_BASEBALL_COLLAPSE">
                                    - NCAA B
                                </button>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bs_mx" aria-expanded="true" aria-controls="bs_mx">
                                    - Baseball MX
                                </button>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#NHL_COLLAPSE" aria-expanded="true" aria-controls="NHL_COLLAPSE">
                                NHL
                            </button>
                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SOCCER_COLLAPSE" aria-expanded="true" aria-controls="SOCCER_COLLAPSE">
                                SOCCER
                            </button>
                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#PELEAS" aria-expanded="false" aria-controls="PELEAS">
                                PELEAS
                            </button>
                            <div className="collapse" id="PELEAS" aria-labelledby="3" data-bs-parent="#lineas_bg">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#MMA_COLLAPSE" aria-expanded="true" aria-controls="MMA_COLLAPSE">
                                    - MMA
                                </button>

                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#BOX_COLLAPSE" aria-expanded="true" aria-controls="BOX_COLLAPSE">
                                    - BOX
                                </button>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CARRERAS" aria-expanded="false" aria-controls="CARRERAS">
                                CARRERAS
                            </button>
                            <div className="collapse" id="CARRERAS" aria-labelledby="3" data-bs-parent="#lineas_bg">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Nascar_COLLAPSE" aria-expanded="true" aria-controls="Nascar_COLLAPSE">
                                    - NASCAR
                                </button>

                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#MOTO_COLLAPSE" aria-expanded="true" aria-controls="MOTO_COLLAPSE">
                                    - MOTO GP
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="accordion-collapse collapse show" id="NFL_COLLAPSE" aria-labelledby="uno" data-bs-parent="#lineas_general">
                            <Nfl_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="NBA_COLLAPSE" aria-labelledby="dos" data-bs-parent="#lineas_general">
                            <Nba_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="MLB_COLLAPSE" aria-labelledby="tres" data-bs-parent="#lineas_general">
                            <MLB_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="NHL_COLLAPSE" aria-labelledby="cuatro" data-bs-parent="#lineas_general">
                            <NHL_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="SOCCER_COLLAPSE" aria-labelledby="cinco" data-bs-parent="#lineas_general">
                            <Soccer_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="MMA_COLLAPSE" aria-labelledby="seis" data-bs-parent="#lineas_general">
                            <MMA_Event />
                        </div>
                        <div className="accordion-collapse collapse " id="BOX_COLLAPSE" aria-labelledby="siete" data-bs-parent="#lineas_general">
                            <Box_Event />
                        </div>
                        <div className="accordion-collapse collapse " id="NCAA_COLLAPSE" aria-labelledby="ocho" data-bs-parent="#lineas_general">
                            <Ncaa_Football_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="NCAA_BASEBALL_COLLAPSE" aria-labelledby="ocho" data-bs-parent="#lineas_general">
                            <NCAA_BASEBALL_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="NCAA_BASKET_COLLAPSE" aria-labelledby="nueve" data-bs-parent="#lineas_general">
                            <NCAA_BASKET_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="WNBA" aria-labelledby="diez" data-bs-parent="#lineas_general">
                            <WNba_Games />
                        </div>
                        <div className="accordion-collapse collapse " id="bs_mx" aria-labelledby="onze" data-bs-parent="#lineas_general">
                            <BS_MX_Games /> 
                        </div>
                        <div className="accordion-collapse collapse " id="Nascar_COLLAPSE" aria-labelledby="doce" data-bs-parent="#lineas_general">
                            <Nascar_Runs />  
                        </div>
                        <div className="accordion-collapse collapse " id="MOTO_COLLAPSE" aria-labelledby="doce" data-bs-parent="#lineas_general">
                            <Moto_GP_Runs />  
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Lineas_Generales;