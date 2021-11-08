import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './components/GlobalStyle';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();
