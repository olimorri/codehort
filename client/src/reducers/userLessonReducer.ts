import {
  IUserLessonsState,
  ADD_USER_LESSON,
  SET_USER_LESSONS,
  SET_USER_LESSON,
  AppActions,
} from '../interfaces';

const initialState: IUserLessonsState = {
  userLessons: [],
  userLesson: {
    id: 0,
    userId: 'xyz',
    lessonId: 0,
    stepCompleted: 0,
    lessonTitle: 'xyz',
    totalLessonSteps: 0,
  },
};

function userLessonReducer(state = initialState, action: AppActions): IUserLessonsState {
  switch (action.type) {
    case SET_USER_LESSONS:
      return { ...state, userLessons: action.payload };
    case ADD_USER_LESSON:
      return { ...state, userLessons: [...state.userLessons, action.payload] };
    case SET_USER_LESSON:
      return { ...state, userLesson: action.payload };
  }
  return state;
}

export default userLessonReducer;
