import React from "react";
import PropTypes from "prop-types";

import { regTime } from "../index.js";

//create your first component
export const ClockInputs = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="number"
        className="form-control"
        placeholder={props.placeholder}
        aria-label=""
        aria-describedby="basic-addon1"
        min={0}
        max={999999}
      />
      <div className="input-group-prepend">
        <button
          onClick={regTime}
          className="btn btn-outline-secondary"
          type="button"
        >
          Cuenta regresiva (seg)
        </button>
      </div>
    </div>
  );
};
ClockInputs.propTypes = {
  placeholder: PropTypes.string,
};
