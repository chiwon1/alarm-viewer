import { combineReducers, createStore } from "redux";
import alarm from "../features/alarm";
import clock from "../features/clock";

const reducer = combineReducers({
  alarm,
  clock,
});

const store = createStore(reducer);

export default store;
