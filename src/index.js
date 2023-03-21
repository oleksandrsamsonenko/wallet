import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';

import './shared/styles/styles.scss';
import './shared/styles/normalize.scss';
import './shared/styles/container.scss';
import './shared/styles/picture-styles-log-sign.scss';
import './shared/styles/react-toastify.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
