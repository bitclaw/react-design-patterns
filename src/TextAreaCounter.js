import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TextAreaCounter extends Component {
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
    text: PropTypes.string,
};

TextAreaCounter.defaultProps = {
    text: ''
};
