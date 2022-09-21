//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import "./icons.js";

import {Counter} from "./component/Counter.jsx"


let cuentame =0;
setInterval(function(){
    const six = Math.floor(cuentame/100000);
    const five = Math.floor(cuentame/10000);
    const four = Math.floor(cuentame/1000);
    const three = Math.floor(cuentame/100);
    const two = Math.floor (cuentame/10);
    const one = Math.floor(cuentame/1);
    cuentame++;
    console.log(six, five, four, three, two, one)
    ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));
},1000);


