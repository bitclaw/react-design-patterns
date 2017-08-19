import React, { Component } from 'react';

export class TextAreaCounter extends Component {
    constructor (props) {
        super(props);
        this.state = { text: 'test' };
        this._textChange = this._textChange.bind(this);
    }

    _textChange (ev) {
        this.setState({
            text: ev.target.value,
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
