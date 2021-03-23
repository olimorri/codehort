import { Injectable } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonService {
  // TEMPORARY lesson db
  lessons: LessonDto[] = [
    {
      id: 1,
      name: 'express',
      summary: 'express lesson summary',
      numberOfTasks: 5,
      solutionId: 1,
      tasks: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      name: 'koa',
      summary: 'express lesson summary',
      numberOfTasks: 4,
      solutionId: 2,
      tasks: [6, 7, 8, 9],
    },
  ];

  fetchLesson(id: number) {
    return this.lessons.find((lesson) => lesson.id === Number(id));
  }
}
