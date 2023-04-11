import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";


//create your first component
export const ClockInputs = (props) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label=""
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
