import React from "react";

export class Home extends React.Component {

    constructor (props){
        super ();
        this.age = props.age;
    }

    onMakeOlder (){
        this.age = this.age + 2;
    }

    render() {

        return (
            <div>
                <p>In a new Component!! </p>
                <p>My name is {this.props.name} and i'am {this.age}</p>
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