import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { LessonService } from './lesson.service';
import { Task } from '../task/task.schema';
import { Hint } from '../hint/hint.schema';
import { Summary } from '../summary/summary.schema';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Post()
  async createLesson(@Body() newLesson: LessonDto): Promise<string> {
    try {
      await this.lessonService.createLesson({ ...newLesson });
      return 'lesson saved';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lesson could not be saved');
    }
  }

  @Get(':id') // returns entire lesson object, including data from associated tables
  async getLesson(@Param('id') id: number): Promise<LessonDto> {
    const newLesson = await this.lessonService.fetchLesson(id);
    this.sort(newLesson.task, 'step');

    newLesson.task.forEach((task) => {
      this.sort(task.hints, 'title');
    });

    newLesson.task.forEach((task) => {
      this.sort(task.summaries, 'id');
    });
    if (!newLesson) throw new NotFoundException(`Lesson of id ${id} could not be found`);
    return newLesson;
  }

  /* Helper functions */
  sort(arr: Hint[] | Summary[] | Task[], sortBy: string) {
    try {
      if (arr?.length > 1)
        arr.sort((a: Hint | Summary | Task, b: Hint | Summary | Task) =>
          a[sortBy] >= b[sortBy] ? 1 : -1
        );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
