//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Clock } from "./component/clock.jsx";

//render your react application

let time = 0;
const timeRender = () => {
  ReactDOM.render(
    <Clock
      clockOne={time}
      clockTwo={Math.floor(time / 10)}
      clockThree={Math.floor(time / 100)}
      clockFour={Math.floor(time / 1000)}
      clockFive={Math.floor(time / 10000)}
      clockSix={Math.floor(time / 100000)}
      placeholder="0"
    />,
    document.querySelector("#app")
  );
  time++;
};

timeRender(); //First time render

let interval = setInterval(timeRender, 1000); //Loop 

/* CUENTA REGRESIVA */

let negativeInt;
export const regTime = (e) => {
  let input = e.target.parentNode.parentNode.childNodes[0];

  clearInterval(interval);
  clearInterval(negativeInt);

  time = Number(input.value);
  let placeholderTime=Number(input.value)
  if (time<0) return ;  // dont let negative input

  const timeRenderNegative = () => {
    ReactDOM.render(
      <Clock
        clockOne={time}
        clockTwo={Math.floor(time / 10)}
        clockThree={Math.floor(time / 100)}
        clockFour={Math.floor(time / 1000)}
        clockFive={Math.floor(time / 10000)}
        clockSix={Math.floor(time / 100000)}
        placeholder={placeholderTime}
      />,
      document.querySelector("#app")
    );
    if (time === 0) clearInterval(negativeInt);
    time--;
  };

  timeRenderNegative(); //First time render
  negativeInt = setInterval(timeRenderNegative, 1000); //Loop render

  if (time < 0) clearInterval(negativeInt);
};
