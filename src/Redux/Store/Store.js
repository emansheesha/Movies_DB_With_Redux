import { applyMiddleware, createStore } from "redux";
import { Reducer } from "../Reducer/Reducer";
import thunk from 'redux-thunk';
export const Store= createStore(Reducer,applyMiddleware(thunk));
