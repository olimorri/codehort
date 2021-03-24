import { getLesson } from '../lib/apiService';
import { ILesson } from '../interfaces';
import { Dispatch } from 'react';
import { SET_LESSON, ILessonAction } from '../interfaces/actions';

export function fetchLesson() {
  return function (dispatch: Dispatch<ILessonAction>): void {
    getLesson(1).then((lesson) => {
      //TODO: this only works because of number - this needs to be a variable
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
