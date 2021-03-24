import { ILesson, IUser } from '.';

export const SET_LESSON = 'SET_LESSON';
export const SET_USER = 'SET_USER';

export interface ILessonAction {
  type: typeof SET_LESSON;
  payload: ILesson;
}

export interface IUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export type AppActions = ILessonAction | IUserAction;
