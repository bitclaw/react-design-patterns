import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            txt: 'This is the state text'
        }
    }

    update (event) {
        this.setState({txt: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
            </div>
        )
    }
}

export default App;
