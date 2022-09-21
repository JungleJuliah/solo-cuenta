import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes  from "prop-types";

export const Counter = (props) => {
    return (
        <div className="fullCounter"> 
        <div className="clockIcon">
        <FontAwesomeIcon icon="fa-regular fa-clock" />
        </div>
        <div className="six">{props.digitSix %10}</div>
        <div className="five">{props.digitFive %10}</div>
        <div className="four">{props.digitFour %10}</div>
        <div className="three">{props.digitThree %10}</div>
        <div className="two">{props.digitTwo %10}</div>
        <div className="one">{props.digitOne %10}</div>
        </div>
    );
}

Counter.propTypes= {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};
