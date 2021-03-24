import { getLesson } from '../lib/apiService';
import { ILesson, ILessonAction, SET_LESSON } from '../interfaces';
import { Dispatch } from 'react';

export function fetchLesson() {
  return function (dispatch: Dispatch<ILessonAction>): void {
    getLesson().then((lesson) => {
      console.log(lesson);

      dispatch(setLesson(lesson));
    });
  };
}

export function setLesson(lesson: ILesson): ILessonAction {
  return {
    type: SET_LESSON,
    payload: lesson,
  };
}
