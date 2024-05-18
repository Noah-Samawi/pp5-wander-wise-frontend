import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { GlobalMessageProvider } from './contexts/GlobalMessageContext';

ReactDOM.render(
  <Router>
    <CurrentUserProvider>
      <GlobalMessageProvider>
        <App />
      </GlobalMessageProvider>
    </CurrentUserProvider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
