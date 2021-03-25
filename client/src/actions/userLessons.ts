import { getUserLessons, updateUserLessonProgress } from '../lib/apiService';
import { IUserLesson, IUserLessonsAction, SET_USER_LESSONS } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons() {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons('c688a7c2-805a-45ac-9fa8-e9ce5c57e197').then((userLessons) => {
      //TODO: this only works because of userID- this needs to be a variable
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function updateUserLessons(userId: string, lessonId: number, stepCompleted: number) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    console.log(stepCompleted, 'updateUse.. 1');
    updateUserLessonProgress(userId, lessonId, stepCompleted).then((userLessons) => {
      console.log(stepCompleted, 'updateUse.. 2');
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
