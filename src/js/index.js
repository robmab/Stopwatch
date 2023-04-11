//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {Clock} from "./component/clock.jsx";


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
    />
    ,
    document.querySelector("#app")
  );
  time++;
};

timeRender(); //First time render

setInterval(timeRender, 1000); //Bucle
