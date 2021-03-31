import { Lesson } from 'src/lesson/lesson.schema';
import { UserReward } from 'src/user-rewards/userReward.schema';

export class UserDto {
  id: string;
  username: string;
  password: string;
  email: string;
  userRewards: UserReward[];
  lessons?: Lesson[];
}
