import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greeting';

const rootReducer = combineReducers(
  {
    greetingMessage: greetingReducer,
  },
);
const store = configureStore({ reducer: rootReducer });
export default store;