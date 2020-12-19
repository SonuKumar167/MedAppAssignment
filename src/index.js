import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Services/Reducers/index'
import reportWebVitals from './reportWebVitals';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store=createStore(rootReducer)
ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
