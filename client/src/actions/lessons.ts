import { getLesson } from '../lib/apiService';

export function fetchLesson() {
  return function (dispatch) {
    getLesson().then((lesson) => {
      dispatch(setLesson(lesson));
    });
  };
}

export function setLesson(lesson) {
  return {
    type: 'SET_LESSON',
    payload: lesson,
  };
}
