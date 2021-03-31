import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public() // TODO: remove for production
  @Post('create-lesson')
  async createLesson(@Body() newLesson): Promise<string> {
    return await this.appService.createLesson(newLesson);
  }
}
