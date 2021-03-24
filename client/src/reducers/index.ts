import { ILessonState, SET_LESSON, AppActions } from '../interfaces';

const initialState: ILessonState = {
  lesson: { name: '', numberOfTasks: 0 },
};

function reducer(state = initialState, action: AppActions): ILessonState {
  switch (action.type) {
    case SET_LESSON:
      return { ...state, lesson: action.payload };
  }
  return state;
}

export default reducer;
