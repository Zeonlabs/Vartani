import Test from "./Reducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
export default createStore(
  combineReducers({ Test }),
  {}, // Set Default state or initial state if needed else set blank as it is.
  compose(
    applyMiddleware(thunk) // added middleware which need through out process or action.
  )
);
