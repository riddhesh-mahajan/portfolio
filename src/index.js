import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeConfig from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode >,
  document.getElementById('root')
);
