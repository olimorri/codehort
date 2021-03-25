import { getUser } from '../lib/apiService';
import { IUser, IUserAction, SET_USER } from '../interfaces';
import { Dispatch } from 'react';

export function fetchUser() {
  return function (dispatch: Dispatch<IUserAction>): void {
    getUser('colin').then((user) => {
      //TODO: this only works because of username- this needs to be a variable
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
