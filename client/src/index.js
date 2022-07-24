import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './custom.scss';

import registerServiceWorker from './registerServiceWorker';
import store from './store/store.js';
const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>,
);

registerServiceWorker();
