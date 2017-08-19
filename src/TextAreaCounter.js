import React, { Component } from 'react';

class TextAreaCounter extends Component {
    constructor (props) {
        super(props)
    }

    componentWillUnmount () {
        this.unmounted = true
    }

    render () {
    }
}

TextAreaCounter.propTypes = {
    text: React.PropTypes.string,
};

TextAreaCounter.defaultProps = {
    text: ''
};

export default adapt(TextAreaCounter)