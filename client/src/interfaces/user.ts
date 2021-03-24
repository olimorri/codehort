import { IUserLesson } from './userLesson';

export interface IUser {
  id: string;
  username: string;
  password?: string;
  email: string;
  userLessons?: IUserLesson[];
}
