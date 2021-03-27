import { IUserState, SET_USER, AppActions } from '../interfaces';

const initialState: IUserState = {
  user: { id: '', username: '', email: '', userRewards: [] },
};

function userReducer(state = initialState, action: AppActions): IUserState {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
  }
  return state;
}

export default userReducer;
