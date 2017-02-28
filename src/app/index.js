import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

class App extends React.Component {

  constructor (){
    super ();
    this.state = {
      homeLink : "Home",
      homeMounted : true
    };
  };

  onChangeLink (newName){
    this.setState({ homeLink : newName });
  }

  onGreet (){
    alert("hi there!!!");
  };

  onHandleHomeComp (){
    this.setState({ homeMounted : !this.state.homeMounted });
  }
  render() {
    
    let homeComp = "";
    if (this.state.homeMounted === true) {

      homeComp = (
        <Home
          initialAge={27}
          name={"Josh"}
          greet={this.onGreet}
          changeLink={this.onChangeLink.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeComp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={this.onHandleHomeComp.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  };
};

render(<App/>, window.document.getElementById('app'));