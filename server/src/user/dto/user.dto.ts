import { Lesson } from 'src/lesson/lesson.schema';

export class UserDto {
  id: string;
  username: string;
  password: string;
  email: string;

  lessons?: Lesson[];
}
