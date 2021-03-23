import { Controller, Get, Param } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Get(':id')
  getLesson(@Param('id') id: number): LessonDto {
    return this.lessonService.fetchLesson(id);
  }
}
