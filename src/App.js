import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    render() {
        return (
            <Button>I <Heart/> React</Button>
        )
    }
}

// Stateless function component
const Button = (props) =>
    <button>{props.children}</button>;

class Heart extends Component {
    render() {
        return (
            <span>&hearts;</span>
        )
    }
}

export default App;
