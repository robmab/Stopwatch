import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { ClockInputs } from "./clockInputs.jsx";

//create your first component
export const Clock = (props) => {
  return (
    <div className="wrapper">
      <div className="clock">
        <div className="in clockIcon">
          <p>
            <FontAwesomeIcon icon={faClock} flip="horizontal" />
          </p>
        </div>
        <div className="in clockSix">
          <p>{props.clockSix % 10}</p>
        </div>
        <div className="in clockFive">
          <p>{props.clockFive % 10}</p>
        </div>
        <div className="in clockFour">
          <p>{props.clockFour % 10}</p>
        </div>
        <div className="in clockThree">
          <p>{props.clockThree % 10}</p>
        </div>
        <div className="in clockTwo">
          <p>{props.clockTwo % 10}</p>
        </div>
        <div className="in clockOne">
          <p>{props.clockOne % 10}</p>
        </div>
      </div>

      <ClockInputs style={props.style} />
    </div>
  );
};

Clock.propTypes = {
  clockSix: PropTypes.number,
  clockFive: PropTypes.number,
  clockFour: PropTypes.number,
  clockThree: PropTypes.number,
  clockTwo: PropTypes.number,
  clockOne: PropTypes.number,
  style: PropTypes.object,
};
