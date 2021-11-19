import { Provider } from "react-redux";
import storeRedux from "./redux/index";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

