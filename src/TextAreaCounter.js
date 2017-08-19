import React, { Component } from 'react';

export class TextAreaCounter extends Component {
    constructor (props) {
        super(props)
    }

    componentWillUnmount () {
        //this.unmounted = true
    }

    render () {
        return React.DOM.div(null,
            React.DOM.textarea({
                defaultValue: this.props.text,
            }),
            React.DOM.h3(null, this.props.text.length)
        );
    }
}

TextAreaCounter.propTypes = {
    text: React.PropTypes.string,
};

TextAreaCounter.defaultProps = {
    text: ''
};

//export default TextAreaCounter