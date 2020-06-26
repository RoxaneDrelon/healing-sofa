import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createLogger } from "redux-logger"
import { applyMiddleware, compose } from "redux";
import reducer from './reducer'
import DevTools from './components/DevTools'
import { transitions, positions, Provider as AlertProvider, types } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import drugNameReducer from "./reducers/drugNameReducer";
import drugTimeReducer from "./reducers/drugTimeReducer";
import drugHowReducer from "./reducers/drugHowReducer";
import drugQuantityReducer from "./reducers/drugQuantityReducer";

const logger = createLogger()



const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
  type: types.SUCCESS,
};

const rootReducer = combineReducers({
  drugName: drugNameReducer,
  drugTime: drugTimeReducer,
  how: drugHowReducer,
  quantity: drugQuantityReducer,
});

const initialState = {
  counter: { count: 0 },
  drugName: { name: "" },
  drugTime: { time: "", dateStart: "", dateEnd: "" },
  how: { text: "" },
  quantity: { quantity1: 0, quantity2: 0, quantity3: 0 },
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
