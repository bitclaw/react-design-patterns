import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App txt="This is the props text" cat={5}/>, document.getElementById('root'));
registerServiceWorker();
