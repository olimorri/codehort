import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import userLessonReducer from '../reducers/userLessons';
import { userReducer } from '../reducers/user';
import { AppActions } from '../interfaces/actions';

export const rootReducer = combineReducers({
  userLessons: userLessonReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
