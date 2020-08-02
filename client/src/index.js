import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';//They allow us to connect the 2 parts of our app (react with redux)
import { createStore } from 'redux';//It allows us to create a store (javascript object that describes our app)
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchProduct } from './reducers';

//const store = createStore(rootReducer);//rootReducer: reducer of our app where we combine all our reducers (createStore(): This is the way we create a store[state])

const store = createStore(searchProduct);//since we only have one reducer for now we just add searchProduct reducer

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
