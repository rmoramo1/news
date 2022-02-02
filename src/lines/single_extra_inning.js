import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Single_Extra_Inning = props => {
    return (
        <div className="col-12 g-0 p-1">
            <div className="row g-0 shadow overflowX_scroll p-1">
                <div className=" odds-list">
                    <div className="col-12">
                        <div className="row g-0 text-center bg_lines text-white">
                        </div>
                        <div className="row g-0 text-center fs-4">
                            <div className="col-2">TEAMS</div>
                            <div className="col-3 lines">{props.away}</div>
                            <div className="col-3 lines">{props.home}</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row g-0 text-center bg_lines text-white">
                            <div className="col-1">Inning 10</div>
                            <div className="col-1">Inning 11</div>
                            <div className="col-1">Inning 12</div>
                            <div className="col-1">Inning 13</div>
                            <div className="col-1">Inning 14</div>
                            <div className="col-1">Inning 15</div>
                            <div className="col-1">Inning 16</div>
                            <div className="col-1">Inning 17</div>
                            <div className="col-1">Inning 18</div>
                            <div className="col-1">Inning 19</div>
                            <div className="col-1">Inning 20</div>
                            <div className="col-1">Inning 21</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sa_10inning}</div>
                            <div className="col-1 lines">{props.sa_11inning}</div>
                            <div className="col-1 lines">{props.sa_12inning}</div>
                            <div className="col-1 lines">{props.sa_13inning}</div>
                            <div className="col-1 lines">{props.sa_14inning}</div>
                            <div className="col-1 lines">{props.sa_15inning}</div>
                            <div className="col-1 lines">{props.sa_16inning}</div>
                            <div className="col-1 lines">{props.sa_17inning}</div>
                            <div className="col-1 lines">{props.sa_18inning}</div>
                            <div className="col-1 lines">{props.sa_19inning}</div>
                            <div className="col-1 lines">{props.sa_20inning}</div>
                            <div className="col-1 lines">{props.sa_21inning}</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sh_10inning}</div>
                            <div className="col-1 lines">{props.sh_11inning}</div>
                            <div className="col-1 lines">{props.sh_12inning}</div>
                            <div className="col-1 lines">{props.sh_13inning}</div>
                            <div className="col-1 lines">{props.sh_14inning}</div>
                            <div className="col-1 lines">{props.sh_15inning}</div>
                            <div className="col-1 lines">{props.sh_16inning}</div>
                            <div className="col-1 lines">{props.sh_17inning}</div>
                            <div className="col-1 lines">{props.sh_18inning}</div>
                            <div className="col-1 lines">{props.sh_19inning}</div>
                            <div className="col-1 lines">{props.sh_20inning}</div>
                            <div className="col-1 lines">{props.sh_21inning}</div>
                        </div>
                        <div className="row g-0 text-center bg_lines text-white">
                            <div className="col-1">Inning 22</div>
                            <div className="col-1">Inning 23</div>
                            <div className="col-1">Inning 24</div>
                            <div className="col-1">Inning 25</div>
                            <div className="col-1">Inning 26</div>
                            <div className="col-1">Inning 27</div>
                            <div className="col-1">Inning 28</div>
                            <div className="col-1">Inning 29</div>
                            <div className="col-1">Inning 30</div>
                            <div className="col-1">Inning 31</div>
                            <div className="col-1">Inning 32</div>
                            <div className="col-1">Inning 33</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sa_22inning}</div>
                            <div className="col-1 lines">{props.sa_23inning}</div>
                            <div className="col-1 lines">{props.sa_24inning}</div>
                            <div className="col-1 lines">{props.sa_25inning}</div>
                            <div className="col-1 lines">{props.sa_26inning}</div>
                            <div className="col-1 lines">{props.sa_27inning}</div>
                            <div className="col-1 lines">{props.sa_28inning}</div>
                            <div className="col-1 lines">{props.sa_29inning}</div>
                            <div className="col-1 lines">{props.sa_30inning}</div>
                            <div className="col-1 lines">{props.sa_31inning}</div>
                            <div className="col-1 lines">{props.sa_32inning}</div>
                            <div className="col-1 lines">{props.sa_33inning}</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sh_22inning}</div>
                            <div className="col-1 lines">{props.sh_23inning}</div>
                            <div className="col-1 lines">{props.sh_24inning}</div>
                            <div className="col-1 lines">{props.sh_25inning}</div>
                            <div className="col-1 lines">{props.sh_26inning}</div>
                            <div className="col-1 lines">{props.sh_27inning}</div>
                            <div className="col-1 lines">{props.sh_28inning}</div>
                            <div className="col-1 lines">{props.sh_29inning}</div>
                            <div className="col-1 lines">{props.sh_30inning}</div>
                            <div className="col-1 lines">{props.sh_31inning}</div>
                            <div className="col-1 lines">{props.sh_32inning}</div>
                            <div className="col-1 lines">{props.sh_33inning}</div>
                        </div>
                        <div className="row g-0 text-center bg_lines text-white">
                            <div className="col-1">Inning 34</div>
                            <div className="col-1">Inning 35</div>
                            <div className="col-1">Inning 36</div>
                            <div className="col-1">Inning 37</div>
                            <div className="col-1">Inning 38</div>
                            <div className="col-1">Inning 39</div>
                            <div className="col-1">Inning 40</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sa_34inning}</div>
                            <div className="col-1 lines">{props.sa_35inning}</div>
                            <div className="col-1 lines">{props.sa_36inning}</div>
                            <div className="col-1 lines">{props.sa_37inning}</div>
                            <div className="col-1 lines">{props.sa_38inning}</div>
                            <div className="col-1 lines">{props.sa_39inning}</div>
                            <div className="col-1 lines">{props.sa_40inning}</div>
                        </div>
                        <div className="row g-0 text-center">
                            <div className="col-1 lines">{props.sh_34inning}</div>
                            <div className="col-1 lines">{props.sh_35inning}</div>
                            <div className="col-1 lines">{props.sh_36inning}</div>
                            <div className="col-1 lines">{props.sh_37inning}</div>
                            <div className="col-1 lines">{props.sh_38inning}</div>
                            <div className="col-1 lines">{props.sh_39inning}</div>
                            <div className="col-1 lines">{props.sh_40inning}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
