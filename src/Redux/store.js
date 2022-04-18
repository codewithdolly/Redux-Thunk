import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./Reducers/index";
import thunk from "redux-thunk";

//redux thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  Reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))    //compose enhancer and Middleware
);

export default store;
