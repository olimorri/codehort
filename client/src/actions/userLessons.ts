import { getUserLesson } from '../lib/apiService';
import { IUserLesson, IUserLessonAction, SET_USER_LESSON } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLesson() {
  return function (dispatch: Dispatch<IUserLessonAction>): void {
    getUserLesson('994b1f29-204c-4db2-b796-b9b135f6509b').then((userLesson) => {
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
