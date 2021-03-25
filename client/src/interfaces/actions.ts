import { ILesson, IUser, IUserLesson } from '.';

export const SET_LESSON = 'SET_LESSON';
export const SET_USER = 'SET_USER';
export const SET_USER_LESSONS = 'SET_USER_LESSONS';

export interface ILessonAction {
  type: typeof SET_LESSON;
  payload: ILesson;
}

export interface IUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export interface IUserLessonsAction {
  type: typeof SET_USER_LESSONS;
  payload: IUserLesson[];
}

export type AppActions = ILessonAction | IUserAction | IUserLessonsAction;
