import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  // TEMPORARY task db
  tasks: TaskDto[] = [
    {
      name: 'import express',
      step: 1,
      explanation: 'import express to use it',
      test: 'test',
      hints: 'i am a hint',
      answer: 'this is an answer',
      summary: 'in conclusion...',
    },
  ];

  fetchTask(name: string) {
    return this.tasks.find((task) => task.name === name);
  }
}
