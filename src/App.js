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
                a: this.refs.a.value,
                b: this.refs.b.value,
            }
        );
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref="a"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    type="text"
                    ref="b"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

export default App;