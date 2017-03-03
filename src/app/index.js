import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router"
import { Root } from "./Components/Root";
import { Home } from "./Components/Home";
import { User } from "./Components/User";

class App extends React.Component {

  render() {
   
    return (
      <Router history={browserHistory} >
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"home"} component={Home} />
          <Route path={"user/:id"} component={User} />
        </Route>
      </Router>
    );
  };
};

render(<App/>, window.document.getElementById('app'));