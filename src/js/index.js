//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import TrafficLight from "./component/trafficlight.js";
import { TrafficLightFunction } from "./component/trafficlight-functional.js";

//render your react application
ReactDOM.render(<TrafficLightFunction />, document.querySelector("#app"));
