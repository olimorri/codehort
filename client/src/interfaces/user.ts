import { IUserLesson, IUserReward } from '.';

export interface IUser {
  id: string;
  username: string;
  password?: string;
  email: string;
  userLessons?: IUserLesson[];
  userRewards?: IUserReward[];
}
