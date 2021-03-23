import { Controller, Get, Param } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dt';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Get(':name')
  getLesson(@Param('name') name: string): LessonDto {
    return this.lessonService.fetchLesson(name);
  }
}
