import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    render() {
        return (
            <Title text="12345"/>
        )
    }
}

// Stateless function component
const Title = (props) =>
    <h1>Title: {props.text}</h1>;

Title.propTypes = {
    text(props,propName,component) {
        if (!(propName in props)) {
            // When using minified version the new Error will not show on developer tools
            new Error(`missing ${propName}`);
            console.log(`missing ${propName}`);
        }

        // When using minified version the new Error will not show on developer tools
        if (props[propName].length < 6) {
            new Error(`${propName} was too short`);
            console.log(`${propName} was too short`);
        }
    }
};

export default App;
