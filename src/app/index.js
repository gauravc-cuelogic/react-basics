import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

class App extends React.Component {

  onGreet (){
    alert("hi there!!!");
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="Home"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home initialAge={27} name={"Josh"} greet={this.onGreet} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));