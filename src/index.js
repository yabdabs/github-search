import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddlware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App';
import rootReducer from './reducers'

import './styles/index.css';

// import * as serviceWorker from './serviceWorker';

//pass in initial state? study create store and Provider
const store = createStore(rootReducer, {}, composeWithDevTools(
    applyMiddleware(promiseMiddlware())
))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
