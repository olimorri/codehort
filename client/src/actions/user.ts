import {
  IAuthenticatedAction,
  IUser,
  IUserAction,
  ITokenAction,
  SET_AUTHENTICATED,
  SET_USER,
  SET_TOKEN,
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

export function setToken(token: string | null): ITokenAction {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}
