//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Clock } from "./component/clock.jsx";

//Variables
let paused = false;
let time = 0;
let inputAlert = -1;
let color = "";
let clockOn = true;

//Loop setInterval
const timeRender = () => {
  clockOn = true;
  if (!paused) {
    if (inputAlert == time) {
      color = "";
      alert(`Alcanzaste el segundo ${time}!`);
    }
    ReactDOM.render(
      <Clock
        clockOne={time}
        clockTwo={Math.floor(time / 10)}
        clockThree={Math.floor(time / 100)}
        clockFour={Math.floor(time / 1000)}
        clockFive={Math.floor(time / 10000)}
        clockSix={Math.floor(time / 100000)}
        color={color}
      />,
      document.querySelector("#app")
    );
    time++;
  }
};

timeRender(); //First time render

let interval = setInterval(timeRender, 1000); //Loop

/* CUENTA REGRESIVA */

let negativeInt;
export const regTime = (e) => {
  clearInterval(interval);
  clearInterval(negativeInt);

  let input = e.target.parentNode.parentNode.childNodes[0];

  time = Number(input.value);

  if (time <= 0) return timeRender(); // dont let negative input

  //Loop setInterval
  const timeRenderNegative = () => {
    clockOn = false;

    if (!paused) {
      if (inputAlert == time) {
        color = "";
        alert(`Alcanzaste el segundo ${time}!`);
      }
      ReactDOM.render(
        <Clock
          clockOne={time}
          clockTwo={Math.floor(time / 10)}
          clockThree={Math.floor(time / 100)}
          clockFour={Math.floor(time / 1000)}
          clockFive={Math.floor(time / 10000)}
          clockSix={Math.floor(time / 100000)}
          color={color}
        />,
        document.querySelector("#app")
      );
      if (time === 0) clearInterval(negativeInt);
      time--;
    }
  };

  timeRenderNegative(); //First time render
  negativeInt = setInterval(timeRenderNegative, 1000); //Loop render
};

/* PLAY-PAUSED-RESET */
export const play = () => {
  paused = false;
};

export const pause = () => {
  paused = true;
};

export const reset = () => {
  time = 0;
  timeRender();
  if (paused === true) paused = false;
};

/* ALERT */

export const alertClick = (e) => {
  inputAlert = e.target.parentNode.parentNode.childNodes[1].value;
  color = "rgb(201, 252, 126)";

  //first render
  if (clockOn) {
    time--;
    timeRender();
  } else {
    time++;
    timeRenderNegative();
  }
};
