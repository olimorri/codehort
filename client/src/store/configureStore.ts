import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import { lessonReducer, lessonListReducer, userReducer, userLessonReducer } from '../reducers';
import { AppActions } from '../interfaces';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'isAuthenticated'],
};

export const rootReducer = combineReducers({
  lesson: lessonReducer,
  lessonList: lessonListReducer,
  user: userReducer,
  userLessons: userLessonReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
// );

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);

export const persistor = persistStore(store);
