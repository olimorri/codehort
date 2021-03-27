import { ILesson, ILessonList, IUser, IUserLesson } from '.';

export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_LESSON = 'SET_LESSON';
export const SET_LESSON_LIST = 'SET_LESSON_LIST';
export const SET_USER = 'SET_USER';
export const SET_USER_LESSONS = 'SET_USER_LESSONS';

export interface IAuthenticatedAction {
  type: typeof SET_AUTHENTICATED;
  payload: boolean;
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

export type AppActions =
  | IAuthenticatedAction
  | ILessonAction
  | ILessonListAction
  | IUserAction
  | IUserLessonsAction;
