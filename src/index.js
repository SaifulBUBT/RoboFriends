import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//for import tachyons library from node modules. install tachyons by npm install tachyons. 
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
