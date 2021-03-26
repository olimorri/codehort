import { Controller, Body, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.schema';
import { LocalAuthGuard } from './auth/local-auth.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create-lesson')
  async createLesson(@Body() newLesson): Promise<string> {
    return await this.appService.createLesson(newLesson);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<User> {
    return req.user;
  }
}
