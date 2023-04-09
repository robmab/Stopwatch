import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Clock = () => {
  return (
    <div className="clock">
      <div className="inside clockIcon">
        <p>
          <FontAwesomeIcon icon={faClock} flip="horizontal" />
        </p>
      </div>
      <div className="inside clockSix">
        <p>6</p>
      </div>
      <div className="inside clockFive">
        <p>5</p>
      </div>
      <div className="inside clockFour">
        <p>4</p>
      </div>
      <div className="inside clockThree">
        <p>3</p>
      </div>
      <div className="inside clockTwo">
        <p>2</p>
      </div>
      <div className="inside clockOne">
        <p>1</p>
      </div>
    </div>
  );
};

export default Clock;
