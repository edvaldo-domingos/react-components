import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollDow from "./components/html/scroll-down/ScrollDow.component";

ReactDOM.render(
      <React.StrictMode>
            {/* <App /> */}
            <ScrollDow />
      </React.StrictMode>,
      document.getElementById("root")
);
