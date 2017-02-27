import React from "react";

export class Home extends React.Component {

    constructor (props){
        super ();
        this.state = {
            age : props.initialAge,
            status : 0,
            homeLink : props.initialLinkName
        };
        setTimeout(() => {
            this.setState({ status: 1 });
        }, 3000);
        console.log('constructor');
    }

    componenWillMount (){
        console.log('componen Will Mount');
    }

    componentDidMount (){
        console.log('component did mount');
    }

    componentWillReceiveProps (nextProp){
        console.log('component will receive props', nextProp);
    }

    shouldComponentUpdate (nextProp, nextState){
        console.log('should Component Update', nextProp, nextState);
        return true;
    }

    componenWillUpdate (nextProp, nextState){
        console.log('component Will Update', nextProp, nextState);
    }

    componentDidUpdate (prevProps, PrevState){
        console.log('Component Did Update', prevProps, PrevState);
    }

    componentWillUnmount (){
        console.log('component will unmount');
    }
    onMakeOlder (){
        this.setState({
            age : this.state.age + 2
        });
    }

    onChangeLink (){
        this.props.changeLink(this.state.homeLink);
    };

    onHandleChange (event){
        this.setState({ homeLink : event.target.value });
    };

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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet Me!</button>
                <hr/>
                <p>
                <input type="text" 
                    value={this.state.homeLink}
                    onChange={(event) => {this.onHandleChange(event)}}
                    />
                </p>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
            
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
}
