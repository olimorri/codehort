import { IUserLessonState, SET_USER_LESSON, AppActions } from '../interfaces';

const initialState: IUserLessonState = {
  userLesson: { userId: '', lessonId: 0, stepsCompleted: 0 },
};

function userLessonReducer(state = initialState, action: AppActions): IUserLessonState {
  switch (action.type) {
    case SET_USER_LESSON:
      return { ...state, userLesson: action.payload };
  }
  return state;
}

export default userLessonReducer;
