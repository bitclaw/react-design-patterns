import React, { Component } from 'react';
import ReactDom from 'react-dom';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update () {
        this.setState({val: this.state.val + 1});
    }

    // noinspection JSMethodCanBeStatic
    componentWillMount() {
        console.log(this.componentWillMount.name);
        this.state = {multiplier: 2};
    }

    // noinspection JSMethodCanBeStatic
    componentDidMount() {
        console.log(this.componentDidMount.name);
        console.log(ReactDom.findDOMNode(this));
    }

    // noinspection JSMethodCanBeStatic
    componentWillUnmount() {
        console.log(this.componentWillUnmount.name);
    }

    // noinspection JSMethodCanBeStatic
    render () {
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.multiplier}</button>
    }
}

class Wrapper extends Component {

    // noinspection JSMethodCanBeStatic
    mount () {
        ReactDom.render(<App />, document.getElementById('a'));
    }

    // noinspection JSMethodCanBeStatic
    unmount () {
        ReactDom.unmountComponentAtNode(document.getElementById('a'));
    }


    // noinspection JSMethodCanBeStatic
    render () {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"> </div>
            </div>
        )
    }
}

export default Wrapper;