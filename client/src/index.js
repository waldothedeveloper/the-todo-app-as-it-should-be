import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
