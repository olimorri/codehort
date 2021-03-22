import { Injectable } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dt';

@Injectable()
export class LessonService {
  // TEMPORARY lesson db
  lessons: LessonDto[] = [
    {
      name: 'express',
      summary: 'express lesson summary',
      solution: 'this will be the solution',
      tasks: 'The tasks will go here',
      numOfTasks: 10,
    },
    {
      name: 'koa',
      summary: 'express lesson summary',
      solution: 'this will be the solution',
      tasks: 'The tasks will go here',
      numOfTasks: 8,
    },
  ];

  fetchLesson(name: string) {
    return this.lessons.find((lesson) => lesson.name === name);
  }
}
