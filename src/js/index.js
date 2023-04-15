//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Clock } from "./component/clock.jsx";

//Variables
let negativeInt;
let paused = false;
let time = 0;
let inputAlert = -1;
let color = "";
let clockOn;

const style = {};

//Loop setInterval
export const timeRender = () => {
  clockOn = true;
  if (!paused) {
    if (inputAlert == time) {
      style.background = undefined;
      style.color = undefined;
      alert(`Alcanzaste el segundo ${time}!`);
      inputAlert = -1;
    }
    ReactDOM.render(
      <Clock
        clockOne={time}
        clockTwo={Math.floor(time / 10)}
        clockThree={Math.floor(time / 100)}
        clockFour={Math.floor(time / 1000)}
        clockFive={Math.floor(time / 10000)}
        clockSix={Math.floor(time / 100000)}
        style={style}
      />,
      document.querySelector("#app")
    );
    time++;
  }
};

timeRender(); //First time render

let interval = setInterval(timeRender, 1000); //Loop

/* CUENTA REGRESIVA */
const timeRenderNegative = () => {
  clockOn = false;

  if (!paused) {
    if (inputAlert == time) {
      style.background = undefined;
      style.color = undefined;
      alert(`Alcanzaste el segundo ${time}!`);
      inputAlert = -1;
    }
    ReactDOM.render(
      <Clock
        clockOne={time}
        clockTwo={Math.floor(time / 10)}
        clockThree={Math.floor(time / 100)}
        clockFour={Math.floor(time / 1000)}
        clockFive={Math.floor(time / 10000)}
        clockSix={Math.floor(time / 100000)}
        style={style}
      />,
      document.querySelector("#app")
    );
    if (time === 0) clearInterval(negativeInt);
    time--;
  }
};



export const regTime = (e) => {
  let input = e.target.parentNode.parentNode.childNodes[0];
  if (input.value <= 0) return; // dont let negative input
  time = Number(input.value);

  //Loop setInterval

  clearInterval(interval);
  clearInterval(negativeInt);

  timeRenderNegative(); //First time render
  negativeInt = setInterval(timeRenderNegative, 1000); //Loop render
};

/* PLAY-PAUSED-RESET */
export const play = () => {
  paused = false;
  if (time < 0) {
    clearInterval(negativeInt);
    if (paused === true) {
      paused = false;
    }
    time++;
    timeRender();
    interval = setInterval(timeRender, 1000); //Loop
  }
};

export const pause = () => {
  paused = true;
};

export const reset = () => {
  clearInterval(interval);
  clearInterval(negativeInt);

  time = 0;

  if (paused === true) {
    paused = false;
  }
  timeRender();
  interval = setInterval(timeRender, 1000); //Loop
};

/* ALERT */

export const alertClick = (e) => {
  let auxInputAlert = e.target.parentNode.parentNode.childNodes[1].value;
  if (auxInputAlert === "" || Number(auxInputAlert) < 0) return; //undefined alert input
  inputAlert = e.target.parentNode.parentNode.childNodes[1].value;

  style.background = "rgb(201, 252, 126)";
  style.color = "black";

  //first render
  if (clockOn) {
    time--;
    timeRender();
  } else {
    time++;
    timeRenderNegative();
  }
};
