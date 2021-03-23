import { Lesson } from 'src/lesson/lesson.schema';

export class UserInfoDto {
  id: string;
  username: string;
  password: string;
  email: string;

  lessons?: Lesson[];
}
