import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { lessonReducer, userReducer, userLessonReducer } from '../reducers';

export const rootReducer = combineReducers({
  lesson: lessonReducer,
  user: userReducer,
  userLesson: userLessonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
