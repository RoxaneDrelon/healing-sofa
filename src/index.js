import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import { createLogger } from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import DevTools from './components/DevTools'

const logger = createLogger()

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(logger),
    DevTools.instrument()
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
