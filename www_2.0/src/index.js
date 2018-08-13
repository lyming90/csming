import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./routes";
import store from "src/redux/store";
import SideBar from "./components/SideBar";
import PageBlog from "./PageBlog";
import PageHome from "./PageHome";
import PageArticle from "./PageArticle";

import "src/styles/app.scss";
import "src/styles/normalize.scss";
import * as styles from "./style.scss";

const App = () => (
  <div className={styles.appContainer}>
    <Provider store={store}>
      <Router>
        <div className={styles.container}>
          <SideBar />
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/blog" component={PageBlog} />
            <Route exact path="/blog/article/:id" component={PageArticle} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
