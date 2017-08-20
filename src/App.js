import React, { Component } from 'react';
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
                a: this.a.value,
                b: this.b.value,
            }
        );
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={ node => this.a = node}
                    onChange={this.update.bind(this)}
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

export default App;