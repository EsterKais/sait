import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './Services/registerServiceWorker';

import App from './App/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
