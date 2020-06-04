import {rootReducer} from "./src/reducers/root";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk));