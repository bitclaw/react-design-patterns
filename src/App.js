import React, { Component } from 'react';
import './App.css';
import { TextAreaCounter } from './TextAreaCounter';

class App extends Component {
    render() {
        return (
            <div>
                <TextAreaCounter text="bob"/>
            </div>
        )
    }
}

export default App;
