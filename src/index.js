import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
