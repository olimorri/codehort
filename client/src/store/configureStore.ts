import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import { lessonReducer, userReducer, userLessonReducer } from '../reducers';
import { AppActions } from '../interfaces';

export const rootReducer = combineReducers({
  lesson: lessonReducer,
  user: userReducer,
  userLessons: userLessonReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
