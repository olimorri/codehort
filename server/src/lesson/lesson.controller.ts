import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Post()
  async createLesson(@Body() newLesson: LessonDto): Promise<string> {
    await this.lessonService.createLesson({ ...newLesson });
    return 'lesson saved';
  }

  @Get(':id')
  async getLesson(@Param('id') id: number): Promise<LessonDto> {
    return await this.lessonService.fetchLesson(id);
  }
}
