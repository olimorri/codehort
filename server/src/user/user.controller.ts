import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  register(@Body() newUser: CreateUserDto): CreateUserDto {
    this.userService.createUser(newUser.username, newUser.password);
    console.log(this.userService.users);
    return newUser;
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() user: CreateUserDto): string {
    return this.userService.loginUser(user.username, user.password);
  }

  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
