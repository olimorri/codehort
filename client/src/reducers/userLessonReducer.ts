import { IUserLesson } from '../interfaces/userLesson';
import { SET_USER_LESSON, AppActions } from '../interfaces/actions';

type initialLessonState = {
  userLesson: IUserLesson;
};

const initialState: initialLessonState = {
  userLesson: { userId: '', lessonId: 0, stepsCompleted: 0 },
};

//TODO: need to update the type of state in this example
function userLessonReducer(state = initialState, action: AppActions): initialLessonState {
  switch (action.type) {
    case SET_USER_LESSON:
      return { ...state, userLesson: action.payload };
  }
  return state;
}

export default userLessonReducer;
