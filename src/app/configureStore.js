import { combineReducers, createStore } from "redux";
import alarm from "../features/alarm";
import clock from "../features/clock";

const reducer = combineReducers({
  alarm,
  clock,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
