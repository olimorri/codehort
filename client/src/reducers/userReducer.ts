import { IUser } from '../interfaces/user';
import { SET_USER, AppActions } from '../interfaces/actions';

type initialLessonState = {
  user: IUser;
};

const initialState: initialLessonState = {
  user: { id: '', username: '', email: '' },
};

//TODO: need to update the type of state in this example
function userReducer(state = initialState, action: AppActions): initialLessonState {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
  }
  return state;
}

export default userReducer;
