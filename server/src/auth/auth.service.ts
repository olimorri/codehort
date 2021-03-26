import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.getUserInfo(username);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const { password, ...result } = user;
      // return result;
      const thisUser = new User();
      thisUser.id = user.id;
      thisUser.username = user.username;
      thisUser.password = user.password;
      thisUser.email = user.email;

      return thisUser;
    }
    return null;
  }
}
