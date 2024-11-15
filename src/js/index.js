import React from "react";
import ReactDOM from "react-dom/client";
import SimpleCounter from "./component/SimpleCounter.jsx";

import "../styles/index.css"

let seconds = 0;

const root = ReactDOM.createRoot(document.querySelector("#app"));

setInterval(() => {
  root.render(<SimpleCounter seconds={seconds} />);
  seconds++;
}, 1000);
