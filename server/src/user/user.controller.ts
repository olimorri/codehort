import { Controller, Post, Get, Param, Body, HttpCode } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() newUser: UserDto): UserDto {
    newUser = this.userService.createUser(newUser.username, newUser.email, newUser.password);
    return newUser;
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() user: UserDto): string {
    return this.userService.loginUser(user.username, user.password);
  }

  @Get('profile/:id')
  getProfile(@Param('id') id: string): UserDto {
    return this.userService.getUserInfo(id);
  }

  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
