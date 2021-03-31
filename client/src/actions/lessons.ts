import { getLesson } from '../lib/apiService';
import { ILesson, ILessonAction, SET_LESSON } from '../interfaces';
import { Dispatch } from 'react';

export function fetchLesson(lessonId: number) {
  return function (dispatch: Dispatch<ILessonAction>): void {
    getLesson(lessonId).then((lesson) => {
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
