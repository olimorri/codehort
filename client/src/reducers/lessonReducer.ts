import { ILesson } from '../interfaces/lesson';
import { SET_LESSON, AppActions } from '../interfaces/actions';

type initialLessonState = {
  lesson: ILesson;
};

const initialState: initialLessonState = {
  lesson: { name: '', numberOfTasks: 0 },
};

//TODO: need to update the type of state in this example
function lessonReducer(state = initialState, action: AppActions): initialLessonState {
  switch (action.type) {
    case SET_LESSON:
      return { ...state, lesson: action.payload };
  }
  return state;
}

export default lessonReducer;
