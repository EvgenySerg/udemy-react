import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person'

class App extends React.Component {
    state = {
        persons: [
            {name: "Avas", age: 23},
            {name: "Vova", age: 33},
            {name: "Joanna", age: 19}
        ],
        otherState: 'some other state'
    }


    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 322},
                {name: "Darom", age: 23},
                {name: "Zed", age: 24},
            ],
        })
    }


    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "azzzzxc", age: 322},
                {name: event.target.value, age: 23},
                {name: "Zed", age: 24},
            ],
        })
    }


    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1> Hi! I'm react app </h1>

                <button
                    style={buttonStyle}
                    onClick={() => this.switchNameHandler('MMMMMMMMMMMMMMMM')}>Switch name
                </button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>My hobbies: fishing
                </Person>

                <Person click={this.switchNameHandler.bind(this, 'Kukushka')} name={this.state.persons[1].name}
                        age={this.state.persons[1].age}>My hobbies: skiing
                </Person>

                <Person
                    changed={this.nameChangedHandler}
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}>My hobbies: skiing

                </Person>
            </div>
        );
    }

}

export default App;

