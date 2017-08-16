import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/src/jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
