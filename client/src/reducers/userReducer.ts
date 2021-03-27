import { IUserState, SET_AUTHENTICATED, SET_USER, AppActions } from '../interfaces';

const initialState: IUserState = {
  user: { id: '', username: '', email: '', userRewards: [] },
  isAuthenticated: false,
};

function userReducer(state = initialState, action: AppActions): IUserState {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
  }
  return state;
}

export default userReducer;
