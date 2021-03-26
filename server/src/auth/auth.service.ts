import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.getUserInfo(username);
    if (user && user.password === pass) {
      const thisUser = new User();
      Object.assign(thisUser, user);

      return thisUser;
    }
    return null;
  }
}
