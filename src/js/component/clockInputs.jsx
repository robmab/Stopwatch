import React from "react";
import PropTypes from "prop-types";

import { regTime, play, pause, reset, alertClick } from "../index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

//create your first component
export const ClockInputs = (props) => {
  console.log(props.color);
  return (
    <div className="inputs container">
      <div className="row">
        {/* CUENTA REGRESIVA */}
        <div className="cuentaRegresiva col-12 col-lg-5">
          <div className="input-group mb-5 ">
            <input
              type="number"
              className="form-control"
              placeholder=""
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
                Cuenta regresiva (s)
              </button>
            </div>
          </div>
        </div>
        {/* CUENTA REGRESIVA END*/}
        {/* BUTTONS */}
        <div className="buttons col-12 col-lg-2">
          <button
            onClick={play}
            type="button"
            className="btn btn-outline-dark "
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button
            onClick={pause}
            type="button"
            className="btn btn-outline-dark"
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
          <button
            onClick={reset}
            type="button"
            className="btn btn-outline-dark"
          >
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
        {/* BUTTONS END*/}
        {/* ALERT */}
        <div className=" alertClock col-12 col-lg-5">
          <div  className="input-group mb-5 ">
            <div className="input-group-prepend">
              <button
                onClick={alertClick}
                style={{backgroundColor:props.color}}
                className="btn btn-outline-secondary"
                type="button"
              >
                Alerta (s)
              </button>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
              min={0}
              max={999999}
            />
          </div>
        </div>
        {/* ALERT END*/}
      </div>
    </div>
  );
};

ClockInputs.propTypes = {
  color:PropTypes.string
};
