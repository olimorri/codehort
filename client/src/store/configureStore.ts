import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
// import userReducer from '../reducers/user';
import { AppActions } from '../interfaces/actions';

export const rootReducer = combineReducers({
  lesson: reducer,
  // user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
