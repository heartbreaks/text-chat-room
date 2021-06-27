import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {reducer} from './reducer/reducer';
import {applyMiddleware, createStore, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
  log: 'info',
});

const store = createStore(reducer, compose(applyMiddleware(
    thunk, logger,
)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat-window'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
