import {
  IAuthenticatedAction,
  IUser,
  IUserAction,
  ITokenAction,
  SET_AUTHENTICATED,
  SET_USER,
  SET_TOKEN,
  ADD_USER_REWARD,
  IUserReward,
  IAddUserRewardAction,
} from '../interfaces';
import { addUserReward } from '../lib/apiService';
import { Dispatch } from 'react';

export function addNewReward(lessonId: number, userId: string) {
  return function (dispatch: Dispatch<IAddUserRewardAction>): void {
    addUserReward(lessonId, userId).then((reward) => {
      dispatch(addReward(reward));
    });
  };
}

export function addReward(reward: IUserReward): IAddUserRewardAction {
  return {
    type: ADD_USER_REWARD,
    payload: reward,
  };
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
