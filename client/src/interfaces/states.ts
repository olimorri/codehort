import { ILesson, ILessonList, IUser, IUserLesson } from '.';

export interface ILessonState {
  lesson: ILesson;
}

export interface ILessonListState {
  lessonList: ILessonList[];
}

export interface IUserState {
  user: IUser;
  isAuthenticated: boolean;
}

export interface IUserLessonsState {
  userLessons: IUserLesson[];
}
