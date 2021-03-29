import {
  HttpCode,
  Post,
  UseGuards,
  Request,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guards';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Public()
  @Post('register')
  async register(@Body() newUser: UserDto): Promise<{ user: User; access_token: string }> {
    try {
      newUser = await this.userService.createUser({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      });
      const user = new User();
      Object.assign(user, newUser);
      const access_token = await this.authService.login(user); // authenticate after creating new user for immediate login
      // TODO: if we have time, find better solution for this
      user.password = undefined;
      user.email = undefined;
      return { user, access_token };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('User could not be saved');
    }
  }

  @Public() // make publicly accessible (without jwt)
  @UseGuards(LocalAuthGuard) // protect with username and password validation
  @Post('login')
  @HttpCode(200)
  async login(@Request() req): Promise<{ user: User; access_token: string }> {
    console.log(req.user);
    const access_token = await this.authService.login(req.user); // returns the token
    const user = await this.userService.getUserInfo(req.user.username);
    // TODO: if we have time, find better solution for this
    user.password = undefined;
    user.email = undefined;
    return { user, access_token };
  }
}
