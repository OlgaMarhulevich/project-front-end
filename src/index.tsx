import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {App} from "./app/App";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <App/>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
