import { getLessonList } from '../lib/apiService';
import { ILessonList, ILessonListAction, SET_LESSON_LIST } from '../interfaces';
import { Dispatch } from 'react';

export function fetchLessonList() {
  return function (dispatch: Dispatch<ILessonListAction>): void {
    getLessonList().then((lessonList) => {
      dispatch(setLessonList(lessonList));
    });
  };
}

export function setLessonList(lessonList: ILessonList[]): ILessonListAction {
  return {
    type: SET_LESSON_LIST,
    payload: lessonList,
  };
}
