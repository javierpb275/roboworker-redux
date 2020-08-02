import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//It allows us to provide our App with redux and pass down the store to our App
import { createStore, applyMiddleware } from 'redux';//It allows us to create a store (javascript object that describes our app)
import { createLogger } from 'redux-logger';//it listens to our action and log them in the console so we can debug easily
import thunkMiddleware from 'redux-thunk';// handle asynchronous actions (like when we do fetch('http...) )
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchProduct } from './reducers';

//const store = createStore(rootReducer);//rootReducer: reducer of our app where we combine all our reducers (createStore(): This is the way we create a store[state])

const logger = createLogger();
const store = createStore(searchProduct, applyMiddleware(thunkMiddleware, logger));//since we only have one reducer for now we just add searchProduct reducer
//applyMidlleware is used to add it as a second parameter when we create the store and tell it what middleware we want to use.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
