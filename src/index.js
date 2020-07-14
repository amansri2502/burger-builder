import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import burgerBuilderReducer from "./redux-store/burgerBuilderReducer"
import{createStore,applyMiddleware, compose,combineReducers}from 'redux';
import orderReducer from './redux-store/orderReducer'

//combining reducers
const rootReducer=combineReducers({
  burgerBuilder:burgerBuilderReducer,
  orders:orderReducer
})

axios.defaults.baseURL = "https://burger-7ef9.firebaseio.com/";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  //Provider should wrap everything
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
