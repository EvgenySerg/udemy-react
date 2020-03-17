import React, {Component} from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        username: "Superavas"
    }

    inputChangedHandler =(event)=>{
        this.setState({username: event.target.value})
    }


    render() {
        return (
            <div className="App">
                <UserInput
                    userName={this.inputChangedHandler}
                    currentName = {this.state.username}/>

                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
            </div>
        );
    }
}

export default App;
