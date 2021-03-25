import { ILesson, IUser, IUserLesson } from '.';

export interface ILessonState {
  lesson: ILesson;
  isLoading: boolean;
}

export interface IUserState {
  user: IUser;
}

export interface IUserLessonState {
  userLesson: IUserLesson;
}
