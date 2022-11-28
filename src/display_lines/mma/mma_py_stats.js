import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import DateTime from 'luxon/src/datetime';


import { Single_MMA } from "../../lines/single_mma";
function MMA_PY_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
	let mmaFilter = store.stats_mma_fighter;
	var byWin = mmaFilter;
	byWin.sort(function(a,b) {
		return b.w - a.w;
	});
    return (
        <div className="container-fluid p-2">
            <div className=" shadow_spans bg-white">
                <div className=" title_sport bg_base_dark text-white p-1 fs-5 font_bold">
                    <div className="row g-0">
                        <div className="col-lg-2">MMA Fighter Stats</div>
                        <div className="col-lg-10">
                            <div className="row g-0">
                                <div className="col-2 text-center">Year</div>
                                <div className="col-lg-2 d-flex align-items-center">
                                    <select className="form-select" name="week" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                        {
                                            selectYear.map((index) => {
                                                return (
                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 overflowX_scroll">
                    <div className="row g-0 text-center bg_lines text-white odds-list">
                        <div className="diezSiete_spans"></div>
                        <div className="diezSiete_spans">Name</div>
                        <div className="diezSiete_spans">Nickname</div>
                        <div className="diezSiete_spans">Height</div>
                        <div className="diezSiete_spans">Weight</div>
                        <div className="diez_spans">Category</div>
                        <div className="diezSiete_spans">W</div>
                        <div className="diezSiete_spans">W KO/TKO</div>
                        <div className="diezSiete_spans">W SUB</div>
                        <div className="diezSiete_spans">W DEC</div>
                        <div className="diezSiete_spans">W OTHERS</div>
                        <div className="diezSiete_spans">L</div>
                        <div className="diezSiete_spans">L KO/TKO</div>
                        <div className="diezSiete_spans">L SUB</div>
                        <div className="diezSiete_spans">L DEC</div>
                        <div className="diezSiete_spans">L OTHERS</div>
                    </div>
                    {
                        mmaFilter.map((item, index) => {
                            let ano = item.season;
                            if (ano == year) {
                                return (
                                    <div key={index} className="col-12">
                                        <Single_MMA
                                            id={index}
                                            name={item.name}
                                            headshot={item.headshot}
                                            nickname={item.nickname}
                                            height={item.height}
                                            weight={item.weight}
                                            category={item.category}
                                            w={item.w}
                                            w_ko_tko={item.w_ko_tko}
                                            w_sub={item.w_sub}
                                            w_dec={item.w_dec}
                                            w_others={item.w_others}
                                            L={item.L}
                                            L_ko_tko={item.L_ko_tko}
                                            L_sub={item.L_sub}
                                            L_dec={item.L_dec}
                                            L_others={item.L_others}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MMA_PY_STATS;