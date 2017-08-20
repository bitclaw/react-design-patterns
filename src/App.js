import React, { Component } from 'react';
import ReactDom from 'react-dom';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: '',
        };
        this.update = this.update.bind(this);
    }

    update () {
        this.setState({
                a: this.a.refs.input.value,
                b: this.b.value,
            }
        );
    }

    render() {
        return (
            <div>
                <Input
                    type="text"
                    ref={ component => this.a = component}
                    update={this.update.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    type="text"
                    ref={ node => this.b = node}
                    onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

class Input extends Component {
    render() {
        return (
            <div><input type="text" ref="input" onChange={this.props.update}/></div>
        )
    }
}

export default App;