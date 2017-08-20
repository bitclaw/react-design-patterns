import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {currentEvent: '----'};
        this.update = this.update.bind(this);
    }

    update (event) {
        this.setState({currentEvent: event.type});
    }

    render() {
        return (
            <div>
                <textarea
                    cols="30"
                    rows="10"
                    onPaste={this.update}
                    onCut={this.update}
                    onCopy={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onKeyPress={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default App;