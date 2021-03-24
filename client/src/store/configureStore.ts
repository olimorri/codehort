import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import lessonReducer from '../reducers/lessonReducer';
import userReducer from '../reducers/userReducer';
// import userReducer from '../reducers/user';

export const rootReducer = combineReducers({
  lesson: lessonReducer,
  user: userReducer,
  // user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
