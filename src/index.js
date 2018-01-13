import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import './css/bootstrap-grid.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
