import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('create-lesson')
  async createLesson(@Body() newLesson): Promise<string> {
    return await this.appService.createLesson(newLesson);
  }
}
