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
                a: ReactDom.findDOMNode(this.a).value,
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
            <input type="text" onChange={this.props.update}/>
        )
    }
}

export default App;