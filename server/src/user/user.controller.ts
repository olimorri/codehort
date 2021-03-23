import { Controller, Post, Get, Param, Body, HttpCode } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() newUser: UserDto): Promise<UserDto> {
    newUser = await this.userService.createUser({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
    return newUser;
  }

  // @Post('login')
  // @HttpCode(200)
  // login(@Body() user: UserDto): string {
  //   return this.userService.loginUser(user.username, user.password);
  // }

  @Get('profile/:username')
  async getProfile(@Param('username') username: string): Promise<UserDto> {
    return await this.userService.getUserInfo(username);
  }

  // @Post('logout')
  // @HttpCode(200)
  // logout(): string {
  //   return 'You have logged out. Goodbye';
  // }
}
