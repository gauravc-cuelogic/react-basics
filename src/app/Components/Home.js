import React from "react";

export class Home extends React.Component {

    constructor (props){
        super ();
        this.state = {
            age : props.initialAge,
            status : 0
        };
    }

    onMakeOlder (){
        this.setState({
            age : this.state.age + 2
        });
    }

    render() {

        return (
            <div>
                <p>In a new Component!! </p>
                <p>My name is {this.props.name} and iam {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary btn-sm">Make me Older!</button>
                <span> or </span>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary btn-sm">Make me Older Other Way!</button>
            </div>
            
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
}
