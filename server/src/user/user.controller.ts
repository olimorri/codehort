import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('/register')
  register(): string {
    return 'Registration complete. Welcome aboard!';
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
