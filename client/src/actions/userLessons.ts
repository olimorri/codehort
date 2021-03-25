import { getUserLesson } from '../lib/apiService';
import { IUserLesson, IUserLessonAction, SET_USER_LESSON } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLesson() {
  return function (dispatch: Dispatch<IUserLessonAction>): void {
    getUserLesson('04475702-97e7-45ac-806d-6e3b36ea7679').then((userLesson) => {
      //TODO: this only works because of userID- this needs to be a variable
      dispatch(setUserLesson(userLesson));
    });
  };
}

export function setUserLesson(userLesson: IUserLesson): IUserLessonAction {
  return {
    type: SET_USER_LESSON,
    payload: userLesson,
  };
}
