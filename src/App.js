import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        let txt = this.props.txt;
        return (
            <div>
                <input type="text"
                       onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
                <h2>{txt}</h2>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is the default prop txt',
    cat: 999
};

export default App;
