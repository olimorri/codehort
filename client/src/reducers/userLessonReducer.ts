import { IUserLessonsState, ADD_USER_LESSON, SET_USER_LESSONS, AppActions } from '../interfaces';

const initialState: IUserLessonsState = {
  userLessons: [],
};

function userLessonReducer(state = initialState, action: AppActions): IUserLessonsState {
  switch (action.type) {
    case SET_USER_LESSONS:
      return { ...state, userLessons: action.payload };
    case ADD_USER_LESSON:
      return { ...state, userLessons: [...state.userLessons, action.payload] };
  }
  return state;
}

export default userLessonReducer;
