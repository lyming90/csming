import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/NavBar";
import PageHome from "./PageHome";

import "src/styles/app.scss";
import "src/styles/normalize.scss";
import * as styles from "./style.scss";

const App = () => (
  <div className={styles.appContainer}>
    <NavBar />
    <PageHome />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
