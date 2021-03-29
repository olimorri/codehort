import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.getUserInfo(username);
    const isPasswordCorrect = await bcrypt.compare(pass, user.password);

    if (isPasswordCorrect) {
      const thisUser = new User();
      Object.assign(thisUser, user);

      return thisUser;
    }
    throw new UnauthorizedException();
  }

  async login(user: User): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
