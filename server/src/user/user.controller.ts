import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  @Post('/register')
  register(@Body() createUserDto: CreateUserDto): string {
    return createUserDto.username;
  }

  @Post('login')
  @HttpCode(200)
  login(): string {
    return 'You have logged in. Hello!';
  }

  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
