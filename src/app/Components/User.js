import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component {

    onNavigation (){
        browserHistory.push("/home");
    };

    render (){
        return (
            <div>
                <h3>User Page</h3>
                <p>User Id: {this.props.params.id}</p>
                <hr/>
                <button onClick={this.onNavigation} className="btn btn-primary">Go Home!</button>
            </div>
        );
    };
};