import { PayloadAction } from '@reduxjs/toolkit';
import { ILesson } from '../interfaces/lesson';
import { IUser } from '../interfaces/user';
import { IUserLesson } from '../interfaces/userLesson';

type initialState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUser;
  lessons: ILesson[];
  userLesson: IUserLesson[];
};

const initialState: initialState = {
  isLoggedIn: false,
  isLoading: true,
  user: { id: '', username: '', password: '', email: '' },
  lessons: [],
  userLesson: [],
};

//TODO: need to update the type of state in this example
function userLessonReducer(state = initialState, action: PayloadAction): any {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
  }
  return state;
}

export type RootState = ReturnType<typeof userLessonReducer>;

export default userLessonReducer;
