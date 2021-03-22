import { Controller, Post, Get, Param, Body, HttpCode } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() newUser: UserInfoDto): UserInfoDto {
    newUser = this.userService.createUser(newUser.username, newUser.password);
    return newUser;
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() user: UserInfoDto): string {
    return this.userService.loginUser(user.username, user.password);
  }

  @Get('profile/:id')
  getProfile(@Param('id') id: string): any {
    return this.userService.getUserProfile(id);
  }

  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
