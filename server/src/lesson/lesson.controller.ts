import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Post()
  async createLesson(@Body() newLesson: LessonDto): Promise<LessonDto> {
    newLesson = await this.lessonService.createLesson({ ...newLesson });
    return newLesson;
  }

  @Get(':id')
  async getLesson(@Param('id') id: number): Promise<LessonDto> {
    return await this.lessonService.fetchLesson(id);
  }
}
