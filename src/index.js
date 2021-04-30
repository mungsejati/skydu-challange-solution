import "./assets/main.scss";

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import FinancialStatement from "./pages/FinancialStatement";


ReactDOM.render(
  <React.StrictMode>
    <FinancialStatement />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
