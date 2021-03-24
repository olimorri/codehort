import { ILesson, IUser, IUserLesson } from '.';

export const SET_LESSON = 'SET_LESSON';
export const SET_USER = 'SET_USER';
export const SET_USER_LESSON = 'SET_USER_LESSON';

export interface ILessonAction {
  type: typeof SET_LESSON;
  payload: ILesson;
}

export interface IUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export interface IUserLessonAction {
  type: typeof SET_USER_LESSON;
  payload: IUserLesson;
}

export type AppActions = ILessonAction | IUserAction | IUserLessonAction;
