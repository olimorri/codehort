import { IUser, IUserAction, SET_USER } from '../interfaces';
import { Dispatch } from 'react';
import { userLogin } from '../lib/apiService';

export function fetchUser(username: string, password: string) {
  return function (dispatch: Dispatch<IUserAction>): void {
    userLogin(username, password).then((user) => {
      dispatch(setUser(user));
    });
  };
}

export function setUser(user: IUser): IUserAction {
  return {
    type: SET_USER,
    payload: user,
  };
}
