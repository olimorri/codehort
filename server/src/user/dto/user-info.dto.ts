export class UserInfoDto {
  id: string;
  username: string;
  email: string;
  password: string;
  lessons?: string[];
  rewardsUnlocked?: string;
}
