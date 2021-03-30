import { ILesson, ILessonList, IUser, IUserLesson } from '.';

export const ADD_USER_LESSON = 'ADD_USER_LESSON';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LESSON = 'SET_LESSON';
export const SET_LESSON_LIST = 'SET_LESSON_LIST';
export const SET_USER = 'SET_USER';
export const SET_USER_LESSONS = 'SET_USER_LESSONS';
export const SET_USER_LESSON = 'SET_USER_LESSON';

export interface IAuthenticatedAction {
  type: typeof SET_AUTHENTICATED;
  payload: boolean;
}

export interface ITokenAction {
  type: typeof SET_TOKEN;
  payload: string | null;
}

export interface ILessonAction {
  type: typeof SET_LESSON;
  payload: ILesson;
}

export interface ILessonListAction {
  type: typeof SET_LESSON_LIST;
  payload: ILessonList[];
}

export interface IUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export interface IUserLessonsAction {
  type: typeof SET_USER_LESSONS;
  payload: IUserLesson[];
}
export interface IAddUserLessonAction {
  type: typeof ADD_USER_LESSON;
  payload: IUserLesson;
}

export interface IUserLessonAction {
  type: typeof SET_USER_LESSON;
  payload: IUserLesson;
}

export type AppActions =
  | IAddUserLessonAction
  | IAuthenticatedAction
  | ITokenAction
  | ILessonAction
  | ILessonListAction
  | IUserAction
  | IUserLessonsAction
  | IUserLessonAction;
