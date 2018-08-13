import {combineReducers } from 'redux';
import authorReducer from './authorReducers';
import todoReducer from './todoReducers';

export default combineReducers({
    author: authorReducer,
    todo: todoReducer
});