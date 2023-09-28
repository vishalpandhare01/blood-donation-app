import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/reducerapi";

const rootreducers = combineReducers({
     reducer
})

export const store = legacy_createStore(rootreducers, applyMiddleware(thunk));
