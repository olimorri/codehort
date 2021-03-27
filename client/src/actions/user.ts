import {
  IAuthenticatedAction,
  IUser,
  IUserAction,
  SET_AUTHENTICATED,
  SET_USER,
} from '../interfaces';
import { Dispatch } from 'react';
import { userLogin } from '../lib/apiService';

export function fetchUser(username: string, password: string) {
  // return function (dispatch: Dispatch<IUserAction>): void {
  //   userLogin(username, password).then((user) => {
  //     dispatch(setUser(user));
  //   });
  // };
}

export function setUser(user: IUser): IUserAction {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setAuthenticated(isAuthenticated: boolean): IAuthenticatedAction {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated,
  };
}
