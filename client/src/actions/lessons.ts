import { getLesson } from '../lib/apiService';
import { ILesson } from '../interfaces/lesson';
import { Dispatch } from 'react';
import { SET_LESSON } from '../reducers/actionTypes';

interface ILessonAction {
  type: string;
  payload: ILesson;
}

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
