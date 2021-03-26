import { getUserLessons, updateUserLessonProgress } from '../lib/apiService';
import { IUserLesson, IUserLessonsAction, SET_USER_LESSONS } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons(userId: string) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons(userId).then((userLessons) => {
      //TODO: this only works because of userID- this needs to be a variable
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function updateUserLessons(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number
) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    console.log(stepCompleted, 'updateUse.. 1');
    updateUserLessonProgress(userId, lessonId, stepCompleted, lessonTitle, totalLessonSteps).then(
      (userLessons) => {
        console.log(stepCompleted, 'updateUse.. 2');
        dispatch(setUserLessons(userLessons));
      }
    );
  };
}

export function setUserLessons(userLessons: IUserLesson[]): IUserLessonsAction {
  return {
    type: SET_USER_LESSONS,
    payload: userLessons,
  };
}
