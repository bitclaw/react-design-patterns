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
        this.setState({
            txt: event.target.value,
            cat: 0
        });
    }

    render() {
        let txt = this.props.txt;
        return (
            <div>
                <Widget update={this.update.bind(this)}/>
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <h2>{txt}</h2>
            </div>
        )
    }
}

// Stateless function component
const Widget = (props) =>
    <input type="text" onChange={props.update}/>;

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is the default prop txt',
    cat: 999
};

export default App;
