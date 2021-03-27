import { ILessonListState, SET_LESSON_LIST, AppActions } from '../interfaces';

const initialState: ILessonListState = {
  lessonList: [],
};

function lessonListReducer(state = initialState, action: AppActions): ILessonListState {
  switch (action.type) {
    case SET_LESSON_LIST:
      return { ...state, lessonList: action.payload };
  }
  return state;
}

export default lessonListReducer;
