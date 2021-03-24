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
    const newLesson = await this.lessonService.fetchLesson(id);
    newLesson.task.sort((a, b) => (a.step >= b.step ? 1 : -1));

    newLesson.task.forEach((task) => {
      if (task.hints?.length > 1) {
        task.hints.sort((a, b) => (a.title >= b.title ? 1 : -1));
      }
    });

    newLesson.task.forEach((task) => {
      if (task.summaries?.length > 1) {
        task.summaries.sort((a, b) => (a.id >= b.id ? 1 : -1));
      }
    });

    return newLesson;
  }
}
