import { getUserLessons, updateUserLessonProgress } from '../lib/apiService';
import { IUserLesson, IUserLessonsAction, SET_USER_LESSONS } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons(userId: string) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons(userId).then((userLessons) => {
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function updateUserLessons(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number,
  userCode: string
) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    updateUserLessonProgress(
      userId,
      lessonId,
      stepCompleted,
      lessonTitle,
      totalLessonSteps,
      userCode
    ).then((userLessons) => {
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function setUserLessons(userLessons: IUserLesson[]): IUserLessonsAction {
  return {
    type: SET_USER_LESSONS,
    payload: userLessons,
  };
}
