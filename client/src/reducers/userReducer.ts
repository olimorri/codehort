import { IUserState, SET_AUTHENTICATED, SET_USER, SET_TOKEN, AppActions } from '../interfaces';

const initialState: IUserState = {
  user: { id: '', username: '', userRewards: [] },
  isAuthenticated: false,
  token: localStorage.getItem('access_token'),
};

function userReducer(state = initialState, action: AppActions): IUserState {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
  }
  return state;
}

export default userReducer;
