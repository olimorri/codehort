export class UserDto {
  id: string;
  username: string;
  password: string;
  email: string;

  lessons?: number[];
}
