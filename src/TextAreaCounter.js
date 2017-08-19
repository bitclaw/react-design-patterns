import React, { Component } from 'react';

export class TextAreaCounter extends Component {
    constructor (props) {
        super(props);
        this.state = { text: 'bad' };
        this._textChange = this._textChange.bind(this);
        this._log = this._log.bind(this);
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            text: newProps.defaultValue,
        });
    }

    _log (methodName, args) {
        console.log(methodName, args);
    }

    componentWillUpdate () {
        this._log('componentWillUpdate',  arguments);
    }

    componentDidUpdate (oldProps, oldState) {
        if (this.state.text.length > 3) {
            this.setState(oldState);
        }
    }

    componentWillMount () {
        this._log('componentWillMount',   arguments);
    }

    componentDidMount () {
        this._log('componentDidMount',    arguments);
    }

    componentWillUnmount () {
        this._log('componentWillUnmount', arguments);
    }

    _textChange (event) {
        this.setState({
            text: event.target.value,
        });
    }

    render () {
        return React.DOM.div(null,
            React.DOM.textarea({
                value: this.state.text,
                onChange: this._textChange,
            }),
            React.DOM.h3(null, this.state.text.length)
        );
    }
}
