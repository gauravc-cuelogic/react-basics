import React from "react";
import { render } from "react-dom";

class App extends React.Component {

  render() {

    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <h1>Hello React!!!!</h1>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));