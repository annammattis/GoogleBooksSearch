import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

function ctorName(val) { 
    return val.constructor && typeof val.constructor === 'function' ? val.constructor.name : null; 
  } 

ctorName();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
