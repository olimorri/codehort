import { IUserLesson } from '.';

export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  userLessons?: IUserLesson[];
}