Single_Extra_Inning.propTypes = {
    id: PropTypes.number,
    away: PropTypes.string,
    home: PropTypes.string,
    sa_10inning: PropTypes.string,
    sa_11inning: PropTypes.string,
    sa_12inning: PropTypes.string,
    sa_13inning: PropTypes.string,
    sh_14inning: PropTypes.string,
    sh_15inning: PropTypes.string,
    sh_16inning: PropTypes.string,
    sh_17inning: PropTypes.string,
    sh_18inning: PropTypes.string,
    sh_19inning: PropTypes.string,
    sh_20inning: PropTypes.string,
    sh_21inning: PropTypes.string,
    sh_22inning: PropTypes.string,
    sh_23inning: PropTypes.string,
    sh_24inning: PropTypes.string,
    sh_25inning: PropTypes.string,
    sh_26inning: PropTypes.string,
    sh_27inning: PropTypes.string,
    sh_28inning: PropTypes.string,
    sh_29inning: PropTypes.string,
    sh_30inning: PropTypes.string,
    sh_31inning: PropTypes.string,
    sh_32inning: PropTypes.string,
    sh_33inning: PropTypes.string,
    sh_34inning: PropTypes.string,
    sh_35inning: PropTypes.string,
    sh_36inning: PropTypes.string,
    sh_37inning: PropTypes.string,
    sh_38inning: PropTypes.string,
    sh_39inning: PropTypes.string,
    sh_40inning: PropTypes.string,
};