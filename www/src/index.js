import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

import "./style.css";

const App = () => (
  <div className="App">
    <Container />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
