import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  @Post('/register')
  register(@Body() createUserDto: CreateUserDto): string {
    return createUserDto.username;
  }

  @Post('login')
  login(): string {
    return 'You have logged in. Hello!';
  }

  @Post('logout')
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
