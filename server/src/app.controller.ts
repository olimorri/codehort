import { Controller, Body, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guards';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Post('create-lesson')
  async createLesson(@Body() newLesson): Promise<string> {
    return await this.appService.createLesson(newLesson);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test/profile')
  getLesson(@Request() req) {
    console.log(req.user);
    // return req.user;
    return this.userService.getUserInfo(req.user.payload.username);
  }
}
