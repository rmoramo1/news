import React from "react";
import PropTypes from "prop-types";

export const BOX_lines = props => {
    return (
        <div className="p-2 odds-list shadow">
            <div className="row g-0  text-white text-center">
                <div className="col-2 bg_lines">Date</div>
                <div className="col-2 bg_lines">Hour</div>
                <div className="col-2 bg_lines">Event</div>
                <div className="col-2 bg_lines">Rounds</div>
                <div className="col-2 bg_lines">Location</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.date}</div>
                <div className="col-2 bb1px lines">{props.hour}</div>
                <div className="col-2 bb1px lines">{props.event}</div>
                <div className="col-2 bb1px lines">{props.rounds}</div>
                <div className="col-2 bb1px lines">{props.location_Fight}</div>
            </div>
            <div className="row g-0  text-white text-center">
                <div className="col-2 bg_lines">Fighter One</div>
                <div className="col-2 bg_lines">ML</div>
                <div className="col-2 bg_lines">Fighter Two</div>
                <div className="col-2 bg_lines">ML</div>
                <div className="col-2 bg_lines">Winner</div>
                <div className="col-2 bg_lines">Finish By</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-2 bb1px lines">{props.fighter_One}</div>
                <div className="col-2 bb1px lines">{props.money_Line_One}</div>
                <div className="col-2 bb1px lines">{props.fighter_Two}</div>
                <div className="col-2 bb1px lines">{props.money_Line_Two}</div>
                <div className="col-2 bb1px lines">{props.winner}</div>
                <div className="col-2 bb1px lines">{props.finish_by}</div>
            </div>
            <div className="row g-0  text-white text-center">
                <div className="col-1 bg_lines">R1</div>
                <div className="col-1 bg_lines">R2</div>
                <div className="col-1 bg_lines">R3</div>
                <div className="col-1 bg_lines">R4</div>
                <div className="col-1 bg_lines">R5</div>
                <div className="col-1 bg_lines">R6</div>
                <div className="col-1 bg_lines">R7</div>
                <div className="col-1 bg_lines">R8</div>
                <div className="col-1 bg_lines">R9</div>
                <div className="col-1 bg_lines">R10</div>
                <div className="col-1 bg_lines">R11</div>
                <div className="col-1 bg_lines">R12</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-1 bb1px lines">{props.r1_result}</div>
                <div className="col-1 bb1px lines">{props.r2_result}</div>
                <div className="col-1 bb1px lines">{props.r3_result}</div>
                <div className="col-1 bb1px lines">{props.r4_result}</div>
                <div className="col-1 bb1px lines">{props.r5_result}</div>
                <div className="col-1 bb1px lines">{props.r6_result}</div>
                <div className="col-1 bb1px lines">{props.r7_result}</div>
                <div className="col-1 bb1px lines">{props.r8_result}</div>
                <div className="col-1 bb1px lines">{props.r9_result}</div>
                <div className="col-1 bb1px lines">{props.r10_result}</div>
                <div className="col-1 bb1px lines">{props.r11_result}</div>
                <div className="col-1 bb1px lines">{props.r12_result}</div>
            </div>
            <div className="row g-0  text-white text-center">
                <div className="col-1 bg_lines">R13</div>
                <div className="col-1 bg_lines">R14</div>
                <div className="col-1 bg_lines">R15</div>
            </div>
            <div className="row g-0 text-center">
                <div className="col-1 bb1px lines">{props.r13_result}</div>
                <div className="col-1 bb1px lines">{props.r14_result}</div>
                <div className="col-1 bb1px lines">{props.r15_result}</div>
            </div>
            
        </div>
    )
}
BOX_lines.propTypes = {
    date: PropTypes.string,
    hour: PropTypes.string,
    event: PropTypes.string,
    rounds: PropTypes.string,
    location_Fight: PropTypes.string,
    fighter_One: PropTypes.string,
    money_Line_One: PropTypes.string,
    fighter_Two: PropTypes.string,
    money_Line_Two: PropTypes.string,
    winner: PropTypes.string,
    finish_by: PropTypes.string,
    r1_result: PropTypes.string,
    r2_result: PropTypes.string,
    r3_result: PropTypes.string,
    r4_result: PropTypes.string,
    r5_result: PropTypes.string,
    r6_result: PropTypes.string,
    r7_result: PropTypes.string,
    r8_result: PropTypes.string,
    r9_result: PropTypes.string,
    r10_result: PropTypes.string,
    r12_result: PropTypes.string,
    r13_result: PropTypes.string,
    r14_result: PropTypes.string,
    r15_result: PropTypes.string
};