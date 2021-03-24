import { getLesson } from '../lib/apiService';
import { ILesson } from '../interfaces';
import { Dispatch } from 'react';
import { SET_LESSON, ILessonAction } from '../interfaces/actions';

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
