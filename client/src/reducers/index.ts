import { PayloadAction } from '@reduxjs/toolkit';
import { ILesson } from '../interfaces/lesson';
import { IUser } from '../interfaces/user';
import { IUserLesson } from '../interfaces/userLesson';

type initialState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: any;
  lessons: ILesson[];
  userLesson: IUserLesson[];
};

const initialState: any = {
  isLoggedIn: false,
  isLoading: true,
  // user: { id, username, password, email },
  user: {},
  lessons: [],
  userLesson: [],
};

//TODO: need to update the type of state in this example
function reducer(state = initialState, action: PayloadAction): any {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
  }
  return state;
}

// type RootState = ReturnType<typeof reducer>;

export default reducer;
