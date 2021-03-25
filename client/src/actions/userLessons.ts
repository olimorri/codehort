import { getUserLessons } from '../lib/apiService';
import { IUserLesson, IUserLessonsAction, SET_USER_LESSONS } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons() {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons('04475702-97e7-45ac-806d-6e3b36ea7679').then((userLessons) => {
      //TODO: this only works because of userID- this needs to be a variable
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
