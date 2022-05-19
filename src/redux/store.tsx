import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import amountReducer from "./reducer";

const reducers = combineReducers({
  amountReducer,
});

let store = createStore(reducers, composeWithDevTools());

export default store;
