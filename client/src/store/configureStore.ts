import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
// import userReducer from '../reducers/user';

export const rootReducer = combineReducers({
  lesson: reducer,
  // user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
