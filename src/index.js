import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {AuthProvider} from './components/AuthContext.jsx';
import {AuthContext} from './components/AuthContext.jsx';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
