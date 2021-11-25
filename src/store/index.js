import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducer from './reducers';

const reducer = combineReducers({ Reducer });

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
