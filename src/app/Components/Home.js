import React from "react";

export class Home extends React.Component {

    render() {

        return (
            <div>
                <p>In a new Component!! </p>
                <p>My name is {this.props.user.name} and i'am {this.props.user.age}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    user: React.PropTypes.object,
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    hobbies: React.PropTypes.array,
    children: React.PropTypes.element.isRequired
}