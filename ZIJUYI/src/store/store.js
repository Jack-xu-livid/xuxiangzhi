import { createStore,compose  } from "redux";
import allReducer from "../reducers/index.js";
let store=createStore(allReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :undefined));
export default store;